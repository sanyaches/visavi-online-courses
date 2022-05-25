<template>
  <div class="profile">
    <b-container>
      <div v-if="getIsAuthenticated" class="mt-4">
        <h1>{{ getWelcomeText }}</h1>

        <div class="profile-lessons">
          <div class="profile-lessons__header text-center">
            <h2>
              {{ $t('profile.lessons_title') }}
            </h2>
          </div>
          <div class="profile-lessons__list">
            <template v-if="purchaseSingleLessonsKeys.length">
              <div v-for="singleLessonKey in purchaseSingleLessonsKeys" :key="singleLessonKey" class="profile-lessons__list-item">
                <single-lesson-card :lesson="singleLessonsDictionary[singleLessonKey]" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_lessons') }}</span>
              <nuxt-link to="/#main-single-lessons">
                {{ $t('profile.see_lessons') }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="profile-courses">
          <div class="profile-courses__header text-center">
            <h2>
              {{ $t('profile.courses_title') }}
            </h2>
          </div>
          <div class="profile-courses__list">
            <template v-if="purchaseCoursesKeys.length">
              <div v-for="courseKey in purchaseCoursesKeys" :key="courseKey" class="profile-courses__list-item">
                <course-card :course="coursesDictionary[courseKey]" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_courses') }}</span>
              <nuxt-link to="/#main-courses">
                {{ $t('profile.see_courses') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <h2 v-else>
        Loading...
      </h2>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const getFullName = (firstName, lastName) => {
  return [firstName, lastName].filter(Boolean).join(' ')
}

export default {
  middleware: 'authenticated',

  async asyncData (context) {
    try {
      const response = await context.app.$http.$get(
        'api/single-lesson/list-demo?limit=1000&offset=0'
      )
      const responseCourses = await context.app.$http.$get(
        'api/course/list?limit=1000&offset=0'
      )

      return {
        singleLessons: response.data,
        courses: responseCourses.data
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLessons: [],
      courses: []
    }
  },

  computed: {
    ...mapGetters({
      getMe: 'user/getMe',
      getIsAuthenticated: 'user/getIsAuthenticated',
      myCourses: 'user/getMyCourses',
      mySingleLessons: 'user/getMySingleLessons'
    }),

    getWelcomeText () {
      return this.$t('profile.welcome', { name: getFullName(this.getMe?.firstName, this.getMe?.lastName) })
    },

    purchaseCoursesKeys () {
      if (!this.myCourses || !this.myCourses.length) {
        return []
      }

      return this.myCourses.map(item => item.courseName)
    },

    purchaseSingleLessonsKeys () {
      if (!this.mySingleLessons || !this.mySingleLessons.length) {
        return []
      }

      return this.mySingleLessons.map(item => item.courseName)
    },

    coursesDictionary () {
      if (!this.courses || !this.courses.length) {
        return {}
      }

      const dictionary = {}

      for (const course of this.courses) {
        dictionary[course.name] = course
      }

      return dictionary
    },

    singleLessonsDictionary () {
      if (!this.singleLessons || !this.singleLessons.length) {
        return {}
      }

      const dictionary = {}

      for (const lesson of this.singleLessons) {
        dictionary[lesson.name] = lesson
      }

      return dictionary
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-lessons {
  padding: 4rem 0;

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem;
  }

  &__list-item {
    width: 20rem;
  }
}

.profile-courses {
  padding: 4rem 0;

   &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem;
  }

  &__list-item {
    width: 20rem;
  }
}
</style>
