<template>
  <div class="login-page mt-4">
    <b-container>
      <h1>{{ $t('login.title') }}</h1>

      <b-form @submit.prevent="submitLogin">
        <div class="login__form">
          <label for="email">
            <div>{{ $t('login.form.email') }}</div>
            <b-input id="email" v-model="form.email" required autocomplete="email" type="text" />
          </label>
          <label for="password">
            <div>{{ $t('login.form.password') }}</div>
            <b-input id="password" v-model="form.password" required autocomplete="password" type="password" />
          </label>
          <b-button type="submit" class="mt-2">
            {{ $t('login.submit') }}
          </b-button>
        </div>
      </b-form>

      <div class="mt-2">
        {{ $t('login.to_register') }}
        <nuxt-link :to="localePath('register')">
          {{ $t('login.to_register_link') }}
        </nuxt-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
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
    ...mapActions({
      loginUser: 'user/login',
      authenticate: 'user/authenticate'
    }),

    async submitLogin () {
      const jsonBody = JSON.stringify({ email: this.form.email, password: this.form.password })

      const url = '/api/auth/login'
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

          this.loginUser({ user: data.user, token: data.token })

          const expiresDate = new Date(this.valueOf())
          expiresDate.setDate(expiresDate.getDate() + 30)
          this.$cookies.set('bearer-token', data.token, { expires: expiresDate })

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
        if (error.errorCode !== 'USER_NOT_FOUND') {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  .login__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
