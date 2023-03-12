<template>
  <b-modal id="bv-modal-reach-out" hide-footer :visible="showModal" class="reach-out-modal" @change="changeShowModal">
    <template #modal-title>
      {{ $t('reach_out.title') }}
    </template>
    <div class="reach-out__links">
      <a class="reach-out__link" :href="instagramLink">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a class="reach-out__link" :href="telegramLink">
        <font-awesome-icon icon="fa-brands fa-telegram" />
      </a>
      <a class="reach-out__link" :href="whatsappLink">
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
      </a>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent)

export default {
  data () {
    return {
      isMobile: false
    }
  },

  computed: {
    ...mapGetters({
      showModal: 'reachOut/getShowModal',
      service: 'reachOut/getService'
    }),
    message () {
      if (this.service) {
        return this.$t(`reach_out.message.${this.service}`)
      }

      return this.$t('reach_out.message.default')
    },
    instagramLink () {
      return 'https://ig.me/m/vi.kosto'
    },
    whatsappLink () {
      const encodedMessage = encodeURIComponent(this.message)
      return 'https://wa.me/905542890793?text=' + encodedMessage
    },
    telegramLink () {
      if (this.isMobile) {
        const encodedMessage = encodeURIComponent(this.message)
        return 'tg://msg?to=@vi_kosto&text=' + encodedMessage
      }

      return 'https://t.me/vi_kosto'
    }
  },

  mounted () {
    this.isMobile = isMobile()
  },

  methods: {
    ...mapActions({
      changeShowModal: 'reachOut/changeShowModal'
    })
  }
}
</script>

<style lang="scss">
.reach-out {
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 0;
  }

  &__link {
    font-size: 4rem;
    color: var(--vk-brown-2);
    transition: color 0.15s;

    &:hover {
      color: var(--vk-brown-1);
    }
  }
}
</style>
