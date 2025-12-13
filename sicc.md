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
- **Primary**: `public/favicon.ico` - Main favicon (ICO format)
- **Fallback**: `public/favicon.png` - PNG fallback for modern browsers
- **HTML Reference**: `/favicon.ico` (primary), `/favicon.png` (fallback)
- **Formats**: ICO (primary), PNG (fallback)

### Public Assets
All files in `public/` directory are served from root:
- `/favicon.ico` - Primary favicon
- `/favicon.png` - Fallback favicon (PNG format)
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
├── favicon.ico
├── favicon.png
├── sitemap.xml
├── robots.txt
└── [other public assets]
```

## Important Notes

### Favicon Issue Resolution
- Primary favicon: `public/favicon.ico` must exist
- Fallback favicon: `public/favicon.png` must exist
- HTML references `/favicon.ico` as primary and `/favicon.png` as fallback
- If favicon doesn't show, clear browser cache or hard refresh (Ctrl+F5)

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
1. Check if `favicon.ico` exists in `public/` directory
2. Check if `favicon.png` exists in `public/` directory (fallback)
3. Clear browser cache or hard refresh (Ctrl+F5)
4. Verify files are copied to `dist/` after build

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
- **Favicon**: favicon.ico (primary), favicon.png (fallback)


