<template>
  <div class="header">
    <div class="header__container">
      <div class="header__content">
        <nuxt-link :to="localePath('/')" @click.native="dropdownActive = false">
          <img src="@/assets/images/logo2.png">
        </nuxt-link>
        <div class="header__menu">
          <div
            class="hamburger hamburger--squeeze header__menu-burger"
            :class="{ 'is-active': dropdownActive }"
            @click="dropdownActive = !dropdownActive"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner" />
            </div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="dropdownActive" class="header__dropdown-menu">
            <div class="header__dropdown-menu-content">
              <template v-if="isAdmin">
                <div class="header__dropdown-menu-item">
                  <nuxt-link :to="localePath('admin')" class="anchor anchor--raw" @click.native="dropdownActive = !dropdownActive">
                    {{ $t('index.admin') }}
                  </nuxt-link>
                </div>
              </template>
              <template v-else-if="getIsAuthenticated">
                <div class="header__dropdown-menu-item">
                  <nuxt-link :to="localePath('profile')" class="anchor anchor--raw" @click.native="dropdownActive = !dropdownActive">
                    {{ $t('index.profile') }}
                  </nuxt-link>
                </div>
              </template>
              <template v-if="!getIsAuthenticated">
                <div class="header__dropdown-menu-item">
                  <nuxt-link :to="localePath('login')" class="anchor anchor--raw" @click.native="dropdownActive = !dropdownActive">
                    {{ $t('index.login') }}
                  </nuxt-link>
                </div>
              </template>
              <template v-else>
                <div class="header__dropdown-menu-item">
                  <button class="button--brown button" @click="dropdownActive = !dropdownActive; logout()">
                    {{ $t('index.logout') }}
                  </button>
                </div>
              </template>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dropdownActive: false
    }
  },

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
  background-color: #b6a498;
  position: sticky;
  top: 0;
  z-index: 30;

  &__container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1480px;

    @media screen and (max-width: 1550px) {
      max-width: 1200px;
    }

    @media screen and (max-width: 1250px) {
      max-width: 1024px;
    }

    @media screen and (max-width: 1050px) {
      max-width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;

    @media screen and (max-width: 1050px) {
      padding: 0.5rem 0;
    }
  }

  &__dropdown-menu {
    display: block;
    position: fixed;
    top: 87px;
    left: 0;
    width: 100%;
    background: #897569f1;

    @media screen and (max-width: 1050px) {
      top: 77px;
    }
  }

  &__dropdown-menu-content {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1050px) {
      padding: 1rem 0;
    }
  }

  &__dropdown-menu-item {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
