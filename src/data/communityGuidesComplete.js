// =====================================================
// WORLD-CLASS COMMUNITY GUIDE SYSTEM
// Complete with real items, team comp builds, matchups
// Better than Mobalytics, U.GG, and MOBAFire combined
// Patch 26.02 - Season 2026
// =====================================================

// Current patch info
export const CURRENT_PATCH = '26.02';
export const SEASON = '2026';

// =====================================================
// COMPLETE ITEM DATABASE - SEASON 2026
// =====================================================
export const ITEMS_DATABASE = {
  // MYTHIC/LEGENDARY AD ITEMS
  // Bruiser/Fighter Items
  'Trinity Force': { cost: 3333, stats: { ad: 35, as: 30, hp: 300, ah: 20 }, passive: 'Spellblade: After using an ability, next attack deals 200% base AD. Threefold Strike: Attacks grant 20 MS and 4% base AD per stack (max 5).', buildPath: ['Sheen', 'Hearthbound Axe', 'Kindlegem'], goodFor: ['Bruisers', 'Fighters', 'Splitpushers'], champions: ['Jax', 'Camille', 'Irelia', 'Fiora', 'Volibear'] },
  'Sundered Sky': { cost: 3100, stats: { ad: 55, hp: 300, ah: 15 }, passive: 'Lightshield Strike: First attack on champion deals 9% target max HP bonus damage and heals you (12s CD per target).', buildPath: ['Pickaxe', 'Caulfield\'s Warhammer', 'Ruby Crystal'], goodFor: ['Bruisers', 'Divers'], champions: ['Jax', 'Irelia', 'Jarvan IV', 'Renekton'] },
  'Ravenous Hydra': { cost: 3300, stats: { ad: 70, ah: 20, omnivamp: 10 }, passive: 'Cleave: Attacks deal 60% AD to nearby enemies. Carnivorous: Gain AD based on missing health.', buildPath: ['Tiamat', 'Caulfield\'s Warhammer', 'Vampiric Scepter'], goodFor: ['Splitpushers', 'Waveclear', 'Sustain'], champions: ['Fiora', 'Camille', 'Riven', 'Kled'] },
  'Stridebreaker': { cost: 3300, stats: { ad: 55, as: 20, hp: 400, ah: 20 }, passive: 'Halting Slash: Dash and deal 75% AD damage, slowing enemies by 40% for 3s.', buildPath: ['Ironspike Whip', 'Phage', 'Kindlegem'], goodFor: ['Juggernauts', 'Immobile bruisers'], champions: ['Darius', 'Garen', 'Sett', 'Volibear'] },
  'Goredrinker': { cost: 3300, stats: { ad: 55, hp: 450, ah: 20 }, passive: 'Thirsting Slash: Deal 100% AD damage and heal for 25% missing HP per enemy hit.', buildPath: ['Ironspike Whip', 'Phage', 'Kindlegem'], goodFor: ['Drain tanks', 'Teamfight bruisers'], champions: ['Aatrox', 'Riven', 'Olaf', 'Renekton'] },
  'Black Cleaver': { cost: 3100, stats: { ad: 40, hp: 450, ah: 25 }, passive: 'Carve: Attacks shred 5% armor per hit (max 30%). Rage: Gain MS on dealing physical damage.', buildPath: ['Phage', 'Kindlegem', 'Long Sword'], goodFor: ['Tank shredding', 'Teamfighting'], champions: ['Aatrox', 'Darius', 'Riven', 'Urgot', 'Pantheon'] },
  'Sterak\'s Gage': { cost: 3100, stats: { ad: '50% base AD', hp: 400 }, passive: 'Lifeline: At 30% HP, gain a shield equal to 75% bonus HP for 4s.', buildPath: ['Pickaxe', 'Phage', 'Ruby Crystal'], goodFor: ['Survivability', 'Anti-burst'], champions: ['Darius', 'Jax', 'Irelia', 'Sett'] },
  'Death\'s Dance': { cost: 3300, stats: { ad: 55, armor: 45, ah: 15 }, passive: 'Ignore Pain: 30% damage taken becomes a bleed over 3s. Defy: Takedowns cleanse bleed and heal 15% max HP.', buildPath: ['Pickaxe', 'Chain Vest', 'Caulfield\'s Warhammer'], goodFor: ['Anti-burst', 'Sustained fights'], champions: ['Fiora', 'Riven', 'Aatrox', 'Camille'] },
  'Maw of Malmortius': { cost: 2800, stats: { ad: 65, mr: 40, ah: 15 }, passive: 'Lifeline: At 30% HP from magic damage, gain shield = 150 + 20% max HP.', buildPath: ['Hexdrinker', 'Caulfield\'s Warhammer'], goodFor: ['Anti-AP', 'Magic burst protection'], champions: ['Any AD champion vs AP threats'] },
  'Spear of Shojin': { cost: 3400, stats: { ad: 55, hp: 350, ah: 20 }, passive: 'Dragonforce: Non-ultimate abilities reduce ult CD. Exigency: Gain 0-15% MS based on missing HP.', buildPath: ['Caulfield\'s Warhammer', 'Kindlegem', 'Long Sword'], goodFor: ['Ultimate-reliant champions'], champions: ['Riven', 'Renekton', 'Pantheon', 'Fiora'] },
  'Hullbreaker': { cost: 3000, stats: { ad: 60, hp: 400, armor: 5, mr: 5 }, passive: 'Boarding Party: While alone, gain 20-60 armor/MR. Siege Commander: Nearby minions gain resists.', buildPath: ['Tunneler', 'Phage'], goodFor: ['Splitpush specialists'], champions: ['Yorick', 'Sion', 'Nasus', 'Tryndamere'] },

  // LETHALITY ITEMS
  'Eclipse': { cost: 2800, stats: { ad: 60, lethality: 18, omnivamp: 8 }, passive: 'Ever Rising Moon: Hitting 2 attacks deals 6% max HP bonus damage and grants shield + MS.', buildPath: ['Serrated Dirk', 'Vampiric Scepter'], goodFor: ['Assassins', 'Burst damage'], champions: ['Aatrox', 'Pantheon', 'Kha\'Zix'] },
  'Youmuu\'s Ghostblade': { cost: 2700, stats: { ad: 60, lethality: 18, ah: 15 }, passive: 'Wraith Step: Gain 40 out-of-combat MS. Active: Gain 20% MS and ghosting for 6s.', buildPath: ['Serrated Dirk', 'Caulfield\'s Warhammer'], goodFor: ['Roaming', 'Mobility'], champions: ['Zed', 'Talon', 'Qiyana', 'Pyke'] },
  'Serpent\'s Fang': { cost: 2500, stats: { ad: 55, lethality: 15 }, passive: 'Shield Reaver: Damage reduces shields by 35% (50% for melee).', buildPath: ['Serrated Dirk', 'Long Sword'], goodFor: ['Anti-shield'], champions: ['Any assassin vs shield comps'] },
  'Edge of Night': { cost: 2800, stats: { ad: 50, lethality: 15, hp: 325 }, passive: 'Annul: Spell shield that blocks next ability (40s CD).', buildPath: ['Serrated Dirk', 'Ruby Crystal', 'Pickaxe'], goodFor: ['Anti-CC', 'Survivability'], champions: ['Assassins into CC comps'] },
  'Opportunity': { cost: 2700, stats: { ad: 55, lethality: 18, ms: 4 }, passive: 'Preparation: After 3s out of combat with champions, gain 25% bonus lethality. First attack breaks this.', buildPath: ['Serrated Dirk', 'Boots', 'Long Sword'], goodFor: ['Burst assassins'], champions: ['Zed', 'Talon', 'Kha\'Zix', 'Rengar'] },
  'Hubris': { cost: 3000, stats: { ad: 60, lethality: 18, ah: 10 }, passive: 'Eminence: Takedowns grant 5 AD for 60s (max 20 stacks).', buildPath: ['Serrated Dirk', 'Caulfield\'s Warhammer'], goodFor: ['Snowballing', 'Assassins'], champions: ['Talon', 'Zed', 'Qiyana'] },

  // ADC ITEMS
  'Infinity Edge': { cost: 3400, stats: { ad: 70, crit: 25 }, passive: 'Perfection: If you have 60%+ crit, crits deal 40% bonus damage (210% total with S2026 base).', buildPath: ['B.F. Sword', 'Pickaxe', 'Cloak of Agility'], goodFor: ['Crit ADCs', 'Late game scaling'], champions: ['Jinx', 'Caitlyn', 'Tristana', 'Jhin', 'Aphelios'] },
  'Kraken Slayer': { cost: 3200, stats: { ad: 45, as: 30, crit: 25 }, passive: 'Bring It Down: Every 3rd attack deals 40 + 60% bonus AD true damage.', buildPath: ['Noonquiver', 'Pickaxe', 'Cloak of Agility'], goodFor: ['Tank shredding', 'DPS'], champions: ['Vayne', 'Kog\'Maw', 'Kai\'Sa', 'Kindred'] },
  'Galeforce': { cost: 3200, stats: { ad: 55, as: 20, crit: 25 }, passive: 'Cloudburst: Dash and fire 3 missiles dealing 65-150 + 45% bonus AD damage.', buildPath: ['Noonquiver', 'Cloak of Agility', 'Pickaxe'], goodFor: ['Mobility', 'Immobile ADCs'], champions: ['Jhin', 'Miss Fortune', 'Caitlyn', 'Aphelios'] },
  'Lord Dominik\'s Regards': { cost: 3000, stats: { ad: 40, crit: 25 }, passive: 'Giant Slayer: Deal 0-20% bonus damage based on HP difference. 30% armor penetration.', buildPath: ['Last Whisper', 'Cloak of Agility', 'Pickaxe'], goodFor: ['Tank shredding', 'Late game'], champions: ['All crit ADCs vs tanks'] },
  'Mortal Reminder': { cost: 2800, stats: { ad: 35, crit: 25 }, passive: 'Sepsis: Damage applies 40% Grievous Wounds. 30% armor penetration.', buildPath: ['Last Whisper', 'Executioner\'s Calling'], goodFor: ['Anti-heal'], champions: ['ADCs vs heavy healing'] },
  'Rapid Firecannon': { cost: 2800, stats: { as: 30, crit: 25, ms: 7 }, passive: 'Energized: At 100 stacks, next attack has +150 range and deals bonus magic damage.', buildPath: ['Kircheis Shard', 'Zeal', 'Long Sword'], goodFor: ['Poke', 'Safe range'], champions: ['Caitlyn', 'Jinx', 'Tristana', 'Jhin'] },
  'Phantom Dancer': { cost: 2700, stats: { as: 40, crit: 25, ms: 7 }, passive: 'Spectral Waltz: Attacking grants ghosting and 7% MS for 3s.', buildPath: ['Zeal', 'Dagger', 'Cloak of Agility'], goodFor: ['Kiting', 'Attack speed'], champions: ['Vayne', 'Yasuo', 'Yone', 'Jinx'] },
  'Bloodthirster': { cost: 3400, stats: { ad: 80, crit: 20, lifesteal: 18 }, passive: 'Ichorshield: Overhealing creates a shield up to 10% max HP.', buildPath: ['B.F. Sword', 'Cloak of Agility', 'Vampiric Scepter'], goodFor: ['Sustain', 'Survivability'], champions: ['Draven', 'Samira', 'Aphelios'] },
  'Blade of the Ruined King': { cost: 3300, stats: { ad: 40, as: 25, lifesteal: 8 }, passive: 'Mist\'s Edge: Attacks deal 9% current HP physical damage. Siphon: Steal 25% MS on hit.', buildPath: ['Bilgewater Cutlass', 'Recurve Bow'], goodFor: ['Tank shredding', 'Dueling'], champions: ['Vayne', 'Kog\'Maw', 'Irelia', 'Master Yi'] },
  'Navori Flickerblade': { cost: 3000, stats: { ad: 60, crit: 25, ah: 15 }, passive: 'Deft Strikes: Crits reduce non-ult abilities CD by 15%.', buildPath: ['Caulfield\'s Warhammer', 'Cloak of Agility', 'Pickaxe'], goodFor: ['Ability-reliant ADCs'], champions: ['Xayah', 'Lucian', 'Sivir'] },
  'Hexoptics C44': { cost: 3200, stats: { ad: 50, as: 25, crit: 25 }, passive: 'Magnification: Deal up to 10% increased damage based on distance. Arcane Aim: On takedown, gain 100 bonus range for 6s.', buildPath: ['Pickaxe', 'Noonquiver', 'Long Sword'], goodFor: ['Range extension', 'Teamfights'], champions: ['Caitlyn', 'Jinx', 'Kog\'Maw'] },

  // AP ITEMS
  'Luden\'s Companion': { cost: 2850, stats: { ap: 90, mana: 600, ah: 20 }, passive: 'Surge: Spells deal 100 + 10% AP bonus magic damage and grant 15% MS.', buildPath: ['Lost Chapter', 'Blasting Wand', 'Amplifying Tome'], goodFor: ['Burst mages', 'Poke'], champions: ['Lux', 'Syndra', 'Ahri', 'Xerath'] },
  'Stormsurge': { cost: 2700, stats: { ap: 95, mpen: 10, ms: 5 }, passive: 'Squall: Dealing 35% HP damage marks targets. After 2s, marked targets take bonus magic damage.', buildPath: ['Hextech Alternator', 'Aether Wisp'], goodFor: ['Burst mages', 'Assassins'], champions: ['Fizz', 'Ekko', 'Diana', 'Kennen'] },
  'Malignance': { cost: 2700, stats: { ap: 80, mana: 600, ah: 25 }, passive: 'Hatefog: Ult creates a zone dealing 60 + 12% AP per second. Gain 20 ult haste.', buildPath: ['Lost Chapter', 'Fiendish Codex'], goodFor: ['Ult-reliant champions'], champions: ['Karthus', 'Morgana', 'Fiddlesticks', 'Neeko'] },
  'Shadowflame': { cost: 2800, stats: { ap: 100, mpen: 15, hp: 100 }, passive: 'Cinderbloom: Damage against targets below 35% HP deals bonus magic damage.', buildPath: ['Hextech Alternator', 'Needlessly Large Rod'], goodFor: ['Execute damage', 'Burst'], champions: ['Syndra', 'Viktor', 'Veigar'] },
  'Rabadon\'s Deathcap': { cost: 3600, stats: { ap: 130 }, passive: 'Magical Opus: Gain 35% bonus AP.', buildPath: ['Needlessly Large Rod', 'Needlessly Large Rod', 'Blasting Wand'], goodFor: ['Late game scaling', 'Maximum damage'], champions: ['All AP carries'] },
  'Void Staff': { cost: 2800, stats: { ap: 80, mpen: '40%' }, passive: '40% Magic Penetration.', buildPath: ['Blighting Jewel', 'Blasting Wand'], goodFor: ['Anti-MR', 'Tank shredding'], champions: ['All AP vs MR stacking'] },
  'Zhonya\'s Hourglass': { cost: 3000, stats: { ap: 80, armor: 45, ah: 15 }, passive: 'Stasis: Become invulnerable and untargetable for 2.5s (120s CD).', buildPath: ['Seeker\'s Armguard', 'Fiendish Codex', 'Stopwatch'], goodFor: ['Anti-burst', 'Survivability'], champions: ['All AP vs assassins/AD threats'] },
  'Banshee\'s Veil': { cost: 2600, stats: { ap: 80, mr: 45, ah: 10 }, passive: 'Annul: Spell shield that blocks first ability (40s CD).', buildPath: ['Verdant Barrier', 'Fiendish Codex'], goodFor: ['Anti-AP', 'Spell block'], champions: ['All AP vs engage/pick comps'] },
  'Lich Bane': { cost: 2800, stats: { ap: 85, ah: 15, ms: 8 }, passive: 'Spellblade: After ability, next attack deals 75% base AD + 45% AP bonus magic damage.', buildPath: ['Sheen', 'Aether Wisp', 'Blasting Wand'], goodFor: ['Auto-weaving mages', 'Burst'], champions: ['Fizz', 'Ekko', 'Twisted Fate', 'Viktor'] },
  'Cryptbloom': { cost: 2850, stats: { ap: 70, mpen: '30%', ah: 15 }, passive: 'Life from Death: Takedowns heal nearby allies for 50 + 50% AP.', buildPath: ['Blighting Jewel', 'Fiendish Codex', 'Amplifying Tome'], goodFor: ['Team utility', 'Pen'], champions: ['Support mages', 'Utility mids'] },
  'Bloodletter\'s Curse': { cost: 2900, stats: { ap: 60, hp: 350, ah: 15 }, passive: 'Vile Decay: Ability damage shreds 5% MR per stack (max 30% over 6s).', buildPath: ['Haunting Guise', 'Fiendish Codex'], goodFor: ['AP bruisers', 'Extended fights'], champions: ['Mordekaiser', 'Gwen', 'Singed', 'Swain'] },

  // TANK ITEMS
  'Heartsteel': { cost: 3000, stats: { hp: 800, ah: 10 }, passive: 'Colossal Consumption: Every 30s, attack a champion to deal 6% total HP damage and gain permanent HP.', buildPath: ['Giant\'s Belt', 'Kindlegem', 'Ruby Crystal'], goodFor: ['HP stacking', 'Scaling tanks'], champions: ['Sion', 'Cho\'Gath', 'Dr. Mundo', 'Tahm Kench'] },
  'Jak\'Sho, The Protean': { cost: 3200, stats: { hp: 400, armor: 30, mr: 30, ah: 10 }, passive: 'Voidborn Resilience: Combat grants 2 armor + MR per second (max 8 stacks, +30% bonus resists at max).', buildPath: ['Aegis of the Legion', 'Giant\'s Belt'], goodFor: ['Mixed damage', 'Extended fights'], champions: ['Most tanks', 'Bruisers'] },
  'Sunfire Aegis': { cost: 2700, stats: { hp: 400, armor: 40 }, passive: 'Immolate: Deal 15 + 1.5% bonus HP magic damage per second to nearby enemies.', buildPath: ['Bami\'s Cinder', 'Chain Vest'], goodFor: ['Waveclear', 'Sustained damage'], champions: ['Ornn', 'Sion', 'Malphite', 'Shen'] },
  'Hollow Radiance': { cost: 2800, stats: { hp: 400, mr: 40 }, passive: 'Desolate: Immolate aura with increased MR focus. Good waveclear vs AP.', buildPath: ['Bami\'s Cinder', 'Spectre\'s Cowl'], goodFor: ['Anti-AP', 'Waveclear'], champions: ['Galio', 'Sion vs AP'] },
  'Thornmail': { cost: 2450, stats: { hp: 250, armor: 75 }, passive: 'Thorns: Reflect 10 + 20% bonus armor damage when attacked. Apply 40% Grievous Wounds.', buildPath: ['Bramble Vest', 'Ruby Crystal', 'Chain Vest'], goodFor: ['Anti-heal', 'Anti-auto'], champions: ['Tanks vs ADC/heal comps'] },
  'Randuin\'s Omen': { cost: 2700, stats: { hp: 400, armor: 55 }, passive: 'Rock Solid: Reduce damage from attacks by 5 + 0.35% max HP. Active: Slow nearby enemies by 55% for 2s.', buildPath: ['Warden\'s Mail', 'Giant\'s Belt'], goodFor: ['Anti-crit', 'Slow utility'], champions: ['Tanks vs crit ADCs'] },
  'Dead Man\'s Plate': { cost: 2900, stats: { hp: 400, armor: 50, ms: 5 }, passive: 'Shipwrecker: Moving builds Momentum stacks. At 100, next attack deals bonus damage and slows.', buildPath: ['Chain Vest', 'Giant\'s Belt', 'Winged Moonplate'], goodFor: ['Engage', 'Catching targets'], champions: ['Darius', 'Garen', 'Sett', 'Hecarim'] },
  'Force of Nature': { cost: 2900, stats: { hp: 400, mr: 70, ms: 5 }, passive: 'Absorb: Taking magic damage grants stacks. At max stacks, gain 20% magic damage reduction.', buildPath: ['Spectre\'s Cowl', 'Winged Moonplate'], goodFor: ['Anti-AP', 'Heavy magic damage'], champions: ['Tanks vs AP comps'] },
  'Spirit Visage': { cost: 2900, stats: { hp: 400, mr: 50, ah: 10 }, passive: 'Boundless Vitality: Increase all healing/shielding received by 25%.', buildPath: ['Spectre\'s Cowl', 'Kindlegem'], goodFor: ['Drain tanks', 'Healing synergy'], champions: ['Aatrox', 'Dr. Mundo', 'Warwick', 'Volibear'] },
  'Frozen Heart': { cost: 2500, stats: { mana: 400, armor: 90, ah: 20 }, passive: 'Winter\'s Caress: Reduce nearby enemies\' attack speed by 20%. Rock Solid: Reduce damage from attacks.', buildPath: ['Warden\'s Mail', 'Glacial Buckler'], goodFor: ['Anti-auto', 'CDR'], champions: ['Mana tanks', 'Supports'] },
  'Abyssal Mask': { cost: 2650, stats: { hp: 350, mr: 50 }, passive: 'Unmake: Nearby enemies take 12% increased magic damage.', buildPath: ['Spectre\'s Cowl', 'Catalyst of Aeons'], goodFor: ['AP damage amp', 'Team utility'], champions: ['Tanks in AP comps', 'Diana', 'Amumu'] },
  'Unending Despair': { cost: 2800, stats: { hp: 350, armor: 40, mr: 40, ah: 10 }, passive: 'Anguish: Every 6s, deal 4% max HP magic damage to nearby enemies and heal for the same.', buildPath: ['Kindlegem', 'Chain Vest', 'Null-Magic Mantle'], goodFor: ['Sustain', 'Extended fights'], champions: ['All tanks', 'Drain fighters'] },
  'Kaenic Rookern': { cost: 2900, stats: { hp: 300, mr: 80 }, passive: 'Magebane: After not taking magic damage for 6s, gain a magic shield equal to 18% max HP.', buildPath: ['Spectre\'s Cowl', 'Negatron Cloak'], goodFor: ['Heavy AP burst'], champions: ['Any vs double AP'] },
  'Protoplasm Harness': { cost: 2800, stats: { hp: 450, armor: 35, mr: 35 }, passive: 'Lifeline: When below 30% HP, gain MS and tenacity. Provides move and tenacity for escape or continue fighting.', buildPath: ['Kindlegem', 'Cloth Armor', 'Null-Magic Mantle'], goodFor: ['Engage tanks', 'Survivability'], champions: ['Tank supports', 'Engage tanks'] },

  // SUPPORT ITEMS
  'Locket of the Iron Solari': { cost: 2500, stats: { armor: 35, mr: 35, ah: 15 }, passive: 'Devotion: Active shields nearby allies for 180-360 based on level for 2.5s.', buildPath: ['Aegis of the Legion', 'Kindlegem'], goodFor: ['Team protection', 'Engage supports'], champions: ['Leona', 'Nautilus', 'Thresh', 'Braum'] },
  'Zeke\'s Convergence': { cost: 2400, stats: { armor: 25, mr: 25, ah: 20, hp: 250 }, passive: 'Conduit: Bind to ally. Casting ult near them burns enemies for magic damage.', buildPath: ['Kindlegem', 'Glacial Buckler'], goodFor: ['ADC buff', 'Teamfights'], champions: ['Engage supports'] },
  'Knight\'s Vow': { cost: 2200, stats: { hp: 350, ah: 15 }, passive: 'Pledge: Bind to ally. Take 10% of their damage. Heal for 8% of damage they deal nearby.', buildPath: ['Kindlegem', 'Rejuvenation Bead'], goodFor: ['ADC protection'], champions: ['Braum', 'Taric', 'Thresh'] },
  'Redemption': { cost: 2300, stats: { hp: 200, mana: 100, ah: 15, heal_shield: 20 }, passive: 'Active: Heal allies and damage enemies in a large area after 2.5s delay.', buildPath: ['Forbidden Idol', 'Kindlegem'], goodFor: ['Team healing', 'Enchanters'], champions: ['Soraka', 'Janna', 'Lulu', 'Sona'] },
  'Staff of Flowing Water': { cost: 2200, stats: { ap: 50, mana: 100, ah: 10, heal_shield: 10 }, passive: 'Rapids: Healing/shielding grants you and target 20 AP and 20 AH for 4s.', buildPath: ['Forbidden Idol', 'Amplifying Tome'], goodFor: ['AP buff', 'Enchanters'], champions: ['Janna', 'Karma', 'Lulu', 'Nami'] },
  'Ardent Censer': { cost: 2200, stats: { ap: 50, mana: 100, ah: 10, heal_shield: 10 }, passive: 'Sanctify: Healing/shielding grants you and target 10-30% AS and magic on-hit.', buildPath: ['Forbidden Idol', 'Amplifying Tome'], goodFor: ['ADC buff', 'Attack speed comps'], champions: ['Lulu', 'Janna', 'Nami', 'Yuumi'] },
  'Mikael\'s Blessing': { cost: 2300, stats: { mr: 50, mana: 100, ah: 15, heal_shield: 15 }, passive: 'Purify: Active removes CC from ally and heals them.', buildPath: ['Forbidden Idol', 'Spectre\'s Cowl'], goodFor: ['Anti-CC', 'Cleanse'], champions: ['Any enchanter vs CC comps'] },
  'Bandlepipes': { cost: 2400, stats: { hp: 250, armor: 25, mr: 25, ah: 10 }, passive: 'Fanfare: Slowing/immobilizing enemies grants 20 MS and nearby allies gain 30% attack speed.', buildPath: ['Kindlegem', 'Cloth Armor', 'Null-Magic Mantle'], goodFor: ['Attack speed aura', 'Engage supports'], champions: ['Leona', 'Nautilus', 'Alistar'] },

  // BOOTS
  'Plated Steelcaps': { cost: 1100, stats: { armor: 20, ms: 45 }, passive: 'Block 12% damage from attacks.', goodFor: ['vs AD/Auto attackers'], when: 'Enemy has 2+ AD threats or auto-attack focused champions' },
  'Mercury\'s Treads': { cost: 1100, stats: { mr: 25, ms: 45 }, passive: '30% tenacity.', goodFor: ['vs CC/AP'], when: 'Enemy has heavy CC or AP damage' },
  'Ionian Boots of Lucidity': { cost: 900, stats: { ah: 20, ms: 45 }, passive: '10 Summoner Spell Haste.', goodFor: ['CDR focus'], when: 'Want maximum ability haste' },
  'Sorcerer\'s Shoes': { cost: 1100, stats: { mpen: 18, ms: 45 }, goodFor: ['AP damage'], when: 'Maximum magic damage output' },
  'Berserker\'s Greaves': { cost: 1100, stats: { as: 35, ms: 45 }, goodFor: ['Attack speed'], when: 'ADCs and auto-attackers' },
  'Boots of Swiftness': { cost: 900, stats: { ms: 60 }, passive: '25% slow resistance.', goodFor: ['Mobility'], when: 'Need to avoid slows, roaming' },
  'Symbiotic Soles': { cost: 900, stats: { ms: 45, adaptive: 10 }, passive: 'Movement near allies grants adaptive force.', goodFor: ['Team-oriented'], when: 'Group often with team' }
};

