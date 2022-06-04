<template>
  <div class="recovery-page mt-4">
    <b-container>
      <h1>{{ $t('recovery.title') }}</h1>

      <b-form v-if="!isSuccess" @submit.prevent="submitRecovery">
        <div class="recovery__form">
          <label for="email">
            <div>{{ $t('recovery.form.email') }}</div>
            <b-input id="email" v-model="form.email" required autocomplete="email" type="text" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('recovery.submit') }}
          </b-button>
        </div>
      </b-form>

      <div v-else>
        <h2>{{ $t('recovery.check_email') }}</h2>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: ''
      },
      isSuccess: false
    }
  },

  head () {
    return {
      title: this.$t('recovery.seo.title')
    }
  },

  methods: {
    async submitRecovery () {
      const jsonBody = JSON.stringify({
        email: this.form.email
      })

      const url = '/api/auth/recovery-password'
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
          this.isSuccess = true
          this.$root.$bvToast.toast(this.$t('notify.success_recovery'), {
            title: this.$t('notify.success_recovery'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          return
        }

        throw data
      } catch (error) {
        this.isSuccess = false

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
.recovery-page {
  .recovery__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
