<template>
  <div class="single-lesson-card">
    <div class="single-lesson-card__title">
      {{ lesson.title }}
    </div>
    <div class="single-lesson-card__price">
      {{ lesson.price }}
    </div>
    <div class="single-lesson-card__description">
      <v-md-preview :text="lesson.description" />
    </div>
    <div class="single-lesson-card__control">
      <nuxt-link :to="singleLessonLink">
        {{ $t('single_lesson_card.learn') }}
      </nuxt-link>
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

  computed: {
    singleLessonLink () {
      return this.localePath({ path: `/single-lesson/${this.lesson.name}` })
    }
  }

}
</script>

<style lang="scss" scoped>
.single-lesson-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--color-gray-1);
  padding: 1rem;
  justify-content: space-between;
  height: 100%;
}
</style>
