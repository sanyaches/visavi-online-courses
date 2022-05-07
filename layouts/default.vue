<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapActions } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  beforeMount () {
    const token = Cookies.get('bearer-token')
    if (!token) {
      return
    }
    this.getProfile(token)
  },
  methods: {
    ...mapActions({
      getProfile: 'user/getProfile'
    })
  }
}
</script>
