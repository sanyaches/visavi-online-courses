<template>
  <div class="header">
    <b-container>
      <div class="header__content">
        <nuxt-link :to="localePath('/')">
          {{ $t('index.name') }}
        </nuxt-link>
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
      getIsAuthenticated: 'user/getIsAuthenticated'
    })
  },

  methods: {
    ...mapActions({
      unAuthorize: 'user/logout'
    }),

    logout () {
      this.unAuthorize()
      this.$router.push(this.localePath('login'))
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
