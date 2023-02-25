<template>
  <div class="portfolio">
    <b-container>
      <h2 class="portfolio__title">
        {{ $t('portfolio_title') }}
      </h2>
      <div class="portfolio__tabs">
        <div class="portfolio__tab" :class="{'is-active': slide === 0}" @click="slide = 0">
          {{ $t('portfolio_brides_tab') }}
        </div>
        <div class="portfolio__tab" :class="{'is-active': slide === 1}" @click="slide = 1">
          {{ $t('portfolio_students_tab') }}
        </div>
      </div>
      <ssr-carousel v-model="slide">
        <div :index="0">
          <div id="brides" class="portfolio__grid">
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/brides/1.jpg">
              <img src="images/portfolio/brides/1.jpg">
            </a>
          </div>
        </div>
        <div :index="1">
          <div id="students" class="portfolio__grid">
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
            <a class="portfolio__grid-cell" data-src="images/portfolio/students/1.jpg">
              <img src="images/portfolio/students/1.jpg">
            </a>
          </div>
        </div>
      </ssr-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0
    }
  },

  mounted () {
    this.registerGalleries()
  },

  methods: {
    registerGalleries () {
      const bridesContainer = document.getElementById('brides')
      const studentsContainer = document.getElementById('students')
      if (bridesContainer) {
        window.lightGallery(bridesContainer, {
          download: false,
          share: false
        })
      }
      if (studentsContainer) {
        window.lightGallery(studentsContainer, {
          download: false,
          share: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 4rem 0;

  @media screen and (max-width: 480px) {
    padding: 2rem 0;
  }

  &__title {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 500;
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
  }

  &__tabs {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    width: min-content;
    padding: 0 5rem;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid;
    border-color: var(--vk-beige-2);

    @media screen and (max-width: 480px) {
      padding: 0 1rem;
      margin-top: 3rem;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }
  }

  &__tab {
    color: var(--vk-beige-1);
    padding: 8px 2rem;
    font-size: 1.5rem;
    border-top: 1px solid transparent;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      padding: 8px 1rem;
      font-size: 1.2rem;
    }
  }

  &__tab.is-active {
    border-color: var(--vk-black);
    color: var(--vk-black);
  }

  &__grid {
    display: grid;
    gap: 0.4rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-top: 1rem;
    max-width: 677px;
    margin-left: auto;
    margin-right: auto;
  }

  &__grid-cell {
    background-color: #a0a0a0;
    width: 100%;
    height: 100%;
    cursor: zoom-in;
  }

  &__grid-cell img {
    width: 100%;
    height: 100%;
  }
}
</style>
