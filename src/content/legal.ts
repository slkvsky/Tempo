/**
 * Draft legal documents (oferta, privacy policy). These are drafts, not
 * legal advice — a lawyer should review them before publishing, especially
 * for EU sales. Placeholders still open: contact e-mail and the ЄДР
 * registration record number for the oferta. The English and Spanish
 * versions are translations of the same draft and need the same legal
 * review.
 */
import type { Locale } from "@/lib/locale";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "table"; headers: readonly string[]; rows: readonly (readonly string[])[] }
  | { type: "note"; text: string };

export interface LegalSection {
  heading: string;
  blocks: readonly LegalBlock[];
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
        blocks: [
          {
            type: "p",
            text: "1.1. Ця публічна оферта (далі — «Оферта») є офіційною пропозицією ФОП Ломака Олександр Сергійович, РНОКПП 3712001990, (далі — «Продавець») укласти договір купівлі-продажу цифрових товарів, розміщених на сайті tempo.in.ua (далі — «Сайт»).",
          },
          {
            type: "p",
            text: "1.2. Акцептом Оферти є оплата Товару. Оплачуючи Товар, Покупець підтверджує, що ознайомився з умовами Оферти та Політикою конфіденційності і приймає їх у повному обсязі.",
          },
        ],
      },
      {
        heading: "2. Предмет договору",
        blocks: [
          {
            type: "p",
            text: "2.1. Товар — цифрові продукти: (а) електронні планери у форматі файлів Excel із налаштованими формулами, графіками та дизайном (тарифи «Старт», «Система», «Premium»); (б) доступ до веб-застосунку «Tempo Game» у статусі раннього доступу (бета).",
          },
          {
            type: "p",
            text: "2.2. Товар є результатом інтелектуальної діяльності Продавця та надається для особистого некомерційного використання.",
          },
        ],
      },
      {
        heading: "3. Ціна та оплата",
        blocks: [
          {
            type: "p",
            text: "3.1. Ціни вказані на Сайті. Продавець має право змінювати ціни; для Покупця діє ціна на момент оплати. Акційні ціни діють протягом строку, зазначеного на Сайті.",
          },
          {
            type: "p",
            text: "3.2. Оплата здійснюється через платіжний сервіс WayForPay [та/або інший провайдер]. Продавець не отримує та не зберігає дані платіжних карток.",
          },
          { type: "p", text: "3.3. Платіж є разовим. Підписки та автоматичні списання відсутні." },
        ],
      },
      {
        heading: "4. Доставка",
        blocks: [
          {
            type: "p",
            text: "4.1. Товар надсилається на email, вказаний Покупцем під час оплати, протягом 24 годин з моменту оплати (зазвичай — протягом кількох хвилин).",
          },
          {
            type: "p",
            text: "4.2. Якщо лист не надійшов, Покупець звертається до підтримки: Telegram @tempo_help або email [___]. Продавець повторно надсилає Товар.",
          },
        ],
      },
      {
        heading: "5. Tempo Game (ранній доступ)",
        blocks: [
          {
            type: "p",
            text: "5.1. Застосунок «Tempo Game» надається у статусі «бета / ранній доступ»: повна функціональність доступна на компʼютері; мобільні версії перебувають у розробці. Оновлення надаються Покупцеві безкоштовно.",
          },
          {
            type: "p",
            text: "5.2. Продавець докладає розумних зусиль для розвитку застосунку, але не гарантує конкретних строків виходу окремих функцій.",
          },
        ],
      },
      {
        heading: "6. Інтелектуальна власність",
        blocks: [
          {
            type: "p",
            text: "6.1. Придбання Товару надає Покупцеві невиключну ліцензію на особисте використання. Заборонено: перепродаж, розповсюдження, публікація файлів чи доступів, зокрема у зміненому вигляді.",
          },
        ],
      },
      {
        heading: "7. Відповідальність",
        blocks: [
          {
            type: "p",
            text: "7.1. Tempo — інструмент для планування. Продавець не гарантує досягнення фінансових чи інших результатів Покупця.",
          },
          {
            type: "p",
            text: "7.2. Продавець не несе відповідальності за неможливість використання Товару через відсутність у Покупця необхідного програмного забезпечення (зокрема Microsoft Excel) або технічні проблеми на боці Покупця.",
          },
        ],
      },
      {
        heading: "8. Персональні дані",
        blocks: [
          {
            type: "p",
            text: "8.1. Обробка персональних даних здійснюється відповідно до Політики конфіденційності.",
          },
        ],
      },
      {
        heading: "9. Інші умови",
        blocks: [
          {
            type: "p",
            text: "9.1. Продавець може змінювати Оферту; нова редакція діє з моменту публікації на Сайті та не поширюється на вже оплачені замовлення.",
          },
          {
            type: "p",
            text: "9.2. Реквізити Продавця: ФОП Ломака Олександр Сергійович, РНОКПП 3712001990, місце реєстрації: Київ, Україна, IBAN: UA563220010000026005380018433, email: [___], Telegram: @tempo_help.",
          },
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
        blocks: [
          {
            type: "p",
            text: "1.1. These Terms of Service (the \"Terms\") are an official offer by Sole Proprietor Oleksandr Lomaka, Tax ID 3712001990, (the \"Seller\") to enter into a sales agreement for the digital products listed on the website tempo.in.ua (the \"Site\").",
          },
          {
            type: "p",
            text: "1.2. Acceptance of these Terms occurs upon payment for the Product. By paying for the Product, the Buyer confirms they have read the Terms and the Privacy Policy and accepts them in full.",
          },
        ],
      },
      {
        heading: "2. Subject of the agreement",
        blocks: [
          {
            type: "p",
            text: "2.1. The Product consists of digital goods: (a) electronic planners in Excel file format with pre-built formulas, charts, and design (Start, System, and Premium plans); (b) access to the \"Tempo Game\" web app in early-access (beta) status.",
          },
          {
            type: "p",
            text: "2.2. The Product is the result of the Seller's intellectual work and is provided for personal, non-commercial use.",
          },
        ],
      },
      {
        heading: "3. Price and payment",
        blocks: [
          {
            type: "p",
            text: "3.1. Prices are listed on the Site. The Seller may change prices; the Buyer pays the price in effect at the time of payment. Promotional prices apply for the period stated on the Site.",
          },
          {
            type: "p",
            text: "3.2. Payment is processed via the WayForPay payment service [and/or another provider]. The Seller does not receive or store payment card details.",
          },
          { type: "p", text: "3.3. Payment is one-time. There are no subscriptions or recurring charges." },
        ],
      },
      {
        heading: "4. Delivery",
        blocks: [
          {
            type: "p",
            text: "4.1. The Product is sent to the email address provided by the Buyer at checkout, within 24 hours of payment (usually within a few minutes).",
          },
          {
            type: "p",
            text: "4.2. If the email doesn't arrive, the Buyer should contact support: Telegram @tempo_help or email [___]. The Seller will resend the Product.",
          },
        ],
      },
      {
        heading: "5. Tempo Game (early access)",
        blocks: [
          {
            type: "p",
            text: "5.1. The \"Tempo Game\" app is provided in \"beta / early access\" status: full functionality is available on desktop; mobile versions are in development. Updates are provided to the Buyer free of charge.",
          },
          {
            type: "p",
            text: "5.2. The Seller makes reasonable efforts to develop the app further but does not guarantee specific release dates for individual features.",
          },
        ],
      },
      {
        heading: "6. Intellectual property",
        blocks: [
          {
            type: "p",
            text: "6.1. Purchasing the Product grants the Buyer a non-exclusive license for personal use. Prohibited: resale, distribution, or publication of the files or access, including in modified form.",
          },
        ],
      },
      {
        heading: "7. Liability",
        blocks: [
          {
            type: "p",
            text: "7.1. Tempo is a planning tool. The Seller does not guarantee any financial or other results for the Buyer.",
          },
          {
            type: "p",
            text: "7.2. The Seller is not liable for the Buyer's inability to use the Product due to the Buyer lacking the necessary software (such as Microsoft Excel) or technical issues on the Buyer's side.",
          },
        ],
      },
      {
        heading: "8. Personal data",
        blocks: [
          { type: "p", text: "8.1. Personal data is processed in accordance with the Privacy Policy." },
        ],
      },
      {
        heading: "9. Other terms",
        blocks: [
          {
            type: "p",
            text: "9.1. The Seller may amend these Terms; the new version takes effect upon publication on the Site and does not apply to orders already paid for.",
          },
          {
            type: "p",
            text: "9.2. Seller details: Sole Proprietor Oleksandr Lomaka, Tax ID 3712001990, place of registration: Kyiv, Ukraine, IBAN: UA563220010000026005380018433, email: [___], Telegram: @tempo_help.",
          },
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
        blocks: [
          {
            type: "p",
            text: "1.1. Esta oferta pública (la «Oferta») es una propuesta oficial de Oleksandr Lomaka, empresario individual (ФОП), NIF/CIF 3712001990, (el «Vendedor») para celebrar un contrato de compraventa de los productos digitales publicados en el sitio tempo.in.ua (el «Sitio»).",
          },
          {
            type: "p",
            text: "1.2. La aceptación de la Oferta se produce con el pago del Producto. Al pagar el Producto, el Comprador confirma que ha leído los términos de la Oferta y la Política de Privacidad y los acepta en su totalidad.",
          },
        ],
      },
      {
        heading: "2. Objeto del contrato",
        blocks: [
          {
            type: "p",
            text: "2.1. El Producto consiste en productos digitales: (a) agendas electrónicas en formato Excel con fórmulas, gráficos y diseño preconfigurados (planes Start, System y Premium); (b) acceso a la aplicación web «Tempo Game» en estado de acceso anticipado (beta).",
          },
          {
            type: "p",
            text: "2.2. El Producto es resultado del trabajo intelectual del Vendedor y se entrega para uso personal y no comercial.",
          },
        ],
      },
      {
        heading: "3. Precio y pago",
        blocks: [
          {
            type: "p",
            text: "3.1. Los precios se indican en el Sitio. El Vendedor puede modificar los precios; al Comprador se le aplica el precio vigente en el momento del pago. Los precios promocionales son válidos durante el período indicado en el Sitio.",
          },
          {
            type: "p",
            text: "3.2. El pago se realiza a través del servicio de pago WayForPay [y/u otro proveedor]. El Vendedor no recibe ni almacena los datos de las tarjetas de pago.",
          },
          { type: "p", text: "3.3. El pago es único. No existen suscripciones ni cargos automáticos." },
        ],
      },
      {
        heading: "4. Entrega",
        blocks: [
          {
            type: "p",
            text: "4.1. El Producto se envía al correo electrónico indicado por el Comprador al pagar, dentro de las 24 horas siguientes al pago (por lo general, en pocos minutos).",
          },
          {
            type: "p",
            text: "4.2. Si el correo no llega, el Comprador debe contactar al soporte: Telegram @tempo_help o email [___]. El Vendedor volverá a enviar el Producto.",
          },
        ],
      },
      {
        heading: "5. Tempo Game (acceso anticipado)",
        blocks: [
          {
            type: "p",
            text: "5.1. La aplicación «Tempo Game» se ofrece en estado de «beta / acceso anticipado»: la funcionalidad completa está disponible en computadora; las versiones móviles están en desarrollo. Las actualizaciones se entregan al Comprador de forma gratuita.",
          },
          {
            type: "p",
            text: "5.2. El Vendedor hace esfuerzos razonables para seguir desarrollando la aplicación, pero no garantiza plazos concretos para el lanzamiento de funciones específicas.",
          },
        ],
      },
      {
        heading: "6. Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "6.1. La compra del Producto otorga al Comprador una licencia no exclusiva para uso personal. Está prohibido: la reventa, distribución o publicación de los archivos o accesos, incluso en forma modificada.",
          },
        ],
      },
      {
        heading: "7. Responsabilidad",
        blocks: [
          {
            type: "p",
            text: "7.1. Tempo es una herramienta de planificación. El Vendedor no garantiza que el Comprador obtenga resultados financieros ni de ningún otro tipo.",
          },
          {
            type: "p",
            text: "7.2. El Vendedor no se hace responsable de la imposibilidad de usar el Producto debido a que el Comprador no cuente con el software necesario (por ejemplo, Microsoft Excel) o por problemas técnicos del lado del Comprador.",
          },
        ],
      },
      {
        heading: "8. Datos personales",
        blocks: [
          {
            type: "p",
            text: "8.1. El tratamiento de datos personales se realiza conforme a la Política de Privacidad.",
          },
        ],
      },
      {
        heading: "9. Otras condiciones",
        blocks: [
          {
            type: "p",
            text: "9.1. El Vendedor puede modificar la Oferta; la nueva versión entra en vigor desde su publicación en el Sitio y no se aplica a los pedidos ya pagados.",
          },
          {
            type: "p",
            text: "9.2. Datos del Vendedor: Oleksandr Lomaka, empresario individual (ФОП), NIF/CIF 3712001990, lugar de registro: Kiev, Ucrania, IBAN: UA563220010000026005380018433, email: [___], Telegram: @tempo_help.",
          },
        ],
      },
    ],
  },
};

