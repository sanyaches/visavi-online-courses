<template>
  <div class="main">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__header">
          <div class="hero__title">
            <h1> {{ $t('index.main_title_subtitle') }} </h1>
            <div class="hero__main-title">
              {{ $t('index.main_title') }}
              <br>
              {{ $t('index.main_title_second') }}
            </div>
            <div class="hero__button">
              <nuxt-link
                to="/#main-single-lessons"
                class="button button--beige button button--large"
              >
                {{ $t('index.want_study') }}
              </nuxt-link>
            </div>
          </div>
          <div class="hero__image">
            <img src="@/assets/images/hero-image.png">
          </div>
          <div class="hero__description">
            <h4>Hey there</h4>
            <p>Creativity, fantasy, ideal <br> there are no limits</p>
            <p>And for more <br> ambitious - to become <br> a real trendsetter</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <b-container>
        <div class="about__header">
          <h2 class="about__title">
            {{ $t('index.about_title') }}
          </h2>
        </div>

        <div class="about__list">
          <div class="about__list-item">
            <div class="about__list-item-number">
              01
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('index.about.item_1.title') }}
              </h3>

              <p>{{ $t('index.about.item_1.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              02
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('index.about.item_2.title') }}
              </h3>
              <p>{{ $t('index.about.item_2.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              03
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('index.about.item_3.title') }}
              </h3>
              <p>{{ $t('index.about.item_3.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              04
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('index.about.item_4.title') }}
              </h3>
              <p>{{ $t('index.about.item_4.description') }}</p>
            </div>
          </div>
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
  padding: 6rem 0;
  background: #b6a498;

  @media screen and (max-width: 1050px) {
    padding: 2rem 0 3rem;
  }

  &__container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1480px;

    @media screen and (max-width: 1550px) {
      max-width: 1200px;
    }

    @media screen and (max-width: 1250px) {
      max-width: 1024px;
    }

    @media screen and (max-width: 1050px) {
      max-width: 100%;
    }
  }

  &__header {
    text-align: center;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 1050px) {
      flex-direction: column;
    }
  }

  &__button {
    display: inline-flex;
    margin-top: 1.5rem;

    @media screen and (max-width: 1050px) {
      margin-top: 0.5rem;
    }
  }

  &__image {
    margin-left: 3rem;

    @media screen and (max-width: 1550px) {
      margin-left: 1.5rem;
    }

    @media screen and (max-width: 1050px) {
      margin-left: 0;
    }

    @media screen and (max-width: 480px) {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 1050px) {
      margin-bottom: 0.5rem;
    }
  }

  &__main-title {
    color: #ffffff;
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;

    @media screen and (max-width: 1050px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__title {
    margin-bottom: 2rem;
    padding-top: 3rem;

    @media screen and (max-width: 1050px) {
      padding-top: 0;
      margin-bottom: 1rem;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 3rem;

    h4 {
      margin-bottom: 2rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    p:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 1550px) {
      margin-left: 1.5rem;
    }

    @media screen and (max-width: 1250px) {
      display: none;
    }
  }
}

.about {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 3rem 0;
  }

  &__title {
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;

    @media screen and (max-width: 991px) {
      font-size: 1.7rem;
    }
  }

  &__list {
    display: flex;
    gap: 2rem;
    padding-top: 5rem;

    @media screen and (max-width: 991px) {
      flex-wrap: wrap;
      gap: 3.5rem;
      padding-top: 4rem;
    }
  }

  &__list-item {
    position: relative;
    z-index: 2;
  }

  &__list-item-number {
    position: absolute;
    opacity: 0.3;
    z-index: 1;
    top: -4rem;
    left: 0;
    color: #b6a498;
    font-size: 8rem;
    line-height: 100%;
    font-weight: 600;
    font-family: 'Cormorant SC', serif;

    @media screen and (max-width: 991px) {
      top: -5.5rem;
      font-size: 9rem;
    }
  }

  &__list-item-title {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;

    @media screen and (max-width: 991px) {
      font-size: 1.3rem;
    }
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
    gap: 2rem;
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
    gap: 2rem;
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
