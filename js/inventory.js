// ═══════════════════════════════════════════════════════════════
//  INVENTORY MANAGER
//  Handles equipment browser, inventory, equip/unequip, stats
// ═══════════════════════════════════════════════════════════════

// Inventory state (loaded/saved with character)
let inventory = [];       // [{item: {...}, qty: 1, equipped: false}, ...]
let equippedArmor = null; // reference into inventory array
let equippedShield = null;
let equippedWeapons = []; // up to 3 equipped weapons
let activeFilter = 'All';

// ─────────────────────────────────────────────────────────────
//  EQUIPMENT BROWSER
// ─────────────────────────────────────────────────────────────
function initEquipmentBrowser() {
    renderEquipFilters();
    const searchInput = document.getElementById('equip-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const q = this.value.trim();
            if (q.length >= 1) {
                showEquipResults(q);
            } else {
                hideEquipResults();
            }
        });
        searchInput.addEventListener('focus', function() {
            if (this.value.trim().length >= 1) showEquipResults(this.value.trim());
        });
    }
}

function renderEquipFilters() {
    const row = document.getElementById('equip-filter-row');
    if (!row) return;
    const filters = ['All', 'Weapons', 'Armor', 'Gear', 'Tools', 'Ammunition'];
    row.innerHTML = filters.map(f =>
        '<div class="equip-filter' + (f === activeFilter ? ' active' : '') + '" onclick="setEquipFilter(\'' + f + '\')">' + f + '</div>'
    ).join('');
}

function setEquipFilter(f) {
    activeFilter = f;
    renderEquipFilters();
    const q = document.getElementById('equip-search').value.trim();
    if (q.length >= 1) showEquipResults(q);
}

