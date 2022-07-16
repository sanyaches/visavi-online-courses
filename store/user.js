export const state = () => ({
  user: null,
  token: null,
  isAuthenticated: false,
  coursePurchases: [],
  singleLessonPurchases: [],
  certificates: []
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },

  setToken (state, token) {
    state.token = token
  },

  setCoursePurchases (state, coursePurchases) {
    state.coursePurchases = coursePurchases
  },

  setSingleLessonPurchases (state, singleLessonPurchases) {
    state.singleLessonPurchases = singleLessonPurchases
  },

  setCertificates (state, certificates) {
    state.certificates = certificates
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
    return state.token
  },

  getMyCourses (state) {
    return state.coursePurchases
  },

  getMySingleLessons (state) {
    return state.singleLessonPurchases
  },

  getCertificates (state) {
    return state.certificates
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { app }) {
    const token = app.$cookies.get('_vikosto_token')

    if (token) {
      app.$http.setToken(token, 'Bearer')
    }
  },
  login ({ dispatch, commit }, { user, token }) {
    commit('setUser', user)
    commit('setIsAuthenticated', true)
    commit('setToken', token)
    dispatch('loadPurchases', { user, token })
    dispatch('loadCertificates', { user, token })
  },

  logout ({ dispatch, commit }) {
    commit('setUser', null)
    commit('setIsAuthenticated', false)
    commit('setToken', null)
    dispatch('unloadPurchases')
    dispatch('unloadCertificates')
  },

  unloadPurchases ({ commit }) {
    commit('setCoursePurchases', [])
    commit('setSingleLessonPurchases', [])
  },

  unloadCertificates ({ commit }) {
    commit('setCertificates', [])
  },

  async loadPurchases ({ commit }, { user, token }) {
    if (!user.email || !token) {
      return
    }

    const url = '/api/purchases/purchases-by-user'

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          email: user.email
        },
        cache: 'no-store'
      })
      const response = await res.json()
      if (response?.status === 'success') {
        const dateNowMs = Date.now()
        const purchasesWithExpired = response.data.map(purchase => ({
          ...purchase,
          expired: purchase.endDate < dateNowMs
        }))

        commit('setCoursePurchases', purchasesWithExpired.filter(item => item.courseType === 'course'))
        commit('setSingleLessonPurchases', purchasesWithExpired.filter(item => item.courseType === 'singleLesson'))
      }
    } catch (error) {
      console.error(error)
    }
  },

  async loadCertificates ({ commit }, { user, token }) {
    if (!user.id || !token) {
      return
    }

    const urlCertificates = `/api/certificate/list-by-user-id/${user.id}`

    try {
      const certificatesRes = await fetch(urlCertificates, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })
      const certificatesResponse = await certificatesRes.json()
      if (certificatesResponse?.status === 'success') {
        commit('setCertificates', certificatesResponse.data.certificates)
      }
    } catch (error) {
      console.error(error)
    }
  },

  authenticate ({ commit }, isAuthenticated) {
    commit('setIsAuthenticated', isAuthenticated)
  },

  async getProfile ({ dispatch }, token) {
    if (!token) {
      return
    }

    const url = '/api/auth/get-profile'

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
