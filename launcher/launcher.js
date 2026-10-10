// ============================================
// LAUNCHER ORIONCUBE — Lit version.json
// ============================================

console.log('🚀 Launcher OrionCube — Chargé');

// Fonction pour formater la date en français
function formatDate(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

// Charge le fichier version.json
async function loadLauncherVersion() {
  const versionEl = document.getElementById('launcher-version');
  const dateEl = document.getElementById('launcher-date');
  const downloadBtn = document.getElementById('launcher-download');

  try {
    // On ajoute un timestamp pour éviter le cache
    const response = await fetch('version.json?t=' + Date.now());
    if (!response.ok) throw new Error('Fichier version.json introuvable');
    
    const data = await response.json();
    console.log('✅ Version du launcher chargée :', data);

    // Affiche la version
    if (versionEl) versionEl.textContent = 'v' + data.version;

    // Affiche la date
    if (dateEl) dateEl.textContent = formatDate(data.date);

    // Configure le bouton de téléchargement
    if (downloadBtn && data.url) {
      downloadBtn.href = data.url;
      downloadBtn.classList.remove('disabled');
    } else if (downloadBtn) {
      downloadBtn.classList.add('disabled');
      downloadBtn.removeAttribute('href');
    }

  } catch (err) {
    console.error('❌ Erreur chargement version.json :', err);
    if (versionEl) versionEl.textContent = 'v1.0.0';
    if (dateEl) dateEl.textContent = '—';
    if (downloadBtn) {
      downloadBtn.classList.add('disabled');
      downloadBtn.removeAttribute('href');
    }
  }
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

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadLauncherVersion();
});

window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});