function showEquipResults(query) {
    const container = document.getElementById('equip-results');
    if (!container) return;

    const q = query.toLowerCase();
    let results = [];

    // Search in appropriate categories based on filter
    const cats = {
        'All': ['weapons', 'armor', 'shields', 'gear', 'ammunition', 'focuses', 'tools'],
        'Weapons': ['weapons'],
        'Armor': ['armor', 'shields'],
        'Gear': ['gear', 'focuses'],
        'Tools': ['tools'],
        'Ammunition': ['ammunition']
    };
    const searchCats = cats[activeFilter] || cats['All'];

    for (const catKey of searchCats) {
        const items = EQUIPMENT[catKey] || [];
        for (const item of items) {
            if (item.name.toLowerCase().includes(q) ||
                (item.category && item.category.toLowerCase().includes(q)) ||
                (item.damageType && item.damageType.toLowerCase().includes(q))) {
                results.push(item);
            }
        }
    }

    // Limit to 30 results for performance
    results = results.slice(0, 30);

    if (results.length === 0) {
        container.innerHTML = '<div style="padding:16px;text-align:center;color:#999;font-style:italic">No items found</div>';
    } else {
        container.innerHTML = results.map((item, i) => {
            let detail = '';
            if (item.type === 'weapon') {
                detail = item.damage + ' ' + item.damageType + ' | ' + item.category + ' ' + item.rangeType;
                if (item.properties.length) detail += ' | ' + item.properties.join(', ');
            } else if (item.type === 'armor') {
                detail = 'AC ' + item.ac + ' | ' + item.category;
                if (item.stealthDisadv) detail += ' | Stealth Disadvantage';
            } else if (item.type === 'shield') {
                detail = 'AC +' + item.acBonus;
            } else if (item.category) {
                detail = item.category;
            }
            if (item.weight) detail += ' | ' + item.weight + ' lb.';

            const safeName = item.name.replace(/'/g, "\\'");
            return '<div class="equip-result-item" onclick="addToInventory(\'' + safeName + '\')">' +
                '<div><div class="equip-result-name">' + item.name + '</div>' +
                '<div class="equip-result-detail">' + detail + '</div></div>' +
                '<div style="display:flex;align-items:center;gap:8px">' +
                '<span class="equip-result-cost">' + (item.cost || '') + '</span>' +
                '<button class="equip-add-btn" onclick="event.stopPropagation();addToInventory(\'' + safeName + '\')">+ ADD</button>' +
                '</div></div>';
        }).join('');
    }
    container.classList.add('visible');
}

function hideEquipResults() {
    const container = document.getElementById('equip-results');
    if (container) container.classList.remove('visible');
}

// ─────────────────────────────────────────────────────────────
//  INVENTORY MANAGEMENT
// ─────────────────────────────────────────────────────────────
function findItemByName(name) {
    for (const category of Object.values(EQUIPMENT)) {
        for (const item of category) {
            if (item.name === name) return item;
        }
    }
    return null;
}

function addToInventory(itemName) {
    const item = findItemByName(itemName);
    if (!item) return;

    // Check if already in inventory
    const existing = inventory.find(inv => inv.item.name === item.name);
    if (existing) {
        existing.qty++;
    } else {
        inventory.push({ item: { ...item }, qty: 1, equipped: false });
    }
    renderInventory();
    saveCharacter(true);
}

function addCustomItem() {
    const name = prompt('Item name:');
    if (!name) return;
    const weight = parseFloat(prompt('Weight (lb):', '0')) || 0;
    inventory.push({
        item: { name: name, type: 'gear', weight: weight, cost: '' },
        qty: 1,
        equipped: false
    });
    renderInventory();
    saveCharacter(true);
}

function removeFromInventory(index) {
    const inv = inventory[index];
    if (!inv) return;
    if (inv.equipped) unequipItem(index);
    inventory.splice(index, 1);
    renderInventory();
    recalcFromEquipment();
    saveCharacter(true);
}

function changeQty(index, delta) {
    const inv = inventory[index];
    if (!inv) return;
    inv.qty = Math.max(1, inv.qty + delta);
    renderInventory();
    saveCharacter(true);
}

// ─────────────────────────────────────────────────────────────
//  EQUIP / UNEQUIP
// ─────────────────────────────────────────────────────────────
function equipItem(index) {
    const inv = inventory[index];
    if (!inv) return;
    const item = inv.item;

    if (item.type === 'armor') {
        // Unequip current armor first
        inventory.forEach((other, i) => {
            if (other.equipped && other.item.type === 'armor') {
                other.equipped = false;
            }
        });
        inv.equipped = true;
    } else if (item.type === 'shield') {
        inventory.forEach((other, i) => {
            if (other.equipped && other.item.type === 'shield') {
                other.equipped = false;
            }
        });
        inv.equipped = true;
    } else if (item.type === 'weapon') {
        // Allow up to 3 equipped weapons
        const equippedCount = inventory.filter(x => x.equipped && x.item.type === 'weapon').length;
        if (equippedCount >= 3) {
            alert('You can only equip up to 3 weapons. Unequip one first.');
            return;
        }
        inv.equipped = true;
    } else {
        inv.equipped = true;
    }

    renderInventory();
    recalcFromEquipment();
    saveCharacter(true);
}

function unequipItem(index) {
    const inv = inventory[index];
    if (!inv) return;
    inv.equipped = false;
    renderInventory();
    recalcFromEquipment();
    saveCharacter(true);
}

// ─────────────────────────────────────────────────────────────
//  STAT RECALCULATION FROM EQUIPMENT
// ─────────────────────────────────────────────────────────────
function recalcFromEquipment() {
    const dexMod = calculateModifier(parseInt(document.getElementById('dex').value) || 10);

    // Find equipped armor and shield
    const eqArmor = inventory.find(inv => inv.equipped && inv.item.type === 'armor');
    const eqShield = inventory.find(inv => inv.equipped && inv.item.type === 'shield');

    // Calculate and set AC (only if no manual override)
    if (!document.getElementById('ac-override').value) {
        const armorItem = eqArmor ? eqArmor.item : null;
        const shieldItem = eqShield ? eqShield.item : null;
        const ac = calculateAC(armorItem, shieldItem, dexMod);
        document.getElementById('ac').textContent = ac;
    }

    // Render attacks table
    renderAttacks();
    renderEquippedSlots();
}

function renderAttacks() {
    const table = document.getElementById('attacks-body');
    if (!table) return;

    const strMod = calculateModifier(parseInt(document.getElementById('str').value) || 10);
    const dexMod = calculateModifier(parseInt(document.getElementById('dex').value) || 10);
    const profBonus = getProficiencyBonus(parseInt(document.getElementById('level').value) || 1);

    const equippedWeapons = inventory.filter(inv => inv.equipped && inv.item.type === 'weapon');

    if (equippedWeapons.length === 0) {
        table.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#999;font-style:italic;padding:16px">No weapons equipped. Add items from the Equipment Browser below.</td></tr>';
        return;
    }

    table.innerHTML = equippedWeapons.map(inv => {
        const w = inv.item;
        // TODO: proper proficiency check against class weapon profs
        const atk = calculateWeaponAttack(w, strMod, dexMod, profBonus, true);
        const atkStr = (atk.attackBonus >= 0 ? '+' : '') + atk.attackBonus;
        const dmgStr = w.damage + (atk.damageBonus >= 0 ? ' + ' + atk.damageBonus : ' - ' + Math.abs(atk.damageBonus));

        return '<tr>' +
            '<td class="atk-name">' + w.name + '</td>' +
            '<td class="atk-bonus">' + atkStr + '</td>' +
            '<td class="atk-damage">' + dmgStr + ' <span class="atk-type">' + w.damageType + '</span></td>' +
            '<td class="atk-type">' + (w.properties.length ? w.properties.join(', ') : '-') + '</td>' +
            '</tr>';
    }).join('');
}

function renderEquippedSlots() {
    const eqArmor = inventory.find(inv => inv.equipped && inv.item.type === 'armor');
    const eqShield = inventory.find(inv => inv.equipped && inv.item.type === 'shield');
    const eqWeapons = inventory.filter(inv => inv.equipped && inv.item.type === 'weapon');

    const armorSlot = document.getElementById('slot-armor');
    const shieldSlot = document.getElementById('slot-shield');
    const weaponSlot = document.getElementById('slot-weapons');

    if (armorSlot) {
        if (eqArmor) {
            armorSlot.className = 'equipped-slot';
            armorSlot.innerHTML = '<div class="slot-label">ARMOR</div><div class="slot-name">' + eqArmor.item.name + '</div><div class="slot-detail">AC ' + eqArmor.item.ac + ' (' + eqArmor.item.category + ')</div>';
        } else {
            armorSlot.className = 'equipped-slot empty';
            armorSlot.innerHTML = '<div class="slot-label">ARMOR</div><div class="slot-name">None</div>';
        }
    }
    if (shieldSlot) {
        if (eqShield) {
            shieldSlot.className = 'equipped-slot';
            shieldSlot.innerHTML = '<div class="slot-label">SHIELD</div><div class="slot-name">' + eqShield.item.name + '</div><div class="slot-detail">AC +' + eqShield.item.acBonus + '</div>';
        } else {
            shieldSlot.className = 'equipped-slot empty';
            shieldSlot.innerHTML = '<div class="slot-label">SHIELD</div><div class="slot-name">None</div>';
        }
    }
    if (weaponSlot) {
        if (eqWeapons.length) {
            weaponSlot.className = 'equipped-slot';
            weaponSlot.innerHTML = '<div class="slot-label">WEAPONS</div>' +
                eqWeapons.map(inv => '<div class="slot-name">' + inv.item.name + '</div><div class="slot-detail">' + inv.item.damage + ' ' + inv.item.damageType + '</div>').join('');
        } else {
            weaponSlot.className = 'equipped-slot empty';
            weaponSlot.innerHTML = '<div class="slot-label">WEAPONS</div><div class="slot-name">None</div>';
        }
    }

    // Weight tracking
    renderWeightTracker();
}

function renderWeightTracker() {
    const tracker = document.getElementById('weight-tracker');
    if (!tracker) return;
    let totalWeight = 0;
    inventory.forEach(inv => { totalWeight += (inv.item.weight || 0) * inv.qty; });
    const strScore = parseInt(document.getElementById('str').value) || 10;
    const carryCapacity = strScore * 15;
    tracker.innerHTML = 'Carrying: <span class="weight-num">' + totalWeight.toFixed(1) + '</span> / ' + carryCapacity + ' lb.';
    tracker.classList.toggle('encumbered', totalWeight > carryCapacity);
}

// ─────────────────────────────────────────────────────────────
//  RENDER INVENTORY LIST
// ─────────────────────────────────────────────────────────────
function renderInventory() {
    const container = document.getElementById('inventory-list');
    if (!container) return;

    if (inventory.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:20px;color:#999;font-style:italic">No items in inventory. Use the search above to add equipment.</div>';
        return;
    }

    // Sort: equipped first, then alphabetical
    const sorted = inventory.map((inv, i) => ({...inv, origIndex: i}))
        .sort((a, b) => {
            if (a.equipped && !b.equipped) return -1;
            if (!a.equipped && b.equipped) return 1;
            return a.item.name.localeCompare(b.item.name);
        });

    container.innerHTML = sorted.map(inv => {
        const i = inv.origIndex;
        const item = inv.item;
        const isEquippable = item.type === 'weapon' || item.type === 'armor' || item.type === 'shield';

        let detail = '';
        if (item.type === 'weapon') detail = item.damage + ' ' + item.damageType;
        else if (item.type === 'armor') detail = 'AC ' + item.ac + ' (' + item.category + ')';
        else if (item.type === 'shield') detail = 'AC +' + item.acBonus;
        else if (item.weight) detail = item.weight + ' lb.';

        let equipBtn = '';
        if (isEquippable) {
            if (inv.equipped) {
                equipBtn = '<button class="inv-equip-btn unequip" onclick="unequipItem(' + i + ')">UNEQUIP</button>';
            } else {
                equipBtn = '<button class="inv-equip-btn equip" onclick="equipItem(' + i + ')">EQUIP</button>';
            }
        }

        return '<div class="inventory-item' + (inv.equipped ? ' equipped' : '') + '">' +
            '<div style="flex:1"><div class="inv-name">' + item.name + (inv.equipped ? ' <span style="color:var(--green-dark);font-size:11px">EQUIPPED</span>' : '') + '</div>' +
            (detail ? '<div class="inv-detail">' + detail + '</div>' : '') + '</div>' +
            '<input type="number" class="inv-qty" value="' + inv.qty + '" min="1" onchange="inventory[' + i + '].qty=Math.max(1,parseInt(this.value)||1);renderWeightTracker();saveCharacter(true)">' +
            equipBtn +
            '<button class="inv-remove-btn" onclick="removeFromInventory(' + i + ')" title="Remove">&times;</button>' +
            '</div>';
    }).join('');
}

// ─────────────────────────────────────────────────────────────
//  SAVE / LOAD INVENTORY
// ─────────────────────────────────────────────────────────────
function getInventoryData() {
    return inventory.map(inv => ({
        name: inv.item.name,
        type: inv.item.type,
        qty: inv.qty,
        equipped: inv.equipped,
        // Store full item data for custom items
        custom: !findItemByName(inv.item.name) ? inv.item : undefined
    }));
}

function loadInventoryData(data) {
    inventory = [];
    if (!data || !Array.isArray(data)) return;
    for (const entry of data) {
        let item = findItemByName(entry.name);
        if (!item && entry.custom) {
            item = entry.custom;
        }
        if (!item) {
            // Fallback: create a basic item
            item = { name: entry.name, type: entry.type || 'gear', weight: 0, cost: '' };
        }
        inventory.push({
            item: { ...item },
            qty: entry.qty || 1,
            equipped: entry.equipped || false
        });
    }
}
