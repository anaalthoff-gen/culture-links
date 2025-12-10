# Meeting Activities

A beautiful, modern web interface showcasing fun meeting activities for team bonding. Activities are organized by duration (30, 20, and 10 minutes) and can be filtered using a sleek segment control.

![Meeting Activities Preview](https://via.placeholder.com/800x400?text=Meeting+Activities+Preview)

## Features

- 🎯 **10 curated activities** for team meetings
- ⏱️ **Filter by duration** - All, 30 min, 20 min, or 10 min
- 🎨 **Modern UI** with smooth animations and beautiful cards
- 📱 **Fully responsive** design
- ⚡ **Fast** - Built with Next.js 14 and React 18
- 🎭 **Beautiful typography** with Outfit font

## Activities Included

### 30 Minutes
- **Smash Karts** - Multiplayer kart battle game
- **Neal.fun Experiments** - Interactive web toys
- **Gartic Phone** - Drawing telephone game

### 20 Minutes
- **GeoGuessr** - Location guessing with Google Maps
- **ThinkLinks** - Business pitch from random images
- **Jigsaw Explorer** - Collaborative online puzzles

### 10 Minutes
- **Mentimeter Quiz** - Interactive quizzes
- **Meme Generator** - Create and vote on memes
- **Wordle Challenge** - Word guessing game
- **Kleki Drawing Guess** - Draw and guess game

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd meeting-activities
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
meeting-activities/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page with filtering
├── components/
│   ├── ActivityCard.tsx # Individual activity card
│   └── TimeFilter.tsx   # Segment control filter
├── data/
│   └── activities.ts    # Activities dataset
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **clsx** - Conditional class names

## Customization

### Adding New Activities

Edit `data/activities.ts` and add a new activity object:

```typescript
{
  id: 'unique-id',
  title: 'Activity Name',
  description: 'Brief, engaging description.',
  link: 'https://activity-url.com',
  duration: 20, // 10, 20, or 30
  icon: 'sparkles', // lucide icon name
  howItWorks: 'How the activity works.',
  howToModerate: 'Tips for the moderator.',
  category: 'creative',
}
```

### Available Icons

The following Lucide icons are mapped:
- `gamepad-2` - Games
- `sparkles` - Creative activities
- `phone` - Communication games
- `map-pin` - Location-based
- `lightbulb` - Brainstorming
- `puzzle` - Puzzles
- `trophy` - Competitions
- `smile` - Fun activities
- `type` - Word games
- `pencil` - Drawing activities

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT © Your Team

---

Made with ✨ for fun team meetings

