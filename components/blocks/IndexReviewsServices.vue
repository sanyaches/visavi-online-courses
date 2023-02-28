
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
            <main-review-card :name="item.name" :content="item.content" />
          </div>
        </ssr-carousel>
      </div>
    </div>
  </div>
</template>

<script>
const reviewList = [
  {
    id: 'asf1',
    name: 'Some student #1',
    content: 'Victorias online education is so comprehensive and detailed.  I love the face that she`s broken down the styles into sections so you can really understand the process. I`ve already learnt a phenomenal amount, and i`m also picking up lots of tips and tricks to incorporate into my work going ahead, plus the wonderfully supportive Facebook group! highly recommended.'
  },
  {
    id: 'asf11',
    name: 'Bla',
    content: 'Hi Victoria,' +
    'I just wanted to message to say how amazing I’m finding the online education.' +
    'After having my 1-2-1 lesson 3 years ago this was a no brainier to join straight away!' +
    'I’ve absolutely loved learning new tips and tricks. It’s really helping expand my knowledge' +
    'of styling and it’s definitely giving me more confidence in areas that I needed the most.' +
    'I feel like it’s become my little comfort blanket and I love that! Thank you 🙏🏻 ❤️❤️❤️❤️'
  },
  {
    id: 'as2f1',
    name: 'Bla',
    content: 'Bla bla bla'
  },
  {
    id: 'as2f121',
    name: 'Bla',
    content: 'Bla bla bla'
  }
]

export default {
  data () {
    return {
      reviewList
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

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
}
</style>
