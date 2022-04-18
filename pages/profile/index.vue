<template>
  <div class="profile">
    <b-container>
      <h1>{{ getWelcomeText }}</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    getWelcomeText () {
      return this.$t('profile.welcome', { name: 'admin' })
    }
  }
}
</script>
