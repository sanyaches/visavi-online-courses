<template>
  <div class="admin-purchases py-4">
    <b-container>
      <h1>{{ $t('admin.purchases.title') }}</h1>

      <template v-if="loading">
        Loading...
      </template>
      <template v-else>
        <b-table
          id="admin-purchases"
          class="mt-4"
          responsive
          striped
          small
          hover
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          per-page="5"
        />
        <b-pagination
          v-model="currentPage"
          class="mt-2"
          :total-rows="rowsCount"
          per-page="5"
          aria-controls="admin-purchases"
        />
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'

function dataFormatter (value) {
  return format(value, 'dd MMMM yyyy HH:mm (OOOO)')
}

export default {
  middleware: 'adminAuth',

  data () {
    return {
      items: [],
      listCourses: [],
      listSingleLessons: [],
      currentPage: 1,
      singleLessonsLoading: false,
      coursesLoading: false,
      purchasesLoading: false,
      fields: [
        {
          key: 'courseName',
          sortable: true,
          formatter: (value, _, item) => {
            if (item.courseType === 'course') {
              return this.courseNameDict[value]
            }

            return this.lessonsNameDict[value]
          }
        },
        {
          key: 'courseType',
          sortable: true,
          formatter: (value) => {
            if (value === 'course') {
              return 'Course'
            }

            return 'Lesson'
          }
        },
        {
          key: 'userEmail',
          label: 'Email',
          sortable: true
        },
        {
          key: 'startDate',
          label: 'Begin',
          sortable: true,
          formatter: dataFormatter
        },
        {
          key: 'endDate',
          label: 'End',
          sortable: true,
          formatter: dataFormatter
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    }),
    rowsCount () {
      return this.items.length
    },
    loading () {
      return this.singleLessonsLoading || this.coursesLoading || this.purchasesLoading
    },
    courseNameDict () {
      const dict = {}

      for (const course of this.listCourses) {
        dict[course.name] = course.title
      }

      return dict
    },
    lessonsNameDict () {
      const dict = {}

      for (const lesson of this.listSingleLessons) {
        dict[lesson.name] = lesson.title
      }

      return dict
    }
  },

  beforeMount () {
    this.loadCourses()
    this.loadSingleLessons()
    this.init()
  },

  methods: {
    async init () {
      const url = '/api/purchases/list'

      try {
        this.purchasesLoading = true
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          }
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.items = data.purchases
        }
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
      } finally {
        setTimeout(() => {
          this.purchasesLoading = false
        }, 400)
      }
    },

    async loadCourses () {
      try {
        this.coursesLoading = true
        this.listCourses = []
        const res = await fetch('/api/course/list?limit=1000&offset=0', {
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
        const res = await fetch('/api/single-lesson/list?limit=1000&offset=0', {
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

<style lang="scss" scoped>
.admin-purchases {
  overflow-x: hidden;
}
</style>
