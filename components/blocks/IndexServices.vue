<template>
  <div id="index-services" class="services">
    <nuxt-link class="services__link" :to="localePath('/service')">
      <div class="services__link-text">
        {{ $t('index.services') }}
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.services {
  padding: 4rem 0 0;

  --button-brown-color: #fff;
  --button-brown-bg-color: #917C6F;
  --button-brown-bg-hover-color: #a08d81;

  @media screen and (max-width: 991px) {
    padding: 1.5rem 0 0;
  }

  &__link {
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

  &__link-text {
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
}
</style>
