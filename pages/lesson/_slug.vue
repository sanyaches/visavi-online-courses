<template>
  <div class="lesson-page">
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

      <div class="my-4 text-center">
        <nuxt-link class="button button--brown button button--large" to="#chat-container">
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

      <div v-if="lesson.category === 'practice'" class="lesson-page__chat">
        <h2 class="lesson-page__chat-title">
          {{ $t('lesson.chat_title') }}
        </h2>
        <p v-if="chatLoading">
          {{ $t('lesson.chat_loading') }}
        </p>
        <div id="chat-container" class="lesson-page__chat-container" />
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapGetters } from 'vuex'

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
        files: response.data.files,
        APP_ID: context.env.COMETCHAT_APP_ID,
        AUTH_KEY: context.env.COMETCHAT_AUTH_KEY,
        APP_REGION: context.env.COMETCHAT_REGION,
        WIDGET_ID: context.env.COMETCHAT_WIDGET_ID
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      lesson: {},
      files: [],
      APP_ID: '',
      AUTH_KEY: '',
      APP_REGION: '',
      WIDGET_ID: '',
      chatLoading: false
    }
  },

  computed: {
    ...mapGetters({
      profile: 'user/getMe',
      token: 'user/getToken'
    })
  },

  mounted () {
    if (this.lesson.category !== 'practice') {
      return
    }

    if (!this.profile || !this.profile.id || !this.profile.firstName) {
      this.unsubscribe = this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'user/setUser') {
          const { user } = state.user
          if (user.id) {
            this.initChat(user)
          }
        }
      })
    } else {
      this.initChat(this.profile)
    }
  },

  beforeDestroy () {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  },

  methods: {
    initChat (user) {
      try {
        const UID = user.id
        const name = user.firstName
        const chatLocale = 'ru'

        if (!window.CometChatWidget) {
          return
        }

        this.chatLoading = true

        CometChatWidget.init({
          appID: this.APP_ID,
          appRegion: this.APP_REGION,
          authKey: this.AUTH_KEY
        }).then((response) => {
          const chatUser = new CometChatWidget.CometChat.User(UID)
          chatUser.setName(name)

          CometChatWidget.createOrUpdateUser(chatUser).then((user) => {
            CometChatWidget.login({
              uid: UID
            }).then((loggedInUser) => {
              CometChatWidget.launch({
                widgetID: this.WIDGET_ID,
                target: '#chat-container',
                roundedCorners: 'true',
                height: '100%',
                width: '100%',
                defaultID: '1',
                defaultType: 'user'
              }).then(() => {
                setTimeout(() => {
                  CometChatWidget.localize(chatLocale)
                  this.chatLoading = false
                }, 1000)
              }).catch(() => {
                this.chatLoading = false
              })
            })
          })
        }).catch((e) => {
          console.error(e)
        })
      } catch (e) {
        console.error(e)
      }
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
