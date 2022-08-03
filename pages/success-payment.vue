<template>
  <div>
    <b-container>
      <h1 class="mt-5">
        {{ $t('success_payment.title') }}
      </h1>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { mapGetters } from 'vuex'

export default {
  head () {
    return {
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken',
      profile: 'user/getMe'
    })
  },

  async mounted () {
    const { orderId } = this.$route.query

    const url = '/api/payment/check'
    const token = this.$cookies.get('_vikosto_token')
    const jsonBody = JSON.stringify({
      orderId,
      userEmail: this.profile.email
    })

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: jsonBody
      })
      const data = await res.json()
      if (data?.status === 'success') {
        this.$root.$bvToast.toast(this.$t('notify.success_add_purchase'), {
          title: this.$t('notify.success_add_purchase'),
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'success'
        })

        setTimeout(() => {
          window.location.assign(data.pageUrl)
        }, 700)

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
      setTimeout(() => {
        window.location.assign('/')
      }, 1000)
    }
  }

}
</script>
