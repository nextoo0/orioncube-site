// ============================================
// WIKI ORIONCUBE — Navigation
// ============================================

console.log('📖 Wiki OrionCube — Chargé');

// ============================================
// NAVIGATION ENTRE LES PAGES
// ============================================
const sidebarLinks = document.querySelectorAll('.sidebar-link[data-page]');
const pages = document.querySelectorAll('.wiki-page');

function showPage(pageId) {
  // Masque toutes les pages
  pages.forEach(p => p.classList.remove('active'));
  
  // Retire la classe active de tous les liens
  sidebarLinks.forEach(l => l.classList.remove('active'));
  
  // Affiche la page demandée
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Active le lien correspondant
  const targetLink = document.querySelector(`.sidebar-link[data-page="${pageId}"]`);
  if (targetLink) {
    targetLink.classList.add('active');
  }
  
  // Scroll en haut
  window.scrollTo({ top: 300, behavior: 'smooth' });
  
  // Met à jour le hash de l'URL
  window.location.hash = pageId;
  
  console.log(`📄 Page affichée : ${pageId}`);
}

// Clic sur un lien de la sidebar
sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.dataset.page;
    if (pageId) showPage(pageId);
  });
});

// ============================================
// CHARGEMENT AVEC HASH
// ============================================
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const targetPage = document.getElementById('page-' + hash);
    if (targetPage) {
      showPage(hash);
      return;
    }
  }
  
  // Sinon affiche la première page (Rejoindre)
  showPage('rejoindre');
});

// ============================================
// GESTION DU HASH CHANGE (retour navigateur)
// ============================================
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    showPage(hash);
  }
});

console.log('✅ Wiki OrionCube — Script chargé');
