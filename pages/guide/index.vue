<template>
  <div class="guide">
    <ModalsGuideBuyModal />

    <div class="guide-hero desktop">
      <nuxt-link v-if="$i18n.locale === 'ru'" class="guide-hero__translate-button" :to="switchLocalePath('en')">
        ENG
      </nuxt-link>
      <!-- <nuxt-link v-if="$i18n.locale === 'en'" class="guide-hero__translate-button" :to="switchLocalePath('ru')">
        RU
      </nuxt-link> -->
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
              <button class="guide-hero__button" @click="buyGuide">
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
            <button class="guide-hero__button" @click="buyGuide">
              {{ $t('guide_hero_button') }}
            </button>
          </p>
        </div>
      </div>
    </div>

    <div class="guide-whom">
      <h2 class="glitch guide-whom__title">
        {{ $t('guide_whom_title') }}
      </h2>
      <p>
        {{ $t('guide_whom_subtitle') }}
      </p>
      <div class="guide-whom__grid">
        <div class="guide-whom__item white-box">
          <img class="guide-whom__item-image" src="@/assets/images/guide/item-head.png">
          {{ $t('guide_whom_item1') }}
        </div>
        <div class="guide-whom__item white-box">
          <img class="guide-whom__item-image" src="@/assets/images/guide/item-time.png">
          {{ $t('guide_whom_item2') }}
        </div>
        <div class="guide-whom__item white-box">
          <img class="guide-whom__item-image" src="@/assets/images/guide/item-fire.png">
          {{ $t('guide_whom_item3') }}
        </div>
        <div class="guide-whom__item white-box">
          <img class="guide-whom__item-image" src="@/assets/images/guide/item-stars.png">
          {{ $t('guide_whom_item4') }}
        </div>
      </div>
      <img src="@/assets/images/guide/dot-red.png" class="first-dot">
      <img src="@/assets/images/guide/dot-yellow.png" class="second-dot">
      <img src="@/assets/images/guide/dot-orange.png" class="third-dot">
    </div>

    <div class="guide-abilities">
      <h2 class="guide-abilities__title desktop" v-html="$t('guide_abilities_title')" />
      <h2 class="guide-abilities__title mobile" v-html="$t('guide_abilities_title_mobile')" />
      <div class="guide-abilities__grid">
        <div class="guide-abilities__item white-box">
          <img class="guide-abilities__item-image" src="@/assets/images/guide/thanks-to1.png">
          {{ $t('guide_abilities_item1') }}
        </div>
        <div class="guide-abilities__item white-box">
          <img class="guide-abilities__item-image" src="@/assets/images/guide/thanks-to2.png">
          {{ $t('guide_abilities_item2') }}
        </div>
        <div class="guide-abilities__item white-box">
          <img class="guide-abilities__item-image" src="@/assets/images/guide/thanks-to3.png">
          {{ $t('guide_abilities_item3') }}
        </div>
        <div class="guide-abilities__item white-box">
          <img class="guide-abilities__item-image" src="@/assets/images/guide/thanks-to4.png">
          {{ $t('guide_abilities_item4') }}
        </div>
      </div>
    </div>

    <div class="guide-about">
      <div class="guide-about__card white-box">
        <div class="guide-about__avatar">
          <img src="@/assets/images/guide/avatar.jpg">
        </div>
        <h3 class="guide-about__title">
          {{ $t('guide_about_title') }}
        </h3>
        <p class="guide-about__subtitle" v-html="$t('guide_about_subtitle')" />
        <div class="guide-about__box" v-html="$t('guide_about_description')" />
      </div>
    </div>

    <div class="guide-reviews">
      <h2 class="guide-reviews__title glitch">
        {{ $t('guide_reviews_title') }}
      </h2>
      <div class="guide-reviews__grid">
        <template v-if="$i18n.locale === 'ru'">
          <div>
            <img src="@/assets/images/guide/review1.png">
          </div>
          <div>
            <img src="@/assets/images/guide/review2.png">
            <img src="@/assets/images/guide/review3.png">
          </div>
          <div>
            <img src="@/assets/images/guide/review4.png">
          </div>
        </template>
        <template v-else>
          <div>
            <img src="@/assets/images/guide/review-1-en.png">
          </div>
          <div>
            <img src="@/assets/images/guide/review-2-en.png">
            <img src="@/assets/images/guide/review-3-en.png">
          </div>
          <div>
            <img src="@/assets/images/guide/review-4-en.png">
          </div>
        </template>
      </div>
      <img src="@/assets/images/guide/ellipse-red.png" class="guide-reviews__cloud guide-reviews__cloud1">
      <img src="@/assets/images/guide/ellipse-beige.png" class="guide-reviews__cloud guide-reviews__cloud2">
      <img src="@/assets/images/guide/ellipse-green.png" class="guide-reviews__cloud guide-reviews__cloud3">
    </div>

    <div class="guide-cta">
      <img class="desktop" src="@/assets/images/guide/cta-image.png">
      <img class="mobile" src="@/assets/images/guide/cta-image-mobile.png">

      <div class="guide-cta__content">
        <p class="desktop" v-html="$t('guide_cta_text')" />
        <p class="mobile white-box" v-html="$t('guide_cta_text')" />
        <button class="guide-cta__button desktop" @click="buyGuide">
          {{ $t('guide_cta_button') }}
        </button>
      </div>

      <button class="guide-cta__button mobile" @click="buyGuide">
        {{ $t('guide_cta_button') }}
      </button>
    </div>

    <div class="guide-agreement">
      <div class="guide-agreement__socials">
        <a target="_blank" href="https://t.me/vi_kosto/">
          <font-awesome-icon class="social-icon" icon="fa-brands fa-telegram" />
        </a>
        <a target="_blank" href="https://wa.me/905542890793/">
          <font-awesome-icon class="social-icon" icon="fa-brands fa-whatsapp" />
        </a>
      </div>
      <nuxt-link :to="localePath('/guide/agreement')">
        {{ $t('guide_agreement') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'no-header',

  methods: {
    ...mapActions({
      changeShowModal: 'guide-form/changeShowModal'
    }),

    buyGuide () {
      this.changeShowModal(true)
    }
  }
}
</script>

<style lang="scss">
.glitch {
  font-family: 'Rubik Glitch', cursive !important;
}

.guide-about__tag {
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 2px;
  color: #333;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    // font-size: 0.8rem;
    display: block;
    margin: 0;
    width: max-content;
  }
}

