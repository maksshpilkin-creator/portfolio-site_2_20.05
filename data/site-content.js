// @ts-check

/**
 * @typedef {{ title: string, description: string, url: string, image: string }} SiteMeta
 * @typedef {{ label: string, href: string }} NavigationItem
 * @typedef {{ title: string, type: string, description: string, url: string, image: string, alt: string, width: number, height: number, delay: number, outcome?: string, role?: string, signal?: string, tags?: string[] }} PortfolioItem
 * @typedef {{ number: string, title: string, description: string, delay: number }} NumberedItem
 * @typedef {{ value: string, label: string, description: string, target?: number, prefix?: string, suffix?: string }} StatItem
 * @typedef {{ title: string, description: string }} TextCard
 * @typedef {{ title: string, description: string, marker?: string }} ConversionCard
 * @typedef {{ question: string, answer: string }} FaqItem
 * @typedef {{ benefits: string[], projectTypes: string[], budgets: string[] }} ContactContent
 * @typedef {{ siteUrl: string, telegramUrl: string, meta: SiteMeta, navigation: NavigationItem[], portfolio: PortfolioItem[], audiences: ConversionCard[], services: NumberedItem[], deliverables: ConversionCard[], stats: StatItem[], values: TextCard[], trust: ConversionCard[], process: NumberedItem[], faq: FaqItem[], contact: ContactContent }} SiteContent
 */

