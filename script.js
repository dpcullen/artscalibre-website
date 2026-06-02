// ArtsCalibre Academy — Site Scripts

(function () {
  'use strict';

  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');
  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Mobile menu toggle ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close mobile menu on link click
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // --- Scroll animations ---
  var animTargets =
    '.pillar, .program-card, .testimonial-card, .curriculum-item, ' +
    '.stat-card, .fit-item, .event-card, .step, .intro-text, ' +
    '.contact-info, .contact-form-wrap';

  document.querySelectorAll(animTargets).forEach(function (el) {
    el.classList.add('fade-up');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

  // --- Contact form (basic front-end handling) ---
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('parentName').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var interest = document.getElementById('interest').value;
      var message = document.getElementById('message').value.trim();

      var subject = encodeURIComponent('Website Inquiry from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + (phone || 'Not provided') + '\n' +
        'Interest: ' + (interest || 'Not specified') + '\n\n' +
        'Message:\n' + message
      );

      window.location.href = 'mailto:info@thinkcreative.ca?subject=' + subject + '&body=' + body;
    });
  }
})();