.guide-cta__highlight-text {
  color: #debf5c;
  font-weight: 600;
}
</style>
<style lang="scss" scoped>
.white-box {
  padding: 18px 28px 35px;
  color: #262626;
  position: relative;
  background: #FBFBFB;
  box-shadow: 0px 0px 14px rgba(44, 44, 44, 0.2);
  border-radius: 16px;
}

.desktop.guide-hero {
  .guide-hero__title {
    color: #fff;
    font-size: 5.5rem;
    margin-bottom: 0;

    @media (max-width: 1500px) {
      font-size: 4.2rem;
    }

    .float-text {
      z-index: 10;
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
    z-index: 5;

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
    margin-bottom: 1rem;
  }
}

.guide-hero {
  &__translate-button {
    position: absolute;
    top: 3rem;
    left: 3rem;
    color: white;
    z-index: 9;
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

.guide-whom {
  position: relative;
  overflow: hidden;

  &__title {
    font-size: 3.5rem;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    color: #504947;
    letter-spacing: 0.8px;

    @media screen and (max-width: 981px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    max-width: 450px;
    margin: 0 auto 1.3rem;
    text-align: center;
    font-family: var(--raleway-font-family);
  }

  &__grid {
    padding: 70px 70px 210px;
    display: flex;
    gap: 1.5rem;
    position: relative;

    @media screen and (max-width: 981px) {
      flex-direction: column;
      gap: 2rem;
      padding: 30px;
    }
  }

  &__item {
    padding: 2rem 2.5rem;
    font-size: 1.5rem;
    font-family: var(--raleway-font-family);
    position: relative;
    z-index: 2;
    line-height: 116%;
    color: #262626;

    &:nth-child(2n) {
      top: 20px;
    }

    @media screen and (max-width: 981px) {
      font-size: 1.2rem;
      &.white-box {
        padding: 1.5rem 1.5rem 1.5rem 4.5rem;
        margin-bottom: 0;
      }
      &:nth-child(2n) {
        top: 0;
      }
    }
  }

  &__item-image {
    position: absolute;
    left: 1rem;
    top: 50%;
    width: 2.6rem;
    transform: translateY(-50%);

    @media screen and (min-width: 982px) {
      display: none;
    }
  }

  img.first-dot {
    position: absolute;
    top: 13%;
    left: 8%;
    z-index: -1;

    @media screen and (max-width: 981px) {
      top: 10%;
      z-index: -1;
      width: 400px;
    }
  }

  img.second-dot {
    position: absolute;
    top: 0;
    left: 22%;
    z-index: -1;

    @media screen and (max-width: 981px) {
      display: none;
    }
  }

  img.third-dot {
    position: absolute;
    top: 6%;
    left: 55%;
    z-index: -1;

    @media screen and (max-width: 981px) {
      top: 50%;
      left: -25%;
      z-index: -1;
      width: 400px;
    }
  }
}

.guide-abilities {
  background-color: #191717;

  &__title {
    font-size: 3rem;
    padding-top: 6rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    letter-spacing: 0.8px;
    z-index: 1;
    position: relative;

    @media screen and (max-width: 981px) {
      font-size: 2.5rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4.5rem;
    padding: 70px 70px 120px;
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 30px 30px 70px;
      gap: 3.5rem;
    }
  }

  &__item {
    font-size: 1.2rem;
    position: relative;
    z-index: 1;

    &.white-box {
      padding: 2.5rem 1.5rem 1.5rem;
    }
  }

  &__item-image {
    position: absolute;
    padding: 0.1rem;
    border-radius: 100%;
    animation: zoom-in-zoom-out 2s ease infinite;
    background-color: #fff;
    position: absolute;
    top: -30px;
    width: 50px;
    left: calc(50% - 25px);
    text-align: center;
    line-height: 50px;
    box-shadow: 0px 0px 5px rgba(44, 44, 44, 0.5);

    img {
      width: 100%;
    }
  }
}

.guide-about {
  padding: 8rem 1rem 4rem;

  @media screen and (max-width: 981px) {
    padding: 8rem 1rem 1rem;
  }

  &__card {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 74px 100px 100px;

    @media screen and (max-width: 981px) {
      padding: 60px 18px 30px;
    }
  }

  &__avatar {
    position: absolute;
    width: 80px;
    height: 80px;
    top: -40px;
    left: calc(50% - 40px);
    border-radius: 100%;
    border: 2px solid white;
    box-shadow: 0px 0px 14px rgba(44, 44, 44, 0.2);

    img {
      width: 100%;
      border-radius: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title,
  &__subtitle {
    text-align: center;
  }

  &__title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 1.1rem;
    font-weight: 400;
  }

  &__box {
    font-size: 21px;
    border-radius: 16px;
    padding: 45px;
    color: white;
    margin: 30px 60px;
    background: linear-gradient(90deg, #806e56 0%, #544536 100%);
    box-shadow: 0px 0px 14px rgba(44, 44, 44, 0.2);

    @media screen and (max-width: 981px) {
      margin: 30px 2px 60px;
      padding: 30px;
      font-size: 1.15rem;
    }
  }
}

.guide-reviews {
  position: relative;
  overflow: hidden;

  &__title {
    font-size: 4.2rem;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    color: #504947;
    background: -webkit-linear-gradient(#cfa396, #8d7f7c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;

    @media screen and (max-width: 981px) {
      font-size: 3.8rem;
    }
  }

  &__grid {
    padding: 70px 20px;
    display: flex;
    gap: 10px;
    position: relative;

    @media screen and (max-width: 981px) {
      flex-direction: column;
      text-align: center;
      padding: 0 10px 40px;
    }
  }

  &__grid div {
    z-index: 5;
    flex: 1;
    position: relative;
  }

  &__grid div img {
    max-width: 100%;
  }

  &__cloud {
    position: absolute;
    z-index: -1;
  }

  &__cloud1 {
    top: -4rem;
    left: -50%;

    @media screen and (min-width: 982px) {
      top: -3rem;
      left: -20%;
    }
  }

  &__cloud2 {
    top: 22%;
    left: 50%;

    @media screen and (min-width: 982px) {
      top: 15%;
      left: 55%;
    }
  }

  &__cloud3 {
    top: 45%;
    display: none;
    left: 0;

    @media screen and (min-width: 982px) {
      top: 35%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.guide-cta {
  margin-top: 250px;
  font-size: 3.2rem;
  position: relative;

  @media screen and (max-width: 981px) {
    font-size: 2rem;
    margin-top: 200px;
  }

  img {
    width: 100%;
    display: block;
  }

  &__content {
    position: absolute;
    width: 34%;
    top: 300px;
    line-height: 120%;
    left: 100px;
    color: #fff;

    @media screen and (max-width: 1480px) {
      top: 120px;
      left: 50px;
    }

    @media screen and (max-width: 981px) {
      width: 100%;
      top: -25px;
      left: 0;
      padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      top: -145px;
      left: 0;
      padding: 0 20px;
    }
  }

  &__button {
    border-width: 0;
    position: relative;
    left: 130px;
    top: 50px;
    font-size: 2.5rem;
    display: inline-block;
    padding: 27px;
    font-size: 40px;
    border-radius: 28px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    animation: 2s linear 0s infinite normal shaking;
    box-shadow: -2px 2px 15px 3px rgba(255, 255, 255, 0.3);

    @media screen and (max-width: 981px) {
      position: absolute;
      bottom: 100px;
      top: unset;
      font-size: 1.3rem;
      padding: 20px;
      width: 200px;
      left: calc(50% - 100px);
      background-color: #333;
      color: #fff;
    }
  }
}

.guide-agreement {
  padding: 40px 0;
  background-color: #191717;
  color: #fff;
  text-align: center;

  a {
    color: #fff;
    text-decoration: underline;
    display: block;
    font-size: 1.1rem;
  }

  &__socials {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
    gap: 20px;

    a {
      font-size: 1.8rem;
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

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
