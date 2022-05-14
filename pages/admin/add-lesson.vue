<template>
  <div class="add-lesson mt-4">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>

      <h1>{{ $t('admin.add_lesson.title') }}</h1>

      <b-form @submit.prevent="submitAddition">
        <div class="add-lesson__form">
          <label for="lesson-name">
            <div>{{ $t('admin.add_lesson.form.name') }}</div>
            <b-input id="lesson-name" v-model="form.name" required autocomplete="lesson-name" type="text" />
          </label>

          <label for="lesson-title">
            <div>{{ $t('admin.add_lesson.form.title') }}</div>
            <b-input id="lesson-title" v-model="form.title" required autocomplete="lesson-title" type="text" />
          </label>

          <label for="lesson-description">
            <div>{{ $t('admin.add_lesson.form.description') }}</div>
            <v-md-editor id="lesson-description" v-model="form.description" height="400px" />
          </label>

          <label for="lesson-category">
            <div>{{ $t('admin.add_lesson.form.category') }}</div>
            <b-input id="lesson-category" v-model="form.category" required autocomplete="lesson-category" type="text" />
          </label>

          <label for="lesson-video-url">
            <div>{{ $t('admin.add_lesson.form.video_url') }}</div>
            <b-input id="lesson-video-url" v-model="form.videoUrl" required autocomplete="lesson-video-url" type="text" />
          </label>

          <label for="lesson-thumbnail-url">
            <div>{{ $t('admin.add_lesson.form.thumbnail_url') }}</div>
            <b-input id="lesson-thumbnail-url" v-model="form.thumbnailUrl" required autocomplete="lesson-thumbnail-url" type="text" />
          </label>

          <label for="lesson-presentation-url">
            <div>{{ $t('admin.add_lesson.form.presentation_url') }}</div>
            <b-input id="lesson-presentation-url" v-model="form.presentationUrl" required autocomplete="lesson-presentation-url" type="text" />
          </label>

          <label for="lesson-duration">
            <div>{{ $t('admin.add_lesson.form.duration') }}</div>
            <b-input id="lesson-duration" v-model="form.duration" required autocomplete="lesson-duration" type="number" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.add_lesson.submit') }}
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
        category: '',
        videoUrl: '',
        thumbnailUrl: '',
        presentationUrl: '',
        duration: 0
      }
    }
  },

  head () {
    return {
      title: this.$t('admin.add_lesson.seo.title')
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
        courseName: this.$route.params.courseName,
        name: this.form.name,
        title: this.form.title,
        category: this.form.category,
        description: this.form.description,
        thumbnailUrl: this.form.thumbnailUrl,
        presentationUrl: this.form.presentationUrl,
        duration: this.form.duration,
        videoUrl: this.form.videoUrl
      })

      const url = '/api/lesson/add'

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
          this.$root.$bvToast.toast(this.$t('notify.success_add_lesson'), {
            title: this.$t('notify.success_add_lesson'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.$router.push(this.localePath({ path: `/admin/course/${this.$route.params.courseName}` }))

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
.add-lesson__form {
  display: flex;
  flex-direction: column;
}
</style>
