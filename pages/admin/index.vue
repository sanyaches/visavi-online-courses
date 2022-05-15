<template>
  <div class="mt-4">
    <b-container>
      <div>
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
import CourseListItem from '@/components/CourseListItem.vue'
import SingleLessonListItem from '@/components/SingleLessonListItem.vue'

export default {
  components: {
    CourseListItem,
    SingleLessonListItem
  },

  middleware: 'adminAuth',

  data () {
    return {
      listCourses: [],
      listSingleLessons: [],
      coursesLoading: false,
      singleLessonsLoading: false
    }
  },

  beforeMount () {
    this.loadCourses()
    this.loadSingleLessons()
  },

  methods: {
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
