<template>
  <div>
    <nuxt-link v-if="lessonLink" class="lesson-list-item link" :to="lessonLink">
      <div class="lesson-list-item__header">
        <div class="lesson-list-item__image">
          <img :alt="lesson.description" :src="lesson.thumbnailUrl">
        </div>
        <div class="lesson-list-item__general">
          <h2 class="lesson-list-item__title">
            {{ lesson.title }}
          </h2>
          <div class="lesson-list-item__content">
            <v-md-preview :text="lesson.shortDescription" />
          </div>
        </div>
      </div>
    </nuxt-link>
    <div v-else class="lesson-list-item">
      <div class="lesson-list-item__header">
        <div class="lesson-list-item__image">
          <video
            v-if="withVideo && lesson.promoUrl"
            :poster="lesson.thumbnailUrl"
            controls
          >
            <source :src="lesson.promoUrl" type="video/mp4">
          </video>
          <img v-else :alt="lesson.description" :src="lesson.thumbnailUrl"></img>
        </div>
        <div class="lesson-list-item__general">
          <h2 class="lesson-list-item__title">
            {{ lesson.title }}
          </h2>
          <div class="lesson-list-item__content">
            <v-md-preview :text="lesson.shortDescription" />
          </div>
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
    },
    withVideo: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.lesson-list-item {
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  padding: 0.8rem 1.6rem;
  display: flex;
  color: inherit;

  &.link:hover,
  &.link:focus,
  &.link:active {
    text-decoration: none;
    color: inherit;
  }

  &__header {
    display: flex;
    padding: 0.8rem 0;
  }

  &__image {
    min-width: 20rem;
    width: 20rem;
    margin-bottom: 0;

    img {
      width: 100%;
      height: auto;
    }

    video {
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
    font-weight: 500;
    font-family: var(--font-family-cormorant);

    @media screen and (max-width: 991px) {
      font-size: 1.3rem;
    }

    .lesson-list-item.link & {
      text-decoration: underline;
    }

    .lesson-list-item.link:hover &,
    .lesson-list-item.link:focus &,
    .lesson-list-item.link:active & {
      color: #a08d81;
    }
  }

  &__content {
    margin-top: 1rem;
    text-decoration: none;

    .github-markdown-body {
      .lesson-list-item:hover &,
      .lesson-list-item:focus &,
      .lesson-list-item:active & {
        text-decoration: none;
      }

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
