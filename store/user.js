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
  },

  async getProfile ({ dispatch }, token) {
    const url = 'api/auth/get-profile'

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json()
      if (data?.status === 'success') {
        dispatch('login', data.user)

        return true
      }

      return false
    } catch (error) {
      return false
    }
  }
}
