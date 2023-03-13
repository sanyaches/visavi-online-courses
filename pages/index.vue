<template>
  <div class="main">
    <BlocksIndexHero />

    <BlocksIndexAuthor />

    <BlocksIndexPortfolio />

    <template v-if="$i18n.locale === 'ru'">
      <BlocksIndexEducationPrograms />
      <BlocksIndexServices />
      <BlocksIndexReviewsEducation id="index-reviews" />
      <BlocksIndexReviewsServices />
    </template>

    <BlocksFaq />

    <div id="index-contacts" class="contacts">
      <b-container>
        <div class="contacts__title">
          {{ $t('index.contacts_title') }}
        </div>
        <div class="contacts__socials">
          <div class="social">
            <a target="_blank" href="https://ig.me/m/vi.kosto">
              <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
            </a>
          </div>
          <div class="social">
            <a target="_blank" href="https://t.me/vi_kosto/">
              <font-awesome-icon class="social-icon" icon="fa-brands fa-telegram" />
            </a>
          </div>
          <div class="social">
            <a target="_blank" href="https://wa.me/905542890793/">
              <font-awesome-icon class="social-icon" icon="fa-brands fa-whatsapp" />
            </a>
          </div>
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
.contacts {
  padding: 2rem 0 4rem;
  background-color: #b6a49833;

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;
    text-align: center;

    @media screen and (max-width: 991px) {
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
    justify-content: center;
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
