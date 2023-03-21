<template>
  <div class="program-page">
    <ReachOutModal />

    <div class="promo-container">
      <div class="program-page__promo">
        <div class="program-page__promo-background">
          <img class="program-page__thumbnail is-desktop" src="@/assets/images/education-wide2.jpg">
          <img class="program-page__thumbnail is-mobile" src="@/assets/images/education-wide2mobile.jpg">
        </div>
        <div class="program-page__promo-content">
          <div class="program-page__promo-content-background">
            <b-container>
              <div class="program-page__promo-text">
                <div class="program-page__promo-header">
                  <div>
                    <h1 class="program-page__title">
                      <span>{{ $t('program.individual_lesson_yourself.title') }}</span>
                    </h1>
                    <p>
                      Такой урок станет идеальным подарком самой себе и своим близким
                    </p>
                  </div>
                  <b-button class="button button--brown-dark button button--large">
                    {{ $t('program.common.buy') }}
                  </b-button>
                </div>
                <div class="program-page__benefits">
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-clock" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      {{ $t('program.common.duration') }}
                      <br>
                      {{ $t('program.individual_lesson_yourself.duration') }}
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.treatment') }}</span>
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-gift" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.hair_box') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-container>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <b-container>
        <div class="about__header">
          <h2 class="about__title">
            {{ $t('program.individual_lesson_yourself.about_title') }}
          </h2>
        </div>

        <div class="about__list">
          <div class="about__list-item">
            <div class="about__list-item-number">
              01
            </div>
            <div class="about__list-item-content">
              <p>{{ $t('program.individual_lesson_yourself.about.item_1.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              02
            </div>
            <div class="about__list-item-content">
              <p>{{ $t('program.individual_lesson_yourself.about.item_2.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              03
            </div>
            <div class="about__list-item-content">
              <p>{{ $t('program.individual_lesson_yourself.about.item_3.description') }}</p>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="program">
      <b-container>
        <div class="program__header">
          <h2 class="program__title">
            {{ $t('program.individual_lesson_yourself.program_title') }}
          </h2>
        </div>
        <div class="program__cards">
          <ssr-carousel
            show-arrows
            show-dots
            loop
            paginate-by-slide
            :slides-per-page="1"
          >
            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  Индивидуальный урок
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Ваш запрос на обучение (что бы вы хотели получить от нашего занятия)
                </div>

                <div class="program__day-card-list-title">
                  Разберём
                </div>
                <ul class="program__day-card-list">
                  <li>Идеальный уход, чтобы волосы оставались надолго блестящими и здоровыми</li>
                  <li>Подготовку волосы к причёске</li>
                  <li>Стайлинг для волос, что подходит именно твоим волосам</li>
                  <li>Инструменты, как правильно с ними работать без вреда для волос</li>
                  <li>Разбираем сначала теоретически схему накрутки или схему сборки причёски под ваш запрос</li>
                  <li>Бонусом дарю вам в электронном формате</li>
                  <li>Памятку по подготовке волос</li>
                  <li>Актуальный гайд по стайлингу и инструментам с подробной информацией о продуктах, где купить и сколько стоит</li>
                </ul>

                <div class="program__day-card-list-title">
                  Практическая часть
                </div>
                <ul class="program__day-card-list">
                  <li>Делаем укладку шаг за шагом, слежу за вашей техникой и сразу разбираем возможные ошибки</li>
                  <li>За урок возможно сделать 1-2 трансформации</li>
                </ul>
              </div>
            </div>
          </ssr-carousel>
        </div>
      </b-container>
    </div>

    <div class="schedule">
      <b-container>
        <div class="schedule__header">
          <h2 class="schedule__title">
            {{ $t('program.individual_lesson_yourself.schedule_title') }}
          </h2>
        </div>
        <div class="schedule__info">
          <b>Индивидуальный график <font-awesome-icon icon="fa-solid fa-calendar-days" /></b>
          <p>
            Так как обучение проходит в индивидуальном форме, то время проведения занятия выбирается максимально удобное для вас.
          </p>
        </div>
        <div class="accordion schedule__tabs" role="tablist">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-1 block variant="info">
                <span>Занятие</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>1ч-1.5ч  - разбор теоретического блока </li>
                    <li>2-3ч - отработка причёски шаг за шагом </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
    </div>

    <div class="price">
      <b-container>
        <div class="price__grid">
          <div class="price__col-2">
            <div class="price__book">
              <button class="price__book-button" @click="reachOut">
                {{ $t('program.individual_lesson_yourself.book_button_text') }}
              </button>
            </div>
          </div>
          <div class="price__col-3">
            <div class="price__header">
              <h2 class="price__title">
                {{ $t('program.individual_lesson_yourself.price_title') }}
              </h2>
              <div class="price__amount">
                95 $
              </div>
            </div>
            <small class="price__currency-info">(Принимается в RUB, USD, EUR, TL из рассчета в долларах)</small>
            <div class="price__benefits">
              <div class="price__included">
                <b>В стоимость входит <font-awesome-icon icon="fa-solid fa-gifts" /></b>
                <ul class="price__included-list">
                  <li>Гайд по стайлингу и инструментам в электронном формате </li>
                  <li>HAIRBOX (стартовый набор средств для волос, которые вы забираете с собой)</li>
                  <li>Все материалы на время обучения (стайлинг, инструменты, расходники) </li>
                  <li>Возможна работа на вашем инструменте, для вашего удобства </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head () {
    return {
      title: this.$t('program.individual_lesson_yourself.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('program.individual_lesson_yourself.seo.description')
        },
        { name: 'keywords', content: this.$t('program.individual_lesson_yourself.seo.keywords') },
        {
          name: 'news_keywords',
          content: this.$t('program.individual_lesson_yourself.seo.keywords')
        },
        {
          property: 'og:title',
          content: this.$t('program.individual_lesson_yourself.seo.title')
        },
        {
          property: 'og:description',
          content: this.$t('program.individual_lesson_yourself.seo.description')
        },
        {
          property: 'og:image:alt',
          content: this.$t('program.individual_lesson_yourself.seo.description')
        }
      ]
    }
  },

  created () {
    if (this.$i18n.locale === 'en') {
      this.$nuxt.error({ statusCode: 404, message: "This program doesn't exist in this language" })
    }
  },

  methods: {
    ...mapActions({
      changeShowModal: 'reachOut/changeShowModal',
      changeService: 'reachOut/changeService'
    }),

    reachOut () {
      this.changeShowModal(true)
      this.changeService('individual_lesson_yourself')
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/program-page.scss" />
