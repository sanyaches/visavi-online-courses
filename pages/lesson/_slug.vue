<template>
  <div class="lesson-page">
    <b-container>
      <h1 class="lesson-page__title">
        {{ lesson.title }}
      </h1>

      <div class="lesson-page__video">
        <iframe
          :src="lesson.videoUrl"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div class="lesson-page__description">
        <v-md-preview :text="lesson.description" />
      </div>

      <div class="lesson-page__files">
        <h2 class="lesson-page__files-title">
          {{ $t('lesson.files_title') }}
        </h2>

        <div v-if="files.length" class="lesson-page__files-list">
          <file-card v-for="file in files" :key="file.name" :file="file" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const name = context.params.slug
    const token = context.app.$cookies.get('_visavi_token')
    if (token) {
      context.app.$http.setToken(token, 'Bearer')
    }
    try {
      const response = await context.app.$http.$get(
          `${context.env.baseUrl}/api/lesson/single/${name}`
      )
      return {
        lesson: response.data.lesson,
        files: response.data.files
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      lesson: {},
      files: []
    }
  }
}
</script>

<style lang="scss">
.lesson-page {
  padding: 2rem 0;

  &__title {
    text-align: center;
    margin: 1rem 0;

    @media screen and (max-width: 991px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__image {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      width: 420px;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
    }
  }

  &__video {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;
    justify-content: center;

    video {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 991px) {
      display: flex;
    }

    @media screen and (max-width: 768px) {
      width: 420px;

      iframe {
        height: 240px;
      }
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      justify-content: flex-start;

      iframe {
        height: auto;
      }
    }
  }

  &__files-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }

  &__files-title {
    @media screen and (max-width: 991px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  &__description {
    font-size: 1.2rem;
    margin-top: 2rem;

    .github-markdown-body {
      padding: 0.8rem 0;
    }
  }
}
</style>
