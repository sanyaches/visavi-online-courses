export default {
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
    to_register_link: 'Register'
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
      email: 'Email'
    },
    to_login: 'Do you already have an account?',
    to_login_link: 'Login'
  },
  index: {
    login: 'Login',
    logout: 'Logout',
    name: 'VISAVI'
  },
  profile: {
    welcome: 'Welcome, {name}'
  },
  notify: {
    success_login: 'Successful login',
    success_register: 'Successful register',
    error: {
      user_not_found: 'Invalid email or password',
      user_not_found_msg: 'Account with your credentials not found',
      server_error: 'Server error',
      server_error_msg: 'Server error, try later please',
      validation_error: 'Checking data error',
      validation_error_msg: 'Please, check your form fields',
      course_already_exist: 'Error with creation course',
      course_already_exist_msg: 'Course with thin name already exists',
      user_or_email_already_exists_msg: 'Account with this email already exists',
      user_or_email_already_exists: 'Account already exists',
      forbidden_error: 'Authorization error',
      forbidden_error_msg: 'You don\'t have enough permissions or you\'re not authorized, login please'
    }
  }
}
