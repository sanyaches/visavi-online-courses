<template>
  <div class="single-lesson-single">
    <b-button v-if="!isPurchased || isExpired" class="single-lesson-single__buy-button" @click="buySingleLesson">
      <div>
        {{ $t('single_lesson.buy_button') }}
        <br>
        {{ $t('single_lesson.buy_course_button') }}
      </div>
    </b-button>

    <b-container class="promo-container">
      <div v-if="!isPurchased || isExpired" class="single-lesson-single__promo">
        <div class="single-lesson-single__promo-background">
          <video
            id="background-video"
            class="single-lesson-single__promo-video"
            :poster="singleLesson.thumbnailUrl"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="auto"
            playsinline="playsinline"
          >
            <source :src="singleLesson.promoUrl" type="video/mp4">
          </video>
        </div>
        <div class="single-lesson-single__promo-content">
          <div class="single-lesson-single__promo-content-background">
            <div class="single-lesson-single__promo-text">
              <div class="single-lesson-single__promo-header">
                <h1 class="single-lesson-single__title">
                  <span>{{ singleLesson.title.split(' | ')[0] }}</span>
                  <br>
                  <span>{{ singleLesson.title.split(' | ')[1] }}</span>
                </h1>
                <div class="single-lesson-single__image">
                  <img :src="singleLesson.thumbnailUrl">
                </div>
                <div class="single-lesson-single__price">
                  <span class="old">{{ singleLesson.price }}</span>
                  <span class="new">{{ newPrice }}</span>
                  <br>
                  <span class="currency">{{ $t('common.currency') }}</span>
                </div>
              </div>
              <div class="single-lesson-single__benefits">
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-clock" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    {{ $t('single_lesson.duration') }}
                    <br>
                    {{ formattedTime }}
                  </div>
                </div>
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-key" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.access_months') }}</span>
                    <br>
                    <span>{{ formattedMonths }}</span>
                  </div>
                </div>
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-scroll" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.give_certificate') }}</span>
                    <br>
                    <span>{{ $t('single_lesson.certificate') }}</span>
                  </div>
                </div>
              </div>
              <div class="single-lesson-single__control">
                <b-button class="button button--brown-dark button button--large" @click="buySingleLesson">
                  {{ $t('single_lesson.buy') }}
                </b-button>
                <nuxt-link class="button button--brown button button--large" to="#promo">
                  {{ $t('single_lesson.promo') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="single-lesson-single__promo">
        <div class="single-lesson-single__promo-background">
          <video
            id="background-video"
            class="single-lesson-single__promo-video"
            :poster="singleLesson.thumbnailUrl"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="auto"
            playsinline="playsinline"
          >
            <source :src="singleLesson.promoUrl" type="video/mp4">
          </video>
        </div>
        <div class="single-lesson-single__promo-content">
          <div class="single-lesson-single__promo-content-background">
            <div class="single-lesson-single__promo-text">
              <div class="single-lesson-single__promo-header">
                <h1 class="single-lesson-single__title">
                  <span>{{ singleLesson.title.split(' | ')[0] }}</span>
                  <br>
                  <span>{{ singleLesson.title.split(' | ')[1] }}</span>
                </h1>
                <div class="single-lesson-single__image">
                  <img :src="singleLesson.thumbnailUrl">
                </div>
                <div class="single-lesson-single__price play">
                  <nuxt-link to="#player" class="anchor--raw">
                    <font-awesome-icon icon="fa-solid fa-circle-play" />
                  </nuxt-link>
                </div>
              </div>
              <div class="single-lesson-single__benefits">
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-comment-dots" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.give_feedback') }}</span>
                    <br>
                    <span>{{ $t('single_lesson.feedback') }}</span>
                  </div>
                </div>
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-key" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.expired_at') }}</span>
                    <br>
                    <span>{{ formattedEndDate }}</span>
                  </div>
                </div>
                <div class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-scroll" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.give_certificate') }}</span>
                    <br>
                    <span>{{ $t('single_lesson.certificate') }}</span>
                  </div>
                </div>
              </div>
              <div class="single-lesson-single__control">
                <nuxt-link class="button button--brown button button--large" to="#about">
                  {{ $t('single_lesson.about') }}
                </nuxt-link>
                <nuxt-link v-if="files.length" class="button button--brown-dark button button--large" to="#materials">
                  {{ $t('single_lesson.materials') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>

    <b-container>
      <template v-if="isPurchased && !isExpired">
        <div class="single-lesson-single__watch">
          {{ $t('single_lesson.watch_title') }}
        </div>
        <div id="player" class="single-lesson-single__video" style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            :src="videoUrl"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
          />
        </div>

        <div class="my-4 text-center">
          <nuxt-link class="button button--brown button button--large" to="#chat-container">
            {{ $t('single_lesson.homework') }}
          </nuxt-link>
        </div>
      </template>

      <div id="about" class="single-lesson-single__description-title">
        <h2>
          {{ $t('single_lesson.description_title') }}
        </h2>
      </div>
      <div class="single-lesson-single__description">
        <v-md-preview :text="singleLesson.description" />
      </div>

      <div v-if="!isPurchased || isExpired" id="promo" class="text-center">
        <h2 class="my-3">
          {{ $t('single_lesson.watch_promo_title') }}
        </h2>
        <div id="player" class="single-lesson-single__video">
          <video
            :poster="singleLesson.thumbnailUrl"
            controls
          >
            <source :src="singleLesson.promoUrl" type="video/mp4">
          </video>
        </div>

        <div class="single-lesson-single__offer mt-3">
          <b-button class="button button--brown-dark button button--large" @click="buySingleLesson">
            {{ $t('single_lesson.open_access') }}
          </b-button>
        </div>
      </div>

      <div v-if="isPurchased && !isExpired && files.length" id="materials" class="single-lesson-single__files">
        <h2>{{ $t('single_lesson.files_title') }}</h2>

        <div class="single-lesson-single__files-list">
          <file-card v-for="file in files" :key="file.name" :file="file" />
        </div>
      </div>

      <div v-if="isPurchased && !isExpired" class="single-lesson-single__chat">
        <h2 class="single-lesson-single__chat-title">
          {{ $t('single_lesson.chat_title') }}
        </h2>
        <p v-if="chatLoading">
          {{ $t('single_lesson.chat_loading') }}
        </p>
        <div id="chat-container" class="single-lesson-single__chat-container" />
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapGetters } from 'vuex'
import { format, formatDuration } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'

export default {
  async asyncData (context) {
    const name = context.params.slug
    try {
      const response = await context.app.$http.$get(
          `${context.env.baseUrl}/api/single-lesson/single/${name}`
      )

      return {
        singleLesson: response.data.singleLesson,
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
      singleLesson: {},
      files: [],
      purchase: null,
      videoUrl: null,
      APP_ID: '',
      AUTH_KEY: '',
      APP_REGION: '',
      WIDGET_ID: '',
      chatLoading: false
    }
  },

  async fetch () {
    const name = this.$route.params.slug
    const token = this.$cookies.get('_vikosto_token')

    if (!token) {
      return
    }

    const url = `/api/single-lesson/single-extra/${name}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store'
    })

    const result = await res.json()

    if (result?.status === 'success') {
      const { files, purchase, videoUrl } = result.data

      this.purchase = purchase
      this.files = files
      this.videoUrl = videoUrl
    }
  },

  fetchOnServer: false,

  head () {
    return {
      title: this.$t('single_lesson.seo.title', { title: this.singleLesson.title }),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.singleLesson.shortDescription
        },
        { name: 'keywords', content: this.$t('single_lesson.seo.keywords', { words: this.singleLesson.title?.toLowerCase() }) },
        {
          name: 'news_keywords',
          content: this.$t('single_lesson.seo.keywords', { words: this.singleLesson.title?.toLowerCase() })
        },
        {
          property: 'og:title',
          content: this.$t('single_lesson.seo.title', { title: this.singleLesson.title })
        },
        {
          property: 'og:description',
          content: this.singleLesson.shortDescription
        },
        {
          property: 'og:image:alt',
          content: this.singleLesson.shortDescription
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken',
      profile: 'user/getMe'
    }),
    isPurchased () {
      return Boolean(this.purchase)
    },
    isExpired () {
      const dateNowMs = Date.now()

      return Boolean(this.purchase && this.purchase.endDate < dateNowMs)
    },
    formattedEndDate () {
      return format(this.purchase.endDate, 'dd MMMM yyyy HH:mm (OOOO)')
    },
    formattedTime () {
      return formatDuration({
        hours: Math.floor(this.singleLesson.duration / 60),
        minutes: this.singleLesson.duration % 60
      }, { locale: this.$i18n.locale === 'ru' ? ru : enUS })
    },
    formattedMonths () {
      return formatDuration({
        months: this.singleLesson.accessMonths
      }, { locale: this.$i18n.locale === 'ru' ? ru : enUS })
    },
    newPrice () {
      return Math.ceil(Math.floor(this.singleLesson.price * 0.7) / 10) * 10 - 10
    }
  },

  mounted () {
    if (!this.isPurchased || this.isExpired) {
      return
    }

    if (!this.profile || !this.profile.id || !this.profile.firstName) {
      this.unsubscribe = this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'user/setUser') {
          const { user } = state.user
          if (user?.id) {
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
    async buySingleLesson () {
      if (!this.profile) {
        const link = this.localePath('/login')
        this.$root.$bvToast.toast(this.$t('notify.register_then_buy_msg'), {
          title: this.$t('notify.register_then_buy'),
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'info'
        })
        const expiresDate = new Date()
        expiresDate.setDate(expiresDate.getDate() + 30)

        const cookieString = JSON.stringify({
          lessonType: 'single-lesson',
          name: this.singleLesson.name,
          imageUrl: this.singleLesson.thumbnailUrl,
          title: this.singleLesson.title,
          price: this.newPrice,
          accessMonths: this.singleLesson.accessMonths
        })

        this.$cookies.set('_vikosto_offer', cookieString, { expires: expiresDate })
        this.$router.push(link)

        return
      }
      const getFullName = (profile) => {
        return [profile.firstName, profile.lastName]
          .filter(Boolean)
          .join(' ')
      }
      const userEmail = this.profile.email
      const amount = this.newPrice
      const from = getFullName(this.profile)
      const lessonName = this.singleLesson.name
      const lessonTitle = this.singleLesson.title
      const paymentMessage = this.$t('single_lesson.payment_message', { from, email: userEmail, amount, lessonName: lessonTitle })

      const url = '/api/payment/pay'

      const jsonBody = JSON.stringify({
        courseName: lessonName,
        courseType: 'singleLesson',
        accessMonths: this.singleLesson.accessMonths,
        amount: this.newPrice,
        // amount: 2,
        paymentMessage,
        token: this.token,
        userEmail
      })

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: jsonBody
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.$root.$bvToast.toast(this.$t('notify.success_add_purchase'), {
            title: this.$t('notify.success_add_purchase'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          window.location.reload()

          return
        } else if (data?.status === 'redirect') {
          window.location.assign(data.url)
          return
        }

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase()
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
      }
    },
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
.single-lesson-single {
  padding: 0 0 6rem;

  &__buy-button {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    width: 5rem;
    height: 5rem;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b6a498;
    border-radius: 50%;
    font-size: 1rem;
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

    @media screen and (min-width: 768px) {
      bottom: 2.5rem;
      left: 2.5rem;
      width: 8rem;
      height: 8rem;
      font-size: 1.4rem;
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

  @media screen and (max-width: 991px) {
    padding: 0 0 6rem;

    .container.promo-container {
      margin: 0;
      padding: 0;
      max-width: 100%;
    }
  }

  &__title {
    text-align: center;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  &__image {
    height: 325px;
    display: none;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      height: 210px;
    }

    @media screen and (max-width: 768px) {
      height: 160px;
    }
  }

  &__purchase {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  &__promo {
    position: relative;
    height: 600px;
    overflow: hidden;
    margin: 0 auto;

    @media screen and (max-width: 991px) {
      .container {
        margin: 0;
        padding: 0;
      }

      height: 60vh;
    }

    video {
      width: 100%;
      height: auto;

      @media screen and (max-width: 991px) {
        width: 100vh;
      }
    }
  }

  &__promo-background {
    width: 100%;
    height: 100%;
  }

  &__promo-video {
    width:100%;
    position:absolute;
    top:50%;
    left: 50%;
    z-index:1;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 991px) {
      width: 100vh;
      top: 0;
      transform: translate(-50%, 0);
    }
  }

  &__promo-content {
    position: relative;

    @media screen and (max-width: 1200px) {
      .button.button--large {
        font-size: 1.1rem;
        padding: 0.3rem 0.5rem;
      }
    }

    @media screen and (max-width: 480px) {
      .button.button--large {
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
      }
    }
  }

  &__promo-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  &__price {
    font-size: 2.8rem;
    text-align: right;
    font-weight: 800;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;

    .old {
      color: #656060;
      font-size: 0.8em;
      position: relative;
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        height: 4px;
        background-color: rgb(128, 107, 107);
        top: 50%;
        left: -10%;
        width: 120%;
        opacity: 0.75;
        transform: rotate(-15deg);
      }
    }

    span.currency {
      text-transform: uppercase;
      font-size: 1.6rem;
    }

    &.play {
      font-size: 5rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 2.2rem;

      &.play {
        font-size: 4.4rem;
      }

      span.currency {
        font-size: 1.4rem;
      }
    }

    @media screen and (max-width: 991px) {
      font-size: 2rem;

      &.play {
        font-size: 4rem;
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;

      span.currency {
        font-size: 1.2rem;
      }

      &.play {
        font-size: 2rem;
      }
    }
  }

  &__promo-content-background {
    position:absolute;
    width: 100%;
    top: -400px;
    height: 400px;
    background: linear-gradient(to bottom, rgba(241, 241, 241, 0),  rgba(241, 241, 241, 0.8), rgba(241, 241, 241, 0.9), #fff);
    z-index: 3;
    padding: 5rem 0rem 0rem;

    @media screen and (max-width: 480px) {
      top: -360px;
      height: 350px;
    }
  }

  &__promo-text {
    padding: 0 2rem;

    @media screen and (max-width: 480px) {
      padding: 0 1rem;
    }
  }

  &__benefits {
    padding: 1rem;
    border-top: 1px solid #b6a498;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 991px) {
      gap: 1rem;
      padding: 0.5rem;
    }
  }

  &__benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__benefit-icon {
    font-size: 3rem;
    color: #584f48;

    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
    }
  }

  &__benefit-text {
    padding-top: 0.6rem;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  }

  &__control {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 991px) {
      gap: 1rem;
    }
  }

  &__video {
    overflow: hidden;
    margin: 0 auto;
    justify-content: center;
    width: 720px;

    video {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 991px) {
      width: 100%;
    }

    @media screen and (max-width: 480px) {
      justify-content: flex-start;
    }
  }

  &__file-form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  &__files-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }

  &__access_months {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__description {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  &__lessons {
    margin-top: 2rem;
  }

  &__lessons-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  &__controls {
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__watch {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0 1rem;
    display: none;
  }

  h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Cormorant SC', serif;

    @media screen and (max-width: 991px) {
      font-size: 1.6rem;
    }
  }

  &__description-title {
    margin-top: 2rem;
  }

  &__description {
    .github-markdown-body {
      font-family: inherit;
      padding: 1rem 0;
      text-align: justify;
      font-size: 1.2rem;
      padding-right: 4rem;

      @media screen and (max-width: 991px) {
        padding: 0.5rem 0;
        padding-right: 1rem;
        font-size: 1rem;
      }
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
