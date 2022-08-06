export const state = () => ({
  checkoutItem: null,
  coupon: null,
  showModal: false
})

export const mutations = {
  setCheckoutItem (state, checkoutItem) {
    state.checkoutItem = checkoutItem
  },
  setShowModal (state, showModal) {
    state.showModal = showModal
  },
  setCoupon (state, coupon) {
    state.coupon = coupon
  }
}

export const getters = {
  getCheckoutItem (state) {
    if (!state.checkoutItem) {
      return null
    }

    const originalPrice = state.checkoutItem.price
    let price = originalPrice
    if (state.coupon) {
      const coupon = state.coupon
      if (coupon.discountType === 'percents') {
        price = Math.ceil(Math.floor(price * ((100 - coupon.discount) / 100)) / 10) * 10 - 10
      } else {
        price = price - coupon.discount
      }
    }

    return { ...state.checkoutItem, price, originalPrice }
  },
  getCoupon (state) {
    return state.coupon
  },
  getShowModal (state) {
    return state.showModal
  }
}

export const actions = {
  async payForCheckout ({ getters }, payload) {
    const getFullName = (profile) => {
      return [profile.firstName, profile.lastName]
        .filter(Boolean)
        .join(' ')
    }
    const token = this.$cookies.get('_vikosto_token')
    const { user, bvToast } = payload
    const { getCheckoutItem: checkoutItem, getCoupon: coupon } = getters
    const from = getFullName(user)
    const title = checkoutItem.title.split(' | ').join(' ')
    const amount = checkoutItem.price
    const paymentMessage = this.$i18n.t('checkout.payment_message', { from, title })

    const url = '/api/payment/pay'

    const jsonBody = JSON.stringify({
      courseName: checkoutItem.name,
      courseType: checkoutItem.itemType,
      accessMonths: checkoutItem.accessMonths,
      amount,
      paymentMessage,
      couponCode: coupon?.code
    })

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: jsonBody
      })
      const data = await res.json()
      if (data?.status === 'success') {
        bvToast.toast(this.$i18n.t('notify.success_add_purchase'), {
          title: this.$i18n.t('notify.success_add_purchase'),
          toaster: 'b-toaster-top-right',
          solid: true,
          variant: 'success'
        })

        if (data.pageUrl) {
          setTimeout(() => {
            window.location.assign(data.pageUrl)
          }, 700)
        } else {
          window.location.reload()
        }

        return
      } else if (data?.status === 'redirect') {
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

  async applyCoupon ({ commit }, payload) {
    if (!payload) {
      return
    }

    commit('setCoupon', null)

    const { couponCode, userId } = payload
    const url = '/api/coupon/check'
    const jsonBody = JSON.stringify({
      couponCode,
      userId
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
      const response = await res.json()

      if (response?.status === 'success') {
        commit('setCoupon', response.coupon)
      }

      return response
    } catch (error) {
      console.error(error)
    }
  },

  changeCheckoutItem ({ commit }, item) {
    commit('setCheckoutItem', item)
    commit('setCoupon', null)
  },

  changeShowModal ({ commit }, value) {
    commit('setShowModal', Boolean(value))
  },

  changeCoupon ({ commit }, coupon) {
    commit('setCoupon', coupon)
  }
}
