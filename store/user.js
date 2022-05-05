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
  },

  setToken (state, token) {
    state.authorizationToken = token
  }
}

export const getters = {
  getMe (state) {
    return state.user
  },

  getIsAuthenticated (state) {
    return state.isAuthenticated
  },

  getToken (state) {
    return state.authorizationToken
  }
}

export const actions = {
  login ({ commit }, { user, token }) {
    commit('setUser', user)
    commit('setIsAuthenticated', true)
    commit('setToken', token)
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
        dispatch('login', { user: data.user, token })

        return true
      }

      return false
    } catch (error) {
      return false
    }
  }
}
