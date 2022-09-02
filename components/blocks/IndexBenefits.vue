<template>
  <div class="benefits">
    <b-container>
      <div class="benefits__header">
        <h2 class="benefits__title">
          {{ $t('index.benefits.title') }}
        </h2>
      </div>
      <div class="benefits__list">
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.first.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.first.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.first.content') }}
          </div>
          <div class="benefits__item-number">
            1
          </div>
        </div>
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.second.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.second.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.second.content') }}
          </div>
          <div class="benefits__item-number">
            2
          </div>
        </div>
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.third.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.third.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.third.content') }}
          </div>
          <div class="benefits__item-number">
            3
          </div>
        </div>
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.fourth.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.fourth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.fourth.content') }}
          </div>
          <div class="benefits__item-number">
            4
          </div>
        </div>
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.fifth.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.fifth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.fifth.content') }}
          </div>
          <div class="benefits__item-number">
            5
          </div>
        </div>
        <div class="benefits__item">
          <div v-if="$te('index.benefits.list.sixth.title')" class="benefits__item-title">
            {{ $t('index.benefits.list.sixth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.sixth.content') }}
          </div>
          <div class="benefits__item-number">
            6
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexBenefits'
}
</script>

<style lang="scss" scoped>
.benefits {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 1.5rem 0 2.5rem;
  }

  &__title {
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;
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
    column-gap: 4rem;
    row-gap: 3rem;
    padding-top: 4rem;
    grid-template-columns : 1fr 1fr 1fr;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      row-gap: 2rem;
      padding-top: 2rem;
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
      padding-top: 1.2rem;
    }
  }

  &__item {
    position: relative;
  }

  &__item-number {
    position: absolute;
    top: -3rem;
    left: 1rem;
    font-family: 'Raleway', sans-serif;
    opacity: 0.3;
    z-index: 0;
    color: #b6a498;
    font-size: 12rem;
    line-height: 1;

    @media screen and (max-width: 991px) {
      font-size: 12rem;
    }

    @media screen and (max-width: 480px) {
      opacity: 0.25;
      top: -2rem;
      font-size: 10rem;
    }
  }

  &__item-title {
    margin-top: 2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 700;

    @media screen and (max-width: 991px) {
      margin-top: 1rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.95rem;
      margin-top: 0.5rem;
    }
  }

  &__item-description {
    margin-top: 0.6rem;

    @media screen and (max-width: 991px) {
      margin-top: 0.3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
}
</style>
