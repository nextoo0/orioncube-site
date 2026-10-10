// ============================================
// ORIONCUBE — Système multilingue FR / EN
// ============================================

const translations = {
  fr: {
    // NAVBAR
    "nav.home": "Accueil",
    "nav.pokedex": "Pokédex",
    "nav.wiki": "Wiki",
    "nav.boutique": "Boutique",
    "nav.vote": "Vote",
    "nav.discord": "Discord",
    "nav.login": "Connexion",

    // HERO
    "hero.tagline": "DEVIENS UN DRESSEUR COBBLEMON",
    "hero.subtitle": "Rejoins notre serveur et vis une aventure Pokémon unique. 100+ mods optimisés, shaders, communauté active.",
    "hero.play": "JOUER MAINTENANT",
    "hero.ip": "Prochainement",
    "hero.maintenance": "EN MAINTENANCE",
    "hero.ip.copied": "BIENTÔT !",

    // STATS
    "stats.players": "En développement",
    "stats.new": "Nouveau",
    "stats.creating": "Serveur en création",
    "stats.mods": "Mods installés et optimisés",

    // FEATURES
    "features.title1": "Pourquoi",
    "features.title2": "OrionCube",
    "features.title3": "?",
    "features.subtitle": "Une expérience Cobblemon pensée pour toi.",
    "features.cobblemon.title": "Cobblemon complet",
    "features.cobblemon.text": "Capture, entraîne et affronte des centaines de Pokémon dans un monde ouvert magnifique.",
    "features.cobblemon.link": "Découvrir le Pokédex →",
    "features.optimized.title": "Optimisé & fluide",
    "features.optimized.text": "Shaders Iris, Sodium, Lithium. Des FPS élevés même sur des configurations modestes.",
    "features.design.title": "Design unique",
    "features.design.text": "Launcher custom, interface stylée, expérience visuelle premium à chaque lancement.",
    "features.community.title": "Communauté active",
    "features.community.text": "Rejoins des centaines de dresseurs sur Discord, participe aux événements et aux raids.",
    "features.community.link": "Rejoindre le Discord →",
    "features.changelog.title": "Changelog",
    "features.changelog.text": "Suis toutes les nouveautés, correctifs et optimisations du serveur et du launcher.",
    "features.changelog.link": "Voir les updates →",
    "features.content.title": "Contenu exclusif",
    "features.content.text": "Événements, quêtes, arènes, Méga-Évolutions et bien plus encore à découvrir.",

    // TEAM
    "team.title1": "Notre",
    "team.title2": "Équipe",
    "team.subtitle": "Les personnes qui font vivre OrionCube au quotidien.",
    "team.role.nexto": "Fondateur / Dev",
    "team.role.shachouu": "Co-Fonda / Graphiste",

    // CTA
    "cta.title": "Prêt à commencer l'aventure ?",
    "cta.text": "Rejoins OrionCube et deviens le Maître Pokémon ultime.",
    "cta.download": "TÉLÉCHARGER LE LAUNCHER",
    "cta.discord": "REJOINDRE LE DISCORD",

    // FOOTER
    "footer.text": "© 2026 OrionCube — Serveur Minecraft Cobblemon Français. Non affilié à Mojang AB ni à The Pokémon Company.",

    // BOUTIQUE
    "boutique.title1": "Boutique",
    "boutique.subtitle": "Très prochainement...",
    "boutique.text": "La boutique officielle ouvrira très bientôt ! Tu pourras y retrouver des grades VIP, des objets exclusifs et des Cobblemon rares. Reste connecté sur notre Discord pour être prévenu dès le lancement.",
    "boutique.discord": "REJOINDRE LE DISCORD",
    "boutique.footer": "© 2026 OrionCube — Boutique en développement",

    // VOTE
    "vote.title1": "Vote",
    "vote.subtitle": "Très prochainement...",
    "vote.text": "Le système de vote officiel ouvrira très bientôt ! Tu pourras soutenir OrionCube sur les sites de serveurs Minecraft et gagner des récompenses exclusives in-game : Poké Balls rares, objets, argent et bien plus. Reste connecté sur notre Discord pour être prévenu dès le lancement.",
    "vote.discord": "REJOINDRE LE DISCORD",
    "vote.footer": "© 2026 OrionCube — Vote en développement",

    // CONNEXION
    "connexion.title1": "Connexion",
    "connexion.subtitle": "Très prochainement...",
    "connexion.text": "Le site de connexion ouvrira très bientôt ! Tu pourras y lier ton compte Microsoft (Minecraft) pour récupérer ton profil, tes statistiques et tes récompenses. En attendant, tu peux déjà connecter ton compte Microsoft directement sur le launcher OrionCube.",
    "connexion.discord": "REJOINDRE LE DISCORD",
    "connexion.footer": "© 2026 OrionCube — Connexion en développement",

    // CHANGELOG
    "changelog.title1": "Changelog",
    "changelog.subtitle": "Toutes les mises à jour, correctifs et nouveautés du serveur et du launcher.",
    "changelog.badge.new": "✨ Nouveau",
    "changelog.badge.fix": "🐛 Fix",
    "changelog.badge.design": "🎨 Design",
    "changelog.badge.optim": "⚡ Optimisation",
    "changelog.badge.technique": "🔧 Technique",

    // POKEDEX
    "pokedex.title1": "Pokédex",
    "pokedex.subtitle": "Découvre tous les Pokémon disponibles sur le serveur. Filtre par type, génération ou cherche directement ton Pokémon préféré.",
    "pokedex.search": "Rechercher un Pokémon (nom ou numéro)...",
    "pokedex.filter.type": "Type :",
    "pokedex.filter.all.types": "Tous les types",
    "pokedex.filter.gen": "Génération :",
    "pokedex.filter.all.gens": "Toutes les générations",
    "pokedex.filter.category": "Catégorie :",
    "pokedex.filter.all": "Tous",
    "pokedex.filter.legendary": "🌟 Légendaires",
    "pokedex.filter.mythical": "✨ Mythiques",
    "pokedex.filter.starter": "🎮 Starters",
    "pokedex.displayed1": "Pokémon affichés",
    "pokedex.prev": "← Précédent",
    "pokedex.next": "Suivant →",
    "pokedex.page": "Page",
    "pokedex.loading": "Chargement des Pokémon... (1-2 min la première fois)",

    // WIKI
    "wiki.title1": "Wiki",
    "wiki.subtitle": "Tout ce qu'il faut savoir sur le serveur : guides, règles, légendaires, IVs/EVs, natures et plus.",
    "wiki.sidebar.getting": "🎮 BIEN DÉMARRER",
    "wiki.sidebar.join": "Nous rejoindre",
    "wiki.sidebar.rules": "Règlement",
    "wiki.sidebar.faq": "FAQ",
    "wiki.sidebar.commands": "Commandes",
    "wiki.sidebar.pokemon": "🐉 POKÉMON",
    "wiki.sidebar.legendary": "Légendaires",
    "wiki.sidebar.ivs": "IVs & EVs",
    "wiki.sidebar.natures": "Natures",
    "wiki.sidebar.mega": "Méga, Z & Téra",
    "wiki.sidebar.support": "❓ SUPPORT",
    "wiki.sidebar.discord": "Discord",

    // LANG SELECTOR
    "lang.fr": "FR",
    "lang.en": "EN"
  },

  en: {
    // NAVBAR
    "nav.home": "Home",
    "nav.pokedex": "Pokédex",
    "nav.wiki": "Wiki",
    "nav.boutique": "Shop",
    "nav.vote": "Vote",
    "nav.discord": "Discord",
    "nav.login": "Login",

    // HERO
    "hero.tagline": "BECOME A COBBLEMON TRAINER",
    "hero.subtitle": "Join our server and live a unique Pokémon adventure. 100+ optimized mods, shaders, active community.",
    "hero.play": "PLAY NOW",
    "hero.ip": "Coming soon",
    "hero.maintenance": "UNDER MAINTENANCE",
    "hero.ip.copied": "SOON!",

    // STATS
    "stats.players": "In development",
    "stats.new": "New",
    "stats.creating": "Server in creation",
    "stats.mods": "Mods installed and optimized",

    // FEATURES
    "features.title1": "Why",
    "features.title2": "OrionCube",
    "features.title3": "?",
    "features.subtitle": "A Cobblemon experience designed for you.",
    "features.cobblemon.title": "Complete Cobblemon",
    "features.cobblemon.text": "Catch, train and battle hundreds of Pokémon in a beautiful open world.",
    "features.cobblemon.link": "Discover the Pokédex →",
    "features.optimized.title": "Optimized & smooth",
    "features.optimized.text": "Iris, Sodium, Lithium shaders. High FPS even on modest setups.",
    "features.design.title": "Unique design",
    "features.design.text": "Custom launcher, sleek interface, premium visual experience on every launch.",
    "features.community.title": "Active community",
    "features.community.text": "Join hundreds of trainers on Discord, take part in events and raids.",
    "features.community.link": "Join the Discord →",
    "features.changelog.title": "Changelog",
    "features.changelog.text": "Follow all the news, fixes and optimizations of the server and launcher.",
    "features.changelog.link": "See updates →",
    "features.content.title": "Exclusive content",
    "features.content.text": "Events, quests, arenas, Mega Evolutions and much more to discover.",

    // TEAM
    "team.title1": "Our",
    "team.title2": "Team",
    "team.subtitle": "The people who make OrionCube live every day.",
    "team.role.nexto": "Founder / Dev",
    "team.role.shachouu": "Co-Founder / Designer",

    // CTA
    "cta.title": "Ready to start the adventure?",
    "cta.text": "Join OrionCube and become the ultimate Pokémon Master.",
    "cta.download": "DOWNLOAD THE LAUNCHER",
    "cta.discord": "JOIN THE DISCORD",

    // FOOTER
    "footer.text": "© 2026 OrionCube — French Cobblemon Minecraft Server. Not affiliated with Mojang AB or The Pokémon Company.",

    // BOUTIQUE
    "boutique.title1": "Shop",
    "boutique.subtitle": "Coming soon...",
    "boutique.text": "The official shop will open very soon! You'll find VIP ranks, exclusive items and rare Cobblemon. Stay connected on our Discord to be notified at launch.",
    "boutique.discord": "JOIN THE DISCORD",
    "boutique.footer": "© 2026 OrionCube — Shop in development",

    // VOTE
    "vote.title1": "Vote",
    "vote.subtitle": "Coming soon...",
    "vote.text": "The official voting system will open very soon! You'll be able to support OrionCube on Minecraft server lists and earn exclusive in-game rewards: rare Poké Balls, items, money and much more. Stay connected on our Discord to be notified at launch.",
    "vote.discord": "JOIN THE DISCORD",
    "vote.footer": "© 2026 OrionCube — Vote in development",

    // CONNEXION
    "connexion.title1": "Login",
    "connexion.subtitle": "Coming soon...",
    "connexion.text": "The login site will open very soon! You'll be able to link your Microsoft (Minecraft) account to retrieve your profile, stats and rewards. In the meantime, you can already log in with your Microsoft account directly on the OrionCube launcher.",
    "connexion.discord": "JOIN THE DISCORD",
    "connexion.footer": "© 2026 OrionCube — Login in development",

    // CHANGELOG
    "changelog.title1": "Changelog",
    "changelog.subtitle": "All the updates, fixes and new features of the server and launcher.",
    "changelog.badge.new": "✨ New",
    "changelog.badge.fix": "🐛 Fix",
    "changelog.badge.design": "🎨 Design",
    "changelog.badge.optim": "⚡ Optimization",
    "changelog.badge.technique": "🔧 Technical",

    // POKEDEX
    "pokedex.title1": "Pokédex",
    "pokedex.subtitle": "Discover all Pokémon available on the server. Filter by type, generation or search directly for your favorite Pokémon.",
    "pokedex.search": "Search a Pokémon (name or number)...",
    "pokedex.filter.type": "Type:",
    "pokedex.filter.all.types": "All types",
    "pokedex.filter.gen": "Generation:",
    "pokedex.filter.all.gens": "All generations",
    "pokedex.filter.category": "Category:",
    "pokedex.filter.all": "All",
    "pokedex.filter.legendary": "🌟 Legendaries",
    "pokedex.filter.mythical": "✨ Mythicals",
    "pokedex.filter.starter": "🎮 Starters",
    "pokedex.displayed1": "Pokémon displayed",
    "pokedex.prev": "← Previous",
    "pokedex.next": "Next →",
    "pokedex.page": "Page",
    "pokedex.loading": "Loading Pokémon... (1-2 min the first time)",

    // WIKI
    "wiki.title1": "Wiki",
    "wiki.subtitle": "Everything you need to know about the server: guides, rules, legendaries, IVs/EVs, natures and more.",
    "wiki.sidebar.getting": "🎮 GETTING STARTED",
    "wiki.sidebar.join": "Join us",
    "wiki.sidebar.rules": "Rules",
    "wiki.sidebar.faq": "FAQ",
    "wiki.sidebar.commands": "Commands",
    "wiki.sidebar.pokemon": "🐉 POKÉMON",
    "wiki.sidebar.legendary": "Legendaries",
    "wiki.sidebar.ivs": "IVs & EVs",
    "wiki.sidebar.natures": "Natures",
    "wiki.sidebar.mega": "Mega, Z & Tera",
    "wiki.sidebar.support": "❓ SUPPORT",
    "wiki.sidebar.discord": "Discord",

    // LANG SELECTOR
    "lang.fr": "FR",
    "lang.en": "EN"
  }
};

// ============================================
// DÉTECTION + APPLICATION DE LA LANGUE
// ============================================
function getCurrentLang() {
  return localStorage.getItem('orioncube_lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('orioncube_lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.setAttribute('lang', lang);
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLang();
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-lang');
      if (target) setLang(target);
    });
  });
});

console.log('🌍 i18n OrionCube — Chargé');
