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
    'about.p1':     'Soy Desarrollador Full Stack con base en ingeniería electrónica. En backend construyo APIs REST y sistemas de gestión con Python y Flask, usando MySQL o SQLite según la escala del proyecto. En frontend desarrollo interfaces funcionales con HTML, CSS y JavaScript vanilla. Complemento esto con automatización de procesos, generación de reportes y dashboards de datos con pandas y Matplotlib.',
    'about.p2':     'Tengo experiencia práctica en Machine Learning con TensorFlow, Keras y scikit-learn, incluyendo despliegue de modelos en hardware embebido (ESP32) con TensorFlow Lite. He trabajado en proyectos reales para PYMES colombianas: desde sistemas de inventario y trazabilidad hasta plataformas web de agendamiento y generación automática de documentos PDF.',
    'about.stat1':  'Accuracy modelo IA',
    'about.stat2':  'Proyectos entregados',
    'about.stat3':  'Tiempo automatizado',
    'about.edu1':   'Esp. Desarrollo de Software',
    'about.edu2':   'Ingeniería Electrónica',
    'about.lang':   'Idiomas',
    'about.langVal':'Español (Nativo) · Inglés (B2)',
    'about.location':'Ubicación',
    'about.downloadCv': 'Descargar Hoja de Vida',

    'nav.services': 'Servicios',
    'services.tag':   '¿Qué puedo hacer por ti?',
    'services.title': 'Servicios',
    'services.sub':   'Soluciones a medida para tu negocio o proyecto',
    'services.s1.title': 'Desarrollo Backend',
    'services.s1.desc':  'APIs REST, sistemas de gestión, bases de datos relacionales y automatización de procesos con Python y Flask.',
    'services.s2.title': 'Desarrollo Frontend',
    'services.s2.desc':  'Interfaces web funcionales y responsivas con HTML, CSS y JavaScript. Integración con backends Flask o APIs externas.',
    'services.s3.title': 'Automatización de Procesos',
    'services.s3.desc':  'Scripts y pipelines que eliminan tareas manuales repetitivas: generación de documentos PDF, reportes automáticos y limpieza de datos.',
    'services.s4.title': 'Dashboards y Análisis de Datos',
    'services.s4.desc':  'Visualizaciones interactivas, reportes financieros y análisis de datos para la toma de decisiones con pandas, Matplotlib y Power BI.',
    'services.s5.title': 'Machine Learning Aplicado',
    'services.s5.desc':  'Modelos de clasificación, predicción y detección de patrones con TensorFlow, Keras y scikit-learn. Incluye despliegue en producción o hardware embebido.',
    'services.price.project': 'Desde $X por proyecto',
    'services.price.hour':    '$X / hora',

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
    'proj.p1.title': 'IA Embebida para Control de Neuroprótesis',
    'proj.p1.desc':  'Los sistemas de control para neuroprótesis dependían de reglas manuales sin capacidad de aprendizaje. Construí un dataset propio capturando señales del sensor inercial MPU6050 montado en el brazo, etiquetando manualmente tres patrones de movimiento. Diseñé y entrené una red neuronal densa en Python con TensorFlow/Keras, iterando sobre la arquitectura hasta alcanzar 98% de accuracy. Apliqué cuantización con TensorFlow Lite para reducir el modelo a menos de 50 KB y lo desplegué en un microcontrolador ESP32, logrando clasificación en tiempo real con latencia menor a 20 ms.',
    'proj.p1.m1':    'Accuracy del modelo',
    'proj.p1.m2':    'Clases de movimiento',
    'proj.p1.m3':    'F1 Score ponderado',
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
    'about.p1':     'I\'m a Full Stack Developer with a background in electronic engineering. On the backend, I build REST APIs and management systems using Python and Flask, with MySQL or SQLite depending on project scale. On the frontend, I develop functional interfaces with HTML, CSS and vanilla JavaScript. I complement this with process automation, report generation and data dashboards using pandas and Matplotlib.',
    'about.p2':     'I have hands-on experience in Machine Learning with TensorFlow, Keras and scikit-learn, including model deployment on embedded hardware (ESP32) with TensorFlow Lite. I\'ve worked on real-world projects for Colombian SMEs: from inventory and traceability systems to web scheduling platforms and automatic PDF document generation.',
    'about.stat1':  'AI Model Accuracy',
    'about.stat2':  'Projects delivered',
    'about.stat3':  'Time automated',
    'about.edu1':   'Software Dev. Specialization',
    'about.edu2':   'Electronic Engineering',
    'about.lang':   'Languages',
    'about.langVal':'Spanish (Native) · English (B2)',
    'about.location':'Location',
    'about.downloadCv': 'Download Resume',

    'nav.services': 'Services',
    'services.tag':   'What can I do for you?',
    'services.title': 'Services',
    'services.sub':   'Tailored solutions for your business or project',
    'services.s1.title': 'Backend Development',
    'services.s1.desc':  'REST APIs, management systems, relational databases and process automation with Python and Flask.',
    'services.s2.title': 'Frontend Development',
    'services.s2.desc':  'Functional and responsive web interfaces with HTML, CSS and JavaScript. Integration with Flask backends or external APIs.',
    'services.s3.title': 'Process Automation',
    'services.s3.desc':  'Scripts and pipelines that eliminate repetitive manual tasks: PDF document generation, automatic reports and data cleaning.',
    'services.s4.title': 'Dashboards & Data Analysis',
    'services.s4.desc':  'Interactive visualizations, financial reports and data analysis for decision-making with pandas, Matplotlib and Power BI.',
    'services.s5.title': 'Applied Machine Learning',
    'services.s5.desc':  'Classification, prediction and pattern detection models with TensorFlow, Keras and scikit-learn. Includes deployment in production or embedded hardware.',
    'services.price.project': 'From $X per project',
    'services.price.hour':    '$X / hour',

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
    'proj.p1.title': 'Embedded AI for Neuroprosthesis Control',
    'proj.p1.desc':  'Neuroprosthesis control systems relied on manual rules with no learning capability. I built a custom dataset by capturing signals from an MPU6050 inertial sensor mounted on the arm, manually labeling three movement patterns. I designed and trained a dense neural network in Python with TensorFlow/Keras, iterating on the architecture until reaching 98% accuracy. I applied quantization with TensorFlow Lite to reduce the model below 50 KB and deployed it on an ESP32 microcontroller, achieving real-time classification with latency under 20 ms.',
    'proj.p1.m1':    'Model accuracy',
    'proj.p1.m2':    'Movement classes',
    'proj.p1.m3':    'Weighted F1 Score',
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
