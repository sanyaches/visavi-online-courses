import heroBlock from './index-page/heroBlock.js'
import portfolio from './index-page/portfolio'

export default {
  ...heroBlock,
  ...portfolio,

  main_card_more: 'Узнать цену',

  common: {
    free: 'Бесплатно',
    edit: 'Редактировать',
    delete: 'Удалить',
    back: 'Назад',
    currency: {
      RUB: 'рублей',
      USD: 'USD'
    }
  },
  success_payment: {
    title: 'Успешная оплата, ожидаем перенаправления...'
  },
  error_payment: {
    title: 'Ошибка в оплате, попробуйте снова...'
  },
  agreement: {
    title: 'Публичная оферта о предоставлении услуг'
  },
  privacy_policy: {
    title: 'Политика конфиденциальности на платформе vikosto',
    paragraph: {
      first: `
        Общие положения

        Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных Савкина Виктория Денисовна, ИНН: 561019006810 (далее – Оператор).
        Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
        Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://www.vikosto.net.
      `,
      second: `
        Основные понятия, используемые в Политике
        Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;
        Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);
        Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://www.vikosto.net;
        Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;
        Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;
        Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;
        Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;
        Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://www.vikosto.net;
        Пользователь – любой посетитель веб-сайта https://www.vikosto.net;
        Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;
        Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;
        Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;
        Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.
      `,
      third: `
        Оператор может обрабатывать следующие персональные данные Пользователя

        Фамилия, имя, отчество;
        Электронный адрес;
        Номера телефонов;
        Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
        Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.
      `,
      fourth: `
        Цели обработки персональных данных

        Цель обработки персональных данных Пользователя — заключение, исполнение и прекращение гражданско-правовых договоров; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.
        Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты vi.kosto@yandex.ru с пометкой «Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».
        Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
      `,
      fifth: `
        Правовые основания обработки персональных данных

        Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://www.vikosto.net. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
        Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
      `,
      sixth: `
        Порядок сбора, хранения, передачи и других видов обработки персональных данных

        Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.

        Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
        Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
        В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора vi.kosto@yandex.ru с пометкой «Актуализация персональных данных».
        Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора vi.kosto@yandex.ru с пометкой «Отзыв согласия на обработку персональных данных».
      `,
      seventh: `
        Трансграничная передача персональных данных

        Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
        Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.
      `,
      eighth: `
        Заключительные положения

        Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты vi.kosto@yandex.ru.
        В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
        Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://www.vikosto.net/privacy-policy.
      `
    }
  },
  admin: {
    add_lesson_btn: 'Добавить урок',
    no_lessons: 'Не найдено уроков',
    delete_course_confirmation: 'Вы точно хотите удалить курс \'{name}\' ?',
    delete_lesson_confirmation: 'Вы точно хотите удалить урок \'{name}\' ?',
    list_courses: 'Список курсов',
    list_single_lessons: 'Список отдельных уроков',
    no_courses: 'Нет курсов',
    no_single_lessons: 'Нет отдельных уроков',
    single_lessons_loading: 'Загружается список отдельных уроков...',
    courses_loading: 'Загружается список курсов...',
    list_lessons: 'Уроки',
    add_course: {
      seo: {
        title: 'Страница добавления курса'
      },
      title: 'Добавить курс',
      form: {
        name: 'Имя',
        title: 'Заголовок',
        description: 'Описание',
        short_description: 'Описание на главной (коротко)',
        image_url: 'Ссылка на изображение',
        thumbnail_url: 'Ссылка на миниатюру',
        card_image_first: 'Ссылка картинки на главную',
        card_image_second: 'Ссылка второй картинки на главную',
        promo_url: 'Ссылка на промо',
        price: 'Цена',
        access_months: 'Месяцев доступа',
        locale: 'Локализация-язык (en|ru|..)'
      },
      submit: 'Добавить'
    },
    add_lesson: {
      seo: {
        title: 'Страница добавления урока'
      },
      title: 'Добавить урок',
      form: {
        name: 'Имя',
        title: 'Заголовок',
        category: 'Категория',
        description: 'Описание',
        short_description: 'Короткое описание',
        video_url: 'Видео ссылка',
        thumbnail_url: 'Ссылка на миниатюру',
        duration: 'Длительность (мин)'
      },
      submit: 'Добавить'
    },
    add_single_lesson: {
      seo: {
        title: 'Страница добавления отдельного урока'
      },
      title: 'Добавить отдельный урок',
      form: {
        name: 'Имя',
        title: 'Заголовок',
        description: 'Описание',
        short_description: 'Описание на главной (коротко)',
        video_url: 'Ссылка на видео',
        thumbnail_url: 'Ссылка на миниатюру',
        card_image_first: 'Ссылка картинки на главную',
        card_image_second: 'Ссылка второй картинки на главную',
        promo_url: 'Ссылка на промо-ролик',
        price: 'Цена',
        duration: 'Длительность (мин)',
        access_months: 'Месяцев доступа',
        locale: 'Локализация-язык (en|ru|..)'
      },
      submit: 'Добавить'
    },
    edit_course: {
      seo: {
        title: 'Страница редактирования курса'
      },
      title: 'Редактировать курс',
      form: {
        name: 'Имя (уникальное)',
        title: 'Заголовок',
        description: 'Описание',
        short_description: 'Описание на главной (коротко)',
        image_url: 'Ссылка на изображение',
        thumbnail_url: 'Ссылка на миниатюру',
        card_image_first: 'Ссылка картинки на главную',
        card_image_second: 'Ссылка второй картинки на главную',
        promo_url: 'Ссылка на промо',
        price: 'Цена',
        access_months: 'Месяцев доступа',
        locale: 'Локализация-язык (en|ru|..)'
      },
      submit: 'Обновить'
    },
    edit_single_lesson: {
      seo: {
        title: 'Страница редактирования отдельного урока'
      },
      title: 'Редактировать отдельный урок',
      form: {
        name: 'Имя (уникальное)',
        title: 'Заголовок',
        description: 'Описание',
        short_description: 'Описание на главной (коротко)',
        video_url: 'Ссылка на видео',
        thumbnail_url: 'Ссылка на миниатюру',
        card_image_first: 'Ссылка картинки на главную',
        card_image_second: 'Ссылка второй картинки на главную',
        promo_url: 'Ссылка на промо',
        price: 'Цена',
        duration: 'Длительность (мин)',
        access_months: 'Месяцев доступа',
        locale: 'Локализация-язык (en|ru|..)'
      },
      submit: 'Обновить'
    },
    add_course_button: 'Добавить новый курс',
    add_single_lesson_button: 'Добавить новый отдельный урок',
    to_purchases: 'Смотреть все покупки курсов пользователей',
    purchases: {
      title: 'Список покупок курсов пользователей'
    }
  },
  login: {
    submit: 'Войти',
    title: 'Вход в личный кабинет',
    seo: {
      title: 'Страница входа'
    },
    form: {
      email: 'Эл. почта (email)',
      password: 'Пароль'
    },
    to_register: 'Нет аккаунта?',
    to_register_link: 'Зарегистрироваться',
    to_recovery: 'Забыли пароль?',
    to_recovery_link: 'Восстановить по email'
  },
  register: {
    submit: 'Регистрация',
    title: 'Регистрация аккаунта',
    seo: {
      title: 'Регистрация аккаунта'
    },
    form: {
      password: 'Пароль',
      repeat_password: 'Повторить пароль',
      first_name: 'Имя',
      last_name: 'Фамилия',
      email: 'Эл. почта (email)',
      confirm_agreement: 'Согласен с публичной офертой',
      confirm_agreement_link: 'Ссылка на оферту',
      confirm_privacy: 'и политикой приватности',
      confirm_privacy_link: 'Ссылка на политику'
    },
    to_login: 'Уже имеется аккаунт?',
    to_login_link: 'Войти'
  },
  recovery: {
    title: 'Восстановить пароль',
    seo: {
      title: 'Восстановить пароль'
    },
    submit: 'Отправить запрос на восстановление',
    check_email: 'Запрос на восстановление успешно создан, проверьте ваш email',
    form: {
      email: 'Email учетной записи'
    }
  },
  offer: {
    title: 'Завершение покупки',
    text: 'Вы недавно хотели купить: {title}',
    access: 'Доступ: {access}',
    proceed: 'Оплатить'
  },
  checkout: {
    title: 'Оформление покупки',
    name: 'Вы приобретаете: {title}',
    access: 'Доступ: {access}',
    price: 'Цена',
    proceed: 'Оплатить',
    proceed_foreign: 'Оплатить иностранной картой',
    price_total: 'Итого',
    price_sum: 'Стоимость',
    discount: 'Скидка',
    payment_message: 'Оплата, за "{title}" от {from}. После оплаты нажмите "Вернуться в магазин"',
    coupon: {
      title: 'Введите промокод',
      code: 'Промокод',
      apply: 'Применить промокод',
      applied_coupon: 'Промокод "{code}" успешно применен.',
      error: {
        COUPON_NOT_FOUND: 'Промокод не найден, попробуйте другой.',
        COUPON_NOT_ALLOWED: 'Вы уже использовали этот промокод.'
      }
    }
  },
  index: {
    courses: 'Курсы',
    courses_myself: 'Курсы для себя',
    lessons: 'Уроки',
    privacy_policy: 'Политика приватности',
    public_offer: 'Публичная оферта',
    admin: 'Админ',
    login: 'Войти',
    logout: 'Выйти',
    profile: 'Профиль',
    register: 'Регистрация',
    profile_tooltip: 'Перейти в профиль',
    about_title: 'Кому подойдет онлайн обучение?',
    author_title: 'Обо мне',
    author_signature: 'Victoria Kosto',
    author_want_study: 'Записаться',
    author_description_1: 'Привет! Меня зовут Виктория Косто - я стилист по причёскам и преподаватель базового курса и уроков повышения для работающих мастеров. В эту профессию я пришла из-за большой любви к красивому и прекрасному.',
    author_description_2: ' Я отношусь к своей работе с максимальной ответственностью и творчеством, поэтому сама регулярно повышаю свои знания и навыки. ',
    author_description_3: 'В причёсках я очень ценю лёгкость, лаконичность и чистоту. Мне очень нравится вдохновлять клиентов и учеников через свой подход к работе. В своих онлайн-уроках я научу вас правильно и бережно работать с волосами, а также создавать максимально стойкие, легкие, чистые и красивые причёски.',
    author_description_mobile: 'Привет! Меня зовут Виктория Косто - я стилист по причёскам и преподаватель базового курса и уроков повышения для работающих мастеров. В своих онлайн-уроках я научу вас правильно и бережно работать с волосами, а также создавать максимально стойкие, легкие, чистые и красивые причёски.',
    education_programs_title: 'Обучение прическам',
    services_title: 'Услуги',
    reviews_services_title: 'Отзывы об услугах',
    reviews_education_title: 'Отзывы об обучении',
    main_title_subtitle: 'Онлайн обучение по прическам',
    courses_title: 'Курсы по прическам',
    courses_yourself_title: 'Курсы для себя',
    lesson_courses_yourself_title: 'Уроки для себя',
    faq_title: 'Вопрос-ответ',
    contacts_title: 'Остались вопросы?',
    contacts_contacts: 'Контакты:',
    right_side: {
      title: 'Привет всем',
      first_paragraph: 'Креатив, фантазия, идеал',
      first_paragraph2: 'здесь нет предела',
      second_paragraph: 'И для большей амбиции -',
      second_paragraph2: 'стань реальным задающим тренды'
    },
    about: {
      item_1: {
        title: 'Работающим',
        title_second_line: 'мастерам',
        description: 'Кто ищет вдохновения и уникальный стиль в работе'
      },
      item_2: {
        title: 'Профессиональным',
        title_second_line: 'визажистам',
        description: 'Кто хочет научиться работать с волосами, делать востребованные стильные образы и увеличить свой доход'
      },
      item_3: {
        title: 'Новичкам',
        title_second_line: 'в профессии',
        description: 'Кто в профессии недавно и хочет преумножить свои знания и закрыть пробелы'
      },
      item_4: {
        title: 'Парикмахерам',
        title_second_line: 'универсалам',
        description: 'Кто хочет изучить новые техники работы с волосами и расширить свой спектр услуг'
      }
    },
    benefits: {
      title: 'Кому подойдут курсы для себя?',
      list: {
        first: {
          title: 'Новичкам',
          content: 'Которые ни разу не держали плойку в руках. Вы научитесь правильно и бережено ухаживать за волосами и делать укладки на себе'
        },
        second: {
          title: 'Отчаянным',
          content: 'У которых локоны абсолютно не держатся. Вы разберёте ошибки, которые совершали при накрутке и научитесь правильно крутить локоны'
        },
        third: {
          title: 'Скептикам',
          content: 'Убеждённым, что на их волосах ничего не получится. Обучение поможет вам лучше понять свои волосы. В уроках вы найдёте стойкие и быстрые схемы накрутки'
        },
        fourth: {
          title: 'Профи',
          content: 'Которые умеют делать себе укладки, но хотят научиться делать что-то новое. Курс содержит уроки по укладкам для себя в разных техниках, поэтому они будут интересны даже тем, кто умеет уже делать себе локоны'
        },
        fifth: {
          title: 'Любящим и заботливым',
          content: 'Которые любят и заботятся о здоровье своих волос. Обучение создано исключительно с большой любовью и заботой о волосах, чтобы сохранить их здоровье, красоту и делать бережные укладки на каждый день'
        },
        sixth: {
          title: 'Ценителям',
          content: 'Которые ценят своё время и деньги. Курс содержит много полезной и структурированной информации о средствах, инструментах и стайлинге. Вы убережете себя от ненужных покупок'
        }
      }
    },
    learned: {
      title: 'Чему научитесь',
      list: {
        first: 'Определять тип кожи головы и волос и сушить волосы на фен без вреда',
        second: 'Подбирать правильный уход для волос, стайлинг и инструмент',
        third: 'Создавать подвижный объем на фен',
        fourth: 'Делать стойкие и красивые укладки в разных техниках'
      }
    },
    faq: {
      first: {
        question: 'Когда можно приступить к обучению ?',
        answer: 'После оплаты у вас сразу же появляется доступ к приобретенным урокам и материалам, то есть вы можете приступ к обучению сразу же.'
      },
      second: {
        question: 'Обязательно ли присылать отработки ?',
        answer: 'Отработки присылать не обязательно. Но для того, чтобы хорошо усвоить материал уроков, рекомендуется выполнять отработки. У вас в доступе будет обратная связь, где мы сможем разобрать все вопросы по вашей отработке, если они будут.'
      },
      third: {
        question: 'На сколько остается доступ к материалам ?',
        answer: `Доступ ко всем материалам уроков и к курсу SILVER у вас будет на 3 месяца.
          Если вы приобрели курс GOLD, то доступ к урокам сохраняется 6 месяцев.
          PDF-материалы к урокам остаются у вас навсегда после скачивания.`
      },
      fourth: {
        question: 'Будет ли обратная связь ?',
        answer: `
          Каждый продукт включает в себя обратную связь от Виктории, чтобы ваше обучение прошло
          максимально результативно. Доступ к обратной связи у вас будет от 1 до 2 месяцев в
          зависимости от приобретенного тарифа.
        `
      },
      fifth: {
        question: 'Получу ли я сертификат ?',
        answer: `
          Да! Вы гарантированно получите сертификат на email через месяц, если пришлете минимум одну отработку по приобретённому обучению. Если вы пришлете все отработки, то сертификат получите намного раньше.
        `
      }
    },
    seo: {
      title: 'Онлайн обучение по прическам - vikosto',
      description: 'Уроки и курсы по свадебным и вечерним прическам онлайн, разные техники накрутки волос, элементы плетения, текстуры, обзор стайлинга и инструментов для волос',
      keywords: 'обучение онлайн прически свадебные укладки vikosto'
    }
  },
  change: {
    form: {
      password: 'Новый пароль',
      repeat_password: 'Повторите пароль'
    },
    seo: {
      title: 'Изменить пароль'
    },
    submit: 'Изменить пароль',
    title: 'Изменить пароль'
  },
  restore: {
    form: {
      password: 'Новый пароль',
      repeat_password: 'Повторите пароль'
    },
    seo: {
      title: 'Переустановить пароль'
    },
    submit: 'Переустановить пароль',
    title: 'Переустановить пароль'
  },
  profile: {
    welcome: 'Добро пожаловать, {name}',
    lessons_title: 'Уроки по прическам',
    files_title: 'Материалы',
    courses_title: 'Курсы',
    certificates_title: 'Сертификаты',
    no_lessons: 'У вас нет купленных уроков.',
    no_courses: 'У вас нет купленных курсов.',
    no_certificates: 'У вас нет сертификатов.',
    no_files: 'У вас нет материалов.',
    change_password: 'Изменить пароль',
    see_lessons: 'Смотреть все уроки',
    see_courses: 'Смотреть все курсы'
  },
  course: {
    seo: {
      title: '{title} - онлайн обучение прическам - vikosto',
      keywords: 'vikosto онлайн курс прически {words}'
    },
    buy_button: 'Купить',
    buy_course_button: 'Курс',
    no_lessons: 'В курсе пока нет уроков',
    list_lessons: 'Уроки',
    category_theory: 'Теоретические уроки',
    category_practice: 'Практические уроки',
    category_bonus: 'Бонусные уроки',
    description: 'Описание:',
    about: 'О курсе',
    access_months: 'Длительность доступа:',
    months: '(в месяцах)',
    duration: 'Количество уроков:',
    watch_title: 'Просмотр промо',
    give_feedback: 'Предоставляется',
    feedback: 'обратная связь',
    homework: 'Прислать отработку',
    materials: 'Смотреть',
    description_title: 'О курсе',
    give_certificate: 'Выдается',
    certificate: 'электронный сертификат',
    price: 'Цена: ',
    buy: 'Купить',
    buy_again: 'Доступ истек, купить снова',
    watch: 'К урокам',
    expired_at: 'Доступ закончится:',
    open_access: 'Открыть доступ к урокам',
    silver: {
      benefits: {
        1: { bold_text: '3', text: 'месяца доступ к урокам' },
        2: { text: 'Теоретический блок' },
        3: { bold_text: '3', text: 'практических урока по созданию причёсок' },
        4: { text: 'Гайд по стайлингу и инструментам' },
        5: { text: 'Ведение соц. сетей' },
        6: { text: 'Урок по обработке фотографий' },
        7: { text: 'Обратная связь от Виктории' },
        8: { text: 'Сертификат о прохождении курса' },
        9: { bold_text: '1', text: 'месяца проверка отработок' }
      }
    },
    gold: {
      benefits: {
        1: { bold_text: '6', text: 'месяцев доступ к урокам' },
        2: { text: 'Теоретический блок' },
        3: { bold_text: '5', text: 'практических уроков по созданию причёсок' },
        4: { text: 'Гайд по стайлингу и инструментам' },
        5: { text: 'Ведение соц. сетей' },
        6: { text: 'Урок по обработке фотографий' },
        7: { text: 'Обратная связь от Виктории' },
        8: { text: 'Сертификат о прохождении курса' },
        9: { bold_text: '2', text: 'месяца проверка отработок' }
      }
    },
    payment_message: 'Оплата, за курс "{courseName}" от {from}. После оплаты нажмите "Вернуться в магазин"'
  },
  lesson_course: {
    seo: {
      title: '{title} - онлайн обучение прическам - vikosto',
      keywords: 'vikosto онлайн урок прически {words}'
    },
    buy_button: 'Купить',
    buy_course_button: 'Урок',
    no_lessons: 'Пока нет уроков',
    list_lessons: 'Видео',
    category_theory: 'Теоретическая часть',
    category_practice: 'Практическая часть',
    description: 'Описание:',
    about: 'Об уроке',
    access_months: 'Длительность доступа:',
    months: '(в месяцах)',
    duration: 'Количество видео:',
    watch_title: 'Просмотр промо',
    give_feedback: 'Предоставляется',
    feedback: 'обратная связь',
    homework: 'Прислать отработку',
    materials: 'Смотреть',
    description_title: 'Об уроке',
    give_certificate: 'Выдается',
    certificate: 'электронный сертификат',
    price: 'Цена: ',
    buy: 'Купить',
    buy_again: 'Доступ истек, купить снова',
    watch: 'К видно',
    expired_at: 'Доступ закончится:',
    open_access: 'Открыть доступ к уроку',
    payment_message: 'Оплата, за урок "{courseName}" от {from}. После оплаты нажмите "Вернуться в магазин"'
  },
  single_lesson: {
    seo: {
      title: '{title} - онлайн обучение прическам - vikosto',
      keywords: 'vikosto онлайн урок прически {words}'
    },
    buy_button: 'Купить',
    buy_course_button: 'урок',
    price: 'Цена: ',
    about: 'Об уроке',
    promo: 'Смотреть промо',
    access_months: 'Длительность доступа:',
    months: '(в месяцах)',
    duration: 'Продолжительность видео:',
    watch_title: 'Просмотр урока',
    watch_promo_title: 'Просмотр промо',
    give_feedback: 'Предоставляется',
    feedback: 'обратная связь',
    homework: 'Прислать отработку',
    materials: 'К материалам',
    description_title: 'Об уроке',
    give_certificate: 'Выдается',
    certificate: 'электронный сертификат',
    files_title: 'Материалы к уроку',
    files_add_button: 'Добавить файл',
    buy: 'Купить',
    buy_free: 'Открыть доступ',
    buy_free_button: 'Открыть',
    buy_free_course_button: 'доступ',
    buy_again: 'Доступ истек, купить снова',
    watch: 'Куплено, к просмотру',
    expired_at: 'Доступ закончится:',
    open_access: 'Открыть доступ к уроку',
    file_form: {
      name: 'Имя файла',
      title: 'Заголовок',
      resource_url: 'Ссылка на ресурс',
      submit: 'Добавить'
    },
    payment_message: 'Оплата, за урок "{lessonName}" от {from}. После оплаты нажмите "Вернуться в магазин"',
    chat_title: 'Обсуждение урока',
    chat_loading: 'Чат загружается...',
    chat_start: 'Здесь вы можете прислать отработку в удобном формате: фото или видео',
    link_chat_1: 'Прислать',
    link_chat_2: 'Отработку'
  },
  chat: {
    chat_title: 'Обсуждение отработок',
    chat_loading: 'Чат загружается...'
  },
  lesson: {
    price: 'Цена: ',
    access_months: 'Длительность доступа (в месяцах): ',
    files_title: 'Материалы к уроку',
    files_add_button: 'Добавить файл',
    file_form: {
      name: 'Имя файла',
      title: 'Заголовок',
      resource_url: 'Ссылка на ресурс',
      submit: 'Добавить'
    },
    chat_link: 'Прислать отработку',
    chat_title: 'Обсуждение урока',
    chat_loading: 'Чат загружается...',
    chat_start: 'Здесь вы можете прислать отработку в удобном формате: фото или видео',
    link_chat_1: 'Прислать',
    link_chat_2: 'Отработку',
    link_discuss: 'Обсудить'
  },
  single_lesson_card: {
    buy: 'Купить',
    learn: 'Подробнее',
    expired_at: 'Доступ закончится:'
  },
  course_card: {
    buy: 'Купить',
    bought: 'Куплен',
    learn: 'Подробнее',
    expired_at: 'Доступ закончится:'
  },
  notify: {
    success_login: 'Успешный вход',
    success_register: 'Успешная регистрация',
    success_add_course: 'Успешное создание курса',
    success_delete_course: 'Успешное удаление курса',
    success_delete_lesson: 'Успешное удаление урока',
    success_edit_course: 'Успешное обновление отдельного урока',
    success_edit_single_lesson: 'Успешное обновление отдельного урока',
    success_add_lesson: 'Успешное создание урока',
    success_add_single_lesson: 'Успешное создание отдельного урока',
    success_add_file: 'Успешное создание файла',
    success_recovery: 'Успешный запрос на восстановление пароля',
    success_restore: 'Успешное восстановление пароля',
    success_change: 'Успешное изменение данных',
    register_then_buy_msg: 'Перед покупкой зарегистрируйтесь или войдите',
    register_then_buy: 'Зарегистрируйтесь или войдите',
    success_add_purchase: 'Успешная покупка курса',
    error: {
      payment_request_id_was_repeated: 'Данный платеж использован',
      payment_request_id_was_repeated_msg: 'Данный платеж ранее был использован для приобретения курса/урока',
      need_agreement_confirmation: 'Необходимо согласие с офертой',
      need_agreement_confirmation_msg: 'Необходимо согласие с публичной офертой',
      user_not_found: 'Неверный email или пароль',
      user_not_found_msg: 'Пользователь с такими данными не найден',
      server_error: 'Ошибка сервера',
      server_error_msg: 'Ошибка сервера, попробуйте позднее',
      validation_error: 'Введенные данные не соответствуют требованиям',
      validation_error_msg: 'Проверьте заполненные поля',
      user_or_email_already_exists_msg: 'Аккаунт с данным email уже существует',
      user_or_email_already_exists: 'Аккаунт уже существует',
      forbidden_error: 'Ошибка авторизации',
      forbidden_error_msg: 'У вас не достаточно прав или вы не авторизованы, попробуйте войти',
      course_already_exists: 'Курс уже существует',
      course_already_exists_msg: 'Пожалуйста проверьте данные, произошло дублирование курса',
      lesson_already_exists: 'Урок уже существует',
      lesson_already_exists_msg: 'Пожалуйста проверьте данные, произошло дублирование урока',
      course_not_found: 'Курс не найден',
      course_not_found_mg: 'Курс не найден, пожалуйста, попробуйте позднее',
      lesson_not_found: 'Урок не найден',
      lesson_not_found_msg: 'Урок не найден, попробуйте позже',
      order_not_found: 'Заказ не найден',
      order_not_found_msg: 'Заказа с таким номером не существует',
      payment_not_valid: 'Платеж не оплачен',
      payment_not_valid_msg: 'Попробуйте купить снова или свяжитесь с нами',
      expired_link_error: 'Срок действия ссылки на восстановление пароля истек',
      expired_link_error_msg: 'Попробуйте создать новый запрос на восстановление пароля',
      passwords_not_matched: 'Пароли не совпадают',
      passwords_not_matched_msg: 'Пожалуйста, проверьте введенные данные, пароли должны совпадать',
      file_already_exists: 'Файл уже существует',
      file_already_exists_msg: 'Пожалуйста проверьте данные, произошло дублирование файла'
    }
  }
}
