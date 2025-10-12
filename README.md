# 🌟 Portfolio Website - Amrut Pathane

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full Stack Developer. Built with React, Vite, and Tailwind CSS, featuring stunning animations, glassmorphism design, and a fully functional contact form.

![Portfolio Preview](public/assets/projects/portfolio.png)

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** with frosted glass effects
- **Gradient Theme** - Cyan → Blue → Purple color scheme
- **Floating Particles** background animation
- **Smooth Animations** with GPU acceleration for optimal performance

### 📱 Sections
- **Home** - Dynamic hero section with animated name and CTA buttons
- **About** - Personal introduction with gradient orbs
- **Projects** - Showcase of 5+ projects with live demos and GitHub links
- **Skills** - Technical expertise with animated progress bars
- **Contact** - Fully functional contact form with EmailJS integration

### 🛠️ Technical Features
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Performance-optimized animations
- Project images with hover effects
- Social media integration
- Email contact form
- SEO-friendly meta tags

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **React Scroll** - Smooth scrolling
- **Lucide React** - Icon library

### Backend Integration
- **EmailJS** - Contact form email service

### Deployment
- **Vercel/Netlify** - Hosting platform

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up EmailJS (for contact form):**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Update credentials in `src/components/Contact.jsx`:
     - Service ID
     - Template ID
     - Public Key

4. **Run the development server:**
```bash
npm run dev
```

5. **Open in browser:**
   - Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── projects/          # Project screenshots
│   ├── favicon.png            # Website favicon
│   └── resume.pdf             # Resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Home.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Skills.jsx         # Skills & expertise
│   │   └── Contact.jsx        # Contact form
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🎨 Customization

### Update Personal Information
- Edit `src/components/About.jsx` for bio and details
- Update `src/components/Contact.jsx` for contact information
- Replace `public/favicon.png` with your logo
- Update `public/resume.pdf` with your resume

### Add/Edit Projects
- Edit the `projects` array in `src/components/Projects.jsx`
- Add project screenshots to `public/assets/projects/`
- Update project details (title, description, technologies, links)

### Update Skills
- Edit the `skillCategories` array in `src/components/Skills.jsx`
- Modify skill levels and technologies

### Customize Colors
- Update gradient colors in each component
- Modify Tailwind theme in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push code to GitHub
2. Import project on [Netlify](https://www.netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📊 Performance

- **GPU-accelerated animations** for smooth transitions
- **Optimized images** for fast loading
- **Lazy loading** for better performance
- **Responsive design** for all devices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **GitHub:** [Amrut00](https://github.com/Amrut00)
- **LinkedIn:** [Amrut Pathane](https://www.linkedin.com/in/amrut-pathane/)
- **Email:** pathaneamrut@gmail.com
- **Instagram:** [@amrut_pathane](https://www.instagram.com/amrut_pathane/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ by Amrut Pathane
