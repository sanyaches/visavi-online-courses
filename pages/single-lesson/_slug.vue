<template>
  <div class="single-lesson-single">
    <b-button v-if="!isPurchased || isExpired" class="single-lesson-single__buy-button" @click="buySingleLesson">
      <div v-if="singleLesson.price > 0">
        {{ $t('single_lesson.buy_button') }}
        <br>
        {{ $t('single_lesson.buy_course_button') }}
      </div>
      <div v-else>
        {{ $t('single_lesson.buy_free_button') }}
        <br>
        {{ $t('single_lesson.buy_free_course_button') }}
      </div>
    </b-button>
    <nuxt-link v-else-if="singleLesson.price > 0" class="single-lesson-single__link-chat" :to="localePath('/homework-discussion')">
      {{ $t('single_lesson.link_chat_1') }}
      <br>
      {{ $t('single_lesson.link_chat_2') }}
    </nuxt-link>

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
                <div v-if="singleLesson.price > 0" class="single-lesson-single__price">
                  <span>{{ singleLesson.price }}</span>
                  <br>
                  <span class="currency">{{ $t('common.currency') }}</span>
                </div>
                <div v-else class="single-lesson-single__price">
                  {{ $t('common.free') }}
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
                <div v-if="singleLesson.price > 0" class="single-lesson-single__benefit">
                  <font-awesome-icon icon="fa-solid fa-key" class="single-lesson-single__benefit-icon" />
                  <div class="single-lesson-single__benefit-text">
                    <span>{{ $t('single_lesson.access_months') }}</span>
                    <br>
                    <span>{{ formattedMonths }}</span>
                  </div>
                </div>
                <div v-if="singleLesson.price > 0" class="single-lesson-single__benefit">
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
                  {{ singleLesson.price > 0 ? $t('single_lesson.buy') : $t('single_lesson.buy_free') }}
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
                <div v-if="singleLesson.price > 0" class="single-lesson-single__benefit">
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
                <div v-if="singleLesson.price > 0" class="single-lesson-single__benefit">
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

        <div v-if="singleLesson.price > 0" class="my-4 text-center">
          <nuxt-link class="button button--brown button button--large" :to="localePath('/homework-discussion')">
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
          <div v-for="file in files" :key="file.name">
            <file-card v-if="purchasedFileNames.includes(file.name)" :file="file" />
            <div v-else class="file-offer">
              <div class="file-offer__content">
                <div class="file-offer__image">
                  <img src="@/assets/images/guide.jpg" :alt="file.title">
                </div>
                <div class="file-offer__main-content">
                  <div class="file-offer__title">
                    {{ file.title }}
                  </div>
                  <div class="file-offer__benefits">
                    <div class="file-offer__benefit">
                      <font-awesome-icon icon="fa-solid fa-check" class="file-offer__benefit-icon" />
                      <p>Качественные и проверенные стайлинг и инструменты </p>
                    </div>
                    <div class="file-offer__benefit">
                      <font-awesome-icon icon="fa-solid fa-clipboard-list" class="file-offer__benefit-icon" />
                      <p>Полное описание продуктов, как использовать, где купить и сколько стоит</p>
                    </div>
                    <div class="file-offer__benefit">
                      <font-awesome-icon icon="fa-solid fa-star" class="file-offer__benefit-icon" />
                      <p>Подходит как для мастеров, так и для тех, кто любит делать укладки для себя</p>
                    </div>
                  </div>
                  <p class="file-offer__price">
                    {{ file.price }} {{ $t('common.currency') }}
                  </p>
                  <b-button class="button button--brown-dark button button--large" @click="buyFile(file)">
                    {{ $t('single_lesson.buy') }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapActions, mapGetters } from 'vuex'
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
        singleLesson: response.data.singleLesson
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLesson: {},
      files: [],
      filePurchases: [],
      purchase: null,
      videoUrl: null
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
      const { files, purchase, videoUrl, filePurchases } = result.data

      this.purchase = purchase
      this.files = files
      this.videoUrl = videoUrl
      this.filePurchases = filePurchases
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
    purchasedFileNames () {
      const purchasedNames = this.filePurchases.map(filePurchase => filePurchase.fileName)
      const purchasedFileNames = []

      this.files.forEach((file) => {
        if (!file.needToBuy) {
          purchasedFileNames.push(file.name)
        } else if (purchasedNames.includes(file.name)) {
          purchasedFileNames.push(file.name)
        }
      })

      return purchasedFileNames
    }
  },

  methods: {
    ...mapActions({
      changeCheckoutItem: 'checkout/changeCheckoutItem',
      changeShowModal: 'checkout/changeShowModal'
    }),

    buySingleLesson () {
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
          lessonType: 'singleLesson',
          name: this.singleLesson.name,
          imageUrl: this.singleLesson.thumbnailUrl,
          title: this.singleLesson.title,
          price: this.singleLesson.price,
          accessMonths: this.singleLesson.accessMonths
        })

        this.$cookies.set('_vikosto_offer', cookieString, { expires: expiresDate })
        this.$router.push(link)

        return
      }

      this.changeCheckoutItem({ ...this.singleLesson, itemType: 'singleLesson' })
      this.changeShowModal(true)
    },

    buyFile (file) {
      if (!this.profile) {
        const link = this.localePath('/login')
        this.$root.$bvToast.toast(this.$t('notify.register_then_buy_msg'), {
          title: this.$t('notify.register_then_buy'),
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'info'
        })
        this.$router.push(link)

        return
      }

      this.changeCheckoutItem({ ...file, itemType: 'file' })
      this.changeShowModal(true)
    }
  }
}
</script>

<style lang="scss">
.file-offer {
  &__content {
    display: flex;
    padding: 1rem 0;

    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    text-align: center;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 991px) {
      font-size: 1.2rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  &__image {
    width: 15rem;
    margin-right: 5rem;

    @media screen and (max-width: 991px) {
      margin-right: 0;
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  &__benefit {
    display: flex;
    align-items: center;
  }

  &__benefits {
    margin-bottom: 1.2rem;
  }

  &__benefit:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__benefit p {
    margin-bottom: 0;
  }

  &__benefit-icon {
    font-size: 2.4rem;
    margin-right: 1rem;
    width: 3rem;
  }

  &__price {
    font-size: 1.3rem;
    font-weight: 600;

    @media screen and (max-width: 991px) {
      text-align: center;
    }
  }

  .button {
    @media screen and (max-width: 991px) {
      display: block;
      margin: 0 auto;
    }
  }
}
.single-lesson-single {
  padding: 0 0 6rem;

  &__buy-button,
  &__link-chat {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
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

  &__link-chat {
    width: 5.5rem;
    height: 5.5rem;
    font-size: 0.9rem;

    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
      width: 8.5rem;
      height: 8.5rem;
    }

    &:hover, &:visited, &:active, &:focus {
      text-decoration: none;
      color: #fff;
    }
  }

  &__buy-button {
     width: 5rem;
    height: 5rem;
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
}
</style>
