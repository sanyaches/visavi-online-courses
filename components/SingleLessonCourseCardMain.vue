<template>
  <div class="single-lesson-course-card">
    <div class="single-lesson-course-card__container">
      <div class="single-lesson-course-card__image" @click="$router.push(lessonCourseLink)">
        <img class="top" :src="lessonCourse.cardImageFirst">
        <div v-if="lessonCourse.price > 0" class="single-lesson-course-card__price">
          <span>{{ lessonCourse.price }}</span>
          <br>
          <span class="currency">
            {{ $t('common.currency') }}
          </span>
        </div>
        <div v-else class="single-lesson-course-card__price">
          {{ $t('common.free') }}
        </div>
      </div>
      <div class="single-lesson-course-card__content">
        <div class="single-lesson-course-card__title">
          <nuxt-link :to="lessonCourseLink">
            <span>{{ lessonCourse.title }}</span>
          </nuxt-link>
        </div>
        <div class="single-lesson-course-card__description">
          <v-md-preview :text="lessonCourse.shortDescription" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessonCourse: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      image: 'first'
    }
  },

  computed: {
    lessonCourseLink () {
      return this.localePath({ path: `/lesson-course/${this.lessonCourse.name}` })
    }
  }
}
</script>

<style lang="scss">
.single-lesson-course-card {
  position: relative;
  padding-top: 400px;

  @media screen and (max-width: 1199px) {
    padding-top: 340px;
  }

  @media screen and (max-width: 991px) {
    padding-top: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 3rem;

    @media screen and (max-width: 991px) {
      top: 0;
      position: static;
    }
  }

  &__image {
    width: 100%;
    height: 400px;
    position: relative;
    cursor: pointer;
    margin-bottom: 2rem;

    img {
      position: absolute;
      left: 0;
      transition: opacity 1s ease-in-out;
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 1199px) {
      height: 330px;
      margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 991px) {
      height: 500px;
      width: 420px;
      margin: 0 auto 1.5rem;
    }

    @media screen and (max-width: 480px) {
      height: 330px;
      width: 285px;
      margin: 0 auto 1.5rem;
    }
  }

  &__price {
    font-size: 2.2rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: #fff;
    text-align: right;
    font-weight: 700;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;

    span.currency {
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }

  &__content {
    padding-right: 1rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      padding-right: 0;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    text-decoration: underline;

    a, a:visited {
      color: #fff;
    }

    a:hover, a:active {
      color: #f4e6dc;
    }

    @media screen and (max-width: 1199px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 991px) {
      color: #212529;

      a, a:visited {
        color: #212529;
      }

      a:hover, a:active {
        color: #938378;
      }
    }
  }

  &__description {
    .github-markdown-body {
      padding: 1rem 0;
      font-family: 'Raleway', sans-serif;
      color: #fff;

      @media screen and (max-width: 991px) {
        color: initial;
      }
    }
  }
}
</style>
