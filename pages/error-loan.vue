<template>
  <div>
    <b-container>
      <h1 class="mt-5">
        Произошла ошибка при оформлении кредита или банк не смог одобрить вашу заявку. Попробуйте снова.
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
    }, 10000)
  }
}
</script>

<style>

</style>
