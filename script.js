
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Mobile navigation menu
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Portfolio project filters
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    // Update the active filter button
    filterButtons.forEach((item) => {
      item.classList.toggle('active', item === button);
    });

    // Show matching projects
    projectCards.forEach((card) => {
      const category = card.dataset.category;

      card.hidden =
        selectedFilter !== 'all' &&
        category !== selectedFilter;
    });
  });
});

// Automatically update the copyright year
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
