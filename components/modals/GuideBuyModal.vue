<template>
  <b-modal id="bv-modal-guide" hide-footer :visible="showModal" class="checkout-guide-modal" @change="changeShowModal">
    <template #modal-title>
      {{ $t('guide_modal_title') }}
    </template>

    <div class="d-block">
      <div class="d-flex space-between checkout-guide-modal__item">
        <div>{{ $t('guide_modal_good') }}</div>
        <div class="checkout-guide-modal__amount-primary">
          {{ amountRub }} {{ $t('common.currency.RUB') }}
        </div>
        <div class="checkout-guide-modal__amount-secondary">
          ≈ {{ amountUsd }} {{ $t('common.currency.USD') }}
        </div>
      </div>
      <b-form class="checkout-guide-modal__form" @submit.prevent>
        <b-form-group id="input-group-1" :label="$t('guide_name_label')" label-for="input-1">
          <b-form-input
            id="input-1"
            :value="name"
            required
            :placeholder="$t('guide_name_placeholder')"
            @change="changeName"
          />
        </b-form-group>

        <b-form-group id="input-group-2" :label="$t('guide_email_label')" label-for="input-2">
          <b-form-input
            id="input-2"
            :value="email"
            type="email"
            required
            :placeholder="$t('guide_email_placeholder')"
            @change="changeEmail"
          />
        </b-form-group>

        <b-form-group
          v-if="$i18n.locale === 'ru'"
          v-slot="{ ariaDescribedby }"
          :label="$t('guide_country_label')"
        >
          <b-form-radio
            :checked="guide"
            :aria-describedby="ariaDescribedby"
            name="guide-country"
            required
            value="Для остальных стран"
            @change="changeGuide"
          >
            {{ $t('guide_country_rest') }}
          </b-form-radio>
          <b-form-radio
            :checked="guide"
            :aria-describedby="ariaDescribedby"
            name="guide-country"
            required
            value="Турецкая версия"
            @change="changeGuide"
          >
            {{ $t('guide_country_turkey') }}
          </b-form-radio>
        </b-form-group>

        <b-form-group>
          <b-form-checkbox
            id="confirm-agreement"
            :checked="confirmAgreement"
            style="display: inline-block;"
            name="confirm-agreement"
            required
            @change="changeAgreement"
          />
          <label for="confirm-agreement" style="display: inline-block;">
            <span>{{ $t('guide_agreement_label') }}</span>
            <nuxt-link
              :to="localePath('/guide/agreement')"
              style="font-size: 1rem;"
              target="_blank"
              class="anchor anchor--small anchor--brown"
            >{{ $t('guide_agreement_link') }}</nuxt-link>
          </label>
        </b-form-group>

        <b-button
          v-if="$i18n.locale === 'ru'"
          class="mt-4 button button--large button--brown-dark"
          block
          type="submit"
          @click="toPay($event, 'yoomoney')"
        >
          {{ $t('guide_pay') }}
        </b-button>

        <paypal-button
          :amount="amountUsd"
          :name="name"
          :email="email"
          :disabled="!isValid"
          :on-success="sendSuccessEmail"
          :link-back="localePath('/thanks-guide')"
        />
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Convert } from 'easy-currencies'

export default {
  data () {
    return {
      amountRub: 990,
      amountUsd: 0
    }
  },
  computed: {
    ...mapGetters({
      name: 'guide-form/getName',
      email: 'guide-form/getEmail',
      guide: 'guide-form/getGuide',
      showModal: 'guide-form/getShowModal',
      confirmAgreement: 'guide-form/getConfirmed',
      isValid: 'guide-form/getIsValid'
    })
  },

  async beforeMount () {
    const value = await Convert(this.amountRub).from('RUB').to('USD')
    this.amountUsd = parseFloat(value.toFixed(2))

    if (this.$i18n.locale !== 'ru') {
      this.changeGuide('English version')
    }
  },

  methods: {
    ...mapActions({
      payForGuide: 'guide-form/payForGuide',
      changeShowModal: 'guide-form/changeShowModal',
      changePaymentMethod: 'guide-form/changePaymentMethod',
      changeGuide: 'guide-form/changeGuide',
      changeName: 'guide-form/changeName',
      changeEmail: 'guide-form/changeEmail',
      changeAgreement: 'guide-form/changeAgreement',
      sendSuccessEmail: 'guide-form/sendSuccessEmail'
    }),

    toPay (e, paymentMethod) {
      if (!this.isValid) { return }

      this.changePaymentMethod(paymentMethod)
      this.payForGuide(this.$root.$bvToast)
    }
  }
}
</script>

<style lang="scss">
.checkout-guide-modal {
  &__item {
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    padding: 0.5rem 0;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  &__amount-primary {
    text-align: right;
  }

  &__amount-secondary {
    position: absolute;
    right: 0.2rem;
    bottom: -1.4rem;
    background-color: brown;
    color: white;
    padding: 0.2rem 0.5rem;
    box-shadow: -2px 2px 15px 3px rgba(0,0,0,0.2);
  }
}
</style>
