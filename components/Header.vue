<template>
  <div class="header">
    <b-container>
      <div class="header__content">
        <nuxt-link :to="localePath('/')">
          {{ $t('index.name') }}
        </nuxt-link>
        <template v-if="isAdmin">
          <nuxt-link :to="localePath('admin')" class="button--green">
            {{ $t('index.admin') }}
          </nuxt-link>
        </template>
        <template v-else-if="getIsAuthenticated">
          <nuxt-link :to="localePath('profile')" class="button--green">
            {{ $t('index.profile') }}
          </nuxt-link>
        </template>
        <template v-if="!getIsAuthenticated">
          <nuxt-link :to="localePath('login')" class="button--green">
            {{ $t('index.login') }}
          </nuxt-link>
        </template>
        <template v-else>
          <button class="button--green" @click="logout">
            {{ $t('index.logout') }}
          </button>
        </template>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getMe: 'user/getMe',
      getIsAuthenticated: 'user/getIsAuthenticated'
    }),
    isAdmin () {
      return this.getMe?.isAdmin
    }
  },

  beforeMount () {
    const token = this.$cookies.get('_visavi_token')
    if (!token) {
      return
    }
    this.getProfile(token)
  },

  methods: {
    ...mapActions({
      unAuthorize: 'user/logout',
      getProfile: 'user/getProfile'
    }),

    logout () {
      this.unAuthorize()

      this.$cookies.remove('_visavi_token')
      this.$http.setToken(false)

      this.$router.push(this.localePath('/'))
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #f8f8f8;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
  }
}
</style>
