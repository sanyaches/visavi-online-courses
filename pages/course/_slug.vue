<template>
  <div class="course-page">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>
      <div class="course-page__image">
        <img :alt="course.description" :src="course.thumbnailUrl">
      </div>
      <h1 class="course-page__title">
        {{ course.title }}
      </h1>
      <div class="course-page__purchase">
        <b-button v-if="!isPurchased" variant="success" @click="buyCourse">
          {{ $t('course.buy') }}
        </b-button>
        <template v-else>
          <b-button v-if="isExpired" variant="success" @click="buyCourse">
            {{ $t('course.buy_again') }}
          </b-button>
          <nuxt-link
            v-else
            to="#course-page-lessons"
            class="button--green"
          >
            {{ $t('course.watch') }}
          </nuxt-link>
        </template>
      </div>
      <div v-if="!isPurchased || isExpired" class="course-page__price">
        <span>{{ $t('course.price') }}</span>
        <span>{{ course.price }}</span>
      </div>
      <div v-if="!isPurchased" class="course-page__months">
        <span>{{ $t('course.access_months') }}</span>
        <span>{{ course.accessMonths }}</span>
      </div>
      <div v-else-if="purchase" class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.expired_at') }}</span>
        <span>{{ new Date(purchase.endDate) }}</span>
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
import LessonListItem from '@/components/LessonListItem.vue'

export default {
  components: {
    LessonListItem
  },

  async asyncData (context) {
    const name = context.params.slug
    try {
      const response = await context.app.$http.$get(
          `api/course/single/${name}`
      )
      const lessonsResponse = await context.app.$http.$get(`api/lesson/list-by-course-demo/${name}`)

      return {
        course: response.data,
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
      isPurchased: false,
      purchase: null,
      coursePurchase: null
    }
  },

  computed: {
    ...mapGetters({
      myCourses: 'user/getMyCourses',
      profile: 'user/getMe',
      token: 'user/getToken'
    })
  },

  watch: {
    myCourses () {
      this.updateIsPurchased()
    }
  },

  beforeMount () {
    this.updateIsPurchased()
  },

  methods: {
    updateIsPurchased () {
      if (!this.myCourses || !this.myCourses.length) {
        return
      }

      const foundPurchase = this.myCourses.find(purchase => purchase.courseName === this.course.name)
      if (foundPurchase) {
        this.coursePurchase = foundPurchase
        this.isPurchased = true
        this.purchase = foundPurchase
      } else {
        this.coursePurchase = null
        this.isPurchased = false
        this.purchase = null
      }
      if (foundPurchase && foundPurchase.expired) {
        this.isExpired = true
      } else {
        this.isExpired = false
      }
    },

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
      }

      const url = '/api/purchases/add'
      const jsonBody = JSON.stringify({
        courseName: this.course.name,
        courseType: 'course',
        accessMonths: this.course.accessMonths
      })

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`,
            email: this.profile.email
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

          this.isPurchased = true
          this.isExpired = false

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
    margin-bottom: 1rem;
  }

  &__image {
    width: 600px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__price {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__months {
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
