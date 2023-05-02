<template>
  <div class="program-page">
    <ReachOutModal />

    <div class="promo-container">
      <div class="program-page__promo">
        <div class="program-page__promo-background">
          <img class="program-page__thumbnail is-desktop" src="@/assets/images/education-wide1.jpg">
          <img class="program-page__thumbnail is-mobile" src="@/assets/images/education-wide1mobile.jpg">
        </div>
        <div class="program-page__promo-content">
          <div class="program-page__promo-content-background">
            <b-container>
              <div class="program-page__promo-text">
                <div class="program-page__promo-header">
                  <div>
                    <h1 class="program-page__title">
                      <span>{{ $t('program.individual_lesson_masters.title') }}</span>
                    </h1>
                    <p>
                      Показ и отработка двух укладок или причёсок на ваш выбор
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
                      {{ $t('program.individual_lesson_masters.duration') }}
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.treatment') }}</span>
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-scroll" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.give_certificate') }}</span>
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
            {{ $t('program.individual_lesson_masters.about_title') }}
          </h2>
        </div>

        <div class="about__list">
          <div class="about__list-item">
            <div class="about__list-item-number">
              01
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.individual_lesson_masters.about.item_1.title') }}
                <br>
                {{ $t('program.individual_lesson_masters.about.item_1.title_second_line') }}
              </h3>

              <p>{{ $t('program.individual_lesson_masters.about.item_1.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              02
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.individual_lesson_masters.about.item_2.title') }}
                <br>
                {{ $t('program.individual_lesson_masters.about.item_2.title_second_line') }}
              </h3>
              <p>{{ $t('program.individual_lesson_masters.about.item_2.description') }}</p>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="program">
      <b-container>
        <div class="program__header">
          <h2 class="program__title">
            {{ $t('program.individual_lesson_masters.program_title') }}<br>
            <small>{{ $t('program.common.program_hint') }}</small>
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
                  Тариф "Шаг за шагом"
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Теоретический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Знакомство и анализ ваших работ </li>
                  <li>Диагностика волос и подбор стайлинга</li>
                  <li>Подготовка волос к укладке</li>
                  <li>Универсальная схема создания причёсок</li>
                  <li>СОЗДАНИЕ ПРОДАЮЩИХ ФОТО И ВИДЕО</li>
                  <li>ВЕДЕНИЕ СОЦ. СЕТЕЙ</li>
                </ul>

                <div class="program__day-card-list-title">
                  Практический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Демонстрация + отработка (выполняем причёску с пошаговым объяснением на одной модели)</li>
                  <li>Показываю вам 20% укладки, остальные 80% делаете вы сами</li>
                </ul>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  Тариф "Один на один"
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Теоретический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Знакомство и анализ ваших работ </li>
                  <li>Диагностика волос и подбор стайлинга</li>
                  <li>Подготовка волос к укладке</li>
                  <li>Универсальная схема создания причёсок</li>
                  <li>СОЗДАНИЕ ПРОДАЮЩИХ ФОТО И ВИДЕО</li>
                  <li>ВЕДЕНИЕ СОЦ. СЕТЕЙ</li>
                </ul>

                <div class="program__day-card-list-title">
                  Практический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Демонстрация (2 модели)</li>
                  <li>Подробный пошаговый показ выбранных причёсок</li>
                  <li>Отработка (2 модели)</li>
                  <li>Ваше выполнение причёсок</li>
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
            {{ $t('program.individual_lesson_masters.schedule_title') }}
          </h2>
        </div>
        <div class="schedule__info">
          <b>Индивидуальный график <font-awesome-icon icon="fa-solid fa-calendar-days" /></b>
          <p>
            Так как обучение проходит в индивидуальном форме, то возможно изменение времени начала обучения, для вашего удобства. Ниже представлен пример графика.
          </p>
        </div>
        <div class="accordion schedule__tabs" role="tablist">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-1 block variant="info">
                <span>День обучения ("Шаг за шагом") </span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:30 - теоретический блок</li>
                    <li>11:30-13:30 - выполняем вместе причёску на первой модели</li>
                    <li>13:30-14:00 - кофе-брейк</li>
                    <li>14:00-16:00 - выполняем вместе причёску на второй модели</li>
                    <li>16:00- вручение сертификата</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-2 block variant="info">
                <span>День обучения ("Один на один") </span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:30 - теоретический блок</li>
                    <li>11:30-12:45 - демонстрация первой причёски</li>
                    <li>13:00-14:30 - ваша отработка первой причёски</li>
                    <li>14:30-15:00 - кофе-брейк</li>
                    <li>15:00-16:30 - демонстрация второй причёски</li>
                    <li>16:30-18:00 - ваша отработка второй причёски</li>
                    <li>18:00 - вручение сертификата</li>
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
                {{ $t('program.individual_lesson_masters.book_button_text') }}
              </button>
            </div>
          </div>
          <div class="price__col-3">
            <div class="price__header">
              <h2 class="price__title">
                {{ $t('program.individual_lesson_masters.price_title') }}
              </h2>
            </div>
            <div class="price__header">
              <div class="price__amount">
                210 $
                <div class="price__amount-text">
                  - "Шаг за шагом"
                </div>
              </div>
            </div>
            <div class="price__header">
              <div class="price__amount">
                250 $
                <div class="price__amount-text">
                  - "Один на один"
                </div>
              </div>
            </div>
            <small class="price__currency-info" style="text-align: left;">(Принимается в RUB, USD, EUR, TL из рассчета в рублях)</small>
            <div class="price__info">
              Обращаем ваше внимание, что запись и бронирование осуществляется по предоплате (20%).
              При отмене бронирования предоплата не возвращается. Временная бронь 3 дня с момента обращения.
              <br> <b>Возможна беспроцентная рассрочка</b>
            </div>
            <div class="price__benefits">
              <div class="price__contract">
                <b>Договор <font-awesome-icon icon="fa-solid fa-shield-halved" /></b>
                <p>
                  Мы можем выслать вам экземпляр на электронную почту или подписать его с вами при личной встрече
                </p>
              </div>

              <div class="price__included">
                <b>В стоимость входит <font-awesome-icon icon="fa-solid fa-gifts" /></b>
                <ul class="price__included-list">
                  <li>Гайд по стайлингу и инструментам в электронном формате</li>
                  <li>Все материалы на время обучения (стайлинг, инструменты, расходники) </li>
                  <li>Обед. Кофе-брейк</li>
                  <li>Модели для отработки</li>
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
      title: this.$t('program.individual_lesson_masters.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('program.individual_lesson_masters.seo.description')
        },
        { name: 'keywords', content: this.$t('program.individual_lesson_masters.seo.keywords') },
        {
          name: 'news_keywords',
          content: this.$t('program.individual_lesson_masters.seo.keywords')
        },
        {
          property: 'og:title',
          content: this.$t('program.individual_lesson_masters.seo.title')
        },
        {
          property: 'og:description',
          content: this.$t('program.individual_lesson_masters.seo.description')
        },
        {
          property: 'og:image:alt',
          content: this.$t('program.individual_lesson_masters.seo.description')
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
      this.changeService('individual_lesson_masters')
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/program-page.scss" />
