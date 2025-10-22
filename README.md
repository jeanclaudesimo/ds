# DigitalSolutions Website

Eine professionelle, moderne Website für DigitalSolutions - gebaut mit Next.js 15, TypeScript und Tailwind CSS.

## 🚀 Features

- **Next.js 15** mit App Router und Server Components
- **TypeScript** für Type-Safety
- **Tailwind CSS v4** für modernes Styling
- **Framer Motion** für flüssige Animationen
- **Responsive Design** - optimiert für alle Geräte
- **SEO-optimiert** mit Metadata, Sitemap und Robots.txt
- **Dark Theme** mit Gradient-Akzenten
- **Performance-optimiert** mit statischer Generierung

## 🛠️ Installation & Development

### Voraussetzungen

- Node.js 18+ installiert
- npm

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Build für Production

```bash
# Production Build erstellen
npm run build

# Production Build starten
npm start
```

## 📄 Seiten

- **/** - Homepage mit Hero, Features, Stats und CTA
- **/services** - Detaillierte Service-Angebote mit Preisen
- **/portfolio** - Projekt-Showcase mit Filter-Funktion
- **/about** - Unternehmensinfo, Team, Werte und Timeline
- **/contact** - Kontaktformular und Informationen

## 🎨 Design System

### Farben

- **Background**: `#0a0a0a` (Schwarz)
- **Primary**: `#3b82f6` (Blau)
- **Secondary**: `#8b5cf6` (Lila)
- **Accent**: `#06b6d4` (Cyan)

### Typografie

- **Sans-Serif**: Geist Sans
- **Monospace**: Geist Mono

## 🔧 Anpassungen

### Kontaktinformationen ändern

Bearbeiten Sie `/components/layout/Footer.tsx` und `/app/contact/page.tsx`

### Farben anpassen

Bearbeiten Sie `/app/globals.css`:

```css
:root {
  --primary: #ihre-farbe;
  --secondary: #ihre-farbe;
}
```

## 📊 SEO

Die Website ist vollständig SEO-optimiert:

- ✅ Meta Tags (Title, Description, Keywords)
- ✅ Open Graph Tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ PWA Manifest
- ✅ Semantisches HTML

## 🚀 Deployment

### Vercel (Empfohlen)

```bash
npm i -g vercel
vercel
```

Das Projekt kann auch auf Netlify, AWS Amplify, Cloudflare Pages oder eigenem Server deployed werden.

## 📝 License

© 2024 DigitalSolutions. Alle Rechte vorbehalten.

---

**Built with ❤️ by DigitalSolutions**
