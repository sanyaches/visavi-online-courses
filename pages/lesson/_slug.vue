<template>
  <div class="lesson-page">
    <nuxt-link v-if="lesson.category === 'practice'" class="lesson-page__link-chat" :to="localePath('/homework-discussion')">
      {{ $t('lesson.link_chat_1') }}
      <br>
      {{ $t('lesson.link_chat_2') }}
    </nuxt-link>

    <b-container>
      <h1 class="lesson-page__title">
        {{ lesson.title }}
      </h1>

      <div class="lesson-page__video" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          :src="lesson.videoUrl"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
        />
      </div>

      <div v-if="lesson.category === 'practice'" class="my-4 text-center">
        <nuxt-link class="button button--brown button button--large" :to="localePath('/homework-discussion')">
          {{ $t('lesson.chat_link') }}
        </nuxt-link>
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
/* eslint-disable no-undef */

export default {
  async asyncData (context) {
    const name = context.params.slug
    const token = context.app.$cookies.get('_vikosto_token')
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

  &__link-chat {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    width: 5.5rem;
    height: 5.5rem;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b6a498;
    border-radius: 50%;
    font-size: 0.9rem;
    opacity: 0.9;
    z-index: 1000000;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    outline: none;
    border: none;
    transition: all 0.4s;
    animation: pulse 2s infinite;

    &:hover, &:active, &:focus, &:not(:disabled):not(.disabled):active {
      background-color: #d1bdb0;
    }

    &:hover, &:visited, &:active, &:focus {
      text-decoration: none;
      color: #fff;
    }

    @media screen and (min-width: 768px) {
      bottom: 2.5rem;
      left: 2.5rem;
      width: 8.5rem;
      height: 8.5rem;
      font-size: 1.3rem;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 40px rgba(182, 164, 152, 0.3);
    }
    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(182, 164, 152, 0.3);
    }
  }

  @media screen and (max-width: 980px) {
    @keyframes pulse {
      0% {
        transform: scale(0.9);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(182, 164, 152, 0.3);
      }
      100% {
        transform: scale(0.9);
        box-shadow: 0 0 0 0 rgba(182, 164, 152, 0.3);
      }
    }
  }

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

  &__chat-title {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Cormorant SC', serif;
  }

  &__chat {
    margin: 2rem 0;
  }

  &__chat-container {
    margin-top: 1rem;
    width: 100%;
    height: 60vh;

    .app__messenger {
      z-index: 20;
    }

    @media screen and (max-width: 400px) {
      height: 70vh;
    }
  }
}
</style>
