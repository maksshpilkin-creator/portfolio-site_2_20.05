function getFormValue(formData, name) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function buildTelegramMessage(form) {
  const formData = new FormData(form);
  const lines = [
    'Новая заявка с сайта devbymax',
    `Что нужно: ${getFormValue(formData, 'projectType')}`,
    `Бюджет: ${getFormValue(formData, 'budget')}`,
    `Имя: ${getFormValue(formData, 'name')}`,
    `Контакт: ${getFormValue(formData, 'contact')}`,
    `О проекте: ${getFormValue(formData, 'message')}`,
  ];

  return lines.filter((line) => !line.endsWith(': ')).join('\n');
}

async function copyMessage(message) {
  if (!navigator.clipboard || !window.isSecureContext) return false;

  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch {
    return false;
  }
}

export function initContactForm({ telegramUrl }) {
  const form = document.querySelector('[data-contact-form]');
  if (!(form instanceof HTMLFormElement)) return;

  const status = form.querySelector('[data-form-status]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const message = buildTelegramMessage(form);
    const telegramWindow = window.open(telegramUrl, '_blank');
    if (telegramWindow) telegramWindow.opener = null;
    const copied = await copyMessage(message);

    if (status) {
      status.textContent = copied
        ? 'Заявка скопирована. Открываю Telegram - вставьте сообщение в чат.'
        : 'Открываю Telegram. Скопируйте описание проекта из формы и отправьте в чат.';
    }

    if (!telegramWindow) window.location.href = telegramUrl;
  });
}
