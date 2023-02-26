<template>
  <div class="main-card">
    <div class="main-card__container">
      <div class="main-card__image" @click="$router.push(pageUrl)">
        <img :src="imageSrc">
      </div>
      <div class="main-card__content">
        <div class="main-card__title">
          <nuxt-link :to="pageUrl">
            <span>{{ title.split(' | ')[0] }}</span>
            <br>
            <span>{{ title.split(' | ')[1] }}</span>
          </nuxt-link>
        </div>
        <div class="main-card__description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    pageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.main-card {
  &__container {
    width: 100%;
    z-index: 2;

    @media screen and (max-width: 991px) {
      top: 0;
      position: static;
    }
  }

  &__image {
    cursor: pointer;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }
  }

  &__price {
    font-size: 2.2rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: #fff;
    text-align: right;
    font-weight: 700;
    line-height: 100%;
    font-family: 'Alegreya SC', serif;

    span.currency {
      text-transform: uppercase;
      font-size: 1.3rem;
    }

    .old {
      color: #bebebe;
      font-size: 2rem;
      position: relative;
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        height: 4px;
        background-color: rgb(160, 130, 130);
        top: 50%;
        left: -10%;
        width: 120%;
        opacity: 0.75;
        transform: rotate(-15deg);
      }
    }

    .new {
      color: #fff;
    }
  }

  &__content {
    padding-right: 1rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      padding-right: 0;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    text-decoration: underline;

    a, a:visited {
      color: #fff;
    }

    a:hover, a:active {
      color: #f4e6dc;
    }

    @media screen and (max-width: 1199px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 991px) {
      color: #212529;

      a, a:visited {
        color: #212529;
      }

      a:hover, a:active {
        color: #938378;
      }
    }
  }

  &__description {
    .github-markdown-body {
      padding: 1rem 0;
      font-family: 'Raleway', sans-serif;
      color: #fff;

      @media screen and (max-width: 991px) {
        color: initial;
      }
    }
  }
}
</style>
