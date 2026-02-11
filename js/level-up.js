// ═══════════════════════════════════════════════════════════════════
//  LEVEL-UP SYSTEM
//  Handles character level advancement with automatic calculations
// ═══════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
//  STATE & CONSTANTS
// ─────────────────────────────────────────────────────────────────
const LEVELUP_STATE = {
    currentStep: 1,
    newLevel: 0,
    oldLevel: 0,
    hitDie: '',
    conMod: 0,
    hpChoice: null, // 'roll' or 'average'
    rolledHP: 0,
    asiChoice: null, // 'asi' or 'feat'
    asiAbility1: '',
    asiAbility2: '',
    newFeatures: []
};

const ASI_LEVELS = [4, 8, 12, 16, 19];
const ABILITY_NAMES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
const ABILITY_KEYS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

// ─────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────
function getProficiencyBonus(level) {
    return Math.ceil(level / 4) + 1;
}

function calculateModifier(score) {
    return Math.floor((score - 10) / 2);
}

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// ─────────────────────────────────────────────────────────────────
//  MODAL CONTROL
// ─────────────────────────────────────────────────────────────────
function openLevelUpModal() {
    const char = getCharacterData();
    if (!char) {
        alert('No character loaded!');
        return;
    }

    const currentLevel = parseInt(char.level) || 1;
    if (currentLevel >= 20) {
        alert('You are already at maximum level (20)!');
        return;
    }

    // Initialize state
    LEVELUP_STATE.oldLevel = currentLevel;
    LEVELUP_STATE.newLevel = currentLevel + 1;
    LEVELUP_STATE.currentStep = 1;
    LEVELUP_STATE.hitDie = document.getElementById('hit-dice-type').value || '1d8';
    LEVELUP_STATE.conMod = calculateModifier(parseInt(char.abilities.con) || 10);
    LEVELUP_STATE.hpChoice = null;
    LEVELUP_STATE.rolledHP = 0;
    LEVELUP_STATE.asiChoice = null;
    LEVELUP_STATE.asiAbility1 = '';
    LEVELUP_STATE.asiAbility2 = '';
    
    // Get new features
    const className = char.class || '';
    LEVELUP_STATE.newFeatures = getNewFeatures(className, LEVELUP_STATE.newLevel);

    // Show modal
    document.getElementById('levelup-overlay').classList.remove('hidden');
    renderLevelUpStep();
}

function closeLevelUpModal() {
    document.getElementById('levelup-overlay').classList.add('hidden');
}

// ─────────────────────────────────────────────────────────────────
//  GET NEW FEATURES
// ─────────────────────────────────────────────────────────────────
function getNewFeatures(className, level) {
    if (!CLASS_FEATURES[className]) return [];
    return CLASS_FEATURES[className][level] || [];
}

// ─────────────────────────────────────────────────────────────────
//  STEP NAVIGATION
// ─────────────────────────────────────────────────────────────────
function goToLevelUpStep(step) {
    LEVELUP_STATE.currentStep = step;
    renderLevelUpStep();
}

function nextLevelUpStep() {
    // Validation
    if (LEVELUP_STATE.currentStep === 1 && !LEVELUP_STATE.hpChoice) {
        alert('Please choose how to gain HP.');
        return;
    }
    if (LEVELUP_STATE.currentStep === 2 && ASI_LEVELS.includes(LEVELUP_STATE.newLevel)) {
        if (!LEVELUP_STATE.asiChoice) {
            alert('Please choose ASI or Feat.');
            return;
        }
        if (LEVELUP_STATE.asiChoice === 'asi') {
            if (!LEVELUP_STATE.asiAbility1) {
                alert('Please select at least one ability to improve.');
                return;
            }
        }
    }

    // Determine total steps
    const hasASI = ASI_LEVELS.includes(LEVELUP_STATE.newLevel);
    const hasFeatures = LEVELUP_STATE.newFeatures.length > 0;
    const totalSteps = 1 + (hasASI ? 1 : 0) + (hasFeatures ? 1 : 0) + 1; // HP + ASI? + Features? + Summary

    if (LEVELUP_STATE.currentStep < totalSteps) {
        goToLevelUpStep(LEVELUP_STATE.currentStep + 1);
    }
}

function prevLevelUpStep() {
    if (LEVELUP_STATE.currentStep > 1) {
        goToLevelUpStep(LEVELUP_STATE.currentStep - 1);
    }
}

