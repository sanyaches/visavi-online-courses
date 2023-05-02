<template>
  <b-modal id="bv-modal-checkout" hide-footer :visible="showModal" class="checkout-modal" @change="changeShowModal">
    <template #modal-title>
      {{ $t('checkout.title') }}
    </template>
    <template v-if="checkoutItem">
      <div class="d-block text-center checkout">
        <div class="checkout__info">
          <h3 class="mt-3">
            {{ $t('checkout.name', { title: preparedTitle }) }}
          </h3>
          <div class="checkout-item__access">
            {{ $t('checkout.access', { access: formattedMonths }) }}
          </div>
        </div>

        <div v-if="checkoutItem.price > 0" class="checkout__coupon">
          <div style="padding: 0.5rem 0">
            <div class="d-flex justify-content-between align-items-center">
              <div style="font-size: 1.6rem; font-weight: 700;">
                {{ $t('checkout.price_total') }}
              </div>
              <div v-if="checkoutItem.price > 0" class="checkout-item__price">
                <span>{{ checkoutItem.price }}</span>
                <span style="font-size: 0.8em" class="currency">{{ $t(`common.currency.${checkoutItem.currency}`) }}</span>
                <span v-if="amountUsd">({{ amountUsd }} $)</span>
              </div>
              <div v-else class="checkout-item__price">
                {{ $t('common.free') }}
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div style="font-size: 0.9rem;">
                {{ $t('checkout.price_sum') }}
              </div>
              <div v-if="checkoutItem.originalPrice > 0" class="checkout-item__price is--small">
                <span>{{ checkoutItem.originalPrice }}</span>
                <span class="currency">{{ $t(`common.currency.${checkoutItem.currency}`) }}</span>
              </div>
              <div v-else class="checkout-item__price">
                {{ $t('common.free') }}
              </div>
            </div>
            <div v-if="appliedCoupon" class="d-flex justify-content-between align-items-center">
              <div style="font-size: 0.9rem;">
                {{ $t('checkout.discount') }}
              </div>
              <div class="checkout-item__price is--small is--red">
                <span>-{{ checkoutItem.originalPrice - checkoutItem.price }}</span>
                <span class="currency">{{ $t(`common.currency.${checkoutItem.currency}`) }}</span>
              </div>
            </div>
          </div>
          <b-form @submit.prevent="submitCoupon">
            <label for="coupon-code" class="checkout__coupon-label">
              <b-input
                id="coupon-code"
                v-model="couponForm.code"
                :state="couponFormState"
                class="checkout__coupon-input"
                :placeholder="$t('checkout.coupon.code')"
                required
                autocomplete="coupon-code"
                type="text"
              />
              <b-button class="button button--large button--brown checkout__coupon-button" type="submit">
                <font-awesome-icon icon="fa-solid fa-check" />
              </b-button>
            </label>
            <b-form-invalid-feedback class="text-left" :state="couponFormState">
              {{ formMessage }}
            </b-form-invalid-feedback>
            <b-form-valid-feedback class="text-left" :state="couponFormState">
              {{ formMessage }}
            </b-form-valid-feedback>
          </b-form>
        </div>
      </div>
      <b-button
        class="mt-4 button button--large button--brown-dark"
        block
        @click="toPay"
      >
        {{ $t('checkout.proceed') }}
      </b-button>
      <paypal-button
        :amount="amountUsd"
        :name="fullName"
        :email="profile.email"
        :disabled="loading"
        :on-success="onSuccess"
      />
    </template>
    <template v-else>
      <div>
        {{ $t('checkout.empty') }}
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { formatDuration } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'
import { convertCurrencies } from '../lib/convertCurrencies'

export default {
  data () {
    return {
      couponForm: {
        code: ''
      },
      couponResponse: null,
      loading: false,
      amountUsd: 0
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken',
      profile: 'user/getMe',
      fullName: 'user/getFullName',
      showModal: 'checkout/getShowModal',
      checkoutItem: 'checkout/getCheckoutItem',
      appliedCoupon: 'checkout/getCoupon'
    }),

    formattedMonths () {
      return formatDuration({
        months: this.checkoutItem?.accessMonths
      }, { locale: this.$i18n.locale === 'ru' ? ru : enUS })
    },

    preparedTitle () {
      if (!this.checkoutItem || !this.checkoutItem.title) {
        return ''
      }

      return this.checkoutItem.title.split(' | ').join(' ')
    },

    formMessage () {
      if (this.couponResponse?.status === 'success') {
        return this.$t('checkout.coupon.applied_coupon', { code: this.couponResponse.coupon.code })
      }

      if (this.couponResponse?.status === 'error') {
        return this.$t(`checkout.coupon.error.${this.couponResponse.errorCode}`)
      }

      return null
    },

    couponFormState () {
      if (!this.couponResponse || (!this.appliedCoupon && !this.couponResponse?.status)) {
        return
      }

      return this.couponResponse?.status === 'success'
    }
  },

  watch: {
    checkoutItem: {
      async handler (val) {
        if (val?.price && val?.currency !== 'USD') {
          const amountUsd = await convertCurrencies(val?.price, val?.currency, 'USD')
          this.amountUsd = amountUsd
        }
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    ...mapActions({
      applyCoupon: 'checkout/applyCoupon',
      payForCheckout: 'checkout/payForCheckout',
      changeShowModal: 'checkout/changeShowModal',
      paypalSuccessHandler: 'checkout/paypalSuccessHandler'
    }),

    async submitCoupon () {
      const couponResponse = await this.applyCoupon({ couponCode: this.couponForm.code, userId: this.profile.id })
      if (couponResponse) {
        this.couponResponse = couponResponse
      }
    },

    toPay (e, isForeign = false) {
      const platform = isForeign || this.checkoutItem.currency === 'USD' ? 'EN' : 'RU'
      this.payForCheckout({ user: this.profile, bvToast: this.$root.$bvToast, platform, lang: this.$i18n.locale })
    },

    onSuccess () {
      this.paypalSuccessHandler({ user: this.profile })
    }
  }
}
</script>

<style lang="scss">
.checkout__coupon {
  padding: 1rem 0;
  margin: 1rem 0;
  background: #f2f2f2;
  padding: 0.8rem;

  &-label {
    display: flex;
    align-items: stretch;
  }

  &-input {
    height: auto;
  }

  &-message {
    font-size: 1rem;
  }

  &-button.button {
    font-size: 2rem;
    padding: 0.4rem 1rem;
  }
}

.checkout-item__price {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;

  &.is--small {
    font-size: 0.9rem;
    font-weight: normal;
  }

  &.is--red {
    color: #a43333;
  }
}
</style>
