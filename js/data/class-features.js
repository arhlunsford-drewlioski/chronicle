// ═══════════════════════════════════════════════════════════════════
//  CLASS FEATURES BY LEVEL
//  Features unlocked at each level for all classes
// ═══════════════════════════════════════════════════════════════════

const CLASS_FEATURES = {
    'Barbarian': {
        1: [
            { name: 'Rage', desc: 'Enter a primal fury. 2 uses per Long Rest. Bonus damage, resistance to physical damage, advantage on STR checks/saves.' },
            { name: 'Unarmored Defense', desc: 'AC = 10 + DEX + CON when not wearing armor.' },
            { name: 'Weapon Mastery', desc: 'Gain mastery with 2 weapons. Change mastery choices when you gain a Barbarian level.' }
        ],
        2: [
            { name: 'Danger Sense', desc: 'Advantage on DEX saves vs. effects you can see (traps, spells).' },
            { name: 'Reckless Attack', desc: 'Gain advantage on melee attack rolls using STR during your turn, but attack rolls against you have advantage until your next turn.' }
        ],
        3: [
            { name: 'Primal Knowledge', desc: 'Gain proficiency in one skill: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival.' },
            { name: 'Primal Path', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Extra Attack', desc: 'Attack twice when you take the Attack action.' },
            { name: 'Fast Movement', desc: 'Your speed increases by 10 feet while not wearing Heavy armor.' }
        ],
        6: [],
        7: [
            { name: 'Feral Instinct', desc: 'Advantage on Initiative rolls. If surprised, you can act normally on your first turn by entering Rage (even if surprised).' },
            { name: 'Instinctive Pounce', desc: 'When you roll Initiative, you can move up to half your speed (as part of entering Rage).' }
        ],
        8: [],
        9: [
            { name: 'Brutal Strike', desc: 'If you use Reckless Attack, you can forgo advantage to deal extra damage or hamper the target.' }
        ],
        10: [],
        11: [
            { name: 'Relentless Rage', desc: 'If you drop to 0 HP while raging, you can make a DC 10 CON save to drop to 1 HP instead. DC increases by 5 each time until you finish a Short/Long Rest.' }
        ],
        12: [],
        13: [
            { name: 'Improved Brutal Strike', desc: 'Brutal Strike effects are more potent.' }
        ],
        14: [],
        15: [
            { name: 'Persistent Rage', desc: 'Your Rage doesn\'t end early unless you\'re unconscious or choose to end it.' }
        ],
        16: [],
        17: [
            { name: 'Improved Brutal Strike', desc: 'Brutal Strike effects are even more potent.' }
        ],
        18: [
            { name: 'Indomitable Might', desc: 'If your STR check total is less than your STR score, use your score instead.' }
        ],
        19: [],
        20: [
            { name: 'Primal Champion', desc: 'Your STR and CON scores increase by 4. Maximum for those scores is now 24.' }
        ]
    },

    'Bard': {
        1: [
            { name: 'Bardic Inspiration', desc: 'Bonus Action to inspire an ally. They can add 1d6 to one ability check, attack roll, or saving throw within 10 minutes. Uses = CHA modifier, regain all on Long Rest.' },
            { name: 'Spellcasting', desc: 'You know 4 cantrips and 4 level 1 spells. Spell slots: 2 x 1st level.' }
        ],
        2: [
            { name: 'Jack of All Trades', desc: 'Add half your proficiency bonus (rounded down) to any ability check that doesn\'t already include your proficiency.' },
            { name: 'Song of Rest', desc: 'During a Short Rest, you and allies regain extra HP equal to a roll of your Bardic Inspiration die.' }
        ],
        3: [
            { name: 'Bard College', desc: 'Choose your subclass.' },
            { name: 'Expertise', desc: 'Choose 2 skills you\'re proficient in. Your proficiency bonus is doubled for those skills.' }
        ],
        4: [],
        5: [
            { name: 'Font of Inspiration', desc: 'Regain all Bardic Inspiration uses when you finish a Short or Long Rest.' }
        ],
        6: [
            { name: 'Countercharm', desc: 'Action to start a performance that lasts until end of your next turn. You and allies within 30 ft. have advantage on saves vs. Frightened and Charmed.' }
        ],
        7: [],
        8: [],
        9: [],
        10: [
            { name: 'Magical Secrets', desc: 'Learn 2 spells from any class. They count as Bard spells for you.' },
            { name: 'Expertise', desc: 'Choose 2 more skills to gain Expertise in.' }
        ],
        11: [],
        12: [],
        13: [],
        14: [
            { name: 'Magical Secrets', desc: 'Learn 2 more spells from any class.' }
        ],
        15: [],
        16: [],
        17: [],
        18: [
            { name: 'Magical Secrets', desc: 'Learn 2 more spells from any class.' }
        ],
        19: [],
        20: [
            { name: 'Superior Inspiration', desc: 'When you roll Initiative and have no Bardic Inspiration uses left, you regain 1 use.' }
        ]
    },

    'Cleric': {
        1: [
            { name: 'Spellcasting', desc: 'You know 3 cantrips. Prepare spells = WIS + Cleric level. Spell slots: 2 x 1st level.' },
            { name: 'Divine Order', desc: 'Choose Protector (Heavy armor + martial weapons) or Thaumaturge (+1 cantrip, Arcana or Religion proficiency).' }
        ],
        2: [
            { name: 'Channel Divinity', desc: 'Use divine energy for effects. Regain on Short/Long Rest. Options: Divine Spark (heal or harm 1d8 + spell level) and Turn Undead.' }
        ],
        3: [
            { name: 'Divine Domain', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Sear Undead', desc: 'When you Turn Undead, you can also deal radiant damage equal to your Cleric level to turned undead.' }
        ],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [
            { name: 'Divine Intervention', desc: 'Action to request divine aid. Roll d100. If result ≤ Cleric level, you succeed. Otherwise, you can try again after a Long Rest.' }
        ],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [
            { name: 'Improved Divine Intervention', desc: 'Your Divine Intervention automatically succeeds (no roll needed).' }
        ]
    },

    'Druid': {
        1: [
            { name: 'Spellcasting', desc: 'You know 2 cantrips. Prepare spells = WIS + Druid level. Spell slots: 2 x 1st level.' },
            { name: 'Druidic', desc: 'You know Druidic, a secret language of druids.' },
            { name: 'Primal Order', desc: 'Choose Magician (+1 cantrip, Arcana or Nature proficiency) or Warden (Martial weapons + heavy armor proficiency).' }
        ],
        2: [
            { name: 'Wild Shape', desc: 'Bonus Action to transform into a Beast. CR ≤ 1/4 with no fly/swim. 2 uses per Long Rest. Lasts = half Druid level hours.' },
            { name: 'Wild Companion', desc: 'Ritual cast Find Familiar or spend a Wild Shape use to cast it instantly.' }
        ],
        3: [
            { name: 'Druid Circle', desc: 'Choose your subclass.' }
        ],
        4: [
            { name: 'Wild Shape Improvement', desc: 'CR ≤ 1/2, swim speed allowed.' }
        ],
        5: [],
        6: [],
        7: [],
        8: [
            { name: 'Wild Shape Improvement', desc: 'CR ≤ 1, fly speed allowed.' }
        ],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [
            { name: 'Improved Elemental Wild Shape', desc: 'You can expend 2 Wild Shape uses to transform into an Air, Earth, Fire, or Water Elemental.' }
        ],
        16: [],
        17: [],
        18: [
            { name: 'Beast Spells', desc: 'You can cast Druid spells in any Wild Shape form.' }
        ],
        19: [],
        20: [
            { name: 'Archdruid', desc: 'You can use Wild Shape unlimited times. Your Druid spells ignore resistance to their damage type. When you roll Initiative and have no Wild Shape uses left, you regain 1 use.' }
        ]
    },

    'Fighter': {
        1: [
            { name: 'Fighting Style', desc: 'Choose a fighting style: Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting.' },
            { name: 'Second Wind', desc: 'Bonus Action to regain HP = 1d10 + Fighter level. Regain on Short/Long Rest.' },
            { name: 'Weapon Mastery', desc: 'Gain mastery with 3 weapons. Change mastery choices when you gain a Fighter level.' }
        ],
        2: [
            { name: 'Action Surge', desc: 'Take an additional action on your turn. Regain on Short/Long Rest.' },
            { name: 'Tactical Mind', desc: 'When you fail an ability check, spend a Second Wind use to add 1d10 to the check (potentially turning failure into success).' }
        ],
        3: [
            { name: 'Martial Archetype', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Extra Attack', desc: 'Attack twice when you take the Attack action. At 11th level, attack three times.' },
            { name: 'Tactical Shift', desc: 'When you activate Second Wind, you can move up to half your speed without provoking opportunity attacks.' }
        ],
        6: [],
        7: [],
        8: [],
        9: [
            { name: 'Indomitable', desc: 'Reroll a failed saving throw. Regain on Long Rest. Gain extra uses at 13th (2 uses) and 17th (3 uses).' },
            { name: 'Tactical Master', desc: 'Replace an attack from Extra Attack with a use of Tactical Mind (still only 1 Second Wind use spent).' }
        ],
        10: [],
        11: [
            { name: 'Extra Attack (2)', desc: 'Attack three times when you take the Attack action.' }
        ],
        12: [],
        13: [
            { name: 'Indomitable (2 uses)', desc: 'You can use Indomitable twice per Long Rest.' },
            { name: 'Studied Attacks', desc: 'When you miss with an attack roll, you gain advantage on your next attack against that target before the end of your next turn.' }
        ],
        14: [],
        15: [],
        16: [],
        17: [
            { name: 'Action Surge (2 uses)', desc: 'You can use Action Surge twice per Short/Long Rest.' },
            { name: 'Indomitable (3 uses)', desc: 'You can use Indomitable three times per Long Rest.' }
        ],
        18: [],
        19: [],
        20: [
            { name: 'Epic Boon', desc: 'You gain an Epic Boon feat (or take the Feat from your ASI level).' }
        ]
    },

    'Monk': {
        1: [
            { name: 'Martial Arts', desc: 'Unarmed strikes use DEX and deal 1d6 damage. When you use unarmed strike or monk weapon, Bonus Action for another unarmed strike. Scales: 1d6 → 1d8 → 1d10 → 1d12.' },
            { name: 'Unarmored Defense', desc: 'AC = 10 + DEX + WIS when not wearing armor or shield.' }
        ],
        2: [
            { name: 'Ki', desc: 'You have 2 Ki points. Regain all on Short/Long Rest. Spend for Flurry of Blows, Patient Defense, or Step of the Wind.' },
            { name: 'Unarmored Movement', desc: 'Your speed increases by 10 ft. while not wearing armor or shield. Increases at higher levels.' },
            { name: 'Uncanny Metabolism', desc: 'When you roll Initiative, spend 1 Ki to regain HP = 1 Martial Arts die + WIS.' }
        ],
        3: [
            { name: 'Deflect Attacks', desc: 'Reaction when hit to reduce damage by 1d10 + DEX + Monk level. If reduced to 0, spend 1 Ki to deflect projectile back (as ranged attack with +1d6 + WIS).' },
            { name: 'Monk Tradition', desc: 'Choose your subclass.' }
        ],
        4: [
            { name: 'Slow Fall', desc: 'Reaction to reduce falling damage by 5 × Monk level.' }
        ],
        5: [
            { name: 'Extra Attack', desc: 'Attack twice when you take the Attack action.' },
            { name: 'Stunning Strike', desc: 'When you hit with melee attack, spend 1 Ki to force CON save (DC 8 + proficiency + WIS). On fail, target is Stunned until end of your next turn.' }
        ],
        6: [
            { name: 'Empowered Strikes', desc: 'Your unarmed strikes count as magical for overcoming resistance.' }
        ],
        7: [
            { name: 'Evasion', desc: 'When you make a DEX save to take half damage, you take no damage on success, half on failure.' }
        ],
        8: [],
        9: [
            { name: 'Acrobatic Movement', desc: 'While unarmored, difficult terrain costs no extra movement, and you have advantage on DEX (Acrobatics) checks.' }
        ],
        10: [
            { name: 'Heightened Focus', desc: 'Your Flurry of Blows, Patient Defense, and Step of the Wind cost 0 Ki if you have no Ki remaining. You can use these once per turn for free in this state.' },
            { name: 'Self-Restoration', desc: 'At the end of a Long Rest, regain HP = Monk level and end 1 effect reducing your max HP or 1 disease affecting you.' }
        ],
        11: [],
        12: [],
        13: [
            { name: 'Deflect Energy', desc: 'Your Deflect Attacks now also works against spell attacks and you can spend 1 Ki to deflect spell back at caster (using your spell attack modifier).' }
        ],
        14: [
            { name: 'Disciplined Survivor', desc: 'Proficiency in all saving throws. If you fail a save, spend 1 Ki to reroll and use the new result.' }
        ],
        15: [],
        16: [],
        17: [],
        18: [
            { name: 'Superior Defense', desc: 'At start of your turn, you can spend 3 Ki to bolster yourself for 1 minute. During this time, resistance to all damage except Force damage.' }
        ],
        19: [],
        20: [
            { name: 'Body and Mind', desc: 'Your Martial Arts die is 1d12. When you roll Initiative and have no Ki remaining, you regain 4 Ki.' }
        ]
    },

    'Paladin': {
        1: [
            { name: 'Lay on Hands', desc: 'Touch a creature to restore HP from your pool (5 × Paladin level). Pool refills on Long Rest. Spend 5 HP from pool to cure disease or poison.' },
            { name: 'Spellcasting', desc: 'Prepare spells = CHA + half Paladin level. Spell slots: none at 1st level.' },
            { name: 'Weapon Mastery', desc: 'Gain mastery with 2 weapons. Change mastery choices when you gain a Paladin level.' }
        ],
        2: [
            { name: 'Fighting Style', desc: 'Choose: Blessed Warrior, Defense, Dueling, Great Weapon Fighting, or Protection.' },
            { name: 'Paladin\'s Smite', desc: 'When you hit with melee attack, expend a spell slot to deal +2d8 radiant (+1d8 per level above 1st, max 6d8). Against undead/fiend, add +1d8.' }
        ],
        3: [
            { name: 'Channel Divinity', desc: 'Use divine energy for effects. Regain on Short/Long Rest. All paladins can use Divine Sense (detect celestial/fiend/undead within 60 ft.).' },
            { name: 'Sacred Oath', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Extra Attack', desc: 'Attack twice when you take the Attack action.' },
            { name: 'Faithful Steed', desc: 'Ritual cast Find Steed or use Channel Divinity to cast it instantly.' }
        ],
        6: [
            { name: 'Aura of Protection', desc: 'You and allies within 10 ft. gain bonus to saves = your CHA modifier (min +1). At 18th level, range increases to 30 ft.' }
        ],
        7: [],
        8: [],
        9: [],
        10: [
            { name: 'Aura of Courage', desc: 'You and allies within 10 ft. can\'t be Frightened. At 18th level, range increases to 30 ft.' }
        ],
        11: [
            { name: 'Radiant Strikes', desc: 'Your melee weapon attacks deal extra radiant damage = CHA modifier (min +1).' }
        ],
        12: [],
        13: [],
        14: [
            { name: 'Restoring Touch', desc: 'Action to end one spell on yourself or a willing creature you touch. Uses = CHA modifier, regain all on Long Rest.' }
        ],
        15: [],
        16: [],
        17: [],
        18: [
            { name: 'Aura Improvements', desc: 'Your Aura of Protection and Aura of Courage range increases to 30 ft.' }
        ],
        19: [],
        20: [
            { name: 'Epic Boon', desc: 'You gain an Epic Boon feat (or take the Feat from your ASI level).' }
        ]
    },

    'Ranger': {
        1: [
            { name: 'Favored Enemy', desc: 'Always have Hunter\'s Mark prepared. It doesn\'t count against your prepared spells. You can cast it twice per Long Rest without expending a spell slot.' },
            { name: 'Spellcasting', desc: 'You know 2 spells. Spell slots: 2 x 1st level.' },
            { name: 'Weapon Mastery', desc: 'Gain mastery with 2 weapons. Change mastery choices when you gain a Ranger level.' }
        ],
        2: [
            { name: 'Deft Explorer', desc: 'Choose Expertise in one skill, or learn a language. You can change this choice when you gain a Ranger level.' },
            { name: 'Fighting Style', desc: 'Choose: Archery, Defense, Dueling, or Two-Weapon Fighting.' }
        ],
        3: [
            { name: 'Ranger Conclave', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Extra Attack', desc: 'Attack twice when you take the Attack action.' }
        ],
        6: [
            { name: 'Roving', desc: 'Your speed increases by 10 ft., and you gain climb and swim speed = walking speed.' }
        ],
        7: [],
        8: [],
        9: [],
        10: [
            { name: 'Tireless', desc: 'Action to give yourself temp HP = 1d8 + WIS modifier (PB uses per Long Rest). Whenever you finish a Short Rest, your Exhaustion level decreases by 1.' }
        ],
        11: [],
        12: [],
        13: [],
        14: [
            { name: 'Nature\'s Veil', desc: 'Bonus Action to turn invisible until end of your next turn (PB uses per Long Rest).' }
        ],
        15: [],
        16: [],
        17: [],
        18: [
            { name: 'Feral Senses', desc: 'Gain Blindsight 30 ft.' }
        ],
        19: [],
        20: [
            { name: 'Foe Slayer', desc: 'Once per turn when you hit with an attack roll, add WIS modifier to damage (min +1).' }
        ]
    },

    'Rogue': {
        1: [
            { name: 'Expertise', desc: 'Choose 2 skills you\'re proficient in. Your proficiency bonus is doubled for those skills.' },
            { name: 'Sneak Attack', desc: 'Once per turn, deal extra 1d6 damage when you hit with weapon that has Finesse or is ranged (if you have advantage or ally is within 5 ft. of target). Increases at higher levels.' },
            { name: 'Thieves\' Cant', desc: 'You know Thieves\' Cant, a secret code language.' },
            { name: 'Weapon Mastery', desc: 'Gain mastery with 2 weapons. Change mastery choices when you gain a Rogue level.' }
        ],
        2: [
            { name: 'Cunning Action', desc: 'Bonus Action to Dash, Disengage, or Hide.' }
        ],
        3: [
            { name: 'Roguish Archetype', desc: 'Choose your subclass.' },
            { name: 'Steady Aim', desc: 'Bonus Action to gain advantage on your next attack this turn (if you haven\'t moved, your speed is 0 until end of turn).' }
        ],
        4: [],
        5: [
            { name: 'Uncanny Dodge', desc: 'Reaction when hit by attack you can see to halve the damage.' }
        ],
        6: [
            { name: 'Expertise', desc: 'Choose 2 more skills to gain Expertise in.' }
        ],
        7: [
            { name: 'Evasion', desc: 'When you make a DEX save to take half damage, you take no damage on success, half on failure.' },
            { name: 'Reliable Talent', desc: 'Whenever you make an ability check with a skill you\'re proficient in, treat rolls of 9 or lower as a 10.' }
        ],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [
            { name: 'Devious Strikes', desc: 'When you use Sneak Attack, you can add one of these effects: Daze (speed 0, no reactions), Knock Out (unconscious), or Obscure (attacker has disadvantage).' }
        ],
        15: [
            { name: 'Slippery Mind', desc: 'Proficiency in WIS saving throws.' }
        ],
        16: [],
        17: [],
        18: [
            { name: 'Elusive', desc: 'No attack roll has advantage against you unless you\'re Incapacitated.' }
        ],
        19: [],
        20: [
            { name: 'Stroke of Luck', desc: 'If you miss an attack, you can turn it into a hit. Or if you fail an ability check, you can turn it into a success. Regain on Short/Long Rest.' }
        ]
    },

    'Sorcerer': {
        1: [
            { name: 'Spellcasting', desc: 'You know 4 cantrips and 2 level 1 spells. Spell slots: 2 x 1st level.' },
            { name: 'Innate Sorcery', desc: 'Action to tap into wellspring of magic. For 1 minute: All spells you cast get +1 bonus to attack rolls and save DC. Once per turn, roll 1d4 and add to damage roll of a Sorcerer spell. Uses = proficiency bonus, regain all on Long Rest.' }
        ],
        2: [
            { name: 'Font of Magic', desc: 'You have 2 Sorcery Points. Regain all on Long Rest. You can convert spell slots to points or points to slots.' },
            { name: 'Metamagic', desc: 'Spend Sorcery Points to alter spells. Choose 2 options: Careful, Distant, Extended, Heightened, Quickened, Seeking, Subtle, or Twinned.' }
        ],
        3: [
            { name: 'Sorcerous Origin', desc: 'Choose your subclass.' },
            { name: 'Metamagic', desc: 'Choose 1 additional Metamagic option.' }
        ],
        4: [],
        5: [],
        6: [],
        7: [
            { name: 'Sorcery Incarnate', desc: 'When you activate Innate Sorcery, you can use Metamagic options without spending Sorcery Points. You can use this benefit 1 Metamagic option per use of Innate Sorcery. After you use Innate Sorcery, you can\'t use it again until you finish a Long Rest, unless you spend 5 Sorcery Points to restore it (no action required).' }
        ],
        8: [],
        9: [],
        10: [
            { name: 'Metamagic', desc: 'Choose 1 additional Metamagic option.' }
        ],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [
            { name: 'Metamagic', desc: 'Choose 1 additional Metamagic option.' }
        ],
        18: [],
        19: [],
        20: [
            { name: 'Arcane Apotheosis', desc: 'While Innate Sorcery is active, you can use one Metamagic option on each of your turns without spending Sorcery Points.' }
        ]
    },

    'Warlock': {
        1: [
            { name: 'Eldritch Invocations', desc: 'You know 2 invocations. These are special magical abilities granted by your patron.' },
            { name: 'Pact Magic', desc: 'You know 2 cantrips and 2 level 1 spells. You have 1 spell slot. Regain spell slots on Short/Long Rest. Your spells are always cast at your highest slot level.' }
        ],
        2: [
            { name: 'Magical Cunning', desc: 'Action to regain expended Pact Magic spell slots. Regain on Long Rest.' }
        ],
        3: [
            { name: 'Otherworldly Patron', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' }
        ],
        6: [],
        7: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' }
        ],
        8: [],
        9: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' },
            { name: 'Contact Patron', desc: 'Ritual cast Contact Other Plane without risk of madness. When you do, you contact your patron.' }
        ],
        10: [],
        11: [
            { name: 'Mystic Arcanum (6th level)', desc: 'Choose one 6th-level spell from the Warlock spell list. You can cast it once per Long Rest without expending a spell slot.' }
        ],
        12: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' }
        ],
        13: [
            { name: 'Mystic Arcanum (7th level)', desc: 'Choose one 7th-level spell from the Warlock spell list. You can cast it once per Long Rest without expending a spell slot.' }
        ],
        14: [],
        15: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' },
            { name: 'Mystic Arcanum (8th level)', desc: 'Choose one 8th-level spell from the Warlock spell list. You can cast it once per Long Rest without expending a spell slot.' }
        ],
        16: [],
        17: [
            { name: 'Mystic Arcanum (9th level)', desc: 'Choose one 9th-level spell from the Warlock spell list. You can cast it once per Long Rest without expending a spell slot.' }
        ],
        18: [
            { name: 'Eldritch Invocations', desc: 'Learn 1 additional invocation.' }
        ],
        19: [],
        20: [
            { name: 'Eldritch Master', desc: 'Action to regain all expended Pact Magic spell slots. Once you do so, you can\'t do so again until you finish a Long Rest.' }
        ]
    },

    'Wizard': {
        1: [
            { name: 'Spellcasting', desc: 'You know 3 cantrips. Your spellbook contains 6 level 1 spells. Prepare spells = INT + Wizard level. Spell slots: 2 x 1st level.' },
            { name: 'Arcane Recovery', desc: 'During a Short Rest, recover expended spell slots. Total slot level ≤ half your Wizard level (rounded up). Once per Long Rest.' },
            { name: 'Ritual Adept', desc: 'You can cast any spell in your spellbook as a ritual if it has the Ritual tag.' }
        ],
        2: [
            { name: 'Scholar', desc: 'Proficiency in one skill of your choice from the Wizard skill list.' }
        ],
        3: [
            { name: 'Arcane Tradition', desc: 'Choose your subclass.' }
        ],
        4: [],
        5: [
            { name: 'Memorize Spell', desc: 'Whenever you finish a Short Rest, you can replace one prepared spell with another from your spellbook.' }
        ],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [
            { name: 'Spell Mastery', desc: 'Choose one 1st-level and one 2nd-level spell in your spellbook. You can cast them at their lowest level without expending spell slots.' }
        ],
        19: [],
        20: [
            { name: 'Signature Spells', desc: 'Choose two 3rd-level spells in your spellbook. They are always prepared and you can cast each once per Short/Long Rest without expending a spell slot.' }
        ]
    }
};