// ─────────────────────────────────────────────────────────────────
//  RENDER CURRENT STEP
// ─────────────────────────────────────────────────────────────────
function renderLevelUpStep() {
    const hasASI = ASI_LEVELS.includes(LEVELUP_STATE.newLevel);
    const hasFeatures = LEVELUP_STATE.newFeatures.length > 0;

    // Build step order
    const steps = ['hp'];
    if (hasASI) steps.push('asi');
    if (hasFeatures) steps.push('features');
    steps.push('summary');

    const currentStepType = steps[LEVELUP_STATE.currentStep - 1];

    // Hide all steps
    document.querySelectorAll('.levelup-step').forEach(s => s.classList.remove('active'));

    // Show current step
    document.getElementById(`step-${currentStepType}`).classList.add('active');

    // Update buttons
    document.getElementById('levelup-btn-back').style.display = LEVELUP_STATE.currentStep === 1 ? 'none' : '';
    
    const nextBtn = document.getElementById('levelup-btn-next');
    const finishBtn = document.getElementById('levelup-btn-finish');
    
    if (LEVELUP_STATE.currentStep === steps.length) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = '';
    } else {
        nextBtn.style.display = '';
        finishBtn.style.display = 'none';
    }

    // Render step content
    if (currentStepType === 'hp') renderHPStep();
    else if (currentStepType === 'asi') renderASIStep();
    else if (currentStepType === 'features') renderFeaturesStep();
    else if (currentStepType === 'summary') renderSummaryStep();
}

// ─────────────────────────────────────────────────────────────────
//  STEP 1: HP SELECTION
// ─────────────────────────────────────────────────────────────────
function renderHPStep() {
    const sides = parseInt(LEVELUP_STATE.hitDie.replace(/\d*d/, '')) || 8;
    const avgHP = Math.floor(sides / 2) + 1 + LEVELUP_STATE.conMod;

    document.getElementById('levelup-hp-options').innerHTML = `
        <div class="hp-option ${LEVELUP_STATE.hpChoice === 'roll' ? 'selected' : ''}" onclick="selectHPChoice('roll')">
            <div class="hp-option-title">Roll Hit Die</div>
            <div class="hp-option-value" id="rolled-hp-display">${LEVELUP_STATE.rolledHP > 0 ? LEVELUP_STATE.rolledHP : '?'}</div>
            <div class="hp-option-detail">${LEVELUP_STATE.hitDie} + ${LEVELUP_STATE.conMod}</div>
            <button class="btn btn-secondary" style="margin-top:10px;padding:8px 14px;font-size:12px" onclick="event.stopPropagation();rerollHP()">
                ${LEVELUP_STATE.rolledHP > 0 ? 'Reroll' : 'Roll'}
            </button>
        </div>
        <div class="hp-option ${LEVELUP_STATE.hpChoice === 'average' ? 'selected' : ''}" onclick="selectHPChoice('average')">
            <div class="hp-option-title">Take Average</div>
            <div class="hp-option-value">${avgHP}</div>
            <div class="hp-option-detail">Guaranteed</div>
        </div>
    `;
}

function rerollHP() {
    const sides = parseInt(LEVELUP_STATE.hitDie.replace(/\d*d/, '')) || 8;
    const roll = rollDice(sides);
    LEVELUP_STATE.rolledHP = roll + LEVELUP_STATE.conMod;
    document.getElementById('rolled-hp-display').textContent = LEVELUP_STATE.rolledHP;
}

function selectHPChoice(choice) {
    LEVELUP_STATE.hpChoice = choice;
    renderHPStep();
}

