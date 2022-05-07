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
            <div class="course-list__controls">
              <b-button-group>
                <b-button variant="outline-info" @click="editCourse(course)">
                  {{ $t('common.edit') }}
                </b-button>
                <b-button variant="danger" @click="deleteCourse(course)">
                  {{ $t('common.delete') }}
                </b-button>
              </b-button-group>
            </div>

            <course-list-item :course="course" />
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
import { mapGetters } from 'vuex'
import CourseListItem from '@/components/CourseListItem.vue'

export default {
  components: { CourseListItem },

  data () {
    return {
      listCourses: [],
      loading: false
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  beforeMount () {
    this.loadCourses()
  },

  methods: {
    editCourse (course) {
      const { name } = this.localeRoute({ path: 'admin/edit-course' })
      // const localeLocation = this.localeLocation({
      //   name,
      //   params: { course }
      // })
      this.$router.push({
        name,
        params: { course }
      })
    },

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
    },

    async deleteCourse (course) {
      if (!window.confirm(this.$t('admin.delete_course_confirmation', { name: course.title }))) {
        return
      }

      const jsonBody = JSON.stringify({
        name: course.name
      })

      const url = '/api/course/delete'

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: jsonBody
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.$root.$bvToast.toast(this.$t('notify.success_delete_course'), {
            title: this.$t('notify.success_delete_course'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })
          this.loadCourses()

          return
        }

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase()
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
      }
    }
  }
}
</script>
