<template>
  <div class="edit-single-lesson mt-4">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>

      <h1>{{ $t('admin.edit_single_lesson.title') }}</h1>

      <b-form @submit.prevent="submitUpdate">
        <div class="edit-single-lesson__form">
          <label for="single-lesson-name">
            <div>{{ $t('admin.edit_single_lesson.form.name') }}</div>
            <b-input
              id="single-lesson-name"
              v-model="form.name"
              required
              disabled
              autocomplete="single-lesson-name"
              type="text"
            />
          </label>

          <label for="single-lesson-title">
            <div>{{ $t('admin.edit_single_lesson.form.title') }}</div>
            <b-input id="single-lesson-title" v-model="form.title" required autocomplete="single-lesson-title" type="text" />
          </label>

          <label for="single-lesson-description">
            <div>{{ $t('admin.edit_single_lesson.form.description') }}</div>
            <v-md-editor id="single-lesson-description" v-model="form.description" height="400px" />
          </label>

          <label for="single-lesson-video-url">
            <div>{{ $t('admin.edit_single_lesson.form.video_url') }}</div>
            <b-input id="single-lesson-video-url" v-model="form.videoUrl" required autocomplete="single-lesson-video-url" type="text" />
          </label>

          <label for="single-lesson-promo-url">
            <div>{{ $t('admin.edit_single_lesson.form.promo_url') }}</div>
            <b-input id="single-lesson-promo-url" v-model="form.promoUrl" required autocomplete="single-lesson-promo-url" type="text" />
          </label>

          <label for="single-lesson-presentation-url">
            <div>{{ $t('admin.edit_single_lesson.form.presentation_url') }}</div>
            <b-input id="single-lesson-presentation-url" v-model="form.presentationUrl" required autocomplete="single-lesson-presentation-url" type="text" />
          </label>

          <label for="single-lesson-thumbnail-url">
            <div>{{ $t('admin.edit_single_lesson.form.thumbnail_url') }}</div>
            <b-input id="single-lesson-thumbnail-url" v-model="form.thumbnailUrl" required autocomplete="single-lesson-thumbnail-url" type="text" />
          </label>

          <label for="single-lesson-price">
            <div>{{ $t('admin.edit_single_lesson.form.price') }}</div>
            <b-input id="single-lesson-price" v-model="form.price" required autocomplete="single-lesson-price" type="number" />
          </label>

          <label for="single-lesson-duration">
            <div>{{ $t('admin.edit_single_lesson.form.duration') }}</div>
            <b-input id="single-lesson-duration" v-model="form.duration" required autocomplete="single-lesson-duration" type="number" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.edit_single_lesson.submit') }}
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
        videoUrl: '',
        promoUrl: '',
        presentationUrl: '',
        thumbnailUrl: '',
        duration: 0,
        price: 0
      }
    }
  },

  head () {
    return {
      title: this.$t('admin.edit_single_lesson.seo.title')
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  created () {
    this.form = { ...this.form, ...this.$route.params.singleLesson }
  },

  methods: {
    async submitUpdate () {
      const jsonBody = JSON.stringify({
        name: this.form.name,
        title: this.form.title,
        description: this.form.description,
        videoUrl: this.form.videoUrl,
        thumbnailUrl: this.form.thumbnailUrl,
        price: this.form.price,
        promoUrl: this.form.promoUrl,
        presentationUrl: this.form.presentationUrl,
        duration: this.form.duration
      })

      const url = '/api/single-lesson/edit'

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
          this.$root.$bvToast.toast(this.$t('notify.success_edit_single_lesson'), {
            title: this.$t('notify.success_edit_single_lesson'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.$router.push(this.localePath({ path: `/admin/single-lesson/${this.form.name}` }))

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
        if (!(['VALIDATION_ERROR'].includes(error.errorCode))) {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style>
.edit-single-lesson__form {
  display: flex;
  flex-direction: column;
}
</style>
