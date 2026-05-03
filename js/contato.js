/* ============================================
   SPOTMYDEAL — contato.js
   Validação do formulário de contato
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  var form = document.getElementById('contact-form');
  if (!form) return;

  /* === VALIDAÇÃO INDIVIDUAL === */
  function validateField(field) {
    var value = field.value.trim();
    var error = field.parentElement.querySelector('.field-error');
    var valid = true;

    // Remove estado anterior
    field.classList.remove('input-error', 'input-ok');
    if (error) error.textContent = '';

    // Campo vazio
    if (!value) {
      if (error) error.textContent = 'Este campo é obrigatório.';
      field.classList.add('input-error');
      valid = false;
    }
    // Email
    else if (field.type === 'email') {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        if (error) error.textContent = 'Informe um e-mail válido.';
        field.classList.add('input-error');
        valid = false;
      }
    }
    // Mensagem mínima
    else if (field.id === 'mensagem' && value.length < 20) {
      if (error) error.textContent = 'Mínimo de 20 caracteres.';
      field.classList.add('input-error');
      valid = false;
    }

    if (valid) field.classList.add('input-ok');
    return valid;
  }

  /* === VALIDAÇÃO EM TEMPO REAL === */
  form.querySelectorAll('input, textarea, select').forEach(function (field) {
    field.addEventListener('blur', function () { validateField(field); });
    field.addEventListener('input', function () {
      if (field.classList.contains('input-error')) validateField(field);
    });
  });

  /* === SUBMIT === */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fields = form.querySelectorAll('input, textarea, select');
    var allValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      showFeedback('error', '⚠ Corrija os campos destacados antes de enviar.');
      return;
    }

    // Simula envio
    var btn = form.querySelector('.btn-submit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(function () {
      form.reset();
      form.querySelectorAll('input, textarea, select').forEach(function (f) {
        f.classList.remove('input-ok', 'input-error');
      });
      btn.textContent = 'Enviar Mensagem';
      btn.disabled = false;
      showFeedback('success', '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.');
    }, 1500);
  });

  /* === FEEDBACK VISUAL === */
  function showFeedback(type, message) {
    var existing = document.getElementById('form-feedback');
    if (existing) existing.remove();

    var div = document.createElement('div');
    div.id = 'form-feedback';
    div.className = 'form-feedback feedback-' + type;
    div.textContent = message;
    form.appendChild(div);

    setTimeout(function () {
      if (div.parentElement) div.remove();
    }, 5000);
  }

});