export const privacyPolicy: Record<Locale, LegalDoc> = {
  uk: {
    title: "Політика конфіденційності",
    updated: "09.08.2026",
    sections: [
      {
        heading: "1. Хто обробляє ваші дані",
        blocks: [
          {
            type: "p",
            text: "Володільцем персональних даних є ФОП Ломака Олександр Сергійович, РНОКПП 3712001990, запис в ЄДР № 265126138813, адреса: Київ, Україна, e-mail: tempohelp@proton.me (далі — «ми», «Продавець»).",
          },
          {
            type: "p",
            text: "Ця Політика є невід'ємною частиною Публічної оферти і діє на сайті tempo.in.ua та у вебзастосунку «Tempo Game».",
          },
          {
            type: "p",
            text: "Обробка здійснюється відповідно до Закону України «Про захист персональних даних» № 2297-VI.",
          },
        ],
      },
      {
        heading: "2. Які дані ми збираємо",
        blocks: [
          { type: "p", text: "2.1. Дані, які ви надаєте самі:" },
          {
            type: "table",
            headers: ["Дані", "Коли збираємо", "Навіщо"],
            rows: [
              ["Ім'я", "оформлення замовлення", "звернення в листуванні, ідентифікація замовлення"],
              ["Електронна адреса", "оформлення замовлення", "надсилання Товару, підтвердження, підтримка"],
              ["Зміст звернень у підтримку", "листування", "відповідь на запит"],
              ["Дані, які ви вносите в «Tempo Game»", "користування застосунком", "функціонування сервісу"],
            ],
          },
          { type: "p", text: "2.2. Дані, які збираються автоматично:" },
          {
            type: "list",
            items: [
              "IP-адреса, тип браузера та пристрою, операційна система;",
              "дата, час і факт проставлення відмітки про згоду з офертою, разом із версією документа (ця інформація фіксується як доказ укладення договору);",
              "дані про замовлення: номер, сума, статус оплати, дата;",
              "[дані аналітики та cookie — див. розділ 7].",
            ],
          },
          { type: "p", text: "2.3. Дані, яких ми не отримуємо." },
          {
            type: "p",
            text: "Ми не отримуємо, не обробляємо і не зберігаємо реквізити ваших платіжних карток. Оплата проходить на стороні платіжного сервісу WayForPay. Нам передається лише результат операції.",
          },
        ],
      },
      {
        heading: "3. Навіщо і на якій підставі",
        blocks: [
          {
            type: "table",
            headers: ["Мета", "Правова підстава (ст. 11 Закону № 2297-VI)"],
            rows: [
              [
                "Виконання договору: передача Товару, доступ до сервісу, підтримка",
                "укладення та виконання правочину, стороною якого є суб'єкт даних",
              ],
              [
                "Підтвердження факту укладення договору, розгляд претензій, захист у спорах",
                "виконання обов'язку володільця, законний інтерес",
              ],
              [
                "Виставлення розрахункових документів, податковий і бухгалтерський облік",
                "виконання обов'язку, передбаченого законом",
              ],
            ],
          },
          {
            type: "p",
            text: "Ми не використовуємо ваші дані для автоматизованого прийняття рішень і профілювання, що має юридичні наслідки.",
          },
        ],
      },
      {
        heading: "4. Кому передаємо",
        blocks: [
          { type: "p", text: "Дані передаються лише в обсязі, необхідному для роботи сервісу:" },
          {
            type: "table",
            headers: ["Отримувач", "Що передаємо", "Навіщо"],
            rows: [
              ["WayForPay", "ім'я, e-mail, сума, номер замовлення", "проведення оплати"],
              [
                "Оператор фіскалізації",
                "e-mail, сума, найменування товару",
                "формування та надсилання фіскального чека",
              ],
              ["Сервіс для надсилання листів", "ім'я, e-mail", "доставка листів"],
              ["Vercel Inc.", "технічне зберігання даних", "робота сайту та застосунку (хостинг)"],
              [
                "Державні органи",
                "у визначеному законом обсязі",
                "на письмову вимогу, у передбачених законом випадках",
              ],
            ],
          },
          {
            type: "p",
            text: "Ми не продаємо ваші дані та не передаємо їх третім особам у маркетингових цілях.",
          },
          {
            type: "p",
            text: "Транскордонна передача. Технічна інфраструктура сайту (хостинг) розташована у США (Vercel Inc.). Передача здійснюється до держав, що забезпечують належний захист персональних даних, або на підставі договорів із відповідними гарантіями.",
          },
        ],
      },
      {
        heading: "5. Скільки зберігаємо",
        blocks: [
          {
            type: "table",
            headers: ["Категорія", "Строк"],
            rows: [
              ["Дані замовлення та первинні документи", "1095 днів (ст. 44 Податкового кодексу України)"],
              [
                "Логи згоди з офертою",
                "3 роки з дати замовлення (строк позовної давності, ст. 257 ЦК України)",
              ],
              ["Листування з підтримкою", "[2 роки] з дати останнього повідомлення"],
              ["Дані в «Tempo Game»", "протягом строку доступу + [30] днів на експорт"],
            ],
          },
          { type: "p", text: "Після спливу строків дані видаляються або знеособлюються." },
        ],
      },
      {
        heading: "6. Ваші права",
        blocks: [
          { type: "p", text: "Відповідно до ст. 8 Закону № 2297-VI ви маєте право:" },
          {
            type: "list",
            items: [
              "знати, які ваші дані ми обробляємо, з якою метою та кому передаємо;",
              "отримати копію своїх даних;",
              "вимагати виправлення неточних або неповних даних;",
              "вимагати видалення даних, якщо вони обробляються з порушенням закону або відпала мета обробки;",
              "відкликати згоду на обробку — там, де підставою є ваша згода;",
              "заперечувати проти обробки;",
              "звернутися зі скаргою до Уповноваженого Верховної Ради України з прав людини.",
            ],
          },
          {
            type: "p",
            text: "Як скористатися: напишіть на tempohelp@proton.me з адреси, вказаної при замовленні. Відповімо протягом 10 робочих днів, у складних випадках — до 30 днів із попереднім повідомленням.",
          },
          {
            type: "p",
            text: "Важливе обмеження. Ми не зможемо видалити дані, які зобов'язані зберігати за податковим законодавством, до спливу строку з розділу 5. Видалення даних, необхідних для виконання договору, означає припинення доступу до «Tempo Game».",
          },
        ],
      },
      {
        heading: "7. Cookie та аналітика",
        blocks: [
          {
            type: "p",
            text: "7.1. Обов'язкові cookie — потрібні для роботи кошика, сесії та збереження вибору мови. Без них сайт не працює; вони не потребують згоди.",
          },
          {
            type: "p",
            text: "7.2. Аналітичні та рекламні cookie. Наразі сайт не встановлює аналітичні або рекламні cookie й не використовує трекери. Якщо ми додамо такі інструменти (наприклад, аналітику відвідувань), вони вмикатимуться лише після вашої явної згоди через банер на сайті, а ця Політика — оновлена заздалегідь.",
          },
        ],
      },
      {
        heading: "8. Безпека",
        blocks: [
          {
            type: "p",
            text: "Ми застосовуємо розумні технічні та організаційні заходи: шифрування з'єднання (HTTPS/TLS), обмеження доступу до баз даних, [резервне копіювання, двофакторна автентифікація адміністративних акаунтів].",
          },
          {
            type: "p",
            text: "Жодна система не є абсолютно захищеною. У разі витоку даних, що може створити ризик для ваших прав, ми повідомимо вас на електронну адресу та вживемо заходів для усунення наслідків.",
          },
        ],
      },
      {
        heading: "9. Діти",
        blocks: [
          {
            type: "p",
            text: "Сайт і Товар не призначені для осіб віком до 18 років. Ми свідомо не збираємо дані таких осіб. Якщо вам стало відомо про подібний випадок — напишіть нам, і ми видалимо дані.",
          },
        ],
      },
      {
        heading: "10. Зміни",
        blocks: [
          {
            type: "p",
            text: "Ми можемо оновлювати цю Політику; актуальна редакція завжди доступна на цій сторінці. Про істотні зміни повідомляємо на електронну пошту не пізніше ніж за 30 днів.",
          },
        ],
      },
      {
        heading: "11. Контакти",
        blocks: [
          { type: "p", text: "ФОП Ломака Олександр Сергійович" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Адреса: Київ, Україна" },
          {
            type: "p",
            text: "Скарга до наглядового органу: Уповноважений Верховної Ради України з прав людини, ombudsman.gov.ua.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "August 9, 2026",
    sections: [
      {
        heading: "1. Who processes your data",
        blocks: [
          {
            type: "p",
            text: "The data controller is Sole Proprietor Oleksandr Lomaka, Tax ID 3712001990, state register record No. 265126138813, address: Kyiv, Ukraine, e-mail: tempohelp@proton.me (\"we\", \"Seller\").",
          },
          {
            type: "p",
            text: "This Policy is an integral part of the Terms of Service and applies to the website tempo.in.ua and the \"Tempo Game\" web app.",
          },
          {
            type: "p",
            text: "Processing is carried out in accordance with the Law of Ukraine \"On Personal Data Protection\" No. 2297-VI.",
          },
        ],
      },
      {
        heading: "2. What data we collect",
        blocks: [
          { type: "p", text: "2.1. Data you provide yourself:" },
          {
            type: "table",
            headers: ["Data", "When we collect it", "Why"],
            rows: [
              ["Name", "placing an order", "correspondence, order identification"],
              ["Email address", "placing an order", "sending the Product, confirmation, support"],
              ["Contents of support inquiries", "correspondence", "responding to your request"],
              ["Data you enter in \"Tempo Game\"", "using the app", "service functionality"],
            ],
          },
          { type: "p", text: "2.2. Data collected automatically:" },
          {
            type: "list",
            items: [
              "IP address, browser and device type, operating system;",
              "date, time, and the fact of ticking consent to the Terms, together with the document version (this is recorded as evidence the agreement was concluded);",
              "order data: number, amount, payment status, date;",
              "[analytics and cookie data — see section 7].",
            ],
          },
          { type: "p", text: "2.3. Data we do not receive." },
          {
            type: "p",
            text: "We do not receive, process, or store your payment card details. Payment is processed on the side of the WayForPay payment service. We only receive the result of the transaction.",
          },
        ],
      },
      {
        heading: "3. Why and on what legal basis",
        blocks: [
          {
            type: "table",
            headers: ["Purpose", "Legal basis (Art. 11 of Law No. 2297-VI)"],
            rows: [
              [
                "Performance of the contract: delivering the Product, service access, support",
                "conclusion and performance of a transaction to which the data subject is a party",
              ],
              [
                "Confirming the contract was concluded, handling claims, defense in disputes",
                "performance of the controller's obligation, legitimate interest",
              ],
              [
                "Issuing payment documents, tax and accounting records",
                "performance of a statutory obligation",
              ],
            ],
          },
          {
            type: "p",
            text: "We do not use your data for automated decision-making or profiling that produces legal effects.",
          },
        ],
      },
      {
        heading: "4. Who we share data with",
        blocks: [
          { type: "p", text: "Data is shared only to the extent necessary for the service to function:" },
          {
            type: "table",
            headers: ["Recipient", "What we share", "Why"],
            rows: [
              ["WayForPay", "name, e-mail, amount, order number", "processing payment"],
              [
                "Fiscal receipt operator",
                "e-mail, amount, product name",
                "generating and sending the fiscal receipt",
              ],
              ["Email delivery service", "name, e-mail", "delivering emails"],
              ["Vercel Inc.", "technical data storage", "running the site and app (hosting)"],
              [
                "Government authorities",
                "to the extent required by law",
                "upon written request, in cases provided for by law",
              ],
            ],
          },
          { type: "p", text: "We do not sell your data or share it with third parties for marketing purposes." },
          {
            type: "p",
            text: "Cross-border transfer. The site's hosting infrastructure is located in the United States (Vercel Inc.). Transfers are made to countries that ensure adequate protection of personal data, or under agreements with appropriate safeguards.",
          },
        ],
      },
      {
        heading: "5. How long we keep it",
        blocks: [
          {
            type: "table",
            headers: ["Category", "Period"],
            rows: [
              ["Order data and source documents", "1095 days (Art. 44 of the Tax Code of Ukraine)"],
              [
                "Terms-consent logs",
                "3 years from the order date (statute-of-limitations period, Art. 257 of the Civil Code of Ukraine)",
              ],
              ["Support correspondence", "[2 years] from the date of the last message"],
              ["Data in \"Tempo Game\"", "for the duration of access + [30] days for export"],
            ],
          },
          { type: "p", text: "Once these periods expire, data is deleted or de-identified." },
        ],
      },
      {
        heading: "6. Your rights",
        blocks: [
          { type: "p", text: "Under Art. 8 of Law No. 2297-VI, you have the right to:" },
          {
            type: "list",
            items: [
              "know what data we process about you, for what purpose, and to whom we disclose it;",
              "obtain a copy of your data;",
              "request correction of inaccurate or incomplete data;",
              "request deletion of data if it is processed unlawfully or the purpose of processing no longer applies;",
              "withdraw consent to processing — where consent is the legal basis;",
              "object to processing;",
              "file a complaint with the Ukrainian Parliament Commissioner for Human Rights.",
            ],
          },
          {
            type: "p",
            text: "How to exercise these rights: write to tempohelp@proton.me from the address you used when ordering. We respond within 10 business days, or up to 30 days in complex cases, with prior notice.",
          },
          {
            type: "p",
            text: "Important limitation. We cannot delete data we are legally required to keep under tax law until the periods in section 5 expire. Deleting data necessary to perform the contract means access to \"Tempo Game\" will be terminated.",
          },
        ],
      },
      {
        heading: "7. Cookies and analytics",
        blocks: [
          {
            type: "p",
            text: "7.1. Essential cookies — needed for cart, session, and language-preference functionality. The site does not work without them; they do not require consent.",
          },
          {
            type: "p",
            text: "7.2. Analytics and advertising cookies. The site does not currently set any analytics or advertising cookies and does not use trackers. If we add such tools in the future (for example, visit analytics), they will only be enabled after your explicit consent via an on-site banner, and this Policy will be updated in advance.",
          },
        ],
      },
      {
        heading: "8. Security",
        blocks: [
          {
            type: "p",
            text: "We apply reasonable technical and organizational measures: encrypted connections (HTTPS/TLS), restricted access to databases, [backups, two-factor authentication for administrative accounts].",
          },
          {
            type: "p",
            text: "No system is completely secure. In the event of a data breach that could create a risk to your rights, we will notify you by e-mail and take steps to remediate it.",
          },
        ],
      },
      {
        heading: "9. Children",
        blocks: [
          {
            type: "p",
            text: "The Site and the Product are not intended for individuals under 18. We do not knowingly collect data from such individuals. If you become aware of such a case, please contact us and we will delete the data.",
          },
        ],
      },
      {
        heading: "10. Changes",
        blocks: [
          {
            type: "p",
            text: "We may update this Policy; the current version is always available on this page. We notify you of material changes by e-mail no later than 30 days in advance.",
          },
        ],
      },
      {
        heading: "11. Contact",
        blocks: [
          { type: "p", text: "Sole Proprietor Oleksandr Lomaka" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Address: Kyiv, Ukraine" },
          {
            type: "p",
            text: "Complaints to the supervisory authority: Ukrainian Parliament Commissioner for Human Rights, ombudsman.gov.ua.",
          },
        ],
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    updated: "9 de agosto de 2026",
    sections: [
      {
        heading: "1. Quién trata tus datos",
        blocks: [
          {
            type: "p",
            text: "El responsable de los datos personales es Oleksandr Lomaka, empresario individual (ФОП), NIF/CIF 3712001990, registro estatal n.º 265126138813, dirección: Kiev, Ucrania, e-mail: tempohelp@proton.me (en adelante, «nosotros», «Vendedor»).",
          },
          {
            type: "p",
            text: "Esta Política es parte integral de la Oferta pública y se aplica al sitio tempo.in.ua y a la aplicación web «Tempo Game».",
          },
          {
            type: "p",
            text: "El tratamiento se realiza de conformidad con la Ley de Ucrania «Sobre la Protección de Datos Personales» n.º 2297-VI.",
          },
        ],
      },
      {
        heading: "2. Qué datos recopilamos",
        blocks: [
          { type: "p", text: "2.1. Datos que tú nos proporcionas:" },
          {
            type: "table",
            headers: ["Dato", "Cuándo lo recopilamos", "Para qué"],
            rows: [
              ["Nombre", "al realizar el pedido", "correspondencia, identificación del pedido"],
              ["Correo electrónico", "al realizar el pedido", "envío del Producto, confirmación, soporte"],
              ["Contenido de las consultas de soporte", "correspondencia", "responder a tu consulta"],
              ["Datos que introduces en «Tempo Game»", "uso de la aplicación", "funcionamiento del servicio"],
            ],
          },
          { type: "p", text: "2.2. Datos que se recopilan automáticamente:" },
          {
            type: "list",
            items: [
              "dirección IP, tipo de navegador y dispositivo, sistema operativo;",
              "fecha, hora y el hecho de haber marcado la casilla de aceptación de la Oferta, junto con la versión del documento (esta información se registra como prueba de la celebración del contrato);",
              "datos del pedido: número, importe, estado del pago, fecha;",
              "[datos de analítica y cookies — ver sección 7].",
            ],
          },
          { type: "p", text: "2.3. Datos que no recibimos." },
          {
            type: "p",
            text: "No recibimos, procesamos ni almacenamos los datos de tus tarjetas de pago. El pago se procesa en el lado del servicio de pago WayForPay. Solo recibimos el resultado de la operación.",
          },
        ],
      },
      {
        heading: "3. Para qué y con qué base legal",
        blocks: [
          {
            type: "table",
            headers: ["Finalidad", "Base legal (art. 11 de la Ley n.º 2297-VI)"],
            rows: [
              [
                "Ejecución del contrato: entrega del Producto, acceso al servicio, soporte",
                "celebración y ejecución de un contrato del que el titular de los datos es parte",
              ],
              [
                "Confirmación de la celebración del contrato, gestión de reclamaciones, defensa en litigios",
                "cumplimiento de una obligación del responsable, interés legítimo",
              ],
              [
                "Emisión de documentos de pago, contabilidad fiscal y financiera",
                "cumplimiento de una obligación legal",
              ],
            ],
          },
          {
            type: "p",
            text: "No utilizamos tus datos para la toma de decisiones automatizada ni la elaboración de perfiles con efectos jurídicos.",
          },
        ],
      },
      {
        heading: "4. A quién transferimos los datos",
        blocks: [
          { type: "p", text: "Los datos se transfieren solo en la medida necesaria para el funcionamiento del servicio:" },
          {
            type: "table",
            headers: ["Destinatario", "Qué transferimos", "Para qué"],
            rows: [
              ["WayForPay", "nombre, e-mail, importe, número de pedido", "procesar el pago"],
              [
                "Operador de recibos fiscales",
                "e-mail, importe, nombre del producto",
                "generar y enviar el recibo fiscal",
              ],
              ["Servicio de envío de correos", "nombre, e-mail", "entrega de correos"],
              ["Vercel Inc.", "almacenamiento técnico de datos", "funcionamiento del sitio y la app (hosting)"],
              [
                "Autoridades públicas",
                "en la medida prevista por la ley",
                "a solicitud por escrito, en los casos previstos por la ley",
              ],
            ],
          },
          {
            type: "p",
            text: "No vendemos tus datos ni los compartimos con terceros con fines de marketing.",
          },
          {
            type: "p",
            text: "Transferencia internacional. La infraestructura de hosting del sitio está ubicada en Estados Unidos (Vercel Inc.). Las transferencias se realizan a países que garantizan una protección adecuada de los datos personales, o en virtud de contratos con las garantías correspondientes.",
          },
        ],
      },
      {
        heading: "5. Cuánto tiempo los conservamos",
        blocks: [
          {
            type: "table",
            headers: ["Categoría", "Plazo"],
            rows: [
              ["Datos del pedido y documentos primarios", "1095 días (art. 44 del Código Tributario de Ucrania)"],
              [
                "Registros de aceptación de la Oferta",
                "3 años desde la fecha del pedido (plazo de prescripción, art. 257 del Código Civil de Ucrania)",
              ],
              ["Correspondencia de soporte", "[2 años] desde la fecha del último mensaje"],
              ["Datos en «Tempo Game»", "durante el período de acceso + [30] días para exportación"],
            ],
          },
          { type: "p", text: "Una vez vencidos los plazos, los datos se eliminan o se anonimizan." },
        ],
      },
      {
        heading: "6. Tus derechos",
        blocks: [
          { type: "p", text: "De conformidad con el art. 8 de la Ley n.º 2297-VI, tienes derecho a:" },
          {
            type: "list",
            items: [
              "saber qué datos tuyos tratamos, con qué finalidad y a quién los transferimos;",
              "obtener una copia de tus datos;",
              "solicitar la rectificación de datos inexactos o incompletos;",
              "solicitar la eliminación de datos si se tratan incumpliendo la ley o si ha desaparecido la finalidad del tratamiento;",
              "retirar el consentimiento al tratamiento — cuando la base legal sea el consentimiento;",
              "oponerte al tratamiento;",
              "presentar una reclamación ante el Defensor del Pueblo del Parlamento de Ucrania (Ombudsman).",
            ],
          },
          {
            type: "p",
            text: "Cómo ejercerlos: escríbenos a tempohelp@proton.me desde la dirección que usaste al hacer el pedido. Responderemos en un plazo de 10 días hábiles, o hasta 30 días en casos complejos, con aviso previo.",
          },
          {
            type: "p",
            text: "Limitación importante. No podremos eliminar los datos que estemos obligados a conservar por la legislación fiscal hasta que venzan los plazos de la sección 5. Eliminar los datos necesarios para la ejecución del contrato implica la interrupción del acceso a «Tempo Game».",
          },
        ],
      },
      {
        heading: "7. Cookies y analítica",
        blocks: [
          {
            type: "p",
            text: "7.1. Cookies técnicas obligatorias — necesarias para el funcionamiento del carrito, la sesión y la preferencia de idioma. Sin ellas el sitio no funciona; no requieren consentimiento.",
          },
          {
            type: "p",
            text: "7.2. Cookies analíticas y publicitarias. Actualmente el sitio no instala cookies analíticas ni publicitarias y no utiliza rastreadores. Si en el futuro añadimos este tipo de herramientas (por ejemplo, analítica de visitas), se activarán solo tras tu consentimiento explícito mediante un banner en el sitio, y esta Política se actualizará previamente.",
          },
        ],
      },
      {
        heading: "8. Seguridad",
        blocks: [
          {
            type: "p",
            text: "Aplicamos medidas técnicas y organizativas razonables: conexión cifrada (HTTPS/TLS), acceso restringido a las bases de datos, [copias de seguridad, autenticación de dos factores para las cuentas administrativas].",
          },
          {
            type: "p",
            text: "Ningún sistema es absolutamente seguro. En caso de una filtración de datos que pueda suponer un riesgo para tus derechos, te lo notificaremos por correo electrónico y adoptaremos medidas para mitigar sus consecuencias.",
          },
        ],
      },
      {
        heading: "9. Menores",
        blocks: [
          {
            type: "p",
            text: "El Sitio y el Producto no están dirigidos a personas menores de 18 años. No recopilamos conscientemente datos de dichas personas. Si tienes conocimiento de un caso así, escríbenos y eliminaremos los datos.",
          },
        ],
      },
      {
        heading: "10. Cambios",
        blocks: [
          {
            type: "p",
            text: "Podemos actualizar esta Política; la versión vigente siempre está disponible en esta página. Te notificaremos los cambios sustanciales por correo electrónico con una antelación mínima de 30 días.",
          },
        ],
      },
      {
        heading: "11. Contacto",
        blocks: [
          { type: "p", text: "Oleksandr Lomaka, empresario individual (ФОП)" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Dirección: Kiev, Ucrania" },
          {
            type: "p",
            text: "Reclamación ante la autoridad de control: Defensor del Pueblo del Parlamento de Ucrania (Ombudsman), ombudsman.gov.ua.",
          },
        ],
      },
    ],
  },
};

