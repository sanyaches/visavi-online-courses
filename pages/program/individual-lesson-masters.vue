<template>
  <div class="program-page">
    <b-button class="program-page__buy-button">
      <div>
        {{ $t('program.common.buy_button') }}
      </div>
    </b-button>

    <b-container class="promo-container">
      <div class="program-page__promo">
        <div class="program-page__promo-background">
          <img class="program-page__thumbnail" src="/api/upload/myself-course-thumb.jpg">
        </div>
        <div class="program-page__promo-content">
          <div class="program-page__promo-content-background">
            <div class="program-page__promo-text">
              <div class="program-page__promo-header">
                <h1 class="program-page__title">
                  <span>{{ $t('program.individual_lesson_masters.title') }}</span>
                </h1>
                <div class="program-page__image">
                  <img src="/api/uploads/myself-course-thumb.jpg">
                </div>
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
              <div class="program-page__control">
                <b-button class="button button--brown-dark button button--large">
                  {{ $t('program.common.buy') }}
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>

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
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/program-page.scss" />
