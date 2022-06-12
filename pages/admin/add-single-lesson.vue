<template>
  <div class="add-single-lesson mt-4">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>

      <h1>{{ $t('admin.add_single_lesson.title') }}</h1>

      <b-form @submit.prevent="submitAddition">
        <div class="add-single-lesson__form">
          <label for="single-lesson-name">
            <div>{{ $t('admin.add_single_lesson.form.name') }}</div>
            <b-input id="single-lesson-name" v-model="form.name" required autocomplete="single-lesson-name" type="text" />
          </label>

          <label for="single-lesson-title">
            <div>{{ $t('admin.add_single_lesson.form.title') }}</div>
            <b-input id="single-lesson-title" v-model="form.title" required autocomplete="single-lesson-title" type="text" />
          </label>

          <label for="single-lesson-description">
            <div>{{ $t('admin.add_single_lesson.form.description') }}</div>
            <v-md-editor id="single-lesson-description" v-model="form.description" height="400px" />
          </label>

          <label for="single-lesson-short-description">
            <div>{{ $t('admin.add_single_lesson.form.short_description') }}</div>
            <v-md-editor id="single-lesson-short-description" v-model="form.shortDescription" height="300px" />
          </label>

          <label for="single-lesson-video-url">
            <div>{{ $t('admin.add_single_lesson.form.video_url') }}</div>
            <b-input id="single-lesson-video-url" v-model="form.videoUrl" required autocomplete="single-lesson-video-url" type="text" />
          </label>

          <label for="single-lesson-promo-url">
            <div>{{ $t('admin.add_single_lesson.form.promo_url') }}</div>
            <b-input id="single-lesson-promo-url" v-model="form.promoUrl" required autocomplete="single-lesson-promo-url" type="text" />
          </label>

          <label for="single-lesson-thumbnail-url">
            <div>{{ $t('admin.add_single_lesson.form.thumbnail_url') }}</div>
            <b-input id="single-lesson-thumbnail-url" v-model="form.thumbnailUrl" required autocomplete="single-lesson-thumbnail-url" type="text" />
          </label>

          <label for="single-lesson-card-image-first">
            <div>{{ $t('admin.add_single_lesson.form.card_image_first') }}</div>
            <b-input id="single-lesson-card-image-first" v-model="form.cardImageFirst" required autocomplete="single-lesson-card-image-first" type="text" />
          </label>

          <label for="single-lesson-card-image-second">
            <div>{{ $t('admin.add_single_lesson.form.card_image_second') }}</div>
            <b-input id="single-lesson-card-image-second" v-model="form.cardImageSecond" required autocomplete="single-lesson-card-image-second" type="text" />
          </label>

          <label for="single-lesson-price">
            <div>{{ $t('admin.add_single_lesson.form.price') }}</div>
            <b-input id="single-lesson-price" v-model="form.price" required autocomplete="single-lesson-price" type="number" />
          </label>

          <label for="single-lesson-duration">
            <div>{{ $t('admin.add_single_lesson.form.duration') }}</div>
            <b-input id="single-lesson-duration" v-model="form.duration" required autocomplete="single-lesson-duration" type="number" />
          </label>

          <label for="single-lesson-access_months">
            <div>{{ $t('admin.add_single_lesson.form.access_months') }}</div>
            <b-input id="single-lesson-access_months" v-model="form.accessMonths" required autocomplete="single-lesson-access_months" type="number" />
          </label>

          <label for="single-lesson-locale">
            <div>{{ $t('admin.add_single_lesson.form.locale') }}</div>
            <b-input id="single-lesson-locale" v-model="form.locale" required autocomplete="single-lesson-locale" type="text" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.add_single_lesson.submit') }}
          </b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'adminAuth',

  data () {
    return {
      form: {
        name: '',
        title: '',
        description: '',
        shortDescription: '',
        videoUrl: '',
        promoUrl: '',
        thumbnailUrl: '',
        cardImageFirst: '',
        cardImageSecond: '',
        duration: 0,
        accessMonths: 0,
        price: 0,
        locale: ''
      }
    }
  },

  head () {
    return {
      title: this.$t('admin.add_single_lesson.seo.title')
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  methods: {
    async submitAddition () {
      const jsonBody = JSON.stringify({
        name: this.form.name,
        title: this.form.title,
        description: this.form.description,
        shortDescription: this.form.shortDescription,
        videoUrl: this.form.videoUrl,
        thumbnailUrl: this.form.thumbnailUrl,
        cardImageFirst: this.form.cardImageFirst,
        cardImageSecond: this.form.cardImageSecond,
        price: this.form.price,
        promoUrl: this.form.promoUrl,
        duration: this.form.duration,
        accessMonths: this.form.accessMonths,
        locale: this.form.locale
      })

      const url = '/api/single-lesson/add'

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
          this.$root.$bvToast.toast(this.$t('notify.success_add_single_lesson'), {
            title: this.$t('notify.success_add_single_lesson'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.$router.push(this.localePath('admin'))

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
        if (!(['LESSON_ALREADY_EXISTS', 'VALIDATION_ERROR'].includes(error.errorCode))) {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style>
.add-single-lesson__form {
  display: flex;
  flex-direction: column;
}
</style>
