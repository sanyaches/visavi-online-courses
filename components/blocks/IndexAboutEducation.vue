<template>
  <div class="about">
    <b-container>
      <div class="about__header">
        <h2 class="about__title">
          {{ $t('index.about_title') }}
        </h2>
      </div>

      <div class="about__list">
        <div class="about__list-item">
          <div class="about__list-item-number">
            01
          </div>
          <div class="about__list-item-content">
            <h3 class="about__list-item-title">
              {{ $t('index.about.item_1.title') }}
              <br>
              {{ $t('index.about.item_1.title_second_line') }}
            </h3>

            <p>{{ $t('index.about.item_1.description') }}</p>
          </div>
        </div>
        <div class="about__list-item">
          <div class="about__list-item-number">
            02
          </div>
          <div class="about__list-item-content">
            <h3 class="about__list-item-title">
              {{ $t('index.about.item_2.title') }}
              <br>
              {{ $t('index.about.item_2.title_second_line') }}
            </h3>
            <p>{{ $t('index.about.item_2.description') }}</p>
          </div>
        </div>
        <div class="about__list-item">
          <div class="about__list-item-number">
            03
          </div>
          <div class="about__list-item-content">
            <h3 class="about__list-item-title">
              {{ $t('index.about.item_3.title') }}
              <br>
              {{ $t('index.about.item_3.title_second_line') }}
            </h3>
            <p>{{ $t('index.about.item_3.description') }}</p>
          </div>
        </div>
        <div class="about__list-item">
          <div class="about__list-item-number">
            04
          </div>
          <div class="about__list-item-content">
            <h3 class="about__list-item-title">
              {{ $t('index.about.item_4.title') }}
              <br>
              {{ $t('index.about.item_4.title_second_line') }}
            </h3>
            <p>{{ $t('index.about.item_4.description') }}</p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 3rem 0;
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__list {
    display: grid;
    grid-gap: 2rem;
    padding-top: 5rem;
    grid-template-columns : 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 991px) {
      grid-template-columns : 1fr;
      padding-top: 4rem;
      grid-gap: 4rem;
    }
  }

  &__list-item {
    position: relative;
    z-index: 2;
  }

  &__list-item-number {
    position: absolute;
    opacity: 0.3;
    z-index: 1;
    top: -4.5rem;
    left: 0;
    color: #b6a498;
    font-size: 8rem;
    line-height: 100%;
    font-weight: 500;
    font-family: var(--font-family-cormorant);

    @media screen and (max-width: 991px) {
      top: -5.5rem;
      font-size: 9rem;
    }
  }

  &__list-item-title {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;

    @media screen and (max-width: 1199px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 991px) {
      font-size: 1.3rem;
    }
  }
}
</style>
