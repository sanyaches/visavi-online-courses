<template>
  <div class="author">
    <b-container>
      <div class="author__content desktop">
        <div class="author__image">
          <picture>
            <source srcset="@/assets/images/vika3.webp">
            <img src="@/assets/images/vika3.png" loading="lazy">
          </picture>
          <div class="author__image-circle" />
        </div>

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
          </div>

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
        <div class="author__gridbox">
          <div class="author__image">
            <picture>
              <source srcset="@/assets/images/vika3.webp">
              <img src="@/assets/images/vika3.png">
            </picture>
            <div class="author__image-circle" />
            <div class="author__signature">
              <div>Victoria</div>
              <div>Kosto</div>
            </div>
          </div>
          <div class="author__description">
            <p>
              {{ $t('index.author_description_mobile') }}
            </p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
.author {
  padding: 4rem 0;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding: 2rem 0;
  }

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
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 5rem;

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

  .mobile &__gridbox {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    margin-top: 1.2rem;
  }

  &__text {
    padding-top: 4rem;
    position: relative;
  }

  &__description {
    text-align: left;

    .desktop & {
      margin-top: 4rem;
      padding-bottom: 9rem;
    }

    .mobile & {
      text-align: right;
      margin-top: 1rem;
      font-size: 1.2rem;

      @media screen and (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }

  &__image {
    position: relative;
    z-index: 2;

    .mobile & {
      margin-right: 5px;
      margin-top: 1rem;
    }

    img {
      width: 100%;
      height: auto;
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
      font-size: 4rem;
      position: absolute;
      right: 2rem;
      bottom: 1rem;
    }

    .mobile & {
      font-size: 2.8rem;
      padding-top: 0.5rem;
    }
  }
}
</style>
