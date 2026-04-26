'use strict';

// ============================================
// TRANSLATIONS (i18n)
// ============================================
const translations = {
  es: {
    'nav.about':    'Sobre mí',
    'nav.skills':   'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact':  'Contacto',

    'hero.badge':      'Disponible para nuevas oportunidades',
    'hero.rolePrefix': 'Soy ',
    'hero.desc':       'Ingeniero Electrónico especializado en software, Machine Learning y automatización de procesos para PYMES colombianas.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv':     'Descargar CV',

    'about.tag':    'Conóceme',
    'about.title':  'Sobre mí',
    'about.p1':     'Ingeniero electrónico especializado en software, bilingüe (B2), orientado a digitalizar y automatizar procesos para PYMES con soluciones de alto impacto.',
    'about.p2':     'Diseño modelos de IA y Machine Learning para hardware embebido y sistemas de gestión a medida.',
    'about.stat1':  'Ventas cerradas',
    'about.stat2':  'Tiempo administrativo',
    'about.stat3':  'Errores de stock',
    'about.edu1':   'Esp. Desarrollo de Software',
    'about.edu2':   'Ingeniería Electrónica',
    'about.lang':   'Idiomas',
    'about.langVal':'Español (Nativo) · Inglés (B2)',
    'about.location':'Ubicación',
    'about.downloadCv': 'Descargar Hoja de Vida',

    'skills.tag':   'Stack técnico',
    'skills.title': 'Habilidades',
    'skills.cat.lang':       'Lenguajes',
    'skills.cat.frameworks': 'Frameworks & Libs',
    'skills.cat.db':         'Bases de datos',
    'skills.cat.tools':      'Herramientas',

    'proj.tag':      'Portafolio',
    'proj.title':    'Proyectos',
    'proj.sub':      'Soluciones reales con impacto medible',
    'proj.featured': '⭐ Destacado',
    'proj.p1.title': 'Sistema CRM para PYMES',
    'proj.p1.desc':  'CRM en Python + MySQL que centraliza clientes y automatiza recordatorios. Aumentó el cierre de ventas en un 28%.',
    'proj.p1.m1':    'Ventas cerradas',
    'proj.p1.m2':    'Digital',
    'proj.p2.title': 'Modelo ML para Edge',
    'proj.p2.desc':  'Algoritmo de ML optimizado para hardware embebido: entrenamiento, cuantización y despliegue con recursos limitados.',
    'proj.p3.title': 'Gestión de Inventario',
    'proj.p3.desc':  'Inventario a medida con alertas de stock mínimo, seguimiento a proveedores y reportes visuales de rotación.',
    'proj.p4.title': 'Automatización de Documentos',
    'proj.p4.desc':  'Genera cotizaciones, remisiones y reportes automáticamente. Reduce el tiempo administrativo en un 60%.',
    'proj.soon':     'Próximamente en GitHub',

    'cv.title': '¿Interesado en trabajar juntos?',
    'cv.sub':   'Descarga mi hoja de vida completa',
    'cv.btn':   'Descargar CV',

    'contact.tag':   'Hablemos',
    'contact.title': 'Contacto',
    'contact.sub':   '¿Tienes un proyecto? Cuéntame.',
    'contact.form.name':      'Nombre',
    'contact.form.namePh':    'Tu nombre',
    'contact.form.subject':   'Asunto',
    'contact.form.subjectPh': '¿En qué puedo ayudarte?',
    'contact.form.message':   'Mensaje',
    'contact.form.messagePh': 'Cuéntame sobre tu proyecto...',
    'contact.form.send':      'Enviar mensaje',
    'contact.form.success':   '✅ ¡Mensaje enviado! Te respondo pronto.',
    'contact.form.error':     '❌ Algo salió mal. Escríbeme directamente al correo.',
    'contact.form.sending':   'Enviando...',

    'footer.credit': 'Diseñado y desarrollado por Juan Diego Peña Salinas',
  },
  en: {
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'hero.badge':      'Open to new opportunities',
    'hero.rolePrefix': 'I\'m a ',
    'hero.desc':       'Electronic Engineer specialized in software development, Machine Learning and process automation for Colombian SMEs.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv':     'Download CV',

    'about.tag':    'Get to know me',
    'about.title':  'About me',
    'about.p1':     'Electronic engineer specialized in software, bilingual (B2), focused on digitizing and automating business processes for SMEs with high-impact solutions.',
    'about.p2':     'I design AI and Machine Learning models for embedded hardware and custom management systems.',
    'about.stat1':  'Sales closed',
    'about.stat2':  'Admin time',
    'about.stat3':  'Stock errors',
    'about.edu1':   'Software Dev. Specialization',
    'about.edu2':   'Electronic Engineering',
    'about.lang':   'Languages',
    'about.langVal':'Spanish (Native) · English (B2)',
    'about.location':'Location',
    'about.downloadCv': 'Download Resume',

    'skills.tag':   'Tech stack',
    'skills.title': 'Skills',
    'skills.cat.lang':       'Languages',
    'skills.cat.frameworks': 'Frameworks & Libs',
    'skills.cat.db':         'Databases',
    'skills.cat.tools':      'Tools',

    'proj.tag':      'Portfolio',
    'proj.title':    'Projects',
    'proj.sub':      'Real solutions with measurable impact',
    'proj.featured': '⭐ Featured',
    'proj.p1.title': 'CRM System for SMEs',
    'proj.p1.desc':  'Python + MySQL CRM that centralizes clients and automates follow-up reminders. Increased sales closure by 28%.',
    'proj.p1.m1':    'Sales closed',
    'proj.p1.m2':    'Digital',
    'proj.p2.title': 'Edge ML Model',
    'proj.p2.desc':  'ML algorithm optimized for embedded hardware: training, quantization and deployment on resource-constrained devices.',
    'proj.p3.title': 'Inventory Management',
    'proj.p3.desc':  'Custom inventory system with minimum stock alerts, supplier order tracking and visual rotation reports.',
    'proj.p4.title': 'Document Automation',
    'proj.p4.desc':  'Auto-generates quotes, delivery notes and reports. Reduces administrative time by 60%.',
    'proj.soon':     'Coming soon on GitHub',

    'cv.title': 'Interested in working together?',
    'cv.sub':   'Download my full resume',
    'cv.btn':   'Download CV',

    'contact.tag':   'Let\'s talk',
    'contact.title': 'Contact',
    'contact.sub':   'Have a project? Tell me about it.',
    'contact.form.name':      'Name',
    'contact.form.namePh':    'Your name',
    'contact.form.subject':   'Subject',
    'contact.form.subjectPh': 'How can I help you?',
    'contact.form.message':   'Message',
    'contact.form.messagePh': 'Tell me about your project...',
    'contact.form.send':      'Send message',
    'contact.form.success':   '✅ Message sent! I\'ll reply soon.',
    'contact.form.error':     '❌ Something went wrong. Email me directly.',
    'contact.form.sending':   'Sending...',

    'footer.credit': 'Designed and developed by Juan Diego Peña Salinas',
  }
};

