<template>
  <div class="course-card">
    <div class="course-card__title">
      {{ course.title }}
    </div>
    <div class="course-card__price">
      {{ course.price }}
    </div>
    <div class="course-card__description">
      <v-md-preview :text="course.description" />
    </div>
    <div class="course-card__control">
      <nuxt-link :to="courseLink">
        {{ $t('course_card.learn') }}
      </nuxt-link>
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
  border-radius: 1rem;
  background: var(--color-gray-1);
  padding: 1rem;
  justify-content: space-between;
  height: 100%;
}
</style>
