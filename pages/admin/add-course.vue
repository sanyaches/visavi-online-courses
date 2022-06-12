<template>
  <div class="add-course mt-4">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>

      <h1>{{ $t('admin.add_course.title') }}</h1>

      <b-form @submit.prevent="submitAddition">
        <div class="add-course__form">
          <label for="course-name">
            <div>{{ $t('admin.add_course.form.name') }}</div>
            <b-input id="course-name" v-model="form.name" required autocomplete="course-name" type="text" />
          </label>

          <label for="course-title">
            <div>{{ $t('admin.add_course.form.title') }}</div>
            <b-input id="course-title" v-model="form.title" required autocomplete="course-title" type="text" />
          </label>

          <label for="course-description">
            <div>{{ $t('admin.add_course.form.description') }}</div>
            <v-md-editor id="course-description" v-model="form.description" height="400px" />
          </label>

          <label for="course-short-description">
            <div>{{ $t('admin.add_course.form.short_description') }}</div>
            <v-md-editor id="course-short-description" v-model="form.shortDescription" height="300px" />
          </label>

          <label for="course-image-url">
            <div>{{ $t('admin.add_course.form.image_url') }}</div>
            <b-input id="course-image-url" v-model="form.imageUrl" required autocomplete="course-image-url" type="text" />
          </label>

          <label for="course-thumbnail-url">
            <div>{{ $t('admin.add_course.form.thumbnail_url') }}</div>
            <b-input id="course-thumbnail-url" v-model="form.thumbnailUrl" required autocomplete="course-thumbnail-url" type="text" />
          </label>

          <label for="course-card-image-first">
            <div>{{ $t('admin.add_course.form.card_image_first') }}</div>
            <b-input id="course-card-image-first" v-model="form.cardImageFirst" required autocomplete="course-card-image-first" type="text" />
          </label>

          <label for="course-card-image-second">
            <div>{{ $t('admin.add_course.form.card_image_second') }}</div>
            <b-input id="course-card-image-second" v-model="form.cardImageSecond" required autocomplete="course-card-image-second" type="text" />
          </label>

          <label for="course-promo-url">
            <div>{{ $t('admin.add_course.form.promo_url') }}</div>
            <b-input id="course-promo-url" v-model="form.promoUrl" required autocomplete="course-promo-url" type="text" />
          </label>

          <label for="course-price">
            <div>{{ $t('admin.add_course.form.price') }}</div>
            <b-input id="course-price" v-model="form.price" required autocomplete="course-price" type="number" />
          </label>

          <label for="course-access_months">
            <div>{{ $t('admin.add_course.form.access_months') }}</div>
            <b-input id="course-access_months" v-model="form.accessMonths" required autocomplete="course-access_months" type="number" />
          </label>

          <label for="course-locale">
            <div>{{ $t('admin.add_course.form.locale') }}</div>
            <b-input id="course-locale" v-model="form.locale" required autocomplete="course-locale" type="text" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.add_course.submit') }}
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
        imageUrl: '',
        thumbnailUrl: '',
        cardImageFirst: '',
        cardImageSecond: '',
        price: 0,
        accessMonths: 0,
        locale: '',
        promoUrl: ''
      }
    }
  },

  head () {
    return {
      title: this.$t('admin.add_course.seo.title')
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
        imageUrl: this.form.imageUrl,
        thumbnailUrl: this.form.thumbnailUrl,
        cardImageFirst: this.form.cardImageFirst,
        cardImageSecond: this.form.cardImageSecond,
        price: this.form.price,
        accessMonths: this.form.accessMonths,
        locale: this.form.locale,
        promoUrl: this.form.promoUrl
      })

      const url = '/api/course/add'

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
          this.$root.$bvToast.toast(this.$t('notify.success_add_course'), {
            title: this.$t('notify.success_add_course'),
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
        if (!(['COURSE_ALREADY_EXISTS', 'VALIDATION_ERROR'].includes(error.errorCode))) {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style>
.add-course__form {
  display: flex;
  flex-direction: column;
}
</style>
