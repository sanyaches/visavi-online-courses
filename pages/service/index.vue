<template>
  <div id="page-services" class="service-page">
    <ReachOutModal />

    <div class="service-page__hero">
      <div class="service-page__hero-content">
        <div class="service-page__hero-text">
          {{ $t('index.services') }}
        </div>
      </div>
    </div>

    <ServicesEnglish v-if="$i18n.locale !== 'ru'" @reach-out="reachOut" />
    <ServicesRussian v-else @reach-out="reachOut" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ServicesEnglish from '@/components/blocks/services/ServicesEnglish.vue'
import ServicesRussian from '@/components/blocks/services/ServicesRussian.vue'

export default {
  components: {
    ServicesEnglish,
    ServicesRussian
  },
  methods: {
    ...mapActions({
      changeShowModal: 'reachOut/changeShowModal',
      changeService: 'reachOut/changeService'
    }),

    reachOut (service) {
      this.changeShowModal(true)
      this.changeService(service)
    }
  }
}
</script>

<style lang="scss">
.service-page {
  &__hero-content {
    position: relative;
    height: 421px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url('~/assets/images/services-hero.jpg');
    background-size: 100%;
    background-position-y: 22%;

    &:hover {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 991px) {
      height: 297px;
      background-position-y: 25%;
    }

    @media (max-width: 767px) {
      height: 347px;
      background-position-y: 28%;
    }
  }

  &__hero-text {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 4.5rem;
    color: white;
    padding: 0 1.4rem;

    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }

  --button-brown-color: #fff;
  --button-brown-bg-color: #917C6F;
  --button-brown-bg-hover-color: #a08d81;

  &__block {
    padding: 4rem 1rem;

    @media screen and (max-width: 991px) {
      padding: 1.5rem 1rem;
    }
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__list {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 2fr 4rem 2fr 1fr;
      gap: 0;
    }
  }

  &__list-triple {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 4fr 4rem 4fr 4rem 4fr;
      gap: 0;
    }
  }

  &__list-single {
    margin-top: 4rem;
  }

  &__list-border {
    display: none;

    @media screen and (min-width: 992px) {
      display: block;
      height: 100%;
      width: 2px;
      margin: 0.5rem auto;
      background-color: var(--border-color);
    }
  }

  &__card {
    width: 100%;
  }

  &__list-single &__card {
    max-width: 550px;
    margin: 0 auto;
  }

  .card__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
  }

  .card__subtitle {
    text-align: center;
    min-height: 3rem;
  }

  .card__description {
    font-size: 1.2rem;
    text-align: center;
    min-height: 6rem;
  }

  .card__image {
    width: 100%;
  }

  .card__price {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
  }

  .price {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card__price-text {
    font-size: 0.9rem;

    @media screen and (min-width: 992px) {
      font-size: 0.95rem;
    }
  }

  .card__points {
    list-style-type: none;
    padding-left: 0;
  }

  .card__point-item {
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      border: 2px solid var(--vk-brown-1);
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  .card__book-button {
    padding: 0.8rem 1.1rem;
    border-radius: 1rem;
    background-color: var(--vk-gray-1);
    color: var(--vk-white);
    margin: 0 auto;
    width: fit-content;
    display: block;
    border-width: 0;
    transition: opacity 0.2s;

    &:hover, &:active, &:focus {
      opacity: 0.8;
    }
  }
}
</style>
