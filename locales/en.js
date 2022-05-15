export default {
  common: {
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back'
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
        image_url: 'Image URL',
        thumbnail_url: 'Thumbnail URL',
        price: 'Price',
        price_plus: 'Price with extended materials'
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
        presentation_url: 'Presentation URL',
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
        video_url: 'Video URL',
        thumbnail_url: 'Thumbnail URL',
        presentation_url: 'Presentation URL',
        promo_url: 'Promo URL',
        price: 'Price',
        duration: 'Duration (min)'
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
    edit_single_lesson: {
      seo: {
        title: 'Edit single lesson page'
      },
      title: 'Edit a single lesson',
      form: {
        name: 'Name',
        title: 'Title',
        description: 'Description',
        video_url: 'Video URL',
        thumbnail_url: 'Thumbnail URL',
        presentation_url: 'Presentation URL',
        promo_url: 'Promo URL',
        price: 'Price',
        duration: 'Duration (min)'
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
    profile: 'Profile',
    name: 'VISAVI',
    main_title: 'Stop brushing yourself, brush your hair',
    want_study: 'Want to study',
    about_title: 'Who does suit online education?',
    author_title: 'About author',
    lessons_title: 'Lessons',
    courses_title: 'Courses',
    faq_title: 'FAQ'
  },
  profile: {
    welcome: 'Welcome, {name}'
  },
  course: {
    description: 'Description:',
    price: 'Price: ',
    price_plus: 'Price premium: '
  },
  single_lesson: {
    price: 'Price: '
  },
  single_lesson_card: {
    buy: 'Buy'
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
    error: {
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
      lesson_not_found_msg: 'Lesson not found, try later, please'
    }
  }
}