// ============================================
// TYPEWRITER WORDS
// ============================================
const typewriterWords = {
  es: ['Desarrollador de Software', 'Ingeniero Electrónico', 'Especialista en ML', 'Automatizador de Procesos'],
  en: ['Software Developer', 'Electronic Engineer', 'ML Specialist', 'Process Automation Expert']
};

// ============================================
// STATE
// ============================================
let currentLang    = 'es';
let typewriterIdx  = 0;
let typewriterChar = 0;
let typewriterDir  = 1; // 1 = typing, -1 = deleting
let typewriterTimer;

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initHamburger();
  initLangToggle();
  initTypewriter();
  initParticles();
  initAOS();
  initActiveNav();
  initContactForm();
  applyLang('es');
});

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  if (!cursor || !cursorDot) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  // Smooth lag for outer ring
  (function animateCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .proj-card, .chip, .clink').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ============================================
// NAVBAR SCROLL
// ============================================
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ============================================
// HAMBURGER MENU
// ============================================
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ============================================
// LANGUAGE TOGGLE
// ============================================
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
    document.getElementById('langEs').classList.toggle('active', currentLang === 'es');
    document.getElementById('langEn').classList.toggle('active', currentLang === 'en');
    // Restart typewriter with new language
    clearTimeout(typewriterTimer);
    typewriterIdx  = 0;
    typewriterChar = 0;
    typewriterDir  = 1;
    document.getElementById('typewriter').textContent = '';
    runTypewriter();
  });
}

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // CV download — archivo diferente según idioma
  const cvFile = lang === 'en' ? 'assets/cv_en.pdf' : 'assets/cv.pdf';
  document.querySelectorAll('.cv-download').forEach(a => { a.href = cvFile; });
}

// ============================================
// TYPEWRITER
// ============================================
function initTypewriter() {
  runTypewriter();
}

function runTypewriter() {
  const el    = document.getElementById('typewriter');
  if (!el) return;
  const words = typewriterWords[currentLang];
  const word  = words[typewriterIdx % words.length];

  if (typewriterDir === 1) {
    typewriterChar++;
    el.textContent = word.substring(0, typewriterChar);
    if (typewriterChar >= word.length) {
      typewriterDir = -1;
      typewriterTimer = setTimeout(runTypewriter, 1800);
      return;
    }
  } else {
    typewriterChar--;
    el.textContent = word.substring(0, typewriterChar);
    if (typewriterChar <= 0) {
      typewriterDir = 1;
      typewriterIdx++;
      typewriterTimer = setTimeout(runTypewriter, 400);
      return;
    }
  }
  typewriterTimer = setTimeout(runTypewriter, typewriterDir === 1 ? 80 : 45);
}

// ============================================
// PARTICLES CANVAS
// ============================================
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const count = Math.min(80, Math.floor(W * H / 16000));
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
      ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================================
// SCROLL ANIMATIONS (AOS)
// ============================================
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = parseInt(el.getAttribute('data-aos-delay') || 0);
        setTimeout(() => el.classList.add('aos-animate'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// ACTIVE NAV LINK
// ============================================
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !feedback) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t = translations[currentLang];

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = t['contact.form.sending'];

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = t['contact.form.success'];
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      feedback.className = 'form-feedback error';
      feedback.textContent = t['contact.form.error'];
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = t['contact.form.send'];
      setTimeout(() => { feedback.className = 'form-feedback'; }, 6000);
    }
  });
}