// ─────────────────────────────────────────────────────────────────
//  STEP 2: ASI/FEAT SELECTION
// ─────────────────────────────────────────────────────────────────
function renderASIStep() {
    const char = getCharacterData();
    
    document.getElementById('asi-type-options').innerHTML = `
        <div class="asi-option ${LEVELUP_STATE.asiChoice === 'asi' ? 'selected' : ''}" onclick="selectASIType('asi')">
            Ability Score Improvement
        </div>
        <div class="asi-option ${LEVELUP_STATE.asiChoice === 'feat' ? 'selected' : ''}" onclick="selectASIType('feat')">
            Take a Feat
        </div>
    `;

    // ASI selectors
    const asiSelectors = document.getElementById('asi-selectors');
    if (LEVELUP_STATE.asiChoice === 'asi') {
        asiSelectors.classList.add('active');
        asiSelectors.innerHTML = `
            <div class="asi-selector-group">
                <label>Primary Ability (+2 or +1)</label>
                <select id="asi-ability-1" onchange="updateASIChoice()">
                    <option value="">-- Select --</option>
                    ${ABILITY_NAMES.map((ab, i) => {
                        const score = parseInt(char.abilities[ABILITY_KEYS[i]]) || 10;
                        return `<option value="${ABILITY_KEYS[i]}" ${LEVELUP_STATE.asiAbility1 === ABILITY_KEYS[i] ? 'selected' : ''}>
                            ${ab} (currently ${score})
                        </option>`;
                    }).join('')}
                </select>
            </div>
            <div class="asi-selector-group">
                <label>Secondary Ability (+1, optional)</label>
                <select id="asi-ability-2" onchange="updateASIChoice()">
                    <option value="">-- None --</option>
                    ${ABILITY_NAMES.map((ab, i) => {
                        const score = parseInt(char.abilities[ABILITY_KEYS[i]]) || 10;
                        return `<option value="${ABILITY_KEYS[i]}" ${LEVELUP_STATE.asiAbility2 === ABILITY_KEYS[i] ? 'selected' : ''}>
                            ${ab} (currently ${score})
                        </option>`;
                    }).join('')}
                </select>
            </div>
            <div class="step-description" style="margin-top:12px;font-size:12px">
                Choose one ability for +2, OR two different abilities for +1 each. Ability scores cannot exceed 20.
            </div>
        `;
    } else {
        asiSelectors.classList.remove('active');
    }
}

function selectASIType(type) {
    LEVELUP_STATE.asiChoice = type;
    LEVELUP_STATE.asiAbility1 = '';
    LEVELUP_STATE.asiAbility2 = '';
    renderASIStep();
}

function updateASIChoice() {
    const ab1 = document.getElementById('asi-ability-1')?.value || '';
    const ab2 = document.getElementById('asi-ability-2')?.value || '';
    
    // Can't choose same ability twice
    if (ab1 && ab2 && ab1 === ab2) {
        alert('You cannot choose the same ability twice. For +2 to one ability, leave Secondary empty.');
        document.getElementById('asi-ability-2').value = '';
        return;
    }
    
    LEVELUP_STATE.asiAbility1 = ab1;
    LEVELUP_STATE.asiAbility2 = ab2;
}

// ─────────────────────────────────────────────────────────────────
//  STEP 3: NEW FEATURES
// ─────────────────────────────────────────────────────────────────
function renderFeaturesStep() {
    const features = LEVELUP_STATE.newFeatures;
    
    if (features.length === 0) {
        document.getElementById('features-content').innerHTML = '<div class="no-features">No new features at this level.</div>';
        return;
    }

    document.getElementById('features-content').innerHTML = features.map(f => `
        <div class="feature-item">
            <div class="feature-name">${f.name}</div>
            <div class="feature-desc">${f.desc}</div>
        </div>
    `).join('');
}

// ─────────────────────────────────────────────────────────────────
//  STEP 4: SUMMARY & FINISH
// ─────────────────────────────────────────────────────────────────
function renderSummaryStep() {
    const char = getCharacterData();
    const newLevel = LEVELUP_STATE.newLevel;
    const oldPB = getProficiencyBonus(LEVELUP_STATE.oldLevel);
    const newPB = getProficiencyBonus(newLevel);

    // Calculate HP gain
    let hpGain = 0;
    if (LEVELUP_STATE.hpChoice === 'roll') {
        hpGain = LEVELUP_STATE.rolledHP;
    } else {
        const sides = parseInt(LEVELUP_STATE.hitDie.replace(/\d*d/, '')) || 8;
        hpGain = Math.floor(sides / 2) + 1 + LEVELUP_STATE.conMod;
    }
    const oldMaxHP = parseInt(char.combat.maxHP) || 10;
    const newMaxHP = oldMaxHP + hpGain;

    // ASI changes
    let asiSummary = 'None';
    if (LEVELUP_STATE.asiChoice === 'asi') {
        if (LEVELUP_STATE.asiAbility2) {
            asiSummary = `+1 ${LEVELUP_STATE.asiAbility1.toUpperCase()}, +1 ${LEVELUP_STATE.asiAbility2.toUpperCase()}`;
        } else {
            asiSummary = `+2 ${LEVELUP_STATE.asiAbility1.toUpperCase()}`;
        }
    } else if (LEVELUP_STATE.asiChoice === 'feat') {
        asiSummary = 'Feat (track manually in Notes)';
    }

    document.getElementById('levelup-summary-content').innerHTML = `
        <div class="summary-item">
            <span class="summary-label">New Level</span>
            <span class="summary-value highlight">${LEVELUP_STATE.oldLevel} → ${newLevel}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">HP Gained</span>
            <span class="summary-value highlight">+${hpGain} (${oldMaxHP} → ${newMaxHP})</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Max Hit Dice</span>
            <span class="summary-value">${newLevel}</span>
        </div>
        ${newPB > oldPB ? `<div class="summary-item">
            <span class="summary-label">Proficiency Bonus</span>
            <span class="summary-value highlight">+${oldPB} → +${newPB}</span>
        </div>` : ''}
        ${ASI_LEVELS.includes(newLevel) ? `<div class="summary-item">
            <span class="summary-label">ASI/Feat</span>
            <span class="summary-value">${asiSummary}</span>
        </div>` : ''}
        ${LEVELUP_STATE.newFeatures.length > 0 ? `<div class="summary-item">
            <span class="summary-label">New Features</span>
            <span class="summary-value">${LEVELUP_STATE.newFeatures.map(f => f.name).join(', ')}</span>
        </div>` : ''}
    `;
}

