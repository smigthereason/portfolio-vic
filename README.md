# Victor Maina Portfolio

A modern, responsive, and beautiful portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. It features smooth animations, a clean design, and a fully configurable data structure.

![Demo](https://github.com/smigthereason/portfolio-vic/blob/main/public/og-image.png)

## Features

- 🎨 **Fully Responsive** – Works perfectly on desktops, tablets, and mobile devices.
- ⚡ **Next.js 15** – Server-side rendering, optimal performance, and SEO-friendly.
- 🎭 **Framer Motion Animations** – Smooth page transitions and scroll effects.
- 🧩 **Shadcn UI Components** – Reusable, accessible, and customizable UI elements.
- 📱 **Mobile-First Design** – Tailwind CSS with responsive breakpoints.
- 🔧 **Centralized Configuration** – All personal data (social links, skills, projects, education, etc.) is managed in one file: `portfolio.config.ts`.
- 📄 **Contact Form** – Integrated with Email API (Resend).
- 📂 **Projects Showcase** – Dynamic project cards with tags and links.
- 👨‍💻 **Skills Grid** – Technical skills with icons, organized by categories.
- 🎓 **Education & Experience** – Timeline-based layout for credentials and work history.
- 🔗 **Social Links** – LinkedIn, GitHub, Facebook, Twitter/X, and external links.
- 🖼️ **Optimized Images** – Next.js `next/image` for automatic optimization.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Lucide Icons
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Resend API
- **Icons**: Lucide React, Devicons (CDN)
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/smigthereason/portfolio-vic.git
cd portfolio-vic
npm install
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Google Fonts (Poppins, Rubik).
