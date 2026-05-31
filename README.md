# English Family Lab

Mobile-first PWA for Vietnamese learners to practice English vocabulary, grammar, spaced review, streaks, goals, and level tracking.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy free

- Cloudflare Pages: recommended for this static PWA. Build command: none. Output folder: project root.
- Netlify: drag this folder into Netlify Drop or connect a Git repo. Build command: none.
- GitHub Pages: push the folder contents to a Pages-enabled repo.

## Deploy on a VM

```bash
docker build -t english-family-lab .
docker run -p 8080:80 english-family-lab
```

Open `http://YOUR_VM_IP:8080`.

## Dictionary API

The app calls `https://api.dictionaryapi.dev/api/v2/entries/en/<word>` from the browser and caches successful results in local storage.

## Data storage

Progress, saved words, streaks, and settings are stored in the browser with `localStorage`.
