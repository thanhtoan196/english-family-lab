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

## Optional Supabase sync

Create a Supabase project, then run this SQL in the Supabase SQL editor:

```sql
create table if not exists public.learning_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.learning_states enable row level security;

create policy "Users can read their own learning state"
on public.learning_states for select
using (auth.uid() = user_id);

create policy "Users can insert their own learning state"
on public.learning_states for insert
with check (auth.uid() = user_id);

create policy "Users can update their own learning state"
on public.learning_states for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
```

In the app, open Settings, paste the Supabase project URL and anon key, enter your email, then send a login link. After login, use "Save to cloud" and "Load from cloud".

## Writing check

The writing checker calls the public LanguageTool API:

```text
https://api.languagetool.org/v2/check
```
