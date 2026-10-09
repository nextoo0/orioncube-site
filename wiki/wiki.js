// ============================================
// WIKI ORIONCUBE — Navigation
// ============================================

console.log('📖 Wiki OrionCube — Chargé');

const sidebarLinks = document.querySelectorAll('.sidebar-link[data-page]');
const pages = document.querySelectorAll('.wiki-page');

function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  sidebarLinks.forEach(l => l.classList.remove('active'));

  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) targetPage.classList.add('active');

  const targetLink = document.querySelector(`.sidebar-link[data-page="${pageId}"]`);
  if (targetLink) targetLink.classList.add('active');

  window.scrollTo({ top: 300, behavior: 'smooth' });
  window.location.hash = pageId;

  console.log(`📄 Page affichée : ${pageId}`);
}

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.dataset.page;
    if (pageId) showPage(pageId);
  });
});

window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const targetPage = document.getElementById('page-' + hash);
    if (targetPage) {
      showPage(hash);
      return;
    }
  }
  showPage('rejoindre');
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) showPage(hash);
});

// ============================================
// TRANSITION DE PAGE (liens navbar)
// ============================================
document.querySelectorAll('a[href$=".html"], a[href$="/"], a[href="../"]').forEach(link => {
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

console.log('✅ Wiki OrionCube — Script chargé');
