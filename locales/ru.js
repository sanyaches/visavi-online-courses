export default {
  admin: {
    list_courses: 'Список курсов',
    no_courses: 'Нет курсов',
    courses_loading: 'Загружается список курсов...',
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
        price: 'Цена',
        price_plus: 'Цена с доп материалами'
      },
      submit: 'Добавить'
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
  notify: {
    success_login: 'Успешный вход',
    success_register: 'Успешная регистрация',
    success_add_course: 'Успешное создание курса',
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
      course_already_exists_msg: 'Пожалуйста проверьте данные, произошло дублирование курса'
    }
  }
}
