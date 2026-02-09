export const CHARACTER_SCHEMA_VERSION = 1;

export function createEmptyCharacter() {
  return {
    schemaVersion: CHARACTER_SCHEMA_VERSION,

    meta: {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    },

    identity: {
      name: "",
      playerName: "",
      species: null,
      background: null,
      alignment: "",
      size: null,
      speed: null
    },

    class: {
      name: null,
      subclass: null,
      level: 1
    },

    abilities: {
      method: "standard",
      scores: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
      }
    },

    proficiencies: {
      savingThrows: [],
      skills: [],
      tools: [],
      languages: []
    },

    combat: {
      maxHP: null,
      currentHP: null,
      tempHP: 0,
      hitDiceUsed: 0,
      exhaustion: 0,
      deathSaves: {
        successes: 0,
        failures: 0
      }
    },

    equipment: {
      armor: null,
      shield: null,
      weapons: [],
      inventory: []
    },

    spells: {
      spellcastingAbility: null,
      prepared: [],
      known: [],
      slotsUsed: {}
    },

    features: {
      racial: [],
      class: [],
      background: [],
      feats: []
    },

    notes: ""
  };
}
