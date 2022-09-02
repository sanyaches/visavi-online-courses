<template>
  <div id="main-courses-myself" class="index-learned">
    <b-container>
      <div class="index-learned__header">
        <h2 class="index-learned__title">
          {{ $t('index.learned.title') }}
        </h2>
      </div>
      <ul class="index-learned__list">
        <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.first') }}</div>
        </li>
        <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.second') }}</div>
        </li>
        <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.third') }}</div>
        </li>
        <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.fourth') }}</div>
        </li>
        <!-- <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.fifth') }}</div>
        </li>
        <li class="index-learned__list-item">
          <div class="index-learned__list-item-circle" />
          <div>{{ $t('index.learned.list.sixth') }}</div>
        </li> -->
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexLearned'
}
</script>

<style lang="scss" scoped>
.index-learned {
  background-color: #b6a498;
  color: white;
  padding: 2rem 0 0;
  border-bottom: 1px solid #fff;

  &__header {
    margin-bottom: 2rem;
  }

  &__title {
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  &__list {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    flex-wrap: wrap;
  }

  &__list-item {
    margin-bottom: 42px;
    padding-right: 12px;
    overflow: hidden;
    position: relative;
    padding-right: 20px;
    text-align: left;
    box-sizing: border-box;
    flex: 0 0 260px;
    font-size: 1.1rem;
    font-weight: 500;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: rgba(121, 103, 92,.6);
      position: absolute;
      top: 20px;
      left: 0;
      z-index: 1;
    }

    @media screen and (max-width: 1200px) {
      flex: 0 0 220px;
    }

    @media screen and (max-width: 991px) {
      flex: 0 0 170px;
    }

    @media screen and (max-width: 480px) {
      flex: 0 0 50%;
      margin-bottom: 25px;
    }

    @media screen and (max-width: 340px) {
      flex: 0 0 100%;
    }
  }

  &__list-item-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #79675c;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
  }
}
</style>
