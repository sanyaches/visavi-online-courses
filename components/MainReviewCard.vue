<template>
  <div class="main-review-card">
    <div class="main-review-card__content">
      {{ content }}
    </div>
    <div class="main-review-card__title">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.main-review-card {
  --main-review-card-bg: var(--vk-beige-1);

  display: flex;
  flex-direction: column;
  height: 100%;

  &__content {
    padding: 1.6rem 3.2rem;
    font-size: 1rem;
    border-radius: 5px;
    background-color: var(--main-review-card-bg);
    font-family: 'Raleway', sans-serif;
    text-align: left;
    flex-grow: 1;
    position: relative;

    &::after {
      content: '';
      width: 1rem;
      height: 1rem;
      background-color: var(--main-review-card-bg);
      position: absolute;
      left: 2rem;
      bottom: -0.5rem;
      transform: rotate(45deg);
    }
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
