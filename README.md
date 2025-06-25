# Eliano Miguel - Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and experience as a FullStack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured content
- **Interactive Elements**: Hover effects and smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules + Bootstrap 5
- **Icons**: Custom SVG icons
- **Images**: Next.js Image optimization
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
Portfolio/
├── components/          # Reusable React components
│   ├── CurrentWorkSection.js
│   ├── ProjectImage.js
│   └── SocialLinks.js
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper
│   └── index.js        # Home page
├── public/             # Static assets
│   └── images/         # Image files
├── styles/             # CSS modules
│   ├── globals.css     # Global styles
│   └── Home.module.css # Component-specific styles
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DrDevEli/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

To add new projects to the portfolio:

1. Add project images to `public/images/`
2. Update the projects section in `pages/index.js`
3. Use the `ProjectImage` component for consistent styling

### Styling

- Global styles are in `styles/globals.css`
- Component-specific styles are in `styles/Home.module.css`
- Bootstrap classes are available for additional styling

### Content Updates

- Update personal information in `pages/index.js`
- Modify social links in the `SocialLinks` component
- Update tech stack icons in the skills section

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Add `next export` to build script
2. Configure GitHub Actions for deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: e.m.arnald@gmail.com
- **LinkedIn**: [Eliano Miguel](https://www.linkedin.com/in/eliano-miguel/)
- **GitHub**: [DrDevEli](https://github.com/DrDevEli)
- **Location**: Berlin, Germany

---

Built using Next.js 