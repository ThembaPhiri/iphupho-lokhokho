/* ============================================
   IPHUPHO LOKHOKHO SHUTTLES — Main JS
   ============================================ */

// ======= NAVBAR SCROLL =======
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ======= HAMBURGER MENU =======
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ======= ACTIVE NAV LINK =======
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ======= STICKY BOOK BAR =======
const stickyBook = document.querySelector('.sticky-book');
if (stickyBook) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      stickyBook.classList.add('visible');
    } else {
      stickyBook.classList.remove('visible');
    }
  });
}

// ======= HOME BOOKING TABS =======
const tabBtns = document.querySelectorAll('.tab-switch button');
const tabForms = document.querySelectorAll('.tab-form');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.tab;
    tabForms.forEach(f => {
      f.style.display = f.dataset.form === target ? 'block' : 'none';
    });
  });
});

// ======= BOOKING PAGE TABS =======
const bookingTabs = document.querySelectorAll('.booking-tab');
const bookingPanels = document.querySelectorAll('.booking-panel');
bookingTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    bookingTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.panel;
    bookingPanels.forEach(p => {
      p.style.display = p.dataset.panel === target ? 'block' : 'none';
    });
  });
});

// ======= FAQ ACCORDION =======
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ======= FLEET FILTERS =======
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.vehicle-card').forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ======= TOAST NOTIFICATION =======
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.classList.add('toast');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ======= FORM SUBMISSION =======
document.querySelectorAll('form[data-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = form.dataset.form;
    const btn = form.querySelector('[type=submit]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate submission (replace with actual endpoint / EmailJS / Formspree)
    setTimeout(() => {
      btn.textContent = '✓ Sent!';
      showToast(
        type === 'contact'
          ? 'Message received! We will be in touch shortly.'
          : type === 'shuttle'
          ? 'Shuttle booking request received! We will confirm shortly.'
          : 'Car rental request received! We will confirm shortly.'
      );
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
});

// ======= QUOTE CALCULATOR =======
const quoteForm = document.querySelector('#quoteForm');
if (quoteForm) {
  const rates = {
    'durban-airport': 250,
    'airport-durban': 250,
    'durban-ballito': 400,
    'durban-umhlanga': 200,
    'durban-pietermaritzburg': 600,
    'custom': 350,
  };

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const route = quoteForm.querySelector('#quoteRoute').value;
    const pax = parseInt(quoteForm.querySelector('#quotePax').value) || 1;
    let base = rates[route] || rates['custom'];

    // Surcharge for larger groups
    if (pax > 5) base = Math.round(base * 1.3);
    else if (pax > 3) base = Math.round(base * 1.1);

    const resultEl = document.querySelector('#quoteResult');
    document.querySelector('#quotePrice').textContent = `R ${base.toLocaleString()}`;
    resultEl.style.display = 'block';
  });
}

// ======= SCROLL REVEAL =======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .vehicle-card, .testimonial-card, .value-card, .route-card, .why-feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
