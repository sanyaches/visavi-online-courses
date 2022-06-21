<template>
  <div>
    <b-container>
      <h1 class="mt-5">
        {{ $t('error_payment.title') }}
      </h1>
    </b-container>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    }
  },

  mounted () {
    setTimeout(() => {
      window.location.href = ''
    }, 5000)
  }
}
</script>

<style>

</style>
