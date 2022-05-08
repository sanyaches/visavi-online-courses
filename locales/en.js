export default {
  common: {
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back'
  },
  admin: {
    delete_course_confirmation: 'Are you sure to delete course \'{name}\' ?',
    list_courses: 'List courses',
    no_courses: 'No courses',
    courses_loading: 'List courses is loading...',
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
        image_url: 'Image URL',
        thumbnail_url: 'Thumbnail URL',
        price: 'Price',
        price_plus: 'Price with extended materials'
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
        image_url: 'Image URL',
        thumbnail_url: 'Thumbnail URL',
        price: 'Price',
        price_plus: 'Price with extended materials'
      },
      submit: 'Update'
    },
    add_course_button: 'Add new course'
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
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    name: 'VISAVI'
  },
  profile: {
    welcome: 'Welcome, {name}'
  },
  course: {
    description: 'Description:',
    price: 'Price: ',
    price_plus: 'Price premium: '
  },
  notify: {
    success_login: 'Successful login',
    success_register: 'Successful register',
    success_add_course: 'Successful course creation',
    success_delete_course: 'Successful course delete',
    success_edit_course: 'Successful course update',
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
      forbidden_error_msg: 'You don\'t have enough permissions or you\'re not authorized, login please',
      course_already_exists: 'Course already exists',
      course_already_exists_msg: 'Please check your data, you duplicate course',
      course_not_found: 'Course not found',
      course_not_found_mg: 'Course not found, try later, please'
    }
  }
}
