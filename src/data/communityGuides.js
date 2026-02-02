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
          { item: 'Death\'s Dance', when: 'vs AD heavy teams', icon: '🛡️', priority: 'HIGH' },
          { item: 'Maw of Malmortius', when: 'vs AP heavy teams', icon: '🔮', priority: 'HIGH' },
          { item: 'Serylda\'s Grudge', when: 'Need more sticking power', icon: '❄️', priority: 'MEDIUM' },
          { item: 'Spirit Visage', when: 'vs AP + want more healing', icon: '💚', priority: 'MEDIUM' },
          { item: 'Thornmail', when: 'vs heavy healing (Soraka, Yuumi)', icon: '🔥', priority: 'CRITICAL' },
          { item: 'Guardian Angel', when: 'Youre the win condition', icon: '👼', priority: 'MEDIUM' }
        ],
        boots: [
          { item: 'Plated Steelcaps', when: 'vs AD/Auto attackers (Tryndamere, Jax, ADC fed)' },
          { item: 'Mercury\'s Treads', when: 'vs CC heavy or AP heavy teams' },
          { item: 'Ionian Boots', when: 'Snowballing hard, want CDR' }
        ],
        teamCompBuilds: {
          vsDiveComp: {
            name: 'Anti-Dive Build',
            icon: '🎯',
            build: ['Goredrinker', 'Black Cleaver', 'Death\'s Dance', 'Sterak\'s Gage', 'Gargoyle Stoneplate'],
            boots: 'Plated Steelcaps or Mercury\'s Treads',
            explanation: 'Maximum survivability. You WILL be dove - survive it and turn the fight. Goredrinker + Sterak\'s provides massive sustain.',
            playstyle: 'Frontline for your team. Let them dive you, pop Goredrinker + R, heal through everything.'
          },
          vsPokeComp: {
            name: 'Anti-Poke Build',
            icon: '🏹',
            build: ['Eclipse', 'Force of Nature', 'Black Cleaver', 'Spirit Visage', 'Sterak\'s Gage'],
            boots: 'Mercury\'s Treads',
            explanation: 'Force of Nature reduces poke damage by 20% at max stacks. Spirit Visage amplifies all your healing by 25%. Sustain through their poke.',
            playstyle: 'Force engages when healthy. Your sustain lets you take trades they cant - use that to force fights.'
          },
          vsTankComp: {
            name: 'Tank Shred Build',
            icon: '🏰',
            build: ['Eclipse', 'Black Cleaver', 'Serylda\'s Grudge', 'Lord Dominik\'s Regards', 'Death\'s Dance'],
            boots: 'Ionian Boots',
            explanation: 'Maximum armor penetration. Cleaver shreds 30% armor for your team. LDR + Cut Down rune melts tanks. Eclipse %HP damage.',
            playstyle: 'Extended fights favor you. Stack Conqueror, shred their armor, sustain through damage.'
          },
          vsEngageComp: {
            name: 'Anti-Engage Build',
            icon: '💥',
            build: ['Eclipse', 'Black Cleaver', 'Maw of Malmortius', 'Sterak\'s Gage', 'Death\'s Dance'],
            boots: 'Mercury\'s Treads',
            explanation: 'Triple shield build (Maw + Sterak\'s + Eclipse). Mercury\'s + Legend: Tenacity makes you unstoppable. Survive their burst.',
            playstyle: 'Bait their engage, survive the burst with shields, then run them down while everything is on CD.'
          },
          asSplitpusher: {
            name: 'Splitpush Build',
            icon: '🗡️',
            build: ['Eclipse', 'Black Cleaver', 'Hullbreaker', 'Death\'s Dance', 'Sterak\'s Gage'],
            boots: 'Boots of Swiftness',
            explanation: 'Hullbreaker gives 60 armor/MR when alone and empowers minions. You win most 1v1s and take towers fast.',
            playstyle: 'Perma split with TP. Draw 2+ enemies, your team takes objectives. Only group when you can flank.'
          },
          asEngager: {
            name: 'Teamfight Engage Build',
            icon: '⚔️',
            build: ['Goredrinker', 'Black Cleaver', 'Dead Man\'s Plate', 'Force of Nature', 'Sterak\'s Gage'],
            boots: 'Mercury\'s Treads',
            explanation: 'Tanky with movement speed to get into fights. Dead Man\'s + Force of Nature lets you reach backline. Goredrinker for sustain.',
            playstyle: 'Flash + Q3 or E + Flash onto their carry. Pop R immediately, drain tank while your team follows up.'
          }
        }
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
      },
      itemBuilds: {
        starter: { items: ['Doran\'s Blade', 'Health Potion'], explanation: 'Standard start for most matchups' },
        core: { items: ['Kraken Slayer', 'Infinity Edge', 'Death\'s Dance'], explanation: 'Kraken for DPS, IE for massive crits, DD for survivability' },
        situational: [
          { item: 'Blade of the Ruined King', when: 'vs tanky enemies', icon: '🗡️', priority: 'HIGH' },
          { item: 'Wit\'s End', when: 'vs heavy AP', icon: '🔮', priority: 'HIGH' },
          { item: 'Guardian Angel', when: 'Carrying, cant afford to die', icon: '👼', priority: 'MEDIUM' },
          { item: 'Mortal Reminder', when: 'vs healing (Soraka, Aatrox)', icon: '🔥', priority: 'CRITICAL' }
        ],
        boots: [
          { item: 'Berserker\'s Greaves', when: 'Standard - always for the AS' },
          { item: 'Plated Steelcaps', when: 'vs full AD comps' }
        ],
        teamCompBuilds: {
          vsDiveComp: {
            name: 'Anti-Dive Yasuo',
            icon: '🎯',
            build: ['Kraken Slayer', 'Infinity Edge', 'Death\'s Dance', 'Guardian Angel', 'Wit\'s End'],
            boots: 'Berserker\'s Greaves',
            explanation: 'DD + GA gives you two lives. Wit\'s End if they have AP divers. Use windwall to block key abilities.',
            playstyle: 'Save windwall for their engage. E through minions to kite. Ult off your teams knockups, not your own.'
          },
          vsPokeComp: {
            name: 'Anti-Poke Yasuo',
            icon: '🏹',
            build: ['Kraken Slayer', 'Infinity Edge', 'Bloodthirster', 'Spirit Visage', 'Death\'s Dance'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Bloodthirster shield + lifesteal sustains through poke. Spirit Visage if AP poke. Windwall their skillshots.',
            playstyle: 'Windwall is your best friend. Force all-ins when they waste key poke spells. Sustain with lifesteal.'
          },
          vsTankComp: {
            name: 'Tank Shred Yasuo',
            icon: '🏰',
            build: ['Kraken Slayer', 'Blade of the Ruined King', 'Infinity Edge', 'Lord Dominik\'s Regards', 'Mortal Reminder'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Kraken true damage + BORK %HP + LDR armor pen = tanks melt. Cut Down rune mandatory.',
            playstyle: 'Extended fights. Stack your Q, auto weave constantly. Your DPS out-damages their tankiness.'
          },
          asHypercarry: {
            name: 'Full Damage Carry',
            icon: '⚔️',
            build: ['Kraken Slayer', 'Infinity Edge', 'Bloodthirster', 'Mortal Reminder', 'Guardian Angel'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Maximum damage. 100% crit with massive lifesteal. You ARE the win condition.',
            playstyle: 'Wait for knockups, ult in, delete everything. Position carefully - you have no defensive items.'
          }
        }
      },
      matchups: [
        { champion: 'Zed', difficulty: 'Medium', tip: 'Windwall his Q. Trade when his W is down. You outscale.' },
        { champion: 'Ahri', difficulty: 'Easy', tip: 'Windwall her E charm. All-in level 6 with ult.' },
        { champion: 'Annie', difficulty: 'Hard', tip: 'She point-click stuns you. Respect her at all times. Windwall her Q.' }
      ],
      combos: [
        { name: 'Basic Trade', inputs: 'E > Q > Auto', damage: 'Low', difficulty: 'Easy' },
        { name: 'Beyblade', inputs: 'E > Q (tornado) > Flash > R', damage: 'High', difficulty: 'Hard' },
        { name: 'Keyblade', inputs: 'EQ > Flash > EQ > R', damage: 'Maximum', difficulty: 'Master' }
      ]
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
      introduction: "Thresh is the ultimate playmaking support. This guide will teach you how to control lanes, roam effectively, and carry from the support role.",
      prosAndCons: {
        pros: ['Best playmaking kit in the game', 'Versatile - can engage or peel', 'Lantern saves lives', 'Scales with souls', 'Strong at all stages'],
        cons: ['Skillshot reliant', 'Squishy early', 'High skill floor', 'Team dependent', 'Needs to collect souls']
      },
      itemBuilds: {
        starter: { items: ['Relic Shield', 'Health Potion x2'], explanation: 'Relic for sustain and gold generation' },
        core: { items: ['Locket of the Iron Solari', 'Knight\'s Vow', 'Zeke\'s Convergence'], explanation: 'Locket protects team, Knight\'s Vow protects carry, Zeke\'s amplifies ADC damage' },
        situational: [
          { item: 'Mikael\'s Blessing', when: 'vs heavy CC (Morg, Ashe)', icon: '✨', priority: 'CRITICAL' },
          { item: 'Redemption', when: 'vs poke comps / need healing', icon: '💚', priority: 'HIGH' },
          { item: 'Frozen Heart', when: 'vs auto-attack heavy (Kog, Vayne)', icon: '❄️', priority: 'HIGH' },
          { item: 'Force of Nature', when: 'vs double AP', icon: '🔮', priority: 'MEDIUM' }
        ],
        boots: [
          { item: 'Mobility Boots', when: 'Roaming / ahead in lane' },
          { item: 'Plated Steelcaps', when: 'vs AD heavy (Draven, Lucian)' },
          { item: 'Mercury\'s Treads', when: 'vs CC heavy / AP heavy' }
        ],
        teamCompBuilds: {
          vsDiveComp: {
            name: 'Peel Support Build',
            icon: '🛡️',
            build: ['Locket of the Iron Solari', 'Knight\'s Vow', 'Mikael\'s Blessing', 'Redemption', 'Frozen Heart'],
            boots: 'Plated Steelcaps',
            explanation: 'Maximum protection for your carry. Locket + Knight\'s Vow + Mikael\'s cleanse. Use lantern to save them from dives.',
            playstyle: 'Peel peel peel. Hook divers away from carry. Flay them back. Lantern carry to safety. Box to zone.'
          },
          vsPokeComp: {
            name: 'Sustain Support Build',
            icon: '🏹',
            build: ['Locket of the Iron Solari', 'Redemption', 'Mikael\'s Blessing', 'Staff of Flowing Water', 'Warmog\'s Armor'],
            boots: 'Mercury\'s Treads',
            explanation: 'Redemption + Warmog\'s lets you heal through poke. Force engages when your team is healthy.',
            playstyle: 'Look for hooks to force fights. Your engage counters poke. Heal team with Redemption after poke.'
          },
          withDiveComp: {
            name: 'Engage Support Build',
            icon: '🎯',
            build: ['Locket of the Iron Solari', 'Zeke\'s Convergence', 'Dead Man\'s Plate', 'Force of Nature', 'Knight\'s Vow'],
            boots: 'Mobility Boots',
            explanation: 'Tank stats to survive going in. Zeke\'s buffs your ADC when you ult. Dead Man\'s for engage speed.',
            playstyle: 'Flash hook or Lantern + hook to engage. Your job is to start fights and CC priority targets.'
          },
          withHypercarry: {
            name: 'Protect the Carry Build',
            icon: '⭐',
            build: ['Locket of the Iron Solari', 'Knight\'s Vow', 'Redemption', 'Mikael\'s Blessing', 'Zeke\'s Convergence'],
            boots: 'Mercury\'s Treads',
            explanation: 'Every item helps keep your hypercarry alive and dealing damage. You exist to serve them.',
            playstyle: 'Stay near carry. Hook anyone who gets close. Flay divers away. Lantern them out of danger.'
          }
        }
      },
      matchups: [
        { champion: 'Nautilus', difficulty: 'Medium', tip: 'He out-trades early. Look for hooks after he misses his Q.' },
        { champion: 'Lulu', difficulty: 'Easy', tip: 'She cant stop your engage. Hook her, she has no escape.' },
        { champion: 'Morgana', difficulty: 'Hard', tip: 'Her E blocks your hook AND flay. Bait it first or hook her ADC.' }
      ],
      combos: [
        { name: 'Basic Engage', inputs: 'Q > Q2 > E > R', damage: 'CC Chain', difficulty: 'Easy' },
        { name: 'Flash Flay', inputs: 'Flash > E > Q', damage: 'Surprise', difficulty: 'Medium' },
        { name: 'Lantern Engage', inputs: 'Give Lantern to jungler > Hook > Click lantern', damage: 'Gank', difficulty: 'Medium' }
      ]
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
      introduction: "Jinx is the ultimate hypercarry. This guide will teach you how to survive lane and become a late game monster.",
      prosAndCons: {
        pros: ['Best late game ADC', 'AoE crits destroy teams', 'Reset passive = pentakills', 'Global ultimate', 'Strong with any support'],
        cons: ['Weak laning phase', 'Zero mobility', 'Needs peel', 'Item dependent', 'Dies instantly if caught']
      },
      itemBuilds: {
        starter: { items: ['Doran\'s Blade', 'Health Potion'], explanation: 'Standard ADC start' },
        core: { items: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge'], explanation: 'Kraken for DPS, PD for kiting and AS, IE for massive crits' },
        situational: [
          { item: 'Lord Dominik\'s Regards', when: 'vs 2+ tanks', icon: '🛡️', priority: 'HIGH' },
          { item: 'Mortal Reminder', when: 'vs healing (Soraka, Aatrox)', icon: '🔥', priority: 'CRITICAL' },
          { item: 'Guardian Angel', when: 'Carrying - cant die', icon: '👼', priority: 'HIGH' },
          { item: 'Bloodthirster', when: 'Need sustain / vs poke', icon: '❤️', priority: 'MEDIUM' },
          { item: 'Rapid Firecannon', when: 'Need safe range', icon: '⚡', priority: 'MEDIUM' }
        ],
        boots: [
          { item: 'Berserker\'s Greaves', when: 'Always - AS is mandatory' }
        ],
        teamCompBuilds: {
          vsDiveComp: {
            name: 'Survivability Jinx',
            icon: '🎯',
            build: ['Galeforce', 'Phantom Dancer', 'Infinity Edge', 'Guardian Angel', 'Bloodthirster'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Galeforce dash gives escape. PD gives MS. GA gives second life. BT shield adds survivability.',
            playstyle: 'Save Galeforce for escaping dives. Position FAR back. Let your team peel. Only go in after divers use cooldowns.'
          },
          vsPokeComp: {
            name: 'Sustain Jinx',
            icon: '🏹',
            build: ['Kraken Slayer', 'Rapid Firecannon', 'Infinity Edge', 'Bloodthirster', 'Lord Dominik\'s Regards'],
            boots: 'Berserker\'s Greaves',
            explanation: 'RFC lets you poke back safely. Bloodthirster sustains through poke. Use rockets (Q) to poke at range.',
            playstyle: 'Trade poke with rockets. Force engages when healthy. Your teamfight is way better than theirs.'
          },
          vsTankComp: {
            name: 'Tank Shredder Jinx',
            icon: '🏰',
            build: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge', 'Lord Dominik\'s Regards', 'Blade of the Ruined King'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Kraken true damage + LDR + BORK %HP = tanks melt. Minigun (Q) shreds them faster.',
            playstyle: 'Use minigun for sustained DPS vs tanks. Switch to rockets for AoE. Cut Down rune mandatory.'
          },
          asHypercarry: {
            name: 'Full Damage Hypercarry',
            icon: '⚔️',
            build: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge', 'Rapid Firecannon', 'Lord Dominik\'s Regards'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Maximum DPS. You ARE the team. Get one reset and pentakill.',
            playstyle: 'Position safely. Wait for reset. Once passive procs, go absolutely crazy. AoE rockets melt teams.'
          },
          withEngageComp: {
            name: 'Teamfight Jinx',
            icon: '💥',
            build: ['Kraken Slayer', 'Runaan\'s Hurricane', 'Infinity Edge', 'Rapid Firecannon', 'Lord Dominik\'s Regards'],
            boots: 'Berserker\'s Greaves',
            explanation: 'Runaan\'s + Rockets = hit entire team. When your team engages, you clean up.',
            playstyle: 'Wait for engage. Position to hit multiple targets with rockets + Runaans. Use ult to snipe low targets.'
          }
        }
      },
      matchups: [
        { champion: 'Draven', difficulty: 'Hard', tip: 'He wins all trades. Farm safely, outscale massively.' },
        { champion: 'Caitlyn', difficulty: 'Medium', tip: 'She out-ranges you. Trade with rockets when possible.' },
        { champion: 'Vayne', difficulty: 'Easy', tip: 'You out-range her. Poke with rockets. She cant touch you.' }
      ],
      combos: [
        { name: 'Poke Trade', inputs: 'W > Auto (Rocket)', damage: 'Low', difficulty: 'Easy' },
        { name: 'Full Combo', inputs: 'W > E > Switch to Minigun > Auto x3', damage: 'High', difficulty: 'Medium' },
        { name: 'Snipe', inputs: 'R across map', damage: 'Execute', difficulty: 'Medium' }
      ]
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
