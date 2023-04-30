<template>
  <div id="page-services" class="education-page">
    <div class="education-page__hero">
      <div class="education-page__hero-content">
        <div class="education-page__hero-text">
          {{ $t('index.education') }}
        </div>
      </div>
    </div>

    <BlocksIndexCourses :list="courses" />

    <div id="main-single-lessons" class="lessons">
      <b-container>
        <div class="lessons__header">
          <h2 class="lessons__title">
            {{ $t('index.lessons_title') }}
          </h2>
        </div>
        <div class="lessons__list">
          <div
            v-for="lesson in singleLessons"
            :key="lesson.name"
            class="lessons__list-item"
          >
            <SingleLessonCardMain :lesson="lesson" />
            <div class="lessons__line-alternative" />
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  async asyncData (context) {
    try {
      const locale = context.i18n.locale
      const response = await context.app.$http.$get(
        `${context.env.baseUrl}/api/single-lesson/list-demo?limit=1000&offset=0&locale=${locale}`
      )
      const responseCourses = await context.app.$http.$get(
        `${context.env.baseUrl}/api/course/list?limit=1000&offset=0&locale=${locale}&myself=false`
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
      courses: [],
      lessons: []
    }
  }
}
</script>

<style lang="scss">
.education-page {
  &__hero-content {
    position: relative;
    height: 741px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url('~/assets/images/education-hero.jpg');
    background-size: 100%;
    background-position-y: 34%;

    &:hover {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 991px) {
      height: 697px;
      background-position-y: 35%;
    }

    @media (max-width: 767px) {
      height: 347px;
      background-position-y: 28%;
    }
  }

  &__hero-text {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 4.5rem;
    color: white;
    padding: 0 1.4rem;

    @media (max-width: 767px) {
      text-align: center;
      font-size: 3rem;
    }
  }

  --button-brown-color: #fff;
  --button-brown-bg-color: #917C6F;
  --button-brown-bg-hover-color: #a08d81;

  &__block {
    padding: 4rem 1rem;

    @media screen and (max-width: 991px) {
      padding: 1.5rem 1rem;
    }
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__list {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 2fr 4rem 2fr 1fr;
      gap: 0;
    }
  }

  &__list-triple {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 4fr 4rem 4fr 4rem 4fr;
      gap: 0;
    }
  }

  &__list-single {
    margin-top: 4rem;
  }

  &__list-border {
    display: none;

    @media screen and (min-width: 992px) {
      display: block;
      height: 100%;
      width: 2px;
      margin: 0.5rem auto;
      background-color: var(--border-color);
    }
  }

  &__card {
    width: 100%;
  }

  &__list-single &__card {
    max-width: 550px;
    margin: 0 auto;
  }

  .card__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
  }

  .card__subtitle {
    text-align: center;
    min-height: 3rem;
  }

  .card__description {
    font-size: 1.2rem;
    text-align: center;
    min-height: 6rem;
  }

  .card__image {
    width: 100%;
  }

  .card__price {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
  }

  .price {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card__price-text {
    font-size: 0.9rem;

    @media screen and (min-width: 992px) {
      font-size: 0.95rem;
    }
  }

  .card__points {
    list-style-type: none;
    padding-left: 0;
  }

  .card__point-item {
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      border: 2px solid var(--vk-brown-1);
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  .card__book-button {
    padding: 0.8rem 1.1rem;
    border-radius: 1rem;
    background-color: var(--vk-gray-1);
    color: var(--vk-white);
    margin: 0 auto;
    width: fit-content;
    display: block;
    border-width: 0;
    transition: opacity 0.2s;

    &:hover, &:active, &:focus {
      opacity: 0.8;
    }
  }

  .lessons {
    padding: 4rem 0;
    position: relative;
    @media screen and (max-width: 991px) {
      padding: 1.5rem 0;
    }
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
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      flex-wrap: wrap;
      margin-top: 2rem;
      column-gap: 3rem;
      row-gap: 350px;
      margin-bottom: 300px;
      @media screen and (max-width: 991px) {
        display: block;
        margin-bottom: 0;
      }
    }
    &__list-item {
      z-index: 2;
      &:nth-child(3n-2) {
        .lessons__line-alternative {
          display: block;
          @media screen and (max-width: 991px) {
            display: none;
          }
        }
      }
      @media screen and (max-width: 991px) {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
      @media screen and (max-width: 480px) {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
    &__line-alternative {
      position: absolute;
      z-index: 1;
      left: 0;
      display: none;
      height: 300px;
      width: 100%;
      background-color: #b6a498;
    }
  }
}
</style>
