<template>
  <div class="header">
    <b-container>
      <div class="header__content">
        <span>VISAVI</span>
        <nuxt-link :to="localePath('login')" class="button--green">
          {{ $t('index.login') }}
        </nuxt-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #f8f8f8;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
  }
}
</style>
