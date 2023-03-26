export const state = () => ({
  showModal: false,
  form: {
    name: '',
    email: '',
    confirmed: false
  },
  guide: '',
  paymentMethod: ''
})

export const mutations = {
  setShowModal (state, showModal) {
    state.showModal = showModal
  },

  setName (state, name) {
    state.form.name = name
  },

  setEmail (state, email) {
    state.form.email = email
  },

  setGuide (state, guide) {
    state.guide = guide
  },

  setPaymentMethod (state, paymentMethod) {
    state.paymentMethod = paymentMethod
  },

  setConfirmed (state, confirmed) {
    state.form.confirmed = confirmed
  }
}

export const getters = {
  getShowModal (state) {
    return state.showModal
  },

  getName (state) {
    return state.form.name
  },

  getEmail (state) {
    return state.form.email
  },

  getGuide (state) {
    return state.guide
  },

  getPaymentMethod (state) {
    return state.paymentMethod
  },

  getIsValid (state) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return state.form.name.length > 0 && emailRegex.test(state.form.email) && state.guide.length > 0 && state.form.confirmed
  },

  getConfirmed (state) {
    return state.form.confirmed
  }
}

export const actions = {
  async payForGuide ({ getters }, bvToast) {
    const paymentMessage = this.$i18n.t('checkout.guide_payment_message', { from: getters.getName, to: getters.getEmail })

    const url = '/api/payment/pay-guide'

    const jsonBody = JSON.stringify({
      message: paymentMessage,
      method: getters.getPaymentMethod,
      email: getters.getEmail,
      name: getters.getName
    })

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

      if (data?.status === 'redirect') {
        window.location.assign(data.url)
        return
      }

      throw data
    } catch (error) {
      if (error.errorCode) {
        const code = String(error.errorCode).toLowerCase()
        bvToast.toast(this.$i18n.t(`notify.error.${code}_msg`), {
          title: this.$i18n.t(`notify.error.${code}`),
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'danger',
          appendToast: true
        })
      }
    }
  },

  changeShowModal ({ commit }, value) {
    commit('setShowModal', Boolean(value))
  },

  changePaymentMethod ({ commit }, method) {
    commit('setPaymentMethod', method)
  },

  changeName ({ commit }, name) {
    commit('setName', name)
  },

  changeEmail ({ commit }, email) {
    commit('setEmail', email)
  },

  changeGuide ({ commit }, guide) {
    commit('setGuide', guide)
  },

  changeAgreement ({ commit }, confirmed) {
    commit('setConfirmed', Boolean(confirmed))
  }
}
