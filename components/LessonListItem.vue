<template>
  <div class="lesson-list-item">
    <div class="lesson-list-item__header">
      <div class="lesson-list-item__image">
        <img :alt="lesson.description" :src="lesson.thumbnailUrl">
      </div>
      <div class="lesson-list-item__general">
        <h2>
          <nuxt-link :to="lessonLink">
            {{ lesson.title }}
          </nuxt-link>
        </h2>
        <div />
      </div>
    </div>
    <div class="lesson-list-item__content">
      <v-md-preview :text="lesson.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    lessonLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.lesson-list-item {
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
