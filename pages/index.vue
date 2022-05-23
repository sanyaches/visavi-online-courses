<template>
  <div class="main">
    <div class="hero">
      <b-container>
        <div class="hero__header">
          <h1 class="hero__title">
            {{ $t('index.main_title') }}
          </h1>
          <div>
            <div class="links">
              <nuxt-link
                to="/#main-single-lessons"
                class="button--green"
              >
                {{ $t('index.want_study') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="about">
      <b-container>
        <div class="about__header">
          <h2>
            {{ $t('index.about_title') }}
          </h2>
        </div>
      </b-container>
    </div>

    <div class="author">
      <b-container>
        <div class="author__header text-center">
          <h2>
            {{ $t('index.author_title') }}
          </h2>
        </div>
      </b-container>
    </div>

    <div id="main-single-lessons" class="lessons">
      <b-container>
        <div class="lessons__header text-center">
          <h2>
            {{ $t('index.lessons_title') }}
          </h2>
        </div>
        <div class="lessons__list">
          <div v-for="lesson in singleLessons" :key="lesson.name" class="lessons__list-item">
            <single-lesson-card :lesson="lesson" />
          </div>
        </div>
      </b-container>
    </div>

    <div id="main-courses" class="courses">
      <b-container>
        <div class="courses__header text-center">
          <h2>
            {{ $t('index.courses_title') }}
          </h2>
        </div>
        <div class="courses__list">
          <div v-for="course in courses" :key="course.name" class="courses__list-item">
            <course-card :course="course" />
          </div>
        </div>
      </b-container>
    </div>

    <div class="faq">
      <b-container>
        <div class="faq__header text-center">
          <h2>
            {{ $t('index.faq_title') }}
          </h2>
        </div>
      </b-container>
    </div>

    <div class="contacts">
      <b-container>
        <div class="contacts__header text-center">
          <h2>
            {{ $t('index.contacts_title') }}
          </h2>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import SingleLessonCard from '@/components/SingleLessonCard.vue'

export default {
  components: {
    SingleLessonCard
  },

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
  }
}
</script>

<style scoped lang="scss">
.hero {
  padding: 4rem 0;

  &__header {
    text-align: center;
  }

  &__title {
    margin-bottom: 2rem;
  }
}

.about {
  padding: 4rem 0;

  &__header {
    text-align: center;
  }
}

.author {
  padding: 4rem 0;
}

.lessons {
  padding: 4rem 0;

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  &__list-item {
    width: 20rem;
  }
}

.courses {
  padding: 4rem 0;

   &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  &__list-item {
    width: 20rem;
  }
}

.faq {
  padding: 4rem 0;
}

.contacts {
  padding: 4rem 0;
}
</style>
