// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');
toggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Revelar secciones al entrar en viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Accesibilidad: foco visible en botones y enlaces
document.querySelectorAll('.btn, a, button').forEach(el => {
  el.addEventListener('focus', () => el.style.boxShadow = '0 0 0 3px rgba(179,18,23,0.35)');
  el.addEventListener('blur', () => el.style.boxShadow = '');
});
