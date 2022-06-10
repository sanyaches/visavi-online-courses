<template>
  <div class="main">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__header">
          <div class="hero__title">
            <h1> {{ $t('index.main_title_subtitle') }} </h1>
            <div class="hero__main-title">
              <span>{{ $t('index.main_title') }}</span>
              <br>
              <span class="second">{{ $t('index.main_title_second') }}</span>
            </div>
            <div class="hero__button">
              <nuxt-link
                to="/#main-single-lessons"
                class="button button--brown-dark button button--large"
              >
                {{ $t('index.want_study') }}
              </nuxt-link>
            </div>
          </div>
          <div class="hero__image">
            <img src="@/assets/images/hero-image123.png">
            <div class="hero__image-circle" />
          </div>
          <div class="hero__description">
            <h4>{{ $t('index.right_side.title') }}</h4>
            <p>
              {{ $t('index.right_side.first_paragraph') }}
              <br>
              {{ $t('index.right_side.first_paragraph2') }}
            </p>
            <p>
              {{ $t('index.right_side.second_paragraph') }}
              <br>
              {{ $t('index.right_side.second_paragraph2') }}
            </p>
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
                <br>
                {{ $t('index.about.item_1.title_second_line') }}
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
                <br>
                {{ $t('index.about.item_2.title_second_line') }}
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
                <br>
                {{ $t('index.about.item_3.title_second_line') }}
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
                <br>
                {{ $t('index.about.item_4.title_second_line') }}
              </h3>
              <p>{{ $t('index.about.item_4.description') }}</p>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="author">
      <b-container>
        <div class="author__content desktop">
          <div class="author__text">
            <h2 class="author__title">
              {{ $t('index.author_title') }}
            </h2>

            <div class="author__description">
              <p>
                {{ $t('index.author_description_1') }}
              </p>
              <p>
                {{ $t('index.author_description_2') }}
              </p>
              <p>
                {{ $t('index.author_description_3') }}
              </p>
              <div class="author__button">
                <nuxt-link
                  to="/#main-single-lessons"
                  class="button button--beige button button--large"
                >
                  {{ $t('index.author_want_study') }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="author__image">
            <img src="@/assets/images/viktoriia.png">
            <div class="author__image-circle" />
            <div class="author__signature">
              <div>Viktoria</div>
              <div>Kosto</div>
            </div>
          </div>
        </div>
        <div class="author__content mobile">
          <h2 class="author__title">
            {{ $t('index.author_title') }}
          </h2>
          <div class="author__flexbox">
            <div class="author__description">
              <p>
                {{ $t('index.author_description_mobile') }}
              </p>
              <div class="author__signature">
                <div>Viktoria</div>
                <div>Kosto</div>
              </div>
            </div>
            <div class="author__image">
              <img src="@/assets/images/viktoriia.png">
              <div class="author__image-circle" />
            </div>
          </div>
          <div class="author__button">
            <nuxt-link
              to="/#main-single-lessons"
              class="button button--beige button button--large"
            >
              {{ $t('index.author_want_study') }}
            </nuxt-link>
          </div>
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
  padding: 1rem 0 6rem;
  background: #b6a498;
  overflow: hidden;

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

    @media screen and (max-width: 1250px) {
      justify-content: center;
    }

    @media screen and (max-width: 1050px) {
      flex-direction: column;
    }
  }

  &__button {
    display: flex;
    margin-top: 2.5rem;
    justify-content: center;

    @media screen and (max-width: 1050px) {
      margin-top: 0.5rem;
    }
  }

  &__image {
    position: relative;
    z-index: 2;

    @media screen and (max-width: 1550px) {
      width: 480px;

      img {
        width: 100%;
        height: auto;
      }
    }

    @media screen and (max-width: 1050px) {
      width: 320px;
      margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
      width: 275px;
    }
  }

  &__image-circle {
    position: absolute;
    top: 30px;
    left: -125px;
    width: 850px;
    height: 850px;
    border: 1px solid #33333327;
    border-radius: 50%;
    z-index: -1;

    @media screen and (max-width: 1550px) {
      width: 700px;
      height: 700px;
      left: -100px;
      top: 20px;
    }

    @media screen and (max-width: 1250px) {
      left: -220px;
      top: 10px;
    }

    @media screen and (max-width: 1050px) {
      width: 600px;
      height: 600px;
      left: -140px;
      top: -80px;
    }

    @media screen and (max-width: 480px) {
      width: 400px;
      height: 400px;
      left: -100px;
      top: -80px;
    }
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1050px) {
      margin-bottom: 0.5rem;
    }
  }

  &__main-title {
    color: #ffffff;
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Alegreya SC', serif;
    font-weight: 500;
    text-align: left;
    line-height: 125%;

    .second {
      margin-left: 2rem;
    }

    @media screen and (max-width: 1050px) {
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__title {
    padding-top: 10rem;
    margin-right: 2rem;
    margin-left: auto;
    z-index: 2;

    @media screen and (max-width: 1550px) {
      padding-top: 6rem;
    }

    @media screen and (max-width: 1250px) {
      margin-left: 0;
    }

    @media screen and (max-width: 1050px) {
      padding-top: 0;
      margin-bottom: 1rem;
      margin-right: 0;
    }

  }

  &__description {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 3rem;
    width: 17%;

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
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__list {
    display: grid;
    grid-gap: 2rem;
    padding-top: 5rem;
    grid-template-columns : 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 991px) {
      grid-template-columns : 1fr;
      padding-top: 4rem;
      grid-gap: 4rem;
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
    top: -4.5rem;
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
  padding: 2rem 0;
  overflow: hidden;

  &__title {
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__content.desktop {
    display: flex;

    @media screen and (max-width: 991px) {
      display: none;
    }
  }

   &__content.mobile {
    display: none;

    @media screen and (max-width: 991px) {
      display: block;
    }
  }

  .mobile &__flexbox {
    display: flex;
    margin-top: 2rem;
  }

  &__text {
    padding-top: 4rem;
  }

  &__description {
    .desktop & {
      margin-top: 4rem;
    }

    .mobile & {
      min-width: 180px;
    }
  }

  &__image {
    position: relative;
    margin-left: 3rem;
    z-index: 2;

    .mobile & {
      margin-left: 5px;
      min-width: 170px;
      margin-top: 1rem;

      @media screen and (min-width: 768px) {
        min-width: 250px;
        margin-top: 0;
      }

      @media screen and (max-width: 370px) {
        min-width: 140px;
        margin-top: 0;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &__image-circle {
    position: absolute;
    top: 30px;
    left: 0px;
    width: 560px;
    height: 560px;
    border: 1px solid #33333327;
    border-radius: 50%;
    z-index: -1;

    @media screen and (max-width: 991px) {
      width: 340px;
      height: 340px;
    }

    @media screen and (max-width: 768px) {
      width: 230px;
      height: 230px;
      top: 15px;
    }

    @media screen and (max-width: 370px) {
      width: 160px;
      height: 160px;
      top: 25px;
    }
  }

  &__signature {
    font-size: 3.5rem;
    transform: rotate(-15deg);
    font-weight: 500;
    font-family: 'Haigrast', serif;
    line-height: 100%;

    .desktop & {
      position: absolute;
      left: -10rem;
      bottom: 0;
    }

    .mobile & {
      font-size: 3rem;
    }
  }

  &__button {
    display: inline-flex;
    margin-top: 1.5rem;

    .mobile & {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }
  }
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
