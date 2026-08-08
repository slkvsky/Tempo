/**
 * Draft legal documents (oferta, refund policy, privacy policy). These are
 * drafts, not legal advice — a lawyer should review them before publishing,
 * especially for EU sales. The English and Spanish versions are translations
 * of the same draft and need the same legal review.
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
    updated: "09.08.2026",
    intro: "Договір купівлі-продажу цифрових товарів",
    sections: [
      {
        heading: "1. Терміни",
        blocks: [
          {
            type: "list",
            items: [
              "«Продавець» — фізична особа-підприємець Ломака Олександр Сергійович, РНОКПП 3712001990, запис в ЄДР № 265126138813, адреса для листування: Київ, Україна, платник єдиного податку, не є платником ПДВ.",
              "«Покупець» — дієздатна фізична особа, якій виповнилося 18 років, фізична особа-підприємець або юридична особа, яка акцептувала цю Оферту.",
              "«Споживач» — Покупець, який придбаває Товар для потреб, не пов'язаних із підприємницькою діяльністю. До відносин зі Споживачем додатково застосовується Закон України «Про захист прав споживачів».",
              "«Сайт» — вебсайт Продавця за адресою tempo.in.ua.",
              "«Товар» — цифрові продукти Продавця, зазначені в розділі 4 цієї Оферти.",
              "«Оферта» — цей документ, розміщений на Сайті.",
              "«Акцепт» — вчинення Покупцем дій, передбачених п. 2.2.",
            ],
          },
        ],
      },
      {
        heading: "2. Загальні положення",
        blocks: [
          {
            type: "p",
            text: "2.1. Ця Оферта є офіційною публічною пропозицією Продавця, адресованою необмеженому колу осіб, укласти договір купівлі-продажу цифрових товарів на викладених нижче умовах, відповідно до статей 633, 634, 641, 642 Цивільного кодексу України та статті 11 Закону України «Про електронну комерцію».",
          },
          { type: "p", text: "2.2. Акцептом Оферти є сукупність таких дій Покупця:" },
          {
            type: "list",
            items: [
              "(а) проставлення відмітки у полі «Я ознайомився(лася) та погоджуюся з умовами Публічної оферти, Політики повернення та Політики конфіденційності» у формі замовлення на Сайті; та",
              "(б) оплата Товару в повному обсязі.",
            ],
          },
          {
            type: "p",
            text: "2.3. Договір вважається укладеним у письмовій (електронній) формі з моменту зарахування коштів на рахунок Продавця. Договір є публічним (ст. 633 ЦК України) та договором приєднання (ст. 634 ЦК України).",
          },
          {
            type: "p",
            text: "2.4. Не пізніше наступного робочого дня після оплати Продавець надсилає на електронну адресу Покупця підтвердження вчинення електронного правочину, що містить умови замовлення, відповідно до частини одинадцятої статті 11 Закону України «Про електронну комерцію».",
          },
          {
            type: "p",
            text: "2.5. До Покупця застосовується та редакція Оферти, яка була розміщена на Сайті на момент акцепту. Продавець зберігає архів попередніх редакцій та надає його на запит Покупця.",
          },
        ],
      },
      {
        heading: "3. Інформація про Продавця",
        blocks: [
          {
            type: "p",
            text: "Відповідно до статті 7 Закону України «Про електронну комерцію» та статей 13, 15 Закону України «Про захист прав споживачів»:",
          },
          {
            type: "table",
            headers: ["Поле", "Значення"],
            rows: [
              ["Повне найменування", "ФОП Ломака Олександр Сергійович"],
              ["РНОКПП", "3712001990"],
              ["Запис в ЄДР", "№ 265126138813"],
              ["Адреса для листування та звернень", "Київ, Україна"],
              ["Електронна пошта", "tempohelp@proton.me"],
              ["Telegram-підтримка", "@tempo_help"],
              ["Графік роботи підтримки", "Щодня, 08:00–20:00 за київським часом"],
              ["Строк відповіді на звернення", "до 2 робочих днів"],
            ],
          },
          { type: "p", text: "Діяльність Продавця не підлягає ліцензуванню." },
        ],
      },
      {
        heading: "4. Предмет договору",
        blocks: [
          {
            type: "p",
            text: "4.1. Продавець зобов'язується передати Покупцеві цифровий Товар, а Покупець — прийняти та оплатити його.",
          },
          { type: "p", text: "4.2. Види Товару:" },
          {
            type: "p",
            text: "4.2.1. Електронні планери Tempo — файли у форматі .xlsx (Microsoft Excel) із налаштованими формулами, зведеними таблицями, графіками та оформленням. Доступні тарифи:",
          },
          {
            type: "table",
            headers: ["Тариф", "Склад"],
            rows: [
              ["Старт", "Планер (календар місяця, фокус, пріоритети тижня), трекер звичок"],
              [
                "Система",
                "Усе зі «Старту» + Фінанси (доходи, витрати, баланс), Цілі з прогрес-баром, Здоров'я",
              ],
              ["Premium", "Усе із «Системи» + Харчування (меню, список покупок), Проекти"],
            ],
          },
          {
            type: "p",
            text: "Повний та актуальний опис складу кожного тарифу розміщено на відповідній сторінці Сайту і є невід'ємною частиною цього Договору.",
          },
          {
            type: "p",
            text: "4.2.2. Доступ до вебзастосунку «Tempo Game» — доступ до вебсервісу у статусі раннього доступу (бета) на умовах розділів 8 і 9 цієї Оферти.",
          },
          {
            type: "p",
            text: "4.3. Товар є об'єктом права інтелектуальної власності Продавця. Умови використання визначені розділом 11.",
          },
          {
            type: "p",
            text: "4.4. Товар не є фінансовою, інвестиційною, податковою, юридичною, медичною чи психологічною консультацією.",
          },
        ],
      },
      {
        heading: "5. Технічні вимоги",
        blocks: [
          { type: "p", text: "5.1. Для роботи з електронними планерами (п. 4.2.1) необхідно:" },
          {
            type: "list",
            items: [
              "Microsoft Excel версії 2016 або новішої, або Microsoft 365;",
              "операційна система Windows 10+ або macOS 11+.",
            ],
          },
          {
            type: "p",
            text: "5.2. Обмеження сумісності. Коректна робота файлів у Google Таблицях, LibreOffice Calc, Apple Numbers та мобільних версіях Excel Продавцем не гарантується: частина формул, макросів та елементів оформлення в цих програмах може не відтворюватися.",
          },
          {
            type: "p",
            text: "5.3. Для доступу до «Tempo Game» необхідно: персональний комп'ютер, актуальна версія браузера (Chrome, Safari, Edge або Firefox), постійне підключення до інтернету.",
          },
          {
            type: "p",
            text: "5.4. Технічні вимоги розміщені на сторінці кожного Товару та в цій Оферті до моменту оплати. Акцептуючи Оферту, Покупець підтверджує, що ознайомився з ними та має необхідне програмне забезпечення й обладнання.",
          },
        ],
      },
      {
        heading: "6. Ціна, оплата та розрахунковий документ",
        blocks: [
          { type: "p", text: "6.1. Ціна Товару вказана на Сайті в гривнях. Продавець не є платником ПДВ." },
          {
            type: "p",
            text: "6.2. Продавець має право змінювати ціни в односторонньому порядку. Для Покупця діє ціна, зазначена на Сайті на момент оформлення замовлення. Зміна ціни після оплати не допускається.",
          },
          {
            type: "p",
            text: "6.3. Акційні ціни та знижки діють протягом строку та на умовах, зазначених на Сайті. Умови акції публікуються до її початку і не змінюються під час дії акції.",
          },
          {
            type: "p",
            text: "6.4. Оплата здійснюється через платіжний сервіс WayForPay. Продавець не отримує, не обробляє і не зберігає реквізити платіжних карток Покупця.",
          },
          {
            type: "p",
            text: "6.5. Платіж є разовим. Підписки, регулярні платежі та автоматичні списання за цим Договором не передбачені.",
          },
          {
            type: "p",
            text: "6.6. Розрахунковий документ (фіскальний чек, сформований програмним РРО) надсилається на електронну адресу Покупця, зазначену під час оформлення замовлення.",
          },
          {
            type: "p",
            text: "6.7. Комісії платіжних систем та банку-емітента, якщо такі стягуються з Покупця, є витратами Покупця і Продавцем не компенсуються, крім випадку повернення коштів згідно з п. 10.5.",
          },
        ],
      },
      {
        heading: "7. Порядок надання Товару",
        blocks: [
          {
            type: "p",
            text: "7.1. Електронні планери надсилаються у вигляді файлів або посилання для завантаження на електронну адресу, вказану Покупцем під час оформлення замовлення, протягом 24 годин з моменту оплати (як правило — протягом кількох хвилин).",
          },
          {
            type: "p",
            text: "7.2. Доступ до «Tempo Game» надається шляхом надсилання персональних даних для входу або посилання-запрошення на ту саму електронну адресу в той самий строк.",
          },
          {
            type: "p",
            text: "7.3. Зобов'язання Продавця вважається виконаним з моменту надсилання файлів (посилання) або даних для доступу на електронну адресу Покупця.",
          },
          {
            type: "p",
            text: "7.4. Якщо лист не надійшов, Покупець звертається до підтримки (розділ 3). Продавець повторно надсилає Товар протягом 24 годин з моменту звернення, за потреби — на іншу вказану Покупцем адресу.",
          },
          {
            type: "p",
            text: "7.5. Якщо Продавець з будь-яких причин не надав Товар протягом 3 (трьох) робочих днів з моменту оплати, Покупець має право вимагати повного повернення сплачених коштів. Кошти повертаються протягом 5 робочих днів з моменту такої вимоги.",
          },
          {
            type: "p",
            text: "7.6. Покупець несе відповідальність за правильність зазначеної ним електронної адреси. Повторне надсилання Товару через помилку в адресі здійснюється безоплатно після звернення Покупця.",
          },
        ],
      },
      {
        heading: "8. Строк доступу",
        blocks: [
          {
            type: "p",
            text: "8.1. Файли електронних планерів передаються Покупцеві безстроково та зберігаються на власних пристроях Покупця. Продавець не гарантує безстрокової доступності посилання для повторного завантаження, але зобов'язується повторно надіслати придбаний файл на запит Покупця протягом 12 місяців з дати покупки.",
          },
          {
            type: "p",
            text: "8.2. Доступ до «Tempo Game» надається безстроково, протягом усього періоду функціонування сервісу — оплата є разовою, без підписки (п. 6.5).",
          },
          {
            type: "p",
            text: "8.3. Припинення роботи сервісу. Якщо Продавець приймає рішення припинити роботу «Tempo Game», він:",
          },
          {
            type: "list",
            items: [
              "повідомляє Покупців на електронну пошту не пізніше ніж за 60 календарних днів до припинення;",
              "забезпечує можливість експорту даних Покупця у форматі .xlsx або .csv протягом усього строку попередження.",
            ],
          },
          {
            type: "p",
            text: "8.4. Оновлення «Tempo Game» надаються Покупцеві безоплатно протягом строку доступу.",
          },
        ],
      },
      {
        heading: "9. Особливі умови раннього доступу «Tempo Game»",
        blocks: [
          {
            type: "p",
            text: "9.1. «Tempo Game» надається у статусі бета-версії (раннього доступу). Покупець сплачує за той обсяг функціональності, який фактично доступний та описаний на Сайті на момент оплати.",
          },
          { type: "p", text: "9.2. Станом на дату цієї редакції Оферти:" },
          {
            type: "list",
            items: [
              "повна функціональність доступна у версії для персонального комп'ютера;",
              "мобільні версії перебувають у розробці.",
            ],
          },
          {
            type: "p",
            text: "9.3. Продавець докладає розумних зусиль для розвитку сервісу, однак не гарантує конкретних строків випуску окремих функцій. Заяви про плани розвитку є орієнтовними і не є частиною предмета Договору.",
          },
          {
            type: "p",
            text: "9.4. Покупець розуміє та погоджується, що в бета-версії можливі технічні збої та тимчасова недоступність сервісу. Продавець зобов'язується усувати виявлені недоліки в розумний строк.",
          },
          {
            type: "p",
            text: "9.5. Положення цього розділу не звільняють Продавця від відповідальності за відповідність Товару опису, наведеному на Сайті на момент продажу.",
          },
        ],
      },
      {
        heading: "10. Якість, відповідність та повернення коштів",
        blocks: [
          {
            type: "p",
            text: "10.1. Товар є цифровим контентом, постачання якого розпочинається негайно після оплати. Оплачуючи Товар, Покупець надає пряму згоду на негайне постачання цифрового контенту і підтверджує, що право відмови від Договору у зв'язку зі зміною наміру («передумав») після початку постачання не застосовується, в межах, дозволених законодавством України.",
          },
          {
            type: "p",
            text: "10.2. Продавець гарантує, що Товар відповідає опису, розміщеному на Сайті на момент оплати.",
          },
          {
            type: "p",
            text: "10.3. Умовне повернення коштів. Попри п. 10.1, Продавець повертає кошти протягом 14 днів з дати оплати за наявності поважної причини:",
          },
          {
            type: "list",
            items: [
              "Товар не було надано, і проблему не усунуто протягом 72 годин після звернення до підтримки;",
              "Товар суттєво не відповідає опису тарифу, розміщеному на Сайті на момент покупки (відсутні заявлені модулі чи функції);",
              "технічний дефект Товару (наприклад, пошкоджений файл або формули), який Продавець не усунув і не замінив протягом 5 робочих днів після звернення;",
              "подвійна або помилкова оплата.",
            ],
          },
          {
            type: "p",
            text: "10.4. Не є підставою для повернення коштів: зміна наміру («передумав») чи відсутність потреби в Товарі; невикористання Товару після покупки; відсутність необхідного програмного забезпечення (Microsoft Excel) чи сумісного пристрою — у цьому разі Продавець допомагає з налаштуванням та надає консультацію; розкриті на Сайті на момент покупки обмеження бета-версії «Tempo Game» (наприклад, мобільні версії в тестуванні).",
          },
          {
            type: "p",
            text: "10.5. Порядок звернення. Заява подається на email tempohelp@proton.me або в Telegram-підтримку @tempo_help протягом 14 днів з дати покупки, із зазначенням електронної адреси, використаної для оплати, назви тарифу та короткого опису проблеми. Продавець спершу намагається усунути проблему (повторне надсилання, заміна файлу, допомога з налаштуванням); якщо це не вдається протягом 5 робочих днів — повертає кошти в повному обсязі тим самим способом оплати протягом 14 банківських днів. Перед зверненням до банку щодо оскарження платежу Покупець звертається до Продавця: обґрунтовані звернення розглядаються протягом 3 робочих днів. Детальний порядок визначено Політикою повернення.",
          },
          {
            type: "p",
            text: "10.6. З моменту повернення коштів ліцензія за розділом 11 припиняється: Покупець зобов'язаний припинити використання Товару та видалити отримані файли; доступ до «Tempo Game» деактивується.",
          },
          {
            type: "p",
            text: "10.7. Продавець має право відмовити в поверненні коштів, якщо той самий Покупець раніше вже отримував повернення за цей самий Товар.",
          },
          {
            type: "p",
            text: "10.8. Незалежно від умов цього розділу, Покупець-Споживач зберігає всі права, передбачені Законом України «Про захист прав споживачів», зокрема право вимагати повернення коштів у разі істотної невідповідності Товару опису або неможливості його використання за призначенням з вини Продавця. Умови цього Договору не обмежують та не скасовують цих прав.",
          },
        ],
      },
      {
        heading: "11. Права інтелектуальної власності та ліцензія",
        blocks: [
          {
            type: "p",
            text: "11.1. Придбання Товару не передбачає переходу до Покупця майнових прав інтелектуальної власності. Усі такі права залишаються за Продавцем.",
          },
          {
            type: "p",
            text: "11.2. Обсяг ліцензії. Продавцем надається невиключна, безвідклична (з урахуванням п. 11.6), безстрокова ліцензія, що діє на території всіх країн світу, на використання одного примірника Товару Покупцем.",
          },
          { type: "p", text: "11.3. Покупцеві дозволено:" },
          {
            type: "list",
            items: [
              "використовувати Товар для власних потреб, зокрема у власній професійній та підприємницькій діяльності;",
              "адаптувати, змінювати та доповнювати файли під власні задачі;",
              "використовувати Товар на власних пристроях без обмеження їх кількості;",
              "друкувати матеріали для власного використання.",
            ],
          },
          { type: "p", text: "11.4. Покупцеві заборонено:" },
          {
            type: "list",
            items: [
              "перепродавати, передавати, дарувати, надавати в оренду чи іншим чином поширювати файли, посилання або дані для доступу третім особам;",
              "публікувати Товар у відкритому доступі, у файлообмінниках, месенджерах, соціальних мережах — у тому числі у зміненому чи частково зміненому вигляді;",
              "створювати на основі Товару похідні продукти для подальшого продажу або безоплатного поширення;",
              "надавати третім особам доступ до свого акаунта в «Tempo Game»;",
              "видаляти чи змінювати позначення авторства.",
            ],
          },
          {
            type: "p",
            text: "11.5. Дозвіл на використання Товару в межах команди чи організації (кілька користувачів) надається окремо на підставі письмової згоди Продавця.",
          },
          {
            type: "p",
            text: "11.6. У разі порушення п. 11.4 Продавець має право призупинити або припинити доступ до «Tempo Game» та вимагати відшкодування завданих збитків у порядку, встановленому законом. Кошти в такому разі не повертаються.",
          },
        ],
      },
      {
        heading: "12. Відповідальність сторін",
        blocks: [
          {
            type: "p",
            text: "12.1. Tempo є інструментом планування та організації. Продавець не гарантує досягнення Покупцем будь-яких фінансових, кар'єрних, організаційних чи інших результатів — вони залежать від дій самого Покупця.",
          },
          {
            type: "p",
            text: "12.2. Продавець не несе відповідальності за неможливість використання Товару, що виникла внаслідок невідповідності обладнання чи програмного забезпечення Покупця технічним вимогам розділу 5, за умови що ці вимоги були доведені до відома Покупця до моменту оплати.",
          },
          {
            type: "p",
            text: "12.3. Продавець не несе відповідальності за збої на боці Покупця: відсутність інтернету, несправність обладнання, дії антивірусного програмного забезпечення, налаштування поштового сервісу Покупця (зокрема потрапляння листів у спам).",
          },
          {
            type: "p",
            text: "12.4. Покупець самостійно відповідає за збереження придбаних файлів та даних для доступу.",
          },
          {
            type: "p",
            text: "12.5. Обмеження відповідальності. Сукупна відповідальність Продавця за цим Договором обмежується сумою, фактично сплаченою Покупцем за відповідний Товар. Це обмеження не застосовується у випадках, коли законом встановлено інше, зокрема до відповідальності за шкоду, завдану життю та здоров'ю, та до випадків умисного порушення Продавцем своїх зобов'язань.",
          },
          {
            type: "p",
            text: "12.6. Форс-мажор. Сторони звільняються від відповідальності за невиконання зобов'язань, якщо воно спричинене обставинами непереборної сили: воєнними діями, ракетними обстрілами, тривалими відключеннями електропостачання, аваріями магістральних мереж зв'язку, рішеннями органів державної влади, стихійним лихом. Наявність таких обставин підтверджується у порядку, встановленому законодавством України. Ця обставина не позбавляє Покупця права вимагати повернення коштів за ненаданий Товар.",
          },
        ],
      },
      {
        heading: "13. Персональні дані",
        blocks: [
          {
            type: "p",
            text: "13.1. Продавець обробляє персональні дані Покупця (ім'я, електронна адреса, технічні дані про замовлення) з метою виконання цього Договору, надання підтримки та виконання вимог податкового законодавства.",
          },
          {
            type: "p",
            text: "13.2. Правовою підставою обробки є укладення та виконання Договору, стороною якого є суб'єкт персональних даних (ст. 11 Закону України «Про захист персональних даних»).",
          },
          {
            type: "p",
            text: "13.3. Покупець має право на доступ до своїх персональних даних, їх виправлення, видалення та відкликання згоди на обробку в частині, що не суперечить обов'язковому зберіганню первинних документів.",
          },
          {
            type: "p",
            text: "13.4. Детальні умови викладені в Політиці конфіденційності, яка є невід'ємною частиною цього Договору.",
          },
        ],
      },
      {
        heading: "14. Розгляд звернень та вирішення спорів",
        blocks: [
          {
            type: "p",
            text: "14.1. Усі звернення, претензії та скарги подаються на електронну пошту Продавця (розділ 3). Продавець зобов'язується надати відповідь по суті протягом 10 робочих днів.",
          },
          { type: "p", text: "14.2. Сторони докладуть зусиль для вирішення спорів шляхом переговорів." },
          {
            type: "p",
            text: "14.3. У разі недосягнення згоди спір вирішується в судовому порядку відповідно до законодавства України.",
          },
          {
            type: "p",
            text: "14.4. Покупець-Споживач має право звернутися з позовом до суду за своїм місцем проживання (перебування) або за місцем заподіяння шкоди та звільняється від сплати судового збору у справах про захист прав споживачів (ст. 22 Закону України «Про захист прав споживачів»). Покупець також має право звернутися до Державної служби України з питань безпечності харчових продуктів та захисту споживачів. Умови цього Договору не обмежують цих прав.",
          },
          { type: "p", text: "14.5. Правом, що застосовується до цього Договору, є право України." },
        ],
      },
      {
        heading: "15. Строк дії, зміни та інші умови",
        blocks: [
          {
            type: "p",
            text: "15.1. Оферта набирає чинності з моменту розміщення на Сайті та діє до її відкликання Продавцем.",
          },
          {
            type: "p",
            text: "15.2. Продавець має право змінювати умови Оферти. Нова редакція діє з моменту публікації на Сайті та не поширюється на вже оплачені замовлення.",
          },
          {
            type: "p",
            text: "15.3. Щодо доступу до «Tempo Game» (як триваючих відносин): про істотні зміни умов Продавець повідомляє Покупців на електронну пошту не пізніше ніж за 30 календарних днів. Якщо Покупець не погоджується зі змінами, він має право припинити Договір і отримати повернення коштів пропорційно невикористаному строку доступу.",
          },
          {
            type: "p",
            text: "15.4. Договір складено українською мовою. Мовою листування та підтримки є українська, англійська та іспанська.",
          },
          {
            type: "p",
            text: "15.5. Якщо будь-яке положення цього Договору буде визнано недійсним, це не тягне за собою недійсності інших його положень.",
          },
          {
            type: "p",
            text: "15.6. Невід'ємними частинами цього Договору є: Політика повернення, Політика конфіденційності, опис Товару на відповідній сторінці Сайту.",
          },
        ],
      },
      {
        heading: "16. Реквізити Продавця",
        blocks: [
          { type: "p", text: "ФОП Ломака Олександр Сергійович" },
          { type: "p", text: "РНОКПП: 3712001990" },
          { type: "p", text: "Запис в ЄДР: № 265126138813" },
          { type: "p", text: "Адреса: Київ, Україна" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Сайт: tempo.in.ua" },
          { type: "p", text: "IBAN: UA563220010000026005380018433" },
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    updated: "August 9, 2026",
    intro: "Agreement for the sale of digital products",
    sections: [
      {
        heading: "1. Definitions",
        blocks: [
          {
            type: "list",
            items: [
              "\"Seller\" — Sole Proprietor Oleksandr Lomaka, Tax ID 3712001990, state register record No. 265126138813, correspondence address: Kyiv, Ukraine, single-tax payer, not a VAT payer.",
              "\"Buyer\" — a legally competent individual who has turned 18, a sole proprietor, or a legal entity that has accepted these Terms.",
              "\"Consumer\" — a Buyer purchasing the Product for purposes unrelated to business activity. The Law of Ukraine \"On Consumer Rights Protection\" additionally applies to relations with a Consumer.",
              "\"Site\" — the Seller's website at tempo.in.ua.",
              "\"Product\" — the Seller's digital products listed in section 4 of these Terms.",
              "\"Terms\" — this document, published on the Site.",
              "\"Acceptance\" — the Buyer's performance of the actions set out in clause 2.2.",
            ],
          },
        ],
      },
      {
        heading: "2. General provisions",
        blocks: [
          {
            type: "p",
            text: "2.1. These Terms are an official public offer by the Seller, addressed to an unlimited number of persons, to enter into an agreement for the sale of digital products on the conditions set out below, in accordance with Articles 633, 634, 641, and 642 of the Civil Code of Ukraine and Article 11 of the Law of Ukraine \"On Electronic Commerce.\"",
          },
          { type: "p", text: "2.2. Acceptance of these Terms consists of the following actions by the Buyer:" },
          {
            type: "list",
            items: [
              "(a) checking the box \"I have read and agree to the Terms of Service, Refund Policy, and Privacy Policy\" on the order form on the Site; and",
              "(b) payment for the Product in full.",
            ],
          },
          {
            type: "p",
            text: "2.3. The agreement is deemed concluded in written (electronic) form from the moment funds are credited to the Seller's account. The agreement is a public agreement (Art. 633 of the Civil Code) and a contract of adhesion (Art. 634 of the Civil Code).",
          },
          {
            type: "p",
            text: "2.4. No later than the next business day after payment, the Seller sends the Buyer's e-mail address a confirmation of the electronic transaction containing the order terms, in accordance with part eleven of Article 11 of the Law of Ukraine \"On Electronic Commerce.\"",
          },
          {
            type: "p",
            text: "2.5. The version of these Terms published on the Site at the moment of acceptance applies to the Buyer. The Seller keeps an archive of previous versions and provides it upon the Buyer's request.",
          },
        ],
      },
      {
        heading: "3. Seller information",
        blocks: [
          {
            type: "p",
            text: "In accordance with Article 7 of the Law of Ukraine \"On Electronic Commerce\" and Articles 13 and 15 of the Law of Ukraine \"On Consumer Rights Protection\":",
          },
          {
            type: "table",
            headers: ["Field", "Value"],
            rows: [
              ["Full name", "Sole Proprietor Oleksandr Lomaka"],
              ["Tax ID", "3712001990"],
              ["State register record", "No. 265126138813"],
              ["Correspondence address", "Kyiv, Ukraine"],
              ["E-mail", "tempohelp@proton.me"],
              ["Telegram support", "@tempo_help"],
              ["Support hours", "Daily, 08:00–20:00 Kyiv time"],
              ["Response time", "within 2 business days"],
            ],
          },
          { type: "p", text: "The Seller's activity is not subject to licensing." },
        ],
      },
      {
        heading: "4. Subject of the agreement",
        blocks: [
          {
            type: "p",
            text: "4.1. The Seller undertakes to transfer the digital Product to the Buyer, and the Buyer undertakes to accept and pay for it.",
          },
          { type: "p", text: "4.2. Types of Product:" },
          {
            type: "p",
            text: "4.2.1. Tempo electronic planners — .xlsx (Microsoft Excel) files with pre-built formulas, pivot tables, charts, and design. Available plans:",
          },
          {
            type: "table",
            headers: ["Plan", "Contents"],
            rows: [
              ["Start", "Planner (monthly calendar, focus, weekly priorities), habit tracker"],
              [
                "System",
                "Everything in Start + Finances (income, expenses, balance), Goals with a progress bar, Health",
              ],
              ["Premium", "Everything in System + Nutrition (meal plan, shopping list), Projects"],
            ],
          },
          {
            type: "p",
            text: "A full, up-to-date description of each plan's contents is published on the relevant page of the Site and forms an integral part of this agreement.",
          },
          {
            type: "p",
            text: "4.2.2. Access to the \"Tempo Game\" web app — access to the web service in early-access (beta) status, on the terms of sections 8 and 9 of these Terms.",
          },
          {
            type: "p",
            text: "4.3. The Product is an object of the Seller's intellectual property rights. Terms of use are set out in section 11.",
          },
          {
            type: "p",
            text: "4.4. The Product is not financial, investment, tax, legal, medical, or psychological advice.",
          },
        ],
      },
      {
        heading: "5. Technical requirements",
        blocks: [
          { type: "p", text: "5.1. Using the electronic planners (clause 4.2.1) requires:" },
          {
            type: "list",
            items: [
              "Microsoft Excel 2016 or later, or Microsoft 365;",
              "Windows 10+ or macOS 11+.",
            ],
          },
          {
            type: "p",
            text: "5.2. Compatibility limitation. The Seller does not guarantee correct operation of the files in Google Sheets, LibreOffice Calc, Apple Numbers, or mobile versions of Excel: some formulas, macros, and design elements may not render correctly in those programs.",
          },
          {
            type: "p",
            text: "5.3. Accessing \"Tempo Game\" requires: a personal computer, a current version of Chrome, Safari, Edge, or Firefox, and a stable internet connection.",
          },
          {
            type: "p",
            text: "5.4. Technical requirements are published on each Product's page and in these Terms prior to payment. By accepting these Terms, the Buyer confirms they have reviewed them and have the necessary software and hardware.",
          },
        ],
      },
      {
        heading: "6. Price, payment, and receipt",
        blocks: [
          { type: "p", text: "6.1. The Product's price is listed on the Site in hryvnias. The Seller is not a VAT payer." },
          {
            type: "p",
            text: "6.2. The Seller may change prices unilaterally. The Buyer pays the price listed on the Site at the time the order is placed. Prices cannot change after payment.",
          },
          {
            type: "p",
            text: "6.3. Promotional prices and discounts apply for the period and on the terms stated on the Site. Promotion terms are published before the promotion starts and do not change during it.",
          },
          {
            type: "p",
            text: "6.4. Payment is processed via the WayForPay payment service. The Seller does not receive, process, or store the Buyer's payment card details.",
          },
          {
            type: "p",
            text: "6.5. Payment is one-time. This agreement does not provide for subscriptions, recurring charges, or automatic debits.",
          },
          {
            type: "p",
            text: "6.6. The receipt (a fiscal receipt generated by software-based cash register) is sent to the e-mail address the Buyer provided when placing the order.",
          },
          {
            type: "p",
            text: "6.7. Fees charged by payment systems or the issuing bank, if any, are the Buyer's expense and are not reimbursed by the Seller, except in the case of a refund under clause 10.5.",
          },
        ],
      },
      {
        heading: "7. Delivery of the Product",
        blocks: [
          {
            type: "p",
            text: "7.1. Electronic planners are sent as files or a download link to the e-mail address provided by the Buyer when placing the order, within 24 hours of payment (typically within a few minutes).",
          },
          {
            type: "p",
            text: "7.2. Access to \"Tempo Game\" is provided by sending login credentials or an invitation link to the same e-mail address within the same period.",
          },
          {
            type: "p",
            text: "7.3. The Seller's obligation is deemed fulfilled from the moment the files (link) or access data are sent to the Buyer's e-mail address.",
          },
          {
            type: "p",
            text: "7.4. If the email does not arrive, the Buyer should contact support (section 3). The Seller will resend the Product within 24 hours of the request, to a different address if needed.",
          },
          {
            type: "p",
            text: "7.5. If, for any reason, the Seller does not deliver the Product within 3 (three) business days of payment, the Buyer is entitled to a full refund. Funds are refunded within 5 business days of such a request.",
          },
          {
            type: "p",
            text: "7.6. The Buyer is responsible for the accuracy of the e-mail address they provide. Resending the Product due to an address error is free of charge upon the Buyer's request.",
          },
        ],
      },
      {
        heading: "8. Access period",
        blocks: [
          {
            type: "p",
            text: "8.1. Electronic planner files are transferred to the Buyer permanently and stored on the Buyer's own devices. The Seller does not guarantee permanent availability of the re-download link, but undertakes to resend the purchased file upon the Buyer's request within 12 months of the purchase date.",
          },
          {
            type: "p",
            text: "8.2. Access to \"Tempo Game\" is provided indefinitely, for as long as the service operates — payment is one-time, with no subscription (clause 6.5).",
          },
          { type: "p", text: "8.3. Service discontinuation. If the Seller decides to discontinue \"Tempo Game,\" it will:" },
          {
            type: "list",
            items: [
              "notify Buyers by e-mail no later than 60 calendar days before discontinuation;",
              "provide the ability to export the Buyer's data in .xlsx or .csv format throughout the notice period.",
            ],
          },
          { type: "p", text: "8.4. Updates to \"Tempo Game\" are provided to the Buyer free of charge for the duration of access." },
        ],
      },
      {
        heading: "9. Special terms for \"Tempo Game\" early access",
        blocks: [
          {
            type: "p",
            text: "9.1. \"Tempo Game\" is provided in beta (early-access) status. The Buyer pays for the scope of functionality actually available and described on the Site at the time of payment.",
          },
          { type: "p", text: "9.2. As of the date of this version of these Terms:" },
          {
            type: "list",
            items: [
              "full functionality is available on the desktop version;",
              "mobile versions are in development.",
            ],
          },
          {
            type: "p",
            text: "9.3. The Seller makes reasonable efforts to develop the service further but does not guarantee specific release dates for individual features. Statements about development plans are indicative and are not part of the subject matter of this agreement.",
          },
          {
            type: "p",
            text: "9.4. The Buyer understands and agrees that technical glitches and temporary unavailability of the service are possible in a beta version. The Seller undertakes to fix identified issues within a reasonable time.",
          },
          {
            type: "p",
            text: "9.5. This section does not relieve the Seller of liability for the Product's compliance with the description published on the Site at the time of sale.",
          },
        ],
      },
      {
        heading: "10. Quality, conformity, and refunds",
        blocks: [
          {
            type: "p",
            text: "10.1. The Product is digital content whose delivery begins immediately after payment. By paying for the Product, the Buyer gives express consent to immediate delivery of digital content and confirms that the right to withdraw from this agreement due to a change of mind does not apply once delivery has begun, to the extent permitted by Ukrainian law.",
          },
          { type: "p", text: "10.2. The Seller warrants that the Product conforms to the description published on the Site at the time of payment." },
          {
            type: "p",
            text: "10.3. Conditional refunds. Notwithstanding clause 10.1, the Seller refunds payments within 14 days of the payment date for a valid reason:",
          },
          {
            type: "list",
            items: [
              "the Product was not delivered, and the issue was not resolved within 72 hours of contacting support;",
              "the Product materially does not match the plan's description published on the Site at the time of purchase (missing features or modules listed in the plan);",
              "the Product has a technical defect (e.g., a broken file or formulas) that the Seller failed to fix or replace within 5 business days of being notified;",
              "a duplicate or erroneous payment occurred.",
            ],
          },
          {
            type: "p",
            text: "10.4. The following are not valid grounds for a refund: a change of mind or no longer needing the Product; not using the Product after purchase; lacking the required software (Microsoft Excel) or a compatible device — in this case the Seller will help with setup and provide a consultation; beta limitations of \"Tempo Game\" that were disclosed on the Site at the time of purchase (e.g., mobile versions still in testing).",
          },
          {
            type: "p",
            text: "10.5. How to request a refund. Submit a request to tempohelp@proton.me or via Telegram support @tempo_help within 14 days of purchase, stating the e-mail address used for payment, the plan name, and a short description of the problem. The Seller will first try to resolve the issue (resend the Product, replace the file, or help with setup); if the issue cannot be resolved within 5 business days, the Seller refunds the funds in full using the original payment method within 14 banking days. Before opening a bank dispute, the Buyer should contact the Seller first: valid requests are reviewed within 3 business days. The detailed procedure is set out in the Refund Policy.",
          },
          {
            type: "p",
            text: "10.6. Upon a refund, the license under section 11 terminates: the Buyer must stop using the Product and delete the received files; access to \"Tempo Game\" is deactivated.",
          },
          {
            type: "p",
            text: "10.7. The Seller may refuse a refund if the same Buyer has already received a refund for the same Product.",
          },
          {
            type: "p",
            text: "10.8. Regardless of the terms of this section, a Buyer who is a Consumer retains all rights under the Law of Ukraine \"On Consumer Rights Protection,\" including the right to a refund in the event of a material non-conformity of the Product with its description, or the impossibility of using it as intended due to the Seller's fault. The terms of this agreement do not limit or waive these rights.",
          },
        ],
      },
      {
        heading: "11. Intellectual property rights and license",
        blocks: [
          {
            type: "p",
            text: "11.1. Purchasing the Product does not transfer any intellectual property rights to the Buyer. All such rights remain with the Seller.",
          },
          {
            type: "p",
            text: "11.2. Scope of license. The Seller grants a non-exclusive, irrevocable (subject to clause 11.6), perpetual license, valid worldwide, to use one copy of the Product by the Buyer.",
          },
          { type: "p", text: "11.3. The Buyer is permitted to:" },
          {
            type: "list",
            items: [
              "use the Product for their own purposes, including in their own professional and business activity;",
              "adapt, modify, and supplement the files for their own tasks;",
              "use the Product on an unlimited number of their own devices;",
              "print materials for personal use.",
            ],
          },
          { type: "p", text: "11.4. The Buyer is prohibited from:" },
          {
            type: "list",
            items: [
              "reselling, transferring, gifting, renting out, or otherwise distributing the files, links, or access data to third parties;",
              "publishing the Product in open access, on file-sharing platforms, messaging apps, or social networks — including in modified or partially modified form;",
              "creating derivative products based on the Product for further sale or free distribution;",
              "granting third parties access to their \"Tempo Game\" account;",
              "removing or altering attribution marks.",
            ],
          },
          {
            type: "p",
            text: "11.5. Permission to use the Product within a team or organization (multiple users) is granted separately, based on the Seller's written consent.",
          },
          {
            type: "p",
            text: "11.6. In the event of a breach of clause 11.4, the Seller may suspend or terminate access to \"Tempo Game\" and seek compensation for damages as provided by law. Funds are not refunded in such a case.",
          },
        ],
      },
      {
        heading: "12. Liability of the parties",
        blocks: [
          {
            type: "p",
            text: "12.1. Tempo is a planning and organization tool. The Seller does not guarantee that the Buyer will achieve any financial, career, organizational, or other results — these depend on the Buyer's own actions.",
          },
          {
            type: "p",
            text: "12.2. The Seller is not liable for the Buyer's inability to use the Product resulting from the Buyer's hardware or software not meeting the technical requirements in section 5, provided the Buyer was informed of these requirements before payment.",
          },
          {
            type: "p",
            text: "12.3. The Seller is not liable for issues on the Buyer's side: lack of internet access, hardware malfunction, antivirus software behavior, or the Buyer's e-mail settings (including messages landing in spam).",
          },
          {
            type: "p",
            text: "12.4. The Buyer is solely responsible for keeping the purchased files and access data safe.",
          },
          {
            type: "p",
            text: "12.5. Limitation of liability. The Seller's total liability under this agreement is limited to the amount actually paid by the Buyer for the relevant Product. This limitation does not apply where the law provides otherwise, including liability for harm to life and health, and cases of the Seller's willful breach of its obligations.",
          },
          {
            type: "p",
            text: "12.6. Force majeure. The parties are released from liability for failure to perform their obligations if caused by circumstances of insurmountable force: military action, missile strikes, prolonged power outages, failures of backbone communication networks, decisions of government authorities, or natural disasters. Such circumstances are confirmed in the manner established by Ukrainian law. This does not deprive the Buyer of the right to a refund for an undelivered Product.",
          },
        ],
      },
      {
        heading: "13. Personal data",
        blocks: [
          {
            type: "p",
            text: "13.1. The Seller processes the Buyer's personal data (name, e-mail address, technical order data) to perform this agreement, provide support, and comply with tax law requirements.",
          },
          {
            type: "p",
            text: "13.2. The legal basis for processing is the conclusion and performance of an agreement to which the data subject is a party (Art. 11 of the Law of Ukraine \"On Personal Data Protection\").",
          },
          {
            type: "p",
            text: "13.3. The Buyer has the right to access, correct, and delete their personal data, and to withdraw consent to processing, to the extent this does not conflict with the mandatory retention of source documents.",
          },
          {
            type: "p",
            text: "13.4. Detailed terms are set out in the Privacy Policy, which forms an integral part of this agreement.",
          },
        ],
      },
      {
        heading: "14. Handling requests and dispute resolution",
        blocks: [
          {
            type: "p",
            text: "14.1. All requests, claims, and complaints are submitted to the Seller's e-mail address (section 3). The Seller undertakes to provide a substantive response within 10 business days.",
          },
          { type: "p", text: "14.2. The parties will make efforts to resolve disputes through negotiation." },
          {
            type: "p",
            text: "14.3. If no agreement is reached, the dispute is resolved in court in accordance with Ukrainian law.",
          },
          {
            type: "p",
            text: "14.4. A Buyer who is a Consumer may file a claim in court at their place of residence (stay) or at the place the harm occurred, and is exempt from court fees in consumer protection cases (Art. 22 of the Law of Ukraine \"On Consumer Rights Protection\"). The Buyer may also contact the State Service of Ukraine on Food Safety and Consumer Protection. The terms of this agreement do not limit these rights.",
          },
          { type: "p", text: "14.5. This agreement is governed by the law of Ukraine." },
        ],
      },
      {
        heading: "15. Term, changes, and other conditions",
        blocks: [
          { type: "p", text: "15.1. These Terms take effect upon publication on the Site and remain in effect until withdrawn by the Seller." },
          {
            type: "p",
            text: "15.2. The Seller may amend these Terms. The new version takes effect upon publication on the Site and does not apply to orders already paid for.",
          },
          {
            type: "p",
            text: "15.3. Regarding access to \"Tempo Game\" (as an ongoing relationship): the Seller notifies Buyers of material changes by e-mail no later than 30 calendar days in advance. If the Buyer does not agree to the changes, they may terminate the agreement and receive a refund proportional to the unused access period.",
          },
          {
            type: "p",
            text: "15.4. This agreement is drafted in Ukrainian. The languages of correspondence and support are Ukrainian, English, and Spanish.",
          },
          {
            type: "p",
            text: "15.5. If any provision of this agreement is found invalid, this does not invalidate its other provisions.",
          },
          {
            type: "p",
            text: "15.6. The following form an integral part of this agreement: the Refund Policy, the Privacy Policy, and the Product description on the relevant page of the Site.",
          },
        ],
      },
      {
        heading: "16. Seller details",
        blocks: [
          { type: "p", text: "Sole Proprietor Oleksandr Lomaka" },
          { type: "p", text: "Tax ID: 3712001990" },
          { type: "p", text: "State register record: No. 265126138813" },
          { type: "p", text: "Address: Kyiv, Ukraine" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Site: tempo.in.ua" },
          { type: "p", text: "IBAN: UA563220010000026005380018433" },
        ],
      },
    ],
  },
  es: {
    title: "Oferta pública",
    updated: "9 de agosto de 2026",
    intro: "Contrato de compraventa de productos digitales",
    sections: [
      {
        heading: "1. Definiciones",
        blocks: [
          {
            type: "list",
            items: [
              "«Vendedor» — Oleksandr Lomaka, empresario individual (ФОП), NIF/CIF 3712001990, registro estatal n.º 265126138813, dirección de correspondencia: Kiev, Ucrania, contribuyente del impuesto único, no es contribuyente del IVA.",
              "«Comprador» — una persona física con capacidad legal que ha cumplido 18 años, un empresario individual o una persona jurídica que haya aceptado esta Oferta.",
              "«Consumidor» — el Comprador que adquiere el Producto para fines no relacionados con su actividad empresarial. A las relaciones con el Consumidor se aplica adicionalmente la Ley de Ucrania «Sobre la Protección de los Derechos del Consumidor».",
              "«Sitio» — el sitio web del Vendedor en tempo.in.ua.",
              "«Producto» — los productos digitales del Vendedor indicados en la sección 4 de esta Oferta.",
              "«Oferta» — este documento, publicado en el Sitio.",
              "«Aceptación» — la realización por el Comprador de las acciones previstas en el punto 2.2.",
            ],
          },
        ],
      },
      {
        heading: "2. Disposiciones generales",
        blocks: [
          {
            type: "p",
            text: "2.1. Esta Oferta es una propuesta pública oficial del Vendedor, dirigida a un número indeterminado de personas, para celebrar un contrato de compraventa de productos digitales en las condiciones que se exponen a continuación, de conformidad con los artículos 633, 634, 641 y 642 del Código Civil de Ucrania y el artículo 11 de la Ley de Ucrania «Sobre Comercio Electrónico».",
          },
          { type: "p", text: "2.2. La aceptación de la Oferta consiste en el conjunto de las siguientes acciones del Comprador:" },
          {
            type: "list",
            items: [
              "(a) marcar la casilla «He leído y acepto los términos de la Oferta pública, la Política de devoluciones y la Política de privacidad» en el formulario de pedido del Sitio; y",
              "(b) el pago íntegro del Producto.",
            ],
          },
          {
            type: "p",
            text: "2.3. El contrato se considera celebrado en forma escrita (electrónica) desde el momento en que los fondos se acreditan en la cuenta del Vendedor. El contrato es un contrato público (art. 633 del Código Civil de Ucrania) y un contrato de adhesión (art. 634 del Código Civil de Ucrania).",
          },
          {
            type: "p",
            text: "2.4. A más tardar el siguiente día hábil tras el pago, el Vendedor envía al correo electrónico del Comprador la confirmación de la operación electrónica, con las condiciones del pedido, de conformidad con la parte once del artículo 11 de la Ley de Ucrania «Sobre Comercio Electrónico».",
          },
          {
            type: "p",
            text: "2.5. Al Comprador se le aplica la versión de la Oferta que estaba publicada en el Sitio en el momento de la aceptación. El Vendedor conserva un archivo de las versiones anteriores y lo facilita a solicitud del Comprador.",
          },
        ],
      },
      {
        heading: "3. Información sobre el Vendedor",
        blocks: [
          {
            type: "p",
            text: "De conformidad con el artículo 7 de la Ley de Ucrania «Sobre Comercio Electrónico» y los artículos 13 y 15 de la Ley de Ucrania «Sobre la Protección de los Derechos del Consumidor»:",
          },
          {
            type: "table",
            headers: ["Campo", "Valor"],
            rows: [
              ["Nombre completo", "Oleksandr Lomaka, empresario individual (ФОП)"],
              ["NIF/CIF", "3712001990"],
              ["Registro estatal", "n.º 265126138813"],
              ["Dirección de correspondencia", "Kiev, Ucrania"],
              ["Correo electrónico", "tempohelp@proton.me"],
              ["Soporte por Telegram", "@tempo_help"],
              ["Horario de soporte", "Todos los días, 08:00–20:00 hora de Kiev"],
              ["Plazo de respuesta", "hasta 2 días hábiles"],
            ],
          },
          { type: "p", text: "La actividad del Vendedor no está sujeta a licencia." },
        ],
      },
      {
        heading: "4. Objeto del contrato",
        blocks: [
          {
            type: "p",
            text: "4.1. El Vendedor se compromete a entregar el Producto digital al Comprador, y el Comprador a recibirlo y pagarlo.",
          },
          { type: "p", text: "4.2. Tipos de Producto:" },
          {
            type: "p",
            text: "4.2.1. Agendas electrónicas Tempo — archivos en formato .xlsx (Microsoft Excel) con fórmulas, tablas dinámicas, gráficos y diseño preconfigurados. Planes disponibles:",
          },
          {
            type: "table",
            headers: ["Plan", "Contenido"],
            rows: [
              ["Start", "Agenda (calendario mensual, foco, prioridades semanales), seguimiento de hábitos"],
              [
                "System",
                "Todo lo de Start + Finanzas (ingresos, gastos, balance), Metas con barra de progreso, Salud",
              ],
              ["Premium", "Todo lo de System + Nutrición (menú, lista de compras), Proyectos"],
            ],
          },
          {
            type: "p",
            text: "La descripción completa y actualizada del contenido de cada plan se publica en la página correspondiente del Sitio y forma parte integral de este contrato.",
          },
          {
            type: "p",
            text: "4.2.2. Acceso a la aplicación web «Tempo Game» — acceso al servicio web en estado de acceso anticipado (beta), en las condiciones de las secciones 8 y 9 de esta Oferta.",
          },
          {
            type: "p",
            text: "4.3. El Producto es objeto de los derechos de propiedad intelectual del Vendedor. Las condiciones de uso se definen en la sección 11.",
          },
          {
            type: "p",
            text: "4.4. El Producto no constituye asesoramiento financiero, de inversión, fiscal, jurídico, médico ni psicológico.",
          },
        ],
      },
      {
        heading: "5. Requisitos técnicos",
        blocks: [
          { type: "p", text: "5.1. Para trabajar con las agendas electrónicas (punto 4.2.1) se necesita:" },
          {
            type: "list",
            items: [
              "Microsoft Excel versión 2016 o posterior, o Microsoft 365;",
              "sistema operativo Windows 10+ o macOS 11+.",
            ],
          },
          {
            type: "p",
            text: "5.2. Limitación de compatibilidad. El Vendedor no garantiza el funcionamiento correcto de los archivos en Google Sheets, LibreOffice Calc, Apple Numbers ni en las versiones móviles de Excel: parte de las fórmulas, macros y elementos de diseño pueden no reproducirse correctamente en esos programas.",
          },
          {
            type: "p",
            text: "5.3. Para acceder a «Tempo Game» se necesita: una computadora personal, una versión actual de Chrome, Safari, Edge o Firefox, y conexión estable a internet.",
          },
          {
            type: "p",
            text: "5.4. Los requisitos técnicos se publican en la página de cada Producto y en esta Oferta antes del pago. Al aceptar la Oferta, el Comprador confirma haberlos revisado y contar con el software y el hardware necesarios.",
          },
        ],
      },
      {
        heading: "6. Precio, pago y comprobante",
        blocks: [
          { type: "p", text: "6.1. El precio del Producto se indica en el Sitio en grivnas. El Vendedor no es contribuyente del IVA." },
          {
            type: "p",
            text: "6.2. El Vendedor puede modificar los precios unilateralmente. Al Comprador se le aplica el precio indicado en el Sitio en el momento de realizar el pedido. El precio no puede cambiar después del pago.",
          },
          {
            type: "p",
            text: "6.3. Los precios promocionales y descuentos son válidos durante el período y en las condiciones indicadas en el Sitio. Las condiciones de la promoción se publican antes de su inicio y no cambian durante su vigencia.",
          },
          {
            type: "p",
            text: "6.4. El pago se realiza a través del servicio de pago WayForPay. El Vendedor no recibe, procesa ni almacena los datos de las tarjetas de pago del Comprador.",
          },
          {
            type: "p",
            text: "6.5. El pago es único. Este contrato no prevé suscripciones, pagos recurrentes ni cargos automáticos.",
          },
          {
            type: "p",
            text: "6.6. El comprobante de pago (recibo fiscal generado por un registrador de caja por software) se envía al correo electrónico indicado por el Comprador al realizar el pedido.",
          },
          {
            type: "p",
            text: "6.7. Las comisiones de los sistemas de pago o del banco emisor, si las hubiera, corren por cuenta del Comprador y no son compensadas por el Vendedor, salvo en caso de reembolso conforme al punto 10.5.",
          },
        ],
      },
      {
        heading: "7. Entrega del Producto",
        blocks: [
          {
            type: "p",
            text: "7.1. Las agendas electrónicas se envían como archivos o un enlace de descarga al correo electrónico indicado por el Comprador al realizar el pedido, dentro de las 24 horas siguientes al pago (por lo general, en pocos minutos).",
          },
          {
            type: "p",
            text: "7.2. El acceso a «Tempo Game» se otorga enviando los datos de acceso o un enlace de invitación al mismo correo electrónico, dentro del mismo plazo.",
          },
          {
            type: "p",
            text: "7.3. La obligación del Vendedor se considera cumplida desde el momento en que se envían los archivos (o el enlace) o los datos de acceso al correo electrónico del Comprador.",
          },
          {
            type: "p",
            text: "7.4. Si el correo no llega, el Comprador debe contactar al soporte (sección 3). El Vendedor volverá a enviar el Producto dentro de las 24 horas siguientes a la solicitud, a otra dirección si es necesario.",
          },
          {
            type: "p",
            text: "7.5. Si por cualquier motivo el Vendedor no entrega el Producto dentro de los 3 (tres) días hábiles siguientes al pago, el Comprador tiene derecho a exigir la devolución íntegra de las sumas pagadas. Los fondos se devuelven dentro de los 5 días hábiles siguientes a dicha solicitud.",
          },
          {
            type: "p",
            text: "7.6. El Comprador es responsable de la exactitud del correo electrónico que indique. El reenvío del Producto por un error en la dirección se realiza de forma gratuita a solicitud del Comprador.",
          },
        ],
      },
      {
        heading: "8. Período de acceso",
        blocks: [
          {
            type: "p",
            text: "8.1. Los archivos de las agendas electrónicas se entregan al Comprador de forma indefinida y se almacenan en sus propios dispositivos. El Vendedor no garantiza la disponibilidad indefinida del enlace de descarga, pero se compromete a reenviar el archivo adquirido a solicitud del Comprador dentro de los 12 meses siguientes a la fecha de compra.",
          },
          {
            type: "p",
            text: "8.2. El acceso a «Tempo Game» se otorga de forma indefinida, durante todo el período en que el servicio esté operativo — el pago es único, sin suscripción (punto 6.5).",
          },
          { type: "p", text: "8.3. Interrupción del servicio. Si el Vendedor decide interrumpir «Tempo Game», deberá:" },
          {
            type: "list",
            items: [
              "notificar a los Compradores por correo electrónico con una antelación mínima de 60 días naturales;",
              "ofrecer la posibilidad de exportar los datos del Comprador en formato .xlsx o .csv durante todo el período de aviso.",
            ],
          },
          { type: "p", text: "8.4. Las actualizaciones de «Tempo Game» se entregan al Comprador de forma gratuita durante el período de acceso." },
        ],
      },
      {
        heading: "9. Condiciones especiales del acceso anticipado a «Tempo Game»",
        blocks: [
          {
            type: "p",
            text: "9.1. «Tempo Game» se ofrece en estado beta (acceso anticipado). El Comprador paga por el alcance de funcionalidad realmente disponible y descrito en el Sitio en el momento del pago.",
          },
          { type: "p", text: "9.2. A la fecha de esta versión de la Oferta:" },
          {
            type: "list",
            items: [
              "la funcionalidad completa está disponible en la versión de computadora;",
              "las versiones móviles están en desarrollo.",
            ],
          },
          {
            type: "p",
            text: "9.3. El Vendedor hace esfuerzos razonables para seguir desarrollando el servicio, pero no garantiza plazos concretos para el lanzamiento de funciones específicas. Las declaraciones sobre planes de desarrollo son orientativas y no forman parte del objeto de este contrato.",
          },
          {
            type: "p",
            text: "9.4. El Comprador entiende y acepta que en una versión beta son posibles fallos técnicos e indisponibilidad temporal del servicio. El Vendedor se compromete a corregir los problemas detectados en un plazo razonable.",
          },
          {
            type: "p",
            text: "9.5. Esta sección no exime al Vendedor de su responsabilidad por la conformidad del Producto con la descripción publicada en el Sitio en el momento de la venta.",
          },
        ],
      },
      {
        heading: "10. Calidad, conformidad y devoluciones",
        blocks: [
          {
            type: "p",
            text: "10.1. El Producto es contenido digital cuya entrega comienza inmediatamente después del pago. Al pagar el Producto, el Comprador otorga su consentimiento expreso a la entrega inmediata de contenido digital y confirma que el derecho a desistir de este contrato por cambio de parecer no se aplica una vez iniciada la entrega, en la medida permitida por la legislación de Ucrania.",
          },
          { type: "p", text: "10.2. El Vendedor garantiza que el Producto se ajusta a la descripción publicada en el Sitio en el momento del pago." },
          {
            type: "p",
            text: "10.3. Devolución condicional. No obstante el punto 10.1, el Vendedor devuelve los fondos dentro de los 14 días siguientes a la fecha de pago cuando exista un motivo justificado:",
          },
          {
            type: "list",
            items: [
              "el Producto no fue entregado y el problema no se resolvió dentro de las 72 horas siguientes al contacto con soporte;",
              "el Producto no se ajusta sustancialmente a la descripción del plan publicada en el Sitio en el momento de la compra (faltan módulos o funciones indicados en el plan);",
              "el Producto presenta un defecto técnico (por ejemplo, un archivo o fórmulas dañados) que el Vendedor no logró corregir o sustituir dentro de los 5 días hábiles siguientes al aviso;",
              "se produjo un pago duplicado o erróneo.",
            ],
          },
          {
            type: "p",
            text: "10.4. No constituyen motivo de devolución: el cambio de parecer o la falta de necesidad del Producto; no usar el Producto tras la compra; no contar con el software necesario (Microsoft Excel) o un dispositivo compatible — en este caso el Vendedor ayudará con la configuración y ofrecerá una consulta; las limitaciones de la versión beta de «Tempo Game» divulgadas en el Sitio en el momento de la compra (por ejemplo, versiones móviles aún en pruebas).",
          },
          {
            type: "p",
            text: "10.5. Procedimiento. La solicitud se presenta a tempohelp@proton.me o a través del soporte de Telegram @tempo_help dentro de los 14 días siguientes a la compra, indicando el correo electrónico utilizado para el pago, el nombre del plan y una breve descripción del problema. El Vendedor intentará primero resolver el problema (reenvío del Producto, sustitución del archivo o ayuda con la configuración); si no logra resolverlo dentro de los 5 días hábiles, devolverá los fondos en su totalidad por el mismo medio de pago dentro de los 14 días bancarios siguientes. Antes de iniciar una disputa bancaria, el Comprador debe contactar primero al Vendedor: las solicitudes justificadas se atienden dentro de los 3 días hábiles. El procedimiento detallado se establece en la Política de devoluciones.",
          },
          {
            type: "p",
            text: "10.6. Desde el momento de la devolución, la licencia prevista en la sección 11 se extingue: el Comprador debe dejar de usar el Producto y eliminar los archivos recibidos; el acceso a «Tempo Game» se desactiva.",
          },
          {
            type: "p",
            text: "10.7. El Vendedor puede negarse a realizar la devolución si el mismo Comprador ya recibió previamente una devolución por el mismo Producto.",
          },
          {
            type: "p",
            text: "10.8. Independientemente de las condiciones de esta sección, el Comprador que sea Consumidor conserva todos los derechos previstos en la Ley de Ucrania «Sobre la Protección de los Derechos del Consumidor», incluido el derecho a exigir la devolución en caso de disconformidad sustancial del Producto con su descripción, o de imposibilidad de usarlo conforme a su finalidad por causa imputable al Vendedor. Las condiciones de este contrato no limitan ni anulan estos derechos.",
          },
        ],
      },
      {
        heading: "11. Derechos de propiedad intelectual y licencia",
        blocks: [
          {
            type: "p",
            text: "11.1. La adquisición del Producto no implica la transferencia al Comprador de derechos patrimoniales de propiedad intelectual. Todos esos derechos permanecen en poder del Vendedor.",
          },
          {
            type: "p",
            text: "11.2. Alcance de la licencia. El Vendedor otorga una licencia no exclusiva, irrevocable (sujeta al punto 11.6) e indefinida, válida en todo el mundo, para el uso de un ejemplar del Producto por parte del Comprador.",
          },
          { type: "p", text: "11.3. Se permite al Comprador:" },
          {
            type: "list",
            items: [
              "usar el Producto para sus propios fines, incluida su actividad profesional y empresarial;",
              "adaptar, modificar y complementar los archivos según sus propias necesidades;",
              "usar el Producto en un número ilimitado de sus propios dispositivos;",
              "imprimir materiales para uso personal.",
            ],
          },
          { type: "p", text: "11.4. Se prohíbe al Comprador:" },
          {
            type: "list",
            items: [
              "revender, transferir, regalar, alquilar o distribuir de cualquier otra forma los archivos, enlaces o datos de acceso a terceros;",
              "publicar el Producto en acceso abierto, en plataformas para compartir archivos, mensajería o redes sociales — incluso en forma modificada o parcialmente modificada;",
              "crear productos derivados a partir del Producto para su venta posterior o distribución gratuita;",
              "otorgar a terceros acceso a su cuenta de «Tempo Game»;",
              "eliminar o modificar las menciones de autoría.",
            ],
          },
          {
            type: "p",
            text: "11.5. El permiso para usar el Producto dentro de un equipo u organización (varios usuarios) se otorga por separado, con el consentimiento escrito del Vendedor.",
          },
          {
            type: "p",
            text: "11.6. En caso de incumplimiento del punto 11.4, el Vendedor podrá suspender o cancelar el acceso a «Tempo Game» y exigir la indemnización de los daños causados conforme a la ley. En tal caso, no se devolverán los fondos.",
          },
        ],
      },
      {
        heading: "12. Responsabilidad de las partes",
        blocks: [
          {
            type: "p",
            text: "12.1. Tempo es una herramienta de planificación y organización. El Vendedor no garantiza que el Comprador obtenga resultados financieros, profesionales, organizativos o de otro tipo — estos dependen de las acciones del propio Comprador.",
          },
          {
            type: "p",
            text: "12.2. El Vendedor no se hace responsable de la imposibilidad de usar el Producto derivada de que el equipo o software del Comprador no cumpla los requisitos técnicos de la sección 5, siempre que dichos requisitos se hayan puesto en conocimiento del Comprador antes del pago.",
          },
          {
            type: "p",
            text: "12.3. El Vendedor no se hace responsable de fallos del lado del Comprador: falta de conexión a internet, mal funcionamiento del equipo, comportamiento del software antivirus, o la configuración del servicio de correo del Comprador (incluida la clasificación de mensajes como spam).",
          },
          {
            type: "p",
            text: "12.4. El Comprador es el único responsable de conservar los archivos adquiridos y los datos de acceso.",
          },
          {
            type: "p",
            text: "12.5. Limitación de responsabilidad. La responsabilidad total del Vendedor conforme a este contrato se limita al importe efectivamente pagado por el Comprador por el Producto correspondiente. Esta limitación no se aplica en los casos en que la ley disponga lo contrario, en particular la responsabilidad por daños a la vida y la salud, ni a los casos de incumplimiento deliberado por parte del Vendedor de sus obligaciones.",
          },
          {
            type: "p",
            text: "12.6. Fuerza mayor. Las partes quedan exentas de responsabilidad por el incumplimiento de sus obligaciones cuando este se deba a circunstancias de fuerza mayor: acciones militares, ataques con misiles, cortes prolongados de electricidad, averías en redes troncales de comunicación, decisiones de las autoridades públicas o desastres naturales. La existencia de tales circunstancias se acredita conforme al procedimiento establecido por la legislación de Ucrania. Esto no priva al Comprador del derecho a exigir la devolución por un Producto no entregado.",
          },
        ],
      },
      {
        heading: "13. Datos personales",
        blocks: [
          {
            type: "p",
            text: "13.1. El Vendedor trata los datos personales del Comprador (nombre, correo electrónico, datos técnicos del pedido) con el fin de ejecutar este contrato, prestar soporte y cumplir con la legislación fiscal.",
          },
          {
            type: "p",
            text: "13.2. La base legal del tratamiento es la celebración y ejecución de un contrato del que el titular de los datos es parte (art. 11 de la Ley de Ucrania «Sobre la Protección de Datos Personales»).",
          },
          {
            type: "p",
            text: "13.3. El Comprador tiene derecho a acceder a sus datos personales, corregirlos, eliminarlos y retirar el consentimiento al tratamiento, en la medida en que no contradiga la conservación obligatoria de los documentos primarios.",
          },
          {
            type: "p",
            text: "13.4. Las condiciones detalladas se establecen en la Política de Privacidad, que forma parte integral de este contrato.",
          },
        ],
      },
      {
        heading: "14. Atención de solicitudes y resolución de disputas",
        blocks: [
          {
            type: "p",
            text: "14.1. Todas las solicitudes, reclamaciones y quejas se presentan al correo electrónico del Vendedor (sección 3). El Vendedor se compromete a dar una respuesta sustantiva dentro de los 10 días hábiles.",
          },
          { type: "p", text: "14.2. Las partes harán esfuerzos por resolver las disputas mediante negociación." },
          {
            type: "p",
            text: "14.3. Si no se llega a un acuerdo, la disputa se resuelve por vía judicial conforme a la legislación de Ucrania.",
          },
          {
            type: "p",
            text: "14.4. El Comprador que sea Consumidor puede presentar una demanda ante el tribunal de su domicilio (residencia) o del lugar donde se produjo el daño, y queda exento del pago de tasas judiciales en asuntos de protección al consumidor (art. 22 de la Ley de Ucrania «Sobre la Protección de los Derechos del Consumidor»). El Comprador también puede dirigirse al Servicio Estatal de Ucrania de Seguridad Alimentaria y Protección al Consumidor. Las condiciones de este contrato no limitan estos derechos.",
          },
          { type: "p", text: "14.5. Este contrato se rige por la legislación de Ucrania." },
        ],
      },
      {
        heading: "15. Vigencia, modificaciones y otras condiciones",
        blocks: [
          { type: "p", text: "15.1. La Oferta entra en vigor desde su publicación en el Sitio y permanece vigente hasta que el Vendedor la retire." },
          {
            type: "p",
            text: "15.2. El Vendedor puede modificar las condiciones de la Oferta. La nueva versión entra en vigor desde su publicación en el Sitio y no se aplica a los pedidos ya pagados.",
          },
          {
            type: "p",
            text: "15.3. En cuanto al acceso a «Tempo Game» (como relación continuada): el Vendedor notifica a los Compradores los cambios sustanciales por correo electrónico con una antelación mínima de 30 días naturales. Si el Comprador no está de acuerdo con los cambios, puede rescindir el contrato y obtener la devolución proporcional al período de acceso no utilizado.",
          },
          {
            type: "p",
            text: "15.4. Este contrato se redacta en ucraniano. Los idiomas de correspondencia y soporte son ucraniano, inglés y español.",
          },
          {
            type: "p",
            text: "15.5. Si alguna disposición de este contrato fuera declarada inválida, ello no invalidará el resto de sus disposiciones.",
          },
          {
            type: "p",
            text: "15.6. Forman parte integral de este contrato: la Política de devoluciones, la Política de Privacidad y la descripción del Producto en la página correspondiente del Sitio.",
          },
        ],
      },
      {
        heading: "16. Datos del Vendedor",
        blocks: [
          { type: "p", text: "Oleksandr Lomaka, empresario individual (ФОП)" },
          { type: "p", text: "NIF/CIF: 3712001990" },
          { type: "p", text: "Registro estatal: n.º 265126138813" },
          { type: "p", text: "Dirección: Kiev, Ucrania" },
          { type: "p", text: "E-mail: tempohelp@proton.me" },
          { type: "p", text: "Telegram: @tempo_help" },
          { type: "p", text: "Sitio: tempo.in.ua" },
          { type: "p", text: "IBAN: UA563220010000026005380018433" },
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

export const refundPolicy: Record<Locale, LegalDoc> = {
  uk: {
    title: "Політика повернення",
    updated: "09.08.2026",
    intro:
      "Товари Tempo — цифрові товари, які надаються миттєво. Ми повертаємо кошти протягом 14 днів, якщо щось справді пішло не так — і завжди спершу намагаємося вирішити проблему. Ми не повертаємо кошти через зміну наміру; натомість пропонуємо реальну допомогу: підтримку з налаштуванням та особисту консультацію.",
    sections: [
      {
        heading: "1. Коли ви маєте право на повне повернення",
        blocks: [
          {
            type: "p",
            text: "Ви маєте право на повне повернення коштів, якщо протягом 14 днів з моменту оплати виникла одна з таких ситуацій:",
          },
          {
            type: "list",
            items: [
              "Товар не надано — ви не отримали файл або доступ, звернулися до підтримки, і ми не змогли надати Товар протягом 72 годин;",
              "Товар суттєво не відповідає опису на Сайті на момент покупки (відсутні модулі чи функції, заявлені у вашому тарифі);",
              "Товар має технічний дефект (наприклад, пошкоджений файл чи формули), який ми не змогли усунути або замінити протягом 5 робочих днів після вашого звернення;",
              "подвійна або помилкова оплата — з вас списали кошти двічі або на неправильну суму.",
            ],
          },
        ],
      },
      {
        heading: "2. Що не є підставою для повернення",
        blocks: [
          {
            type: "list",
            items: [
              "зміна наміру або відсутність потреби в Товарі;",
              "невикористання Товару після покупки;",
              "відсутність необхідного програмного забезпечення (Microsoft Excel) чи сумісного пристрою — вимоги вказані на Сайті; у такому разі ми допоможемо з налаштуванням і проведемо консультацію;",
              "обмеження бета-версії «Tempo Game», розкриті на Сайті на момент покупки (наприклад, мобільні версії ще тестуються).",
            ],
          },
        ],
      },
      {
        heading: "3. Як це працює",
        blocks: [
          {
            type: "p",
            text: "3.1. Зверніться до нас протягом 14 днів з дати покупки: Telegram @tempo_help або email tempohelp@proton.me. Вкажіть email, використаний для оплати, назву тарифу та короткий опис проблеми (скриншот допоможе).",
          },
          {
            type: "p",
            text: "3.2. Спершу ми усуваємо проблему. Ми намагаємося вирішити питання: повторно надсилаємо Товар, замінюємо файл або допомагаємо з налаштуванням. Більшість звернень вирішується так протягом дня.",
          },
          {
            type: "p",
            text: "3.3. Якщо обґрунтовану проблему не вдалося усунути протягом 5 робочих днів, ми повертаємо кошти в повному обсязі тим самим способом оплати протягом 14 банківських днів. Точний строк надходження коштів залежить від вашого банку.",
          },
        ],
      },
      {
        heading: "4. Звернення замість чарджбеку",
        blocks: [
          {
            type: "p",
            text: "Якщо щось пішло не так, будь ласка, зверніться до нас до відкриття спору в банку — ми вирішуємо обґрунтовані випадки швидше, ніж процедура чарджбеку, і відповідаємо на кожне звернення протягом 3 робочих днів.",
          },
        ],
      },
      {
        heading: "5. Зв'язок із Публічною офертою",
        blocks: [
          {
            type: "p",
            text: "Ця Політика повернення є невід'ємною частиною Публічної оферти та деталізує розділ 10 «Якість, відповідність та повернення коштів». У разі суперечностей між документами застосовуються умови цієї Політики як спеціального документа щодо повернення коштів.",
          },
          {
            type: "p",
            text: "Незалежно від умов цієї Політики, Покупець-Споживач зберігає всі права, передбачені Законом України «Про захист прав споживачів».",
          },
        ],
      },
    ],
  },
  en: {
    title: "Refund Policy",
    updated: "August 9, 2026",
    intro:
      "Tempo products are digital goods delivered instantly. We refund purchases within 14 days when something is genuinely wrong — and we always try to fix the problem first. We do not refund for a change of mind; instead, we offer real help: setup assistance and a personal consultation.",
    sections: [
      {
        heading: "1. When you're eligible for a full refund",
        blocks: [
          {
            type: "p",
            text: "You are eligible for a full refund if, within 14 days of purchase, one of the following applies:",
          },
          {
            type: "list",
            items: [
              "The product was not delivered — you did not receive the file or access, you contacted support, and we failed to deliver within 72 hours;",
              "The product materially does not match its description on the Site at the time of purchase (missing modules or functions listed in your plan);",
              "The product has a technical defect (e.g., a broken file or formulas) that we failed to fix or replace within 5 business days after you reported it;",
              "Duplicate or erroneous payment — you were charged twice or charged the wrong amount.",
            ],
          },
        ],
      },
      {
        heading: "2. What is not a valid reason for a refund",
        blocks: [
          {
            type: "list",
            items: [
              "Change of mind, or no longer needing the product;",
              "Not using the product after purchase;",
              "Not having the required software (Microsoft Excel) or a supported device — the requirements are listed on the Site; in this case we will help you set things up and offer a consultation;",
              "Beta limitations of Tempo Game that were disclosed on the Site at the time of purchase (e.g., mobile versions in testing).",
            ],
          },
        ],
      },
      {
        heading: "3. How it works",
        blocks: [
          {
            type: "p",
            text: "3.1. Contact us within 14 days of purchase: Telegram @tempo_help or email tempohelp@proton.me. Include the email used for payment, the plan name, and a short description of the problem (a screenshot helps).",
          },
          {
            type: "p",
            text: "3.2. We fix it first. We will try to resolve the issue — re-deliver, replace the file, or walk you through setup. Most issues are solved this way within a day.",
          },
          {
            type: "p",
            text: "3.3. If we cannot resolve an eligible issue within 5 business days, we will issue a full refund to the original payment method within 14 banking days. The exact time for funds to arrive depends on your bank.",
          },
        ],
      },
      {
        heading: "4. A request instead of a chargeback",
        blocks: [
          {
            type: "p",
            text: "If anything went wrong, please contact us before opening a bank dispute — we resolve eligible cases faster than a chargeback procedure, and we respond to every request within 3 business days.",
          },
        ],
      },
      {
        heading: "5. Relationship to the Terms of Service",
        blocks: [
          {
            type: "p",
            text: "This Refund Policy is an integral part of the Terms of Service and elaborates on section 10 (\"Quality, conformity, and refunds\"). In case of any conflict between the documents, this Policy governs as the specific document on refunds.",
          },
          {
            type: "p",
            text: "Regardless of the terms of this Policy, a Buyer who is a Consumer retains all rights under the Law of Ukraine \"On Consumer Rights Protection.\"",
          },
        ],
      },
    ],
  },
  es: {
    title: "Política de devoluciones",
    updated: "9 de agosto de 2026",
    intro:
      "Los productos de Tempo son bienes digitales que se entregan de forma instantánea. Devolvemos el dinero dentro de los 14 días siguientes a la compra cuando algo realmente ha ido mal, y siempre intentamos solucionar el problema primero. No realizamos devoluciones por cambio de parecer; en su lugar, ofrecemos ayuda real: asistencia con la configuración y una consulta personal.",
    sections: [
      {
        heading: "1. Cuándo tienes derecho a una devolución íntegra",
        blocks: [
          {
            type: "p",
            text: "Tienes derecho a una devolución íntegra si, dentro de los 14 días siguientes a la compra, se da alguna de estas situaciones:",
          },
          {
            type: "list",
            items: [
              "El producto no fue entregado — no recibiste el archivo o el acceso, contactaste al soporte y no logramos entregarlo dentro de las 72 horas;",
              "El producto no se ajusta sustancialmente a su descripción en el Sitio en el momento de la compra (faltan módulos o funciones indicados en tu plan);",
              "El producto presenta un defecto técnico (por ejemplo, un archivo o fórmulas dañados) que no logramos corregir o sustituir dentro de los 5 días hábiles siguientes a tu aviso;",
              "Pago duplicado o erróneo — se te cobró dos veces o se te cobró un importe incorrecto.",
            ],
          },
        ],
      },
      {
        heading: "2. Qué no es un motivo válido de devolución",
        blocks: [
          {
            type: "list",
            items: [
              "Cambio de parecer o falta de necesidad del producto;",
              "No usar el producto después de comprarlo;",
              "No contar con el software necesario (Microsoft Excel) o un dispositivo compatible — los requisitos están indicados en el Sitio; en este caso te ayudaremos con la configuración y te ofreceremos una consulta;",
              "Limitaciones de la versión beta de Tempo Game divulgadas en el Sitio en el momento de la compra (por ejemplo, versiones móviles en pruebas).",
            ],
          },
        ],
      },
      {
        heading: "3. Cómo funciona",
        blocks: [
          {
            type: "p",
            text: "3.1. Contáctanos dentro de los 14 días siguientes a la compra: Telegram @tempo_help o email tempohelp@proton.me. Indica el correo utilizado para el pago, el nombre del plan y una breve descripción del problema (una captura de pantalla ayuda).",
          },
          {
            type: "p",
            text: "3.2. Primero solucionamos el problema. Intentaremos resolver la incidencia: reenviar el producto, sustituir el archivo o guiarte en la configuración. La mayoría de los casos se resuelven así en un día.",
          },
          {
            type: "p",
            text: "3.3. Si no logramos resolver un problema justificado dentro de los 5 días hábiles, realizaremos una devolución íntegra al método de pago original dentro de los 14 días bancarios siguientes. El plazo exacto de llegada de los fondos depende de tu banco.",
          },
        ],
      },
      {
        heading: "4. Una solicitud en lugar de un contracargo",
        blocks: [
          {
            type: "p",
            text: "Si algo salió mal, por favor contáctanos antes de abrir una disputa con tu banco — resolvemos los casos justificados más rápido que un procedimiento de contracargo, y respondemos a cada solicitud dentro de los 3 días hábiles.",
          },
        ],
      },
      {
        heading: "5. Relación con la Oferta pública",
        blocks: [
          {
            type: "p",
            text: "Esta Política de devoluciones forma parte integral de la Oferta pública y desarrolla la sección 10 («Calidad, conformidad y devoluciones»). En caso de conflicto entre los documentos, prevalece esta Política como documento específico sobre devoluciones.",
          },
          {
            type: "p",
            text: "Independientemente de las condiciones de esta Política, el Comprador que sea Consumidor conserva todos los derechos previstos en la Ley de Ucrania «Sobre la Protección de los Derechos del Consumidor».",
          },
        ],
      },
    ],
  },
};
