# Ritz College of Hotel Management — Website Clone

> **🌐 Live Site:** [https://ritzclone.vercel.app](https://ritzclone.vercel.app)

A frontend clone of the **Ritz College of Hotel Management** website, built with React, TypeScript, and Tailwind CSS. This is a student project that replicates the college's public-facing website.

## Pages

| Route | Description |
|---|---|
| `/` | Home — services, team, testimonials, endorsement partners, map |
| `/about` | About Us — college history, stats, and mission |
| `/courses` | Courses — searchable and filterable course catalog with modals |
| `/gallery` | Gallery — photo gallery of college events and facilities |
| `/internship` | Internship — national and international internship info |
| `/contact` | Contact — contact form and location details |

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling
- **React Router v7** — client-side routing
- **Framer Motion** — animations
- **Radix UI + shadcn/ui** — accessible UI components
- **Swiper** — image carousel/slider
- **Lucide React + React Icons** — icon sets
- **React Fast Marquee** — infinite scroll banner

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/Ritz-11A.git
cd Ritz-11A

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build     # Build for production (outputs to /dist)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── assets/           # Images, icons, and other static files
├── components/       # Reusable UI components
│   ├── about-us/
│   ├── contact/
│   ├── courses/
│   ├── gallery/
│   ├── home/
│   ├── internship/
│   └── navbar/
├── pages/            # Page-level components (one per route)
├── routes/           # React Router config and path constants
├── data/             # Static data and content
├── constants/        # App-wide constants
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── types/            # TypeScript type definitions
```

## Notes

- This is a **frontend-only** project — there is no backend or database.
- All content (text, images, team info) is static and for demonstration purposes only.
- The contact form does not send real emails.

## Credits

Built in intern team to practice react. This is not an official website of Ritz College of Hotel Management.
