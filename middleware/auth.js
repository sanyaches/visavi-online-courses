import Cookies from 'js-cookie'

export default function auth ({ store, redirect }) {
  if (process.server) {
    return
  }

  const token = Cookies.get('bearer-token')
  console.log(token)
  if (!token) {
    return
  }
  store.dispatch('user/getProfile', token)
}
