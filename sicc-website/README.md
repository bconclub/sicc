# South India Civil Contractors (SICC) Website

A modern, professional website for South India Civil Contractors showcasing their 25+ years of construction excellence.

## 🏗️ About

South India Civil Contractors (SICC) has been building spaces for life since 1998. This website showcases their comprehensive civil contracting services, impressive portfolio, and commitment to quality construction.

## ✨ Features

- **Modern Design**: Clean, professional UI with brand colors (Mystic Navy, Red Inferno, Mother of Pearl, Chocolate Cremoso)
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Timeline**: Vertical scrollable timeline showcasing 25+ years of company history
- **Advanced Filtering**: Floor plans and project galleries with search and filter functionality
- **Lightbox Gallery**: Image gallery with full-screen lightbox view
- **Contact Form**: Interactive contact form with validation
- **WhatsApp Integration**: Floating WhatsApp button for instant contact

## 📄 Pages

1. **Home** - Hero section, company overview, stats, project types, testimonials
2. **About Us** - Company story, values, milestones, team overview, certifications
3. **Services** - 11 contractor service types with 20-point labor contract package
4. **Technical Specifications** - Quality standards, materials, methodologies, safety protocols
5. **Work Timeline** - Interactive vertical timeline from 1998 to 2025
6. **Assets & Manpower** - Team details and equipment showcase
7. **Floor Plans** - Searchable and filterable floor plan gallery
8. **Project Photos** - Photo gallery with category filters and lightbox
9. **Project Videos** - Video gallery with category filters
10. **Contact** - Contact form, business information, and map

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Lucide React** - Icons

## 🎨 Brand Colors

```css
Mother of Pearl: #F5EBD7
Red Inferno: #4C2828
Mystic Navy: #1B3A52
Chocolate Cremoso: #6B4E3D
Muted Blue Gray: #6B8399
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sicc-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── layouts/            # Layout components
│   └── Layout.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── TechnicalSpecifications.tsx
│   ├── WorkTimeline.tsx
│   ├── AssetsManpower.tsx
│   ├── FloorPlans.tsx
│   ├── ProjectPhotos.tsx
│   ├── ProjectVideos.tsx
│   └── Contact.tsx
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features

### Work Timeline
- Vertical scrollable timeline showing company history from 1998-2025
- Alternating left-right layout for visual appeal
- Filter by project type
- Scroll animations for each timeline item

### Floor Plans
- Advanced search and filter functionality
- Filter by bedrooms, type, and built-up area
- Downloadable floor plans
- Detailed specifications for each plan

### Services
- 11 comprehensive contractor service types
- Expandable 20-point labor contract package
- Detailed service descriptions and features

### Assets & Manpower
- Visual showcase of 435+ workforce
- Complete equipment inventory
- Team capabilities and values

## 🌐 Deployment

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 Customization

To customize the website:

1. **Update Contact Information**: Edit `src/pages/Contact.tsx` and `src/components/Footer.tsx`
2. **Change WhatsApp Number**: Edit `src/components/WhatsAppButton.tsx`
3. **Update Brand Colors**: Modify `tailwind.config.js`
4. **Add/Remove Services**: Edit `src/pages/Services.tsx`
5. **Update Timeline**: Modify timeline data in `src/pages/WorkTimeline.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images

## 📄 License

Copyright © 2025 South India Civil Contractors. All rights reserved.

## 🤝 Support

For support or inquiries:
- Email: info@sicc.com
- Phone: +91 XXXX XXX XXX

---

Built with ❤️ for South India Civil Contractors - Building spaces for life since 1998