// =====================================================
// TEAM COMPOSITION TYPES & ITEM BUILDS
// =====================================================
export const TEAM_COMPOSITIONS = {
  DIVE_COMP: {
    name: 'Dive Composition',
    description: 'Focus on diving the enemy backline to eliminate carries. High burst and mobility.',
    strategy: 'Coordinate dives on enemy carries. Assassins/divers go in together to burst priority targets.',
    champions: {
      top: ['Camille', 'Irelia', 'Jax', 'Renekton', 'Kled'],
      jungle: ['Vi', 'Jarvan IV', 'Lee Sin', 'Diana', 'Nocturne'],
      mid: ['Akali', 'Diana', 'Sylas', 'Ekko', 'Fizz'],
      adc: ['Kai\'Sa', 'Tristana', 'Samira', 'Nilah'],
      support: ['Leona', 'Nautilus', 'Alistar', 'Rell']
    },
    itemAdaptations: {
      top: ['Build burst items like Eclipse or Trinity Force. Death\'s Dance for survivability after diving.'],
      jungle: ['Prioritize damage over tank stats. Eclipse or Goredrinker for sustain.'],
      mid: ['Stormsurge + Lich Bane for maximum burst. Zhonya\'s to survive after diving.'],
      adc: ['Galeforce for dash to follow up. Collector for execution.'],
      support: ['Locket for team protection. Zeke\'s for damage amp on ADC.']
    },
    counters: ['Disengage comps', 'Peel-heavy supports', 'Exhaust'],
    strengths: ['Quick objective takes after winning fights', 'Snowball potential'],
    weaknesses: ['Falls apart if dive fails', 'Weak to peel']
  },

  POKE_COMP: {
    name: 'Poke Composition',
    description: 'Whittle down enemies from range before engaging. Control objectives through threat.',
    strategy: 'Stay grouped, poke from range, only engage when enemies are low. Siege towers safely.',
    champions: {
      top: ['Jayce', 'Gnar', 'Gangplank', 'Kennen'],
      jungle: ['Nidalee', 'Graves', 'Taliyah', 'Karthus'],
      mid: ['Xerath', 'Lux', 'Zoe', 'Vel\'Koz', 'Ziggs'],
      adc: ['Ezreal', 'Caitlyn', 'Varus', 'Jhin'],
      support: ['Lux', 'Xerath', 'Karma', 'Janna']
    },
    itemAdaptations: {
      top: ['Poke builds with Muramana/Eclipse. Stay back and contribute poke.'],
      jungle: ['AP poke builds. Luden\'s for burst poke.'],
      mid: ['Luden\'s Companion mandatory. Max mpen with Shadowflame + Void Staff.'],
      adc: ['Essence Reaver for Ezreal. RFC for extra range. Manamune if needed.'],
      support: ['Imperial Mandate or Luden\'s for poke damage.']
    },
    counters: ['Hard engage comps', 'Flankers', 'Tanks who can soak poke'],
    strengths: ['Safe objective control', 'Tower siege', 'Low risk'],
    weaknesses: ['Weak if engaged on', 'Long fights favor enemies', 'Requires skill shots']
  },

  ENGAGE_COMP: {
    name: 'Engage/Wombo Composition',
    description: 'Hard engage with AoE CC and damage. Win through coordinated teamfights.',
    strategy: 'Group as 5, look for multi-man engages, layer CC and AoE damage for wombo combo.',
    champions: {
      top: ['Malphite', 'Ornn', 'Kennen', 'Wukong', 'Gragas'],
      jungle: ['Amumu', 'Sejuani', 'Zac', 'Jarvan IV', 'Diana'],
      mid: ['Orianna', 'Neeko', 'Galio', 'Lissandra', 'Yone'],
      adc: ['Miss Fortune', 'Jinx', 'Twitch', 'Aphelios'],
      support: ['Leona', 'Nautilus', 'Rakan', 'Alistar', 'Rell']
    },
    itemAdaptations: {
      top: ['Full tank for engage. Jak\'Sho + Thornmail. Radiant Virtue for teamfights.'],
      jungle: ['Tank engage items. Sunfire + Jak\'Sho. Abyssal Mask for magic amp.'],
      mid: ['Zhonya\'s mandatory for diving in. Rabadon\'s for AoE damage.'],
      adc: ['Standard crit build. Position behind engage, follow up with damage.'],
      support: ['Locket mandatory. Zeke\'s + Knight\'s Vow for protecting ADC.']
    },
    counters: ['Disengage comps', 'Split push', 'Poke before engage'],
    strengths: ['Wins 5v5s', 'Clear win condition', 'Easy to execute'],
    weaknesses: ['Requires grouping', 'Weak if behind', 'Ult-dependent']
  },

  PROTECT_COMP: {
    name: 'Protect the Carry Composition',
    description: 'Build around 1-2 hypercarries. Peel and protect them to victory.',
    strategy: 'Keep your hypercarry alive at all costs. Front-to-back teamfighting.',
    champions: {
      top: ['Ornn', 'Maokai', 'Shen', 'Cho\'Gath', 'Sion'],
      jungle: ['Zac', 'Sejuani', 'Ivern', 'Nunu', 'Warwick'],
      mid: ['Orianna', 'Lulu', 'Zilean', 'Karma', 'Seraphine'],
      adc: ['Jinx', 'Kog\'Maw', 'Vayne', 'Aphelios', 'Twitch'],
      support: ['Lulu', 'Janna', 'Yuumi', 'Taric', 'Braum']
    },
    itemAdaptations: {
      top: ['Full tank. Locket if support goes damage. Knight\'s Vow for ADC.'],
      jungle: ['Supportive tank. Zeke\'s Convergence. Redemption if teamfight focused.'],
      mid: ['Enchanter builds. Staff of Flowing Water + Ardent Censer to buff carry.'],
      adc: ['Maximum DPS. Kraken Slayer + IE + LDR. Position safely.'],
      support: ['Ardent Censer + Staff mandatory. Redemption for teamfight heals.']
    },
    counters: ['Dive comps', 'Assassins', 'Pick comps'],
    strengths: ['Late game scaling', 'Clear win condition', 'Strong teamfights'],
    weaknesses: ['ADC dependent', 'Weak early', 'Loses if carry dies']
  },

  SPLITPUSH_COMP: {
    name: 'Split Push Composition',
    description: 'Apply pressure across multiple lanes. 1-3-1 or 1-4 formations.',
    strategy: 'Splitter draws 2+, team takes objectives. Constant pressure forces mistakes.',
    champions: {
      top: ['Fiora', 'Jax', 'Tryndamere', 'Camille', 'Yorick'],
      jungle: ['Master Yi', 'Graves', 'Viego', 'Kindred'],
      mid: ['Twisted Fate', 'Ryze', 'Ekko', 'Kassadin'],
      adc: ['Sivir', 'Ezreal', 'Caitlyn', 'Xayah'],
      support: ['Janna', 'Morgana', 'Karma', 'Bard']
    },
    itemAdaptations: {
      top: ['Hullbreaker mandatory. Trinity/Sunderer + BORK for dueling.'],
      jungle: ['BORK for dueling. Build for 1v1 potential.'],
      mid: ['Lich Bane for tower damage. Waveclear + mobility items.'],
      adc: ['Waveclear items. RFC for safe pushing. Don\'t fight 4v5.'],
      support: ['Disengage tools. Mandate for poke. Don\'t engage 4v5.']
    },
    counters: ['Hard engage comps', 'Globals like TF/Shen', 'Teleport'],
    strengths: ['Map control', 'Forces rotations', 'Strong 1v1'],
    weaknesses: ['Coordination intensive', 'Weak 5v5', 'Punished by globals']
  },

  PICK_COMP: {
    name: 'Pick Composition',
    description: 'Catch out isolated targets with burst and CC. Snowball through picks.',
    strategy: 'Control vision, catch enemies rotating, burst isolated targets, take objectives.',
    champions: {
      top: ['Camille', 'Gwen', 'Rengar', 'Kled'],
      jungle: ['Elise', 'Lee Sin', 'Evelynn', 'Rengar', 'Kha\'Zix'],
      mid: ['Ahri', 'Zoe', 'LeBlanc', 'Syndra', 'Twisted Fate'],
      adc: ['Jhin', 'Ashe', 'Varus', 'Kai\'Sa'],
      support: ['Thresh', 'Blitzcrank', 'Pyke', 'Morgana', 'Bard']
    },
    itemAdaptations: {
      top: ['Burst damage. Eclipse or Prowler\'s Claw. Mobility boots for roams.'],
      jungle: ['Full damage assassin. Opportunity for burst. Sweeper always.'],
      mid: ['Burst AP. Stormsurge + Shadowflame. Mejai\'s if snowballing.'],
      adc: ['RFC + Rapidfire for catch potential. Galeforce for mobility.'],
      support: ['Mobility boots. Umbral Glaive for vision control. Deadman\'s for roams.']
    },
    counters: ['Grouped teams', 'Vision denial', 'Tanks'],
    strengths: ['Snowball potential', 'Objective control', 'Gold leads'],
    weaknesses: ['Falls off late', 'Weak 5v5', 'Requires coordination']
  },

  TANK_COMP: {
    name: 'Full Tank Composition',
    description: 'Multiple tanky champions. Win through attrition and sustained fights.',
    strategy: 'Extended fights favor you. Stack resistances, sustain through damage.',
    champions: {
      top: ['Ornn', 'Sion', 'Malphite', 'Cho\'Gath', 'Mundo'],
      jungle: ['Zac', 'Sejuani', 'Rammus', 'Amumu', 'Nunu'],
      mid: ['Galio', 'Malphite', 'Gragas', 'Cho\'Gath'],
      adc: ['Vayne', 'Kog\'Maw', 'Kai\'Sa'],
      support: ['Braum', 'Alistar', 'Tahm Kench', 'Leona']
    },
    itemAdaptations: {
      top: ['Full tank. Heartsteel for scaling. Thornmail/Force of Nature based on enemy.'],
      jungle: ['Full tank. Sunfire + Jak\'Sho. Abyssal Mask for team damage amp.'],
      mid: ['Tank or AP bruiser. Hollow Radiance + Jak\'Sho. Zhonya\'s.'],
      adc: ['Tank shredding ADC mandatory. BORK + Kraken + LDR.'],
      support: ['Knight\'s Vow + Locket. Redemption for teamfight sustain.']
    },
    counters: ['%HP damage', 'Vayne/Kog\'Maw', 'Cut Down/LDR stacking'],
    strengths: ['Hard to kill', 'Long fights', 'Objective control'],
    weaknesses: ['Low damage', 'Kited easily', 'Loses to true damage']
  }
};

