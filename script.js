// ============================================
// ORIONCUBE — Site web
// ============================================

console.log('🌌 OrionCube — Site chargé');

// ============================================
// COPIER L'IP DU SERVEUR
// ============================================
const copyIpBtn = document.getElementById('copy-ip');

if (copyIpBtn) {
  copyIpBtn.addEventListener('click', async () => {
    const ip = copyIpBtn.dataset.ip;
    const ipText = copyIpBtn.querySelector('.ip-text');

    try {
      await navigator.clipboard.writeText(ip);

      // Feedback visuel
      copyIpBtn.classList.add('copied');
      const originalText = ipText.textContent;
      ipText.textContent = 'IP COPIÉE !';

      setTimeout(() => {
        copyIpBtn.classList.remove('copied');
        ipText.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error('❌ Erreur copie :', err);
    }
  });
}

// ============================================
// NAVBAR — Scroll effect
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 21, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(10, 10, 21, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});

// ============================================
// NAVBAR — Active link au scroll
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================
// COMPTEUR DE JOUEURS (Minecraft Server Status)
// ============================================
// ⚠️ Remplace 'play.orioncube.fr' par l'IP de ton serveur quand tu l'auras
const SERVER_IP = 'play.orioncube.fr';

async function updatePlayerCount() {
  try {
    // Utilise l'API publique mcsrvstat.us
    const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
    const data = await response.json();

    const playerCount = document.getElementById('player-count');
    const statPlayers = document.getElementById('stat-players');

    if (data.online && data.players) {
      const online = data.players.online || 0;
      if (playerCount) playerCount.textContent = online;
      if (statPlayers) statPlayers.textContent = online;
      console.log(`✅ Serveur en ligne : ${online} joueurs`);
    } else {
      // Serveur hors ligne → affiche "—"
      if (playerCount) playerCount.textContent = '—';
      if (statPlayers) statPlayers.textContent = '—';
      console.log('⚠️ Serveur hors ligne');
    }
  } catch (err) {
    // En cas d'erreur, affiche "—"
    const playerCount = document.getElementById('player-count');
    const statPlayers = document.getElementById('stat-players');
    if (playerCount) playerCount.textContent = '—';
    if (statPlayers) statPlayers.textContent = '—';
    console.log('⚠️ Impossible de récupérer le statut du serveur');
  }
}

// Récupère le nombre de joueurs au chargement
updatePlayerCount();

// Puis toutes les 60 secondes
setInterval(updatePlayerCount, 60000);

// ============================================
// ANIMATIONS AU SCROLL (Fade-in)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Applique l'animation aux cartes
document.querySelectorAll('.feature-card, .stat-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(card);
});

// ============================================
// SMOOTH SCROLL pour les liens de la navbar
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

console.log('✅ OrionCube — Script chargé complètement');
