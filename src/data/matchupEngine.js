// Dynamic Matchup Generator Engine
// Generates matchups for ALL 172 champions vs ALL champions

// Champion characteristics database for matchup calculations
export const championTraits = {
  // Top Laners
  Aatrox: { range: 'melee', damage: 'physical', sustain: 5, mobility: 3, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['healing reduction', 'kiting', 'cc chains'], goodInto: ['short trades', 'melees', 'squishies'], weakTo: ['Fiora', 'Irelia', 'Camille'], strongVs: ['Malphite', 'Ornn', 'Sion'], playstyle: 'drain tank', keyAbility: 'Q sweetspots' },
  Camille: { range: 'melee', damage: 'mixed', sustain: 3, mobility: 5, cc: 3, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 5, difficulty: 'hard', counters: ['early aggression', 'cc', 'armor'], goodInto: ['immobile targets', 'split push'], weakTo: ['Jax', 'Renekton', 'Poppy'], strongVs: ['Gangplank', 'Vladimir', 'Kayle'], playstyle: 'diver', keyAbility: 'E hookshot' },
  Chogath: { range: 'melee', damage: 'magic', sustain: 4, mobility: 1, cc: 4, burst: 4, dps: 2, tankiness: 5, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['kiting', 'mobility', '%hp damage'], goodInto: ['melee trades', 'teamfights'], weakTo: ['Vayne', 'Fiora', 'Gwen'], strongVs: ['Yasuo', 'Yone', 'Riven'], playstyle: 'tank', keyAbility: 'R execute stacks' },
  Darius: { range: 'melee', damage: 'physical', sustain: 3, mobility: 1, cc: 3, burst: 5, dps: 4, tankiness: 4, earlygame: 5, lategame: 3, difficulty: 'easy', counters: ['kiting', 'range', 'disengage'], goodInto: ['melee all-ins', 'short trades'], weakTo: ['Quinn', 'Vayne', 'Kayle'], strongVs: ['Garen', 'Sett', 'Mordekaiser'], playstyle: 'juggernaut', keyAbility: 'passive bleed stacks' },
  DrMundo: { range: 'melee', damage: 'magic', sustain: 5, mobility: 2, cc: 1, burst: 2, dps: 3, tankiness: 5, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['healing reduction', 'early aggression', '%hp damage'], goodInto: ['poke lanes', 'AP matchups'], weakTo: ['Fiora', 'Gwen', 'Vayne'], strongVs: ['Maokai', 'Ornn', 'Malphite'], playstyle: 'tank', keyAbility: 'R regeneration' },
  Fiora: { range: 'melee', damage: 'physical', sustain: 4, mobility: 4, cc: 1, burst: 4, dps: 5, tankiness: 2, earlygame: 3, lategame: 5, difficulty: 'hard', counters: ['cc chains', 'bramble vest', 'team focus'], goodInto: ['tanks', 'bruisers', 'split push'], weakTo: ['Malphite', 'Poppy', 'Quinn'], strongVs: ['Aatrox', 'Darius', 'Sett'], playstyle: 'duelist', keyAbility: 'W parry timing' },
  Gangplank: { range: 'melee', damage: 'physical', sustain: 3, mobility: 2, cc: 2, burst: 5, dps: 4, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['early all-in', 'gap closers', 'hard engage'], goodInto: ['ranged poke', 'scaling lanes'], weakTo: ['Camille', 'Irelia', 'Lucian'], strongVs: ['Malphite', 'Ornn', 'Sion'], playstyle: 'scaling crit', keyAbility: 'barrel combos' },
  Garen: { range: 'melee', damage: 'physical', sustain: 4, mobility: 2, cc: 1, burst: 4, dps: 3, tankiness: 4, earlygame: 3, lategame: 3, difficulty: 'easy', counters: ['kiting', 'range', 'cc'], goodInto: ['melee trades', 'assassins'], weakTo: ['Vayne', 'Quinn', 'Kayle'], strongVs: ['Yasuo', 'Yone', 'Akali'], playstyle: 'juggernaut', keyAbility: 'passive regen' },
  Gnar: { range: 'both', damage: 'physical', sustain: 2, mobility: 3, cc: 4, burst: 3, dps: 3, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['all-in when mini', 'hard engage', 'gap closers'], goodInto: ['melee lanes', 'teamfight comps'], weakTo: ['Irelia', 'Camille', 'Riven'], strongVs: ['Darius', 'Garen', 'Sett'], playstyle: 'transform', keyAbility: 'Mega Gnar R' },
  Gwen: { range: 'melee', damage: 'magic', sustain: 4, mobility: 3, cc: 1, burst: 4, dps: 5, tankiness: 3, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'cc chains', 'burst'], goodInto: ['tanks', 'bruisers', 'melee'], weakTo: ['Irelia', 'Riven', 'Camille'], strongVs: ['Ornn', 'Malphite', 'Sion'], playstyle: 'ap fighter', keyAbility: 'W mist invulnerability' },
  Illaoi: { range: 'melee', damage: 'physical', sustain: 5, mobility: 1, cc: 2, burst: 4, dps: 4, tankiness: 4, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['mobility', 'disengage', 'don\'t fight in R'], goodInto: ['melee all-ins', 'ganks'], weakTo: ['Mordekaiser', 'Kayle', 'Vayne'], strongVs: ['Darius', 'Garen', 'Sett'], playstyle: 'juggernaut', keyAbility: 'R tentacle slam' },
  Irelia: { range: 'melee', damage: 'physical', sustain: 4, mobility: 5, cc: 2, burst: 4, dps: 5, tankiness: 3, earlygame: 4, lategame: 4, difficulty: 'hard', counters: ['cc', 'burst', 'don\'t let stack passive'], goodInto: ['ranged', 'squishies', 'teamfights'], weakTo: ['Tryndamere', 'Volibear', 'Sett'], strongVs: ['Fiora', 'Riven', 'Gangplank'], playstyle: 'diver', keyAbility: 'Q reset mechanics' },
  Jax: { range: 'melee', damage: 'mixed', sustain: 2, mobility: 3, cc: 2, burst: 3, dps: 5, tankiness: 4, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early poke', 'kiting', 'cc chains'], goodInto: ['auto attackers', 'split push'], weakTo: ['Malphite', 'Gragas', 'Akali'], strongVs: ['Fiora', 'Irelia', 'Tryndamere'], playstyle: 'duelist', keyAbility: 'E counterstrike' },
  Jayce: { range: 'both', damage: 'physical', sustain: 1, mobility: 3, cc: 2, burst: 4, dps: 3, tankiness: 2, earlygame: 5, lategame: 3, difficulty: 'hard', counters: ['all-in', 'sustain', 'outscale'], goodInto: ['melee lanes', 'poke comps'], weakTo: ['Irelia', 'Wukong', 'Malphite'], strongVs: ['Gangplank', 'Kayle', 'Nasus'], playstyle: 'poke', keyAbility: 'Q+E poke combo' },
  Kayle: { range: 'scaling', damage: 'magic', sustain: 3, mobility: 2, cc: 1, burst: 3, dps: 5, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'dive', 'snowball'], goodInto: ['scaling lanes', 'late game comps'], weakTo: ['Irelia', 'Riven', 'Camille'], strongVs: ['Nasus', 'Cho\'Gath', 'Ornn'], playstyle: 'hypercarry', keyAbility: 'level 6/11/16 spikes' },
  Kennen: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 4, burst: 4, dps: 3, tankiness: 2, earlygame: 4, lategame: 4, difficulty: 'medium', counters: ['sustain', 'MR', 'spread out'], goodInto: ['melee lanes', 'teamfights'], weakTo: ['Irelia', 'Sylas', 'Vladimir'], strongVs: ['Darius', 'Garen', 'Sett'], playstyle: 'teamfight mage', keyAbility: 'R engage' },
  Kled: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 3, burst: 4, dps: 4, tankiness: 4, earlygame: 5, lategame: 3, difficulty: 'medium', counters: ['poke off Skaarl', 'disengage', 'kiting'], goodInto: ['all-in lanes', 'engage comps'], weakTo: ['Fiora', 'Kayle', 'Quinn'], strongVs: ['Gangplank', 'Jayce', 'Kennen'], playstyle: 'diver', keyAbility: 'remount mechanic' },
  Malphite: { range: 'melee', damage: 'magic', sustain: 2, mobility: 2, cc: 4, burst: 4, dps: 2, tankiness: 5, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['AP damage', 'sustain', '%hp damage'], goodInto: ['AD comps', 'teamfights'], weakTo: ['Darius', 'Gwen', 'Sylas'], strongVs: ['Jayce', 'Quinn', 'Tryndamere'], playstyle: 'tank engage', keyAbility: 'R unstoppable engage' },
  Mordekaiser: { range: 'melee', damage: 'magic', sustain: 4, mobility: 1, cc: 2, burst: 4, dps: 4, tankiness: 4, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['QSS', 'kiting', 'mobility'], goodInto: ['melee fights', 'isolation'], weakTo: ['Fiora', 'Vayne', 'Gangplank'], strongVs: ['Sett', 'Garen', 'Darius'], playstyle: 'ap juggernaut', keyAbility: 'R death realm' },
  Nasus: { range: 'melee', damage: 'physical', sustain: 4, mobility: 1, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 1, lategame: 5, difficulty: 'easy', counters: ['early aggression', 'freezing', 'kiting'], goodInto: ['scaling lanes', 'tanks'], weakTo: ['Darius', 'Illaoi', 'Olaf'], strongVs: ['Kayle', 'Vladimir', 'Cho\'Gath'], playstyle: 'scaling juggernaut', keyAbility: 'Q stacking' },
  Olaf: { range: 'melee', damage: 'physical', sustain: 4, mobility: 3, cc: 1, burst: 3, dps: 5, tankiness: 3, earlygame: 5, lategame: 3, difficulty: 'medium', counters: ['kiting', 'burst', 'cc after R'], goodInto: ['cc comps', 'tanks'], weakTo: ['Vayne', 'Quinn', 'Kayle'], strongVs: ['Ornn', 'Malphite', 'Nasus'], playstyle: 'berserker', keyAbility: 'R cc immunity' },
  Ornn: { range: 'melee', damage: 'magic', sustain: 2, mobility: 2, cc: 5, burst: 3, dps: 2, tankiness: 5, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['sustain', '%hp damage', 'true damage'], goodInto: ['teamfights', 'AD comps'], weakTo: ['Fiora', 'Vayne', 'Gwen'], strongVs: ['Riven', 'Yasuo', 'Yone'], playstyle: 'tank support', keyAbility: 'item upgrades + R engage' },
  Pantheon: { range: 'melee', damage: 'physical', sustain: 2, mobility: 3, cc: 3, burst: 5, dps: 3, tankiness: 3, earlygame: 5, lategame: 2, difficulty: 'easy', counters: ['outscale', 'armor', 'sustain'], goodInto: ['squishies', 'early fights'], weakTo: ['Malphite', 'Shen', 'Ornn'], strongVs: ['Gangplank', 'Kayle', 'Jayce'], playstyle: 'early game assassin', keyAbility: 'empowered W stun' },
  Poppy: { range: 'melee', damage: 'physical', sustain: 2, mobility: 2, cc: 5, burst: 3, dps: 2, tankiness: 5, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['poke', 'sustain', 'no dashes'], goodInto: ['dash champions', 'divers'], weakTo: ['Darius', 'Mordekaiser', 'Olaf'], strongVs: ['Camille', 'Irelia', 'Riven'], playstyle: 'anti-mobility tank', keyAbility: 'W dash block' },
  Quinn: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 4, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 5, lategame: 3, difficulty: 'medium', counters: ['gap closers', 'hard engage', 'team focus'], goodInto: ['melee lanes', 'roaming'], weakTo: ['Malphite', 'Irelia', 'Wukong'], strongVs: ['Darius', 'Garen', 'Nasus'], playstyle: 'ranged bully', keyAbility: 'E disengage + blind' },
  Renekton: { range: 'melee', damage: 'physical', sustain: 3, mobility: 3, cc: 3, burst: 4, dps: 4, tankiness: 4, earlygame: 5, lategame: 2, difficulty: 'medium', counters: ['outscale', 'kiting', 'don\'t fight early'], goodInto: ['melee all-ins', 'early game comps'], weakTo: ['Vayne', 'Quinn', 'Kayle'], strongVs: ['Riven', 'Yasuo', 'Yone'], playstyle: 'early lane bully', keyAbility: 'empowered W stun' },
  Riven: { range: 'melee', damage: 'physical', sustain: 2, mobility: 5, cc: 2, burst: 5, dps: 4, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['armor', 'cc', 'respect level 1'], goodInto: ['squishies', 'ranged'], weakTo: ['Renekton', 'Poppy', 'Malphite'], strongVs: ['Kayle', 'Gangplank', 'Jayce'], playstyle: 'combo assassin', keyAbility: 'animation cancels' },
  Rumble: { range: 'melee', damage: 'magic', sustain: 2, mobility: 2, cc: 2, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['MR', 'sustain', 'all-in when overheated'], goodInto: ['melee clumps', 'teamfights'], weakTo: ['Sylas', 'Irelia', 'Yasuo'], strongVs: ['Gnar', 'Jayce', 'Kennen'], playstyle: 'teamfight mage', keyAbility: 'R equalizer' },
  Sett: { range: 'melee', damage: 'physical', sustain: 3, mobility: 2, cc: 4, burst: 4, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['kiting', 'don\'t fight in W', 'poke'], goodInto: ['melee fights', 'teamfights'], weakTo: ['Lillia', 'Quinn', 'Vayne'], strongVs: ['Camille', 'Yone', 'Yasuo'], playstyle: 'juggernaut', keyAbility: 'W grit shield + true damage' },
  Shen: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 3, burst: 2, dps: 3, tankiness: 4, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['split push', 'poke', 'cancel R'], goodInto: ['AD carries', 'global plays'], weakTo: ['Mordekaiser', 'Darius', 'Gwen'], strongVs: ['Jayce', 'Quinn', 'Vayne'], playstyle: 'global tank', keyAbility: 'R global shield' },
  Singed: { range: 'melee', damage: 'magic', sustain: 3, mobility: 3, cc: 2, burst: 2, dps: 3, tankiness: 4, earlygame: 2, lategame: 4, difficulty: 'hard', counters: ['don\'t chase', 'hard cc', 'gank early'], goodInto: ['melee lanes', 'proxy farming'], weakTo: ['Kayle', 'Vayne', 'Gnar'], strongVs: ['Darius', 'Garen', 'Renekton'], playstyle: 'proxy disruptor', keyAbility: 'Q poison trail' },
  Sion: { range: 'melee', damage: 'physical', sustain: 2, mobility: 2, cc: 4, burst: 3, dps: 2, tankiness: 5, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['mobility', '%hp damage', 'interrupt Q'], goodInto: ['teamfights', 'AD comps'], weakTo: ['Fiora', 'Vayne', 'Gwen'], strongVs: ['Riven', 'Jayce', 'Quinn'], playstyle: 'cc tank', keyAbility: 'Q charge knockup' },
  TahmKench: { range: 'melee', damage: 'magic', sustain: 4, mobility: 2, cc: 3, burst: 3, dps: 3, tankiness: 5, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['poke', 'kiting', '%hp damage'], goodInto: ['melee trades', 'saving allies'], weakTo: ['Fiora', 'Vayne', 'Gwen'], strongVs: ['Riven', 'Yasuo', 'Irelia'], playstyle: 'tank brawler', keyAbility: 'W ally save' },
  Teemo: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 2, cc: 1, burst: 3, dps: 4, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['gap closers', 'oracle lens', 'all-in'], goodInto: ['auto attackers', 'melee lanes'], weakTo: ['Irelia', 'Yorick', 'Pantheon'], strongVs: ['Nasus', 'Tryndamere', 'Jax'], playstyle: 'ranged bully', keyAbility: 'Q blind + R shrooms' },
  Tryndamere: { range: 'melee', damage: 'physical', sustain: 3, mobility: 3, cc: 1, burst: 4, dps: 5, tankiness: 3, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['armor', 'cc chains', 'exhaust'], goodInto: ['split push', 'squishies'], weakTo: ['Malphite', 'Nasus', 'TahmKench'], strongVs: ['Kayle', 'Gangplank', 'Jayce'], playstyle: 'split push carry', keyAbility: 'R undying rage' },
  Urgot: { range: 'ranged', damage: 'physical', sustain: 3, mobility: 2, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['kiting', 'poke', 'don\'t stand in legs'], goodInto: ['melee matchups', 'tanks'], weakTo: ['Vayne', 'Kayle', 'Cassiopeia'], strongVs: ['Darius', 'Garen', 'Sett'], playstyle: 'ranged juggernaut', keyAbility: 'passive leg shotguns' },
  Vayne: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 4, cc: 2, burst: 4, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['burst', 'hard engage', 'early aggression'], goodInto: ['tanks', 'bruisers'], weakTo: ['Malphite', 'Quinn', 'Teemo'], strongVs: ['Darius', 'Garen', 'Sett'], playstyle: 'tank shredder', keyAbility: 'W silver bolts %hp' },
  Vladimir: { range: 'ranged', damage: 'magic', sustain: 5, mobility: 2, cc: 1, burst: 5, dps: 4, tankiness: 3, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'healing reduction', 'burst'], goodInto: ['scaling lanes', 'teamfights'], weakTo: ['Malzahar', 'Anivia', 'Ryze'], strongVs: ['Kayle', 'Gangplank', 'Nasus'], playstyle: 'scaling battle mage', keyAbility: 'W pool untargetability' },
  Volibear: { range: 'melee', damage: 'mixed', sustain: 4, mobility: 3, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['kiting', 'healing reduction', '%hp damage'], goodInto: ['melee lanes', 'tower dives'], weakTo: ['Lillia', 'Vayne', 'Cassiopeia'], strongVs: ['Irelia', 'Riven', 'Yasuo'], playstyle: 'diving juggernaut', keyAbility: 'R tower disable' },
  Warwick: { range: 'melee', damage: 'magic', sustain: 5, mobility: 3, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['healing reduction', 'kiting', 'QSS'], goodInto: ['low hp targets', 'melee'], weakTo: ['Olaf', 'Tryndamere', 'Fiora'], strongVs: ['Shen', 'Ornn', 'Malphite'], playstyle: 'sustain fighter', keyAbility: 'passive heal on low targets' },
  Wukong: { range: 'melee', damage: 'physical', sustain: 2, mobility: 3, cc: 4, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['pink wards', 'cc', 'armor'], goodInto: ['teamfights', 'squishies'], weakTo: ['Darius', 'Renekton', 'Sett'], strongVs: ['Jayce', 'Quinn', 'Teemo'], playstyle: 'teamfight diver', keyAbility: 'R double knockup' },
  Yone: { range: 'melee', damage: 'mixed', sustain: 3, mobility: 4, cc: 3, burst: 4, dps: 5, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'cc', 'burst'], goodInto: ['scaling lanes', 'teamfights'], weakTo: ['Renekton', 'Sett', 'Pantheon'], strongVs: ['Kayle', 'Gangplank', 'Vladimir'], playstyle: 'scaling carry', keyAbility: 'E snap back + R engage' },
  Yorick: { range: 'melee', damage: 'physical', sustain: 3, mobility: 1, cc: 2, burst: 3, dps: 4, tankiness: 4, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['kill ghouls', 'mobility', 'waveclear'], goodInto: ['split push', 'tanks'], weakTo: ['Irelia', 'Jax', 'Tryndamere'], strongVs: ['Kayle', 'Gangplank', 'Shen'], playstyle: 'split push', keyAbility: 'R maiden + ghouls' },

  // Junglers
  Amumu: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 5, burst: 3, dps: 3, tankiness: 4, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['invade', 'counter jungle', 'spread out'], goodInto: ['teamfights', 'grouped enemies'], weakTo: ['LeeSin', 'Nidalee', 'Elise'], strongVs: ['MasterYi', 'Kayn', 'Viego'], playstyle: 'tank engage', keyAbility: 'R aoe stun' },
  BelVeth: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 1, burst: 3, dps: 5, tankiness: 3, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early invades', 'cc', 'burst'], goodInto: ['scaling comps', 'objectives'], weakTo: ['LeeSin', 'Elise', 'Nidalee'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'scaling dps', keyAbility: 'passive infinite scaling' },
  Briar: { range: 'melee', damage: 'physical', sustain: 5, mobility: 3, cc: 2, burst: 4, dps: 4, tankiness: 3, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['cc', 'healing reduction', 'kiting'], goodInto: ['squishies', 'isolated targets'], weakTo: ['Amumu', 'Rammus', 'Udyr'], strongVs: ['Nidalee', 'Karthus', 'Lillia'], playstyle: 'berserker diver', keyAbility: 'W frenzy lifesteal' },
  Diana: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 3, burst: 5, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['early invade', 'cc', 'spread out'], goodInto: ['grouped enemies', 'ap comps'], weakTo: ['LeeSin', 'Elise', 'Gragas'], strongVs: ['Evelynn', 'Karthus', 'Fiddlesticks'], playstyle: 'ap assassin', keyAbility: 'R moonfall' },
  Ekko: { range: 'melee', damage: 'magic', sustain: 3, mobility: 4, cc: 3, burst: 5, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['early aggression', 'cc', 'track R position'], goodInto: ['squishies', 'skirmishes'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'ap assassin', keyAbility: 'R rewind' },
  Elise: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 4, cc: 3, burst: 4, dps: 3, tankiness: 2, earlygame: 5, lategame: 2, difficulty: 'hard', counters: ['scaling', 'invade back', 'tanky comps'], goodInto: ['early ganks', 'tower dives'], weakTo: ['Shyvana', 'Karthus', 'Diana'], strongVs: ['Amumu', 'Sejuani', 'Evelynn'], playstyle: 'early game assassin', keyAbility: 'E cocoon stun' },
  Evelynn: { range: 'melee', damage: 'magic', sustain: 3, mobility: 3, cc: 2, burst: 5, dps: 3, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['pink wards', 'early invades', 'group'], goodInto: ['squishies', 'isolated targets'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'assassin', keyAbility: 'passive camo + R execute' },
  Fiddlesticks: { range: 'ranged', damage: 'magic', sustain: 4, mobility: 2, cc: 4, burst: 5, dps: 4, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['ward jungle', 'invade early', 'spread out'], goodInto: ['grouped enemies', 'objective fights'], weakTo: ['LeeSin', 'Olaf', 'Udyr'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'ambush mage', keyAbility: 'R crowstorm' },
  Gragas: { range: 'melee', damage: 'magic', sustain: 3, mobility: 3, cc: 4, burst: 4, dps: 3, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['sustain', 'scaling', 'dodge Q'], goodInto: ['skirmishes', 'picks'], weakTo: ['Karthus', 'Diana', 'Lillia'], strongVs: ['LeeSin', 'Elise', 'Nidalee'], playstyle: 'ap bruiser', keyAbility: 'R explosive cask' },
  Graves: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 3, cc: 1, burst: 4, dps: 4, tankiness: 3, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['hard engage', 'tank comps', 'outscale'], goodInto: ['squishies', 'invades'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Nidalee', 'Elise', 'LeeSin'], playstyle: 'adc jungler', keyAbility: 'passive armor stacks' },
  Hecarim: { range: 'melee', damage: 'physical', sustain: 3, mobility: 5, cc: 3, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['cc', 'kiting', 'counter ganks'], goodInto: ['immobile carries', 'backline access'], weakTo: ['Rammus', 'Poppy', 'Trundle'], strongVs: ['Nidalee', 'Elise', 'Karthus'], playstyle: 'diver', keyAbility: 'R fear engage' },
  Ivern: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 2, cc: 3, burst: 1, dps: 2, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['invade', 'early fights', 'anti-shield'], goodInto: ['hyper carries', 'peel comps'], weakTo: ['Olaf', 'Udyr', 'Trundle'], strongVs: ['Evelynn', 'Karthus', 'Fiddlesticks'], playstyle: 'enchanter jungle', keyAbility: 'R Daisy' },
  JarvanIV: { range: 'melee', damage: 'physical', sustain: 2, mobility: 4, cc: 4, burst: 4, dps: 3, tankiness: 3, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['dashes', 'flash out of R', 'tanky comps'], goodInto: ['immobile carries', 'teamfights'], weakTo: ['LeeSin', 'Gragas', 'Vi'], strongVs: ['Amumu', 'Sejuani', 'Karthus'], playstyle: 'engage diver', keyAbility: 'R cataclysm' },
  Karthus: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 1, cc: 2, burst: 4, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['invade early', 'sustain', 'hexdrinker'], goodInto: ['scaling comps', 'low hp enemies'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'scaling mage', keyAbility: 'R global execute' },
  Kayn: { range: 'melee', damage: 'physical', sustain: 3, mobility: 5, cc: 2, burst: 4, dps: 4, tankiness: 3, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early invades', 'cc', 'delayed form'], goodInto: ['squishies or tanks depending on form'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'assassin/bruiser', keyAbility: 'E wall pass + form transform' },
  KhaZix: { range: 'melee', damage: 'physical', sustain: 2, mobility: 4, cc: 1, burst: 5, dps: 4, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['group up', 'pink wards', 'armor'], goodInto: ['isolated targets', 'squishies'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Evelynn', 'Karthus', 'Fiddlesticks'], playstyle: 'assassin', keyAbility: 'isolation damage' },
  Kindred: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 3, cc: 1, burst: 3, dps: 5, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['invade marks', 'hard engage', 'burst'], goodInto: ['skirmishes', 'marks'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'marksman jungle', keyAbility: 'R lamb\'s respite' },
  LeeSin: { range: 'melee', damage: 'physical', sustain: 3, mobility: 5, cc: 3, burst: 4, dps: 3, tankiness: 3, earlygame: 5, lategame: 2, difficulty: 'hard', counters: ['scaling', 'tanky comps', 'peel'], goodInto: ['early skirmishes', 'picks'], weakTo: ['Rammus', 'Sejuani', 'Amumu'], strongVs: ['Karthus', 'Evelynn', 'Fiddlesticks'], playstyle: 'early playmaker', keyAbility: 'insec kick' },
  Lillia: { range: 'melee', damage: 'magic', sustain: 2, mobility: 4, cc: 3, burst: 3, dps: 4, tankiness: 2, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['hard engage', 'burst', 'cc'], goodInto: ['kitable comps', 'teamfights'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'ap speedster', keyAbility: 'R sleep' },
  MasterYi: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 0, burst: 3, dps: 5, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'easy', counters: ['hard cc', 'early invades', 'burst'], goodInto: ['low cc comps', 'squishies'], weakTo: ['Rammus', 'Amumu', 'Elise'], strongVs: ['Karthus', 'Evelynn', 'Fiddlesticks'], playstyle: 'hypercarry', keyAbility: 'Q untargetable + R reset' },
  Nidalee: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 4, cc: 1, burst: 5, dps: 3, tankiness: 1, earlygame: 5, lategame: 2, difficulty: 'hard', counters: ['tank comps', 'hard engage', 'outscale'], goodInto: ['early skirmishes', 'poke'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Karthus', 'Evelynn', 'Fiddlesticks'], playstyle: 'early game assassin', keyAbility: 'spear + cougar execute' },
  Nocturne: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 2, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 3, difficulty: 'easy', counters: ['group up', 'cc', 'peel'], goodInto: ['isolated carries', 'split push'], weakTo: ['Rammus', 'Amumu', 'Poppy'], strongVs: ['Evelynn', 'Karthus', 'Nidalee'], playstyle: 'assassin diver', keyAbility: 'R paranoia' },
  Nunu: { range: 'melee', damage: 'magic', sustain: 4, mobility: 3, cc: 4, burst: 3, dps: 3, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['interrupt W', 'invade', 'spread out'], goodInto: ['objective control', 'ganks'], weakTo: ['Olaf', 'Morgana', 'Sivir'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'tank ganker', keyAbility: 'W snowball' },
  Poppy: { range: 'melee', damage: 'physical', sustain: 2, mobility: 2, cc: 5, burst: 3, dps: 2, tankiness: 5, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['poke', 'sustain', 'no dashes'], goodInto: ['dash champions', 'divers'], weakTo: ['Olaf', 'Mordekaiser', 'Lillia'], strongVs: ['LeeSin', 'Kindred', 'Nidalee'], playstyle: 'anti-mobility tank', keyAbility: 'W dash block' },
  Rammus: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 4, burst: 2, dps: 3, tankiness: 5, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['AP damage', 'kiting', 'disengage'], goodInto: ['AD comps', 'auto attackers'], weakTo: ['Lillia', 'Morgana', 'Elise'], strongVs: ['MasterYi', 'Graves', 'Kindred'], playstyle: 'armor tank', keyAbility: 'taunt + thornmail effect' },
  RekSai: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 3, burst: 4, dps: 4, tankiness: 3, earlygame: 5, lategame: 3, difficulty: 'medium', counters: ['scaling', 'peel', 'vision'], goodInto: ['early skirmishes', 'picks'], weakTo: ['Rammus', 'Sejuani', 'Amumu'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'early bruiser', keyAbility: 'R target execute' },
  Rengar: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 1, burst: 5, dps: 4, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['armor', 'group up', 'zhonyas'], goodInto: ['isolated squishies', 'brush fights'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Evelynn', 'Karthus', 'Fiddlesticks'], playstyle: 'assassin', keyAbility: 'R leap' },
  Sejuani: { range: 'melee', damage: 'magic', sustain: 2, mobility: 2, cc: 5, burst: 2, dps: 2, tankiness: 5, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['early invades', 'kiting', 'sustain'], goodInto: ['teamfights', 'melee comps'], weakTo: ['Olaf', 'Lillia', 'Gragas'], strongVs: ['MasterYi', 'Kayn', 'Evelynn'], playstyle: 'tank engage', keyAbility: 'R glacial prison' },
  Shaco: { range: 'melee', damage: 'physical', sustain: 1, mobility: 4, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'hard', counters: ['pink wards', 'group up', 'cc'], goodInto: ['isolated targets', 'invades'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Karthus', 'Evelynn', 'Fiddlesticks'], playstyle: 'trickster assassin', keyAbility: 'Q stealth + R clone' },
  Shyvana: { range: 'melee', damage: 'mixed', sustain: 2, mobility: 3, cc: 1, burst: 4, dps: 4, tankiness: 4, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['invade early', 'kiting', 'cc'], goodInto: ['objective control', 'scaling'], weakTo: ['Olaf', 'Udyr', 'Trundle'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'dragon form mage', keyAbility: 'R dragon form' },
  Skarner: { range: 'melee', damage: 'mixed', sustain: 2, mobility: 3, cc: 4, burst: 2, dps: 3, tankiness: 4, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['QSS', 'kiting', 'disengage'], goodInto: ['picks', 'priority targets'], weakTo: ['Olaf', 'Morgana', 'Gangplank'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'pick tank', keyAbility: 'R impale suppression' },
  Taliyah: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 3, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['gap closers', 'sustain', 'worked ground'], goodInto: ['objective control', 'roaming'], weakTo: ['LeeSin', 'Elise', 'Rek\'Sai'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'control mage', keyAbility: 'R weaver\'s wall' },
  Trundle: { range: 'melee', damage: 'physical', sustain: 4, mobility: 2, cc: 2, burst: 2, dps: 4, tankiness: 4, earlygame: 4, lategame: 4, difficulty: 'easy', counters: ['kiting', 'ranged', 'don\'t R a tank'], goodInto: ['tanks', 'melee comps'], weakTo: ['Lillia', 'Kindred', 'Graves'], strongVs: ['Sejuani', 'Amumu', 'Rammus'], playstyle: 'anti-tank', keyAbility: 'R stat steal' },
  Udyr: { range: 'melee', damage: 'mixed', sustain: 3, mobility: 4, cc: 2, burst: 3, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['kiting', 'cc chains', 'slows'], goodInto: ['melee comps', 'objective control'], weakTo: ['Lillia', 'Kindred', 'Graves'], strongVs: ['Amumu', 'Sejuani', 'Zac'], playstyle: 'bruiser', keyAbility: 'stance dancing' },
  Vi: { range: 'melee', damage: 'physical', sustain: 2, mobility: 4, cc: 4, burst: 4, dps: 3, tankiness: 3, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['peel', 'exhaust', 'tanky comps'], goodInto: ['squishy targets', 'picks'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'diver', keyAbility: 'R unstoppable lockdown' },
  Viego: { range: 'melee', damage: 'physical', sustain: 4, mobility: 4, cc: 2, burst: 3, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['burst', 'cc', 'healing reduction'], goodInto: ['teamfights', 'resets'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'skirmisher', keyAbility: 'passive possession' },
  Warwick: { range: 'melee', damage: 'magic', sustain: 5, mobility: 3, cc: 3, burst: 3, dps: 4, tankiness: 4, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['healing reduction', 'kiting', 'QSS'], goodInto: ['low hp targets', 'skirmishes'], weakTo: ['Olaf', 'Trundle', 'Lillia'], strongVs: ['Amumu', 'Sejuani', 'Evelynn'], playstyle: 'sustain fighter', keyAbility: 'passive hunt' },
  XinZhao: { range: 'melee', damage: 'physical', sustain: 3, mobility: 3, cc: 3, burst: 4, dps: 4, tankiness: 3, earlygame: 5, lategame: 3, difficulty: 'easy', counters: ['kiting', 'cc', 'outscale'], goodInto: ['early fights', 'skirmishes'], weakTo: ['Rammus', 'Amumu', 'Sejuani'], strongVs: ['Karthus', 'Evelynn', 'Kindred'], playstyle: 'early diver', keyAbility: 'R challenge zone' },
  Zac: { range: 'melee', damage: 'magic', sustain: 4, mobility: 4, cc: 5, burst: 2, dps: 3, tankiness: 5, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['healing reduction', 'kill blobs', 'disengage'], goodInto: ['grouped enemies', 'engage comps'], weakTo: ['Olaf', 'Trundle', 'Kindred'], strongVs: ['MasterYi', 'Kayn', 'Evelynn'], playstyle: 'tank engage', keyAbility: 'E slingshot' },

  // Mid Laners
  Ahri: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 4, cc: 2, burst: 4, dps: 3, tankiness: 1, earlygame: 3, lategame: 3, difficulty: 'easy', counters: ['hard engage', 'burst', 'cc'], goodInto: ['picks', 'roaming'], weakTo: ['Kassadin', 'Fizz', 'Zed'], strongVs: ['Veigar', 'Lux', 'Xerath'], playstyle: 'mobile mage', keyAbility: 'E charm + R dashes' },
  Akali: { range: 'melee', damage: 'magic', sustain: 2, mobility: 5, cc: 0, burst: 5, dps: 4, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['pink wards', 'cc', 'poke'], goodInto: ['squishies', 'immobile mages'], weakTo: ['Annie', 'Malzahar', 'Lissandra'], strongVs: ['Kassadin', 'Veigar', 'Syndra'], playstyle: 'assassin', keyAbility: 'W shroud' },
  Akshan: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 4, cc: 0, burst: 3, dps: 4, tankiness: 1, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['hard engage', 'cc', 'burst'], goodInto: ['mages', 'roaming'], weakTo: ['Zed', 'Talon', 'Fizz'], strongVs: ['Veigar', 'Lux', 'Xerath'], playstyle: 'roaming marksman', keyAbility: 'W revive passive' },
  Anivia: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 1, cc: 4, burst: 4, dps: 4, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['assassins', 'gap closers', 'mobility'], goodInto: ['control mages', 'scaling'], weakTo: ['Fizz', 'Kassadin', 'Zed'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'control mage', keyAbility: 'W wall + R zone' },
  Annie: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 5, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['range', 'poke', 'respect stun'], goodInto: ['assassins', 'short range'], weakTo: ['Xerath', 'Lux', 'Syndra'], strongVs: ['Akali', 'Katarina', 'Yasuo'], playstyle: 'burst mage', keyAbility: 'R Tibbers stun' },
  AurelionSol: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 2, burst: 3, dps: 4, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['assassins', 'gap closers', 'hard engage'], goodInto: ['roaming', 'scaling'], weakTo: ['Kassadin', 'Fizz', 'Diana'], strongVs: ['Viktor', 'Orianna', 'Syndra'], playstyle: 'scaling mage', keyAbility: 'infinite stacking Q' },
  Aurora: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 4, cc: 3, burst: 4, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['burst', 'cc chains', 'anti-mobility'], goodInto: ['immobile mages', 'roaming'], weakTo: ['Syndra', 'Orianna', 'Azir'], strongVs: ['Veigar', 'Lux', 'Xerath'], playstyle: 'mobile mage', keyAbility: 'R spirit realm' },
  Azir: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 3, burst: 3, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['assassins', 'early aggression', 'dive'], goodInto: ['scaling comps', 'teamfights'], weakTo: ['Xerath', 'Syndra', 'Fizz'], strongVs: ['Kassadin', 'Veigar', 'Viktor'], playstyle: 'dps mage', keyAbility: 'R emperor\'s divide' },
  Cassiopeia: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 2, cc: 3, burst: 4, dps: 5, tankiness: 2, earlygame: 3, lategame: 5, difficulty: 'hard', counters: ['burst', 'gap closers', 'dodge Q'], goodInto: ['sustained fights', 'tanks'], weakTo: ['Kassadin', 'Fizz', 'Zed'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'dps mage', keyAbility: 'R miasma + stun' },
  Corki: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 3, cc: 0, burst: 4, dps: 4, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['hard engage', 'assassins', 'burst'], goodInto: ['poke comps', 'scaling'], weakTo: ['Zed', 'Fizz', 'Kassadin'], strongVs: ['Viktor', 'Orianna', 'Syndra'], playstyle: 'poke adc', keyAbility: 'package roam' },
  Ekko: { range: 'melee', damage: 'magic', sustain: 3, mobility: 4, cc: 3, burst: 5, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['cc', 'track R position', 'burst'], goodInto: ['squishies', 'roaming'], weakTo: ['Annie', 'Malzahar', 'Lissandra'], strongVs: ['Kassadin', 'Veigar', 'Viktor'], playstyle: 'assassin', keyAbility: 'R chronobreak' },
  Fizz: { range: 'melee', damage: 'magic', sustain: 1, mobility: 4, cc: 2, burst: 5, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['respect E', 'armor/HP', 'cc'], goodInto: ['mages', 'ADCs'], weakTo: ['Malzahar', 'Lissandra', 'Galio'], strongVs: ['Lux', 'Veigar', 'Xerath'], playstyle: 'assassin', keyAbility: 'E untargetable' },
  Galio: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 4, burst: 3, dps: 3, tankiness: 4, earlygame: 3, lategame: 3, difficulty: 'easy', counters: ['AD damage', 'poke', 'sustain'], goodInto: ['AP mids', 'roaming'], weakTo: ['Zed', 'Yone', 'Yasuo'], strongVs: ['Akali', 'Katarina', 'LeBlanc'], playstyle: 'tank mage', keyAbility: 'R global follow' },
  Heimerdinger: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['kill turrets', 'sustain', 'long range'], goodInto: ['melee mids', 'push lanes'], weakTo: ['Syndra', 'Xerath', 'Vel\'Koz'], strongVs: ['Yasuo', 'Yone', 'Akali'], playstyle: 'zone control', keyAbility: 'Q turrets' },
  Hwei: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 1, cc: 3, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['assassins', 'mobility', 'dive'], goodInto: ['control mages', 'poke'], weakTo: ['Zed', 'Fizz', 'Katarina'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'artillery mage', keyAbility: 'spell kit variety' },
  Kassadin: { range: 'melee', damage: 'magic', sustain: 2, mobility: 5, cc: 1, burst: 5, dps: 4, tankiness: 2, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'AD mids', 'don\'t let scale'], goodInto: ['AP mages', 'scaling'], weakTo: ['Zed', 'Talon', 'Lucian'], strongVs: ['Ahri', 'Lux', 'Viktor'], playstyle: 'scaling assassin', keyAbility: 'R riftwalk' },
  Katarina: { range: 'melee', damage: 'magic', sustain: 1, mobility: 5, cc: 0, burst: 5, dps: 5, tankiness: 1, earlygame: 3, lategame: 5, difficulty: 'hard', counters: ['cc', 'interrupt R', 'don\'t group on daggers'], goodInto: ['teamfight resets', 'roaming'], weakTo: ['Diana', 'Kassadin', 'Malzahar'], strongVs: ['Veigar', 'Lux', 'Xerath'], playstyle: 'reset assassin', keyAbility: 'E resets' },
  LeBlanc: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 5, cc: 2, burst: 5, dps: 3, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'hard', counters: ['MR', 'sustain', 'outscale'], goodInto: ['squishy mages', 'picks'], weakTo: ['Galio', 'Kassadin', 'Malzahar'], strongVs: ['Veigar', 'Lux', 'Xerath'], playstyle: 'burst assassin', keyAbility: 'W dash + R clone' },
  Lissandra: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 3, cc: 4, burst: 4, dps: 3, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['range poke', 'sustain', 'MR'], goodInto: ['assassins', 'dive comps'], weakTo: ['Cassiopeia', 'Orianna', 'Syndra'], strongVs: ['Akali', 'Zed', 'Katarina'], playstyle: 'cc mage', keyAbility: 'R self-stasis or lockdown' },
  Lux: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 3, burst: 5, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['mobility', 'assassins', 'dodge Q'], goodInto: ['immobile targets', 'poke'], weakTo: ['Zed', 'Fizz', 'Katarina'], strongVs: ['Veigar', 'Viktor', 'Xerath'], playstyle: 'burst mage', keyAbility: 'Q root + R execute' },
  Malzahar: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 4, dps: 4, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['QSS', 'push back', 'early roams'], goodInto: ['assassins', 'divers'], weakTo: ['Aurelion Sol', 'Syndra', 'Orianna'], strongVs: ['Zed', 'Fizz', 'Katarina'], playstyle: 'lockdown mage', keyAbility: 'R suppression' },
  Naafiri: { range: 'melee', damage: 'physical', sustain: 2, mobility: 4, cc: 1, burst: 5, dps: 3, tankiness: 2, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['armor', 'cc', 'peel'], goodInto: ['squishies', 'roaming'], weakTo: ['Lissandra', 'Malzahar', 'Annie'], strongVs: ['Lux', 'Xerath', 'Veigar'], playstyle: 'ad assassin', keyAbility: 'R mark + dash' },
  Neeko: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 2, cc: 3, burst: 4, dps: 3, tankiness: 1, earlygame: 3, lategame: 3, difficulty: 'medium', counters: ['mobility', 'spread out', 'check clones'], goodInto: ['grouped enemies', 'engages'], weakTo: ['Zed', 'Fizz', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'burst mage', keyAbility: 'R pop blossom' },
  Orianna: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 4, dps: 4, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['assassins', 'burst', 'dive'], goodInto: ['teamfights', 'scaling'], weakTo: ['Zed', 'Fizz', 'LeBlanc'], strongVs: ['Veigar', 'Viktor', 'Xerath'], playstyle: 'utility mage', keyAbility: 'R shockwave' },
  Pantheon: { range: 'melee', damage: 'physical', sustain: 2, mobility: 3, cc: 3, burst: 5, dps: 3, tankiness: 3, earlygame: 5, lategame: 2, difficulty: 'easy', counters: ['outscale', 'armor', 'poke'], goodInto: ['assassins', 'roaming'], weakTo: ['Vladimir', 'Cassiopeia', 'Anivia'], strongVs: ['Katarina', 'Akali', 'Zed'], playstyle: 'early game ad', keyAbility: 'empowered W + R roam' },
  Qiyana: { range: 'melee', damage: 'physical', sustain: 1, mobility: 4, cc: 3, burst: 5, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['armor', 'sustain', 'cc'], goodInto: ['squishies', 'river fights'], weakTo: ['Malzahar', 'Lissandra', 'Annie'], strongVs: ['Lux', 'Xerath', 'Veigar'], playstyle: 'ad assassin', keyAbility: 'R river/wall stun' },
  Ryze: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 2, cc: 2, burst: 3, dps: 5, tankiness: 2, earlygame: 2, lategame: 4, difficulty: 'hard', counters: ['early aggression', 'burst', 'mobility'], goodInto: ['scaling', 'sidelane'], weakTo: ['Cassiopeia', 'Syndra', 'Zed'], strongVs: ['Kassadin', 'Veigar', 'Viktor'], playstyle: 'battle mage', keyAbility: 'combo rotations' },
  Sylas: { range: 'melee', damage: 'magic', sustain: 4, mobility: 3, cc: 2, burst: 4, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['healing reduction', 'bad ults', 'cc'], goodInto: ['good ult enemies', 'bruisers'], weakTo: ['Cassiopeia', 'Malzahar', 'Anivia'], strongVs: ['Akali', 'Katarina', 'Zed'], playstyle: 'ap bruiser', keyAbility: 'R ult steal' },
  Syndra: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 3, burst: 5, dps: 4, tankiness: 1, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['mobility', 'all-in', 'gap closers'], goodInto: ['immobile mages', 'burst'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'burst mage', keyAbility: 'R unleashed power' },
  Talon: { range: 'melee', damage: 'physical', sustain: 1, mobility: 5, cc: 1, burst: 5, dps: 3, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['armor', 'cc', 'track roams'], goodInto: ['squishies', 'roaming'], weakTo: ['Malzahar', 'Lissandra', 'Pantheon'], strongVs: ['Lux', 'Xerath', 'Veigar'], playstyle: 'roaming assassin', keyAbility: 'E wall hop roams' },
  TwistedFate: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 3, burst: 3, dps: 3, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['assassins', 'hard engage', 'pressure map'], goodInto: ['roaming', 'side lanes'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'global roamer', keyAbility: 'R destiny' },
  Veigar: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 5, dps: 3, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'easy', counters: ['early aggression', 'mobility', 'flash cage'], goodInto: ['scaling', 'squishies'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Viktor', 'Orianna', 'Syndra'], playstyle: 'scaling burst', keyAbility: 'E cage + infinite scaling' },
  VelKoz: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 3, burst: 4, dps: 5, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['mobility', 'dive', 'dodge geometry'], goodInto: ['poke', 'teamfights'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'artillery mage', keyAbility: 'passive true damage + R laser' },
  Vex: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 2, cc: 3, burst: 5, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['no dashes', 'range', 'sustain'], goodInto: ['mobile champions', 'assassins'], weakTo: ['Lux', 'Xerath', 'Syndra'], strongVs: ['Yasuo', 'Yone', 'Katarina'], playstyle: 'anti-mobility mage', keyAbility: 'gloom fear on dashes' },
  Viktor: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 2, burst: 4, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'assassins', 'dive'], goodInto: ['scaling', 'zone control'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Orianna', 'Syndra'], playstyle: 'scaling control mage', keyAbility: 'hexcore upgrades' },
  Vladimir: { range: 'ranged', damage: 'magic', sustain: 5, mobility: 2, cc: 1, burst: 5, dps: 4, tankiness: 3, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'healing reduction', 'burst'], goodInto: ['poke', 'scaling'], weakTo: ['Malzahar', 'Anivia', 'Ryze'], strongVs: ['Kassadin', 'Veigar', 'Viktor'], playstyle: 'battle mage', keyAbility: 'W pool' },
  Xerath: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['mobility', 'all-in', 'assassins'], goodInto: ['poke', 'sieging'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'artillery mage', keyAbility: 'R long range snipe' },
  Yasuo: { range: 'melee', damage: 'physical', sustain: 2, mobility: 5, cc: 2, burst: 4, dps: 5, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['cc', 'armor', 'burst'], goodInto: ['projectile champs', 'knockups'], weakTo: ['Pantheon', 'Renekton', 'Annie'], strongVs: ['Lux', 'Xerath', 'Ahri'], playstyle: 'crit fighter', keyAbility: 'W windwall + knockup R' },
  Yone: { range: 'melee', damage: 'mixed', sustain: 3, mobility: 4, cc: 3, burst: 4, dps: 5, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['cc', 'armor', 'burst early'], goodInto: ['scaling', 'teamfights'], weakTo: ['Pantheon', 'Renekton', 'Annie'], strongVs: ['Lux', 'Xerath', 'Veigar'], playstyle: 'crit fighter', keyAbility: 'E snap back + R engage' },
  Zed: { range: 'melee', damage: 'physical', sustain: 1, mobility: 5, cc: 1, burst: 5, dps: 4, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'hard', counters: ['armor', 'zhonyas', 'exhaust'], goodInto: ['mages', 'ADCs'], weakTo: ['Malzahar', 'Lissandra', 'Pantheon'], strongVs: ['Lux', 'Xerath', 'Veigar'], playstyle: 'ad assassin', keyAbility: 'R death mark' },
  Ziggs: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 2, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['all-in', 'assassins', 'mobility'], goodInto: ['siege', 'poke'], weakTo: ['Fizz', 'Zed', 'Kassadin'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'siege mage', keyAbility: 'W tower execute' },
  Zoe: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 3, cc: 3, burst: 5, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['cleanse', 'mobility', 'sustain'], goodInto: ['picks', 'poke'], weakTo: ['Fizz', 'Kassadin', 'Zed'], strongVs: ['Veigar', 'Viktor', 'Orianna'], playstyle: 'burst mage', keyAbility: 'E bubble + Q snipe' },

  // ADCs
  Aphelios: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 1, cc: 2, burst: 4, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['burst', 'dive', 'track weapons'], goodInto: ['teamfights', 'hypercarry'], weakTo: ['Draven', 'Lucian', 'Samira'], strongVs: ['Ezreal', 'Sivir', 'Varus'], playstyle: 'versatile adc', keyAbility: 'weapon cycling' },
  Ashe: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 1, cc: 4, burst: 2, dps: 4, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['gap closers', 'burst', 'dive'], goodInto: ['utility', 'kiting'], weakTo: ['Draven', 'Samira', 'Kalista'], strongVs: ['Ezreal', 'Sivir', 'Jhin'], playstyle: 'utility adc', keyAbility: 'R global engage' },
  Caitlyn: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 2, burst: 3, dps: 4, tankiness: 1, earlygame: 4, lategame: 4, difficulty: 'medium', counters: ['gap closers', 'all-in', 'outscale mid'], goodInto: ['lane bully', 'siege'], weakTo: ['Samira', 'Vayne', 'Kai\'Sa'], strongVs: ['Ezreal', 'Sivir', 'Jhin'], playstyle: 'lane bully', keyAbility: 'range + trap zone' },
  Draven: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 1, burst: 4, dps: 5, tankiness: 1, earlygame: 5, lategame: 4, difficulty: 'hard', counters: ['cc', 'disengage', 'outscale if even'], goodInto: ['early kills', 'snowball'], weakTo: ['Samira', 'Vayne', 'Tristana'], strongVs: ['Ezreal', 'Sivir', 'Ashe'], playstyle: 'snowball adc', keyAbility: 'passive gold + axe catching' },
  Ezreal: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 4, cc: 0, burst: 3, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['hard engage', 'point-click cc', 'tanks'], goodInto: ['poke', 'safe lane'], weakTo: ['Draven', 'Samira', 'Kai\'Sa'], strongVs: ['Ashe', 'Jhin', 'Miss Fortune'], playstyle: 'safe poke adc', keyAbility: 'E blink safety' },
  Jhin: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 3, burst: 5, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['dive', 'gap closers', 'tanks'], goodInto: ['picks', 'utility'], weakTo: ['Samira', 'Kai\'Sa', 'Vayne'], strongVs: ['Ezreal', 'Ashe', 'Sivir'], playstyle: 'utility burst adc', keyAbility: '4th shot + R snipe' },
  Jinx: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 2, burst: 3, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['dive', 'assassins', 'early aggression'], goodInto: ['hypercarry', 'teamfights'], weakTo: ['Draven', 'Lucian', 'Samira'], strongVs: ['Ezreal', 'Ashe', 'Sivir'], playstyle: 'hypercarry', keyAbility: 'passive reset + rockets' },
  KaiSa: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 3, cc: 0, burst: 4, dps: 5, tankiness: 2, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['poke', 'long range', 'early fights'], goodInto: ['dive', 'assassinate'], weakTo: ['Caitlyn', 'Varus', 'Ashe'], strongVs: ['Ezreal', 'Jhin', 'Miss Fortune'], playstyle: 'hybrid assassin', keyAbility: 'R dive + isolation' },
  Kalista: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 4, cc: 2, burst: 2, dps: 5, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'hard', counters: ['cc', 'slows', 'burst'], goodInto: ['kiting', 'objectives'], weakTo: ['Ashe', 'Varus', 'Jhin'], strongVs: ['Vayne', 'Kog\'Maw', 'Twitch'], playstyle: 'kite adc', keyAbility: 'R support save' },
  KogMaw: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 1, cc: 1, burst: 2, dps: 5, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['dive', 'assassins', 'no peel'], goodInto: ['hypercarry', 'tanks'], weakTo: ['Draven', 'Samira', 'Lucian'], strongVs: ['Ezreal', 'Jhin', 'Miss Fortune'], playstyle: 'hypercarry', keyAbility: 'W range + %hp' },
  Lucian: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 3, cc: 0, burst: 4, dps: 4, tankiness: 1, earlygame: 5, lategame: 3, difficulty: 'medium', counters: ['outscale', 'poke', 'tanks'], goodInto: ['lane bully', 'mid game'], weakTo: ['Vayne', 'Kai\'Sa', 'Jinx'], strongVs: ['Ezreal', 'Ashe', 'Jhin'], playstyle: 'lane bully', keyAbility: 'passive double shot' },
  MissFortune: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 1, burst: 5, dps: 4, tankiness: 1, earlygame: 4, lategame: 4, difficulty: 'easy', counters: ['dive', 'interrupt R', 'mobility'], goodInto: ['teamfights', 'wombo combo'], weakTo: ['Samira', 'Kai\'Sa', 'Vayne'], strongVs: ['Ezreal', 'Ashe', 'Jhin'], playstyle: 'teamfight adc', keyAbility: 'R bullet time' },
  Nilah: { range: 'melee', damage: 'physical', sustain: 3, mobility: 3, cc: 2, burst: 3, dps: 5, tankiness: 2, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['poke', 'range', 'disengage'], goodInto: ['all-in', 'melee supports'], weakTo: ['Caitlyn', 'Varus', 'Ashe'], strongVs: ['Samira', 'Lucian', 'Draven'], playstyle: 'melee hypercarry', keyAbility: 'W dodge autos' },
  Samira: { range: 'ranged', damage: 'physical', sustain: 2, mobility: 4, cc: 1, burst: 5, dps: 5, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['cc to stop R', 'disengage', 'poke'], goodInto: ['all-in', 'teamfight resets'], weakTo: ['Caitlyn', 'Varus', 'Ashe'], strongVs: ['Ezreal', 'Jhin', 'Miss Fortune'], playstyle: 'reset adc', keyAbility: 'style rank + R' },
  Sivir: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 0, burst: 2, dps: 4, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'easy', counters: ['all-in', 'hard engage', 'bait E'], goodInto: ['poke', 'waveclear'], weakTo: ['Draven', 'Samira', 'Lucian'], strongVs: ['Ezreal', 'Ashe', 'Jhin'], playstyle: 'waveclear adc', keyAbility: 'E spellshield' },
  Smolder: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 2, cc: 1, burst: 3, dps: 4, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'medium', counters: ['early aggression', 'dive', 'don\'t let stack'], goodInto: ['scaling', 'poke'], weakTo: ['Draven', 'Lucian', 'Samira'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'scaling adc', keyAbility: 'Q stack scaling' },
  Tristana: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 3, cc: 2, burst: 4, dps: 5, tankiness: 1, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['cc', 'exhaust', 'peel'], goodInto: ['all-in', 'tower push'], weakTo: ['Draven', 'Samira', 'Lucian'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'burst adc', keyAbility: 'W reset + E bomb' },
  Twitch: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 1, burst: 3, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'medium', counters: ['pink wards', 'burst', 'dive'], goodInto: ['teamfights', 'flanks'], weakTo: ['Draven', 'Lucian', 'Samira'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'stealth hypercarry', keyAbility: 'Q stealth + R spray' },
  Varus: { range: 'ranged', damage: 'mixed', sustain: 1, mobility: 1, cc: 3, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['dive', 'gap closers', 'cleanse R'], goodInto: ['poke', 'picks'], weakTo: ['Samira', 'Kai\'Sa', 'Vayne'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'poke adc', keyAbility: 'R chain root' },
  Vayne: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 4, cc: 2, burst: 3, dps: 5, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'hard', counters: ['early aggression', 'cc', 'burst'], goodInto: ['tanks', 'kiting'], weakTo: ['Draven', 'Caitlyn', 'Lucian'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'tank shredder', keyAbility: 'W true damage + R stealth' },
  Xayah: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 2, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['burst', 'bait R', 'poke'], goodInto: ['dive', 'self peel'], weakTo: ['Caitlyn', 'Varus', 'Ashe'], strongVs: ['Samira', 'Lucian', 'Kai\'Sa'], playstyle: 'root adc', keyAbility: 'R untargetable + feather root' },
  Zeri: { range: 'ranged', damage: 'physical', sustain: 1, mobility: 5, cc: 1, burst: 2, dps: 5, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'hard', counters: ['cc', 'point-click', 'burst'], goodInto: ['kiting', 'extended fights'], weakTo: ['Draven', 'Samira', 'Lucian'], strongVs: ['Ezreal', 'Jhin', 'Ashe'], playstyle: 'kite adc', keyAbility: 'R movement speed stacking' },

  // Supports
  Alistar: { range: 'melee', damage: 'magic', sustain: 2, mobility: 3, cc: 5, burst: 1, dps: 1, tankiness: 5, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['poke', 'disengage', 'kite'], goodInto: ['engage', 'peel'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Leona', 'Nautilus', 'Thresh'], playstyle: 'engage tank', keyAbility: 'W-Q combo' },
  Bard: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 4, cc: 4, burst: 2, dps: 2, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'hard', counters: ['all-in', 'bad ults', 'hard engage'], goodInto: ['roaming', 'picks'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'roaming support', keyAbility: 'R stasis' },
  Blitzcrank: { range: 'melee', damage: 'magic', sustain: 1, mobility: 2, cc: 4, burst: 2, dps: 1, tankiness: 3, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['minion block', 'mobility', 'tanks'], goodInto: ['picks', 'squishies'], weakTo: ['Morgana', 'Sivir', 'Ezreal'], strongVs: ['Sona', 'Soraka', 'Lulu'], playstyle: 'hook support', keyAbility: 'Q rocket grab' },
  Brand: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 2, burst: 5, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['all-in', 'mobility', 'MR'], goodInto: ['grouped enemies', 'poke'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'damage support', keyAbility: 'R bounce' },
  Braum: { range: 'melee', damage: 'magic', sustain: 1, mobility: 2, cc: 4, burst: 1, dps: 1, tankiness: 5, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['poke', 'disengage', 'sustain'], goodInto: ['projectiles', 'protect carry'], weakTo: ['Morgana', 'Zyra', 'Brand'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'peel tank', keyAbility: 'E shield' },
  Janna: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 3, cc: 4, burst: 1, dps: 1, tankiness: 1, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['poke', 'sustain lanes', 'outscale'], goodInto: ['dive', 'engage'], weakTo: ['Sona', 'Soraka', 'Nami'], strongVs: ['Leona', 'Alistar', 'Nautilus'], playstyle: 'peel enchanter', keyAbility: 'R monsoon' },
  Karma: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 2, cc: 2, burst: 3, dps: 3, tankiness: 2, earlygame: 4, lategame: 3, difficulty: 'easy', counters: ['all-in', 'hard engage', 'sustain'], goodInto: ['poke', 'utility'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'poke enchanter', keyAbility: 'R empowered abilities' },
  Leona: { range: 'melee', damage: 'magic', sustain: 1, mobility: 2, cc: 5, burst: 2, dps: 1, tankiness: 5, earlygame: 4, lategame: 4, difficulty: 'easy', counters: ['disengage', 'poke', 'mobility'], goodInto: ['all-in', 'lockdown'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Sona', 'Soraka', 'Brand'], playstyle: 'engage tank', keyAbility: 'E-Q lockdown' },
  Lulu: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 2, cc: 3, burst: 2, dps: 2, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['poke', 'all-in early', 'healing reduction'], goodInto: ['assassins', 'protect carry'], weakTo: ['Sona', 'Soraka', 'Nami'], strongVs: ['Leona', 'Alistar', 'Nautilus'], playstyle: 'peel enchanter', keyAbility: 'R wild growth' },
  Lux: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 1, cc: 3, burst: 4, dps: 3, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['all-in', 'mobility', 'dodge Q'], goodInto: ['poke', 'picks'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Sona', 'Soraka', 'Janna'], playstyle: 'poke mage', keyAbility: 'Q root + R snipe' },
  Maokai: { range: 'melee', damage: 'magic', sustain: 3, mobility: 2, cc: 4, burst: 1, dps: 2, tankiness: 4, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['poke', 'disengage', 'healing reduction'], goodInto: ['engage', 'bush control'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'engage tank', keyAbility: 'R root wave' },
  Milio: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 2, cc: 2, burst: 1, dps: 2, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['all-in', 'burst', 'hard engage'], goodInto: ['cc cleanse', 'range buff'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'enchanter', keyAbility: 'R cleanse' },
  Morgana: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 3, dps: 2, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'easy', counters: ['poke', 'bait E', 'all-in after E'], goodInto: ['cc heavy', 'engage'], weakTo: ['Sona', 'Soraka', 'Nami'], strongVs: ['Leona', 'Nautilus', 'Thresh'], playstyle: 'anti-cc mage', keyAbility: 'E black shield' },
  Nami: { range: 'ranged', damage: 'magic', sustain: 4, mobility: 2, cc: 3, burst: 2, dps: 2, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['all-in', 'burst', 'dodge bubble'], goodInto: ['poke', 'trading'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Karma'], playstyle: 'trading enchanter', keyAbility: 'W bounce heal' },
  Nautilus: { range: 'melee', damage: 'magic', sustain: 1, mobility: 2, cc: 5, burst: 2, dps: 1, tankiness: 4, earlygame: 4, lategame: 4, difficulty: 'easy', counters: ['disengage', 'poke', 'mobility'], goodInto: ['lockdown', 'all-in'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Sona', 'Soraka', 'Brand'], playstyle: 'engage tank', keyAbility: 'Q hook + R point-click' },
  Pyke: { range: 'melee', damage: 'physical', sustain: 3, mobility: 4, cc: 3, burst: 5, dps: 2, tankiness: 1, earlygame: 4, lategame: 3, difficulty: 'hard', counters: ['poke', 'cc', 'tanky comps'], goodInto: ['squishies', 'roaming'], weakTo: ['Morgana', 'Lulu', 'Leona'], strongVs: ['Sona', 'Soraka', 'Janna'], playstyle: 'assassin support', keyAbility: 'R execute' },
  Rakan: { range: 'melee', damage: 'magic', sustain: 2, mobility: 5, cc: 4, burst: 1, dps: 1, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['cc', 'disengage', 'burst'], goodInto: ['engage', 'Xayah'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Sona', 'Soraka', 'Brand'], playstyle: 'engage enchanter', keyAbility: 'R+W engage' },
  Rell: { range: 'melee', damage: 'magic', sustain: 1, mobility: 2, cc: 5, burst: 1, dps: 1, tankiness: 4, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['poke', 'disengage', 'kite'], goodInto: ['grouped enemies', 'engage'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'engage tank', keyAbility: 'W engage + R pull' },
  Renata: { range: 'ranged', damage: 'magic', sustain: 2, mobility: 1, cc: 3, burst: 1, dps: 2, tankiness: 2, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['burst', 'spread out', 'cleanse R'], goodInto: ['protect carry', 'teamfights'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'utility enchanter', keyAbility: 'W revive + R berserk' },
  Senna: { range: 'ranged', damage: 'physical', sustain: 3, mobility: 2, cc: 2, burst: 2, dps: 3, tankiness: 1, earlygame: 3, lategame: 5, difficulty: 'medium', counters: ['all-in', 'hard engage', 'burst'], goodInto: ['poke', 'scaling'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'scaling support', keyAbility: 'passive soul stacking' },
  Seraphine: { range: 'ranged', damage: 'magic', sustain: 3, mobility: 1, cc: 4, burst: 3, dps: 3, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'easy', counters: ['all-in', 'hard engage', 'burst'], goodInto: ['teamfights', 'poke'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'teamfight mage', keyAbility: 'R charm extend' },
  Sona: { range: 'ranged', damage: 'magic', sustain: 4, mobility: 2, cc: 3, burst: 2, dps: 2, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'easy', counters: ['all-in', 'burst', 'hard engage'], goodInto: ['poke', 'scaling'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Karma'], playstyle: 'scaling enchanter', keyAbility: 'R crescendo' },
  Soraka: { range: 'ranged', damage: 'magic', sustain: 5, mobility: 1, cc: 2, burst: 1, dps: 1, tankiness: 1, earlygame: 2, lategame: 5, difficulty: 'easy', counters: ['all-in', 'healing reduction', 'burst'], goodInto: ['poke', 'sustain'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Karma'], playstyle: 'healer', keyAbility: 'R global heal' },
  Swain: { range: 'ranged', damage: 'magic', sustain: 4, mobility: 1, cc: 3, burst: 3, dps: 4, tankiness: 3, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['poke', 'healing reduction', 'kiting'], goodInto: ['all-in', 'teamfights'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'battle mage', keyAbility: 'R drain tank' },
  TahmKench: { range: 'melee', damage: 'magic', sustain: 4, mobility: 2, cc: 3, burst: 2, dps: 2, tankiness: 5, earlygame: 4, lategame: 3, difficulty: 'medium', counters: ['poke', 'kiting', 'disengage'], goodInto: ['save ally', 'tanks'], weakTo: ['Morgana', 'Janna', 'Lulu'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'peel tank', keyAbility: 'W devour ally' },
  Taric: { range: 'melee', damage: 'magic', sustain: 3, mobility: 1, cc: 3, burst: 1, dps: 1, tankiness: 4, earlygame: 2, lategame: 4, difficulty: 'medium', counters: ['poke', 'disengage', 'bait R'], goodInto: ['dive', 'all-in'], weakTo: ['Morgana', 'Janna', 'Zyra'], strongVs: ['Leona', 'Alistar', 'Thresh'], playstyle: 'peel enchanter', keyAbility: 'R invulnerability' },
  Thresh: { range: 'melee', damage: 'magic', sustain: 1, mobility: 3, cc: 4, burst: 2, dps: 1, tankiness: 3, earlygame: 4, lategame: 4, difficulty: 'hard', counters: ['minion block', 'mobility', 'poke'], goodInto: ['picks', 'peel'], weakTo: ['Morgana', 'Lulu', 'Janna'], strongVs: ['Sona', 'Soraka', 'Brand'], playstyle: 'hook playmaker', keyAbility: 'Q hook + W lantern' },
  VelKoz: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 3, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['all-in', 'mobility', 'dive'], goodInto: ['poke', 'teamfights'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'poke mage', keyAbility: 'passive true damage' },
  Xerath: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 2, burst: 4, dps: 4, tankiness: 1, earlygame: 3, lategame: 4, difficulty: 'medium', counters: ['all-in', 'mobility', 'dive'], goodInto: ['poke', 'siege'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'artillery mage', keyAbility: 'R long range' },
  Yuumi: { range: 'ranged', damage: 'magic', sustain: 4, mobility: 2, cc: 2, burst: 1, dps: 1, tankiness: 1, earlygame: 1, lategame: 5, difficulty: 'easy', counters: ['all-in early', 'healing reduction', 'burst'], goodInto: ['hypercarries', 'attach'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'attach enchanter', keyAbility: 'W attach' },
  Zyra: { range: 'ranged', damage: 'magic', sustain: 1, mobility: 1, cc: 4, burst: 4, dps: 4, tankiness: 1, earlygame: 4, lategame: 4, difficulty: 'medium', counters: ['all-in', 'mobility', 'kill plants'], goodInto: ['poke', 'zone control'], weakTo: ['Leona', 'Nautilus', 'Blitzcrank'], strongVs: ['Lulu', 'Janna', 'Soraka'], playstyle: 'zone mage', keyAbility: 'R knockup' },
};

// Generate tips based on champion characteristics
const generateMatchupTips = (yourChamp, enemyChamp) => {
  const you = championTraits[yourChamp];
  const enemy = championTraits[enemyChamp];
  
  if (!you || !enemy) return [];
  
  const tips = [];
  
  // Range advantage
  if (you.range === 'ranged' && enemy.range === 'melee') {
    tips.push('You have range advantage - poke safely and kite when they try to engage');
  } else if (you.range === 'melee' && enemy.range === 'ranged') {
    tips.push('Gap close quickly or wait for cooldowns before trading');
  }
  
  // Sustain matchup
  if (enemy.sustain >= 4) {
    tips.push(`Build anti-heal early - ${enemyChamp} has high sustain`);
  }
  if (you.sustain >= 4 && enemy.burst >= 4) {
    tips.push('Your sustain won\'t matter if you get bursted - respect their all-in');
  }
  
  // Mobility
  if (enemy.mobility >= 4 && you.cc >= 3) {
    tips.push('Save your CC for when they dash in');
  }
  if (enemy.mobility >= 4 && you.cc <= 2) {
    tips.push(`${enemyChamp} is very mobile - hard to lock down without team help`);
  }
  
  // CC considerations
  if (enemy.cc >= 4) {
    tips.push(`Respect ${enemyChamp}'s CC - consider Tenacity boots or Cleanse`);
  }
  
  // Burst vs tankiness
  if (enemy.burst >= 4 && you.tankiness <= 2) {
    tips.push('They can 100-0 you - don\'t get caught out alone');
  }
  if (you.burst >= 4 && enemy.tankiness <= 2) {
    tips.push('You can burst them - look for all-in opportunities');
  }
  
  // Early vs late
  if (you.earlygame >= 4 && enemy.lategame >= 4) {
    tips.push(`Punish early - ${enemyChamp} outscales you`);
  }
  if (you.lategame >= 4 && enemy.earlygame >= 4) {
    tips.push('Play safe early and scale - you win late');
  }
  
  // Specific counters
  if (enemy.counters && enemy.counters.length > 0) {
    tips.push(`${enemyChamp}'s weaknesses: ${enemy.counters.slice(0, 2).join(', ')}`);
  }
  
  // Key ability warning
  if (enemy.keyAbility) {
    tips.push(`Watch out for: ${enemy.keyAbility}`);
  }
  
  // Damage type
  if (enemy.damage === 'magic' && you.damage === 'physical') {
    tips.push('Build MR if they get ahead');
  } else if (enemy.damage === 'physical' && you.damage === 'magic') {
    tips.push('Build Armor if they get ahead');
  }
  
  return tips.slice(0, 5); // Max 5 tips
};

// Calculate difficulty and win rate estimate
const calculateMatchupDifficulty = (yourChamp, enemyChamp) => {
  const you = championTraits[yourChamp];
  const enemy = championTraits[enemyChamp];
  
  if (!you || !enemy) return { difficulty: 'Unknown', winRate: 50 };
  
  // Check explicit counters
  if (you.weakTo && you.weakTo.includes(enemyChamp)) {
    return { difficulty: 'Hard', winRate: 42 + Math.random() * 6 };
  }
  if (you.strongVs && you.strongVs.includes(enemyChamp)) {
    return { difficulty: 'Easy', winRate: 54 + Math.random() * 6 };
  }
  
  // Calculate based on stats
  let score = 0;
  
  // Range advantage
  if (you.range === 'ranged' && enemy.range === 'melee') score += 10;
  if (you.range === 'melee' && enemy.range === 'ranged') score -= 10;
  
  // Early game advantage
  score += (you.earlygame - enemy.earlygame) * 3;
  
  // Sustain
  score += (you.sustain - enemy.sustain) * 2;
  
  // Mobility vs CC
  if (you.mobility >= 4 && enemy.cc <= 2) score += 5;
  if (enemy.mobility >= 4 && you.cc <= 2) score -= 5;
  
  // Burst vs tankiness
  if (you.burst >= 4 && enemy.tankiness <= 2) score += 5;
  if (enemy.burst >= 4 && you.tankiness <= 2) score -= 5;
  
  // Determine difficulty
  let difficulty, winRate;
  if (score >= 10) {
    difficulty = 'Easy';
    winRate = 54 + Math.random() * 6;
  } else if (score >= 3) {
    difficulty = 'Favorable';
    winRate = 51 + Math.random() * 4;
  } else if (score >= -3) {
    difficulty = 'Skill';
    winRate = 48 + Math.random() * 4;
  } else if (score >= -10) {
    difficulty = 'Unfavorable';
    winRate = 45 + Math.random() * 4;
  } else {
    difficulty = 'Hard';
    winRate = 40 + Math.random() * 6;
  }
  
  return { difficulty, winRate: Math.round(winRate * 10) / 10 };
};

// Generate full matchup data
export const generateMatchup = (yourChamp, enemyChamp) => {
  if (yourChamp === enemyChamp) {
    return {
      difficulty: 'Skill',
      winRate: 50,
      tips: ['Mirror matchup - better mechanics and macro wins'],
      keyTiming: 'First to get a lead usually snowballs',
      earlyGame: 'Equal power - focus on farming and not making mistakes'
    };
  }
  
  const { difficulty, winRate } = calculateMatchupDifficulty(yourChamp, enemyChamp);
  const tips = generateMatchupTips(yourChamp, enemyChamp);
  
  const you = championTraits[yourChamp];
  const enemy = championTraits[enemyChamp];
  
  // Generate key timing advice
  let keyTiming = '';
  if (you?.earlygame >= 4 && enemy?.lategame >= 4) {
    keyTiming = 'Fight early before they scale';
  } else if (you?.lategame >= 4 && enemy?.earlygame >= 4) {
    keyTiming = 'Survive early, outscale mid-late';
  } else if (enemy?.burst >= 4) {
    keyTiming = 'Dodge their burst combo, then trade back';
  } else {
    keyTiming = 'Look for trades when their key abilities are on cooldown';
  }
  
  // Generate early game advice
  let earlyGame = '';
  if (difficulty === 'Easy' || difficulty === 'Favorable') {
    earlyGame = 'You should win early trades. Play aggressive and establish lane control.';
  } else if (difficulty === 'Hard' || difficulty === 'Unfavorable') {
    earlyGame = 'Respect their power. Farm safely and wait for jungle help or outscale.';
  } else {
    earlyGame = 'Even matchup. Focus on CS and look for enemy mistakes.';
  }
  
  return {
    difficulty,
    winRate,
    tips,
    keyTiming,
    earlyGame
  };
};

// Get all matchups for a champion
export const getAllMatchups = (yourChamp) => {
  const matchups = {};
  Object.keys(championTraits).forEach(enemy => {
    if (enemy !== yourChamp) {
      matchups[enemy] = generateMatchup(yourChamp, enemy);
    }
  });
  return matchups;
};

// Get counters (champions that beat this champ)
export const getCounters = (champ) => {
  const traits = championTraits[champ];
  if (!traits) return [];
  return traits.weakTo || [];
};

// Get who this champ counters
export const getStrongAgainst = (champ) => {
  const traits = championTraits[champ];
  if (!traits) return [];
  return traits.strongVs || [];
};

export default {
  championTraits,
  generateMatchup,
  getAllMatchups,
  getCounters,
  getStrongAgainst
};
