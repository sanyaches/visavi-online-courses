<template>
  <div class="guide">
    <div class="guide-hero desktop">
      <nuxt-link v-if="$i18n.locale === 'ru'" class="guide-hero__translate-button" :to="switchLocalePath('en')">
        ENG
      </nuxt-link>
      <nuxt-link v-if="$i18n.locale === 'en'" class="guide-hero__translate-button" :to="switchLocalePath('ru')">
        RU
      </nuxt-link>
      <div class="guide-hero__main">
        <div class="color-block" />
        <div class="guide-hero__image">
          <img class="desktop" src="@/assets/images/guide/hero-desktop.jpg">
        </div>
        <h2 class="glitch guide-hero__title">
          <div class="left-text float-text" v-html="$t('guide_hero_phrase_html')" />
          <div class="right-text float-text">
            <p>{{ $t('guide_hero_subtitle') }}</p>
            <p>
              <button class="guide-hero__button">
                {{ $t('guide_hero_button') }}
              </button>
            </p>
          </div>
        </h2>
        <div class="color-block" />
      </div>
    </div>
    <div class="guide-hero mobile">
      <nuxt-link v-if="$i18n.locale === 'ru'" class="guide-hero__translate-button" :to="switchLocalePath('en')">
        ENG
      </nuxt-link>
      <nuxt-link v-if="$i18n.locale === 'en'" class="guide-hero__translate-button" :to="switchLocalePath('ru')">
        RU
      </nuxt-link>
      <div class="guide-hero__main">
        <img src="@/assets/images/guide/hero-mobile.jpg">
        <div class="color-block">
          <p class="glitch" v-html="$t('guide_hero_phrase_html')" />
          <p>{{ $t('guide_hero_subtitle') }}</p>
          <p>
            <button class="guide-hero__button">
              {{ $t('guide_hero_button') }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-header'
}
</script>

<style lang="scss" scoped>
.glitch {
  font-family: 'Rubik Glitch', cursive;
}

.desktop.guide-hero {
  .guide-hero__title {
    color: #f2f2f2;
    font-size: 5.5rem;
    margin-bottom: 0;

    @media (max-width: 1500px) {
      font-size: 4.2rem;
    }

    .float-text {
      z-index: 5000;
      position: absolute;
      bottom: 33%;
    }

    .left-text {
      position: absolute;
      left: 4%;
      text-align: left;
    }

    .right-text {
      position: absolute;
      right: 4%;
      text-align: right;
    }

    p {
      color: #fff;
      font-size: 1.4rem;
      max-width: 450px;
      margin: 0 auto 1.3rem;
      font-family: var(--raleway-font-family);
    }

    .guide-hero__button {
      font-size: 1.6rem;
      padding: 10px 25px;
      border-radius: 15px;
      animation: 2s linear 0s infinite normal shaking;
      box-shadow: -2px 2px 15px 3px rgba(255,255,255,0.3);
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
      background-color: #fff;
      color: #0a0a0a;
      display: inline-block;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  .guide-hero__main {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .color-block {
    --gutter: 150px;
    width: calc((100% - var(--gutter)) / 2);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #090909 73.9%, rgba(9, 9, 9, 0) 100%);
    z-index: 500;

    @media (max-width: 1500px) {
      --gutter: 350px;
    }

    &:last-child {
      transform: rotate(-180deg);
      right: 0;
      left: unset;
      height: 100%;
    }
  }

  .guide-hero__image {
    width: 650px;
    height: auto;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
}

.mobile.guide-hero {
  .guide-hero__main {
    position: relative;
  }

  img {
    width: 100%;
  }

  .color-block {
    background: linear-gradient(0deg, #090909 30.94%, rgba(9, 9, 9, 0) 82.29%);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  p.glitch {
    font-size: 2.5rem;
    margin-top: 300px;
  }

  p {
    color: #fff;
    text-align: center;
    max-width: 300px;
    margin: 0 auto 1.3rem;
  }

  .guide-hero__button {
    font-size: 1.3rem;
    padding: 10px 25px;
    border-radius: 15px;
    animation: 2s linear 0s infinite normal shaking;
    box-shadow: -2px 2px 15px 3px rgba(255,255,255,0.3);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    background-color: #fff;
    color: #0a0a0a;
    display: inline-block;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
  }
}

.guide-hero {
  &__translate-button {
    position: absolute;
    top: 3rem;
    left: 3rem;
    color: white;
    z-index: 9999;
    padding: 0.9rem 1.5rem;
    font-size: 1.1rem;
    line-height: 1.55;
    font-weight: 800;
    text-transform: uppercase;
    border-width: 0px;
    border-radius: 15px;
    background-position: center center;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    box-shadow: -1px 4px 20px 6px rgba(255,255,255,0.2);
    background-color: rgba(255,255,255,0.05);

    &:hover {
      background-color: #888;
    }

    @media screen and (max-width: 981px){
      background-color: rgba(255,255,255,0.4);
      top: 2rem;
      left: 1rem;
    }
  }
}

.guide .mobile {
  display: block;

  @media screen and (min-width: 981px) {
    display: none;
  }
}

.guide .desktop {
  display: none;

  @media screen and (min-width: 981px) {
    display: block;
  }
}

@keyframes shaking {
  0% {
    transform: rotate(0deg);
  }
  5% {
      transform: rotate(2deg);
  }
  10% {
      transform: rotate(0eg);
  }
  15% {
      transform: rotate(-2deg);
  }
  20% {
      transform: rotate(0deg);
  }
  25% {
      transform: rotate(2deg);
  }
  30% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(0deg);
  }
}
</style>
