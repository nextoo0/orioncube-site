// ============================================
// POKÉDEX ORIONCUBE — Utilise PokéAPI
// ============================================

console.log('🌌 Pokédex OrionCube — Chargé');

const POKEAPI_URL = 'https://pokeapi.co/api/v2';
const POKEMON_PER_PAGE = 24;
const MAX_POKEMON = 1025;

let allPokemon = [];
let filteredPokemon = [];
let currentPage = 1;
let totalPages = 1;
let isLoading = false;

const LEGENDARY_IDS = [
  144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 382, 383, 384,
  480, 481, 482, 483, 484, 485, 486, 487, 488, 491, 493, 494, 638, 639, 640,
  641, 642, 643, 644, 646, 647, 648, 649, 716, 717, 718, 719, 720, 721, 772,
  773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 801, 802, 803, 804, 805,
  806, 807, 808, 809, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898,
  905, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024
];

const MYTHICAL_IDS = [
  151, 251, 385, 386, 489, 490, 492, 493, 494, 647, 648, 649, 719, 720, 721,
  801, 802, 807, 808, 809, 893, 1025
];

const STARTER_IDS = [
  1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501,
  650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912
];

const TYPE_FR = {
  normal: 'Normal', fire: 'Feu', water: 'Eau', grass: 'Plante',
  electric: 'Électrik', ice: 'Glace', fighting: 'Combat', poison: 'Poison',
  ground: 'Sol', flying: 'Vol', psychic: 'Psy', bug: 'Insecte',
  rock: 'Roche', ghost: 'Spectre', dragon: 'Dragon', dark: 'Ténèbres',
  steel: 'Acier', fairy: 'Fée'
};

const GENERATIONS = {
  1: [1, 151], 2: [152, 251], 3: [252, 386], 4: [387, 493], 5: [494, 649],
  6: [650, 721], 7: [722, 809], 8: [810, 905], 9: [906, 1025]
};

function translateType(type) {
  return TYPE_FR[type] || type;
}

function getGeneration(id) {
  for (const [gen, [min, max]] of Object.entries(GENERATIONS)) {
    if (id >= min && id <= max) return parseInt(gen);
  }
  return 0;
}

function getCategory(id) {
  if (LEGENDARY_IDS.includes(id)) return 'legendary';
  if (MYTHICAL_IDS.includes(id)) return 'mythical';
  if (STARTER_IDS.includes(id)) return 'starter';
  return null;
}

function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

async function getFrenchName(id) {
  try {
    const response = await fetch(`${POKEAPI_URL}/pokemon-species/${id}`);
    const data = await response.json();
    const frName = data.names.find(n => n.language.name === 'fr');
    return frName ? frName.name : null;
  } catch (e) {
    return null;
  }
}

async function loadAllPokemon() {
  if (isLoading) return;
  isLoading = true;

  const grid = document.getElementById('pokedex-grid');
  grid.innerHTML = `
    <div class="loader">
      <div class="loader-spinner"></div>
      Chargement des Pokémon... (1-2 min la première fois)
    </div>
  `;

  try {
    console.log('📥 Chargement...');
    const response = await fetch(`${POKEAPI_URL}/pokemon?limit=${MAX_POKEMON}`);
    const data = await response.json();
    console.log(`✅ ${data.results.length} Pokémon récupérés`);

    const pokemonDetails = await Promise.all(
      data.results.map(async (p, index) => {
        const id = index + 1;
        try {
          const detailResponse = await fetch(`${POKEAPI_URL}/pokemon/${id}`);
          const detail = await detailResponse.json();

          const frenchName = await getFrenchName(id);

          return {
            id,
            name: frenchName || detail.name,
            nameEn: detail.name,
            types: detail.types.map(t => t.type.name),
            stats: detail.stats.reduce((acc, s) => {
              acc[s.stat.name] = s.base_stat;
              return acc;
            }, {}),
            height: detail.height,
            weight: detail.weight,
            category: getCategory(id),
            generation: getGeneration(id)
          };
        } catch (e) {
          return null;
        }
      })
    );

    allPokemon = pokemonDetails.filter(p => p !== null);
    console.log(`✅ ${allPokemon.length} Pokémon chargés`);

    filteredPokemon = [...allPokemon];
    applyFilters();
  } catch (err) {
    console.error('❌ Erreur:', err);
    grid.innerHTML = `<div class="no-results">❌ Erreur de chargement. Réessaie plus tard.</div>`;
  }

  isLoading = false;
}

