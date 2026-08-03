/**
 * Draft legal documents (oferta, privacy policy), sourced from
 * tempo-legal-docs.docx. These are drafts, not legal advice — before
 * publishing, the seller's real details (ФОП name, РНОКПП, address, email,
 * domain) need to replace the [___] placeholders below, and a lawyer
 * should review them (the source doc flags this explicitly, especially
 * for EU sales). The English and Spanish versions are translations of the
 * same draft and need the same legal review before publishing.
 */
import type { Locale } from "@/lib/locale";

export interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro?: string;
  sections: readonly LegalSection[];
}

export const legalUi: Record<Locale, { back: string; updated: string }> = {
  uk: { back: "← На головну", updated: "Дата оновлення:" },
  en: { back: "← Back to home", updated: "Last updated:" },
  es: { back: "← Volver al inicio", updated: "Última actualización:" },
};

export const oferta: Record<Locale, LegalDoc> = {
  uk: {
    title: "Публічна оферта",
    updated: "[___]",
    sections: [
      {
        heading: "1. Загальні положення",
        paragraphs: [
          "1.1. Ця публічна оферта (далі — «Оферта») є офіційною пропозицією ФОП [ПІБ], РНОКПП [___], (далі — «Продавець») укласти договір купівлі-продажу цифрових товарів, розміщених на сайті [домен] (далі — «Сайт»).",
          "1.2. Акцептом Оферти є оплата Товару. Оплачуючи Товар, Покупець підтверджує, що ознайомився з умовами Оферти та Політикою конфіденційності і приймає їх у повному обсязі.",
        ],
      },
      {
        heading: "2. Предмет договору",
        paragraphs: [
          "2.1. Товар — цифрові продукти: (а) електронні планери у форматі файлів Excel із налаштованими формулами, графіками та дизайном (тарифи «Старт», «Система», «Premium»); (б) доступ до веб-застосунку «Tempo Game» у статусі раннього доступу (бета).",
          "2.2. Товар є результатом інтелектуальної діяльності Продавця та надається для особистого некомерційного використання.",
        ],
      },
      {
        heading: "3. Ціна та оплата",
        paragraphs: [
          "3.1. Ціни вказані на Сайті. Продавець має право змінювати ціни; для Покупця діє ціна на момент оплати. Акційні ціни діють протягом строку, зазначеного на Сайті.",
          "3.2. Оплата здійснюється через платіжний сервіс WayForPay [та/або інший провайдер]. Продавець не отримує та не зберігає дані платіжних карток.",
          "3.3. Платіж є разовим. Підписки та автоматичні списання відсутні.",
        ],
      },
      {
        heading: "4. Доставка",
        paragraphs: [
          "4.1. Товар надсилається на email, вказаний Покупцем під час оплати, протягом 24 годин з моменту оплати (зазвичай — протягом кількох хвилин).",
          "4.2. Якщо лист не надійшов, Покупець звертається до підтримки: Telegram [@tempo_help] або email [___]. Продавець повторно надсилає Товар.",
        ],
      },
      {
        heading: "5. Tempo Game (ранній доступ)",
        paragraphs: [
          "5.1. Застосунок «Tempo Game» надається у статусі «бета / ранній доступ»: повна функціональність доступна на компʼютері; мобільні версії перебувають у розробці. Оновлення надаються Покупцеві безкоштовно.",
          "5.2. Продавець докладає розумних зусиль для розвитку застосунку, але не гарантує конкретних строків виходу окремих функцій.",
        ],
      },
      {
        heading: "6. Інтелектуальна власність",
        paragraphs: [
          "6.1. Придбання Товару надає Покупцеві невиключну ліцензію на особисте використання. Заборонено: перепродаж, розповсюдження, публікація файлів чи доступів, зокрема у зміненому вигляді.",
        ],
      },
      {
        heading: "7. Відповідальність",
        paragraphs: [
          "7.1. Tempo — інструмент для планування. Продавець не гарантує досягнення фінансових чи інших результатів Покупця.",
          "7.2. Продавець не несе відповідальності за неможливість використання Товару через відсутність у Покупця необхідного програмного забезпечення (зокрема Microsoft Excel) або технічні проблеми на боці Покупця.",
        ],
      },
      {
        heading: "8. Персональні дані",
        paragraphs: [
          "8.1. Обробка персональних даних здійснюється відповідно до Політики конфіденційності.",
        ],
      },
      {
        heading: "9. Інші умови",
        paragraphs: [
          "9.1. Продавець може змінювати Оферту; нова редакція діє з моменту публікації на Сайті та не поширюється на вже оплачені замовлення.",
          "9.2. Реквізити Продавця: ФОП [ПІБ], РНОКПП [___], адреса: [___], email: [___], Telegram: [@tempo_help].",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    updated: "[___]",
    sections: [
      {
        heading: "1. General provisions",
        paragraphs: [
          "1.1. These Terms of Service (the \"Terms\") are an official offer by Sole Proprietor [Name], Tax ID [___], (the \"Seller\") to enter into a sales agreement for the digital products listed on the website [domain] (the \"Site\").",
          "1.2. Acceptance of these Terms occurs upon payment for the Product. By paying for the Product, the Buyer confirms they have read the Terms and the Privacy Policy and accepts them in full.",
        ],
      },
      {
        heading: "2. Subject of the agreement",
        paragraphs: [
          "2.1. The Product consists of digital goods: (a) electronic planners in Excel file format with pre-built formulas, charts, and design (Start, System, and Premium plans); (b) access to the \"Tempo Game\" web app in early-access (beta) status.",
          "2.2. The Product is the result of the Seller's intellectual work and is provided for personal, non-commercial use.",
        ],
      },
      {
        heading: "3. Price and payment",
        paragraphs: [
          "3.1. Prices are listed on the Site. The Seller may change prices; the Buyer pays the price in effect at the time of payment. Promotional prices apply for the period stated on the Site.",
          "3.2. Payment is processed via the WayForPay payment service [and/or another provider]. The Seller does not receive or store payment card details.",
          "3.3. Payment is one-time. There are no subscriptions or recurring charges.",
        ],
      },
      {
        heading: "4. Delivery",
        paragraphs: [
          "4.1. The Product is sent to the email address provided by the Buyer at checkout, within 24 hours of payment (usually within a few minutes).",
          "4.2. If the email doesn't arrive, the Buyer should contact support: Telegram [@tempo_help] or email [___]. The Seller will resend the Product.",
        ],
      },
      {
        heading: "5. Tempo Game (early access)",
        paragraphs: [
          "5.1. The \"Tempo Game\" app is provided in \"beta / early access\" status: full functionality is available on desktop; mobile versions are in development. Updates are provided to the Buyer free of charge.",
          "5.2. The Seller makes reasonable efforts to develop the app further but does not guarantee specific release dates for individual features.",
        ],
      },
      {
        heading: "6. Intellectual property",
        paragraphs: [
          "6.1. Purchasing the Product grants the Buyer a non-exclusive license for personal use. Prohibited: resale, distribution, or publication of the files or access, including in modified form.",
        ],
      },
      {
        heading: "7. Liability",
        paragraphs: [
          "7.1. Tempo is a planning tool. The Seller does not guarantee any financial or other results for the Buyer.",
          "7.2. The Seller is not liable for the Buyer's inability to use the Product due to the Buyer lacking the necessary software (such as Microsoft Excel) or technical issues on the Buyer's side.",
        ],
      },
      {
        heading: "8. Personal data",
        paragraphs: [
          "8.1. Personal data is processed in accordance with the Privacy Policy.",
        ],
      },
      {
        heading: "9. Other terms",
        paragraphs: [
          "9.1. The Seller may amend these Terms; the new version takes effect upon publication on the Site and does not apply to orders already paid for.",
          "9.2. Seller details: Sole Proprietor [Name], Tax ID [___], address: [___], email: [___], Telegram: [@tempo_help].",
        ],
      },
    ],
  },
  es: {
    title: "Oferta pública",
    updated: "[___]",
    sections: [
      {
        heading: "1. Disposiciones generales",
        paragraphs: [
          "1.1. Esta oferta pública (la «Oferta») es una propuesta oficial de [Nombre del vendedor], NIF/CIF [___], (el «Vendedor») para celebrar un contrato de compraventa de los productos digitales publicados en el sitio [dominio] (el «Sitio»).",
          "1.2. La aceptación de la Oferta se produce con el pago del Producto. Al pagar el Producto, el Comprador confirma que ha leído los términos de la Oferta y la Política de Privacidad y los acepta en su totalidad.",
        ],
      },
      {
        heading: "2. Objeto del contrato",
        paragraphs: [
          "2.1. El Producto consiste en productos digitales: (a) agendas electrónicas en formato Excel con fórmulas, gráficos y diseño preconfigurados (planes Start, System y Premium); (b) acceso a la aplicación web «Tempo Game» en estado de acceso anticipado (beta).",
          "2.2. El Producto es resultado del trabajo intelectual del Vendedor y se entrega para uso personal y no comercial.",
        ],
      },
      {
        heading: "3. Precio y pago",
        paragraphs: [
          "3.1. Los precios se indican en el Sitio. El Vendedor puede modificar los precios; al Comprador se le aplica el precio vigente en el momento del pago. Los precios promocionales son válidos durante el período indicado en el Sitio.",
          "3.2. El pago se realiza a través del servicio de pago WayForPay [y/u otro proveedor]. El Vendedor no recibe ni almacena los datos de las tarjetas de pago.",
          "3.3. El pago es único. No existen suscripciones ni cargos automáticos.",
        ],
      },
      {
        heading: "4. Entrega",
        paragraphs: [
          "4.1. El Producto se envía al correo electrónico indicado por el Comprador al pagar, dentro de las 24 horas siguientes al pago (por lo general, en pocos minutos).",
          "4.2. Si el correo no llega, el Comprador debe contactar al soporte: Telegram [@tempo_help] o email [___]. El Vendedor volverá a enviar el Producto.",
        ],
      },
      {
        heading: "5. Tempo Game (acceso anticipado)",
        paragraphs: [
          "5.1. La aplicación «Tempo Game» se ofrece en estado de «beta / acceso anticipado»: la funcionalidad completa está disponible en computadora; las versiones móviles están en desarrollo. Las actualizaciones se entregan al Comprador de forma gratuita.",
          "5.2. El Vendedor hace esfuerzos razonables para seguir desarrollando la aplicación, pero no garantiza plazos concretos para el lanzamiento de funciones específicas.",
        ],
      },
      {
        heading: "6. Propiedad intelectual",
        paragraphs: [
          "6.1. La compra del Producto otorga al Comprador una licencia no exclusiva para uso personal. Está prohibido: la reventa, distribución o publicación de los archivos o accesos, incluso en forma modificada.",
        ],
      },
      {
        heading: "7. Responsabilidad",
        paragraphs: [
          "7.1. Tempo es una herramienta de planificación. El Vendedor no garantiza que el Comprador obtenga resultados financieros ni de ningún otro tipo.",
          "7.2. El Vendedor no se hace responsable de la imposibilidad de usar el Producto debido a que el Comprador no cuente con el software necesario (por ejemplo, Microsoft Excel) o por problemas técnicos del lado del Comprador.",
        ],
      },
      {
        heading: "8. Datos personales",
        paragraphs: [
          "8.1. El tratamiento de datos personales se realiza conforme a la Política de Privacidad.",
        ],
      },
      {
        heading: "9. Otras condiciones",
        paragraphs: [
          "9.1. El Vendedor puede modificar la Oferta; la nueva versión entra en vigor desde su publicación en el Sitio y no se aplica a los pedidos ya pagados.",
          "9.2. Datos del Vendedor: [Nombre], NIF/CIF [___], dirección: [___], email: [___], Telegram: [@tempo_help].",
        ],
      },
    ],
  },
};

export const privacyPolicy: Record<Locale, LegalDoc> = {
  uk: {
    title: "Політика конфіденційності",
    updated: "[___]",
    sections: [
      {
        heading: "1. Хто ми",
        paragraphs: [
          "Володілець даних: ФОП [ПІБ], РНОКПП [___], email [___] (далі — «ми»). Політика описує обробку даних відвідувачів сайту [домен] та покупців.",
        ],
      },
      {
        heading: "2. Які дані ми збираємо",
        paragraphs: [
          "Дані замовлення: email, імʼя (якщо вказано) — для доставки товару та підтримки.",
          "Платіжні дані: обробляються платіжним провайдером (WayForPay [/інший]); ми не отримуємо і не зберігаємо реквізити карток.",
          "Технічні дані: IP, тип пристрою, cookies, дії на сайті — через сервіси аналітики (Google Analytics 4, Meta Pixel) для покращення сайту та реклами.",
          "Звернення в підтримку: вміст листування в Telegram/email.",
        ],
      },
      {
        heading: "3. Цілі та підстави обробки",
        paragraphs: [
          "Виконання договору (доставка товару, підтримка); законний інтерес (аналітика, захист від шахрайства); згода (маркетингові cookies/пікселі — для відвідувачів з ЄС збираються лише після згоди через cookie-банер).",
        ],
      },
      {
        heading: "4. Cookies та аналітика",
        paragraphs: [
          "Сайт використовує cookies: технічні (обовʼязкові), аналітичні (GA4) та маркетингові (Meta Pixel — для ретаргетингу). Керувати згодою можна через банер cookies або налаштування браузера.",
        ],
      },
      {
        heading: "5. Кому передаються дані",
        paragraphs: [
          "Платіжному провайдеру (для проведення оплати), сервісам аналітики (Google, Meta), email-сервісу доставки листів [назва, якщо є]. Ми не продаємо персональні дані третім особам.",
        ],
      },
      {
        heading: "6. Строки зберігання",
        paragraphs: [
          "Дані замовлень — протягом строків, встановлених податковим законодавством; аналітичні дані — відповідно до налаштувань сервісів (GA4 — до 14 місяців); листування підтримки — до 3 років.",
        ],
      },
      {
        heading: "7. Ваші права",
        paragraphs: [
          "Ви маєте право на доступ до своїх даних, виправлення, видалення, обмеження обробки, заперечення проти обробки та відкликання згоди. Для користувачів з ЄС (GDPR): додатково — право на перенесення даних та на скаргу до наглядового органу вашої країни. Звернення: [email] — відповідаємо протягом 30 днів.",
        ],
      },
      {
        heading: "8. Діти",
        paragraphs: [
          "Сайт не призначений для осіб молодших 16 років без згоди батьків або опікунів.",
        ],
      },
      {
        heading: "9. Зміни політики",
        paragraphs: [
          "Актуальна редакція завжди опублікована на цій сторінці із зазначенням дати оновлення. Дата: [___].",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "[___]",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "Data controller: Sole Proprietor [Name], Tax ID [___], email [___] (\"we\"). This Policy describes how we process the data of visitors and buyers on the website [domain].",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "Order data: email, name (if provided) — for product delivery and support.",
          "Payment data: processed by the payment provider (WayForPay [/other]); we do not receive or store card details.",
          "Technical data: IP address, device type, cookies, on-site activity — via analytics services (Google Analytics 4, Meta Pixel) to improve the site and advertising.",
          "Support inquiries: the contents of correspondence via Telegram/email.",
        ],
      },
      {
        heading: "3. Purposes and legal basis for processing",
        paragraphs: [
          "Performance of the contract (product delivery, support); legitimate interest (analytics, fraud prevention); consent (marketing cookies/pixels — for EU visitors, collected only after consent via the cookie banner).",
        ],
      },
      {
        heading: "4. Cookies and analytics",
        paragraphs: [
          "The Site uses cookies: essential (required), analytics (GA4), and marketing (Meta Pixel — for retargeting). You can manage consent via the cookie banner or your browser settings.",
        ],
      },
      {
        heading: "5. Who we share data with",
        paragraphs: [
          "The payment provider (to process payments), analytics services (Google, Meta), the email delivery service [name, if any]. We do not sell personal data to third parties.",
        ],
      },
      {
        heading: "6. Retention periods",
        paragraphs: [
          "Order data — for the periods required by tax law; analytics data — according to service settings (GA4 — up to 14 months); support correspondence — up to 3 years.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "You have the right to access, correct, delete, and restrict the processing of your data, to object to processing, and to withdraw consent. For EU users (GDPR): additionally, the right to data portability and to lodge a complaint with your country's supervisory authority. Contact: [email] — we respond within 30 days.",
        ],
      },
      {
        heading: "8. Children",
        paragraphs: [
          "The Site is not intended for individuals under 16 without parental or guardian consent.",
        ],
      },
      {
        heading: "9. Changes to this Policy",
        paragraphs: [
          "The current version is always published on this page along with the update date. Date: [___].",
        ],
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    updated: "[___]",
    sections: [
      {
        heading: "1. Quiénes somos",
        paragraphs: [
          "Responsable de los datos: [Nombre del vendedor], NIF/CIF [___], email [___] («nosotros»). Esta Política describe el tratamiento de los datos de los visitantes y compradores del sitio [dominio].",
        ],
      },
      {
        heading: "2. Qué datos recopilamos",
        paragraphs: [
          "Datos del pedido: email, nombre (si se indica) — para la entrega del producto y el soporte.",
          "Datos de pago: procesados por el proveedor de pagos (WayForPay [/otro]); no recibimos ni almacenamos los datos de las tarjetas.",
          "Datos técnicos: IP, tipo de dispositivo, cookies, actividad en el sitio — mediante servicios de analítica (Google Analytics 4, Meta Pixel) para mejorar el sitio y la publicidad.",
          "Consultas de soporte: el contenido de la correspondencia por Telegram/email.",
        ],
      },
      {
        heading: "3. Finalidades y base legal del tratamiento",
        paragraphs: [
          "Ejecución del contrato (entrega del producto, soporte); interés legítimo (analítica, prevención de fraude); consentimiento (cookies/píxeles de marketing — para visitantes de la UE, se recopilan solo tras el consentimiento mediante el banner de cookies).",
        ],
      },
      {
        heading: "4. Cookies y analítica",
        paragraphs: [
          "El Sitio utiliza cookies: técnicas (obligatorias), analíticas (GA4) y de marketing (Meta Pixel — para retargeting). Puedes gestionar el consentimiento a través del banner de cookies o la configuración de tu navegador.",
        ],
      },
      {
        heading: "5. A quién se transfieren los datos",
        paragraphs: [
          "Al proveedor de pagos (para procesar el pago), a servicios de analítica (Google, Meta), al servicio de envío de emails [nombre, si aplica]. No vendemos datos personales a terceros.",
        ],
      },
      {
        heading: "6. Plazos de conservación",
        paragraphs: [
          "Los datos de los pedidos — durante los plazos establecidos por la legislación fiscal; los datos analíticos — según la configuración de cada servicio (GA4 — hasta 14 meses); la correspondencia de soporte — hasta 3 años.",
        ],
      },
      {
        heading: "7. Tus derechos",
        paragraphs: [
          "Tienes derecho a acceder a tus datos, rectificarlos, eliminarlos, limitar su tratamiento, oponerte a su tratamiento y retirar tu consentimiento. Para usuarios de la UE (RGPD): además, derecho a la portabilidad de los datos y a presentar una reclamación ante la autoridad de control de tu país. Contacto: [email] — respondemos en un plazo de 30 días.",
        ],
      },
      {
        heading: "8. Menores",
        paragraphs: [
          "El Sitio no está dirigido a personas menores de 16 años sin el consentimiento de sus padres o tutores.",
        ],
      },
      {
        heading: "9. Cambios en esta Política",
        paragraphs: [
          "La versión vigente siempre está publicada en esta página, junto con la fecha de actualización. Fecha: [___].",
        ],
      },
    ],
  },
};