// =====================================================
// ADAPTIVE ITEM BUILDS
// When to build what against what
// =====================================================
export const SITUATIONAL_BUILDS = {
  againstHeavyAP: {
    condition: 'Enemy has 3+ AP threats or fed AP carry',
    itemChoices: {
      fighters: ['Maw of Malmortius', 'Spirit Visage', 'Force of Nature'],
      tanks: ['Force of Nature', 'Kaenic Rookern', 'Abyssal Mask', 'Hollow Radiance'],
      adcs: ['Maw of Malmortius', 'Wit\'s End'],
      mages: ['Banshee\'s Veil', 'Abyssal Mask'],
      supports: ['Mikael\'s Blessing', 'Locket']
    },
    boots: 'Mercury\'s Treads',
    explanation: 'Stack MR items. Force of Nature gives 20% magic damage reduction at max stacks. Kaenic Rookern provides magic shield.'
  },

  againstHeavyAD: {
    condition: 'Enemy has 4+ AD threats or fed AD carry',
    itemChoices: {
      fighters: ['Death\'s Dance', 'Randuin\'s Omen', 'Frozen Heart'],
      tanks: ['Thornmail', 'Randuin\'s Omen', 'Frozen Heart', 'Unending Despair'],
      adcs: ['Guardian Angel', 'Randuin\'s (situational)'],
      mages: ['Zhonya\'s Hourglass'],
      supports: ['Locket', 'Frozen Heart']
    },
    boots: 'Plated Steelcaps',
    explanation: 'Thornmail + Randuin\'s combo is devastating. Frozen Heart attack speed slow is crucial. Death\'s Dance bleed passive buys time.'
  },

  againstHeavyHealing: {
    condition: 'Enemy has Soraka, Yuumi, Aatrox, Vladimir, or 2+ healing sources',
    itemChoices: {
      fighters: ['Thornmail (if tanky)', 'Mortal Reminder', 'Chempunk Chainsword'],
      tanks: ['Thornmail'],
      adcs: ['Mortal Reminder'],
      mages: ['Morellonomicon'],
      supports: ['Oblivion Orb → Morellonomicon', 'Thornmail if tank support']
    },
    explanation: 'ALWAYS build Grievous Wounds. Thornmail is best for tanks. Mortal Reminder for ADCs. Morellonomicon for AP.'
  },

  againstHeavyShields: {
    condition: 'Enemy has Lulu, Janna, Seraphine, or multiple shield items',
    itemChoices: {
      assassins: ['Serpent\'s Fang'],
      fighters: ['Serpent\'s Fang (if lethality works)'],
      mages: ['Shadowflame (executes through shields)']
    },
    explanation: 'Serpent\'s Fang is 2500g and reduces shields by 50% for melee. Mandatory against shield comps.'
  },

  againstDiveComps: {
    condition: 'Enemy wants to dive your backline (Camille, Vi, Nocturne, etc.)',
    itemChoices: {
      adcs: ['Galeforce (dash away)', 'Guardian Angel', 'Bloodthirster (shield)'],
      mages: ['Zhonya\'s Hourglass', 'Banshee\'s Veil'],
      supports: ['Locket', 'Redemption', 'Mikael\'s (for CC)']
    },
    explanation: 'Survival items are mandatory. Zhonya\'s buys 2.5s for team to peel. GA gives second chance. Galeforce provides escape dash.'
  },

  againstTankComps: {
    condition: 'Enemy has 3+ tanks or high HP targets',
    itemChoices: {
      fighters: ['Black Cleaver (armor shred)', 'BORK (%HP)', 'Serylda\'s Grudge'],
      adcs: ['Lord Dominik\'s Regards', 'BORK', 'Kraken Slayer'],
      mages: ['Void Staff', 'Liandry\'s Torment', 'Cryptbloom']
    },
    runes: ['Cut Down (Precision)', 'Giant Slayer items'],
    explanation: 'LDR + Cut Down combo shreds tanks. BORK does %current HP. Black Cleaver provides 30% armor shred for team.'
  },

  splitPushing: {
    condition: 'You are the designated split pusher',
    itemChoices: {
      top: ['Hullbreaker', 'Trinity Force/Sunderer', 'BORK', 'Sterak\'s'],
      jungle: ['BORK', 'Trinity Force', 'Death\'s Dance']
    },
    boots: 'Boots of Swiftness (or defensive boots)',
    wards: 'Control ward in river, defensive ward in enemy jungle',
    explanation: 'Hullbreaker is mandatory for dedicated split pushing. Gives 60 armor/MR when alone and empowers minions.'
  }
};

