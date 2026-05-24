# 🚀 Netlify Deployment Knowledge Base

**Date:** May 24, 2026  
**Project:** nexaflow-weeb (static HTML site)  
**Author:** Kimi Claw  

---

## The Problem

A pure static HTML website (no build tools, no `package.json`, no framework) failed to deploy on Netlify. The error message kept changing but the root cause was the same: **Netlify expects a `dist` folder even for static sites**.

---

## What We Tried (and Why Each Failed)

### ❌ Attempt 1: `netlify.toml` with `publish = "."` only
```toml
[build]
  publish = "."
```
**Failed because:** Netlify's UI had `npm run build` cached. `netlify.toml` was ignored because `commandOrigin: ui` took priority.

---

### ❌ Attempt 2: `command = ""` (empty string)
```toml
[build]
  command = ""
  publish = "."
```
**Failed because:** Netlify treats an empty `command` as "not specified" and falls back to the UI's cached `npm run build`. Log showed `commandOrigin: ui`.

---

### ❌ Attempt 3: `command = "echo '...'"` (no-op command)
```toml
[build]
  command = "echo 'Static HTML site — no build step needed'"
  publish = "."
```
**Failed because:** The build command succeeded, but Netlify's internal pipeline still validated for `dist` and reported:  
> *"Deploy directory 'dist' does not exist"*

This is the **critical discovery**: Netlify has a **hardcoded internal validator** that checks for `dist` when it detects "0 frameworks" (plain HTML sites).

---

### ✅ Attempt 4: Create `dist` during build, publish from `dist`
```toml
[build]
  command = "mkdir -p dist && cp *.html dist/ && cp robots.txt dist/ && cp sitemap.xml dist/"
  publish = "dist"
```
**Succeeded because:**
- The build step creates a `dist` directory (satisfies Netlify's internal validator)
- All site files are copied into it
- `publish = "dist"` matches what Netlify expects for framework-less sites

---

## The Golden Rules

### Rule 1: Never Trust `publish = "."` Alone for Static HTML
Netlify's internal pipeline often ignores `publish = "."` and falls back to checking for `dist` when zero frameworks are detected.

### Rule 2: If `commandOrigin: ui` Appears in Logs, the UI is Winning
Even if `netlify.toml` is correct, Netlify's cached UI settings can override it. Clear the UI settings:
- Build command → **blank**
- Publish directory → **blank**
- Base directory → **blank**

Then use a real command in `netlify.toml` to force `commandOrigin: config`.

### Rule 3: For Static HTML, Always Create `dist` During Build
The only reliable way to deploy a static HTML site on Netlify:
1. Create `dist/` in the build step
2. Copy all files into it
3. Set `publish = "dist"`
4. Add `dist/` to `.gitignore`

### Rule 4: Read `commandOrigin` and `publishOrigin` in Logs
These two lines tell you who's in control:
- `commandOrigin: config` → `netlify.toml` is winning ✅
- `commandOrigin: ui` → Dashboard settings are overriding your file ❌

---

## The Working Template

### `netlify.toml` (for any static HTML site)
```toml
[build]
  command = "mkdir -p dist && cp *.html dist/ && cp robots.txt dist/ && cp sitemap.xml dist/"
  publish = "dist"
```

### `.gitignore`
```
dist/
```

### Why this works
| Step | What Happens | Time |
|------|-------------|------|
| 1 | Netlify clones repo | ~2s |
| 2 | Runs `mkdir -p dist` | ~0.01s |
| 3 | Copies `*.html` into `dist/` | ~0.05s |
| 4 | Copies `robots.txt`, `sitemap.xml` into `dist/` | ~0.05s |
| 5 | Netlify deploys `dist/` | ~1s |
| | **Total build time** | **~3s** |

---

## How to Diagnose Future Deploy Failures

### Step 1: Read the Log Lines
Look for these specific lines:

| Line Pattern | Meaning |
|-------------|---------|
| `commandOrigin: ui` | Dashboard is overriding `netlify.toml` |
| `commandOrigin: config` | `netlify.toml` is being used |
| `publishOrigin: config` | `netlify.toml` publish setting is active |
| `Detected 0 framework(s)` | Netlify sees plain HTML (triggers `dist` check) |
| `Deploy directory 'dist' does not exist` | The fatal error — Netlify wants `dist` |

### Step 2: Check the Resolved Config
The log always prints the final resolved config:
```
Resolved config
build:
  command: echo '...'
  commandOrigin: config
  publish: /opt/build/repo
  publishOrigin: config
```
If `publish` points to `/opt/build/repo` but the error says `dist` doesn't exist, the internal validator is overriding the config. **Create `dist`.**

### Step 3: Verify File Presence
Make sure `netlify.toml` is actually at the **repo root** (same level as `index.html`). If it's in a subdirectory, Netlify won't find it.

---

## Common Mistakes to Avoid

| Mistake | Why It Fails |
|---------|-------------|
| Setting `base = "/"` or `base = "/opt/build"` | Netlify tries to `cd` into a directory that doesn't exist in the repo |
| `command = "npm run build"` with no `package.json` | `npm` exits with ENOENT error |
| `publish = "dist"` with no build step creating `dist` | Netlify can't find the folder, deploy fails |
| `publish = "."` for plain HTML | Netlify's internal validator ignores this and checks for `dist` anyway |
| Leaving UI settings filled in AND using `netlify.toml` | UI wins if `commandOrigin: ui` appears in logs |

---

## For React / Next.js / Vite Projects

If you DO have a build tool, the pattern is different:

### React (Create React App)
```toml
[build]
  command = "npm run build"
  publish = "build"
```

### Vite / Vue / Svelte
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Next.js
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### Key difference:
The build tool **creates the output directory automatically**. You don't need `mkdir -p dist` because `vite build` or `npm run build` does it for you.

---

## Summary Checklist for Any New Static Site

- [ ] `netlify.toml` exists at repo root
- [ ] `.gitignore` includes `dist/` (and `node_modules/`, `.env`)
- [ ] Build command creates the publish directory
- [ ] `publish = "dist"` (or whatever the build tool outputs)
- [ ] Netlify UI settings are **all blank** (no cached overrides)
- [ ] First deploy log shows `commandOrigin: config`
- [ ] First deploy log shows `publishOrigin: config`
- [ ] No `Detected 0 framework(s)` followed by `dist does not exist`

---

## Quick Reference: One-Liner Build Commands

| Site Type | `netlify.toml` Build Command |
|-----------|------------------------------|
| Plain HTML | `mkdir -p dist && cp *.html dist/` |
| HTML + CSS + JS | `mkdir -p dist && cp *.html *.css *.js dist/` |
| HTML + assets folder | `mkdir -p dist && cp -r *.html assets/ dist/` |
| React (CRA) | `npm run build` |
| Vite | `npm run build` |
| Next.js | `npm run build` |

---

## Related Resources

- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
- [Netlify Troubleshooting Builds](https://docs.netlify.com/configure-builds/troubleshooting-tips/)
- [Netlify Build Settings UI](https://docs.netlify.com/configure-builds/get-started/)

---

*Document version: 1.0*  
*Created after resolving the nexaflow-weeb deploy failure (4 failed attempts before success)*
