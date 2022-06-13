<template>
  <div class="course-page">
    <b-container>
      <h1 class="course-page__title">
        {{ course.title }}
      </h1>
      <div class="course-page__promo mb-2">
        <video controls :poster="course.thumbnailUrl">
          <source
            :src="course.promoUrl"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div v-if="!isPurchased" class="course-page__access-months">
        <span>{{ $t('course.access_months') }}</span>
        <span>{{ course.accessMonths }}</span>
      </div>
      <div v-else-if="purchase" class="course-page__access-months">
        <span>{{ $t('course.expired_at') }}</span>
        <span>{{ formattedEndDate }}</span>
      </div>
      <div class="course-page__purchase">
        <b-button v-if="!isPurchased" class="button button--brown-dark button button--large" @click="buyCourse">
          {{ $t('course.buy') }}
        </b-button>
        <template v-else>
          <b-button v-if="isExpired" class="button button--brown-dark button button--large" @click="buyCourse">
            {{ $t('course.buy_again') }}
          </b-button>
          <nuxt-link
            v-else
            to="#course-page-lessons"
            class="button button--brown button button--large"
          >
            {{ $t('course.watch') }}
          </nuxt-link>
        </template>
      </div>
      <div v-if="!isPurchased || isExpired" class="course-page__price">
        <span>{{ $t('course.price') }}</span>
        <span>{{ course.price }}</span>
      </div>
      <div class="course-page__description">
        <v-md-preview :text="course.description" />
      </div>

      <div id="course-page-lessons" class="course-page__lessons">
        <h2 class="course-page__lessons-title">
          {{ $t('admin.list_lessons') }}
        </h2>
        <ul v-if="courseLessons.length" class="course-page__lessons-list">
          <li v-for="lesson in courseLessons" :key="lesson.name" class="course-page__lessons-item">
            <lesson-list-item
              :lesson="lesson"
              :lesson-link="isPurchased ? localePath({ path: `/lesson/${lesson.name}` }) : null"
            />
          </li>
        </ul>
        <div v-else>
          {{ $t('admin.no_lessons') }}
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'
import LessonListItem from '@/components/LessonListItem.vue'

export default {
  components: {
    LessonListItem
  },

  async asyncData (context) {
    try {
      const name = context.params.slug
      const token = context.app.$cookies.get('_visavi_token')
      if (token) {
        context.app.$http.setToken(token, 'Bearer')
      }
      const response = await context.app.$http.$get(
          `api/course/single/${name}`
      )
      const lessonsResponse = await context.app.$http.$get(`api/lesson/list-by-course-demo/${name}`)

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
    }
  },

  methods: {
    async buyCourse () {
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
        // amount: this.course.price,
        amount: 2,
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

<style lang="scss" scoped>
.course-page {
  padding: 2rem 0;

  &__title {
    text-align: center;
    margin: 1rem 0;
  }

  &__purchase {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  &__promo {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;

    video {
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

  &__price {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__access-months {
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

  &__lessons-list {
    margin-top: 2rem;
    padding-left: 0;
    list-style: none;
  }

  &__lessons-item {
    position: relative;
  }

  &__lessons-item-delete {
    position: absolute;
    right: 0;
    top: 0;
  }

  &__controls {
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
