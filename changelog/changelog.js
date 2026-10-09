// ============================================
// CHANGELOG ORIONCUBE — Accordéon + dates relatives
// ============================================

console.log('📜 Changelog OrionCube — Chargé');

// ============================================
// FONCTION DATE RELATIVE EN FRANÇAIS
// ============================================
function getRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffSec < 60) return "à l'instant";
  if (diffMin < 60) return `il y a ${diffMin} minute${diffMin > 1 ? 's' : ''}`;
  if (diffHour < 24) return `il y a ${diffHour} heure${diffHour > 1 ? 's' : ''}`;
  if (diffDay === 1) return 'hier';
  if (diffDay < 7) return `il y a ${diffDay} jour${diffDay > 1 ? 's' : ''}`;
  if (diffWeek < 4) return `il y a ${diffWeek} semaine${diffWeek > 1 ? 's' : ''}`;
  if (diffMonth < 12) return `il y a ${diffMonth} mois`;
  return `il y a ${diffYear} an${diffYear > 1 ? 's' : ''}`;
}

// ============================================
// APPLIQUER LES DATES RELATIVES
// ============================================
document.querySelectorAll('.changelog-date[data-date]').forEach(el => {
  const dateStr = el.getAttribute('data-date');
  if (dateStr) {
    el.textContent = getRelativeDate(dateStr);
  }
});

// ============================================
// ACCORDÉON
// ============================================
document.querySelectorAll('.changelog-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.changelog-item');
    const isOpen = item.classList.contains('open');

    // Ferme tous les autres
    document.querySelectorAll('.changelog-item.open').forEach(i => {
      if (i !== item) {
        i.classList.remove('open');
        i.querySelector('.changelog-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle celui cliqué
    if (isOpen) {
      item.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

// Ouvre la 1ère version par défaut
const firstItem = document.querySelector('.changelog-item');
if (firstItem) {
  firstItem.classList.add('open');
  firstItem.querySelector('.changelog-toggle').setAttribute('aria-expanded', 'true');
}

// ============================================
// TRANSITION DE PAGE (liens navbar)
// ============================================
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  if (href.startsWith('http')) return;
  if (href.startsWith('#')) return;
  if (href.startsWith('mailto')) return;
  if (link.target === '_blank') return;

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

console.log('✅ Changelog OrionCube — Script chargé');