// =====================================================
// COMPLETE GUIDE TEMPLATE
// =====================================================
export const GUIDE_SECTIONS = {
  overview: {
    name: 'Overview',
    icon: '📋',
    required: true,
    fields: ['introduction', 'prosAndCons', 'playstyle', 'difficulty']
  },
  abilities: {
    name: 'Abilities',
    icon: '⚡',
    required: true,
    fields: ['passive', 'q', 'w', 'e', 'r', 'skillOrder', 'abilityTips', 'combos']
  },
  runes: {
    name: 'Runes',
    icon: '🔮',
    required: true,
    fields: ['primaryTree', 'keystone', 'primaryRunes', 'secondaryTree', 'secondaryRunes', 'statShards', 'runeExplanation', 'situationalRunes']
  },
  items: {
    name: 'Item Builds',
    icon: '🛡️',
    required: true,
    fields: ['starterItems', 'coreItems', 'bootOptions', 'situationalItems', 'fullBuildExamples', 'buildOrder', 'teamCompAdaptations']
  },
  laning: {
    name: 'Laning Phase',
    icon: '🏠',
    required: true,
    fields: ['earlyGame', 'level1', 'level2Spike', 'level3', 'level6', 'tradingPatterns', 'waveManagement', 'backTimings', 'jungleTracking']
  },
  matchups: {
    name: 'Matchups',
    icon: '⚔️',
    required: true,
    fields: ['easyMatchups', 'mediumMatchups', 'hardMatchups', 'counterMatchups', 'matchupTips']
  },
  teamfighting: {
    name: 'Teamfighting',
    icon: '👥',
    required: true,
    fields: ['positioning', 'targetPriority', 'roleInFight', 'teamCompSynergies', 'objectiveControl']
  },
  macro: {
    name: 'Macro & Game Sense',
    icon: '🗺️',
    required: false,
    fields: ['splitPushing', 'roaming', 'objectivePriority', 'warding', 'shotcalling']
  },
  advanced: {
    name: 'Advanced Tips',
    icon: '🎓',
    required: false,
    fields: ['mechanics', 'animations', 'hiddenTech', 'proTips', 'commonMistakes']
  }
};

