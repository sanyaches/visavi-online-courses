<template>
  <div class="course-card">
    <div class="course-card__title">
      {{ course.title }}
    </div>
    <div class="course-card__description">
      <ul v-if="course.name==='course-silver'">
        <li class="course-card__benefit">
          <b>{{ $t('course.silver.benefits.1.bold_text') }}</b>
          <span>{{ $t('course.silver.benefits.1.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.silver.benefits.2.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <b>{{ $t('course.silver.benefits.3.bold_text') }}</b>
          <span>{{ $t('course.silver.benefits.3.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.silver.benefits.4.text') }}</span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>{{ $t('course.silver.benefits.5.text') }}</span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>{{ $t('course.silver.benefits.6.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.silver.benefits.7.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.silver.benefits.8.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <b>{{ $t('course.silver.benefits.9.bold_text') }}</b>
          <span>{{ $t('course.silver.benefits.9.text') }}</span>
        </li>
      </ul>
      <ul v-else-if="course.name==='course-gold'">
        <li class="course-card__benefit">
          <b>{{ $t('course.gold.benefits.1.bold_text') }}</b>
          <span>{{ $t('course.gold.benefits.1.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.2.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <b>{{ $t('course.gold.benefits.3.bold_text') }}</b>
          <span>{{ $t('course.gold.benefits.3.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.4.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.5.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.6.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.7.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <span>{{ $t('course.gold.benefits.8.text') }}</span>
        </li>
        <li class="course-card__benefit">
          <b>{{ $t('course.gold.benefits.9.bold_text') }}</b>
          <span>{{ $t('course.gold.benefits.9.text') }}</span>
        </li>
      </ul>
    </div>

    <div class="course-card__footer">
      <div class="course-card__price">
        <span>{{ course.price }}</span>
        <span class="currency">{{ $t('common.currency') }}</span>
      </div>
      <div class="course-card__control">
        <b-button v-if="!thisPurchase || isExpired" class="button button--brown-dark button button--large" @click="buyCourse">
          {{ $t('course_card.buy') }}
        </b-button>

        <nuxt-link v-else :to="courseLink" class="button button--brown-dark button button--large">
          <font-awesome-icon icon="fa-solid fa-check" />
          {{ $t('course_card.bought') }}
        </nuxt-link>

        <nuxt-link :to="courseLink" class="button button--brown button button--large">
          {{ $t('course_card.learn') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      profile: 'user/getMe',
      token: 'user/getToken',
      myCourses: 'user/getMyCourses'
    }),
    thisPurchase () {
      if (!this.myCourses || !this.myCourses.length) {
        return null
      }

      return this.myCourses.find(course => course.courseName === this.course.name) || null
    },
    isExpired () {
      if (!this.thisPurchase || !this.thisPurchase.endDate) {
        return false
      }

      return Date.now() > this.thisPurchase.endDate
    },
    courseLink () {
      return this.localePath({ path: `/course/${this.course.name}` })
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
        paymentMessage,
        token: this.token
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
.course-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  background-color: #fff;
  padding: 1.6rem;
  height: 100%;

  &__title {
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #76665d;

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
    }
  }

  &__description {
    margin-top: 1.5rem;
    align-self: flex-start;
    width: 100%;
  }

  &__description ul {
    margin-bottom: 0;
    padding-left: 1rem;
  }

  li.course-card__benefit {
    padding: 0.4rem 0;
    line-height: 120%;

    b {
      font-size: 1.4rem;
    }

    &::marker {
      color: #b3795a;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #b3795a;
    }

    &.is-disabled {
      opacity: 0.3;
      text-decoration: line-through;
    }
  }

  &__footer {
    margin-top: auto;
  }

  &__price {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1.2rem 0;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;
    color: #76665d;

    .currency {
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }

  &__control {
    display: flex;
    flex-direction: column;

    .button:not(:last-child) {
      margin-bottom: 0.6rem;
    }

    .button {
      border-radius: 0;
    }
  }
}
</style>
