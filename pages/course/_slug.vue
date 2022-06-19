<template>
  <div class="course-page">
    <b-button v-if="!isPurchased || isExpired" class="course-page__buy-button" @click="buyCourse">
      <div>
        {{ $t('course.buy_button') }}
        <br>
        {{ $t('course.buy_course_button') }}
      </div>
    </b-button>

    <b-container class="promo-container">
      <div v-if="!isPurchased || isExpired" class="course-page__promo">
        <div class="course-page__promo-background">
          <video
            class="course-page__promo-video"
            :poster="course.thumbnailUrl"
            frameborder="0"
            allowfullscreen=""
            autoplay="autoplay"
            loop="loop"
            muted
            preload="auto"
            playsinline
          >
            <source :src="course.promoUrl" type="video/mp4">
          </video>
        </div>
        <div class="course-page__promo-content">
          <div class="course-page__promo-content-background">
            <div class="course-page__promo-text">
              <div class="course-page__promo-header">
                <h1 class="course-page__title">
                  {{ course.title }}
                </h1>
                <div class="course-page__image">
                  <img :src="course.thumbnailUrl">
                </div>
                <div class="course-page__price">
                  <span>{{ course.price }}</span>
                  <br>
                  <span class="currency">{{ $t('common.currency') }}</span>
                </div>
              </div>
              <div class="course-page__benefits">
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-clock" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    {{ $t('course.duration') }}
                    <br>
                    {{ courseLessons.length }}
                  </div>
                </div>
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-key" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    <span>{{ $t('course.access_months') }}</span>
                    <br>
                    <span>{{ formattedMonths }}</span>
                  </div>
                </div>
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-scroll" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    <span>{{ $t('course.give_certificate') }}</span>
                    <br>
                    <span>{{ $t('course.certificate') }}</span>
                  </div>
                </div>
              </div>
              <div class="course-page__control">
                <nuxt-link class="button button--brown button button--large" to="#about">
                  {{ $t('course.about') }}
                </nuxt-link>
                <b-button class="button button--brown-dark button button--large" @click="buyCourse">
                  {{ $t('course.buy') }}
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="course-page__promo">
        <div class="course-page__promo-background">
          <video
            class="course-page__promo-video"
            :poster="course.thumbnailUrl"
            frameborder="0"
            allowfullscreen=""
            autoplay="autoplay"
            loop="loop"
            muted
            preload="yes"
            playsinline
          >
            <source :src="course.promoUrl" type="video/mp4">
          </video>
        </div>
        <div class="course-page__promo-content">
          <div class="course-page__promo-content-background">
            <div class="course-page__promo-text">
              <div class="course-page__promo-header">
                <h1 class="course-page__title">
                  {{ course.title }}
                </h1>
                <div class="course-page__image">
                  <img :src="course.thumbnailUrl">
                </div>
              </div>
              <div class="course-page__benefits">
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-comment-dots" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    <span>{{ $t('course.give_feedback') }}</span>
                    <br>
                    <span>{{ $t('course.feedback') }}</span>
                  </div>
                </div>
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-key" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    <span>{{ $t('course.expired_at') }}</span>
                    <br>
                    <span>{{ formattedEndDate }}</span>
                  </div>
                </div>
                <div class="course-page__benefit">
                  <font-awesome-icon icon="fa-solid fa-scroll" class="course-page__benefit-icon" />
                  <div class="course-page__benefit-text">
                    <span>{{ $t('course.give_certificate') }}</span>
                    <br>
                    <span>{{ $t('course.certificate') }}</span>
                  </div>
                </div>
              </div>
              <div class="course-page__control">
                <nuxt-link class="button button--brown button button--large" to="#about">
                  {{ $t('course.about') }}
                </nuxt-link>
                <nuxt-link class="button button--brown-dark button button--large" to="#course-page-lessons">
                  {{ $t('course.materials') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>

    <b-container>
      <div class="course-page__watch">
        {{ $t('course.watch_title') }}
      </div>
      <div class="course-page__video">
        <video
          :poster="course.thumbnailUrl"
          frameborder="0"
          allowfullscreen=""
          autoplay="autoplay"
          controls
          loop="loop"
          muted
          preload="yes"
          playsinline
        >
          <source :src="course.promoUrl" type="video/mp4">
        </video>
      </div>

      <div id="about" class="course-page__description-title">
        <h2>
          {{ $t('course.description_title') }}
        </h2>
      </div>
      <div class="course-page__description">
        <v-md-preview :text="course.description" />
      </div>

      <div id="course-page-lessons" class="course-page__lessons">
        <h2 class="course-page__lessons-title">
          {{ $t('course.list_lessons') }}
        </h2>

        <div class="course-page__lessons-container">
          <div v-if="theoryLessons.length">
            <h3 class="course-page__category-title">
              {{ $t('course.category_theory') }}
            </h3>
            <ul class="course-page__lessons-list">
              <li v-for="lesson in theoryLessons" :key="lesson.name" class="course-page__lessons-item">
                <lesson-list-item
                  :lesson="lesson"
                  :lesson-link="isPurchased ? localePath({ path: `/lesson/${lesson.name}` }) : null"
                />
              </li>
            </ul>
          </div>

          <div v-if="practiceLessons.length">
            <h3 class="course-page__category-title">
              {{ $t('course.category_practice') }}
            </h3>
            <ul class="course-page__lessons-list">
              <li v-for="lesson in practiceLessons" :key="lesson.name" class="course-page__lessons-item">
                <lesson-list-item
                  :lesson="lesson"
                  :lesson-link="isPurchased ? localePath({ path: `/lesson/${lesson.name}` }) : null"
                />
              </li>
            </ul>
          </div>

          <div v-if="bonusLessons.length" class="mt-3">
            <h3 class="course-page__category-title">
              {{ $t('course.category_bonus') }}
            </h3>
            <ul class="course-page__lessons-list">
              <li v-for="lesson in bonusLessons" :key="lesson.name" class="course-page__lessons-item">
                <lesson-list-item
                  :lesson="lesson"
                  :lesson-link="isPurchased ? localePath({ path: `/lesson/${lesson.name}` }) : null"
                />
              </li>
            </ul>
          </div>

          <div v-if="!isPurchased || isExpired" class="course-page__offer mt-3">
            <b-button class="button button--brown-dark button button--large" @click="buyCourse">
              {{ $t('course.open_access') }}
            </b-button>
          </div>

          <div v-if="!theoryLessons.length && !practiceLessons.length && !bonusLessons.length">
            {{ $t('course.no_lessons') }}
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format, formatDuration } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'
import LessonListItem from '@/components/LessonListItem.vue'

export default {
  components: {
    LessonListItem
  },

  async asyncData (context) {
    try {
      const name = context.params.slug
      const token = context.app.$cookies.get('_vikosto_token')
      if (token) {
        context.app.$http.setToken(token, 'Bearer')
      }
      const response = await context.app.$http.$get(
          `${context.env.baseUrl}/api/course/single/${name}`
      )
      const lessonsResponse = await context.app.$http.$get(`${context.env.baseUrl}/api/lesson/list-by-course-demo/${name}`)

      return {
        course: response.data.course,
        purchase: response.data.purchase,
        courseLessons: lessonsResponse.data
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      course: {},
      courseLessons: [],
      purchase: null
    }
  },

  head () {
    return {
      title: this.$t('course.seo.title', { title: this.course.title })
    }
  },

  computed: {
    ...mapGetters({
      myCourses: 'user/getMyCourses',
      profile: 'user/getMe',
      token: 'user/getToken'
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
    formattedMonths () {
      return formatDuration({
        months: this.course.accessMonths
      }, { locale: this.$i18n.locale === 'ru' ? ru : enUS })
    },
    theoryLessons () {
      if (!this.courseLessons || !this.courseLessons.length) {
        return []
      }

      return this.courseLessons.filter(lesson => lesson.category === 'theory')
    },
    practiceLessons () {
      if (!this.courseLessons || !this.courseLessons.length) {
        return []
      }

      return this.courseLessons.filter(lesson => lesson.category === 'practice')
    },
    bonusLessons () {
      if (!this.courseLessons || !this.courseLessons.length) {
        return []
      }

      return this.courseLessons.filter(lesson => lesson.category === 'bonus')
    }
  },

  methods: {
    async buyCourse () {
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
          lessonType: 'course',
          name: this.course.name,
          imageUrl: this.course.thumbnailUrl,
          title: this.course.title,
          price: this.course.price,
          accessMonths: this.course.accessMonths
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
      const amount = this.course.price
      const from = getFullName(this.profile)
      const courseName = this.course.name
      const courseTitle = this.course.title
      const paymentMessage = this.$t('course.payment_message', { from, email: userEmail, amount, courseName: courseTitle })

      const url = '/api/payment/pay'

      const jsonBody = JSON.stringify({
        courseName,
        courseType: 'course',
        accessMonths: this.course.accessMonths,
        amount: this.course.price,
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
.course-page {
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
      font-size: 1.2rem;
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
        display: none;
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;

      span.currency {
        font-size: 1.2rem;
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
    display: none;

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

  &__lessons-item:not(:first-child) {
    margin-top: 2rem;
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

  &__category-title {
    padding: 0.8rem 0;
    border-bottom: 1px solid #b6a498;
    font-size: 1.6rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 991px) {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  &__lessons-container {
    div:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__lessons-title {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Cormorant SC', serif;

    @media screen and (max-width: 991px) {
      font-size: 1.6rem;
    }
  }

  &__lessons-list {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
}
</style>
