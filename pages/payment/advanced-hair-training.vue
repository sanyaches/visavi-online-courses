<template>
  <div class="payment-page">
    <b-container>
      <div class="d-block">
        <div class="d-flex space-between payment-page__item">
          <div>Вы приобретаете обучение по программе "Курс повышения"</div>
          <div class="payment-page__amount-primary">
            28500 ₽
          </div>
        </div>
        <b-form class="payment-page__form" @submit.prevent>
          <b-form-group id="input-group-1" label="Имя" label-for="input-1">
            <b-form-input
              id="input-1"
              :value="name"
              required
              placeholder="Введите имя"
              @change="changeName"
            />
          </b-form-group>

          <b-form-group id="input-group-2" label="Email" label-for="input-2">
            <b-form-input
              id="input-2"
              :value="email"
              type="email"
              required
              placeholder="Введите email"
              @change="changeEmail"
            />
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
            <label for="confirm-agreement" style="display: inline;">
              <span>Соглашаюсь с условиями</span>
              <nuxt-link
                to="/offer"
                style="font-size: 1rem;"
                target="_blank"
                class="anchor anchor--small anchor--brown"
              >
                оферты
              </nuxt-link>
            </label>
          </b-form-group>

          <b-button
            class="button button--large button--brown-dark"
            block
            type="submit"
            @click="toPay($event, 'yoomoney')"
          >
            Оплатить картой
          </b-button>

          <b-button
            class="button button--large button--brown-dark"
            block
            type="submit"
            @click="toPay($event, 'tinkoff')"
          >
            Оформить оплату в рассрочку
          </b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      name: 'course-payment/getName',
      email: 'course-payment/getEmail',
      guide: 'course-payment/getGuide',
      confirmAgreement: 'course-payment/getConfirmed',
      isValid: 'course-payment/getIsValid'
    })
  },

  methods: {
    ...mapActions({
      pay: 'course-payment/pay',
      changeName: 'course-payment/changeName',
      changeEmail: 'course-payment/changeEmail',
      changeCourseTitle: 'course-payment/changeCourseTitle',
      changePaymentMethod: 'course-payment/changePaymentMethod',
      changeAgreement: 'course-payment/changeAgreement',
      changeAmount: 'course-payment/changeAmount'
    }),

    toPay (e, paymentMethod) {
      if (!this.isValid) {
        return
      }

      this.changeAmount(28500)
      this.changePaymentMethod(paymentMethod)
      this.changeCourseTitle('Курс повышения')
      this.pay(this.$root.$bvToast)
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/payment-page.scss" />
