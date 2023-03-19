<template>
  <div>
    <Nuxt />
    <CheckoutModal />
  </div>
</template>

<script>
import CheckoutModal from '@/components/CheckoutModal.vue'

export default {
  components: {
    CheckoutModal
  }
}
</script>
