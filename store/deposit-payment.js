export const state = () => ({
  form: {
    name: '',
    email: '',
    description: ''
  }
})

export const mutations = {
  setName (state, name) {
    state.form.name = name
  },

  setEmail (state, email) {
    state.form.email = email
  },

  setDescription (state, description) {
    state.form.description = description
  }
}

export const getters = {
  getForm (state) {
    return state.form
  },

  getName (state) {
    return state.form.name
  },

  getEmail (state) {
    return state.form.email
  },

  getDescription (state) {
    return state.form.description
  },

  getIsValid (state) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return state.form.name.length > 0 && emailRegex.test(state.form.email) && state.form.description.length > 0
  }
}

export const actions = {
  changeName ({ commit }, name) {
    commit('setName', name)
  },

  changeEmail ({ commit }, email) {
    commit('setEmail', email)
  },

  changeDescription ({ commit }, description) {
    commit('setDescription', description)
  },

  depositPaymentSuccessHandler ({ getters }) {
    const jsonBody = JSON.stringify(getters.getForm)
    const url = '/api/payment/paypal-paid'

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json'
        },
        body: jsonBody
      })
    } catch (error) {
      console.error(error)
    }
  }
}
