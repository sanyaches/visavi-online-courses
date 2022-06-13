<template>
  <div class="course-card">
    <div class="course-card__image">
      <img :alt="course.shortDescription" :src="course.thumbnailUrl">
    </div>
    <div class="course-card__title ">
      <nuxt-link :to="courseLink" class="anchor--raw">
        <span>{{ course.title.split(' | ')[0] }}</span>
        <br>
        <span>{{ course.title.split(' | ')[1] }}</span>
      </nuxt-link>
    </div>
    <div class="course-card__access-months">
      <span>{{ $t('course_card.expired_at') }}</span>
      <span>{{ formattedEndDate }}</span>
    </div>
    <div class="course-card__description">
      <v-md-preview :text="course.shortDescription" />
    </div>
    <div class="course-card__control">
      <nuxt-link :to="courseLink" class="anchor anchor--raw">
        {{ $t('course_card.learn') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    course: {
      type: Object,
      required: true
    },
    purchase: {
      type: Object,
      default: null
    }
  },

  computed: {
    courseLink () {
      return this.localePath({ path: `/course/${this.course.name}` })
    },
    formattedEndDate () {
      return format(this.purchase.endDate, 'dd MMMM yyyy HH:mm (OOOO)')
    }
  }
}
</script>

<style lang="scss">
.course-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: #b6a498;
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
