import heroBlock from './index-page/heroBlock'
import portfolio from './index-page/portfolio'
import program from './program'
import reachOut from './reachOut'
import faq from './faq'
import guide from './guide'

export default {
  ...heroBlock,
  ...portfolio,
  ...guide,

  program: { ...program },

  reach_out: { ...reachOut },

  faq: { ...faq },

  main_card_more: 'Check price',

  common: {
    free: 'Free',
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    currency: {
      RUB: 'RUB',
      USD: 'USD',
      EUR: 'EUR'
    }
  },
  success_payment: {
    title: 'Successful payment, waiting redirect...'
  },
  error_payment: {
    title: 'Error on payment, try again...'
  },
  agreement: {
    title: 'Agreement with terms of the online-platform vikosto',
    paragraph: {
      first: `
        Исключительные права на интернет-платформу, расположенную по адресу https://www.vikosto.net (далее - Платформа),
        а также на все объекты, размещенные на Платформе, в том числе элементы дизайна, рисунки,
        изображения, видео, фотографии, тексты, описания,
        являющиеся объектами интеллектуальной собственности, принадлежат Савкиной Виктории Денисовне, ИНН: 561019006810.
      `,
      second: `
        Платформа признается составным произведением, то есть произведением, состоящим из
        множества материалов, представляющим собой результат творческого труда. Составные произведения являются объектами авторского права и подлежат правовой охране как результат интеллектуальной деятельности.
      `,
      third: `
        Использование результатов интеллектуальной деятельности или средства индивидуализации,
        осуществляемое без согласия правообладателя, является незаконным и влечет ответственность,
        установленную действующим законодательством (п.1 ст.1229 Гражданского кодекса РФ).
      `
    }
  },
  privacy_policy: {
    title: 'Privacy Policy on the vikosto platform',
    paragraph: {
      first: `
        General Terms

        This personal data processing policy is made in accordance with the requirements of the Federal Law of 27.07.2006. №152-FZ "On Personal Data" and determines the order of processing personal data and measures to ensure the security of personal data Savkina Victoria Denisovna, TIN: 561019006810 (hereinafter - the operator).
        The Operator's main purpose and condition of carrying out its activities is observance of human and citizen's rights and freedoms when processing his/her personal data, including protection of rights to privacy, personal and family secrets.
        This Operator's policy regarding processing of personal data (hereinafter - the Policy) applies to all information that the Operator can obtain about the visitors of the https://www.vikosto.net website.
      `,
      second: `
        Basic concepts used in this Policy

        Automated processing of personal data - processing of personal data by computer equipment;
        Blocking of personal data - temporary termination of processing of personal data (except in cases where processing is necessary to clarify personal data);
        Website means a set of graphic and informational materials, as well as computer programs and databases, ensuring their availability on the Internet at the network address https://www.vikosto.net;
        Information system of personal data - a set of personal data contained in databases of personal data, and information technologies and technical means, providing their processing;
        Personal data depersonalization - actions, as a result of which it is impossible to determine without the use of additional information what personal data belongs to a particular User or other subject of personal data;
        Processing of personal data - any action (operation) or a set of actions (operations), performed with or without the use of automation with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), anonymization, blocking, removal, destruction of personal data;
        Operator - state body, municipal authority, legal or natural person, independently or together with other persons organizing and (or) carrying out processing of personal data, as well as defining the purpose of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data;
        Personal data - any information relating directly or indirectly to a particular or definable User of the https://www.vikosto.net website;
        User - any visitor to https://www.vikosto.net website;
        Provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons;
        Dissemination of personal data - any action aimed at disclosure of personal data to an indefinite range of persons (transfer of personal data) or to familiarize with personal data to an unlimited number of persons, including publication of personal data in the media, placing in information and telecommunications networks or providing access to personal data in any other way;
        Trans-border transfer of personal data - transfer of personal data to a foreign country to a foreign authority, a foreign individual or a foreign legal entity;
        Destruction of personal data - any actions, as a result of which personal data is destroyed irretrievably with impossibility of further restoration of personal data content in information system of personal data and (or) as a result of which tangible carriers of personal data are destroyed.
      `,
      third: `
        The operator can process the following personal data of the User

        Surname, first name, patronymic;
        E-mail address;
        Phone numbers;
        The site also collects and processes impersonal data about visitors (including cookies) using Internet statistical services (Yandex Metrika and Google Analytics and others).
        The above-mentioned data hereinafter in the text of the Policy is combined with the general concept of Personal Data.
      `,
      fourth: `
        Purposes of personal data processing

        The purpose of processing of the User's personal data is the conclusion, execution and termination of civil law contracts; providing the User with access to services, information and/or materials contained on the website.
        Also the Operator has the right to send the User notifications about new products and services, special offers and various events. The User can always refuse to receive information messages by sending a letter to the Operator to the address vi.kosto@yandex.ru with the note "Refuse notifications about new products and services and special offers".
        User's impersonal data collected via Internet statistic services serves to collect information about the User's actions on the site, improve the quality of the site and its content.
      `,
      fifth: `
        Legal basis for processing personal data

        The Operator processes the User's personal data only in case the User fills them in and/or sends them by himself through the special forms located on the website https://www.vikosto.net. By filling out the relevant forms and/or sending his personal data to the Operator the User expresses his consent to this Policy.
        The Operator processes anonymized data about the User in case it is allowed in the settings of the User's browser (the saving of "cookie" files and the use of JavaScript technology are enabled).
      `,
      sixth: `
        Procedure for collecting, storing, transferring and other processing of personal data

        The security of personal data processed by the Operator is ensured by implementing legal, organizational and technical measures necessary to comply fully with the requirements of applicable laws in the field of personal data protection.

        The operator ensures the safety of personal data and takes all possible measures to exclude access to personal data by unauthorized persons.
        The User's personal data will never, under no circumstances be transferred to third parties, except in cases related to the execution of the current legislation.
        In case of identification of inaccuracies in personal data, the User may update them independently, by sending a notice to the Operator's e-mail address vi.kosto@yandex.ru with a note "Updating of personal data".
        The period of processing of personal data is unlimited. The User may withdraw their consent to the processing of personal data at any time by sending a notice to the Operator via e-mail to the Operator's e-mail address vi.kosto@yandex.ru marked "Withdrawal of consent to the processing of personal data".
      `,
      seventh: `
        Cross-border transfer of personal data

        Before transborder transfer of personal data, the operator shall make sure that the foreign country, to the territory of which the transfer of personal data is intended, provides reliable protection of personal data subjects rights.
        Transborder transfer of personal data to foreign countries that do not meet the above requirements may be performed only if the personal data subject consents in writing to the transborder transfer of his/her personal data and/or execution of an agreement to which the personal data subject is a party.
      `,
      eighth: `
        Final Terms

        The user can get any clarifications on the questions of interest concerning the processing of his personal data by contacting the Operator by e-mail at vi.kosto@yandex.ru.
        This document will reflect any changes in the Operator's personal data processing policy. The Policy is valid indefinitely until replaced by a new version.
        The current version of the Policy is freely available on the Internet at https://www.vikosto.net/privacy-policy.
      `
    }
  },
  admin: {
    add_lesson_btn: 'Add lesson',
    no_lessons: 'No lessons found',
    delete_course_confirmation: 'Are you sure to delete course \'{name}\' ?',
    delete_lesson_confirmation: 'Are you sure to delete lesson \'{name}\' ?',
    list_courses: 'List courses',
    list_single_lessons: 'List single lessons',
    no_courses: 'No courses',
    no_single_lessons: 'No single lessons',
    courses_loading: 'List courses is loading...',
    single_lessons_loading: 'List single lessons is loading...',
    list_lessons: 'Lessons',
    add_course: {
      seo: {
        title: 'Addition course page'
      },
      title: 'Add a course',
      form: {
        name: 'Name',
        title: 'Title',
        description: 'Description',
        short_description: 'Description for main page (short)',
        image_url: 'Image URL',
        thumbnail_url: 'Thumbnail URL',
        card_image_first: 'Image link main page first',
        card_image_second: 'Image link main page second',
        promo_url: 'Promo URL',
        price: 'Price',
        access_months: 'Access months',
        locale: 'Locale (en|ru|..)'
      },
      submit: 'Add'
    },
    add_lesson: {
      seo: {
        title: 'Addition lesson page'
      },
      title: 'Add a lesson',
      form: {
        name: 'Name',
        title: 'Title',
        category: 'Category',
        description: 'Description',
        short_description: 'Short description',
        video_url: 'Video URL',
        thumbnail_url: 'Thumbnail URL',
        duration: 'Duration (min)'
      },
      submit: 'Add'
    },
    add_single_lesson: {
      seo: {
        title: 'Addition single lesson page'
      },
      title: 'Add a single lesson',
      form: {
        name: 'Name',
        title: 'Title',
        description: 'Description',
        short_description: 'Description for main page (short)',
        video_url: 'Video URL',
        thumbnail_url: 'Thumbnail URL',
        card_image_first: 'Image link main page first',
        card_image_second: 'Image link main page second',
        promo_url: 'Promo URL',
        price: 'Price',
        duration: 'Duration (min)',
        access_months: 'Access months',
        locale: 'Locale (en|ru|..)'
      },
      submit: 'Add'
    },
    edit_course: {
      seo: {
        title: 'Edit course page'
      },
      title: 'Edit a course',
      form: {
        name: 'Name (unique)',
        title: 'Title',
        description: 'Description',
        short_description: 'Description for main page (short)',
        image_url: 'Image URL',
        thumbnail_url: 'Thumbnail URL',
        card_image_first: 'Image link main page first',
        card_image_second: 'Image link main page second',
        promo_url: 'Promo URL',
        price: 'Price',
        access_months: 'Access months',
        locale: 'Locale (en|ru|..)'
      },
      submit: 'Update'
    },
    edit_single_lesson: {
      seo: {
        title: 'Edit single lesson page'
      },
      title: 'Edit a single lesson',
      form: {
        name: 'Name',
        title: 'Title',
        description: 'Description',
        short_description: 'Description for main page (short)',
        video_url: 'Video URL',
        thumbnail_url: 'Thumbnail URL',
        card_image_first: 'Image link main page first',
        card_image_second: 'Image link main page second',
        promo_url: 'Promo URL',
        price: 'Price',
        duration: 'Duration (min)',
        access_months: 'Access months',
        locale: 'Locale (en|ru|..)'
      },
      submit: 'Update'
    },
    add_course_button: 'Add new course',
    add_single_lesson_button: 'Add new single lesson',
    to_purchases: 'See all user course purchases',
    purchases: {
      title: 'List user course purchases'
    }
  },
  login: {
    submit: 'Log in',
    title: 'Login',
    seo: {
      title: 'Log in page'
    },
    form: {
      email: 'Email',
      password: 'Password'
    },
    to_register: 'Have no account?',
    to_register_link: 'Register',
    to_recovery: 'Forget password?',
    to_recovery_link: 'Recover password by email'
  },
  register: {
    submit: 'Register',
    title: 'Register an account',
    seo: {
      title: 'Register an account'
    },
    form: {
      password: 'Password',
      repeat_password: 'Repeat password',
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      confirm_agreement: 'Agree with terms of service',
      confirm_agreement_link: 'Agreement link',
      confirm_privacy: 'and privacy policy',
      confirm_privacy_link: 'Policy link'
    },
    to_login: 'Do you already have an account?',
    to_login_link: 'Login'
  },
  recovery: {
    title: 'Recover your password',
    submit: 'Send recovering request',
    check_email: 'Recovery request was created, check your email',
    form: {
      email: 'Account email'
    }
  },
  change: {
    form: {
      password: 'New password',
      repeat_password: 'Repeat password'
    },
    seo: {
      title: 'Change password'
    },
    submit: 'Change password',
    title: 'Change password'
  },
  restore: {
    form: {
      password: 'New password',
      repeat_password: 'Repeat new password'
    },
    seo: {
      title: 'Restore password'
    },
    submit: 'Send request',
    title: 'Restore your password'
  },
  offer: {
    title: 'Finish buying',
    text: 'You recently wanted to buy: {title}',
    access: 'Access: {access}',
    proceed: 'Pay'
  },
  checkout: {
    title: 'Purchase processing',
    name: 'You are getting: {title}',
    access: 'Access: {access}',
    price: 'Price',
    proceed: 'Pay',
    price_total: 'Total',
    price_sum: 'Amount',
    discount: 'Discount',
    payment_message: 'Payment for "{title}" from {from}. Please, click "Back to the store" after payment',
    guide_payment_message: 'Payment for "Styling and hair tools guide" from {from}. Please, click "Back to the store" after payment',
    coupon: {
      title: 'Promocode for buying',
      code: 'Enter promocode',
      apply: 'Apply promocode',
      applied_coupon: 'Promocode "{code}" applied successfully.',
      error: {
        COUPON_NOT_FOUND: 'Promocode was not found, please, try another one.',
        COUPON_NOT_ALLOWED: 'You have already used this promocode.'
      }
    }
  },
  index: {
    education: 'Online education',
    education_online_link: 'Online education',
    lessons_title: 'Online lessons',
    services: 'Services',
    services_link: 'Services',
    reviews_link: 'Reviews',
    contacts_link: 'Contacts',
    education_link: 'Education',
    privacy_policy: 'Privacy policy',
    public_offer: 'Terms of service',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    profile: 'Profile',
    register: 'Register',
    profile_tooltip: 'To profile',
    name: 'VIKOSTO',
    about_title: 'Who does suit online education?',
    author_title: 'About Victoria',
    author_signature: 'Victoria Kosto',
    author_want_study: 'Study by Victoria\'s courses',
    author_description_1: 'Hi, my name is Victoria Kosto and I am a stylist and tutor in hairstyling courses. I came into this profession more than 4 years ago because of my great love for the beautiful and lovely.',
    author_description_2: 'I treat my work with maximum responsibility and creativity and regularly improve my knowledge and skills myself.',
    author_description_3: 'In hairstyles, I value lightness, brevity, and purity. I love to inspire clients and students through my approach to my work. I have a large and very loyal base of clients and students from all over the world. In my training, I will teach you how to work properly and gently with hair, and how to create the most permanent, light, clean, and beautiful hairstyles.',
    author_description_mobile: 'Hi! My name is Victoria Kosto - I am a hairstylist and tutor in hairstyling courses. I love to inspire clients and students through my approach to my work. I have a large and very loyal base of clients and students from all over the world. In my training, I will teach you how to work properly and gently with your hair and create the most permanent, easy, clean and beautiful hairstyles.',
    education_programs_title: 'Hairstyle education',
    services_title: 'Services',
    reviews_services_title: 'Service reviews',
    reviews_education_title: 'Education reviews',
    courses_title: 'Hairstyle courses',
    courses_yourself_title: 'Hairstyle courses for yourself',
    lesson_courses_yourself_title: 'Hairstyle lessons for yourself',
    contacts_title: 'Socials',
    contacts_contacts: 'Contacts:',
    right_side: {
      title: 'Hey there',
      first_paragraph: 'Creativity, fantasy, ideal <br> there are no limits',
      second_paragraph: 'And for more <br> ambitious - to become <br> a real trendsetter'
    },
    about: {
      item_1: {
        title: 'For hairstylists',
        title_second_line: 'already',
        description: 'Who is looking for an inspiration and unique style of works'
      },
      item_2: {
        title: 'For makeup',
        title_second_line: 'artists',
        description: 'Who wants to learn how to work with hair, make trendy stylish images and increase their income'
      },
      item_3: {
        title: 'For beginners',
        title_second_line: 'in the profession',
        description: 'Who is new to the profession and wants to increase their knowledge and close the gaps'
      },
      item_4: {
        title: 'For hairdressers',
        title_second_line: 'universal',
        description: 'Who wants to learn new techniques of working with hair and expand their range of services'
      }
    },
    benefits: {
      title: 'Who would be suitable for courses for yourself?',
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
    seo: {
      title: 'Wedding hair and hair education - vikosto',
      description: 'Wedding hair, hair for brides, traveling to your gathering, hairstyle education',
      keywords: 'education hair hairstyles bridal wedding courses vikosto'
    }
  },
  profile: {
    welcome: 'Welcome, {name}',
    lessons_title: 'Lessons',
    courses_title: 'Courses',
    certificates_title: 'Certificates',
    files_title: 'Materials',
    no_lessons: 'You don\'t have purchased lessons.',
    no_courses: 'You don\'t have purchased courses.',
    no_certificates: 'You don\'t have certificates.',
    no_files: 'You don\'t have materials.',
    change_password: 'Change your password',
    see_lessons: 'See lessons',
    see_courses: 'See courses'
  },
  course: {
    seo: {
      title: '{title} - online hairstyles education - vikosto',
      keywords: 'vikosto online course hairstyle {words}'
    },
    buy_button: 'Buy',
    buy_course_button: 'Course',
    no_lessons: 'There are no lessons now',
    list_lessons: 'Lessons',
    category_theory: 'Theoretical lessons',
    category_practice: 'Practical lessons',
    category_bonus: 'Bonus lessons',
    description: 'Description:',
    price: 'Price: ',
    about: 'About course',
    access_months: 'Access duration:',
    duration: 'Lessons count:',
    give_certificate: 'Grant',
    give_feedback: 'Provide',
    feedback: 'feedback',
    description_title: 'About course',
    watch_title: 'Watch promo',
    homework: 'Send homework',
    materials: 'To lessons',
    certificate: 'e-certificate',
    months: '(in months)',
    buy: 'Buy',
    buy_again: 'Access expired, buy again',
    watch: 'To lessons',
    expired_at: 'Access will closed:',
    open_access: 'Open an access',
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
    payment_message: 'Payment for a course "{courseName}" from {from}. Please, click "Back to the store" after payment'
  },
  lesson_course: {
    seo: {
      title: '{title} - online hairstyles education - vikosto',
      keywords: 'vikosto online lesson hairstyle {words}'
    },
    buy_button: 'Buy',
    buy_course_button: 'Lesson',
    no_lessons: 'There are no videos now',
    list_lessons: 'Videos',
    category_theory: 'Theory part',
    category_practice: 'Practice part',
    description: 'Description:',
    price: 'Price: ',
    about: 'About lesson',
    access_months: 'Access duration:',
    duration: 'Videos count:',
    give_certificate: 'Grant',
    give_feedback: 'Provide',
    feedback: 'feedback',
    description_title: 'About lesson',
    watch_title: 'Watch promo',
    homework: 'Send homework',
    materials: 'To videos',
    certificate: 'e-certificate',
    months: '(in months)',
    buy: 'Buy',
    buy_again: 'Access expired, buy again',
    watch: 'To videos',
    expired_at: 'Access will closed:',
    open_access: 'Open an access',
    payment_message: 'Payment for a lesson "{courseName}" from {from}. Please, click "Back to the store" after payment'
  },
  single_lesson: {
    seo: {
      title: '{title} - online hairstyles education - vikosto',
      keywords: 'vikosto online lesson hairstyle {words}'
    },
    buy_button: 'Buy',
    buy_course_button: 'lesson',
    price: 'Price: ',
    about: 'About lesson',
    promo: 'Watch promo',
    access_months: 'Access duration:',
    duration: 'Lesson duration:',
    give_certificate: 'Grant',
    give_feedback: 'Provide',
    feedback: 'feedback',
    description_title: 'About lesson',
    watch_title: 'Watch lesson',
    watch_promo_title: 'Watch promo',
    homework: 'Send homework',
    materials: 'To materials',
    certificate: 'e-certificate',
    months: '(in months)',
    files_title: 'Materials',
    files_add_button: 'Add file',
    buy: 'Buy',
    buy_free: 'Open access',
    buy_free_button: 'Open',
    buy_free_course_button: 'access',
    buy_again: 'Access expired, buy again',
    watch: 'Purchased, to watch',
    expired_at: 'Access will closed:',
    open_access: 'Open an access',
    file_form: {
      name: 'Filename',
      title: 'Title',
      resource_url: 'Link to resource',
      submit: 'Add'
    },
    payment_message: 'Payment for a lesson "{lessonName}" from {from}. Please, click "Back to the store" after payment',
    chat_title: 'Lesson discussion',
    chat_loading: 'Chat is loading...',
    chat_start: 'You can send your homework in convenient format: video or photo',
    link_chat_1: 'Send',
    link_chat_2: 'homework'
  },
  chat: {
    chat_title: 'Homework discussion',
    chat_loading: 'Chat is loading...'
  },
  lesson: {
    price: 'Price: ',
    access_months: 'Access months:',
    files_title: 'Materials',
    files_add_button: 'Add file',
    file_form: {
      name: 'Filename',
      title: 'Title',
      resource_url: 'Link to resource',
      submit: 'Add'
    },
    chat_link: 'Send homework',
    chat_title: 'Lesson discussion',
    chat_loading: 'Chat is loading...',
    chat_start: 'You can send your homework in convenient format: video or photo',
    link_chat_1: 'Send',
    link_chat_2: 'homework',
    link_discuss: 'Discuss'
  },
  single_lesson_card: {
    buy: 'Buy',
    learn: 'Learn more',
    expired_at: 'Access will closed:'
  },
  course_card: {
    bought: 'Bought',
    buy: 'Buy',
    learn: 'Learn more',
    expired_at: 'Access will closed:'
  },
  notify: {
    success_login: 'Successful login',
    success_register: 'Successful register',
    success_add_course: 'Successful course creation',
    success_delete_course: 'Successful course delete',
    success_delete_lesson: 'Successful lesson delete',
    success_edit_course: 'Successful course update',
    success_edit_single_lesson: 'Successful single lesson update',
    success_add_lesson: 'Successful lesson creation',
    success_add_single_lesson: 'Successful single lesson creation',
    success_add_file: 'Successful file creation',
    success_recovery: 'Successful recovery request',
    success_restore: 'Successful password restore',
    success_change: 'Successful data changing',
    register_then_buy: 'Register or login',
    register_then_buy_msg: 'Register or login before buy',
    success_add_purchase: 'Successful course purchase',
    error: {
      payment_request_id_was_repeated: 'This payment already used',
      payment_request_id_was_repeated_msg: 'This payment already used to buy course/lesson',
      need_agreement_confirmation: 'Need to agree with platform rules',
      need_agreement_confirmation_msg: 'Need to agree with online education platform rights and rules',
      user_not_found: 'Invalid email or password',
      user_not_found_msg: 'Account with your credentials not found',
      server_error: 'Server error',
      server_error_msg: 'Server error, try later please',
      bad_request: 'Bad request',
      bad_request_msg: 'Bad request error, try later please',
      validation_error: 'Checking data error',
      validation_error_msg: 'Please, check your form fields',
      user_or_email_already_exists_msg: 'Account with this email already exists',
      user_or_email_already_exists: 'Account already exists',
      forbidden_error: 'Authorization error',
      forbidden_error_msg: 'You don\'t have enough permissions or you\'re not authorized, login please',
      course_already_exists: 'Course already exists',
      course_already_exists_msg: 'Please check your data, you duplicate course',
      lesson_already_exists: 'Lesson already exists',
      lesson_already_exists_msg: 'Please check your data, probably you duplicated lessons',
      course_not_found: 'Course not found',
      course_not_found_msg: 'Course not found, try later, please',
      lesson_not_found: 'Lesson not found',
      lesson_not_found_msg: 'Lesson not found, try later, please',
      order_not_found: 'Order not found',
      order_not_found_msg: 'Oreder with this number does not exist',
      payment_not_valid: 'Payment not paid',
      payment_not_valid_msg: 'Please, try to pay again or reach me by contacts',
      expired_link_error: 'Recovery password link is expired, try new one',
      expired_link_error_msg: 'Please, try to create new recovery password link',
      passwords_not_matched: 'Passwords not matched',
      passwords_not_matched_msg: 'Please, check your data, passwords should be equal',
      file_already_exists: 'File already exists',
      file_already_exists_msg: 'Please check your data, probably you duplicated files'
    }
  }
}
