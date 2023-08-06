<template>
  <div class="payment-page">
    <div class="payment-page__container">
      <div class="d-block">
        <div class="d-flex space-between payment-page__item">
          <div>Payment for deposit</div>
          <div class="payment-page__amount-primary">
            {{ amount }} {{ currency }}
          </div>
        </div>
        <b-form class="payment-page__form" @submit.prevent>
          <b-form-group id="input-group-1" label="Name" label-for="input-1">
            <b-form-input
              id="input-1"
              :value="name"
              required
              placeholder="Your name"
              @input="changeName"
            />
          </b-form-group>

          <b-form-group id="input-group-2" label="Email" label-for="input-2">
            <b-form-input
              id="input-2"
              :value="email"
              type="email"
              required
              placeholder="Your email"
              @input="changeEmail"
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Details" label-for="input-3">
            <b-form-input
              id="input-3"
              :value="description"
              required
              placeholder="e.g. Deposit for the wedding on 12.12.2024 at 13:00"
              @input="changeDescription"
            />
          </b-form-group>

          <b-alert :show="!isValid" variant="danger">
            Please fill in the form to make a payment
          </b-alert>

          <paypal-button
            :amount="amountEur"
            :name="name"
            :description="description"
            :email="email"
            :disabled="!isValid"
            :on-success="onSuccess"
            :currency="currency"
            class="mx-auto"
          />
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { convertCurrencies } from '@/lib/convertCurrencies'

const euroCurrency = 'EUR'

export default {
  data () {
    return {
      amount: parseInt(this.$route.query?.amount || ''),
      currency: this.$route.query?.currency || euroCurrency,
      loading: false,
      amountEur: 0
    }
  },

  computed: {
    ...mapGetters({
      name: 'deposit-payment/getName',
      email: 'deposit-payment/getEmail',
      description: 'deposit-payment/getDescription',
      isValid: 'deposit-payment/getIsValid'
    })
  },

  async beforeMount () {
    this.loading = true

    if (this.amount && this.currency !== euroCurrency) {
      const amountEur = await convertCurrencies(
        this.amount,
        this.currency,
        euroCurrency
      )
      this.amountEur = amountEur
    } else if (this.amount) {
      this.amountEur = this.amount
    }

    this.loading = false
  },

  methods: {
    ...mapActions({
      depositPaymentSuccessHandler:
        'deposit-payment/depositPaymentSuccessHandler',
      changeName: 'deposit-payment/changeName',
      changeEmail: 'deposit-payment/changeEmail',
      changeDescription: 'deposit-payment/changeDescription'
    }),

    onSuccess () {
      this.depositPaymentSuccessHandler()
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/payment-page.scss" />