/** @satisfies {SiteContent} */
export const siteContent = {
  siteUrl: 'https://devbymax.ru/',
  telegramUrl: 'https://t.me/devbymax',
  meta: {
    title: 'devbymax',
    description: 'Премиальные сайты, портфолио и AI-связки для бизнеса: сильный оффер, дизайн, запуск и путь к заявке в Telegram',
    url: 'https://devbymax.ru/',
    image: 'https://s10.iimage.su/s/02/gFdnVqNxzHGkuabCQzsa4ssT5FPo9Nnj2OF4kJoGP.png',
  },
  navigation: [
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Услуги', href: '#services' },
    { label: 'О студии', href: '#about' },
    { label: 'Как я веду проект', href: '#process' },
  ],
  portfolio: [
    {
      title: 'ЧистыйПёс',
      type: 'Сайт груминг-салона',
      description: 'Лендинг для записи на груминг: услуги, преимущества, визуальная подача и быстрый переход к заявке.',
      outcome: 'Собран путь от услуги к записи без лишних шагов.',
      role: 'Структура, визуал, адаптив, CTA',
      signal: 'Запись через быстрый контакт',
      tags: ['Локальный бизнес', 'Лендинг', 'Запись'],
      url: 'https://clean-dog.vercel.app/',
      image: 'img/portfolio-clean-dog.jpg',
      alt: 'Проект ЧистыйПёс',
      width: 1200,
      height: 675,
      delay: 1,
    },
    {
      title: 'Экспресс Оценка',
      type: 'Сервис оценки заявок',
      description: 'Сайт для презентации услуги: понятная структура, доверительный первый экран и быстрый контакт.',
      outcome: 'Услуга объясняется с первого экрана и ведет к обращению.',
      role: 'Оффер, дизайн, запуск',
      signal: 'Доверие + контакт',
      tags: ['Услуги', 'Доверие', 'Заявка'],
      url: 'https://ocenka-biznesa-spb.ru/',
      image: 'img/portfolio-express-ocenka.jpg',
      alt: 'Проект Экспресс Оценка',
      width: 1200,
      height: 675,
      delay: 2,
    },
    {
      title: 'Салон Фактура',
      type: 'Промо-сайт салона',
      description: 'Минималистичный сайт для локального бизнеса с акцентом на стиль, услуги и запись.',
      outcome: 'Премиальная подача помогает быстро оценить стиль и записаться.',
      role: 'Визуальная упаковка, UX, адаптив',
      signal: 'Стиль + запись',
      tags: ['Beauty', 'Промо', 'Мобильный UX'],
      url: 'https://factura-salon.vercel.app/#',
      image: 'img/portfolio-factura.jpg',
      alt: 'Проект Салон Фактура',
      width: 1200,
      height: 675,
      delay: 1,
    },
    {
      title: 'Колорист Кабаченко',
      type: 'Персональный сайт специалиста',
      description: 'Сайт-визитка для мастера с премиальной подачей, портфолио и удобной связью.',
      outcome: 'Личный бренд подан через работы, специализацию и простой контакт.',
      role: 'Портфолио, упаковка эксперта, CTA',
      signal: 'Личный бренд',
      tags: ['Эксперт', 'Портфолио', 'Запись'],
      url: 'https://v0-hair-salon-website-pearl-six.vercel.app/#',
      image: 'img/portfolio-kabachenko.jpg',
      alt: 'Проект Колорист Кабаченко',
      width: 1200,
      height: 675,
      delay: 2,
    },
  ],
  audiences: [
    {
      marker: '01',
      title: 'Локальный бизнес',
      description: 'Салоны, студии, мастера, клиники и сервисы, которым нужен понятный сайт для записи, звонков и заявок.',
    },
    {
      marker: '02',
      title: 'Услуги и эксперты',
      description: 'Упакую оффер, покажу кейсы, объясню преимущества и помогу клиенту быстрее понять, почему стоит обратиться именно к вам.',
    },
    {
      marker: '03',
      title: 'Запуск нового проекта',
      description: 'Быстро соберу первую версию сайта, чтобы проверить спрос, запустить рекламу или показать продукт партнёрам.',
    },
    {
      marker: '04',
      title: 'Бизнес в Telegram',
      description: 'Свяжу сайт с Telegram, ботом или Mini App, если заявки, каталог, квиз или запись удобнее вести внутри мессенджера.',
    },
  ],
  services: [
    { number: '01', title: 'Сайт', description: 'Лендинг, сайт услуг, промо-страница или небольшой корпоративный сайт под заявки.', delay: 1 },
    { number: '02', title: 'Telegram-бот', description: 'Автоматизация заявок, заказов, уведомлений и простых сценариев общения с клиентами.', delay: 2 },
    { number: '03', title: 'Дизайн', description: 'Структура, прототип и интерфейс, который выглядит современно и помогает принять решение.', delay: 3 },
    { number: '04', title: 'Трафик', description: 'Подготовка сайта к рекламе и SEO: понятные блоки, быстрые контакты, базовая аналитика.', delay: 1 },
    { number: '05', title: 'Под ключ', description: 'Сайт, форма заявки, Telegram-связка, запуск, проверка адаптива и поддержка после публикации.', delay: 2 },
    { number: '06', title: 'Заявки', description: 'Формы, заявки, таблицы, уведомления и сценарии, которые помогают бизнесу быстрее обрабатывать клиентов.', delay: 3 },
  ],
  deliverables: [
    {
      marker: 'СТРУКТУРА',
      title: 'Сайт не просто красивый, а продающий',
      description: 'Сначала собираю путь клиента: что он должен понять, чему поверить и какое действие сделать после просмотра страницы.',
    },
    {
      marker: 'ТЕКСТЫ',
      title: 'Помогаю сформулировать оффер',
      description: 'Не оставляю вас один на один с пустыми блоками: подскажу заголовки, смыслы, преимущества и вопросы, которые стоит закрыть.',
    },
    {
      marker: 'ЗАПУСК',
      title: 'Готовлю к реальным заявкам',
      description: 'Проверяю мобильную версию, кнопки, формы, скорость восприятия, Telegram-ссылки и базовые сценарии перед публикацией.',
    },
  ],
  stats: [
    { value: '7+', target: 7, suffix: '+', label: 'собранных проектов', description: 'Есть работы, по которым можно оценить визуал, структуру и подход к задачам.' },
    { value: '1–3', target: 3, prefix: '1–', label: 'дня до первого макета', description: 'Быстро показываю направление, чтобы вы видели проект уже на раннем этапе.' },
    { value: '5+', target: 5, suffix: '+', label: 'сценариев заявки', description: 'Формы, Telegram, кнопки, квизы, бот или простой путь к звонку.' },
    { value: 'Связь', label: 'по проекту', description: 'Отвечаю в рабочем темпе и заранее предупреждаю, когда нужен ваш фидбек.' },
  ],
  values: [
    { title: 'Разбираю задачу до дизайна', description: 'Сначала выясняю нишу, аудиторию, услугу, конкурентов и главную цель сайта.' },
    { title: 'Работаю по этапам', description: 'Фиксируем структуру, сроки, задачи и показываем промежуточный результат без хаоса.' },
    { title: 'Думаю о конверсии', description: 'Каждый блок должен помогать человеку понять ценность, довериться и оставить заявку.' },
    { title: 'Поддерживаю после запуска', description: 'Помогаю с правками, техническими вопросами и развитием проекта после публикации.' },
  ],
  trust: [
    {
      marker: 'ПОНЯТНО',
      title: 'Без технического тумана',
      description: 'Объясняю решения человеческим языком: что делаем, зачем это нужно и как это повлияет на заявки.',
    },
    {
      marker: 'ЧЕСТНО',
      title: 'Оценка до старта',
      description: 'После короткого обсуждения называю формат, примерный бюджет и сроки. Если задачу можно решить проще, скажу об этом.',
    },
    {
      marker: 'БЫСТРО',
      title: 'Первые результаты сразу',
      description: 'Не затягиваю проект: быстро собираю структуру и первый визуальный вариант, чтобы вы могли дать обратную связь.',
    },
    {
      marker: 'СПОКОЙНО',
      title: 'Запуск без брошенного сайта',
      description: 'После публикации проверяю основные сценарии и остаюсь на связи, если нужно поправить текст, блок или ссылку.',
    },
  ],
  process: [
    { number: '01', title: 'Заявка', description: 'Вы коротко рассказываете о бизнесе, задаче, сроках и желаемом результате.', delay: 1 },
    { number: '02', title: 'Анализ', description: 'Я изучаю нишу, конкурентов, текущие материалы и предлагаю оптимальный формат решения.', delay: 2 },
    { number: '03', title: 'Структура', description: 'Собираю блоки, смыслы, сценарий заявки и ответы на главные вопросы клиента.', delay: 3 },
    { number: '04', title: 'Дизайн', description: 'Создаю современный интерфейс под вашу аудиторию, услугу и уровень доверия, который нужно вызвать.', delay: 4 },
    { number: '05', title: 'Разработка', description: 'Собираю адаптивный сайт, подключаю формы, Telegram-ссылки и нужные интерактивные элементы.', delay: 5 },
    { number: '06', title: 'Запуск', description: 'Проверяю мобильную версию, кнопки, формы, базовую аналитику и публикую проект.', delay: 5 },
  ],
  faq: [
    {
      question: 'Сколько стоит сайт?',
      answer: 'Зависит от задачи. Небольшой лендинг обычно начинается от 10 000 ₽, более сложные сайты, Telegram-связки и проекты под ключ оцениваются после короткого обсуждения.',
    },
    {
      question: 'За сколько можно запустить проект?',
      answer: 'Первый вариант структуры или макета часто можно показать за 1–3 дня. Срок полного запуска зависит от объёма: количества блоков, текстов, интеграций и правок.',
    },
    {
      question: 'Что нужно от меня для старта?',
      answer: 'Достаточно рассказать, чем вы занимаетесь, кому продаёте, какие услуги важнее продвигать и куда должны приходить заявки. Если текстов нет, помогу собрать структуру и смыслы.',
    },
    {
      question: 'Можно ли сделать сайт без готового дизайна?',
      answer: 'Да. Я могу сам собрать визуальное направление, прототип и готовый интерфейс. От вас нужны вводные по бизнесу, примеры, которые нравятся, и обратная связь по этапам.',
    },
    {
      question: 'Вы помогаете после запуска?',
      answer: 'Да. После публикации остаюсь на связи: помогаю с небольшими правками, проверкой ссылок, форм, Telegram-переходов и дальнейшим развитием страницы.',
    },
  ],
  contact: {
    benefits: ['Бесплатная консультация', 'Оценка за несколько часов', 'Понятный план запуска', 'Без скрытых платежей'],
    projectTypes: ['Сайт', 'Telegram-бот', 'Дизайн', 'Автоматизация', 'Другое'],
    budgets: ['До 10 000 ₽', '10 000 – 30 000 ₽', '30 000 – 70 000 ₽', 'Свыше 70 000 ₽', 'Обсудим'],
  },
};
