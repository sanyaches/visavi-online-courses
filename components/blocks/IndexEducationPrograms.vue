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
const educationListRu = [
  {
    id: 'individual-lesson-masters',
    title: 'Индивидуальный урок для мастеров',
    description: 'Показ и отработка двух укладок или причёсок на ваш выбор',
    imageSrc: 'images/training1.jpg',
    pageUrl: '/program/individual-lesson-masters'
  },
  {
    id: 'individual-lesson-yourself',
    title: 'Индивидуальный | урок для себя',
    description: 'Такой урок станет идеальным подарком самой себе и своим близким',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/program/individual-lesson-yourself'
  },
  {
    id: 'base-course',
    title: 'Базовый курс',
    description: 'Самые главные основы работы с волосами, только актуальные причёски, индивидуальная обратная связь, объемный практический и теоретический блок  ',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/program/base-course'
  },
  {
    id: 'advanced-hair-training',
    title: 'Курс повышения',
    description: 'Интенсивная прокачка своих навыков и знаний перед свадебным сезоном',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/program/advanced-hair-training'
  }
]

const educationListEng = [
  {
    id: 'individual-lesson-masters',
    title: 'Progression hair training class',
    description: 'Показ и отработка двух укладок или причёсок на ваш выбор',
    imageSrc: 'images/training1.jpg',
    pageUrl: '/program/individual-lesson-masters'
  },
  {
    id: 'advanced-hair-training',
    title: 'Advanced hair training',
    description: 'Интенсивная прокачка своих навыков и знаний перед свадебным сезоном',
    imageSrc: 'images/portfolio/brides/1.jpg',
    pageUrl: '/program/advanced-hair-training'
  }
]

export default {
  computed: {
    educationList () {
      if (this.$i18n.locale === 'ru') {
        return educationListRu
      }

      return educationListEng
    }
  }
}
</script>

<style lang="scss">
.education-programs {
  padding: 4rem 0;

  --card-description-color: #f0f0f0;

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
    padding-bottom: 1rem;
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
    background-color: var(--vk-gray-2);
  }
}
</style>
