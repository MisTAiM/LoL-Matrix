// =====================================================
// COMMUNITY GUIDE SYSTEM
// User-submitted guides with ratings, authors, and comments
// Better than Mobalytics - more detailed, community-driven
// =====================================================

// Guide categories and tags
export const GUIDE_CATEGORIES = {
  COMPREHENSIVE: { name: 'Comprehensive', icon: '📖', description: 'Full champion guide covering all aspects' },
  MATCHUP: { name: 'Matchup', icon: '⚔️', description: 'Specific matchup guide' },
  BUILDS: { name: 'Builds', icon: '🔧', description: 'Item build focused guide' },
  RUNES: { name: 'Runes', icon: '🔮', description: 'Rune page explanations' },
  COMBO: { name: 'Combos', icon: '💥', description: 'Combo and mechanics guide' },
  MACRO: { name: 'Macro', icon: '🗺️', description: 'Macro and game sense guide' },
  LANING: { name: 'Laning', icon: '🏠', description: 'Lane phase focused guide' },
  TEAMFIGHT: { name: 'Teamfighting', icon: '👥', description: 'Teamfight positioning and strategy' },
  ONESHOT: { name: 'One-Shot', icon: '⚡', description: 'Burst/assassination guide' },
  CLIMBING: { name: 'Climbing', icon: '📈', description: 'Tips for ranking up' }
};

export const DIFFICULTY_LEVELS = {
  BEGINNER: { name: 'Beginner', color: '#22c55e', icon: '🌱' },
  INTERMEDIATE: { name: 'Intermediate', color: '#eab308', icon: '🌿' },
  ADVANCED: { name: 'Advanced', color: '#f97316', icon: '🌳' },
  MASTER: { name: 'Master', color: '#ef4444', icon: '🔥' }
};

export const ROLES = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

// Guide template structure
export const GUIDE_TEMPLATE = {
  // Basic info
  id: '', // Auto-generated UUID
  title: '',
  champion: '',
  role: '',
  author: {
    id: '',
    username: '',
    rank: '',
    server: '',
    avatar: '',
    verified: false,
    guidesCount: 0,
    totalUpvotes: 0
  },
  
  // Metadata
  category: 'COMPREHENSIVE',
  difficulty: 'INTERMEDIATE',
  tags: [],
  patch: '',
  createdAt: null,
  updatedAt: null,
  
  // Ratings
  ratings: {
    overall: 0,
    helpful: 0,
    accuracy: 0,
    detail: 0,
    upToDate: 0,
    totalVotes: 0
  },
  
  // Content sections
  sections: {
    introduction: '',
    prosAndCons: { pros: [], cons: [] },
    abilities: {
      passive: { name: '', description: '', tips: [] },
      q: { name: '', description: '', tips: [], maxOrder: 1 },
      w: { name: '', description: '', tips: [], maxOrder: 2 },
      e: { name: '', description: '', tips: [], maxOrder: 3 },
      r: { name: '', description: '', tips: [] }
    },
    skillOrder: '',
    runes: {
      primary: { tree: '', keystone: '', runes: [], explanation: '' },
      secondary: { tree: '', runes: [], explanation: '' },
      shards: [],
      situational: []
    },
    itemBuilds: {
      starter: { items: [], explanation: '' },
      core: { items: [], explanation: '' },
      situational: [],
      boots: []
    },
    summonerSpells: [],
    laning: {
      earlyGame: '',
      tradingPatterns: '',
      waveManagement: '',
      backTiming: ''
    },
    matchups: [],
    combos: [],
    teamfighting: '',
    macroTips: [],
    commonMistakes: [],
    advancedTips: []
  },
  
  // Comments
  comments: [],
  
  // Stats
  views: 0,
  bookmarks: 0
};

