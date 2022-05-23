<template>
  <div class="edit-course mt-4">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>

      <h1>{{ $t('admin.edit_course.title') }}</h1>

      <b-form @submit.prevent="submitUpdate">
        <div class="edit-course__form">
          <label for="course-name">
            <div>{{ $t('admin.edit_course.form.name') }}</div>
            <b-input
              id="course-name"
              v-model="form.name"
              disabled
              required
              autocomplete="course-name"
              type="text"
            />
          </label>

          <label for="course-title">
            <div>{{ $t('admin.edit_course.form.title') }}</div>
            <b-input id="course-title" v-model="form.title" required autocomplete="course-title" type="text" />
          </label>

          <label for="course-description">
            <div>{{ $t('admin.edit_course.form.description') }}</div>
            <v-md-editor id="course-description" v-model="form.description" height="400px" />
          </label>

          <label for="course-image-url">
            <div>{{ $t('admin.edit_course.form.image_url') }}</div>
            <b-input id="course-image-url" v-model="form.imageUrl" required autocomplete="course-image-url" type="text" />
          </label>

          <label for="course-thumbnail-url">
            <div>{{ $t('admin.edit_course.form.thumbnail_url') }}</div>
            <b-input id="course-thumbnail-url" v-model="form.thumbnailUrl" required autocomplete="course-thumbnail-url" type="text" />
          </label>

          <label for="course-promo-url">
            <div>{{ $t('admin.edit_course.form.promo_url') }}</div>
            <b-input id="course-promo-url" v-model="form.promoUrl" required autocomplete="course-promo-url" type="text" />
          </label>

          <label for="course-price">
            <div>{{ $t('admin.edit_course.form.price') }}</div>
            <b-input id="course-price" v-model="form.price" required autocomplete="course-price" type="number" />
          </label>

          <label for="course-access_months">
            <div>{{ $t('admin.edit_course.form.access_months') }}</div>
            <b-input id="course-access_months" v-model="form.accessMonths" required autocomplete="course-access_months" type="number" />
          </label>

          <label for="course-locale">
            <div>{{ $t('admin.edit_course.form.locale') }}</div>
            <b-input id="course-locale" v-model="form.locale" required autocomplete="course-locale" type="text" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.edit_course.submit') }}
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
        imageUrl: '',
        thumbnailUrl: '',
        price: 0,
        accessMonths: 0,
        locale: '',
        promoUrl: ''
      }
    }
  },

  head () {
    return {
      title: this.$t('admin.edit_course.seo.title')
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  created () {
    this.form = { ...this.form, ...this.$route.params.course }
  },

  methods: {
    async submitUpdate () {
      const jsonBody = JSON.stringify({
        name: this.form.name,
        title: this.form.title,
        description: this.form.description,
        imageUrl: this.form.imageUrl,
        thumbnailUrl: this.form.thumbnailUrl,
        price: this.form.price,
        accessMonths: this.form.accessMonths,
        promoUrl: this.form.promoUrl
      })

      const url = '/api/course/edit'

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
          this.$root.$bvToast.toast(this.$t('notify.success_edit_course'), {
            title: this.$t('notify.success_edit_course'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.$router.push(this.localePath({ path: `/admin/course/${this.form.name}` }))

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
.edit-course__form {
  display: flex;
  flex-direction: column;
}
</style>
