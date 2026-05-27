function getFormValue(formData, name) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function buildTelegramMessage(form, labels) {
  const formData = new FormData(form);
  const lines = [
    labels.title,
    `${labels.projectType}: ${getFormValue(formData, 'projectType')}`,
    `${labels.budget}: ${getFormValue(formData, 'budget')}`,
    `${labels.name}: ${getFormValue(formData, 'name')}`,
    `${labels.contact}: ${getFormValue(formData, 'contact')}`,
    `${labels.message}: ${getFormValue(formData, 'message')}`,
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

export function initContactForm(getContent) {
  const form = document.querySelector('[data-contact-form]');
  if (!(form instanceof HTMLFormElement)) return;

  const status = form.querySelector('[data-form-status]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const content = getContent();
    const message = buildTelegramMessage(form, content.telegramMessage);
    const telegramWindow = window.open(content.telegramUrl, '_blank');
    if (telegramWindow) telegramWindow.opener = null;
    const copied = await copyMessage(message);

    if (status) {
      status.textContent = copied
        ? content.ui.copied
        : content.ui.fallback;
    }

    if (!telegramWindow) window.location.href = content.telegramUrl;
  });
}
