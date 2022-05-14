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

const getFullName = (firstName, lastName) => {
  return [firstName, lastName].filter(Boolean).join(' ')
}

export default {
  middleware: 'authenticated',

  computed: {
    ...mapGetters({
      getMe: 'user/getMe',
      getIsAuthenticated: 'user/getIsAuthenticated'
    }),
    getWelcomeText () {
      return this.$t('profile.welcome', { name: getFullName(this.getMe?.firstName, this.getMe?.lastName) })
    }
  }
}
</script>
