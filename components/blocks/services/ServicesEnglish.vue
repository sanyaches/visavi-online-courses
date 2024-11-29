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
            Wedding hairstyle
          </div>
          <p class="card__subtitle">
            <small> (hairstyle for the bride) </small>
          </p>
          <img
            class="card__image"
            alt="Свадебная прическа"
            src="@/assets/images/service5.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - <span class="price">120€</span>
          </p>
          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Creating the concept of the image based on your individual wishes
              and the uniqueness of your appearance: selection of inspiring
              photos, creating a moodboard
            </li>
            <li class="card__point-item">
              Checklist for preparation to the gathering day
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 1-1.5h)
            </li>
            <li class="card__point-item">
              Help with morning photosession (30 min)
            </li>
            <li class="card__point-item">
              Help with the veil and dress lacing
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'service_wedding_hair')"
          >
            Book
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
          <div class="card__title">
            Hairstyle
          </div>
          <p class="card__subtitle">
            <small>
              (for guests, for photosession, for birthday and other
              celebrations)
            </small>
          </p>
          <img
            class="card__image"
            alt="Свадебная прическа"
            src="@/assets/images/service6.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - <span class="price">70€</span>
          </p>
          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Support in choosing a hairstyle to create a harmonious image
            </li>
            <li class="card__point-item">
              Checklist for preparation to the gathering day
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 1-1.5h)
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'service_hairstyle')"
          >
            Book
          </button>
        </div>
      </div>
    </b-container>

    <b-container class="service-page__block">
      <div class="service-page__header">
        <h2 class="service-page__title">
          Wedding packages
        </h2>
      </div>

      <div class="service-page__list-triple">
        <div class="service-page__card">
          <div class="card__title">
            Wedding package «Light»
          </div>
          <p class="card__subtitle">
            <small> (gathering + trial with the bride) </small>
          </p>
          <p class="card__description">
            If you want to be sure of your image on your important day
          </p>
          <img
            class="card__image"
            alt="Guests package сборы от 3-6 гостей"
            src="@/assets/images/service1.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - <span class="price">170€</span>
          </p>
          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Creating the concept of the image based on your individual wishes
              and the uniqueness of your appearance: selection of inspiring
              photos, creating a moodboard
            </li>
            <li class="card__point-item">
              Checklist for hair preparation to the gathering day
            </li>
            <li class="card__point-item">
              Rehearsal of the hairstyle (trial)
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 1-1.5h)
            </li>
            <li class="card__point-item">
              Help with morning photosession (30 min)
            </li>
            <li class="card__point-item">
              Help with the veil and dress lacing
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'package_lite')"
          >
            Book
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
          <div class="card__title">
            Wedding package "Standard"
          </div>
          <p class="card__subtitle">
            <small>
              (wedding hairstyle + rehearsal with the bride + gathering of 2
              guests)
            </small>
          </p>
          <p class="card__description">
            When you want everything to be under control and not to forget to
            take care of the closest people
          </p>
          <img
            class="card__image"
            alt="Wedding package «Standard»"
            src="@/assets/images/service2.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - <span class="price">290€</span>
          </p>
          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Creating the concept of the image based on your individual wishes
              and the uniqueness of your appearance: selection of inspiring
              photos, creating a moodboard
            </li>
            <li class="card__point-item">
              Checklist for hair preparation to the gathering day
            </li>
            <li class="card__point-item">
              Rehearsal of the hairstyle (trial)
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 1-1.5h)
            </li>
            <li class="card__point-item">
              Help with morning photosession (30 min)
            </li>
            <li class="card__point-item">
              Help with the veil and dress lacing
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'package_standard')"
          >
            Book
          </button>
        </div>

        <div class="service-page__list-border" />

        <div class="service-page__card">
          <div class="card__title">
            Wedding package "Premium"
          </div>
          <p class="card__subtitle">
            <small>
              (wedding hairstyle + rehearsal with the bride + accompaniment
              throughout the wedding day)
            </small>
          </p>
          <p class="card__description">
            When you want not to worry about anything and be confident in your
            image all day
          </p>
          <img
            class="card__image"
            alt="Wedding package «Premium» day accompanying"
            src="@/assets/images/service3.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - <span class="price">480€</span>
          </p>
          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Creating the concept of the image based on your individual wishes
              and the uniqueness of your appearance: selection of inspiring
              photos, creating a moodboard
            </li>
            <li class="card__point-item">
              Checklist for hair preparation to the gathering day
            </li>
            <li class="card__point-item">
              Rehearsal of the hairstyle (trial)
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 1-1.5h)
            </li>
            <li class="card__point-item">
              Help with morning photosession (30 min)
            </li>
            <li class="card__point-item">
              Help with the veil and dress lacing
            </li>
            <li class="card__point-item">
              Accompanying the stylist throughout the wedding day: maintaining
              the freshness of the hairstyle
            </li>
            <li class="card__point-item">
              Change of hairstyle during the wedding day
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'package_premium')"
          >
            Book
          </button>
        </div>
      </div>

      <div class="service-page__list-triple mt-5">
        <div />
        <div class="service-page__list-border" />
        <div class="service-page__card">
          <div class="card__title">
            Guests package
          </div>
          <p class="card__subtitle">
            <small> (gathering starting from 3-6 guests) </small>
          </p>
          <p class="card__description">
            If you want to take care of your guests on the day of the
            celebration
          </p>
          <img
            class="card__image"
            alt="Guests package, gathering of 3-6 guests"
            src="@/assets/images/service4.jpg"
            loading="lazy"
          >
          <p class="card__price">
            Price - from <span class="price">180€</span> to
            <span class="price">360€</span>
          </p>
          <p class="card__price-text">
            Price depends on the number of guests
          </p>

          <p class="card__price-text">
            Travelling for far distances (out of town) is paid separately
          </p>

          <ul class="card__points">
            <li class="card__point-item">
              Includes the work of my assistant to quickly gather your guests in
              a short period of time
            </li>
            <li class="card__point-item">
              Consultation on all your questions before the gathering day
            </li>
            <li class="card__point-item">
              Support in choosing a hairstyle to create a harmonious image
            </li>
            <li class="card__point-item">
              Checklist for preparation to the gathering day
            </li>
            <li class="card__point-item">
              Travelling to the place of gathering
            </li>
            <li class="card__point-item">
              The gathering itself (it can take 40-50min)
            </li>
          </ul>

          <button
            class="card__book-button"
            @click="$emit('reach-out', 'package_guests')"
          >
            Book
          </button>
        </div>
        <div class="service-page__list-border" />
        <div />
      </div>
    </b-container>
  </div>
</template>
