export default {
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
      forbidden_error_msg: 'У вас не достаточно прав или вы не авторизованы, попробуйте войти'
    }
  }
}
