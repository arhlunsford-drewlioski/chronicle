const BACKGROUNDS = [
    { name: 'Acolyte', skillProfs: ['Insight', 'Religion'], toolProf: "Calligrapher's Supplies", feat: 'Magic Initiate (Cleric)', desc: 'You spent years in service to a temple.', source: 'PHB 2024' },
    { name: 'Artisan', skillProfs: ['Investigation', 'Persuasion'], toolProf: "Artisan's Tools (your choice)", feat: 'Crafter', desc: 'You trained under a master craftsperson.', source: 'PHB 2024' },
    { name: 'Charlatan', skillProfs: ['Deception', 'Sleight of Hand'], toolProf: 'Forgery Kit', feat: 'Skilled', desc: 'You have always had a way with people.', source: 'PHB 2024' },
    { name: 'Criminal', skillProfs: ['Sleight of Hand', 'Stealth'], toolProf: "Thieves' Tools", feat: 'Alert', desc: 'You have a history of breaking the law.', source: 'PHB 2024' },
    { name: 'Entertainer', skillProfs: ['Acrobatics', 'Performance'], toolProf: 'Musical Instrument (your choice)', feat: 'Musician', desc: 'You thrive in front of an audience.', source: 'PHB 2024' },
    { name: 'Farmer', skillProfs: ['Animal Handling', 'Nature'], toolProf: "Carpenter's Tools", feat: 'Tough', desc: 'You grew up working the land.', source: 'PHB 2024' },
    { name: 'Guard', skillProfs: ['Athletics', 'Perception'], toolProf: 'Gaming Set (your choice)', feat: 'Alert', desc: 'You served as a protector of the people.', source: 'PHB 2024' },
    { name: 'Guide', skillProfs: ['Stealth', 'Survival'], toolProf: "Cartographer's Tools", feat: 'Magic Initiate (Druid)', desc: 'You know the wilderness like the back of your hand.', source: 'PHB 2024' },
    { name: 'Hermit', skillProfs: ['Medicine', 'Religion'], toolProf: "Herbalism Kit", feat: 'Healer', desc: 'You lived in seclusion for a formative period.', source: 'PHB 2024' },
    { name: 'Merchant', skillProfs: ['Animal Handling', 'Persuasion'], toolProf: "Navigator's Tools", feat: 'Lucky', desc: 'You made your living trading goods.', source: 'PHB 2024' },
    { name: 'Noble', skillProfs: ['History', 'Persuasion'], toolProf: 'Gaming Set (your choice)', feat: 'Skilled', desc: 'You were raised in privilege and authority.', source: 'PHB 2024' },
    { name: 'Sage', skillProfs: ['Arcana', 'History'], toolProf: "Calligrapher's Supplies", feat: 'Magic Initiate (Wizard)', desc: 'You spent years learning the lore of the world.', source: 'PHB 2024' },
    { name: 'Sailor', skillProfs: ['Acrobatics', 'Perception'], toolProf: "Navigator's Tools", feat: 'Tavern Brawler', desc: 'You sailed the seas for years.', source: 'PHB 2024' },
    { name: 'Scribe', skillProfs: ['Investigation', 'Perception'], toolProf: "Calligrapher's Supplies", feat: 'Skilled', desc: 'You devoted yourself to recording knowledge.', source: 'PHB 2024' },
    { name: 'Soldier', skillProfs: ['Athletics', 'Intimidation'], toolProf: 'Gaming Set (your choice)', feat: 'Alert', desc: 'You trained as a soldier in an army.', source: 'PHB 2024' },
    { name: 'Wayfarer', skillProfs: ['Insight', 'Stealth'], toolProf: "Thieves' Tools", feat: 'Lucky', desc: 'You grew up on the streets, surviving by wit.', source: 'PHB 2024' },
];

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
//  CONSTANTS
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬

const ABILITIES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
const ABILITY_KEYS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];
const POINT_BUY_COSTS = { 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9 };

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  CONSTANTS & STATE
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
const AB = ['STR','DEX','CON','INT','WIS','CHA'];
const AK = ['str','dex','con','int','wis','cha'];
const STD_ARRAY = [15,14,13,12,10,8];
const PB_COST = {8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};

let currentStep = 1;
let state = {
    name:'', species:null, classChoice:null, subclass:null, level:1, alignment:'',
    background:null, abilityMethod:'standard',
    abilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},
    arrayAssignments:{}, selectedChip:null,
    speciesFilter:'All'
};
