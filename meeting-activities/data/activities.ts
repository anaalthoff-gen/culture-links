export type ActivityDuration = 30 | 20 | 10;

export interface Activity {
  id: string;
  title: string;
  description: string;
  link: string;
  duration: ActivityDuration;
  icon: string;
  howItWorks: string;
  howToModerate: string;
  category: string;
}

export const activities: Activity[] = [
  // 30 MIN OPTIONS
  {
    id: 'smash-karts',
    title: 'Smash Karts',
    description: 'Chaotic multiplayer kart battles with power-ups, explosions, and zero learning curve. Pure arcade mayhem.',
    link: 'https://smashkarts.io/',
    duration: 30,
    icon: 'gamepad-2',
    howItWorks: 'Everyone opens the link in their browser, joins the same room, and competes in real-time kart combat.',
    howToModerate: 'Share the link, create a private room, and let the chaos begin—no setup required.',
    category: 'game',
  },
  {
    id: 'neal-fun',
    title: 'Neal.fun Experiments',
    description: 'A delightful collection of interactive web toys—design an iPhone, spend a billionaire\'s fortune, or explore the universe.',
    link: 'https://neal.fun/',
    duration: 30,
    icon: 'sparkles',
    howItWorks: 'Pick any interactive experiment from the site; everyone can play individually or share screens.',
    howToModerate: 'Choose an activity like "Design the iPhone" and give everyone 15 minutes to create, then share results.',
    category: 'creative',
  },
  {
    id: 'gartic-phone',
    title: 'Gartic Phone',
    description: 'The legendary telephone game meets doodling. Watch your message transform into hilariously wrong drawings.',
    link: 'https://garticphone.com/',
    duration: 30,
    icon: 'phone',
    howItWorks: 'Write a phrase, pass it on, someone draws it, another guesses it—repeat until beautifully broken.',
    howToModerate: 'Create a room, share the code, pick a mode (Normal is best for starters), and enjoy the chaos.',
    category: 'creative',
  },

  // 20 MIN OPTIONS
  {
    id: 'geoguessr',
    title: 'GeoGuessr',
    description: 'Drop into a random Google Street View location and race to pinpoint where on Earth you are.',
    link: 'https://www.geoguessr.com/',
    duration: 20,
    icon: 'map-pin',
    howItWorks: 'Teams are dropped somewhere in the world via Street View and must guess the location using visual clues.',
    howToModerate: 'Team captains share their screens; give 3 minutes per round for location debates.',
    category: 'trivia',
  },
  {
    id: 'thinklinks',
    title: 'ThinkLinks — Business Pitch',
    description: 'Three random images, one startup idea. Flex your creativity muscles and pitch like a founder.',
    link: 'https://www.thinklinks.cards/',
    duration: 20,
    icon: 'lightbulb',
    howItWorks: 'Teams see 3 random images and must invent a business concept that connects them all.',
    howToModerate: 'Display the images, give teams 10 min to brainstorm, then 2 min each to pitch.',
    category: 'creative',
  },
  {
    id: 'jigsaw-explorer',
    title: 'Jigsaw Explorer',
    description: 'Collaborative online puzzles—upload a team photo for a personalized bonding experience.',
    link: 'https://www.jigsawexplorer.com/',
    duration: 20,
    icon: 'puzzle',
    howItWorks: 'Upload any image to create a puzzle; share the link and solve together in real-time.',
    howToModerate: 'Prepare a company photo puzzle beforehand, share the link, and race to complete it.',
    category: 'collaborative',
  },

  // 10 MIN OPTIONS
  {
    id: 'mentimeter',
    title: 'Mentimeter Quiz',
    description: 'Lightning-fast interactive quizzes with live leaderboards. Perfect for quick team trivia.',
    link: 'https://www.menti.com',
    duration: 10,
    icon: 'trophy',
    howItWorks: 'Participants join via code and answer questions in real-time; scores update live on screen.',
    howToModerate: 'Prepare 5-10 questions beforehand, share the join code, and run through quickly.',
    category: 'trivia',
  },
  {
    id: 'meme-generator',
    title: 'Meme Generator',
    description: 'Everyone crafts two memes, share them anonymously, and vote for the funniest creation.',
    link: 'https://imgflip.com/memegenerator',
    duration: 10,
    icon: 'smile',
    howItWorks: 'Each person picks a template, adds their text, and downloads their masterpiece to share.',
    howToModerate: 'Give 5 minutes to create, have everyone share in chat, then vote on the winner.',
    category: 'creative',
  },
  {
    id: 'wordle',
    title: 'Wordle Challenge',
    description: 'The viral word-guessing sensation. Six tries to crack the five-letter mystery.',
    link: 'https://wordlegame.org/',
    duration: 10,
    icon: 'type',
    howItWorks: 'Everyone plays the same daily puzzle or a custom challenge simultaneously.',
    howToModerate: 'Share the challenge link, set a timer, and see who solves it in the fewest guesses.',
    category: 'puzzle',
  },
  {
    id: 'kleki-drawing',
    title: 'Kleki Drawing Guess',
    description: 'One person draws, everyone guesses. Simple, fast, and guaranteed laughs.',
    link: 'https://kleki.com/',
    duration: 10,
    icon: 'pencil',
    howItWorks: 'The drawer shares their screen, picks a word, and sketches while others race to guess.',
    howToModerate: 'Rotate drawers each round, use 60-second timers, and keep a running score.',
    category: 'creative',
  },
];

export const durations: ActivityDuration[] = [30, 20, 10];

export const durationLabels: Record<ActivityDuration, string> = {
  30: '30 min',
  20: '20 min',
  10: '10 min',
};

export const filterOptions = [
  { value: 'all', label: 'All' },
  { value: '30', label: '30 min' },
  { value: '20', label: '20 min' },
  { value: '10', label: '10 min' },
] as const;

export type FilterValue = typeof filterOptions[number]['value'];

