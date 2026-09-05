/**
 * Contact Form Handler with EmailJS Integration
 * Supports PT/EN Multilingual Feedback Messages
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const statusBox = document.getElementById('contact-status');

  if (!contactForm) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonHtml = submitButton ? submitButton.innerHTML : 'Enviar';

  // Chaves de Configuração do EmailJS
  // Substitua com seus identificadores obtidos no painel do EmailJS (https://www.emailjs.com/)
  const EMAILJS_SERVICE_ID = contactForm.getAttribute('data-service-id') || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = contactForm.getAttribute('data-template-id') || 'YOUR_TEMPLATE_ID';

  // Mensagens traduzidas vindas do data-attribute (suporte PT e EN)
  const messages = {
    success: contactForm.getAttribute('data-success-msg') || 'Mensagem enviada com sucesso!',
    error: contactForm.getAttribute('data-error-msg') || 'Erro ao enviar mensagem. Tente novamente mais tarde.',
    validation: contactForm.getAttribute('data-validation-msg') || 'Por favor, preencha todos os campos obrigatórios.',
    sending: contactForm.getAttribute('data-sending-msg') || 'Enviando...'
  };

  /**
   * Exibe mensagem de feedback visual na tela
   * @param {'success' | 'error'} type 
   * @param {string} text 
   */
  function showStatus(type, text) {
    if (!statusBox) return;
    statusBox.className = `form-status ${type}`;
    statusBox.textContent = text;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Limpa mensagem de status
   */
  function clearStatus() {
    if (!statusBox) return;
    statusBox.className = 'form-status';
    statusBox.textContent = '';
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearStatus();

    const fromName = document.getElementById('from_name')?.value.trim();
    const replyTo = document.getElementById('reply_to')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    // Validação básica dos campos
    if (!fromName || !replyTo || !message) {
      showStatus('error', messages.validation);
      return;
    }

    // Feedback visual de envio (botão desabilitado com spinner)
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${messages.sending}`;
    }

    // Verifica se o SDK do EmailJS está carregado
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS SDK não foi carregado corretamente.');
      showStatus('error', messages.error);
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHtml;
      }
      return;
    }

    // Envio do formulário via EmailJS
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
      .then((response) => {
        console.log('EmailJS Success:', response.status, response.text);
        showStatus('success', messages.success);
        contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showStatus('error', messages.error);
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonHtml;
        }
      });
  });
});
