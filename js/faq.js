/* ============================================
   SPOTMYDEAL — faq.js
   Accordion das perguntas frequentes
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  var items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    var icon = item.querySelector('.faq-icon');

    if (!question || !answer) return;

    // Fecha todos inicialmente
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.35s ease, padding 0.35s ease';

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // Fecha todos
      items.forEach(function (other) {
        other.classList.remove('open');
        var otherAnswer = other.querySelector('.faq-answer');
        var otherIcon = other.querySelector('.faq-icon');
        if (otherAnswer) otherAnswer.style.maxHeight = '0';
        if (otherIcon) otherIcon.textContent = '+';
      });

      // Abre o clicado
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        if (icon) icon.textContent = '−';
      }
    });
  });

});
