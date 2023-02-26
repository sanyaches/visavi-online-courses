<template>
  <div id="index-education-programs" class="education-programs">
    <b-container>
      <div class="education-programs__header">
        <h2 class="education-programs__title">
          {{ $t('index.education_programs_title') }}
        </h2>
      </div>
      <div class="education-programs__list">
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
            v-for="item in educationList"
            :key="item.id"
            class="education-programs__list-item"
          >
            <main-card :title="item.title" :description="item.description" :page-url="item.pageUrl" :image-src="item.imageSrc" />
          </div>
        </ssr-carousel>

        <div class="education-programs__line-background" />
      </div>
    </b-container>
  </div>
</template>

<script>
const educationList = [
  {
    id: 'asf1',
    title: 'Bla | bla',
    description: 'Bla bla bla',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/'
  },
  {
    id: 'asf11',
    title: 'Bla | bla',
    description: 'Bla bla bla',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/'
  },
  {
    id: 'as2f1',
    title: 'Bla',
    description: 'Bla bla bla',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/'
  },
  {
    id: 'as2f121',
    title: 'Bla',
    description: 'Bla bla bla',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/'
  }
]

export default {
  data () {
    return {
      educationList
    }
  }
}
</script>

<style lang="scss">
.education-programs {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 1.5rem 0;
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
      font-size: 1.6rem;
    }
  }

  &__list {
    position: relative;
  }

  .ssr-carousel-slides {
    z-index: 1;
  }

  .ssr-carousel-dots {
    z-index: 2;
    position: relative;
    margin-top: 20px;
    padding-bottom: 10px;
  }

  &__line-background {
    position: absolute;
    top: 50%;
    left: 0;
    height: 50%;
    width: calc(100% + 40px);
    transform: translateX(-20px);
    z-index: 0;
    background-color: #b6a498;
  }
}
</style>
