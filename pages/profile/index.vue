<template>
  <div class="profile">
    <b-container>
      <div v-if="getIsAuthenticated">
        <h1>{{ getWelcomeText }}</h1>
      </div>
      <h2 v-else>
        Loading...
      </h2>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getMe: 'user/getMe',
      getIsAuthenticated: 'user/getIsAuthenticated'
    }),
    getWelcomeText () {
      return this.$t('profile.welcome', { name: this.getMe?.username })
    }
  },
  beforeMount () {
    if (!this.getIsAuthenticated) {
      this.$router.push(this.localePath('login'))
    }
  }
}
</script>
