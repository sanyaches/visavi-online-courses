<template>
  <div class="author">
    <b-container>
      <div class="author__content desktop">
        <div class="author__text">
          <h2 class="author__title">
            {{ $t('index.author_title') }}
          </h2>

          <div class="author__description">
            <p>
              {{ $t('index.author_description_1') }}
            </p>
            <p>
              {{ $t('index.author_description_2') }}
            </p>
            <p>
              {{ $t('index.author_description_3') }}
            </p>
            <div class="author__button">
              <nuxt-link
                to="#main-courses"
                class="button button--beige button button--large"
              >
                {{ $t('index.author_want_study') }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="author__image">
          <img src="@/assets/images/viktoriia.png">
          <div class="author__image-circle" />
          <div class="author__signature">
            <div>Victoria</div>
            <div>Kosto</div>
          </div>
        </div>
      </div>
      <div class="author__content mobile">
        <h2 class="author__title">
          {{ $t('index.author_title') }}
        </h2>
        <div class="author__flexbox">
          <div class="author__description">
            <p>
              {{ $t('index.author_description_mobile') }}
            </p>
            <div class="author__signature">
              <div>Victoria</div>
              <div>Kosto</div>
            </div>
          </div>
          <div class="author__image">
            <img src="@/assets/images/viktoriia.png">
            <div class="author__image-circle" />
          </div>
        </div>
        <div class="author__button">
          <nuxt-link
            to="#main-courses"
            class="button button--beige button button--large"
          >
            {{ $t('index.author_want_study') }}
          </nuxt-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
.author {
  padding: 2rem 0;
  overflow: hidden;

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__content.desktop {
    display: flex;

    @media screen and (max-width: 991px) {
      display: none;
    }
  }

   &__content.mobile {
    display: none;

    @media screen and (max-width: 991px) {
      display: block;
    }
  }

  .mobile &__flexbox {
    display: flex;
    margin-top: 2rem;
  }

  &__text {
    padding-top: 4rem;
  }

  &__description {
    .desktop & {
      margin-top: 4rem;
    }

    .mobile & {
      min-width: 180px;
    }
  }

  &__image {
    position: relative;
    margin-left: 3rem;
    z-index: 2;

    .mobile & {
      margin-left: 5px;
      min-width: 170px;
      margin-top: 1rem;

      @media screen and (min-width: 768px) {
        min-width: 250px;
        margin-top: 0;
      }

      @media screen and (max-width: 370px) {
        min-width: 140px;
        margin-top: 0;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &__image-circle {
    position: absolute;
    top: 30px;
    left: 0px;
    width: 560px;
    height: 560px;
    border: 1px solid #33333327;
    border-radius: 50%;
    z-index: -1;

    @media screen and (max-width: 991px) {
      width: 340px;
      height: 340px;
    }

    @media screen and (max-width: 768px) {
      width: 230px;
      height: 230px;
      top: 15px;
    }

    @media screen and (max-width: 370px) {
      width: 160px;
      height: 160px;
      top: 25px;
    }
  }

  &__signature {
    font-size: 3.5rem;
    transform: rotate(-15deg);
    font-weight: 500;
    font-family: var(--handwrite-font-family);
    line-height: 100%;

    .desktop & {
      position: absolute;
      left: -10rem;
      bottom: 0;
    }

    .mobile & {
      font-size: 3rem;
    }
  }

  &__button {
    display: inline-flex;
    margin-top: 1.5rem;

    .mobile & {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
