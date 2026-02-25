# sethmsparks.com

Personal site for Seth M. Sparks — built with React + Vite + React Router.

## Stack
- React 18
- React Router 6
- Vite 5
- Hosted on GitHub Pages with a custom domain

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About + Education |
| `/portfolio` | Portfolio |
| `/speaking` | Public Speaking (booking) |
| `/voice` | Voice Acting (samples + hire) |
| `/resume` | Resume / CV |
| `/blog` | Blog |
| `/elsewhere` | vlogwithseth, PresentShock, socials |
| `/contact` | Contact |

## Local Development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### With custom domain (sethmsparks.com)
1. `vite.config.js` has `base: '/'` — leave it as is
2. Push to GitHub, enable Pages in repo Settings → Pages → GitHub Actions
3. Add a `CNAME` file to `/public/` containing `sethmsparks.com`
4. Point your domain DNS to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `yourusername.github.io`

### Without custom domain (username.github.io/repo)
1. Change `base` in `vite.config.js` to `'/your-repo-name/'`
2. Push to GitHub, enable Pages → GitHub Actions

## Voice Acting Samples
Add your audio files to `/public/audio/` and update the `src` values in `src/pages/Voice.jsx`.

## Resume PDF
Add your resume PDF to `/public/` as `seth-sparks-resume.pdf`.
