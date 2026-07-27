# voint-landing

**Voint**-in ictimai landing səhifəsi — Next.js 15 (App Router) + TypeScript + Tailwind v4.

Panellərdən fərqli olaraq bu səhifə **işıqlı rejimdədir** (ağ fon, qara mətn) və yaşıl
`#39FF14` yalnız aksent kimi işlədilir.

Mənbə dizayn: [`Voint Landing.dc.html`](./Voint%20Landing.dc.html) — Claude design canvas
faylı, referans üçün repo-da saxlanılır, build-ə girmir.

## İşə salma

```bash
npm install
npm run dev      # http://localhost:3000
```

Digər əmrlər: `npm run build`, `npm start`, `npm run typecheck`.

## Mühit dəyişənləri

`.env.example`-ı `.env.local`-a kopyala. Hamısı `NEXT_PUBLIC_` prefiksi ilədir, yəni
**build zamanı koda yazılır** — dəyişəndən sonra yenidən build lazımdır.

| Dəyişən | Nə üçün |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical, sitemap, hreflang, OG |
| `NEXT_PUBLIC_API_BASE_URL` | pilot formunun getdiyi backend; boş olsa form göndərilmir |
| `NEXT_PUBLIC_PANEL_URL` | nav-dakı "Panelə giriş" linki |

## Struktur

```
src/
├── app/
│   ├── (az)/layout.tsx + page.tsx      →  /
│   ├── (en)/layout.tsx + en/page.tsx   →  /en
│   ├── (ru)/layout.tsx + ru/page.tsx   →  /ru
│   ├── sitemap.ts, robots.ts
│   └── globals.css                      (Tailwind @theme tokenləri)
├── components/                          (Nav, Hero, Platform, PanelPreview,
│                                         Boundaries, Pricing, PilotForm, Footer)
├── i18n/                                (az.ts mənbə, en.ts / ru.ts fallback)
└── lib/                                 (site.ts, metadata.ts)
```

Hər dilin **öz root layout-u** var ki, `<html lang>` statik və düzgün olsun.
Üç səhifənin hamısı statik prerender olunur (`○ Static`) — server render gözləmir.

### Dillər

`az.ts` mənbə dildir. `en.ts` və `ru.ts` **hələ tərcümə edilməyib** — struktur, marşrut,
`hreflang` və dil keçidi işləyir, sadəcə mətnlər azərbaycancadır. Tərcümə etmək üçün
`az.ts`-in obyektini uyğun fayla kopyalayıb dəyərləri dəyişmək kifayətdir; açar strukturu
dəyişsə TypeScript xəta verir.

## Nə çatmır

- `public/og.png` (1200×630) və `favicon.ico` — hazırlanandan sonra `lib/metadata.ts`-dəki
  `images` blokunu aç
- Hero videosu **müvəqqəti Pexels stok materialıdır** (`lib/site.ts`). Real video hazır
  olanda `public/hero.mp4`-ə qoyub oradakı iki sabiti dəyişmək lazımdır — uzaq host
  LCP-ni gecikdirir
- Backend-də CORS: `landing-voint.sarkhan.az` origin-i serverdə
  `VOINT_CORS_ALLOWED_ORIGINS`-ə əlavə olunmalıdır, yoxsa brauzer formu bloklayır

## Serverdə quraşdırma

Landing `landing-voint.sarkhan.az` ünvanında, Docker içində **3091** portunda işləyir
(`127.0.0.1`-ə bağlı — serverdə başqa layihələr də var, portlara toxunma).

Bunlar serverdə **bir dəfə** əl ilə edilməlidir:

```bash
# 1. Repo
cd /opt/voint && git clone https://github.com/TheSarKhan/voint-landing.git landing

# 2. Image + container
cd /opt/voint/landing
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://landing-voint.sarkhan.az \
  --build-arg NEXT_PUBLIC_API_BASE_URL=https://voint.sarkhan.az \
  --build-arg NEXT_PUBLIC_PANEL_URL=https://voint.sarkhan.az \
  -t voint-landing .
docker run -d --name voint-landing --restart unless-stopped \
  -p 127.0.0.1:3091:3000 voint-landing
```

3. Host nginx-də yeni server bloku:

```nginx
server {
    listen 80;
    server_name landing-voint.sarkhan.az;

    location / {
        proxy_pass http://127.0.0.1:3091;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Sonra `certbot --nginx -d landing-voint.sarkhan.az` və DNS-də A qeydi
`landing-voint` → `173.249.54.197`.

4. `/opt/voint/deploy.sh`-a landing bloku əlavə olunmalıdır (git pull + docker build +
   restart), əks halda GitHub Actions deploy job-u işləyəcək, amma landing yenilənməyəcək.

### GitHub secret

Repo-ya `SSH_KEY` secret-i əlavə edilməlidir (`Settings → Secrets and variables →
Actions`) — dəyəri `~/.ssh/voint_vps` faylının tam məzmunudur. voint-panel və
voint-admin repolarında da eyni adla bu secret var.
