<template>
  <div class="mt-4">
    <b-container>
      <div>
        <h1>{{ $t('admin.list_courses') }}</h1>

        <nuxt-link :to="localePath({path: 'admin/add-course'})" class="button--green">
          {{ $t('admin.add_course_button') }}
        </nuxt-link>

        <p v-if="loading">
          {{ $t('admin.courses_loading') }}
        </p>

        <ul v-else-if="listCourses.length">
          <li v-for="course in listCourses" :key="course.name">
            {{ course.title }}
            <img width="300px" height="200px" :src="'api/'.concat(course.imageUrl)">
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
export default {
  data () {
    return {
      listCourses: [],
      loading: false
    }
  },

  async beforeMount () {
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
</script>