// =====================================================
// SAMPLE WORLD-CLASS GUIDE
// =====================================================
export const sampleWorldClassGuide = {
  id: 'guide-aatrox-world-class-001',
  title: 'The Complete Aatrox Bible - Challenger Guide Season 2026',
  champion: 'Aatrox',
  role: 'Top',
  patch: CURRENT_PATCH,
  author: {
    id: 'author-001',
    username: 'DarkinBlade',
    rank: 'Challenger',
    peakRank: 'Rank 15 NA',
    server: 'NA',
    mainChampion: 'Aatrox',
    gamesPlayed: 2500,
    winRate: 67,
    verified: true,
    socials: { twitch: 'darkinblade', twitter: '@darkinblade', youtube: 'DarkinBlade' }
  },
  
  ratings: {
    overall: 4.9,
    helpful: 4.9,
    accuracy: 4.8,
    detail: 5.0,
    upToDate: 4.9,
    totalVotes: 1247
  },
  
  sections: {
    overview: {
      introduction: `Welcome to the most comprehensive Aatrox guide for Season 2026. I'm DarkinBlade, a Challenger Aatrox one-trick with over 2,500 games and a 67% win rate. This guide will teach you EVERYTHING about Aatrox - from basic mechanics to advanced techniques that separate good Aatrox players from great ones.
      
Aatrox is a drain-tank bruiser who excels at sustained teamfighting and 1v2 situations. His kit rewards precision with his Q sweetspots and provides incredible sustain through his passive and ultimate.`,
      
      prosAndCons: {
        pros: [
          'Incredible sustain in teamfights with ultimate',
          'Strong lane bully against most melees',
          'Game-changing AoE ultimate',
          'Can 1v2 or 1v3 when ahead',
          'Satisfying to master - high skill ceiling'
        ],
        cons: [
          'Hard countered by Grievous Wounds',
          'Skillshot reliant - can miss everything',
          'Falls off late game vs hypercarries',
          'Weak to ranged poke matchups',
          'Requires practice to hit sweetspots'
        ]
      },
      
      playstyle: 'Aggressive lane bully who transitions into teamfight drain tank. Look for extended trades where you can land multiple Q sweetspots.',
      difficulty: 'ADVANCED'
    },
    
    abilities: {
      passive: {
        name: 'Deathbringer Stance',
        description: 'Periodically empowers next basic attack to deal bonus damage and heal Aatrox.',
        tips: [
          'Use to last hit under tower',
          'Combos with Q1 for quick trade',
          'Cooldown reduced by abilities landing on champions',
          'Reset timing: ~24s base, reduced by ~2s per ability hit on champion'
        ]
      },
      q: {
        name: 'The Darkin Blade',
        description: 'Three-part slash combo. Sweetspot (edge) deals increased damage and knocks up.',
        tips: [
          'Q1 is fastest, Q2 is medium, Q3 is slowest',
          'Can Flash during ANY Q animation',
          'Sweetspot deals 60% bonus damage',
          'Q3 sweetspot is crucial for max damage'
        ],
        maxOrder: 1
      },
      w: {
        name: 'Infernal Chains',
        description: 'Skillshot that damages and slows. If enemy stays in zone, pulls them back.',
        tips: [
          'Use AFTER Q1 for guaranteed hit',
          'Great for zoning enemies',
          'Crucial for setting up ganks',
          'Can hit through minions'
        ],
        maxOrder: 3
      },
      e: {
        name: 'Umbral Dash',
        description: 'Short dash. Passive: Heal for percentage of damage dealt to champions.',
        tips: [
          'Use to reposition Q sweetspots',
          'Can E during Q animation',
          'Save for escape if enemy jungler missing',
          'Passive healing = sustain in lane'
        ],
        maxOrder: 2
      },
      r: {
        name: 'World Ender',
        description: 'Transform for 10s, gaining AD, MS, and increased healing. Revive on takedown.',
        tips: [
          'Use at FIGHT START, not when low',
          'Fear enemies on cast',
          'Revive extends duration',
          'Increased healing works with passive and E'
        ]
      },
      skillOrder: 'Q > E > W. R at 6/11/16. Max Q first always.',
      combos: [
        { name: 'Basic Trade', inputs: 'Q1 > E forward > Q2 > Auto', damage: 'Medium', difficulty: 'Easy', notes: 'Short trade, disengage after' },
        { name: 'Full Combo', inputs: 'Q1 > E > Q2 > W > Q3', damage: 'High', difficulty: 'Medium', notes: 'W lands between Q2 and Q3' },
        { name: 'All-In', inputs: 'R > Q1 > E > Q2 > W > Q3 > Auto > Q1...', damage: 'Maximum', difficulty: 'Medium', notes: 'Start with R for bonus AD' },
        { name: 'Flash Q3', inputs: 'Q3 > Flash (during animation)', damage: 'High', difficulty: 'Hard', notes: 'Extends range significantly, catches people off guard' },
        { name: 'E Flash Q', inputs: 'E > Flash > Q', damage: 'High', difficulty: 'Hard', notes: 'Maximum gap close, very hard to react to' }
      ]
    },
    
    runes: {
      primary: {
        tree: 'Precision',
        keystone: 'Conqueror',
        runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'],
        explanation: 'Conqueror stacks rapidly with Q (each sweetspot = 2 stacks). Fully stacked provides ~35-45 AD and 8% healing from champion damage. Triumph saves you in close fights. Tenacity is crucial against CC. Last Stand synergizes with your drain tank playstyle.'
      },
      secondary: {
        tree: 'Resolve',
        runes: ['Second Wind', 'Unflinching'],
        explanation: 'Second Wind provides sustain in lane, especially vs poke. Unflinching gives more tenacity and slow resist when low HP - perfect for staying in fights.'
      },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health'],
      situationalRunes: [
        { vs: 'Heavy ranged poke (Teemo, Jayce, Quinn)', change: 'Take Fleet Footwork instead of Conqueror with Second Wind + Overgrowth' },
        { vs: 'Multiple tanks', change: 'Take Cut Down instead of Last Stand' },
        { vs: 'AP heavy', change: 'Second Wind + Overgrowth with MR shard' },
        { vs: 'Burst matchups (Riven, Renekton)', change: 'Bone Plating instead of Second Wind' }
      ]
    },
    
    items: {
      starterItems: [
        { items: ['Doran\'s Blade', 'Health Potion'], when: 'Standard start - most matchups', explanation: 'Best all-around start for trading' },
        { items: ['Doran\'s Shield', 'Health Potion'], when: 'vs poke (Teemo, Jayce, Kennen)', explanation: 'Sustain through poke lanes' },
        { items: ['Long Sword', 'Refillable Potion'], when: 'Easy matchup, want early dirk', explanation: 'Faster item spike' }
      ],
      
      coreItems: {
        standard: {
          build: ['Eclipse', 'Black Cleaver', 'Sterak\'s Gage'],
          explanation: 'Eclipse provides burst and shield. Cleaver shreds armor for team. Sterak\'s prevents burst.',
          powerSpikes: ['Serrated Dirk (level 3-4)', 'Eclipse (level 8-9)', 'Eclipse + Cleaver (level 11-12)']
        },
        tankier: {
          build: ['Goredrinker', 'Black Cleaver', 'Spirit Visage'],
          explanation: 'Goredrinker for sustained fights. Spirit Visage amplifies all healing by 25%.',
          when: 'Enemy has heavy burst or you need to be tankier for team'
        },
        splitpush: {
          build: ['Eclipse', 'Black Cleaver', 'Hullbreaker'],
          explanation: 'Hullbreaker for 1v1 and tower taking.',
          when: 'Team needs split pressure, you\'re ahead'
        }
      },
      
      bootOptions: [
        { item: 'Plated Steelcaps', when: 'vs AD heavy / auto attackers (Tryndamere, Jax, ADC fed)', priority: 'High' },
        { item: 'Mercury\'s Treads', when: 'vs AP heavy or CC heavy teams', priority: 'High' },
        { item: 'Ionian Boots', when: 'Snowballing, want more ability haste', priority: 'Medium' }
      ],
      
      situationalItems: [
        { item: 'Death\'s Dance', when: 'vs heavy AD burst (Riven, Zed, full AD team)', explanation: 'Bleed passive buys time to heal' },
        { item: 'Maw of Malmortius', when: 'vs heavy AP burst', explanation: 'Magic shield saves you' },
        { item: 'Spirit Visage', when: 'vs AP + want more healing', explanation: '25% increased healing is massive' },
        { item: 'Thornmail', when: 'vs heavy healing (Soraka, Aatrox mirror, Fiora)', explanation: 'Applies Grievous Wounds when CC\'d or attacked' },
        { item: 'Serylda\'s Grudge', when: 'Need more sticking power, enemy kiting', explanation: 'Slow on abilities + armor pen' },
        { item: 'Guardian Angel', when: 'You\'re the carry, can\'t afford to die in fights', explanation: 'Second chance' }
      ],
      
      teamCompAdaptations: {
        vsDiveComp: {
          build: ['Goredrinker', 'Black Cleaver', 'Death\'s Dance', 'Sterak\'s Gage', 'Gargoyle Stoneplate'],
          explanation: 'Maximum survivability. You\'ll be dove - survive it.'
        },
        vsPokeComp: {
          build: ['Eclipse', 'Force of Nature', 'Black Cleaver', 'Spirit Visage'],
          explanation: 'Force of Nature reduces poke damage. Spirit Visage increases sustain.'
        },
        vsTankComp: {
          build: ['Eclipse', 'Black Cleaver', 'Serylda\'s Grudge', 'Lord Dominik\'s Regards'],
          explanation: 'Maximum armor shred. Cleaver + LDR = melting tanks.'
        },
        asEngager: {
          build: ['Goredrinker', 'Black Cleaver', 'Dead Man\'s Plate', 'Force of Nature'],
          explanation: 'Tanky engage build with movement speed to get in.'
        },
        asSplitpusher: {
          build: ['Eclipse', 'Black Cleaver', 'Hullbreaker', 'Death\'s Dance'],
          explanation: 'Hullbreaker for 1v1 and tower damage.'
        }
      }
    },
    
    matchups: {
      easy: [
        { champion: 'Sion', difficulty: 'Easy', tip: 'Interrupt his Q with your Q. Free lane. Cut Down rune.', runeChange: 'Cut Down', itemChange: 'Black Cleaver rush' },
        { champion: 'Cho\'Gath', difficulty: 'Easy', tip: 'Dodge Q, punish with full combo. Outscale not possible but win lane hard.', runeChange: 'Cut Down' },
        { champion: 'Garen', difficulty: 'Easy', tip: 'Space properly. Q him when he Qs. Disengage his spin. Win extended.', runeChange: null },
        { champion: 'Malphite', difficulty: 'Easy', tip: 'Free lane. He can\'t kill you. Take towers. Cut Down mandatory.', runeChange: 'Cut Down', itemChange: 'Black Cleaver' }
      ],
      medium: [
        { champion: 'Darius', difficulty: 'Medium', tip: 'Disengage at 4 stacks. Your healing outsustains his bleed if you don\'t get 5-stacked. Short trades.', runeChange: null },
        { champion: 'Sett', difficulty: 'Medium', tip: 'Sidestep his W true damage center. Win if he misses W. Don\'t clump for his E.', runeChange: null },
        { champion: 'Mordekaiser', difficulty: 'Medium', tip: 'Dodge his Q poke. You can beat him in Death Realm if even. Buy QSS if needed.', runeChange: null },
        { champion: 'Riven', difficulty: 'Medium', tip: 'Bone Plating absorbs her combo. Space your Qs around her dashes. Don\'t fight level 1.', runeChange: 'Bone Plating' }
      ],
      hard: [
        { champion: 'Fiora', difficulty: 'Hard', tip: 'She parries your Q3 or W. Bait parry with W, then Q3. Very skill matchup.', runeChange: null, itemChange: 'Bramble Vest early' },
        { champion: 'Irelia', difficulty: 'Hard', tip: 'Don\'t fight in your minion wave. Her passive stacked = lose. Fight when her passive is down.', runeChange: 'Bone Plating' },
        { champion: 'Camille', difficulty: 'Hard', tip: 'She wins short trades with passive shield. Fight extended when shield is down.', runeChange: 'Bone Plating' }
      ],
      counter: [
        { champion: 'Teemo', difficulty: 'Counter', tip: 'Take Fleet Footwork, Second Wind, Doran\'s Shield. Farm til 6, all-in with ult.', runeChange: 'Fleet Footwork + Second Wind' },
        { champion: 'Vayne', difficulty: 'Counter', tip: 'Phase Rush to stick to her. All-in or nothing. Can\'t trade.', runeChange: 'Phase Rush' },
        { champion: 'Quinn', difficulty: 'Counter', tip: 'Wait for her to E before engaging. Fleet + Second Wind to survive.', runeChange: 'Fleet Footwork + Second Wind' }
      ]
    },
    
    teamfighting: {
      positioning: 'Front line but NOT the engage. Wait for your engage tank, then follow up. Or flank from fog of war.',
      targetPriority: ['Low mobility carries (Jinx, Kog\'Maw)', 'Anyone without Flash', 'Squishy targets you can burst'],
      roleInFight: 'Drain tank. Dive in with R, land multiple Q sweetspots, heal through damage, zone enemy backline.',
      tips: [
        'Pop R at fight START for bonus AD, not when low',
        'Hit as many people with Q sweetspots as possible',
        'W to zone ADC from fight',
        'Don\'t commit alone - follow your team\'s engage'
      ]
    },
    
    advanced: {
      mechanics: [
        'Q animation can be buffered with E',
        'Q3 > Flash extends range by flash distance',
        'W hitbox is larger than indicator',
        'Passive auto attack resets your attack timer'
      ],
      hiddenTech: [
        'You can E during any Q animation',
        'W can be aimed during Q animation',
        'R fear can interrupt channels',
        'Passive cooldown reduced more by sweetspot hits'
      ],
      commonMistakes: [
        'Using E aggressively when enemy jungler position unknown',
        'Ulting when already low (ult at fight start)',
        'Missing Q sweetspots - practice in practice tool',
        'Fighting without Conqueror fully stacked',
        'Taking bad recalls and losing waves'
      ]
    }
  },
  
  comments: [
    { id: 'c1', author: 'PlatiPlayer', rank: 'Platinum', content: 'This guide got me from Plat 4 to Diamond 2. The matchup section is incredibly detailed.', upvotes: 234, date: '2026-01-15' },
    { id: 'c2', author: 'IreliaMain', rank: 'Diamond', content: 'The item adaptation section is what sets this apart. Knowing what to build vs different comps is huge.', upvotes: 187, date: '2026-01-20' },
    { id: 'c3', author: 'TopDiff', rank: 'Master', content: 'Finally a guide that explains WHY to build certain items, not just what to build. Great work!', upvotes: 156, date: '2026-01-25' }
  ],
  
  stats: {
    views: 47823,
    bookmarks: 3421,
    createdAt: '2026-01-01',
    updatedAt: '2026-01-30'
  }
};

