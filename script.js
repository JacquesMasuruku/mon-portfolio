// 🌐 Défilement fluide pour les liens de navigation
document.querySelectorAll('nav ul li a, .cta-button').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 📩 Message de confirmation lors du clic sur "Me contacter"
const contactButton = document.querySelector('.cta-button');
if (contactButton) {
  contactButton.addEventListener('click', () => {
    console.log("Redirection vers la section contact...");
  });
}

// 🎯 Animation d’apparition des sections au défilement
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// 📅 Ajout dynamique de l’année dans le footer
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `&copy; ${currentYear} Jacques Masuruku. Tous droits réservés.`;
}
// 🍔 Menu hamburger responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});