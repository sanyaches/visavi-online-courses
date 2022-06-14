<template>
  <div class="change-page mt-4">
    <b-container>
      <h1>{{ $t('change.title') }}</h1>

      <b-form @submit.prevent="submitChange">
        <div class="change__form">
          <label for="password">
            <div>{{ $t('change.form.password') }}</div>
            <b-input id="password" v-model="form.password" required autocomplete="password" type="password" />
          </label>
          <label for="repeat-password">
            <div>{{ $t('change.form.repeat_password') }}</div>
            <b-input id="repeat-password" v-model="form.repeatPassword" required type="password" />
          </label>

          <b-button type="submit" class="mt-2 button button--brown">
            {{ $t('change.submit') }}
          </b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        password: '',
        repeatPassword: ''
      }
    }
  },

  head () {
    return {
      title: this.$t('change.seo.title')
    }
  },

  computed: {
    ...mapGetters({
      profile: 'user/getMe',
      token: 'user/getToken'
    })
  },

  methods: {
    ...mapActions({
      loginUser: 'user/login'
    }),

    async submitChange () {
      const jsonBody = JSON.stringify({
        password: this.form.password,
        email: this.profile.email
      })

      const url = '/api/auth/change-password'
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
          this.$root.$bvToast.toast(this.$t('notify.success_change'), {
            title: this.$t('notify.success_change'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

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
.change-page {
  .change__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
