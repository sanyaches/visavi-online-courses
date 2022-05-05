<template>
  <b-container>
    <h1>{{ $t('admin.add_course.title') }}</h1>

    <b-form @submit.prevent="submitRegister">
      <div class="register__form">
        <label for="course-name">
          <div>{{ $t('admin.add_course.form.name') }}</div>
          <b-input id="course-name" v-model="form.name" required autocomplete="course-name" type="text" />
        </label>

        <b-button type="submit" class="mt-2">
          {{ $t('admin.add_course.submit') }}
        </b-button>
      </div>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        title: '',
        description: '',
        price: 0,
        priceExtra: 0
      }
    }
  },
  head () {
    return {
      title: this.$t('admin.add_course.seo.title')
    }
  },

  methods: {
    async submitRegister () {
      const jsonBody = JSON.stringify({
        name: this.form.name,
        title: this.form.title,
        password: this.form.password,
        email: this.form.email
      })

      const url = '/api/auth/register'
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
          },
          body: jsonBody
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.$root.$bvToast.toast(this.$t('notify.success_register'), {
            title: this.$t('notify.success_register'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.loginUser(data.user)
          Cookies.set('bearer-token', data.token, { expires: 30 })
          this.$router.push(this.localePath('profile'))

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
        if (!(['USER_OR_EMAIL_ALREADY_EXISTS', 'VALIDATION_ERROR'].includes(error.errorCode))) {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style>

</style>
