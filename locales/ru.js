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
      validation_error: 'Введенные данные не соответствуют требованиям',
      server_error_msg: 'Ошибка сервера, попробуйте позднее',
      user_or_email_already_exists_msg: 'Аккаунт с данным email уже существует',
      user_or_email_already_exists: 'Аккаунт уже существует'
    }
  }
}
