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
      <ul v-else-if="course.name==='course-myself-mi'">
        <li class="course-card__benefit">
          <b>6</b>
          <span>месяцев доступа</span>
        </li>
        <li class="course-card__benefit">
          <b>3</b>
          <span>урока по уходу за волосами</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по стайлингу и инструментам</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по подбору уходовых средств</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по определению типа кожи головы и волос</span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>Урок по подвижному объёму на фен</span>
        </li>
        <li class="course-card__benefit">
          <b>3</b>
          <span>практических урока по укладкам на <b>плойку</b></span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>Обратная связь от Виктории на 1 месяц</span>
        </li>
      </ul>
      <ul v-else-if="course.name==='course-myself-no'">
        <li class="course-card__benefit">
          <b>6</b>
          <span>месяцев доступа</span>
        </li>
        <li class="course-card__benefit">
          <b>3</b>
          <span>урока по уходу за волосами</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по стайлингу и инструментам</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по подбору уходовых средств</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по определению типа кожи головы и волос</span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>Урок по подвижному объёму на фен</span>
        </li>
        <li class="course-card__benefit">
          <b>3</b>
          <span>практических урока по укладкам на <b>утюг</b></span>
        </li>
        <li class="course-card__benefit is-disabled">
          <span>Обратная связь от Виктории на 1 месяц</span>
        </li>
      </ul>
      <ul v-else-if="course.name==='course-myself-rio'">
        <li class="course-card__benefit">
          <b>6</b>
          <span>месяцев доступа</span>
        </li>
        <li class="course-card__benefit">
          <b>3</b>
          <span>урока по уходу за волосами</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по стайлингу и инструментам</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по подбору уходовых средств</span>
        </li>
        <li class="course-card__benefit">
          <span>Гайд по определению типа кожи головы и волос</span>
        </li>
        <li class="course-card__benefit">
          <span>Урок по подвижному объёму на фен</span>
        </li>
        <li class="course-card__benefit">
          <b>6</b>
          <span>практических уроков по укладкам на <b>плойку и утюг</b> </span>
        </li>
        <li class="course-card__benefit">
          <span>Обратная связь от Виктории на 1 месяц</span>
        </li>
      </ul>
    </div>

    <div class="course-card__footer">
      <div class="course-card__price">
        <span v-if="course.newPrice" class="new">{{ course.newPrice }}</span>
        <span :class="course.newPrice ? 'old' : null">{{ course.price }}</span>
        <span class="currency">{{ $t(`common.currency.${course.currency}`) }}</span>
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
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions({
      changeCheckoutItem: 'checkout/changeCheckoutItem',
      changeShowModal: 'checkout/changeShowModal'
    }),

    buyCourse () {
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
          price: this.course.newPrice ? this.course.newPrice : this.course.price,
          currency: this.course.currency,
          accessMonths: this.course.accessMonths
        })

        this.$cookies.set('_vikosto_offer', cookieString, { expires: expiresDate })
        this.$router.push(link)

        return
      }

      this.changeCheckoutItem({ ...this.course, itemType: 'course' })
      this.changeShowModal(true)
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

  @media screen and (max-width: 480px) {
    padding: 1rem 1.6rem;
  }

  &__title {
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #76665d;

    @media screen and (max-width: 991px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  &__description {
    margin-top: 1.5rem;
    align-self: flex-start;
    width: 100%;

    @media screen and (max-width: 480px) {
      margin-top: 0.5rem;
    }
  }

  &__description ul {
    margin-bottom: 0;
    padding-left: 1rem;
  }

  li.course-card__benefit {
    padding: 0.4rem 0;
    line-height: 120%;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }

    b {
      font-size: 1.4rem;

      @media screen and (max-width: 480px) {
        font-size: 1.1rem;
      }
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
    position: relative;
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1.5rem 0;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;
    color: #76665d;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
      margin: 1rem 0;
    }

    .currency {
      text-transform: uppercase;
      font-size: 1.3rem;

      @media screen and (max-width: 480px) {
        font-size: 1.1rem;
      }
    }
  }

  .old {
    color: #bebebe;
    font-size: 2rem;
    position: relative;
    top: 0.8rem;
    opacity: 1;
    margin-right: 0.5rem;

    @media screen and (max-width: 480px) {
      top: 0.6rem;
    }

    &::after {
      content: '';
      position: absolute;
      height: 4px;
      background-color: rgb(160, 130, 130);
      top: 50%;
      left: -10%;
      width: 120%;
      opacity: 0.75;
      transform: rotate(-15deg);
    }
  }

  .new {
    color: #8b7262;
    position: absolute;
    top: -1rem;
    left: -0.5rem;

    @media screen and (max-width: 480px) {
      top: -0.8rem;
      left: -0.3rem;
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

      @media screen and (max-width: 480px) {
        padding: 0.5rem 1.2rem;
        font-size: 1.1rem;
      }
    }

  }
}
</style>
