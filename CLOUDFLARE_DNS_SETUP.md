# Cloudflare DNS Setup Guide for nexaflow-digital.com

> Follow these steps to connect your custom domain to Netlify.

---

## Step 1: Add Domain in Netlify (Do This FIRST)

1. Go to: https://app.netlify.com/sites/nexaflow-weeb/settings/domain
2. Under **"Custom domains"**, click **"Add custom domain"**
3. Enter: `nexaflow-digital.com`
4. Click **Verify** → Netlify will show it as " awaiting external DNS"
5. Also add: `www.nexaflow-digital.com` (Netlify will redirect it to the apex)

---

## Step 2: Configure DNS in Cloudflare

1. Go to: https://dash.cloudflare.com/b13230b085c309b1a749c642d09f888f/nexaflow-digital.com/dns/records
2. Click **"Add record"** and create these:

### Required DNS Records

| Type | Name (Host) | Target / Value | TTL | Proxy Status |
|------|------------|----------------|-----|-------------|
| **A** | `@` (apex/root) | `75.2.60.5` | Auto | **DNS only** (gray cloud) |
| **A** | `www` | `75.2.60.5` | Auto | **DNS only** (gray cloud) |

> **Important:** Set the orange cloud to **gray** (DNS only) for Netlify. If you proxy through Cloudflare (orange cloud), Netlify's certificate provisioning may fail.

---

## Step 3: Enable SSL in Netlify

1. In Netlify: Site settings → Domain management → HTTPS
2. Netlify should auto-provision an SSL certificate once DNS propagates (usually 5–30 minutes)
3. If not, click **"Renew certificate"**

---

## Step 4: Force HTTPS (Recommended)

1. In Netlify: Site settings → Domain management → HTTPS
2. Enable **"Force HTTPS"** — this redirects all HTTP traffic to HTTPS

---

## Step 5: Verify Everything Works

After DNS propagates (check with https://dnschecker.org):

```
https://nexaflow-digital.com        → Should show your site
https://www.nexaflow-digital.com    → Should redirect to apex
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "Domain not configured" | Double-check the A record points to `75.2.60.5` |
| SSL certificate pending | Wait 15–30 min, then click "Renew certificate" in Netlify |
| Cloudflare shows 526 error | Make sure proxy status is **DNS only** (gray cloud) |
| www not redirecting | Ensure both A records exist, or use a CNAME for www |

---

## Why These Records?

- **75.2.60.5** is Netlify's global load balancer IP
- Using **A records** (not CNAME) for the apex domain is required because CNAMEs can't exist at the root
- Keeping Cloudflare in **DNS only** mode avoids SSL certificate conflicts with Netlify's auto-provisioning

---

*Setup guide created June 1, 2026*
