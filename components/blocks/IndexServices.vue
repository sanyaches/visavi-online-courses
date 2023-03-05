<template>
  <div id="index-services" class="services">
    <b-container>
      <div class="services__header">
        <h2 class="services__title">
          {{ $t('index.services_title') }}
        </h2>
      </div>
      <div class="services__list">
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
            v-for="item in servicesList"
            :key="item.id"
            class="services__list-item"
          >
            <main-card :title="item.title" :description="item.description" :page-url="item.pageUrl" :image-src="item.imageSrc" />
          </div>
        </ssr-carousel>

        <div class="services__line-background" />
      </div>
    </b-container>
  </div>
</template>

<script>
const servicesListRu = [
  {
    id: 'wedding-hair',
    title: 'Свадебная причёска',
    description: 'Для тех кто точно знает что хочет',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'service/wedding-hair'
  },
  {
    id: 'hairstyle',
    title: 'Прическа',
    description: 'Прическа для гостей, на фотосессию, на день рождения и др.торжества',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'service/hairstyle'
  },
  {
    id: 'package-lite',
    title: 'Свадебный пакет «Лайт»',
    description: 'Если вы хотите точно быть уверенной в своем образе ',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'service/package-lite'
  },
  {
    id: 'package-guest',
    title: 'Гостевой пакет',
    description: 'Сборы от 5-9 гостей',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'service/package-guest'
  }
]

const servicesListEng = [
  {
    id: 'wedding-hair',
    title: 'Свадебная причёска',
    description: 'Для тех кто точно знает что хочет',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'en/service/wedding-hair'
  },
  {
    id: 'hairstyle',
    title: 'Прическа',
    description: 'Прическа для гостей, на фотосессию, на день рождения и др.торжества',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'en/service/hairstyle'
  },
  {
    id: 'package-lite',
    title: 'Свадебный пакет «Лайт»',
    description: 'Если вы хотите точно быть уверенной в своем образе ',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'en/service/package-lite'
  },
  {
    id: 'package-guest',
    title: 'Гостевой пакет',
    description: 'Сборы от 5-9 гостей',
    imageSrc: 'images/portfolio/students/1.jpg',
    pageUrl: 'en/service/package-guest'
  }
]

export default {
  computed: {
    servicesList () {
      if (this.$i18n.locale === 'ru') {
        return servicesListRu
      }

      return servicesListEng
    }
  }
}
</script>

<style lang="scss">
.services {
  padding: 4rem 0;

  --button-brown-color: #fff;
  --button-brown-bg-color: #917C6F;
  --button-brown-bg-hover-color: #a08d81;

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
      font-size: 1.8rem;
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
    background-color: var(--vk-beige-1);
  }
}
</style>
