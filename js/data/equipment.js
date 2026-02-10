// ═══════════════════════════════════════════════════════════════
//  EQUIPMENT DATABASE — D&D 5E 2024 PHB
//  Weapons, Armor, Shields, Adventuring Gear, Tools, Packs
// ═══════════════════════════════════════════════════════════════

const EQUIPMENT = {

// ─────────────────────────────────────────────────────────────
//  ARMOR
// ─────────────────────────────────────────────────────────────
armor: [
    // Light Armor
    { name: 'Padded Armor', type: 'armor', category: 'Light', ac: 11, acType: 'dex', stealthDisadv: true, weight: 8, cost: '5 gp', strReq: 0 },
    { name: 'Leather Armor', type: 'armor', category: 'Light', ac: 11, acType: 'dex', stealthDisadv: false, weight: 10, cost: '10 gp', strReq: 0 },
    { name: 'Studded Leather', type: 'armor', category: 'Light', ac: 12, acType: 'dex', stealthDisadv: false, weight: 13, cost: '45 gp', strReq: 0 },
    // Medium Armor
    { name: 'Hide Armor', type: 'armor', category: 'Medium', ac: 12, acType: 'dex2', stealthDisadv: false, weight: 12, cost: '10 gp', strReq: 0 },
    { name: 'Chain Shirt', type: 'armor', category: 'Medium', ac: 13, acType: 'dex2', stealthDisadv: false, weight: 20, cost: '50 gp', strReq: 0 },
    { name: 'Scale Mail', type: 'armor', category: 'Medium', ac: 14, acType: 'dex2', stealthDisadv: true, weight: 45, cost: '50 gp', strReq: 0 },
    { name: 'Breastplate', type: 'armor', category: 'Medium', ac: 14, acType: 'dex2', stealthDisadv: false, weight: 20, cost: '400 gp', strReq: 0 },
    { name: 'Half Plate', type: 'armor', category: 'Medium', ac: 15, acType: 'dex2', stealthDisadv: true, weight: 40, cost: '750 gp', strReq: 0 },
    // Heavy Armor
    { name: 'Ring Mail', type: 'armor', category: 'Heavy', ac: 14, acType: 'none', stealthDisadv: true, weight: 40, cost: '30 gp', strReq: 0 },
    { name: 'Chain Mail', type: 'armor', category: 'Heavy', ac: 16, acType: 'none', stealthDisadv: true, weight: 55, cost: '75 gp', strReq: 13 },
    { name: 'Splint Armor', type: 'armor', category: 'Heavy', ac: 17, acType: 'none', stealthDisadv: true, weight: 60, cost: '200 gp', strReq: 15 },
    { name: 'Plate Armor', type: 'armor', category: 'Heavy', ac: 18, acType: 'none', stealthDisadv: true, weight: 65, cost: '1500 gp', strReq: 15 },
],

shields: [
    { name: 'Shield', type: 'shield', acBonus: 2, weight: 6, cost: '10 gp' },
],

// ─────────────────────────────────────────────────────────────
//  WEAPONS
// ─────────────────────────────────────────────────────────────
weapons: [
    // Simple Melee
    { name: 'Club', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d4', damageType: 'Bludgeoning', weight: 2, cost: '1 sp', properties: ['Light'], ability: 'str' },
    { name: 'Dagger', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d4', damageType: 'Piercing', weight: 1, cost: '2 gp', properties: ['Finesse', 'Light', 'Thrown (20/60)'], ability: 'finesse' },
    { name: 'Greatclub', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 10, cost: '2 sp', properties: ['Two-Handed'], ability: 'str' },
    { name: 'Handaxe', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d6', damageType: 'Slashing', weight: 2, cost: '5 gp', properties: ['Light', 'Thrown (20/60)'], ability: 'str' },
    { name: 'Javelin', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '5 sp', properties: ['Thrown (30/120)'], ability: 'str' },
    { name: 'Light Hammer', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d4', damageType: 'Bludgeoning', weight: 2, cost: '2 gp', properties: ['Light', 'Thrown (20/60)'], ability: 'str' },
    { name: 'Mace', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d6', damageType: 'Bludgeoning', weight: 4, cost: '5 gp', properties: [], ability: 'str' },
    { name: 'Quarterstaff', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d6', damageType: 'Bludgeoning', weight: 4, cost: '2 sp', properties: ['Versatile (1d8)'], ability: 'str' },
    { name: 'Sickle', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d4', damageType: 'Slashing', weight: 2, cost: '1 gp', properties: ['Light'], ability: 'str' },
    { name: 'Spear', type: 'weapon', category: 'Simple', rangeType: 'Melee', damage: '1d6', damageType: 'Piercing', weight: 3, cost: '1 gp', properties: ['Thrown (20/60)', 'Versatile (1d8)'], ability: 'str' },

    // Simple Ranged
    { name: 'Light Crossbow', type: 'weapon', category: 'Simple', rangeType: 'Ranged', damage: '1d8', damageType: 'Piercing', weight: 5, cost: '25 gp', properties: ['Ammunition (80/320)', 'Loading', 'Two-Handed'], ability: 'dex' },
    { name: 'Dart', type: 'weapon', category: 'Simple', rangeType: 'Ranged', damage: '1d4', damageType: 'Piercing', weight: 0.25, cost: '5 cp', properties: ['Finesse', 'Thrown (20/60)'], ability: 'finesse' },
    { name: 'Shortbow', type: 'weapon', category: 'Simple', rangeType: 'Ranged', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '25 gp', properties: ['Ammunition (80/320)', 'Two-Handed'], ability: 'dex' },
    { name: 'Sling', type: 'weapon', category: 'Simple', rangeType: 'Ranged', damage: '1d4', damageType: 'Bludgeoning', weight: 0, cost: '1 sp', properties: ['Ammunition (30/120)'], ability: 'dex' },

    // Martial Melee
    { name: 'Battleaxe', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Slashing', weight: 4, cost: '10 gp', properties: ['Versatile (1d10)'], ability: 'str' },
    { name: 'Flail', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 2, cost: '10 gp', properties: [], ability: 'str' },
    { name: 'Glaive', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d10', damageType: 'Slashing', weight: 6, cost: '20 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], ability: 'str' },
    { name: 'Greataxe', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d12', damageType: 'Slashing', weight: 7, cost: '30 gp', properties: ['Heavy', 'Two-Handed'], ability: 'str' },
    { name: 'Greatsword', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '2d6', damageType: 'Slashing', weight: 6, cost: '50 gp', properties: ['Heavy', 'Two-Handed'], ability: 'str' },
    { name: 'Halberd', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d10', damageType: 'Slashing', weight: 6, cost: '20 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], ability: 'str' },
    { name: 'Lance', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d10', damageType: 'Piercing', weight: 6, cost: '10 gp', properties: ['Heavy', 'Reach'], ability: 'str' },
    { name: 'Longsword', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Slashing', weight: 3, cost: '15 gp', properties: ['Versatile (1d10)'], ability: 'str' },
    { name: 'Maul', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '2d6', damageType: 'Bludgeoning', weight: 10, cost: '10 gp', properties: ['Heavy', 'Two-Handed'], ability: 'str' },
    { name: 'Morningstar', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Piercing', weight: 4, cost: '15 gp', properties: [], ability: 'str' },
    { name: 'Pike', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d10', damageType: 'Piercing', weight: 18, cost: '5 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], ability: 'str' },
    { name: 'Rapier', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '25 gp', properties: ['Finesse'], ability: 'finesse' },
    { name: 'Scimitar', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d6', damageType: 'Slashing', weight: 3, cost: '25 gp', properties: ['Finesse', 'Light'], ability: 'finesse' },
    { name: 'Shortsword', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '10 gp', properties: ['Finesse', 'Light'], ability: 'finesse' },
    { name: 'Trident', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Piercing', weight: 4, cost: '5 gp', properties: ['Thrown (20/60)', 'Versatile (1d10)'], ability: 'str' },
    { name: 'War Pick', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '5 gp', properties: ['Versatile (1d10)'], ability: 'str' },
    { name: 'Warhammer', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 2, cost: '15 gp', properties: ['Versatile (1d10)'], ability: 'str' },
    { name: 'Whip', type: 'weapon', category: 'Martial', rangeType: 'Melee', damage: '1d4', damageType: 'Slashing', weight: 3, cost: '2 gp', properties: ['Finesse', 'Reach'], ability: 'finesse' },

    // Martial Ranged
    { name: 'Blowgun', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1', damageType: 'Piercing', weight: 1, cost: '10 gp', properties: ['Ammunition (25/100)', 'Loading'], ability: 'dex' },
    { name: 'Hand Crossbow', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1d6', damageType: 'Piercing', weight: 3, cost: '75 gp', properties: ['Ammunition (30/120)', 'Light', 'Loading'], ability: 'dex' },
    { name: 'Heavy Crossbow', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1d10', damageType: 'Piercing', weight: 18, cost: '50 gp', properties: ['Ammunition (100/400)', 'Heavy', 'Loading', 'Two-Handed'], ability: 'dex' },
    { name: 'Longbow', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '50 gp', properties: ['Ammunition (150/600)', 'Heavy', 'Two-Handed'], ability: 'dex' },
    { name: 'Musket', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1d12', damageType: 'Piercing', weight: 10, cost: '500 gp', properties: ['Ammunition (40/120)', 'Loading', 'Two-Handed'], ability: 'dex' },
    { name: 'Pistol', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '1d10', damageType: 'Piercing', weight: 3, cost: '250 gp', properties: ['Ammunition (30/90)', 'Loading'], ability: 'dex' },
    { name: 'Net', type: 'weapon', category: 'Martial', rangeType: 'Ranged', damage: '0', damageType: 'None', weight: 3, cost: '1 gp', properties: ['Thrown (5/15)'], ability: 'dex' },
],

// ─────────────────────────────────────────────────────────────
//  AMMUNITION
// ─────────────────────────────────────────────────────────────
ammunition: [
    { name: 'Arrows (20)', type: 'ammunition', weight: 1, cost: '1 gp' },
    { name: 'Blowgun Needles (50)', type: 'ammunition', weight: 1, cost: '1 gp' },
    { name: 'Crossbow Bolts (20)', type: 'ammunition', weight: 1.5, cost: '1 gp' },
    { name: 'Firearm Bullets (10)', type: 'ammunition', weight: 2, cost: '3 gp' },
    { name: 'Sling Bullets (20)', type: 'ammunition', weight: 1.5, cost: '4 cp' },
],

// ─────────────────────────────────────────────────────────────
//  ADVENTURING GEAR
// ─────────────────────────────────────────────────────────────
gear: [
    { name: 'Abacus', type: 'gear', weight: 2, cost: '2 gp' },
    { name: 'Acid (vial)', type: 'gear', weight: 1, cost: '25 gp' },
    { name: "Alchemist's Fire", type: 'gear', weight: 1, cost: '50 gp' },
    { name: 'Antitoxin (vial)', type: 'gear', weight: 0, cost: '50 gp' },
    { name: 'Backpack', type: 'gear', weight: 5, cost: '2 gp' },
    { name: 'Ball Bearings (bag of 1000)', type: 'gear', weight: 2, cost: '1 gp' },
    { name: 'Barrel', type: 'gear', weight: 70, cost: '2 gp' },
    { name: 'Basket', type: 'gear', weight: 2, cost: '4 sp' },
    { name: 'Bedroll', type: 'gear', weight: 7, cost: '1 gp' },
    { name: 'Bell', type: 'gear', weight: 0, cost: '1 gp' },
    { name: 'Blanket', type: 'gear', weight: 3, cost: '5 sp' },
    { name: 'Block and Tackle', type: 'gear', weight: 5, cost: '1 gp' },
    { name: 'Book', type: 'gear', weight: 5, cost: '25 gp' },
    { name: 'Bottle, Glass', type: 'gear', weight: 2, cost: '2 gp' },
    { name: 'Bucket', type: 'gear', weight: 2, cost: '5 cp' },
    { name: "Burglar's Pack", type: 'gear', weight: 44, cost: '16 gp', isPack: true, contents: 'Backpack, Ball Bearings (1000), 10 ft. string, Bell, 5 Candles, Crowbar, Hammer, 10 Pitons, Hooded Lantern, 2 Oil Flasks, 5 Days Rations, Tinderbox, Waterskin, 50 ft. Hempen Rope' },
    { name: 'Caltrops (bag of 20)', type: 'gear', weight: 2, cost: '1 gp' },
    { name: 'Candle', type: 'gear', weight: 0, cost: '1 cp' },
    { name: 'Case, Crossbow Bolt', type: 'gear', weight: 1, cost: '1 gp' },
    { name: 'Case, Map or Scroll', type: 'gear', weight: 1, cost: '1 gp' },
    { name: 'Chain (10 feet)', type: 'gear', weight: 10, cost: '5 gp' },
    { name: 'Chalk (1 piece)', type: 'gear', weight: 0, cost: '1 cp' },
    { name: 'Chest', type: 'gear', weight: 25, cost: '5 gp' },
    { name: "Climber's Kit", type: 'gear', weight: 12, cost: '25 gp' },
    { name: 'Component Pouch', type: 'gear', weight: 2, cost: '25 gp' },
    { name: 'Costume', type: 'gear', weight: 4, cost: '5 gp' },
    { name: 'Crowbar', type: 'gear', weight: 5, cost: '2 gp' },
    { name: "Diplomat's Pack", type: 'gear', weight: 39, cost: '39 gp', isPack: true, contents: 'Chest, 2 Cases (map/scroll), Fine Clothes, Bottle of Ink, Ink Pen, Lamp, 2 Oil Flasks, 5 Sheets of Paper, Vial of Perfume, Sealing Wax, Soap' },
    { name: "Dungeoneer's Pack", type: 'gear', weight: 61, cost: '12 gp', isPack: true, contents: 'Backpack, Crowbar, Hammer, 10 Pitons, 10 Torches, Tinderbox, 10 Days Rations, Waterskin, 50 ft. Hempen Rope' },
    { name: "Entertainer's Pack", type: 'gear', weight: 38, cost: '40 gp', isPack: true, contents: 'Backpack, Bedroll, 2 Costumes, 5 Candles, 5 Days Rations, Waterskin, Disguise Kit' },
    { name: "Explorer's Pack", type: 'gear', weight: 59, cost: '10 gp', isPack: true, contents: 'Backpack, Bedroll, Mess Kit, Tinderbox, 10 Torches, 10 Days Rations, Waterskin, 50 ft. Hempen Rope' },
    { name: 'Fishing Tackle', type: 'gear', weight: 4, cost: '1 gp' },
    { name: 'Flask or Tankard', type: 'gear', weight: 1, cost: '2 cp' },
    { name: 'Grappling Hook', type: 'gear', weight: 4, cost: '2 gp' },
    { name: 'Hammer', type: 'gear', weight: 3, cost: '1 gp' },
    { name: 'Hammer, Sledge', type: 'gear', weight: 10, cost: '2 gp' },
    { name: "Healer's Kit", type: 'gear', weight: 3, cost: '5 gp' },
    { name: 'Holy Symbol (Amulet)', type: 'gear', weight: 1, cost: '5 gp' },
    { name: 'Holy Symbol (Emblem)', type: 'gear', weight: 0, cost: '5 gp' },
    { name: 'Holy Symbol (Reliquary)', type: 'gear', weight: 2, cost: '5 gp' },
    { name: 'Holy Water (flask)', type: 'gear', weight: 1, cost: '25 gp' },
    { name: 'Hourglass', type: 'gear', weight: 1, cost: '25 gp' },
    { name: 'Hunting Trap', type: 'gear', weight: 25, cost: '5 gp' },
    { name: 'Ink (1 oz. bottle)', type: 'gear', weight: 0, cost: '10 gp' },
    { name: 'Ink Pen', type: 'gear', weight: 0, cost: '2 cp' },
    { name: 'Jug or Pitcher', type: 'gear', weight: 4, cost: '2 cp' },
    { name: 'Ladder (10-foot)', type: 'gear', weight: 25, cost: '1 sp' },
    { name: 'Lamp', type: 'gear', weight: 1, cost: '5 sp' },
    { name: 'Lantern, Bullseye', type: 'gear', weight: 2, cost: '10 gp' },
    { name: 'Lantern, Hooded', type: 'gear', weight: 2, cost: '5 gp' },
    { name: 'Lock', type: 'gear', weight: 1, cost: '10 gp' },
    { name: 'Magnifying Glass', type: 'gear', weight: 0, cost: '100 gp' },
    { name: 'Manacles', type: 'gear', weight: 6, cost: '2 gp' },
    { name: 'Mess Kit', type: 'gear', weight: 1, cost: '2 sp' },
    { name: 'Mirror, Steel', type: 'gear', weight: 0.5, cost: '5 gp' },
    { name: 'Oil (flask)', type: 'gear', weight: 1, cost: '1 sp' },
    { name: 'Paper (one sheet)', type: 'gear', weight: 0, cost: '2 sp' },
    { name: 'Parchment (one sheet)', type: 'gear', weight: 0, cost: '1 sp' },
    { name: 'Perfume (vial)', type: 'gear', weight: 0, cost: '5 gp' },
    { name: 'Pick, Miner\'s', type: 'gear', weight: 10, cost: '2 gp' },
    { name: 'Piton', type: 'gear', weight: 0.25, cost: '5 cp' },
    { name: 'Poison, Basic (vial)', type: 'gear', weight: 0, cost: '100 gp' },
    { name: 'Pole (10-foot)', type: 'gear', weight: 7, cost: '5 cp' },
    { name: 'Pot, Iron', type: 'gear', weight: 10, cost: '2 gp' },
    { name: 'Potion of Healing', type: 'gear', weight: 0.5, cost: '50 gp' },
    { name: "Priest's Pack", type: 'gear', weight: 29, cost: '33 gp', isPack: true, contents: 'Backpack, Blanket, 10 Candles, Tinderbox, Alms Box, 2 Blocks of Incense, Censer, Vestments, 2 Days Rations, Waterskin' },
    { name: 'Quiver', type: 'gear', weight: 1, cost: '1 gp' },
    { name: 'Ram, Portable', type: 'gear', weight: 35, cost: '4 gp' },
    { name: 'Rations (1 day)', type: 'gear', weight: 2, cost: '5 sp' },
    { name: 'Robes', type: 'gear', weight: 4, cost: '1 gp' },
    { name: 'Rope, Hempen (50 feet)', type: 'gear', weight: 10, cost: '1 gp' },
    { name: 'Rope, Silk (50 feet)', type: 'gear', weight: 5, cost: '10 gp' },
    { name: 'Sack', type: 'gear', weight: 0.5, cost: '1 cp' },
    { name: "Scholar's Pack", type: 'gear', weight: 22, cost: '40 gp', isPack: true, contents: 'Backpack, Book of Lore, Bottle of Ink, Ink Pen, 10 Sheets of Parchment, Little Bag of Sand, Small Knife' },
    { name: 'Sealing Wax', type: 'gear', weight: 0, cost: '5 sp' },
    { name: 'Shovel', type: 'gear', weight: 5, cost: '2 gp' },
    { name: 'Signal Whistle', type: 'gear', weight: 0, cost: '5 cp' },
    { name: 'Signet Ring', type: 'gear', weight: 0, cost: '5 gp' },
    { name: 'Soap', type: 'gear', weight: 0, cost: '2 cp' },
    { name: 'Spellbook', type: 'gear', weight: 3, cost: '50 gp' },
    { name: 'Spikes, Iron (10)', type: 'gear', weight: 5, cost: '1 gp' },
    { name: 'Spyglass', type: 'gear', weight: 1, cost: '1000 gp' },
    { name: 'Tent, Two-Person', type: 'gear', weight: 20, cost: '2 gp' },
    { name: 'Tinderbox', type: 'gear', weight: 1, cost: '5 sp' },
    { name: 'Torch', type: 'gear', weight: 1, cost: '1 cp' },
    { name: 'Vial', type: 'gear', weight: 0, cost: '1 gp' },
    { name: 'Waterskin', type: 'gear', weight: 5, cost: '2 sp' },
    { name: 'Whetstone', type: 'gear', weight: 1, cost: '1 cp' },
],

// ─────────────────────────────────────────────────────────────
//  ARCANE FOCUSES
// ─────────────────────────────────────────────────────────────
focuses: [
    { name: 'Arcane Focus - Crystal', type: 'focus', weight: 1, cost: '10 gp' },
    { name: 'Arcane Focus - Orb', type: 'focus', weight: 3, cost: '20 gp' },
    { name: 'Arcane Focus - Rod', type: 'focus', weight: 2, cost: '10 gp' },
    { name: 'Arcane Focus - Staff', type: 'focus', weight: 4, cost: '5 gp' },
    { name: 'Arcane Focus - Wand', type: 'focus', weight: 1, cost: '10 gp' },
    { name: 'Druidic Focus - Sprig of Mistletoe', type: 'focus', weight: 0, cost: '1 gp' },
    { name: 'Druidic Focus - Totem', type: 'focus', weight: 0, cost: '1 gp' },
    { name: 'Druidic Focus - Wooden Staff', type: 'focus', weight: 4, cost: '5 gp' },
    { name: 'Druidic Focus - Yew Wand', type: 'focus', weight: 1, cost: '10 gp' },
],

// ─────────────────────────────────────────────────────────────
//  TOOLS
// ─────────────────────────────────────────────────────────────
tools: [
    // Artisan's Tools
    { name: "Alchemist's Supplies", type: 'tool', category: "Artisan's Tools", weight: 8, cost: '50 gp' },
    { name: "Brewer's Supplies", type: 'tool', category: "Artisan's Tools", weight: 9, cost: '20 gp' },
    { name: "Calligrapher's Supplies", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '10 gp' },
    { name: "Carpenter's Tools", type: 'tool', category: "Artisan's Tools", weight: 8, cost: '8 gp' },
    { name: "Cartographer's Tools", type: 'tool', category: "Artisan's Tools", weight: 6, cost: '15 gp' },
    { name: "Cobbler's Tools", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '5 gp' },
    { name: "Cook's Utensils", type: 'tool', category: "Artisan's Tools", weight: 8, cost: '1 gp' },
    { name: "Glassblower's Tools", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '30 gp' },
    { name: "Jeweler's Tools", type: 'tool', category: "Artisan's Tools", weight: 2, cost: '25 gp' },
    { name: "Leatherworker's Tools", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '5 gp' },
    { name: "Mason's Tools", type: 'tool', category: "Artisan's Tools", weight: 8, cost: '10 gp' },
    { name: "Painter's Supplies", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '10 gp' },
    { name: "Potter's Tools", type: 'tool', category: "Artisan's Tools", weight: 3, cost: '10 gp' },
    { name: "Smith's Tools", type: 'tool', category: "Artisan's Tools", weight: 8, cost: '20 gp' },
    { name: "Tinker's Tools", type: 'tool', category: "Artisan's Tools", weight: 10, cost: '50 gp' },
    { name: "Weaver's Tools", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '1 gp' },
    { name: "Woodcarver's Tools", type: 'tool', category: "Artisan's Tools", weight: 5, cost: '1 gp' },
    // Other Tools
    { name: 'Disguise Kit', type: 'tool', category: 'Other', weight: 3, cost: '25 gp' },
    { name: 'Forgery Kit', type: 'tool', category: 'Other', weight: 5, cost: '15 gp' },
    { name: 'Herbalism Kit', type: 'tool', category: 'Other', weight: 3, cost: '5 gp' },
    { name: "Navigator's Tools", type: 'tool', category: 'Other', weight: 2, cost: '25 gp' },
    { name: 'Poisoner\'s Kit', type: 'tool', category: 'Other', weight: 2, cost: '50 gp' },
    { name: "Thieves' Tools", type: 'tool', category: 'Other', weight: 1, cost: '25 gp' },
    // Gaming Sets
    { name: 'Dice Set', type: 'tool', category: 'Gaming Set', weight: 0, cost: '1 sp' },
    { name: 'Dragonchess Set', type: 'tool', category: 'Gaming Set', weight: 0.5, cost: '1 gp' },
    { name: 'Playing Card Set', type: 'tool', category: 'Gaming Set', weight: 0, cost: '5 sp' },
    { name: 'Three-Dragon Ante Set', type: 'tool', category: 'Gaming Set', weight: 0, cost: '1 gp' },
    // Musical Instruments
    { name: 'Bagpipes', type: 'tool', category: 'Musical Instrument', weight: 6, cost: '30 gp' },
    { name: 'Drum', type: 'tool', category: 'Musical Instrument', weight: 3, cost: '6 gp' },
    { name: 'Dulcimer', type: 'tool', category: 'Musical Instrument', weight: 10, cost: '25 gp' },
    { name: 'Flute', type: 'tool', category: 'Musical Instrument', weight: 1, cost: '2 gp' },
    { name: 'Horn', type: 'tool', category: 'Musical Instrument', weight: 2, cost: '3 gp' },
    { name: 'Lute', type: 'tool', category: 'Musical Instrument', weight: 2, cost: '35 gp' },
    { name: 'Lyre', type: 'tool', category: 'Musical Instrument', weight: 2, cost: '30 gp' },
    { name: 'Pan Flute', type: 'tool', category: 'Musical Instrument', weight: 2, cost: '12 gp' },
    { name: 'Shawm', type: 'tool', category: 'Musical Instrument', weight: 1, cost: '2 gp' },
    { name: 'Viol', type: 'tool', category: 'Musical Instrument', weight: 1, cost: '30 gp' },
],

};

// ─────────────────────────────────────────────────────────────
//  HELPER: Search all equipment
// ─────────────────────────────────────────────────────────────
function searchEquipment(query) {
    const q = query.toLowerCase();
    const results = [];
    for (const category of Object.values(EQUIPMENT)) {
        for (const item of category) {
            if (item.name.toLowerCase().includes(q)) {
                results.push(item);
            }
        }
    }
    return results;
}

// HELPER: Get all equipment as flat array
function getAllEquipment() {
    const all = [];
    for (const category of Object.values(EQUIPMENT)) {
        all.push(...category);
    }
    return all;
}

// HELPER: Calculate AC from equipped armor + shield + DEX
function calculateAC(equippedArmor, equippedShield, dexMod) {
    let ac = 10 + dexMod; // Default: unarmored
    if (equippedArmor) {
        if (equippedArmor.acType === 'dex') {
            ac = equippedArmor.ac + dexMod;
        } else if (equippedArmor.acType === 'dex2') {
            ac = equippedArmor.ac + Math.min(dexMod, 2);
        } else {
            ac = equippedArmor.ac;
        }
    }
    if (equippedShield) {
        ac += equippedShield.acBonus || 2;
    }
    return ac;
}

// HELPER: Calculate weapon attack bonus
function calculateWeaponAttack(weapon, strMod, dexMod, profBonus, isProficient) {
    let abilityMod;
    if (weapon.ability === 'finesse') {
        abilityMod = Math.max(strMod, dexMod);
    } else if (weapon.ability === 'dex') {
        abilityMod = dexMod;
    } else {
        abilityMod = strMod;
    }
    const attackBonus = abilityMod + (isProficient ? profBonus : 0);
    const damageBonus = abilityMod;
    return { attackBonus, damageBonus, abilityMod };
}