// Sample community guides
export const communityGuides = [
  {
    id: 'guide-aatrox-001',
    title: 'Challenger Aatrox Guide - Dominate Top Lane',
    champion: 'Aatrox',
    role: 'Top',
    author: {
      id: 'user-001',
      username: 'BladeOfDarkin',
      rank: 'Challenger',
      server: 'NA',
      avatar: '🗡️',
      verified: true,
      guidesCount: 12,
      totalUpvotes: 4520
    },
    category: 'COMPREHENSIVE',
    difficulty: 'ADVANCED',
    tags: ['Season 14', 'Bruiser', 'Drain Tank', 'Lane Bully'],
    patch: '14.2',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-28',
    ratings: {
      overall: 4.8,
      helpful: 4.9,
      accuracy: 4.7,
      detail: 4.8,
      upToDate: 4.9,
      totalVotes: 342
    },
    sections: {
      introduction: "Welcome to my Challenger Aatrox guide! I've been one-tricking Aatrox since Season 9 and have hit Challenger every season since. This guide will teach you everything from basic combos to advanced matchup knowledge.",
      prosAndCons: {
        pros: ['Insane sustain in teamfights', 'Great lane bully vs melees', 'Strong mid-game spike', 'Game-changing ultimate', 'Satisfying to master'],
        cons: ['Weak to healing reduction', 'Skillshot reliant', 'Falls off late game', 'Weak vs ranged poke', 'High skill ceiling']
      },
      abilities: {
        passive: { name: 'Deathbringer Stance', description: 'Periodically empowers auto attack', tips: ['Use to last hit under tower', 'Combo with Q for extra damage', 'Resets faster with abilities'] },
        q: { name: 'The Darkin Blade', description: 'Three-part slash combo', tips: ['Sweetspot deals bonus damage', 'Q1 is fastest, Q3 is slowest', 'Can flash during Q animation'], maxOrder: 1 },
        w: { name: 'Infernal Chains', description: 'Skillshot that pulls enemies', tips: ['Use after Q1 for guaranteed hit', 'Can zone enemies in lane', 'Crucial for ganks'], maxOrder: 3 },
        e: { name: 'Umbral Dash', description: 'Short dash with passive healing', tips: ['Use to reposition Q sweetspots', 'Passive gives sustain', 'Save for escapes vs ganks'], maxOrder: 2 },
        r: { name: 'World Ender', description: 'Transform into demon form', tips: ['Increased healing and damage', 'Use at fight start', 'Revive on takedowns'] }
      },
      skillOrder: 'Q > E > W, R at 6/11/16',
      runes: {
        primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], explanation: 'Conqueror stacks quickly with Q and provides healing synergy with your kit.' },
        secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'], explanation: 'Second Wind for poke matchups, Unflinching for tenacity stacking.' },
        shards: ['Adaptive Force', 'Adaptive Force', 'Health'],
        situational: [
          { vs: 'Ranged/Poke', changes: 'Fleet Footwork with Second Wind + Overgrowth' },
          { vs: 'Tanks', changes: 'Cut Down instead of Last Stand' }
        ]
      },
      itemBuilds: {
        starter: { items: ['Doran\'s Blade', 'Health Potion'], explanation: 'Standard aggressive start' },
        core: { items: ['Eclipse', 'Black Cleaver', 'Sterak\'s Gage'], explanation: 'Eclipse for lethality burst, Cleaver for armor shred, Sterak\'s for survivability' },
        situational: [
          { item: 'Death\'s Dance', when: 'vs AD heavy teams' },
          { item: 'Maw of Malmortius', when: 'vs AP heavy teams' },
          { item: 'Serylda\'s Grudge', when: 'Need more sticking power' }
        ],
        boots: [
          { item: 'Plated Steelcaps', when: 'vs AD/Auto attackers' },
          { item: 'Mercury\'s Treads', when: 'vs CC heavy teams' }
        ]
      },
      summonerSpells: [
        { spells: ['Flash', 'Teleport'], when: 'Standard' },
        { spells: ['Flash', 'Ignite'], when: 'Kill lane vs scaling' }
      ],
      laning: {
        earlyGame: 'Look to trade with Q1-E-Q2-W-Q3 combo. Your level 1-2 is strong vs most melees.',
        tradingPatterns: 'Short trade: Q1 + passive auto. Extended trade: Full Q combo with E repositioning.',
        waveManagement: 'Freeze vs ranged, push vs melees you beat. Set up dives at level 6.',
        backTiming: 'Back with 1100g for Serrated Dirk or 1300g for Caulfield\'s Warhammer.'
      },
      matchups: [
        { champion: 'Riven', difficulty: 'Medium', tip: 'Respect her level 1, beat her level 3+. Space your Qs around her dashes.' },
        { champion: 'Fiora', difficulty: 'Hard', tip: 'Bait her W with your W, then full combo. Never Q3 predictably.' },
        { champion: 'Teemo', difficulty: 'Hard', tip: 'Take Fleet, Second Wind. All-in at 6 with ult.' },
        { champion: 'Darius', difficulty: 'Medium', tip: 'Disengage at 5 stacks. Your healing out-sustains his if you dont get 5-stacked.' }
      ],
      combos: [
        { name: 'Basic Trade', inputs: 'Q1 > E > Q2 > W > Q3', damage: 'Medium', difficulty: 'Easy' },
        { name: 'Full Combo', inputs: 'E > Q1 > W > Q2 > Q3 > R', damage: 'High', difficulty: 'Medium' },
        { name: 'Flash Q3', inputs: 'Q3 > Flash (during animation)', damage: 'High', difficulty: 'Hard' }
      ],
      teamfighting: 'Look to flank and hit multiple people with Q sweetspots. Use R at fight start for maximum healing. Target carries but dont int - your job is sustained damage.',
      macroTips: [
        'Split push with TP advantage',
        'Group for objectives when ult is up',
        'Your teamfight is stronger than your 1v1 late game'
      ],
      commonMistakes: [
        'Using E aggressively without escape',
        'Ulting too late in fights',
        'Missing Q sweetspots consistently',
        'Fighting without Conqueror stacked'
      ],
      advancedTips: [
        'You can buffer E during Q animation',
        'W hitbox is wider than indicator',
        'Q3 > Flash extends range significantly',
        'Passive auto resets attack timer'
      ]
    },
    comments: [
      { id: 'c1', author: 'TopLaneKing', content: 'Best Aatrox guide Ive seen. The matchup section saved my LP!', upvotes: 45, date: '2024-01-20' },
      { id: 'c2', author: 'IronPlayer99', content: 'Helped me understand the champ so much better. Climbed from Iron to Silver!', upvotes: 23, date: '2024-01-22' }
    ],
    views: 15420,
    bookmarks: 892
  },
  {
    id: 'guide-yasuo-001',
    title: 'Grandmaster Yasuo Guide - The Wind Walker\'s Path',
    champion: 'Yasuo',
    role: 'Mid',
    author: {
      id: 'user-002',
      username: 'WindBlade',
      rank: 'Grandmaster',
      server: 'EUW',
      avatar: '🌪️',
      verified: true,
      guidesCount: 8,
      totalUpvotes: 3210
    },
    category: 'COMPREHENSIVE',
    difficulty: 'MASTER',
    tags: ['Season 14', 'Melee Carry', 'High Skill Cap', 'Outplay Potential'],
    patch: '14.2',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-25',
    ratings: {
      overall: 4.7,
      helpful: 4.8,
      accuracy: 4.6,
      detail: 4.9,
      upToDate: 4.7,
      totalVotes: 567
    },
    sections: {
      introduction: "Yasuo is one of the most rewarding champions to master. This guide covers everything from basic mechanics to advanced tech that will help you climb.",
      prosAndCons: {
        pros: ['Infinite skill ceiling', 'Strong scaling', '0 cooldown dash', 'Windwall blocks projectiles', 'Flashy outplay potential'],
        cons: ['Weak to CC', 'Team reliant for knockups', 'Feast or famine', 'Requires practice', 'Stigma of "Yasuo players"']
      }
    },
    comments: [],
    views: 23150,
    bookmarks: 1245
  },
  {
    id: 'guide-thresh-001',
    title: 'Diamond Support Thresh - Hook City Guide',
    champion: 'Thresh',
    role: 'Support',
    author: {
      id: 'user-003',
      username: 'HookMaster',
      rank: 'Diamond',
      server: 'KR',
      avatar: '⛓️',
      verified: false,
      guidesCount: 5,
      totalUpvotes: 1890
    },
    category: 'COMPREHENSIVE',
    difficulty: 'INTERMEDIATE',
    tags: ['Season 14', 'Engage', 'Playmaker', 'Hook Champion'],
    patch: '14.2',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-20',
    ratings: {
      overall: 4.5,
      helpful: 4.6,
      accuracy: 4.4,
      detail: 4.5,
      upToDate: 4.5,
      totalVotes: 234
    },
    sections: {
      introduction: "Thresh is the ultimate playmaking support. This guide will teach you how to control lanes, roam effectively, and carry from the support role."
    },
    comments: [],
    views: 8920,
    bookmarks: 456
  },
  {
    id: 'guide-jinx-001',
    title: 'Jinx ADC Guide - Get Excited!',
    champion: 'Jinx',
    role: 'ADC',
    author: {
      id: 'user-004',
      username: 'RocketGirl',
      rank: 'Master',
      server: 'NA',
      avatar: '🚀',
      verified: true,
      guidesCount: 3,
      totalUpvotes: 2100
    },
    category: 'COMPREHENSIVE',
    difficulty: 'BEGINNER',
    tags: ['Season 14', 'Hypercarry', 'Late Game', 'Teamfighter'],
    patch: '14.2',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-26',
    ratings: {
      overall: 4.6,
      helpful: 4.7,
      accuracy: 4.5,
      detail: 4.6,
      upToDate: 4.6,
      totalVotes: 189
    },
    sections: {
      introduction: "Jinx is the ultimate hypercarry. This guide will teach you how to survive lane and become a late game monster."
    },
    comments: [],
    views: 12340,
    bookmarks: 678
  }
];

