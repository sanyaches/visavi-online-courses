<template>
  <div id="page-services" class="service">
    <ReachOutModal />

    <div class="service__hero">
      <div class="service__hero-content">
        <div class="service__hero-text">
          {{ $t('index.services') }}
        </div>
      </div>
    </div>

    <b-container class="service__block">
      <div class="service__header">
        <h2 class="service__title">
          {{ $t('index.services_title') }}
        </h2>
      </div>

      <div class="service__list">
        <div />

        <div class="service__card">
          <div class="card__title">
            Свадебная прическа
          </div>
          <p class="card__subtitle">
            <small>
              (причёска для невесты)
            </small>
          </p>
          <img class="card__image" alt="Свадебная прическа" src="@/assets/images/service5.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - <span class="price">120$</span>
          </p>
          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Консультация по всем интересующим вас вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Проработка концепции образа, основанная на индивидуальных пожеланиях и уникальности вашей внешности : подбор вдохновляющих фотографий, составление мудборда
            </li>
            <li class="card__point-item">
              Памятка подготовки ко дню сборов
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы ( по времени  занимают 1ч-1.5ч)
            </li>
            <li class="card__point-item">
              Сопровождение на утренней фотосессии (30 минут)
            </li>
            <li class="card__point-item">
              Помощь в шнуровке платья и креплении фаты
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('service_wedding_hair')">
            Записаться
          </button>
        </div>

        <div class="service__list-border" />

        <div class="service__card">
          <div class="card__title">
            Прическа
          </div>
          <p class="card__subtitle">
            <small>
              (для гостей, на фотосессию, на день рождения и др.торжества)
            </small>
          </p>
          <img class="card__image" alt="Свадебная прическа" src="@/assets/images/service6.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - <span class="price">70$</span>
          </p>
          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Консультация по всем интересующим вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Помощь в подборе причёски для составления гармоничного образа
            </li>
            <li class="card__point-item">
              Памятка подготовки ко дню сборов
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы (по времени  занимают 1ч-1.5ч)
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('service_hairstyle')">
            Записаться
          </button>
        </div>

        <div />
      </div>
    </b-container>

    <b-container class="service__block">
      <div class="service__header">
        <h2 class="service__title">
          Свадебные пакеты
        </h2>
      </div>

      <div class="service__list-triple">
        <div class="service__card">
          <div class="card__title">
            Свадебный пакет «Лайт»
          </div>
          <p class="card__subtitle">
            <small>
              (сборы невесты + репетиция с невестой)
            </small>
          </p>
          <p class="card__description">
            Если вы хотите точно быть уверенной в своем образе в важный день
          </p>
          <img class="card__image" alt="Гостевой пакет сборы от 5-9 гостей" src="@/assets/images/service1.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - <span class="price">160$</span>
          </p>
          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Консультация по всем интересующим вас вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Проработка концепции образа, основанная на индивидуальных пожеланиях и уникальности вашей внешности : подбор вдохновляющих фотографий, составление мудборда
            </li>
            <li class="card__point-item">
              Памятка подготовки волос ко дню сборов
            </li>
            <li class="card__point-item">
              Предварительная репетиция причёски
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу в черте города
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы ( по времени  занимают 1ч-1.5ч)
            </li>
            <li class="card__point-item">
              Сопровождение на утренней фотосессии (30 минут)
            </li>
            <li class="card__point-item">
              Помощь в шнуровке платья и креплении фаты
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('package_lite')">
            Записаться
          </button>
        </div>

        <div class="service__list-border" />

        <div class="service__card">
          <div class="card__title">
            Свадебный пакет «Стандарт»
          </div>
          <p class="card__subtitle">
            <small>
              (свадебная причёска + репетиция с невестой + сборы 2 гостей)
            </small>
          </p>
          <p class="card__description">
            Когда хочется, чтобы все было под контролем и не забыть позаботится о самых близких
          </p>
          <img class="card__image" alt="Свадебный пакет «Стандарт»" src="@/assets/images/service2.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - <span class="price">250$</span>
          </p>
          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Консультация по всем интересующим вас вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Проработка концепции образа, основанная на индивидуальных пожеланиях и уникальности вашей внешности : подбор вдохновляющих фотографий, составление мудборда
            </li>
            <li class="card__point-item">
              Памятка подготовки волос ко дню сборов
            </li>
            <li class="card__point-item">
              Предварительная репетиция причёски
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу в черте города
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы ( по времени  занимают 1ч-1.5ч)
            </li>
            <li class="card__point-item">
              Сопровождение на утренней фотосессии (30 минут)
            </li>
            <li class="card__point-item">
              Помощь в шнуровке платья и креплении фаты
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('package_standard')">
            Записаться
          </button>
        </div>

        <div class="service__list-border" />

        <div class="service__card">
          <div class="card__title">
            Свадебный пакет «Премиум»
          </div>
          <p class="card__subtitle">
            <small>
              (свадебная причёска + репетиция с невестой + сопровождение весь свадебный день)
            </small>
          </p>
          <p class="card__description">
            Когда не хочется ни о чем беспокоиться и быть уверенной в своем образе весь день
          </p>
          <img class="card__image" alt="Свадебный пакет «Премиум» дневное сопровождение" src="@/assets/images/service3.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - <span class="price">380$</span>
          </p>
          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Консультация по всем интересующим вас вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Проработка концепции образа, основанная на индивидуальных пожеланиях и уникальности вашей внешности : подбор вдохновляющих фотографий, составление мудборда
            </li>
            <li class="card__point-item">
              Памятка подготовки волос ко дню сборов
            </li>
            <li class="card__point-item">
              Предварительная репетиция причёски
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу в черте города
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы ( по времени  занимают 1ч-1.5ч)
            </li>
            <li class="card__point-item">
              Сопровождение на утренней фотосессии (30 минут)
            </li>
            <li class="card__point-item">
              Помощь в шнуровке платья и креплении фаты
            </li>
            <li class="card__point-item">
              Сопровождение стилистом в течении всего свадебного дня: поддержание свежести причёски
            </li>
            <li class="card__point-item">
              Смена прически  в течении свадебного дня
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('package_premium')">
            Записаться
          </button>
        </div>
      </div>

      <div class="service__list-triple mt-5">
        <div />
        <div class="service__list-border" />
        <div class="service__card">
          <div class="card__title">
            Гостевой пакет
          </div>
          <p class="card__subtitle">
            <small>
              (сборы от 5-9 гостей)
            </small>
          </p>
          <p class="card__description">
            Если хочется позаботиться о гостях в день торжества
          </p>
          <img class="card__image" alt="Гостевой пакет сборы от 5-9 гостей" src="@/assets/images/service4.jpg" loading="lazy">
          <p class="card__price">
            Стоимость - от <span class="price">225$</span> до <span class="price">400$</span>
          </p>
          <p class="card__price-text">
            Стоимость варьируется в зависимости от количества гостей
          </p>

          <p class="card__price-text">
            Выезд за пределы города оплачивается отдельно в соотношении км
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Включает также работу моего ассистента, чтобы оперативно собрать ваших гостей за короткий промежуток времени
            </li>
            <li class="card__point-item">
              Консультация по всем интересующим вопросам до дня сборов
            </li>
            <li class="card__point-item">
              Помощь в подборе причёски для составления гармоничного образа
            </li>
            <li class="card__point-item">
              Памятка подготовки ко дню сборов
            </li>
            <li class="card__point-item">
              Выезд по назначенному адресу
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы (по времени  занимают 40мин-50мин)
            </li>
          </ul>

          <button class="card__book-button" @click="reachOut('package_guests')">
            Записаться
          </button>
        </div>
        <div class="service__list-border" />
        <div />
      </div>
    </b-container>

    <BlocksIndexReviewsServices />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      changeShowModal: 'reachOut/changeShowModal',
      changeService: 'reachOut/changeService'
    }),

    reachOut (service) {
      this.changeShowModal(true)
      this.changeService(service)
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  &__hero-content {
    position: relative;
    height: 421px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url('~/assets/images/services-hero.jpg');
    background-size: 100%;
    background-position-y: 22%;

    &:hover {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 991px) {
      height: 297px;
      background-position-y: 25%;
    }

    @media (max-width: 767px) {
      height: 347px;
      background-position-y: 28%;
    }
  }

  &__hero-text {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 4.5rem;
    color: white;
    padding: 0 1.4rem;

    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }

  --button-brown-color: #fff;
  --button-brown-bg-color: #917C6F;
  --button-brown-bg-hover-color: #a08d81;

  &__block {
    padding: 4rem 1rem;

    @media screen and (max-width: 991px) {
      padding: 1.5rem 1rem;
    }
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

  &__list {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 2fr 4rem 2fr 1fr;
      gap: 0;
    }
  }

  &__list-triple {
    display: grid;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      grid-template-columns: 4fr 4rem 4fr 4rem 4fr;
      gap: 0;
    }
  }

  &__list-single {
    margin-top: 4rem;
  }

  &__list-border {
    display: none;

    @media screen and (min-width: 992px) {
      display: block;
      height: 100%;
      width: 2px;
      margin: 0.5rem auto;
      background-color: var(--border-color);
    }
  }

  &__card {
    width: 100%;
  }

  &__list-single &__card {
    max-width: 550px;
    margin: 0 auto;
  }

  .card__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
  }

  .card__subtitle {
    text-align: center;
    min-height: 3rem;
  }

  .card__description {
    font-size: 1.2rem;
    text-align: center;
    min-height: 6rem;
  }

  .card__image {
    width: 100%;
  }

  .card__price {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
  }

  .price {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card__price-text {
    font-size: 0.9rem;

    @media screen and (min-width: 992px) {
      font-size: 0.95rem;
    }
  }

  .card__points {
    list-style-type: none;
    padding-left: 0;
  }

  .card__point-item {
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      border: 2px solid var(--vk-brown-1);
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  .card__book-button {
    padding: 0.8rem 1.1rem;
    border-radius: 1rem;
    background-color: var(--vk-gray-1);
    color: var(--vk-white);
    margin: 0 auto;
    width: fit-content;
    display: block;
    border-width: 0;
    transition: opacity 0.2s;

    &:hover, &:active, &:focus {
      opacity: 0.8;
    }
  }
}
</style>
