<template>
  <div class="mt-4">
    <b-container>
      <div>
        <nuxt-link :to="localePath('/admin/purchases')">
          {{ $t('admin.to_purchases') }}
        </nuxt-link>
        <h2>Chat</h2>
        <div id="chat-container" class="my-2 admin-chat" />

        <h1>{{ $t('admin.list_courses') }}</h1>

        <nuxt-link :to="localePath({path: 'admin/add-course'})" class="button--green mb-4">
          {{ $t('admin.add_course_button') }}
        </nuxt-link>

        <p v-if="coursesLoading">
          {{ $t('admin.courses_loading') }}
        </p>

        <ul v-else-if="listCourses.length" class="course-list">
          <li v-for="course in listCourses" :key="course.name" class="course-list__item">
            <course-list-item :course="course" :course-link="localePath({ path: `admin/course/${course.name}` })" />
          </li>
        </ul>

        <div v-else>
          {{ $t('admin.no_courses') }}
        </div>

        <h2 class="mt-4">
          {{ $t('admin.list_single_lessons') }}
        </h2>

        <nuxt-link :to="localePath({path: 'admin/add-single-lesson'})" class="button--green mb-4">
          {{ $t('admin.add_single_lesson_button') }}
        </nuxt-link>

        <p v-if="singleLessonsLoading">
          {{ $t('admin.single_lessons_loading') }}
        </p>

        <ul v-else-if="listSingleLessons.length" class="single-lesson-list">
          <li v-for="singleLesson in listSingleLessons" :key="singleLesson.name" class="single-lesson-list__item">
            <single-lesson-list-item
              :single-lesson="singleLesson"
              :single-lesson-link="localePath({ path: `admin/single-lesson/${singleLesson.name}` })"
            />
          </li>
        </ul>

        <div v-else>
          {{ $t('admin.no_single_lessons') }}
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import CourseListItem from '@/components/CourseListItem.vue'
import SingleLessonListItem from '@/components/SingleLessonListItem.vue'

export default {
  components: {
    CourseListItem,
    SingleLessonListItem
  },

  middleware: 'adminAuth',

  asyncData (context) {
    try {
      return {
        APP_ID: context.env.COMETCHAT_APP_ID,
        APP_REGION: context.env.COMETCHAT_REGION,
        ADMIN_WIDGET_ID: context.env.COMETCHAT_ADMIN_WIDGET_ID,
        ADMIN_AUTH_KEY: context.env.COMETCHAT_ADMIN_AUTH_KEY
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      listCourses: [],
      listSingleLessons: [],
      coursesLoading: false,
      singleLessonsLoading: false,
      APP_ID: '',
      APP_REGION: '',
      ADMIN_WIDGET_ID: '',
      ADMIN_AUTH_KEY: ''
    }
  },

  head () {
    return {
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    }
  },

  beforeMount () {
    this.loadCourses()
    this.loadSingleLessons()
  },

  mounted () {
    this.loadCourses()
    this.loadSingleLessons()
    this.initChat()
  },

  methods: {
    initChat () {
      try {
        if (!window.CometChatWidget) {
          return
        }

        CometChatWidget.init({
          appID: this.APP_ID,
          appRegion: this.APP_REGION
        }).then((response) => {
          const chatLocale = 'ru'
          CometChatWidget.localize(chatLocale)

          CometChatWidget.login({
            authToken: this.ADMIN_AUTH_KEY
          }).then((loggedInUser) => {
            CometChatWidget.launch({
              widgetID: this.ADMIN_WIDGET_ID,
              target: '#chat-container',
              roundedCorners: 'true',
              height: '100%',
              width: '100%',
              defaultID: 'superhero1',
              defaultType: 'user'
            }).then(() => {
              setTimeout(() => {
                CometChatWidget.localize(chatLocale)
              }, 500)
            })
          })
        }).catch((e) => {
          console.error(e)
        })
      } catch (e) {
        console.error(e)
      }
    },

    async loadCourses () {
      try {
        this.coursesLoading = true
        this.listCourses = []
        const res = await fetch('api/course/list?limit=1000&offset=0', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
          }
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.listCourses = data.data
        }
      } finally {
        setTimeout(() => {
          this.coursesLoading = false
        }, 400)
      }
    },

    async loadSingleLessons () {
      try {
        this.singleLessonsLoading = true
        this.listSingleLessons = []
        const res = await fetch('api/single-lesson/list?limit=1000&offset=0', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
          }
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.listSingleLessons = data.data
        }
      } finally {
        setTimeout(() => {
          this.singleLessonsLoading = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss">
.admin-chat {
  width: 100%;
  height: 60vh;

  .app__messenger {
    z-index: 20;
  }

  @media screen and (max-width: 400px) {
    height: 70vh;
  }
}
</style>
