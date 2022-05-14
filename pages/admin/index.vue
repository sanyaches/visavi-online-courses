<template>
  <div class="mt-4">
    <b-container>
      <div>
        <h1>{{ $t('admin.list_courses') }}</h1>

        <nuxt-link :to="localePath({path: 'admin/add-course'})" class="button--green mb-4">
          {{ $t('admin.add_course_button') }}
        </nuxt-link>

        <p v-if="loading">
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
      </div>
    </b-container>
  </div>
</template>

<script>
import CourseListItem from '@/components/CourseListItem.vue'

export default {
  components: { CourseListItem },

  middleware: 'adminAuth',

  data () {
    return {
      listCourses: [],
      loading: false
    }
  },

  beforeMount () {
    this.loadCourses()
  },

  methods: {
    async loadCourses () {
      try {
        this.loading = true
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
          this.loading = false
        }, 400)
      }
    }
  }
}
</script>
