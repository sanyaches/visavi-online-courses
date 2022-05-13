export default {
  common: {
    edit: 'Редактировать',
    delete: 'Удалить',
    back: 'Назад'
  },
  admin: {
    add_lesson_btn: 'Добавить урок',
    no_lessons: 'Не найдено уроков',
    delete_course_confirmation: 'Вы точно хотите удалить курс \'{name}\' ?',
    list_courses: 'Список курсов',
    no_courses: 'Нет курсов',
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
        image_url: 'Ссылка на изображение',
        thumbnail_url: 'Ссылка на миниатюру',
        price: 'Цена',
        price_plus: 'Цена с доп материалами'
      },
      submit: 'Добавить'
    },
    add_lesson: {
      seo: {
        title: 'Страница добавления курса'
      },
      title: 'Добавить урок',
      form: {
        name: 'Имя',
        title: 'Заголовок',
        category: 'Категория',
        description: 'Описание',
        video_url: 'Видео ссылка',
        thumbnail_url: 'Ссылка на миниатюру',
        presentation_url: 'Ссылка на презентацию',
        duration: 'Длительность (мин)'
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
        image_url: 'Ссылка на изображение',
        thumbnail_url: 'Ссылка на миниатюру',
        price: 'Цена',
        price_plus: 'Цена с доп материалами'
      },
      submit: 'Обновить'
    },
    add_course_button: 'Добавить новый курс'
  },
  login: {
    submit: 'Войти',
    title: 'Вход в visavi',
    seo: {
      title: 'Страница входа'
    },
    form: {
      email: 'Эл. почта (email)',
      password: 'Пароль'
    },
    to_register: 'Нет аккаунта?',
    to_register_link: 'Зарегистрироваться'
  },
  register: {
    submit: 'Регистрация',
    title: 'Регистрация в visavi',
    seo: {
      title: 'Регистрация visavi'
    },
    form: {
      password: 'Пароль',
      repeat_password: 'Повторить пароль',
      first_name: 'Имя',
      last_name: 'Фамилия',
      email: 'Эл. почта (email)'
    },
    to_login: 'Уже имеется аккаунт?',
    to_login_link: 'Войти'
  },
  index: {
    admin: 'Админ',
    login: 'Вход',
    logout: 'Выход',
    name: 'VISAVI'
  },
  profile: {
    welcome: 'Добро пожаловать, {name}'
  },
  course: {
    description: 'Описание:',
    price: 'Цена: ',
    price_plus: 'Цена премиум: '
  },
  notify: {
    success_login: 'Успешный вход',
    success_register: 'Успешная регистрация',
    success_add_course: 'Успешное создание курса',
    success_delete_course: 'Успешное удаление курса',
    success_edit_course: 'Успешное обновление курса',
    success_add_lesson: 'Успешное создание урока',
    error: {
      user_not_found: 'Неверный email или пароль',
      user_not_found_msg: 'Пользователь с такими данными не найден',
      server_error: 'Ошибка сервера',
      server_error_msg: 'Ошибка сервера, попробуйте позднее',
      validation_error: 'Введенные данные не соответствуют требованиям',
      validation_error_msg: 'Проверьте заполненные поля',
      course_already_exist: 'Ошибка в создании курса',
      course_already_exist_msg: 'Ошибка в создании курса, такой курс уже существует',
      user_or_email_already_exists_msg: 'Аккаунт с данным email уже существует',
      user_or_email_already_exists: 'Аккаунт уже существует',
      forbidden_error: 'Ошибка авторизации',
      forbidden_error_msg: 'У вас не достаточно прав или вы не авторизованы, попробуйте войти',
      course_already_exists: 'Курс уже существует',
      course_already_exists_msg: 'Пожалуйста проверьте данные, произошло дублирование курса',
      course_not_found: 'Курс не найден',
      course_not_found_mg: 'Курс не найден, пожалуйста, попробуйте позднее'
    }
  }
}
