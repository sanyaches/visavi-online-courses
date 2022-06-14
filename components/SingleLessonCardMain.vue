<template>
  <div class="single-lesson-card-main">
    <div class="single-lesson-card-main__container">
      <div class="single-lesson-card-main__image" @click="$router.push(singleLessonLink)" @mouseenter="image = 'second'" @mouseleave="image = 'first'">
        <img class="bottom" :src="lesson.cardImageSecond">
        <img class="top" :src="lesson.cardImageFirst">
        <div class="single-lesson-card-main__price">
          {{ lesson.price }}
          <br>
          <span class="currency">
            {{ $t('common.currency') }}
          </span>
        </div>
      </div>
      <div class="single-lesson-card-main__content">
        <div class="single-lesson-card-main__title">
          <nuxt-link :to="singleLessonLink">
            <span>{{ lesson.title.split(' | ')[0] }}</span>
            <br>
            <span>{{ lesson.title.split(' | ')[1] }}</span>
          </nuxt-link>
        </div>
        <div class="single-lesson-card-main__description">
          <v-md-preview :text="lesson.shortDescription" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
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
    singleLessonLink () {
      return this.localePath({ path: `/single-lesson/${this.lesson.name}` })
    }
  }
}
</script>

<style lang="scss">
.single-lesson-card-main {
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

    &:hover .top {
      opacity: 0;
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

    a:visited {
      color: #fff;
    }

    a:hover, a:active {
      color: #f4e6dc;
    }

    @media screen and (max-width: 1199px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 991px) {
      color: initial;

      a:visited {
        color: initial;
      }

      a:hover, a:active {
        color: #b6a498;
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
