<template>
  <div class="main">
    <BlocksIndexHero />

    <BlocksIndexAuthor />

    <BlocksIndexPortfolio />

    <BlocksIndexEducationPrograms />

    <BlocksIndexServices />

    <div id="main-faq" class="faq">
      <b-container>
        <div class="faq__header">
          <h2 class="faq__title">
            {{ $t('index.faq_title') }}
          </h2>
        </div>
        <div class="faq__list">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-3">
              <b-card-header header-tag="header" class="faq__question" role="tab">
                <b-button v-b-toggle.accordion-1 class="faq__question-button" block>
                  <div class="faq__question-title">
                    {{ $t('index.faq.first.question') }}
                  </div>
                  <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                  <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="faq__answer">
                  {{ $t('index.faq.first.answer') }}
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
              <b-card-header header-tag="header" class="faq__question" role="tab">
                <b-button v-b-toggle.accordion-2 class="faq__question-button" block>
                  <div class="faq__question-title">
                    {{ $t('index.faq.second.question') }}
                  </div>
                  <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                  <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="faq__answer">
                  {{ $t('index.faq.second.answer') }}
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
              <b-card-header header-tag="header" class="faq__question" role="tab">
                <b-button v-b-toggle.accordion-3 class="faq__question-button" block>
                  <div class="faq__question-title">
                    {{ $t('index.faq.third.question') }}
                  </div>
                  <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                  <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="faq__answer">
                  {{ $t('index.faq.third.answer') }}
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
              <b-card-header header-tag="header" class="faq__question" role="tab">
                <b-button v-b-toggle.accordion-4 class="faq__question-button" block>
                  <div class="faq__question-title">
                    {{ $t('index.faq.fourth.question') }}
                  </div>
                  <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                  <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="faq__answer">
                  {{ $t('index.faq.fourth.answer') }}
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
              <b-card-header header-tag="header" class="faq__question" role="tab">
                <b-button v-b-toggle.accordion-5 class="faq__question-button" block>
                  <div class="faq__question-title">
                    {{ $t('index.faq.fifth.question') }}
                  </div>
                  <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                  <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="faq__answer">
                  {{ $t('index.faq.fifth.answer') }}
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </b-container>
    </div>

    <div class="contacts">
      <b-container>
        <div class="contacts__title">
          {{ $t('index.contacts_title') }}
        </div>
        <div class="contacts__socials">
          <div class="social">
            <a target="_blank" href="https://instagram.com/vi.kosto">
              <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
            </a>
          </div>
          <div class="social">
            <a target="_blank" href="https://t.me/vi_kosto/">
              <font-awesome-icon class="social-icon" icon="fa-brands fa-telegram" />
            </a>
          </div>
        </div>
        <div class="contacts__contacts">
          <h3>{{ $t('index.contacts_contacts') }}</h3>
          <div>
            <a href="mailto:vi.kosto@yandex.ru" class="anchor anchor--raw">vi.kosto@yandex.ru</a>
          </div>
          <div>
            <a href="tel:+79877887381" class="anchor anchor--raw">+7 (987) 788 7381</a>
          </div>
          <div>Савкина Виктория Денисовна</div>
          <div>ИНН: 561019006810</div>
        </div>

        <div class="contacts__documents mt-5">
          <nuxt-link :to="localePath('/privacy-policy')" class="anchor anchor--raw" style="font-size: 1.1rem; margin-right: 1rem;">
            {{ $t('index.privacy_policy') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/offer')" class="anchor anchor--raw" style="font-size: 1.1rem;">
            {{ $t('index.public_offer') }}
          </nuxt-link>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    try {
      const locale = context.i18n.locale
      const responseCourses = await context.app.$http.$get(
        `${context.env.baseUrl}/api/course/list?limit=1000&offset=0&locale=${locale}&myself=false`
      )
      const responseCoursesYourself = await context.app.$http.$get(
        `${context.env.baseUrl}/api/course/list?limit=1000&offset=0&myself=true&locale=${locale}`
      )

      return {
        courses: responseCourses.data,
        coursesForYourself: responseCoursesYourself.data
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      courses: [],
      coursesForYourself: []
    }
  },

  head () {
    return {
      title: this.$t('index.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index.seo.description')
        },
        { name: 'keywords', content: this.$t('index.seo.keywords') },
        {
          name: 'news_keywords',
          content: this.$t('index.seo.keywords')
        },
        {
          property: 'og:title',
          content: this.$t('index.seo.title')
        },
        {
          property: 'og:description',
          content: this.$t('index.seo.description')
        },
        {
          property: 'og:image:alt',
          content: this.$t('index.seo.description')
        }
      ],
      link: [{ rel: 'canonical', href: process.env.BASE_URL }]
    }
  },

  computed: {
    lessonCoursesMyself () {
      return this.coursesForYourself.filter(course => !course.name.startsWith('course-myself'))
    }
  }
}
</script>

<style scoped lang="scss">
.faq {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 2.5rem 0 1rem;
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  &__list {
    margin-top: 2rem;
  }

  &__question {
    padding: 0;
  }

  &__question-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    border-radius: 0;
    box-sizing: border-box;
    border: 1px solid #b6a498;

    @media screen and (max-width: 991px) {
      padding: 0.6rem 2rem;
    }

    &.not-collapsed {
      background-color: #b6a498;
    }

    &:not(:disabled):not(.disabled):active {
      background-color: #cabaaf;
    }

    &.btn-secondary:not(:disabled):not(.disabled):active:focus,
    &.btn-secondary:focus {
      box-shadow: none;
    }

    &.collapsed {
      background-color: #fff;
      color: #b6a498;
    }
  }

  &__question-button.not-collapsed .open-icon {
    display: none;
  }

  &__question-button.collapsed .close-icon {
    display: none;
  }

  &__question-button.not-collapsed .close-icon {
    display: block;
  }

  &__question-icon {
    font-size: 1.6rem;
  }

  &__question-title {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: left;
    margin-right: 0.6rem;

    @media screen and (max-width: 991px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  &__answer {
    background-color: #b6a498;
    color: #fff;
    padding: 0.5rem 2rem 1.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 991px) {
      font-size: 1rem;
      padding: 0.5rem 2rem 1rem;
    }
  }
}

.contacts {
  padding: 2rem 0 4rem;
  background-color: #b6a49833;

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  &__socials {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .social a {
    display: flex;
    align-items: center;
  }

  .social-icon {
    font-size: 4rem;
    color: #b6a498;
  }

  .social-text {
    font-size: 2.4rem;
    color: #b6a498;
  }

  &__contacts {
    margin-top: 3rem;
  }
}
</style>
