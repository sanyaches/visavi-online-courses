<template>
  <div class="single-lesson-single">
    <b-container>
      <div v-if="!isPurchased || isExpired" class="single-lesson-single__promo">
        <div class="single-lesson-single__promo-background">
          <video
            class="single-lesson-single__promo-video"
            :poster="singleLesson.thumbnailUrl"
            frameborder="0"
            allowfullscreen=""
            autoplay="autoplay"
            loop="loop"
            muted=""
            preload="yes"
            playsinline=""
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
                  <span>{{ singleLesson.price }}</span>
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
                <nuxt-link class="button button--brown button button--large" to="#about">
                  {{ $t('single_lesson.about') }}
                </nuxt-link>
                <b-button class="button button--brown-dark button button--large" @click="buySingleLesson">
                  {{ $t('single_lesson.buy') }}
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="single-lesson-single__promo">
        <div class="single-lesson-single__promo-background mobile">
          <video
            class="single-lesson-single__promo-video"
            :poster="singleLesson.thumbnailUrl"
            frameborder="0"
            allowfullscreen=""
            autoplay="autoplay"
            loop="loop"
            muted=""
            preload="yes"
            playsinline=""
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
                <!-- <nuxt-link class="button button--brown button button--large" to="#homework">
                  {{ $t('single_lesson.homework') }}
                </nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <template v-if="isPurchased && !isExpired">
        <div class="single-lesson-single__watch">
          {{ $t('single_lesson.watch_title') }}
        </div>
        <div id="player" class="single-lesson-single__video">
          <iframe
            :src="singleLesson.videoUrl"
            width="720"
            height="400"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
      </template>

      <div v-else class="single-lesson-single__promo-watch">
        <div class="single-lesson-single__watch">
          {{ $t('course.watch_title') }}
        </div>
        <div id="player" class="single-lesson-single__video">
          <iframe
            :src="singleLesson.promoUrl"
            width="720"
            height="400"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <div id="about" class="single-lesson-single__description-title">
        <h2>
          {{ $t('single_lesson.description_title') }}
        </h2>
      </div>
      <div class="single-lesson-single__description">
        <v-md-preview :text="singleLesson.description" />
      </div>

      <div v-if="purchase && files.length" id="materials" class="single-lesson-single__files">
        <h2>{{ $t('single_lesson.files_title') }}</h2>

        <div class="single-lesson-single__files-list">
          <file-card v-for="file in files" :key="file.name" :file="file" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format, formatDuration } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'

export default {
  async asyncData (context) {
    const name = context.params.slug
    try {
      const token = context.app.$cookies.get('_visavi_token')
      if (token) {
        context.app.$http.setToken(token, 'Bearer')
      }
      const response = await context.app.$http.$get(
          `${context.env.baseUrl}/api/single-lesson/single/${name}`
      )

      return {
        singleLesson: response.data.singleLesson,
        files: response.data.files,
        purchase: response.data.purchase
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLesson: {},
      files: [],
      purchase: null
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
    }
  },

  methods: {
    async buySingleLesson () {
      if (!this.profile) {
        const link = this.localePath('/login')
        this.$root.$bvToast.toast(this.$t('notify.register_then_buy_msg'), {
          title: this.$t('notify.register_then_buy'),
          href: link,
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'info'
        })

        return
      }
      const getFullName = (profile) => {
        return [profile.firstName, profile.lastName]
          .filter(Boolean)
          .join(' ')
      }
      const userEmail = this.profile.email
      const amount = this.singleLesson.price
      const from = getFullName(this.profile)
      const lessonName = this.singleLesson.name
      const lessonTitle = this.singleLesson.title
      const paymentMessage = this.$t('single_lesson.payment_message', { from, email: userEmail, amount, lessonName: lessonTitle })

      const url = '/api/payment/pay'

      const jsonBody = JSON.stringify({
        courseName: lessonName,
        courseType: 'singleLesson',
        accessMonths: this.singleLesson.accessMonths,
        amount: this.singleLesson.price,
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
    }
  }
}
</script>

<style lang="scss">
.single-lesson-single {
  padding: 2rem 0;

  &__title {
    text-align: center;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  &__image {
    height: 325px;
    display: none;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 991px) {
      display: flex;
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
      position: static;
      height: auto;
    }

    video {
      width: 100%;
      height: auto;

      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    @media screen and (max-width: 768px) {
      width: 420px;
    }

    @media screen and (max-width: 480px) {
      width: 340px;
    }

    @media screen and (max-width: 360px) {
      width: 300px;
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
    z-index:1;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__promo-content {
    position: relative;

    @media screen and (max-width: 991px) {
      position: static;
    }
  }

  &__promo-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 991px) {
      flex-direction: column;
      gap: 1rem;
    }
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

    @media screen and (max-width: 991px) {
      font-size: 2rem;
      text-align: center;

      &.play {
        font-size: 4rem;
        display: none;
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

    @media screen and (max-width: 991px) {
      position: static;
      height: auto;
      padding: 1rem 0;
      top: 0;
      background: transparent;
    }
  }

  &__promo-text {
    padding: 0 2rem;
  }

  &__benefits {
    padding: 1rem;
    border-top: 1px solid #b6a498;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 1rem;
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

    @media screen and (max-width: 991px) {
      font-size: 2rem;
    }
  }

  &__benefit-text {
    padding-top: 0.6rem;
    text-align: center;
  }

  &__control {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  &__video {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    video {
      width: 100%;
      height: auto;
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

  &__promo-watch {
    display: none;

    @media screen and (max-width: 991px) {
      display: block;
    }
  }

  &__watch {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0 1rem;
  }

  &__description-title {
    margin-top: 2rem;

    h2 {
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Cormorant SC', serif;
    }

    @media screen and (max-width: 991px) {
      h2 {
        font-size: 1.6rem;
      }
    }
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

  &__files h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Cormorant SC', serif;

    @media screen and (max-width: 991px) {
      font-size: 1.6rem;
    }
  }
}
</style>
