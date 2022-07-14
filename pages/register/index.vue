<template>
  <div class="register-page mt-4">
    <b-container>
      <h1>{{ $t('register.title') }}</h1>

      <b-form @submit.prevent="submitRegister">
        <div class="register__form">
          <label for="email">
            <div>{{ $t('register.form.email') }}</div>
            <b-input
              id="email"
              v-model="form.email"
              :formatter="lowerCaseFormatter"
              required
              autocomplete="email"
              type="text"
            />
          </label>
          <label for="first-name">
            <div>{{ $t('register.form.first_name') }}</div>
            <b-input id="first-name" v-model="form.firstName" required autocomplete="given-name" type="text" />
          </label>
          <label for="last-name">
            <div>{{ $t('register.form.last_name') }}</div>
            <b-input id="last-name" v-model="form.lastName" required autocomplete="family-name" type="text" />
          </label>
          <label for="password">
            <div>{{ $t('register.form.password') }}</div>
            <b-input id="password" v-model="form.password" required autocomplete="password" type="password" />
          </label>
          <label for="repeat-password">
            <div>{{ $t('register.form.repeat_password') }}</div>
            <b-input id="repeat-password" v-model="form.repeatPassword" required type="password" />
          </label>
          <label for="confirm-agreement">
            <b-checkbox id="confirm-agreement" v-model="form.confirmAgreement" style="display: inline-block;" required />
            <span>{{ $t('register.form.confirm_agreement') }}</span>
            (<a href="/offer" target="_blank" class="anchor anchor--small anchor--brown">{{ $t('register.form.confirm_agreement_link') }}</a>)
            <span>{{ $t('register.form.confirm_privacy') }}</span>
            (<a href="/privacy-policy" target="_blank" class="anchor anchor--small anchor--brown">{{ $t('register.form.confirm_privacy_link') }}</a>)
          </label>

          <b-button type="submit" class="mt-2 button button--brown">
            {{ $t('register.submit') }}
          </b-button>
        </div>
      </b-form>

      <div class="mt-4 text-center">
        {{ $t('register.to_login') }}
        <nuxt-link :to="localePath('login')" class="anchor anchor--small anchor--brown">
          {{ $t('register.to_login_link') }}
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
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        confirmAgreement: false
      }
    }
  },

  head () {
    return {
      title: this.$t('register.seo.title')
    }
  },

  methods: {
    ...mapActions({
      loginUser: 'user/login'
    }),

    lowerCaseFormatter (value) {
      return value.toLowerCase()
    },

    async submitRegister () {
      try {
        if (!this.form.confirmAgreement) {
          // eslint-disable-next-line no-throw-literal
          throw { errorCode: 'NEED_AGREEMENT_CONFIRMATION' }
        }
        if (this.form.repeatPassword !== this.form.password) {
          // eslint-disable-next-line no-throw-literal
          throw { errorCode: 'PASSWORDS_NOT_MATCHED' }
        }
        const jsonBody = JSON.stringify({
          lastName: this.form.lastName.trim(),
          firstName: this.form.firstName.trim(),
          password: this.form.password,
          email: this.form.email.trim()
        })

        const url = '/api/auth/register'
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

          this.loginUser({ user: data.user, token: data.token })

          const expiresDate = new Date()
          expiresDate.setDate(expiresDate.getDate() + 30)
          this.$cookies.set('_vikosto_token', data.token, { expires: expiresDate })

          this.$router.push(this.localePath('profile'))

          return
        }

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase() || error.message
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
        if (!(['USER_OR_EMAIL_ALREADY_EXISTS', 'VALIDATION_ERROR', 'PASSWORDS_NOT_MATCHED', 'NEED_AGREEMENT_CONFIRMATION'].includes(error.errorCode))) {
          this.$sentry.captureException(new Error(error?.errorCode || error?.message))
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  .register__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
