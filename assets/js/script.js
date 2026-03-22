$(document).ready(function(){
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
});

// =========================
// SCROLL TOP BUTTON
// =========================

// Create button
const topBtn = document.createElement('button');
topBtn.className = 'scroll-top';
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(topBtn);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

// Smooth scroll to top on click
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; // adjust for trigger point

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // optional if you want repeat animation
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


document.querySelectorAll('.nav-item.dropdown').forEach(item => {

  /* Desktop Hover */
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 991) {
      item.classList.add('show');
    }
  });

  item.addEventListener('mouseleave', () => {
    if (window.innerWidth > 991) {
      item.classList.remove('show');
    }
  });

  /* Mobile Click */
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 991) {
      e.preventDefault();

      // Close other dropdowns
      document.querySelectorAll('.nav-item.dropdown').forEach(el => {
        if (el !== this) el.classList.remove('show');
      });

      this.classList.toggle('show');
    }
  });

});

/* Close dropdown if clicked outside */
document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav-item.dropdown')) {
    document.querySelectorAll('.nav-item.dropdown')
      .forEach(el => el.classList.remove('show'));
  }
});