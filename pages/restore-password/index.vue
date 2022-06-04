<template>
  <div class="restore-page mt-4">
    <b-container>
      <h1>{{ $t('restore.title') }}</h1>

      <b-form @submit.prevent="submitRestore">
        <div class="restore__form">
          <label for="password">
            <div>{{ $t('restore.form.password') }}</div>
            <b-input id="password" v-model="form.password" required autocomplete="password" type="password" />
          </label>
          <label for="repeat-password">
            <div>{{ $t('restore.form.repeat_password') }}</div>
            <b-input id="repeat-password" v-model="form.repeatPassword" required type="password" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('restore.submit') }}
          </b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        password: '',
        repeatPassword: ''
      },
      email: '',
      key: ''
    }
  },

  head () {
    return {
      title: this.$t('restore.seo.title')
    }
  },

  beforeMount () {
    if (!window || !window.location.search) {
      return
    }

    const params = new URLSearchParams(window.location.search)
    this.email = params.get('email')
    this.key = params.get('key')
  },

  methods: {
    ...mapActions({
      loginUser: 'user/login'
    }),

    async submitRestore () {
      const jsonBody = JSON.stringify({
        password: this.form.password,
        email: this.email,
        key: this.key
      })

      const url = '/api/auth/restore-password'
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
          this.$root.$bvToast.toast(this.$t('notify.success_restore'), {
            title: this.$t('notify.success_restore'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.loginUser({ user: data.user, token: data.token })

          const expiresDate = new Date(this.valueOf())
          expiresDate.setDate(expiresDate.getDate() + 30)
          this.$cookies.set('_visavi_token', data.token, { expires: expiresDate })

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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.restore-page {
  .restore__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
