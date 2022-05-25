<template>
  <div class="single-lesson-single">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>
      <div v-if="!isPurchased || isExpired" class="single-lesson-single__promo">
        <video controls :poster="singleLesson.thumbnailUrl">
          <source
            :src="singleLesson.promoUrl"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <h1 class="single-lesson-single__title">
        {{ singleLesson.title }}
      </h1>
      <div class="single-lesson-single__purchase">
        <b-button v-if="!isPurchased" variant="success" @click="buySingleLesson">
          {{ $t('single_lesson.buy') }}
        </b-button>
        <template v-else>
          <b-button v-if="isExpired" variant="success" @click="buySingleLesson">
            {{ $t('single_lesson.buy_again') }}
          </b-button>
        </template>
      </div>
      <div v-if="isPurchased && !isExpired" class="single-lesson-single__video">
        <video controls>
          <source
            :src="singleLesson.videoUrl"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div v-if="!isPurchased || isExpired" class="single-lesson-single__price">
        <span>{{ $t('single_lesson.price') }}</span>
        <span>{{ singleLesson.price }}</span>
      </div>
      <div v-if="!isPurchased" class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.access_months') }}</span>
        <span>{{ singleLesson.accessMonths }}</span>
      </div>
      <div v-else class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.expired_at') }}</span>
        <span>{{ formattedEndDate }}</span>
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
      }

      const url = '/api/purchases/add'
      const jsonBody = JSON.stringify({
        courseName: this.singleLesson.name,
        courseType: 'singleLesson',
        accessMonths: this.singleLesson.accessMonths
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

          window.location.reload()

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
    margin-bottom: 1rem;
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

  &__video {
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
