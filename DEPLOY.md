# Git + public website (hosting)

This repo is the **`anything`** monorepo. The course site lives in **`apps/web`**.

---

## 1) Push the whole `anything` folder to GitHub

On your PC (Git must be installed):

```powershell
cd "c:\Users\vishn\Downloads\anything (2)\anything"
git init
git add .
git commit -m "Initial commit: AI Tutoring Blueprint"
git branch -M main
git remote add origin https://github.com/lol1234532/ai.git
git push -u origin main
```

If `origin` already exists:

```powershell
git remote set-url origin https://github.com/lol1234532/ai.git
git push -u origin main
```

Your repo: [https://github.com/lol1234532/ai](https://github.com/lol1234532/ai)

---

## 2) Host a real URL (Vercel — recommended)

1. Sign in at [https://vercel.com](https://vercel.com).
2. **Add New… → Project → Import** the GitHub repo `lol1234532/ai`.
3. Set **Root Directory** to **`apps/web`** (important).
4. Framework: **React Router** if Vercel offers it; otherwise **Other** with:
   - **Install:** `npm install`
   - **Build:** `npm run build`
   - **Start / Output:** follow Vercel’s React Router / Node app detection (see docs below).
5. **Environment variables:** this template’s server may expect **`DATABASE_URL`** (and other auth-related vars). If the build or runtime fails, add the same variables you use locally in `apps/web/.env`, or use placeholder values only for a read-only marketing build after you trim server code.

Official reference: [Vercel — React Router](https://vercel.com/docs/frameworks/react-router)

After deploy, Vercel gives you a URL like `https://your-project.vercel.app`.

---

## 3) Netlify (alternative)

Netlify also supports React Router / Vite monorepos with a **root** of `apps/web`. Create a site from GitHub, set **base directory** to `apps/web`, install `npm install`, build `npm run build`, and use Netlify’s React Router / SSR guidance:

- [Netlify + Vite SSR overview](https://docs.netlify.com/build/frameworks/framework-setup-guides/)

---

## 4) Local production smoke test

```powershell
cd "path\to\anything\apps\web"
npm install
npm run build
npm run start
```

Then open the URL printed in the terminal (often `http://localhost:3000` for `react-router-serve`).

---

## Notes

- **GitHub** holds code; **Vercel/Netlify** serves the live site.
- `npm run build` runs a **Node** server bundle for SSR/prerender; it is not a “drag-and-drop `build/` folder to static hosting only” app without extra adapter work.
- If **`npm run build` hangs**, set **`DATABASE_URL`** in `apps/web/.env` to a valid connection string so the server can boot during prerender (see your project’s `.env` / Neon setup).
