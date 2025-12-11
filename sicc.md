# SICC Website - Build Truth

## Project Information
- **Project Name**: South India Civil Contractors (SICC) Website
- **Domain**: https://southindiacivilcontractor.com
- **Repository**: https://github.com/bconclub/sicc.git
- **Build Tool**: Vite 7.2.4
- **Framework**: React 19.2.0 with TypeScript

## Build Configuration

### Build Command
```bash
npm run build
```

### Build Process
1. TypeScript compilation: `tsc -b`
2. Vite build: `vite build`
3. Output directory: `dist/`

### Build Output
- All static assets from `public/` are copied to `dist/`
- React app is bundled and optimized
- Source maps are generated for debugging

## Deployment

### Deployment Platform
- **Hosting**: Hostinger
- **Deployment Method**: GitHub Actions + FTP
- **Server Directory**: `/domains/southindiacivilcontractor.com/public_html/`

### Deployment Workflow
- **Trigger**: Push to `main` branch
- **Workflow File**: `.github/workflows/deploy.yml`
- **Steps**:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies (`npm ci`)
  4. Build project (`npm run build`)
  5. Deploy to Hostinger via FTP

### FTP Configuration
- Uses GitHub Secrets:
  - `FTP_SERVER`
  - `FTP_USERNAME`
  - `FTP_PASSWORD`

## Static Assets

### Favicon/Icon
- **Location**: `public/icon.png` and `src/app/icon.png`
- **HTML Reference**: `/icon.png?v=3`
- **Formats**: PNG
- **Note**: Icon should be in both `public/` (for build) and `src/app/` (for framework compatibility)

### Public Assets
All files in `public/` directory are served from root:
- `/icon.png` - Favicon
- `/favicon.png` - Legacy favicon (kept for compatibility)
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots file
- `/Light.svg` - Light logo
- `/Dark.svg` - Dark logo
- `/Hero Video.mp4` - Hero section video
- `/project-photos/` - Project photo galleries
- `/brand-logos/` - Partner brand logos

## Environment

### Node.js Version
- **Required**: Node.js 20
- **Package Manager**: npm

### Dependencies
- React 19.2.0
- React Router DOM 7.9.6
- Framer Motion 12.23.24
- Tailwind CSS 4.1.17
- TypeScript 5.9.3
- Vite 7.2.4

## Build Artifacts

### Output Structure
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── icon.png
├── favicon.png
├── sitemap.xml
├── robots.txt
└── [other public assets]
```

## Important Notes

### Favicon Issue Resolution
- Icon file must exist in both `public/icon.png` and `src/app/icon.png`
- HTML references `/icon.png?v=3` (version bump for cache busting)
- If favicon doesn't show, increment version number in `index.html`

### Cache Busting
- Favicon uses query parameter: `?v=3`
- Increment version when updating favicon to force browser refresh

### Sitemap
- Location: `public/sitemap.xml`
- Last updated: 2025-12-09
- Referenced in `index.html` and `robots.txt`
- Includes all pages including `/thank-you`

### Form Submissions
- **Webhook URL**: `https://build.goproxe.com/webhook/southindiacivilcontractors`
- **Method**: POST
- **Format**: FormData
- **Fields**: name, phone, email, location, projectType, source
- **Redirect**: `/thank-you` page after submission

## Development

### Local Development
```bash
npm install
npm run dev
```
- Server runs on: `http://localhost:5173`

### Preview Build
```bash
npm run build
npm run preview
```

## Troubleshooting

### Favicon Not Showing
1. Check if `icon.png` exists in `public/` directory
2. Verify `src/app/icon.png` exists
3. Increment version number in `index.html` (e.g., `?v=4`)
4. Clear browser cache or hard refresh (Ctrl+F5)
5. Verify file is copied to `dist/` after build

### Build Issues
1. Ensure Node.js 20 is installed
2. Run `npm ci` for clean install
3. Check TypeScript errors: `tsc -b`
4. Verify all dependencies are installed

### Deployment Issues
1. Check GitHub Actions workflow logs
2. Verify FTP credentials in GitHub Secrets
3. Ensure build completes successfully before FTP deploy
4. Check server directory permissions

## Last Updated
- **Date**: 2025-12-10
- **Build Version**: Current
- **Favicon Version**: v3