function displayPokemon() {
  const grid = document.getElementById('pokedex-grid');
  grid.innerHTML = '';

  if (filteredPokemon.length === 0) {
    grid.innerHTML = `<div class="no-results">🔍 Aucun Pokémon trouvé.</div>`;
    document.getElementById('pokemon-count').textContent = '0';
    return;
  }

  totalPages = Math.ceil(filteredPokemon.length / POKEMON_PER_PAGE);
  const start = (currentPage - 1) * POKEMON_PER_PAGE;
  const end = start + POKEMON_PER_PAGE;
  const pageItems = filteredPokemon.slice(start, end);

  pageItems.forEach(pokemon => {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.onclick = () => openModal(pokemon);

    const typesHTML = pokemon.types.map(t =>
      `<span class="type-badge type-${t}">${translateType(t)}</span>`
    ).join('');

    card.innerHTML = `
      <div class="pokemon-number">#${String(pokemon.id).padStart(3, '0')}</div>
      <img class="pokemon-image" src="${getPokemonImage(pokemon.id)}" alt="${pokemon.name}" loading="lazy" />
      <div class="pokemon-name">${pokemon.name}</div>
      <div class="pokemon-types">${typesHTML}</div>
    `;

    grid.appendChild(card);
  });

  document.getElementById('pokemon-count').textContent = filteredPokemon.length;
  document.getElementById('page-info').textContent = `Page ${currentPage} / ${totalPages}`;
  document.getElementById('prev-page').disabled = currentPage <= 1;
  document.getElementById('next-page').disabled = currentPage >= totalPages;
}

function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const type = document.getElementById('filter-type').value;
  const gen = document.getElementById('filter-gen').value;
  const category = document.getElementById('filter-category').value;

  filteredPokemon = allPokemon.filter(p => {
    if (search) {
      const matchName = p.name.toLowerCase().includes(search);
      const matchNameEn = p.nameEn.toLowerCase().includes(search);
      const matchId = String(p.id).includes(search);
      if (!matchName && !matchNameEn && !matchId) return false;
    }
    if (type !== 'all' && !p.types.includes(type)) return false;
    if (gen !== 'all' && p.generation !== parseInt(gen)) return false;
    if (category !== 'all') {
      if (category === 'legendary' && p.category !== 'legendary') return false;
      if (category === 'mythical' && p.category !== 'mythical') return false;
      if (category === 'starter' && p.category !== 'starter') return false;
    }
    return true;
  });

  currentPage = 1;
  displayPokemon();
}

function openModal(pokemon) {
  const modal = document.getElementById('pokemon-modal');
  const body = document.getElementById('modal-body');

  const typesHTML = pokemon.types.map(t =>
    `<span class="type-badge type-${t}">${translateType(t)}</span>`
  ).join('');

  body.innerHTML = `
    <img class="modal-pokemon-image" src="${getPokemonImage(pokemon.id)}" alt="${pokemon.name}" />
    <div class="modal-pokemon-name">${pokemon.name}</div>
    <div class="modal-pokemon-number">#${String(pokemon.id).padStart(3, '0')}</div>
    <div class="modal-types">${typesHTML}</div>
    <div class="modal-stats">
      <div class="modal-stat">
        <span class="modal-stat-label">HP</span>
        <span class="modal-stat-value">${pokemon.stats.hp || '?'}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Attaque</span>
        <span class="modal-stat-value">${pokemon.stats.attack || '?'}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Défense</span>
        <span class="modal-stat-value">${pokemon.stats.defense || '?'}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Atk Spé</span>
        <span class="modal-stat-value">${pokemon.stats['special-attack'] || '?'}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Déf Spé</span>
        <span class="modal-stat-value">${pokemon.stats['special-defense'] || '?'}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Vitesse</span>
        <span class="modal-stat-value">${pokemon.stats.speed || '?'}</span>
      </div>
    </div>
    <div class="modal-stats">
      <div class="modal-stat">
        <span class="modal-stat-label">Taille</span>
        <span class="modal-stat-value">${pokemon.height / 10} m</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Poids</span>
        <span class="modal-stat-value">${pokemon.weight / 10} kg</span>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('pokemon-modal').classList.remove('open');
}

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPokemon();
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPokemon();
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }
});

document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('filter-type').addEventListener('change', applyFilters);
document.getElementById('filter-gen').addEventListener('change', applyFilters);
document.getElementById('filter-category').addEventListener('change', applyFilters);

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('pokemon-modal').addEventListener('click', (e) => {
  if (e.target.id === 'pokemon-modal') closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

loadAllPokemon();

// ============================================
// TRANSITION DE PAGE (liens navbar)
// ============================================
document.querySelectorAll('a[href$=".html"], a[href$="/"], a[href="../"], a[href$="/pokedex.html"]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    const destination = link.href;

    window.scrollTo({ top: 0, behavior: 'instant' });

    document.body.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.98)';

    setTimeout(() => {
      window.location.href = destination;
    }, 400);
  });
});

window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});
