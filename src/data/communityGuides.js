// =====================================================
// COMMUNITY GUIDE SYSTEM
// User-submitted guides with ratings, authors, and comments
// Created by Morpheus - LoL-Matrix Pro
// =====================================================

// Guide categories and tags
export const GUIDE_CATEGORIES = {
  COMPREHENSIVE: { name: 'Comprehensive', description: 'Full champion guide covering all aspects' },
  MATCHUP: { name: 'Matchup', description: 'Specific matchup guide' },
  BUILDS: { name: 'Builds', description: 'Item build focused guide' },
  RUNES: { name: 'Runes', description: 'Rune page explanations' },
  COMBO: { name: 'Combos', description: 'Combo and mechanics guide' },
  MACRO: { name: 'Macro', description: 'Macro and game sense guide' },
  LANING: { name: 'Laning', description: 'Lane phase focused guide' },
  TEAMFIGHT: { name: 'Teamfighting', description: 'Teamfight positioning and strategy' },
  ONESHOT: { name: 'One-Shot', description: 'Burst/assassination guide' },
  CLIMBING: { name: 'Climbing', description: 'Tips for ranking up' }
};

export const DIFFICULTY_LEVELS = {
  BEGINNER: { name: 'Beginner', color: '#22c55e' },
  INTERMEDIATE: { name: 'Intermediate', color: '#eab308' },
  ADVANCED: { name: 'Advanced', color: '#f97316' },
  MASTER: { name: 'Master', color: '#ef4444' }
};

export const ROLES = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

// Guide template structure
export const GUIDE_TEMPLATE = {
  id: '',
  title: '',
  champion: '',
  role: '',
  author: {
    id: '',
    username: '',
    rank: '',
    server: '',
    verified: false,
    guidesCount: 0,
    totalUpvotes: 0
  },
  category: 'COMPREHENSIVE',
  difficulty: 'INTERMEDIATE',
  tags: [],
  patch: '',
  createdAt: null,
  updatedAt: null,
  ratings: {
    overall: 0,
    helpful: 0,
    accuracy: 0,
    detail: 0,
    upToDate: 0,
    totalVotes: 0
  },
  sections: {
    introduction: '',
    prosAndCons: { pros: [], cons: [] },
    abilities: {},
    skillOrder: '',
    runes: {},
    itemBuilds: {},
    summonerSpells: [],
    laning: {},
    matchups: [],
    combos: [],
    teamfighting: '',
    macroTips: [],
    commonMistakes: [],
    advancedTips: []
  },
  comments: [],
  views: 0,
  bookmarks: 0
};

// NO FAKE GUIDES - Community guides will be user-submitted
// Starts empty - real users will submit real guides
export const communityGuides = [];

// Filter guides by criteria
export const filterGuides = (guides, filters) => {
  return guides.filter(guide => {
    if (filters.champion && guide.champion !== filters.champion) return false;
    if (filters.role && guide.role !== filters.role) return false;
    if (filters.category && guide.category !== filters.category) return false;
    if (filters.search) {
      const search = filters.search.toLowerCase();
      if (!guide.title.toLowerCase().includes(search) && 
          !guide.champion.toLowerCase().includes(search) &&
          !guide.author.username.toLowerCase().includes(search)) {
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
    case 'rating':
      return sorted.sort((a, b) => b.ratings.overall - a.ratings.overall);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'views':
      return sorted.sort((a, b) => b.views - a.views);
    case 'votes':
      return sorted.sort((a, b) => b.ratings.totalVotes - a.ratings.totalVotes);
    default:
      return sorted;
  }
};

// Validate guide before submission
export const validateGuide = (guide) => {
  const errors = [];
  
  if (!guide.title || guide.title.length < 10) {
    errors.push('Title must be at least 10 characters');
  }
  if (!guide.champion) {
    errors.push('Champion is required');
  }
  if (!guide.role) {
    errors.push('Role is required');
  }
  if (!guide.sections?.introduction || guide.sections.introduction.length < 50) {
    errors.push('Introduction must be at least 50 characters');
  }
  if (!guide.author?.username) {
    errors.push('Author username is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Generate unique guide ID
export const generateGuideId = () => {
  return 'guide-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
};

export default {
  GUIDE_CATEGORIES,
  DIFFICULTY_LEVELS,
  ROLES,
  GUIDE_TEMPLATE,
  communityGuides,
  filterGuides,
  sortGuides,
  validateGuide,
  generateGuideId
};
