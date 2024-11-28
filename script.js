// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.cv section');
  const links = document.querySelectorAll('.cv a');

  // Animación de desplazamiento suave para los enlaces
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

  // Animación de aparición al hacer scroll
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});
