<template>
  <div class="main-review-card">
    <div class="main-review-card__content">
      <img :src="imageSrc" loading="lazy">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.main-review-card {
  --main-review-card-bg: var(--vk-gray-2);

  display: flex;
  flex-direction: column;
  height: 100%;

  &__content {
    flex-grow: 1;
  }

  &__content img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }

  &__title {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--vk-gray-1);
    margin-top: 1.2rem;
    padding-left: 1.4rem;

    @media screen and (max-width: 1199px) {
      font-size: 1.2rem;
    }
  }
}
</style>
