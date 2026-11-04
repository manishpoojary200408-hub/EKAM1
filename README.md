# EKAM — Luxury Black & Cream Creative Agency Website

A visually stunning, modern, premium, and fully responsive landing page for **EKAM**, an independent luxury creative branding and digital agency.

Re-imagined with a high-end **monochromatic Black & Cream visual identity**, inspired by European luxury editorial publications, high-fashion ateliers, and the cinematic dark aesthetics of **Yatharth Social**.

---

## 🎨 Luxury Color Palette

- **Primary Black:** `#080706`
- **Deep Black:** `#11100E`
- **EKAM Logo Cream:** `#F8F0E4`
- **Soft Cream:** `#F5EBDD`
- **Secondary Cream:** `#E9DFD0`
- **Typography:** *Syne* (bold architectural headlines), *Cormorant Garamond* (luxury italic editorial accents), and *Plus Jakarta Sans* (refined modern body copy).

---

## 🏛️ Section-by-Section Visual Architecture

1. **Navbar**
   - Deep Black background (`#080706`/90 with backdrop blur).
   - Cream typographic **EKAM** wordmark with glowing cream studio dot.
   - Cream navigation links and cream **"Let's Talk ↗"** CTA button with shimmer animation.
   - Mobile navigation drawer in full-screen deep black & cream.

2. **Hero Section**
   - Full-screen Deep Black background (`#11100E`).
   - Oversized cream typography:
     ```
     WE BUILD
     BRANDS / THAT
     MEAN business.
     ```
   - Highlight word *"MEAN"* set in bold cream badge and *"business"* set in italic *Cormorant Garamond* luxury serif.
   - Abstract 3D composition with delicate cream spinning wireframe rings, rotating geometric diamond, and glowing central emblem.
   - Dual CTAs: Cream `"Start a Project ↗"` button & Dark Cream-bordered `"Explore Our Services"`.
   - Cream animated scroll indicator.

3. **Marquee Ticker**
   - Deep Black (`#080706`) background with cream typography and delicate cream `✦` separators.

4. **01 / About EKAM Section**
   - Warm Cream background (`#F5EBDD`) with deep black typography (`#080706`).
   - Minimal editorial styling, methodology graphic box with core pillars.
   - Interactive link: `"MORE ABOUT EKAM ↗"` which opens the **Agency Manifesto Modal** in black & cream.
   - Agency metrics ticker (48+ Projects, 98% Retention, 14+ Awards, $180M+ Value Generated).

5. **02 / Services Section**
   - Alternating Deep Black background (`#11100E`) with cream accordion rows.
   - Monochromatic cream numbering (`01` through `05`), titles, and descriptions.
   - Interactive expansion reveals a Warm Cream (`#F5EBDD`) detail card with deep black typography, deliverables checklist, engagement timeline, and direct inquiry trigger.

6. **03 / Selected Work (Portfolio)**
   - Warm Cream background (`#F5EBDD`) with deep black typography and black-framed project cards.
   - Six curated demonstration projects across fashion, audio engineering, architecture, clean tech, urban mobility, and botanicals.
   - Category filter pills in black & cream.
   - Interactive hover cards with magnetic zoom and cream view pill.
   - In-depth **Case Study Modal** in deep black & cream with problem, solution, deliverables, and impact metrics.

7. **04 / Why EKAM Section**
   - Deep Black background (`#11100E`) with cream typography.
   - Three principles (`01 — Think Strategically`, `02 — Create Fearlessly`, `03 — Grow Together`).
   - Subtle cream borders, cream icons, and non-traditional promise comparison banner.

8. **05 / Contact Section**
   - Black background (`#080706`) with cream typography.
   - Direct channel card for `hello@ekam.com` with 1-click clipboard copy, Instagram, and LinkedIn placeholders.
   - Project briefing form with cream borders, service category selector pills, and cream CTA button `"SEND INQUIRY ↗"`.
   - Client-side validation, loading state, celebratory champagne & cream confetti (`canvas-confetti`), and thank-you confirmation card.

9. **Minimal Premium Footer**
   - Black background (`#080706`) with cream **EKAM** wordmark.
   - Brand statement, navigation directory, social links, copyright (`© 2026 EKAM. All Rights Reserved.`).
   - Smooth **Back to Top** interaction with animated arrow.

10. **Interactive Agency Touches**
    - Custom magnetic cream cursor on desktop with spring physics.
    - Grain texture overlay (`.bg-noise`) for tactile finish.
    - 100% responsive across desktop, tablet, and mobile breakpoints.

---

## 💻 Running the Project

### Option 1: Quick Launch Script
Run either of these from PowerShell in `d:\EKAM`:
```powershell
.\start.cmd
# or:
.\dev.ps1
```

### Option 2: Standard Command
```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path; npm run dev
```
Then visit **`http://localhost:3000`** in your browser.

To produce a production build:
```powershell
cmd.exe /c "npm.cmd run build"
```
*(Compiled successfully into `dist/` with zero errors).*
