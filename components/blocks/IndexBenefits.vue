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
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-regular fa-clock" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.first.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.first.content') }}
          </div>
        </div>
        <div class="benefits__item">
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-regular fa-money-bill-1" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.second.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.second.content') }}
          </div>
        </div>
        <div class="benefits__item">
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-regular fa-star" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.third.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.third.content') }}
          </div>
        </div>
        <div class="benefits__item">
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-regular fa-eye" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.fourth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.fourth.content') }}
          </div>
        </div>
        <div class="benefits__item">
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-solid fa-arrow-trend-up" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.fifth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.fifth.content') }}
          </div>
        </div>
        <div class="benefits__item">
          <div class="benefits__item-icon">
            <font-awesome-icon icon="fa-regular fa-comment-dots" />
          </div>
          <div class="benefits__item-title">
            {{ $t('index.benefits.list.sixth.title') }}
          </div>
          <div class="benefits__item-description">
            {{ $t('index.benefits.list.sixth.content') }}
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
  }

  &__item {
    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__item-icon {
    font-size: 3rem;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #b6a498;
    width: 80px;
    height: 80px;
    line-height: 1;

    @media screen and (max-width: 991px) {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }
  }

  &__item-title {
    margin-top: 2rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;

    @media screen and (max-width: 991px) {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }

  &__item-description {
    margin-top: 0.6rem;

    @media screen and (max-width: 991px) {
      margin-top: 0.3rem;
      display: none;
    }
  }
}
</style>
