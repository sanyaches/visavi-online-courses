<template>
  <div>
    <Header />
    <Nuxt />
    <CheckoutModal />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import CheckoutModal from '@/components/CheckoutModal.vue'

export default {
  components: {
    Header,
    CheckoutModal
  }
}
</script>
