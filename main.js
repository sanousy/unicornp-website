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

  // developer handbook doc viewer
  const moduleList = [
    'docs/Module_1.md', 'docs/Module_2.md', 'docs/Module_3.md',
    'docs/Module_4.md', 'docs/Module_5.md', 'docs/Module_6.md',
    'docs/Module_7.md', 'docs/Module_8.md', 'docs/Module_9.md',
  ];
  let currentIndex = -1;
  const viewer = document.getElementById('doc-viewer');
  const contentEl = document.getElementById('markdown-content');
  const mainSections = document.querySelectorAll('body > header, body > section:not(#doc-viewer), body > footer');

  async function loadModule(file) {
    currentIndex = moduleList.indexOf(file);
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error('not found');
      const text = await res.text();
      contentEl.innerHTML = marked.parse(text);
      mainSections.forEach(s => s.style.display = 'none');
      viewer.classList.add('open');
      window.scrollTo(0, 0);
    } catch (e) {
      console.error(e);
    }
  }

  function closeViewer() {
    viewer.classList.remove('open');
    mainSections.forEach(s => s.style.display = '');
  }

  document.querySelectorAll('.doc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loadModule(link.getAttribute('href'));
    });
  });

  viewer.querySelector('[data-action="close"]').addEventListener('click', closeViewer);
  viewer.querySelector('[data-action="prev"]').addEventListener('click', () => {
    if (currentIndex > 0) loadModule(moduleList[currentIndex - 1]);
  });
  viewer.querySelector('[data-action="next"]').addEventListener('click', () => {
    if (currentIndex < moduleList.length - 1) loadModule(moduleList[currentIndex + 1]);
  });
});