// ─────────────────────────────────────────────────────────────────
//  APPLY LEVEL UP
// ─────────────────────────────────────────────────────────────────
function finishLevelUp() {
    const char = getCharacterData();
    const newLevel = LEVELUP_STATE.newLevel;

    // 1. Update level
    char.level = String(newLevel);

    // 2. Update HP
    let hpGain = 0;
    if (LEVELUP_STATE.hpChoice === 'roll') {
        hpGain = LEVELUP_STATE.rolledHP;
    } else {
        const sides = parseInt(LEVELUP_STATE.hitDie.replace(/\d*d/, '')) || 8;
        hpGain = Math.floor(sides / 2) + 1 + LEVELUP_STATE.conMod;
    }
    const newMaxHP = parseInt(char.combat.maxHP) + hpGain;
    char.combat.maxHP = String(newMaxHP);
    char.combat.currentHP = String(newMaxHP); // Restore to full on level up

    // 3. Update max hit dice
    document.getElementById('max-hit-dice').textContent = newLevel;

    // 4. Apply ASI
    if (LEVELUP_STATE.asiChoice === 'asi') {
        if (LEVELUP_STATE.asiAbility1) {
            const current1 = parseInt(char.abilities[LEVELUP_STATE.asiAbility1]) || 10;
            const increase1 = LEVELUP_STATE.asiAbility2 ? 1 : 2;
            char.abilities[LEVELUP_STATE.asiAbility1] = String(Math.min(20, current1 + increase1));
        }
        if (LEVELUP_STATE.asiAbility2) {
            const current2 = parseInt(char.abilities[LEVELUP_STATE.asiAbility2]) || 10;
            char.abilities[LEVELUP_STATE.asiAbility2] = String(Math.min(20, current2 + 1));
        }
    }

    // 5. Add new features to notes
    if (LEVELUP_STATE.newFeatures.length > 0) {
        const featuresText = `\n\n=== LEVEL ${newLevel} FEATURES ===\n` + 
            LEVELUP_STATE.newFeatures.map(f => `• ${f.name}: ${f.desc}`).join('\n');
        char.notes = (char.notes || '') + featuresText;
    }

    // Save
    localStorage.setItem('dndCharacter', JSON.stringify(char));

    // Reload sheet
    loadCharacter();

    // Close modal
    closeLevelUpModal();

    // Show success message
    showLevelUpSuccess(newLevel);
}

function showLevelUpSuccess(newLevel) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:3000;padding:20px';
    overlay.innerHTML = `
        <div style="background:linear-gradient(to bottom,#faf7f2,#f5f0e8);border:3px solid #4a7c59;border-radius:12px;padding:30px;max-width:400px;width:100%;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.4)">
            <div style="font-family:'Cinzel',serif;font-size:28px;color:#2d5016;font-weight:700;margin-bottom:10px">Level Up!</div>
            <div style="font-size:48px;font-weight:700;color:#4a7c59;margin:20px 0">Level ${newLevel}</div>
            <div style="font-size:14px;color:#666;margin-bottom:20px">Your character has grown stronger!</div>
            <button onclick="this.parentElement.parentElement.remove()" style="padding:12px 24px;background:linear-gradient(135deg,#4a7c59,#2d5016);color:#faf7f2;border:2px solid #2d5016;border-radius:8px;font-family:'Cinzel',serif;font-size:14px;font-weight:600;cursor:pointer;letter-spacing:1px">Continue</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// ─────────────────────────────────────────────────────────────────
//  GET CHARACTER DATA
// ─────────────────────────────────────────────────────────────────
function getCharacterData() {
    const saved = localStorage.getItem('dndCharacter');
    return saved ? JSON.parse(saved) : null;
}
