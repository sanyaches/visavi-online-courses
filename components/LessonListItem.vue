<template>
  <div class="lesson-list-item">
    <div class="lesson-list-item__header">
      <div class="lesson-list-item__image">
        <img :alt="lesson.description" :src="lesson.thumbnailUrl">
      </div>
      <div class="lesson-list-item__general">
        <h2 class="lesson-list-item__title">
          <nuxt-link v-if="lessonLink" :to="lessonLink" class="anchor--raw">
            {{ lesson.title }}
          </nuxt-link>
          <span v-else>
            {{ lesson.title }}
          </span>
        </h2>
        <div class="lesson-list-item__content">
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
    },
    lessonLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.lesson-list-item {
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  padding: 0.8rem 1.6rem;

  &__header {
    display: flex;
    padding: 0.8rem 0;
  }

  &__image {
    min-width: 20rem;
    width: 20rem;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 991px) {
      min-width: 15rem;
      width: 15rem;
    }
  }

  &__general {
    margin-left: 1rem;
    padding: 0 0.8rem;

    @media screen and (max-width: 991px) {
      padding: 0;
    }

    @media screen and (max-width: 480x) {
      .anchor {
        font-size: 1.3rem;
      }
    }
  }

  &__title {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Cormorant SC', serif;

    @media screen and (max-width: 991px) {
      font-size: 1.3rem;
    }
  }

  &__content {
    margin-top: 1rem;

    .github-markdown-body {
      padding: 0;
    }
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
