<template>
  <div class="program-page">
    <ReachOutModal />

    <div class="promo-container">
      <div class="program-page__promo">
        <div class="program-page__promo-background">
          <img class="program-page__thumbnail is-desktop" src="@/assets/images/education-wide4.jpg">
          <img class="program-page__thumbnail is-mobile" src="@/assets/images/education-wide4mobile.jpg">
        </div>
        <div class="program-page__promo-content">
          <div class="program-page__promo-content-background">
            <b-container>
              <div class="program-page__promo-text">
                <div class="program-page__promo-header">
                  <div>
                    <h1 class="program-page__title">
                      <span>{{ $t('program.advanced_hair_training.title') }}</span>
                    </h1>
                    <p>
                      Интенсивная прокачка своих навыков и знаний перед свадебным сезоном
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
                      {{ $t('program.advanced_hair_training.duration') }}
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
            {{ $t('program.advanced_hair_training.about_title') }}
          </h2>
        </div>

        <div class="about__list">
          <div class="about__list-item">
            <div class="about__list-item-number">
              01
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.advanced_hair_training.about.item_1.title') }}
                <br>
                {{ $t('program.advanced_hair_training.about.item_1.title_second_line') }}
              </h3>

              <p>{{ $t('program.advanced_hair_training.about.item_1.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              02
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.advanced_hair_training.about.item_2.title') }}
                <br>
                {{ $t('program.advanced_hair_training.about.item_2.title_second_line') }}
              </h3>
              <p>{{ $t('program.advanced_hair_training.about.item_2.description') }}</p>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="program">
      <b-container>
        <div class="program__header">
          <h2 class="program__title">
            {{ $t('program.advanced_hair_training.program_title') }} <br>
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
                  День первый
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Теоретический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Типы, структура и диагностика волос</li>
                  <li>Подготовка волос к укладке</li>
                  <li>Правильный подбор стайлинга</li>
                  <li>Универсальная схема создания причёсок</li>
                </ul>

                <div class="program__day-card-list-title">
                  Демонстрация (1 модель)
                </div>
                <ul class="program__day-card-list">
                  <li>Прикорневой объем на фен</li>
                  <li>Работа с уплотняющим стайлингом</li>
                  <li>Создание воздушной и подвижной укладки</li>
                </ul>

                <div class="program__day-card-list-title">
                  Отработка ученика (1 модель)
                </div>
                <ul class="program__day-card-list">
                  <li>Прикорневой объем на фен</li>
                  <li>Работа с уплотняющим стайлингом</li>
                  <li>Создание воздушной и подвижной укладки</li>
                </ul>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День второй
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Теоретический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Тренды в прическах, где искать вдохновение. Как выделяться из толпы</li>
                  <li>Особенности оформления зоны у лица</li>
                  <li>Создание продающих фото и видео</li>
                  <li>Ведение соц. сетей</li>
                </ul>

                <div class="program__day-card-list-title">
                  Практический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Локоны в ломанной технике на утюг</li>
                  <li>Прическа с плетением</li>
                  <li>Текстурный хвост. Текстурный пучок</li>
                </ul>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День третий
                </div>
                <hr>

                <div class="program__day-card-list-title">
                  Теоретический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Создание чистых элементов в прическах</li>
                  <li>Подбор стайлинга для гладкости и блеска</li>
                </ul>

                <div class="program__day-card-list-title">
                  Практический блок
                </div>
                <ul class="program__day-card-list">
                  <li>Низкий гладкий хвост с элементами плетения</li>
                  <li>Две схемы сборки гладкого пучка</li>
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
            {{ $t('program.advanced_hair_training.schedule_title') }}
          </h2>
        </div>
        <div class="schedule__info">
          <b>Индивидуальный график <font-awesome-icon icon="fa-solid fa-calendar-days" /></b>
          <p>
            Так как обучение проходит в индивидуальном форме, то возможно изменение времени начала обучения, для вашего удобства.
          </p>
        </div>
        <div class="accordion schedule__tabs" role="tablist">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-1 block variant="info">
                <span>Первый день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:30 - теоретический блок</li>
                    <li>11:30-13:00 - демонстрация </li>
                    <li>13:00-13:30 - кофе-брейк </li>
                    <li>13:30-15:30 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-2 block variant="info">
                <span>Второй день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:30 - теоретический блок</li>
                    <li>11:30-13:00 - демонстрация </li>
                    <li>13:00-13:30 - кофе-брейк </li>
                    <li>13:30-16:00 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-3 block variant="info">
                <span>Третий день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация</li>
                    <li>12:30-13:00 - кофе-брейк</li>
                    <li>13:00-15:00 - Отработка на модели</li>
                    <li>15:00 - Вручение сертификата</li>
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
                {{ $t('program.advanced_hair_training.book_button_text') }}
              </button>
            </div>
          </div>
          <div class="price__col-3">
            <div class="price__header">
              <h2 class="price__title">
                {{ $t('program.advanced_hair_training.price_title') }}
              </h2>
              <div class="price__amount">
                350 $
              </div>
            </div>
            <small class="price__currency-info">(Принимается в RUB, USD, EUR, TL из рассчета в долларах)</small></span>
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
                  <li>Рабочая тетрадь с добавочными материалами</li>
                  <li>Гайд по стайлингу и инструментам в электронном формате</li>
                  <li>Все материалы на время обучения (стайлинг, инструменты, расходники) </li>
                  <li>Возможна работа на ваших инструментах, для вашего удобства </li>
                  <li>Кофе-брейк</li>
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
      title: this.$t('program.advanced_hair_training.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('program.advanced_hair_training.seo.description')
        },
        { name: 'keywords', content: this.$t('program.advanced_hair_training.seo.keywords') },
        {
          name: 'news_keywords',
          content: this.$t('program.advanced_hair_training.seo.keywords')
        },
        {
          property: 'og:title',
          content: this.$t('program.advanced_hair_training.seo.title')
        },
        {
          property: 'og:description',
          content: this.$t('program.advanced_hair_training.seo.description')
        },
        {
          property: 'og:image:alt',
          content: this.$t('program.advanced_hair_training.seo.description')
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
      this.changeService('advanced_hair_training')
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/program-page.scss" />
