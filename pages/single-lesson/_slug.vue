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
          <div class="single-lesson-single__promo-content-background" />
          <div class="single-lesson-single__promo-text" style="color: black;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rem quibusdam. Rerum, sapiente dolore praesentium placeat perspiciatis eum, hic consectetur, itaque ex enim sequi obcaecati culpa veniam similique quidem? Atque!
          </div>
        </div>
      </div>
      <div v-if="isPurchased && !isExpired" class="single-lesson-single__video">
        <iframe
          :src="singleLesson.videoUrl"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </div>
      <h1 class="single-lesson-single__title">
        <span>{{ singleLesson.title.split(' | ')[0] }}</span>
        <br>
        <span>{{ singleLesson.title.split(' | ')[1] }}</span>
      </h1>

      <div v-if="!isPurchased" class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.access_months') }}</span>
        <span>{{ singleLesson.accessMonths }}</span>
      </div>
      <div v-else class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.expired_at') }}</span>
        <span>{{ formattedEndDate }}</span>
      </div>

      <div class="single-lesson-single__purchase">
        <b-button v-if="!isPurchased" class="button button--brown-dark button button--large" @click="buySingleLesson">
          {{ $t('single_lesson.buy') }}
        </b-button>
        <template v-else>
          <b-button v-if="isExpired" class="button button--brown-dark button button--large" @click="buySingleLesson">
            {{ $t('single_lesson.buy_again') }}
          </b-button>
        </template>
      </div>

      <div v-if="!isPurchased || isExpired" class="single-lesson-single__price">
        <span>{{ $t('single_lesson.price') }}</span>
        <span>{{ singleLesson.price }}</span>
      </div>
      <div class="single-lesson-single__description">
        <v-md-preview :text="singleLesson.description" />
      </div>
      <div v-if="purchase && files.length" class="single-lesson-single__files">
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
import { format } from 'date-fns'

export default {
  async asyncData (context) {
    const name = context.params.slug
    try {
      const token = context.app.$cookies.get('_visavi_token')
      if (token) {
        context.app.$http.setToken(token, 'Bearer')
      }
      const response = await context.app.$http.$get(
          `api/single-lesson/single/${name}`
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
      purchase: null,
      licenseServer: 'https://widevine-proxy.appspot.com/proxy'
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
        // amount: this.singleLesson.price,
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
.single-lesson-single {
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
    position: relative;
    height: 600px;
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
  }

  &__promo-content-background {
    position:absolute;
    width: 100%;
    top: -300px;
    height: 300px;
    background: linear-gradient(to bottom, rgba(241, 241, 241, 0), rgba(241, 241, 241, 0.7), rgba(241, 241, 241, 0.9), #fff);
    z-index: 3;
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
    }

    @media screen and (max-width: 480px) {
      width: 320px;
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

  &__price,
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
}
</style>
