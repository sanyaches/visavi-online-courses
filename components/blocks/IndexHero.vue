<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__header">
        <div class="hero__text">
          <h1 class="hero__main-title">
            <span>{{ $t('hero_block_title') }}</span>
            <div class="hero__title-ampersand">
              &
            </div>
            <span class="second">{{ $t('hero_block_title_second') }}</span>
          </h1>
          <h2 class="hero__subtitle">
            {{ $t('hero_block_subtitle') }}
          </h2>
          <div class="hero__buttons">
            <nuxt-link
              to="#main-single-lessons"
              class="hero__link button button--brown-dark button button--large"
            >
              {{ $t('hero_block_to_lessons') }}
            </nuxt-link>
            <nuxt-link
              to="#main-myself-benefits"
              class="hero__link button button--beige button button--large"
            >
              {{ $t('hero_block_to_services') }}
            </nuxt-link>
          </div>
        </div>
        <div class="hero__image">
          <img src="@/assets/images/hero-image.png">
          <div class="hero__image-circle" />
        </div>
        <div class="hero__description" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 1rem 0 6rem;
  background: #b6a498;
  overflow: hidden;

  @media screen and (max-width: 980px) {
    padding: 1.5rem 0 4rem;
  }

  &__container {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 1480px;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;

    @media screen and (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  &__main-title {
    color: #ffffff;
    font-size: 4rem;
    text-transform: uppercase;
    font-family: var(--title-font-family);
    font-weight: 500;
    line-height: 100%;

    @media screen and (max-width: 1200px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 980px) {
      font-size: 2.4rem;
    }

  }

  &__title-ampersand {
    font-size: 3rem;
    line-height: 100%;
    font-family: var(--cormorant-font-family);

    @media screen and (max-width: 980px) {
      font-size: 2.2rem;
    }
  }

  &__subtitle {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-family: var(--handwrite-font-family);
    font-size: 3rem;

    @media screen and (max-width: 980px) {
      font-size: 2.4rem;
      margin-top: 0.3rem;
    }
  }

  &__buttons {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media screen and (max-width: 980px) {
      margin-top: 1rem;
      gap: 0.8rem;
      z-index: 3;
    }
  }

  &__link {
    display: block;
    width: 200px;
  }

  &__image {
    position: relative;
    z-index: 2;

    @media screen and (max-width: 1550px) {
      width: 480px;

      img {
        width: 100%;
        height: auto;
      }
    }

    @media screen and (max-width: 1050px) {
      width: 320px;
      margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
      width: 275px;
    }
  }

  &__image-circle {
    position: absolute;
    top: 30px;
    left: -125px;
    width: 850px;
    height: 850px;
    border: 1px solid #33333327;
    border-radius: 50%;
    z-index: -1;

    @media screen and (max-width: 1550px) {
      width: 700px;
      height: 700px;
      left: -100px;
      top: 20px;
    }

    @media screen and (max-width: 1250px) {
      left: -220px;
      top: 10px;
    }

    @media screen and (max-width: 1050px) {
      width: 600px;
      height: 600px;
      left: -140px;
      top: -80px;
    }

    @media screen and (max-width: 480px) {
      width: 400px;
      height: 400px;
      left: -100px;
      top: -80px;
    }
  }
}
</style>
