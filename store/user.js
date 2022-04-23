export const state = () => ({
  user: null,
  isAuthenticated: false
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}

export const getters = {
  getMe (state) {
    return state.user
  },

  getIsAuthenticated (state) {
    return state.isAuthenticated
  }
}

export const actions = {
  login ({ commit }, user) {
    commit('setUser', user)
    commit('setIsAuthenticated', true)
  },

  logout ({ commit }) {
    commit('setUser', null)
    commit('setIsAuthenticated', false)
  },

  authenticate ({ commit }, isAuthenticated) {
    commit('setIsAuthenticated', isAuthenticated)
  }
}
