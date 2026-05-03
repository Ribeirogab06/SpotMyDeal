/* ============================================
   SPOTMYDEAL — main.js
   Funcionalidades globais: menu, scroll, nav
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* === MENU HAMBÚRGUER === */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Fecha ao clicar em link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* === NAVBAR SCROLL === */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.style.background = 'rgba(8, 14, 20, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
      } else {
        navbar.style.background = 'rgba(8, 14, 20, 0.9)';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  /* === ACTIVE LINK === */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* === ANIMAÇÃO DE ENTRADA (scroll reveal simples) === */
  var reveals = document.querySelectorAll('.reveal');

  function checkReveal() {
    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal();

});
