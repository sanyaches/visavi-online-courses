<template>
  <div class="single-lesson-list-item">
    <div class="single-lesson-list-item__header">
      <div class="single-lesson-list-item__image">
        <img :alt="singleLesson.description" :src="singleLesson.thumbnailUrl">
      </div>
      <div class="single-lesson-list-item__general">
        <h2>
          <nuxt-link :to="singleLessonLink">
            {{ singleLesson.title }}
          </nuxt-link>
        </h2>
        <div>
          <span>{{ $t('single_lesson.price') }}</span>
          <span>{{ singleLesson.price }}</span>
        </div>
        <div>
          <span>{{ $t('single_lesson.access_months') }}</span>
          <span>{{ singleLesson.accessMonths }}</span>
        </div>
      </div>
    </div>
    <div class="single-lesson-list-item__content">
      <v-md-preview :text="singleLesson.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singleLesson: {
      type: Object,
      required: true
    },
    singleLessonLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.single-lesson-list-item {
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  padding: 0.8rem 1.6rem;

  &__header {
    display: flex;
  }

  &__image {
    width: 16rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__general {
    margin-left: 1rem;
  }

  &__content {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    &__header {
      flex-direction: column;
    }

    &__general {
      margin-left: 0;
      margin-top: 1rem;
    }

    &__content {
      margin-top: 1.5rem;
    }
  }
}
</style>
