<template>
  <div :class="['paypal-button', 'mt-2', {'paypal-button--disabled': disabled}]">
    <div id="paypal-button-container" />
    <div v-if="loading" class="paypal-button__loading">
      Loading paypal ...
    </div>
  </div>
</template>

<script>
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
    },

    linkBack: {
      type: String,
      default: ''
    },

    onSuccess: {
      type: Function,
      default: () => {}
    }
  },

  data () {
    return {
      loading: false,
      PAYPAL_CLIENT_ID: this.$config.PAYPAL_CLIENT_ID,
      paypalRenderer: null
    }
  },

  watch: {
    isLoading (val) {
      if (!val) {
        this.renderPaypal()
      }
    }
  },

  async beforeMount () {
    await this.prepareRenderPaypal()
    this.renderPaypal()
  },

  methods: {
    prepareRenderPaypal () {
      this.loading = true

      return loadScript({
        'client-id': this.PAYPAL_CLIENT_ID,
        currency: 'USD'
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
                this.onSuccess()
                if (this.linkBack) {
                  this.$router.push(this.linkBack)
                }
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
