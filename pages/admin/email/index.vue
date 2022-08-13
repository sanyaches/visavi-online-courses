<template>
  <div class="admin-email py-5">
    <b-container>
      <b-form @submit.prevent="submitSending">
        <div class="admin-email__form">
          <label for="email-to">
            <div>{{ $t('admin.send_email.form.to') }}</div>
            <b-input id="email-to" v-model="form.toEmail" required autocomplete="email-to" type="text" />
          </label>

          <label for="email-subject">
            <div>{{ $t('admin.send_email.form.subject') }}</div>
            <b-input id="email-subject" v-model="form.subject" required autocomplete="email-subject" type="text" />
          </label>

          <label for="email-html">
            <div>{{ $t('admin.send_email.form.html') }}</div>
            <v-md-editor id="email-html" v-model="form.html" height="400px" />
          </label>

          <b-button type="submit" class="mt-2">
            {{ $t('admin.send_email.submit') }}
          </b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        toEmail: '',
        subject: '',
        html: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    }),
    isMultiple () {
      return this.form.toEmail.split('|').length > 1
    }
  },

  methods: {
    async multipleSend () {
      try {
        const emails = this.form.toEmail.split('|')

        for (const emailItem of emails) {
          const jsonBody = JSON.stringify({
            toEmail: emailItem,
            subject: this.form.subject,
            html: this.form.html
          })

          await this.singleSend(jsonBody)
        }
      } catch (e) {
        console.error(e)
      }
    },

    async singleSend (jsonBody) {
      try {
        const url = '/api/email/send'

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
          this.$root.$bvToast.toast(this.$t('notify.success_send_email'), {
            title: this.$t('notify.success_send_email'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          return 'ok'
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
    },

    async submitSending () {
      if (!this.form.toEmail || !this.form.subject) {
        // eslint-disable-next-line no-throw-literal
        throw { message: 'No recipient or subject', errorCode: 'VALIDATION_ERROR' }
      }

      if (!this.isMultiple) {
        const jsonBody = JSON.stringify({
          toEmail: this.form.toEmail,
          subject: this.form.subject,
          html: this.form.html
        })

        await this.singleSend(jsonBody)
      } else {
        this.multipleSend()
      }
    }
  }
}
</script>

<style>
.admin-email__form {
  display: flex;
  flex-direction: column;
}
</style>
