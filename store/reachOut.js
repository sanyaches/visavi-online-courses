export const state = () => ({
  showModal: false,
  service: null
})

export const mutations = {
  setShowModal (state, showModal) {
    state.showModal = showModal
    if (!showModal) {
      state.service = null
    }
  },
  setService (state, serviceValue) {
    state.service = serviceValue
  }
}

export const getters = {
  getShowModal (state) {
    return state.showModal
  },
  getService (state) {
    return state.service
  }
}

export const actions = {
  changeShowModal ({ commit }, value) {
    commit('setShowModal', Boolean(value))
  },
  changeService ({ commit }, value) {
    commit('setService', value)
  }
}
