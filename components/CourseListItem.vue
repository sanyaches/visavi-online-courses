<template>
  <div class="course-list-item">
    <div class="course-list-item__header">
      <div class="course-list-item__image">
        <img :alt="course.description" :src="course.thumbnailUrl">
      </div>
      <div class="course-list-item__general">
        <h2>
          <nuxt-link :to="courseLink">
            {{ course.title }}
          </nuxt-link>
        </h2>
        <div>
          <span>{{ $t('course.price') }}</span>
          <span>{{ course.price }}</span>
        </div>
        <div>
          <span>{{ $t('course.access_months') }}</span>
          <span>{{ course.accessMonths }}</span>
        </div>
      </div>
    </div>
    <div class="course-list-item__content">
      <v-md-preview :text="course.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    },
    courseLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.course-list-item {
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
