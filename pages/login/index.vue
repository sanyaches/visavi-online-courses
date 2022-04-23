<template>
  <div class="login-page mt-4">
    <b-container>
      <h1>Log in to visavi</h1>

      <form @submit.prevent="submitLogin">
        <label for="username">
          <input id="username" v-model="form.username" autocomplete="username" type="text">
        </label>
        <label for="password">
          <input id="password" v-model="form.password" autocomplete="password" type="password">
        </label>
        <button type="submit">
          {{ $t('login.submit') }}
        </button>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isLoggedIn: false
    }
  },

  head () {
    return {
      title: this.$t('login.seo.title')
    }
  },

  methods: {
    async submitLogin () {
      const jsonBody = JSON.stringify({ username: this.form.username, password: this.form.password })

      const url = '/api/login'
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
          this.$root.$bvToast.toast(this.$t('notify.success_login'), {
            title: this.$t('notify.success_login'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })
          this.$router.push(this.localePath('profile'))

          return
        }

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase()
          console.error(`notify.error.${code}_msg`)
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
        if (error.errorCode !== 'USER_NOT_FOUND') {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>
