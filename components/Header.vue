<template>
  <div class="header">
    <div class="header__container">
      <div class="header__content">
        <nuxt-link :to="localePath('/')">
          <img src="@/assets/images/logo.png">
        </nuxt-link>

        <div class="header__controls">
          <div class="language-switcher" style="margin-right: 1rem;">
            <nuxt-link v-if="$i18n.locale === 'ru'" class="anchor--raw" :to="switchLocalePath('en')">
              Eng
            </nuxt-link>
            <nuxt-link v-if="$i18n.locale === 'en'" class="anchor--raw" :to="switchLocalePath('ru')">
              Rus
            </nuxt-link>
          </div>

          <nuxt-link v-if="getIsAuthenticated" v-b-tooltip.hover :title="profileTitle" :to="localePath('profile')" class="header__profile anchor anchor--raw">
            <div class="header__profile-icon">
              <font-awesome-icon icon="fa-solid fa-user" />
            </div>
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
        </div>

        <transition name="fade">
          <div v-show="dropdownActive" class="header__dropdown-menu">
            <div class="header__dropdown-menu-content">
              <template v-if="isAdmin">
                <div class="header__dropdown-menu-item">
                  <nuxt-link :to="localePath('profile')" class="anchor anchor--raw">
                    {{ $t('index.profile') }}
                  </nuxt-link>
                </div>
                <div class="header__dropdown-menu-item">
                  <nuxt-link :to="localePath('admin')" class="anchor anchor--raw">
                    {{ $t('index.admin') }}
                  </nuxt-link>
                </div>
              </template>
              <template v-else-if="getIsAuthenticated">
                <template v-if="$i18n.locale === 'ru'">
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('profile')" class="anchor anchor--raw">
                      {{ $t('index.profile') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-education-programs')" class="anchor anchor--raw">
                      {{ $t('index.education_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/service')" class="anchor anchor--raw">
                      {{ $t('index.services_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('guide')" class="anchor anchor--raw">
                      {{ $t('guide_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-reviews')" class="anchor anchor--raw">
                      {{ $t('index.reviews_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#main-faq')" class="anchor anchor--raw">
                      {{ $t('faq.faq_title') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-contacts')" class="anchor anchor--raw">
                      {{ $t('index.contacts_link') }}
                    </nuxt-link>
                  </div>
                </template>
                <template v-else>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('profile')" class="anchor anchor--raw">
                      {{ $t('index.profile') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('guide')" class="anchor anchor--raw">
                      {{ $t('guide_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#main-faq')" class="anchor anchor--raw">
                      {{ $t('faq.faq_title') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-contacts')" class="anchor anchor--raw">
                      {{ $t('index.contacts_link') }}
                    </nuxt-link>
                  </div>
                </template>
              </template>
              <template v-if="!getIsAuthenticated">
                <template v-if="$i18n.locale === 'ru'">
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('login')" class="anchor anchor--raw">
                      {{ $t('index.login') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-education-programs')" class="anchor anchor--raw">
                      {{ $t('index.education_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/service')" class="anchor anchor--raw">
                      {{ $t('index.services_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('guide')" class="anchor anchor--raw">
                      {{ $t('guide_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-reviews')" class="anchor anchor--raw">
                      {{ $t('index.reviews_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#main-faq')" class="anchor anchor--raw">
                      {{ $t('faq.faq_title') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-contacts')" class="anchor anchor--raw">
                      {{ $t('index.contacts_link') }}
                    </nuxt-link>
                  </div>
                </template>
                <template v-else>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('login')" class="anchor anchor--raw">
                      {{ $t('index.login') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('guide')" class="anchor anchor--raw">
                      {{ $t('guide_link') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#main-faq')" class="anchor anchor--raw">
                      {{ $t('faq.faq_title') }}
                    </nuxt-link>
                  </div>
                  <div class="header__dropdown-menu-item">
                    <nuxt-link :to="localePath('/#index-contacts')" class="anchor anchor--raw">
                      {{ $t('index.contacts_link') }}
                    </nuxt-link>
                  </div>
                </template>
              </template>
              <template v-else>
                <div class="header__dropdown-menu-item">
                  <button class="button--brown button" @click="logout">
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
    },
    fullName () {
      if (!this.getMe) {
        return ''
      }

      return `${this.getMe.firstName} ${this.getMe.lastName}`
    },
    profileTitle () {
      if (!this.getMe) {
        return ''
      }

      return `${this.$t('index.profile_tooltip')} ${this.getMe.firstName} ${this.getMe.lastName}`
    }
  },

  created () {
    this.$watch(
      () => this.$route,
      () => {
        this.dropdownActive = false
      }
    )
  },

  beforeMount () {
    const token = this.$cookies.get('_vikosto_token')
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

      this.$cookies.remove('_vikosto_token')
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

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__profile-fullname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    font-size: 1.3rem;

    @media screen and (max-width: 480px) {
      max-width: 140px;
      font-size: 1.2rem;
    }

    @media screen and (max-width: 360px) {
      max-width: 125px;
    }
  }

  &__profile {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0.4rem;
  }

   &__profile-icon {
    font-size: 1.5rem;
    background-color: #917C6F;
    color: #fff;
    border-radius: 50%;
    padding: 0 0.5rem;
  }

  &__menu-burger {
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      background-color: #3b3737;
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
