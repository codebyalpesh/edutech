// =========================
// DOCUMENT READY
// =========================
$(document).ready(() => {
  initTestimonialCarousel();
  initScrollTopButton();
  initRevealOnScroll();
  initNavbarDropdown();
});

// =========================
// TESTIMONIAL CAROUSEL
// =========================
function initTestimonialCarousel() {
  $(".testimonial__carousel").owlCarousel({
    loop: true,              
    margin: 16,              
    nav: true,               
    dots: true,              
    autoplay: true,          
    autoplayTimeout: 3000,   
    responsive: {            
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
}

// =========================
// SCROLL TOP BUTTON
// =========================
function initScrollTopButton() {
  const topBtn = document.createElement('button');
  topBtn.className = 'scroll-top';
  topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(topBtn);

  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 500);
  });

  // Smooth scroll to top on click
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =========================
// SCROLL REVEAL ANIMATIONS
// =========================
function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  function reveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      el.classList.toggle('active', elementTop < windowHeight - revealPoint);
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // Trigger on page load
}

// =========================
// NAVBAR DROPDOWN HANDLING
// =========================
function initNavbarDropdown() {
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(item => {
    // ---- Desktop Hover ----
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 991) item.classList.add('show');
    });
    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 991) item.classList.remove('show');
    });

    // ---- Mobile Click ----
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        closeOtherDropdowns(this, dropdowns);
        this.classList.toggle('show');
      }
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.dropdown')) {
      dropdowns.forEach(el => el.classList.remove('show'));
    }
  });
}

// Close all other dropdowns except the current
function closeOtherDropdowns(current, dropdowns) {
  dropdowns.forEach(el => {
    if (el !== current) el.classList.remove('show');
  });
}