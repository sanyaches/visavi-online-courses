
<template>
  <div class="reviews-services">
    <div class="reviews-services__container">
      <div class="reviews-services__header">
        <h2 class="reviews-services__title">
          {{ $t('index.reviews_services_title') }}
        </h2>
      </div>
      <div class="reviews-education__list">
        <ssr-carousel
          show-arrows
          show-dots
          paginate-by-slide
          loop
          :autoplay-delay="6"
          :slides-per-page="3"
          :gutter="'3rem'"
          :responsive="[
            {
              maxWidth: 991,
              slidesPerPage: 2,
            },
            {
              maxWidth: 767,
              slidesPerPage: 1
            }
          ]"
        >
          >
          <div
            v-for="item in reviewList"
            :key="item.id"
            class="reviews-education__list-item"
          >
            <main-review-card :image-src="item.imageSrc" />
          </div>
        </ssr-carousel>
      </div>
    </div>
  </div>
</template>

<script>
const reviewListRu = [
  {
    id: 'review-ru-1',
    imageSrc: require('~/assets/images/reviews/brides/1.jpg')
  },
  {
    id: 'review-ru-2',
    imageSrc: require('~/assets/images/reviews/brides/2.jpg')
  },
  {
    id: 'review-ru-3',
    imageSrc: require('~/assets/images/reviews/brides/3.jpg')
  },
  {
    id: 'review-ru-4',
    imageSrc: require('~/assets/images/reviews/brides/4.jpg')
  },
  {
    id: 'review-ru-5',
    imageSrc: require('~/assets/images/reviews/brides/5.jpg')
  }
]

const reviewListEng = [
  {
    id: 'review-en-1',
    imageSrc: require('~/assets/images/reviews/brides/1.jpg')
  },
  {
    id: 'review-en-2',
    imageSrc: require('~/assets/images/reviews/brides/2.jpg')
  },
  {
    id: 'review-en-3',
    imageSrc: require('~/assets/images/reviews/brides/3.jpg')
  },
  {
    id: 'review-en-4',
    imageSrc: require('~/assets/images/reviews/brides/4.jpg')
  },
  {
    id: 'review-en-5',
    imageSrc: require('~/assets/images/reviews/brides/5.jpg')
  }
]

export default {
  computed: {
    reviewList () {
      if (this.$i18n.locale === 'ru') {
        return reviewListRu
      }
      return reviewListEng
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews-services {
  background-color: rgba(2,2,2,0.1);
  padding: 4rem 1rem;

  @media screen and (max-width: 991px) {
    padding: 1.5rem 1rem;
  }

  &__container {
    max-width: 1480px;
    margin: 0 auto;
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
}
</style>
