# 🌿 Grahor Usluge - Web Stranica

Profesionalna web stranica za **Grahor Usluge** - obrt za održavanje dvorišta, vrtova i voćnjaka u Zagrebu.

## 🚀 Brzi start

### 1. Instalacija
```bash
npm install
```

### 2. Pokretanje razvoja
```bash
npm run dev
```
Stranica će biti dostupna na `http://localhost:3000`

### 3. Build za produkciju
```bash
npm run build
npm start
```

## 📁 Struktura projekta
```
app/
├── page.js          # Glavna stranica
├── layout.js        # Meta tagovi, fontovi, SEO
├── globals.css      # Stilovi i animacije
└── savjeti/
    └── page.js      # Q&A podstranica (60+ pitanja)

public/
├── images/
│   └── logo.png     # Logo tvrtke
├── manifest.json    # PWA manifest
├── robots.txt       # SEO
└── sitemap.xml      # SEO
```

## 🌐 Deployment na Vercel

### Opcija 1: Preko GitHub-a (preporučeno)
1. Kreiraj GitHub repozitorij
2. Push-aj kod:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TVOJ-USERNAME/grahor-usluge.git
git push -u origin main
```
3. Idi na [vercel.com](https://vercel.com)
4. Klikni "Import Project" → odaberi repo
5. Deploy!

### Opcija 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 🔧 DNS postavke (Namecheap)

Ako imaš vlastitu domenu:
1. U Namecheap DNS postavkama dodaj:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
2. U Vercel-u dodaj domenu u Settings → Domains

## 📝 TODO prije launcha
- [ ] Zamijeniti Web3Forms API key u kontakt formi
- [ ] Zamijeniti email s klijentovim
- [ ] Dodati slike projekata u `/public/images/`
- [ ] Dodati Facebook/Instagram linkove
- [ ] Testirati kontakt formu
- [ ] Provjeriti mobile verziju

## 🎨 Boje (iz loga)
- Primary: `#2D5A27` (zelena)
- Primary Dark: `#1B3A1B` (tamno zelena)
- Primary Light: `#4A7A3F` (svijetlo zelena)
- WhatsApp: `#25D366`
