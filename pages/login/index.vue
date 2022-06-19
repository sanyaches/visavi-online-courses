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
          <b-button type="submit" class="mt-2 button button--brown">
            {{ $t('login.submit') }}
          </b-button>
        </div>
      </b-form>

      <div class="mt-4 text-center">
        {{ $t('login.to_register') }}
        <nuxt-link :to="localePath('register')" class="anchor anchor--small anchor--brown">
          {{ $t('login.to_register_link') }}
        </nuxt-link>
      </div>
      <div class="mt-2 text-center">
        {{ $t('login.to_recovery') }}
        <nuxt-link :to="localePath({ path: 'recovery-password' })" class="anchor anchor--small anchor--brown">
          {{ $t('login.to_recovery_link') }}
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

          const expiresDate = new Date()
          expiresDate.setDate(expiresDate.getDate() + 30)
          this.$cookies.set('_vikosto_token', data.token, { expires: expiresDate })

          if (data.user.isAdmin) {
            this.$router.push(this.localePath('admin'))
          } else {
            this.$router.push(this.localePath('profile'))
          }

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