// =====================================================
// MORE SAMPLE GUIDES
// =====================================================
export const communityGuides = [
  sampleWorldClassGuide,
  {
    id: 'guide-jinx-002',
    title: 'Grandmaster Jinx Guide - Get Excited! Season 2026',
    champion: 'Jinx',
    role: 'ADC',
    patch: CURRENT_PATCH,
    author: {
      id: 'author-002',
      username: 'RocketQueen',
      rank: 'Grandmaster',
      server: 'EUW',
      verified: true,
      gamesPlayed: 1800,
      winRate: 62
    },
    ratings: { overall: 4.8, helpful: 4.9, accuracy: 4.7, detail: 4.8, upToDate: 4.8, totalVotes: 892 },
    sections: {
      overview: {
        introduction: 'Jinx is the ultimate hypercarry. This guide covers everything from surviving lane to carrying late game teamfights.',
        prosAndCons: {
          pros: ['Best late game ADC', 'AoE crits in teamfights', 'Reset passive = pentakills', 'Global ultimate'],
          cons: ['Weak laning', 'No mobility', 'Needs peel', 'Item dependent']
        }
      },
      items: {
        coreItems: {
          standard: {
            build: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge'],
            explanation: 'Kraken for DPS, PD for kiting, IE for crits'
          }
        },
        teamCompAdaptations: {
          vsDiveComp: {
            build: ['Galeforce', 'Phantom Dancer', 'Infinity Edge', 'Guardian Angel'],
            explanation: 'Galeforce dash + GA = survive dives'
          },
          vsPokeComp: {
            build: ['Kraken Slayer', 'Rapid Firecannon', 'Infinity Edge', 'Bloodthirster'],
            explanation: 'RFC poke back, Bloodthirster sustain'
          },
          vsTankComp: {
            build: ['Kraken Slayer', 'Lord Dominik\'s Regards', 'Infinity Edge', 'BORK'],
            explanation: 'Maximum tank shred'
          }
        }
      }
    },
    stats: { views: 31205, bookmarks: 2104 }
  },
  {
    id: 'guide-thresh-003',
    title: 'Diamond Thresh Playmaker Guide - Hook City',
    champion: 'Thresh',
    role: 'Support',
    patch: CURRENT_PATCH,
    author: {
      id: 'author-003',
      username: 'HookMaster',
      rank: 'Diamond',
      server: 'KR',
      verified: false,
      gamesPlayed: 950,
      winRate: 58
    },
    ratings: { overall: 4.6, helpful: 4.7, accuracy: 4.5, detail: 4.6, upToDate: 4.6, totalVotes: 523 },
    sections: {
      overview: {
        introduction: 'Thresh is the ultimate playmaking support. Learn to control lanes, roam effectively, and carry from support.',
        prosAndCons: {
          pros: ['Playmaking potential', 'Versatile kit', 'Lantern saves', 'Strong roams'],
          cons: ['Skillshot reliant', 'Squishy early', 'High skill floor', 'Falls off without souls']
        }
      },
      items: {
        teamCompAdaptations: {
          vsEngageComp: {
            build: ['Locket of the Iron Solari', 'Knight\'s Vow', 'Redemption'],
            explanation: 'Peel and protect your carry from dive'
          },
          vsPokeComp: {
            build: ['Locket', 'Mikael\'s Blessing', 'Redemption'],
            explanation: 'Sustain through poke, cleanse CC'
          }
        }
      }
    },
    stats: { views: 18920, bookmarks: 1230 }
  }
];

// =====================================================
// GUIDE VALIDATION
// =====================================================
export const validateGuide = (guide) => {
  const errors = [];
  
  if (!guide.title || guide.title.length < 10) errors.push('Title must be at least 10 characters');
  if (!guide.champion) errors.push('Champion is required');
  if (!guide.role) errors.push('Role is required');
  if (!guide.sections?.overview?.introduction || guide.sections.overview.introduction.length < 100) {
    errors.push('Introduction must be at least 100 characters');
  }
  if (!guide.sections?.items?.coreItems) errors.push('Core item build is required');
  if (!guide.sections?.runes?.primary?.keystone) errors.push('Primary keystone is required');
  
  return { valid: errors.length === 0, errors };
};

// Export
export default {
  CURRENT_PATCH,
  SEASON,
  ITEMS_DATABASE,
  TEAM_COMPOSITIONS,
  SITUATIONAL_BUILDS,
  GUIDE_SECTIONS,
  sampleWorldClassGuide,
  communityGuides,
  validateGuide
};
