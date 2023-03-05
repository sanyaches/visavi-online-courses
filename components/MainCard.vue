<template>
  <div class="main-card">
    <div class="main-card__container">
      <div class="main-card__image" @click="$router.push(localizedLinkUrl)">
        <img :src="imageSrc">
      </div>
      <div class="main-card__content">
        <div class="main-card__title">
          <nuxt-link :to="localizedLinkUrl">
            <span>{{ title.split(' | ')[0] }}</span>
            <br>
            <span>{{ title.split(' | ')[1] }}</span>
          </nuxt-link>
        </div>
        <div class="main-card__description">
          {{ description }}
        </div>
        <div class="main-card__more">
          <nuxt-link :to="localizedLinkUrl" class="button button--brown">
            {{ $t('main_card_more') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    pageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },

  computed: {
    localizedLinkUrl () {
      return this.localeRoute({ path: this.pageUrl })
    }
  }
}
</script>

<style lang="scss">
.main-card {
  &__container {
    z-index: 2;

    @media screen and (max-width: 991px) {
      top: 0;
      position: static;
    }
  }

  &__image {
    cursor: pointer;
    margin-bottom: 2rem;

    @media screen and (max-width: 991px) {
      margin-bottom: 1.5rem;
    }

    img {
      width: 100%;
    }
  }

  &__content {
    padding-right: 1rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      padding-right: 0;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;

    a, a:visited {
      color: #fff;
    }

    a:hover, a:active {
      color: #f4e6dc;
    }

    @media screen and (max-width: 1199px) {
      font-size: 1.3rem;
    }
  }

  &__description {
    color: var(--card-description-color, #333);
    margin-top: 0.5rem;
  }

  &__more {
    font-weight: 500;
    margin-top: 0.8rem;

    a, a:visited {
      color: #fff;
    }

    a:hover, a:active {
      color: #f4e6dc;
    }
  }

  &__more .button {
    display: block;
  }
}
</style>
