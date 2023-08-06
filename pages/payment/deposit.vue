<template>
  <div class="payment-page">
    <b-container>
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
              @change="changeName"
            />
          </b-form-group>

          <b-form-group id="input-group-2" label="Email" label-for="input-2">
            <b-form-input
              id="input-2"
              :value="email"
              type="email"
              required
              placeholder="Your email"
              @change="changeEmail"
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Details" label-for="input-3">
            <b-form-input
              id="input-3"
              :value="description"
              required
              placeholder="e.g. Deposit for the wedding on 12.12.2024 at 13:00"
              @change="changeDescription"
            />
          </b-form-group>

          <paypal-button
            :amount="amountEur"
            :name="fullName"
            :email="profile.email"
            :disabled="loading"
            :on-success="onSuccess"
            currency="EUR"
          />
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { convertCurrencies } from '../lib/convertCurrencies'

export default {
  data () {
    return {
      amount: this.$route.query?.amount,
      currency: this.$route.query?.currency,
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

  beforeMount: async () => {
    if (this.amount && this.currency !== 'EUR') {
      const amountEur = await convertCurrencies(
        this.amount,
        this.currency,
        'EUR'
      )
      this.amountEur = amountEur
    } else if (this.amount) {
      this.amountEur = this.amount
    }
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
