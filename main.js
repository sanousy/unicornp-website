document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langBtn = document.getElementById('langToggle');

  function applyLang(lang) {
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('na3na3-lang', lang);
  }

  const savedLang = localStorage.getItem('na3na3-lang') || 'ar';
  applyLang(savedLang);

  langBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-lang') === 'ar' ? 'en' : 'ar';
    applyLang(next);
  });

  // mobile nav
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
