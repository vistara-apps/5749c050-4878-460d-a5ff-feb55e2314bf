# Polymarket Agent - Base Mini App

Automated Prediction Market Strategy & Social Trading on Base

## Features

- 🤖 Automated yield optimization and arbitrage
- 🔒 Transparent and verifiable trade execution
- 👥 Social trading with Farcaster integration
- 🔔 Real-time notifications for all agent activities
- 💰 Gas-sponsored transactions via OnchainKit

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS for styling
- TypeScript for type safety

## Deployment

Deploy to Vercel or any Next.js-compatible hosting platform.

Make sure to:
1. Set environment variables
2. Configure the Farcaster manifest at `public/.well-known/farcaster.json`
3. Update URLs in the manifest to match your deployment domain

## License

MIT
