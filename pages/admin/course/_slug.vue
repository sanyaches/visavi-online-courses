<template>
  <div class="course-single">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>
      <div class="course-single__controls">
        <b-button-group>
          <b-button variant="outline-info" @click="editCourse(course)">
            {{ $t('common.edit') }}
          </b-button>
          <b-button variant="danger" @click="deleteCourse(course)">
            {{ $t('common.delete') }}
          </b-button>
        </b-button-group>
      </div>
      <div class="course-single__image">
        <img :alt="course.description" :src="course.thumbnailUrl">
      </div>
      <h1 class="course-single__title">
        {{ course.title }}
      </h1>
      <div class="course-single__price">
        <span>{{ $t('course.price') }}</span>
        <span>{{ course.price }}</span>
        <span>{{ $t('course.price_plus') }}</span>
        <span>{{ course.pricePlus }}</span>
      </div>
      <div class="course-single__description">
        <v-md-preview :text="course.description" />
      </div>

      <div class="course-single__lessons">
        <h2 class="course-single__lessons-title">
          {{ $t('admin.list_lessons') }}
        </h2>
        <b-button variant="info" @click="addLesson">
          {{ $t('admin.add_lesson_btn') }}
        </b-button>
        <ul v-if="courseLessons.length" class="course-single__lesson-list">
          <li v-for="lesson in courseLessons" :key="lesson.name" class="course-single__lesson-item">
            <lesson-list-item :lesson="lesson" :lesson-link="localePath({ path: `/admin/lesson/${lesson.name}` })" />
          </li>
        </ul>
        <div v-else>
          {{ $t('admin.no_lessons') }}
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LessonListItem from '@/components/LessonListItem.vue'

export default {
  components: {
    LessonListItem
  },

  async asyncData (context) {
    const name = context.params.slug
    try {
      const response = await context.app.$http.$get(
          `api/course/single/${name}`
      )
      const lessonsResponse = await context.app.$http.$get(`api/lesson/list-by-course/${name}`)

      return {
        course: response.data,
        courseLessons: lessonsResponse.data
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      course: {},
      courseLessons: []
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  methods: {
    editCourse (course) {
      const { name } = this.localeRoute({ path: '/admin/edit-course' })
      this.$router.push({
        name,
        params: { course }
      })
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

          this.$router.push(this.localePath('admin'))

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
    },

    addLesson () {
      const { name } = this.localeRoute({ path: '/admin/add-lesson' })
      this.$router.push({
        name,
        params: { courseName: this.course.name }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.course-single {
  padding: 2rem 0;

  &__title {
    text-align: center;
    margin: 1rem 0;
  }

  &__image {
    width: 600px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__price {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__description {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  &__lessons {
    margin-top: 2rem;
  }

  &__lessons-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  &__controls {
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
