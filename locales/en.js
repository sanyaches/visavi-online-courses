export default {
  common: {
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    currency: 'RUB'
  },
  agreement: {
    title: 'Agreement with terms of the online-platform vikosto',
    paragraph: {
      first: `
        Исключительные права на интернет-платформу, расположенную по адресу www.vikosto.ru (далее - Платформа),
        а также на все объекты, размещенные на Платформе, в том числе элементы дизайна, рисунки,
        изображения, видео, фотографии, тексты, описания,
        являющиеся объектами интеллектуальной собственности, принадлежат Савкиной Виктории Денисовне.
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
    add_single_lesson_button: 'Add new single lesson'
  },
  login: {
    submit: 'Log in',
    title: 'Login to visavi',
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
    title: 'Register in visavi',
    seo: {
      title: 'Register in visavi'
    },
    form: {
      password: 'Password',
      repeat_password: 'Repeat password',
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      confirm_agreement: 'Agree with platform rules',
      confirm_agreement_link: 'Agreement link'
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
  restore: {
    title: 'Restore your password',
    submit: 'Send request',
    check_email: 'Recovery request was created, check your email',
    form: {
      email: 'Account email'
    }
  },
  index: {
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    profile: 'Profile',
    name: 'VIKOSTO',
    main_title: 'Stop brushing ',
    main_title_second: 'yourself,',
    main_title_third: 'brush your hair',
    main_title_subtitle: 'Online hairstyle education',
    want_study: 'Want to study',
    about_title: 'Who does suit online education?',
    author_title: 'About course author',
    author_signature: 'Viktoria Kosto',
    author_want_study: 'Study by Viktoria courses',
    author_description_1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta obcaecati deleniti enim omnis eaque ipsa fuga? Eos perferendis tempora dolorem repellendus error porro aspernatur, voluptates perspiciatis optio ut unde.',
    author_description_2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta obcaecati deleniti enim omnis eaque ipsa fuga? Eos perferendis tempora dolorem repellendus error porro aspernatur, voluptates perspiciatis optio ut unde.',
    author_description_3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta obcaecati deleniti enim omnis eaque ipsa fuga? Eos perferendis tempora dolorem repellendus error porro aspernatur, voluptates perspiciatis optio ut unde.',
    author_description_mobile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta obcaecati deleniti enim omnis eaque ipsa fuga? Eos perferendis tempora dolorem repellendus error porro aspernatur, voluptates perspiciatis optio ut unde.',
    lessons_title: 'Hairstyle lessons',
    courses_title: 'Hairstyle courses',
    faq_title: 'FAQ',
    contacts_title: 'Socials',
    right_side: {
      title: 'Hey there',
      first_paragraph: 'Creativity, fantasy, ideal <br> there are no limits',
      second_paragraph: 'And for more <br> ambitious - to become <br> a real trendsetter'
    },
    about: {
      item_1: {
        title: 'Choose a service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla molestiae facilis veniam.'
      },
      item_2: {
        title: 'Choose a service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla molestiae facilis veniam.'
      },
      item_3: {
        title: 'Choose a service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla molestiae facilis veniam.'
      },
      item_4: {
        title: 'Choose a service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla molestiae facilis veniam.'
      }
    },
    benefits: {
      title: 'Why do you need online education?',
      list: {
        first: {
          title: 'Время',
          content: 'Смотрите и отрабатывайте уроки, когда и где вам будет удобно'
        },
        second: {
          title: 'Экономия',
          content: 'Онлайн уроки значительно дешевле обучения офлайн и имеют ряд весомых преимуществ'
        },
        third: {
          title: 'Доступность',
          content: 'Все подробные теоретические и практические уроки собраны в одном месте, не нужно ехать в другие города и страны'
        },
        fourth: {
          title: 'Просмотры',
          content: 'Можно пересматривать уроки сколько угодно раз, для того, чтобы уловить все тонкости и лучше усвоить материал'
        },
        fifth: {
          title: 'Актуальность',
          content: 'Онлайн-обучение включает в себя только актуальную и вдохновляющую информацию о причёсках'
        },
        sixth: {
          title: 'Обратная связь',
          content: 'Можно задавать вопросы о пройденных уроках, присылать свои отработки и получать подробный отзыв в реальном времени'
        }
      }
    },
    faq: {
      first: {
        question: 'Will I get a certificate after a course finishing',
        answer: 'Of course, a student will get a certificate after watching all materials and sending results.'
      },
      second: {
        question: 'Will I get a certificate after a course finishing',
        answer: 'Of course, a student will get a certificate after watching all materials and sending results.'
      },
      third: {
        question: 'Will I get a certificate after a course finishing',
        answer: 'Of course, a student will get a certificate after watching all materials and sending results.'
      },
      fourth: {
        question: 'Will I get a certificate after a course finishing',
        answer: 'Of course, a student will get a certificate after watching all materials and sending results.'
      },
      fifth: {
        question: 'Will I get a certificate after a course finishing',
        answer: 'Of course, a student will get a certificate after watching all materials and sending results.'
      }
    }
  },
  profile: {
    welcome: 'Welcome, {name}',
    lessons_title: 'Lessons',
    courses_title: 'Courses',
    no_lessons: 'You don\'t have a purchased lessons.',
    no_courses: 'You don\'t have a purchased courses.',
    change_password: 'Change your password',
    see_lessons: 'See lessons',
    see_courses: 'See courses'
  },
  course: {
    description: 'Description:',
    price: 'Price: ',
    access_months: 'Access months: ',
    buy: 'Buy',
    buy_again: 'Access expired, buy again',
    watch: 'To lessons',
    expired_at: 'Access will closed:'
  },
  single_lesson: {
    price: 'Price: ',
    access_months: 'Access months:',
    files_title: 'Materials',
    files_add_button: 'Add file',
    buy: 'Buy',
    buy_again: 'Access expired, buy again',
    watch: 'Purchased, to watch',
    expired_at: 'Access will closed:',
    file_form: {
      name: 'Filename',
      title: 'Title',
      resource_url: 'Link to resource',
      submit: 'Add'
    }
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
    }
  },
  single_lesson_card: {
    buy: 'Buy',
    learn: 'Learn more'
  },
  course_card: {
    buy: 'Buy',
    learn: 'Learn more'
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
    success_change: 'Successful data changing',
    register_then_buy: 'Register or login',
    register_then_buy_msg: 'Register or login before buy',
    success_add_purchase: 'Successful course purchase',
    error: {
      need_agreement_confirmation: 'Need to agree with platform rules',
      need_agreement_confirmation_msg: 'Need to agree with online education platform rights and rules',
      user_not_found: 'Invalid email or password',
      user_not_found_msg: 'Account with your credentials not found',
      server_error: 'Server error',
      server_error_msg: 'Server error, try later please',
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
      expired_link_error: 'Recovery password link is expired, try new one',
      expired_link_error_msg: 'Please, try to create new recovery password link',
      passwords_not_matched: 'Passwords not matched',
      passwords_not_matched_msg: 'Please, check your data, passwords should be equal',
      file_already_exists: 'File already exists',
      file_already_exists_msg: 'Please check your data, probably you duplicated files'
    }
  }
}
