<template>
  <div class="course-card">
    <div class="course-card__title">
      {{ course.title }}
    </div>
    <div class="course-card__description">
      <ul v-if="course.name==='course-silver'">
        <li class="course-card__benefit">
          Lol
        </li>
        <li class="course-card__benefit is-disabled">
          Kek
        </li>
        <li class="course-card__benefit">
          Cheburek
        </li>
      </ul>
      <ul v-else-if="course.name==='course-gold'">
        <li class="course-card__benefit">
          Loler
        </li>
        <li class="course-card__benefit">
          Keker
        </li>
        <li class="course-card__benefit">
          Chebureker
        </li>
      </ul>
    </div>
    <div class="course-card__footer">
      <div class="course-card__price">
        <span>{{ course.price }}</span>
        <span class="currency">{{ $t('common.currency') }}</span>
      </div>
      <div class="course-card__control">
        <nuxt-link :to="courseLink" class="button button--brown button button--large">
          {{ $t('course_card.learn') }}
        </nuxt-link>

        <nuxt-link :to="courseLink" class="button button--brown-dark button button--large">
          {{ $t('course_card.buy') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },

  computed: {
    courseLink () {
      return this.localePath({ path: `/course/${this.course.name}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.course-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  background-color: #fff;
  padding: 1.6rem;
  height: 100%;

  &__title {
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #76665d;

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
    }
  }

  &__description {
    margin-top: 1.5rem;
    align-self: flex-start;
    width: 100%;
  }

  &__description ul {
    margin-bottom: 3rem;
    padding-left: 1rem;
  }

  li.course-card__benefit {
    padding: 0.8rem 0;

    &::marker {
      color: #b3795a;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #b3795a;
    }

    &.is-disabled {
      opacity: 0.3;
      text-decoration: line-through;
    }
  }

  &__footer {
    margin-top: auto;
  }

  &__price {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1.2rem 0;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;
    color: #76665d;

    .currency {
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }

  &__control {
    display: flex;
    flex-direction: column;

    .button:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }
}
</style>