// Guide submission form validation
export const validateGuide = (guide) => {
  const errors = [];
  
  if (!guide.title || guide.title.length < 10) errors.push('Title must be at least 10 characters');
  if (!guide.champion) errors.push('Champion is required');
  if (!guide.role) errors.push('Role is required');
  if (!guide.sections?.introduction || guide.sections.introduction.length < 50) {
    errors.push('Introduction must be at least 50 characters');
  }
  
  return { valid: errors.length === 0, errors };
};

// Rating calculation
export const calculateOverallRating = (ratings) => {
  const weights = { helpful: 0.3, accuracy: 0.25, detail: 0.25, upToDate: 0.2 };
  return (
    ratings.helpful * weights.helpful +
    ratings.accuracy * weights.accuracy +
    ratings.detail * weights.detail +
    ratings.upToDate * weights.upToDate
  ).toFixed(1);
};

// Search and filter guides
export const filterGuides = (guides, filters) => {
  return guides.filter(guide => {
    if (filters.champion && guide.champion !== filters.champion) return false;
    if (filters.role && guide.role !== filters.role) return false;
    if (filters.category && guide.category !== filters.category) return false;
    if (filters.difficulty && guide.difficulty !== filters.difficulty) return false;
    if (filters.minRating && guide.ratings.overall < filters.minRating) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      if (!guide.title.toLowerCase().includes(searchLower) &&
          !guide.champion.toLowerCase().includes(searchLower) &&
          !guide.author.username.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    return true;
  });
};

// Sort guides
export const sortGuides = (guides, sortBy) => {
  const sorted = [...guides];
  switch (sortBy) {
    case 'rating': return sorted.sort((a, b) => b.ratings.overall - a.ratings.overall);
    case 'views': return sorted.sort((a, b) => b.views - a.views);
    case 'recent': return sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    case 'votes': return sorted.sort((a, b) => b.ratings.totalVotes - a.ratings.totalVotes);
    default: return sorted;
  }
};

// Author stats calculator
export const getAuthorStats = (guides, authorId) => {
  const authorGuides = guides.filter(g => g.author.id === authorId);
  return {
    totalGuides: authorGuides.length,
    totalViews: authorGuides.reduce((sum, g) => sum + g.views, 0),
    totalVotes: authorGuides.reduce((sum, g) => sum + g.ratings.totalVotes, 0),
    averageRating: authorGuides.length > 0 
      ? (authorGuides.reduce((sum, g) => sum + g.ratings.overall, 0) / authorGuides.length).toFixed(1)
      : 0,
    totalBookmarks: authorGuides.reduce((sum, g) => sum + g.bookmarks, 0)
  };
};

// Generate unique ID
export const generateGuideId = () => {
  return 'guide-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
};

export default {
  GUIDE_CATEGORIES,
  DIFFICULTY_LEVELS,
  ROLES,
  GUIDE_TEMPLATE,
  communityGuides,
  validateGuide,
  calculateOverallRating,
  filterGuides,
  sortGuides,
  getAuthorStats,
  generateGuideId
};
