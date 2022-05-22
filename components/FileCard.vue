<template>
  <div class="file-card">
    <a :href="file.resourceUrl" download>
      <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
      <span>
        {{ file.title }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.file-card {
  width: 20rem;

  a {
    display: block;
    padding: 2rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }

  a svg {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
