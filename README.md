# Prompt That For You

Turn any idea into a polished AI prompt in seconds. Share a link that types the prompt on-screen, then redirects the recipient to their chat.

- Website: https://promptthatforyou.com
- Repository: https://github.com/muzzyhaile/ask-the-gpt

## Features
- Create and share prompt links instantly
- Typing animation for a familiar chat experience
- Automatic redirect to chat with the prompt prefilled
- Clean, responsive UI (React + Tailwind + shadcn/ui)

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- React Router

## Getting Started (Local)
Prerequisites: Node.js 18+ and npm

Windows PowerShell:

```powershell
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## How It Works
- Enter a prompt on the homepage and generate a shareable link.
- The recipient opens the link and sees a brief typing animation.
- They are redirected to chat with the prompt included in the URL query.

See `src/pages/Index.tsx` for the redirect logic and UI, and `src/components` for core components.

## SEO & Branding
- HTML head tags live in `index.html` (title, description, canonical, OG/Twitter tags).
- Favicon: `public/favicon.svg`
- Social share image (OG/Twitter): `public/placeholder.svg`

## Contributing
Issues and PRs are welcome. Please keep changes small and focused.

## License
Add a LICENSE file if you plan to open source. Otherwise, all rights reserved.
