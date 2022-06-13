<template>
  <div class="single-lesson-card">
    <div class="single-lesson-card__image">
      <img :alt="lesson.shortDescription" :src="lesson.thumbnailUrl">
    </div>
    <div class="single-lesson-card__title ">
      <nuxt-link :to="singleLessonLink" class="anchor--raw">
        <span>{{ lesson.title.split(' | ')[0] }}</span>
        <br>
        <span>{{ lesson.title.split(' | ')[1] }}</span>
      </nuxt-link>
    </div>
    <div class="single-lesson-card__access-months">
      <span>{{ $t('single_lesson_card.expired_at') }}</span>
      <span>{{ formattedEndDate }}</span>
    </div>
    <div class="single-lesson-card__description">
      <v-md-preview :text="lesson.shortDescription" />
    </div>
    <div class="single-lesson-card__control">
      <nuxt-link :to="singleLessonLink">
        {{ $t('single_lesson_card.learn') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    purchase: {
      type: Object,
      default: null
    }
  },

  computed: {
    singleLessonLink () {
      return this.localePath({ path: `/single-lesson/${this.lesson.name}` })
    },
    formattedEndDate () {
      return format(this.purchase.endDate, 'dd MMMM yyyy HH:mm (OOOO)')
    }
  }
}
</script>

<style lang="scss">
.single-lesson-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--color-gray-1);
  padding: 1rem;
  justify-content: space-between;
  height: 100%;
  text-align: center;

  &__image {
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  &__access-months {
    margin-top: 0.5rem;
  }

  &__description {
    text-align: left;
    margin-top: 0.5rem;

    .github-markdown-body {
      padding: 0.6rem 0.4rem;
    }
  }
}
</style>
