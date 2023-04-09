export const state = () => ({
  showModal: false,
  form: {
    name: '',
    email: '',
    confirmed: false
  },
  courseTitle: '',
  amount: 0,
  paymentMethod: ''
})

export const mutations = {
  setName (state, name) {
    state.form.name = name
  },

  setEmail (state, email) {
    state.form.email = email
  },

  setCourseTitle (state, courseTitle) {
    state.courseTitle = courseTitle
  },

  setPaymentMethod (state, paymentMethod) {
    state.paymentMethod = paymentMethod
  },

  setConfirmed (state, confirmed) {
    state.form.confirmed = confirmed
  },

  setAmount (state, amount) {
    state.amount = amount
  }
}

export const getters = {
  getName (state) {
    return state.form.name
  },

  getEmail (state) {
    return state.form.email
  },

  getCourseTitle (state) {
    return state.courseTitle
  },

  getPaymentMethod (state) {
    return state.paymentMethod
  },

  getIsValid (state) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return state.form.name.length > 0 && emailRegex.test(state.form.email) && state.form.confirmed
  },

  getConfirmed (state) {
    return state.form.confirmed
  }
}

export const actions = {
  async pay ({ state, getters }, bvToast) {
    const paymentMessage = this.$i18n.t('checkout.payment_message', { from: getters.getName, title: getters.getCourseTitle })

    const url = '/api/payment/pay-course'

    const jsonBody = JSON.stringify({
      message: paymentMessage,
      method: getters.getPaymentMethod,
      email: getters.getEmail,
      name: getters.getName,
      amount: state.amount,
      course: getters.getCourseTitle
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

  changeAmount ({ commit }, amount) {
    commit('setAmount', amount)
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

  changeCourseTitle ({ commit }, courseTitle) {
    commit('setCourseTitle', courseTitle)
  },

  changeAgreement ({ commit }, confirmed) {
    commit('setConfirmed', Boolean(confirmed))
  }
}
