<template>
  <div :class="['paypal-button', 'mt-2', {'paypal-button--disabled': disabled}]">
    <div id="paypal-button-container" />
    <div v-if="loading" class="paypal-button__loading">
      Loading paypal ...
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { loadScript } from '@paypal/paypal-js'

export default {
  name: 'PaypalButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    amount: {
      type: Number,
      required: true
    },

    email: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    }
  },

  asyncData (context) {
    try {
      return {
        PAYPAL_CLIENT_ID: context.env.PAYPAL_CLIENT_ID
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      loading: false,
      PAYPAL_CLIENT_ID: '',
      paypalRenderer: null
    }
  },

  beforeMount () {
    this.prepareRenderPaypal()
    this.renderPaypal()
  },

  methods: {
    ...mapActions([
      'sendGoal',
      'openGuideBuyModal',
      'receiveGuideBuyingInfo',
      'sendEmail'
    ]),

    prepareRenderPaypal () {
      this.loading = true

      loadScript({
        'client-id': this.PAYPAL_CLIENT_ID,
        currency: 'USD',
        'disable-funding': ['credit', 'card']
      }).then((paypal) => {
        this.paypalRenderer = paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.amount
                }
              }],
              payer: {
                email_address: this.email,
                name: {
                  given_name: this.name
                }
              }
            })
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              if (details.status === 'COMPLETED') {
                this.$router.push(this.localePath('/thanks-guide'))
              }
            })
          }
        })
      }).catch((err) => {
        console.error('failed to load the PayPal JS SDK script', err)
      }).finally(() => {
        this.loading = false
      })
    },

    renderPaypal () {
      if (this.paypalRenderer) {
        this.paypalRenderer.render('#paypal-button-container')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.paypal-button {
  margin: 0 auto;

  &--disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
