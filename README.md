# Spain Academy V2

A modern, responsive React website for Spain Academy - helping students and professionals start their journey to Spain.

## 🚀 Features

- **Modern UI** - Built with React 19 and Tailwind CSS
- **Responsive Design** - Works perfectly on all devices
- **14 Components** - Navbar, Hero, Value Props, Timeline, Destinations, and more
- **Spain-Themed Design** - Custom colors: Red (#AA151B), Yellow (#F1BF00), Green (#00A859)
- **Smooth Animations** - Fade-up effects, glass morphism, and 3D transforms
- **Icon System** - Powered by Lucide React

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 6** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment and hosting

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/somdipto/spain-v5.git
cd spain-academy-v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
spain-academy-v2/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ValueProps.tsx
│   ├── Timeline.tsx
│   ├── Destinations.tsx
│   ├── WhySpain.tsx
│   ├── SATV.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── ...
├── public/              # Static assets
├── constants.tsx        # Site constants and data
├── types.ts             # TypeScript types
├── App.tsx              # Main app component
├── index.tsx            # Entry point
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: Vite

### Hostinger

Use the included deployment script:
```bash
./deploy-hostinger.sh
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Customization

### Colors

The site uses Spain-inspired colors defined in `index.html`:
- Red: `#AA151B` (Royal Crimson)
- Yellow: `#F1BF00` (Spanish Gold)
- Green: `#00A859` (Vibrante Emerald)
- Charcoal: `#303030`
- Off-white: `#FDFCF6`

### Fonts

- Headings: Public Sans
- Body: Inter
- Serif: Noto Serif

## 📄 License

Private project - Spain Academy

## 👤 Author

somdipto - https://github.com/somdipto
