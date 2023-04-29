<template>
  <div>
    <b-container class="service-page__block">
      <div class="service-page__header">
        <h2 class="service-page__title">
          {{ $t('index.services_title') }}
        </h2>
      </div>

      <div class="service-page__list">
        <div />

        <div class="service-page__card">
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

          <button class="card__book-button" @click="$emit('reach-out', 'service_wedding_hair')">
            Записаться
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
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
              Выезд по назначенному адресу в черте города
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы (по времени  занимают 1ч-1.5ч)
            </li>
          </ul>

          <button class="card__book-button" @click="$emit('reach-out', 'service_hairstyle')">
            Записаться
          </button>
        </div>

        <div />
      </div>
    </b-container>

    <b-container class="service-page__block">
      <div class="service-page__header">
        <h2 class="service-page__title">
          Свадебные пакеты
        </h2>
      </div>

      <div class="service-page__list-triple">
        <div class="service-page__card">
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

          <button class="card__book-button" @click="$emit('reach-out', 'package_lite')">
            Записаться
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
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

          <button class="card__book-button" @click="$emit('reach-out', 'package_standard')">
            Записаться
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
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

          <button class="card__book-button" @click="$emit('reach-out', 'package_premium')">
            Записаться
          </button>
        </div>
      </div>

      <div class="service-page__list-triple mt-5">
        <div />
        <div class="service-page__list-border" />
        <div class="service-page__card">
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
              Выезд по назначенному адресу в черте города
            </li>
            <li class="card__point-item">
              Непосредственно сами сборы (по времени  занимают 40мин-50мин)
            </li>
          </ul>

          <button class="card__book-button" @click="$emit('reach-out', 'package_guests')">
            Записаться
          </button>
        </div>
        <div class="service-page__list-border" />
        <div />
      </div>
    </b-container>

    <BlocksIndexReviewsServices />
  </div>
</template>
