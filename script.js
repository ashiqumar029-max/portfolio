// Portfolio interactions and quick personalization.
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // CHANGE THIS to your real email address before publishing.
  const email = 'your.email@example.com';
  const emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.href = `mailto:${email}`;

  // Smoothly reveal sections as they enter the viewport.
  const sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach(section => observer.observe(section));
  }
});
