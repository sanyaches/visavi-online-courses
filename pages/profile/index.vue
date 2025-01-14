<template>
  <div class="profile">
    <b-container>
      <div v-if="getIsAuthenticated" class="mt-4">
        <h1>{{ getWelcomeText }}</h1>
        <div class="profile-password">
          <nuxt-link :to="localePath({path: 'change-password'})" class="anchor anchor--small anchor--brown">
            {{ $t('profile.change_password') }}
          </nuxt-link>
        </div>
        <div class="profile-lessons">
          <div class="profile-lessons__header text-center">
            <h2>
              {{ $t('profile.lessons_title') }}
            </h2>
          </div>
          <div class="profile-lessons__list">
            <template v-if="purchaseSingleLessonsKeys.length">
              <div v-for="singleLessonKey in purchaseSingleLessonsKeys" :key="singleLessonKey" class="profile-lessons__list-item">
                <single-lesson-card :lesson="singleLessonsDictionary[singleLessonKey]" :purchase="purchasesSingleLessons[singleLessonKey]" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_lessons') }}</span>
            </div>
          </div>
          <nuxt-link to="/#index-education-programs" class="anchor anchor--small anchor--brown">
            {{ $t('profile.see_lessons') }}
          </nuxt-link>
        </div>

        <div class="profile-courses">
          <div class="profile-courses__header text-center">
            <h2>
              {{ $t('profile.courses_title') }}
            </h2>
          </div>
          <div class="profile-courses__list">
            <template v-if="purchaseCoursesKeys.length">
              <div v-for="courseKey in purchaseCoursesKeys" :key="courseKey" class="profile-courses__list-item">
                <course-card :course="coursesDictionary[courseKey]" :purchase="purchasesCourses[courseKey]" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_courses') }}</span>
            </div>
          </div>
          <nuxt-link to="/#main-courses" class="anchor anchor--small anchor--brown">
            {{ $t('profile.see_courses') }}
          </nuxt-link>
        </div>

        <div class="profile-courses">
          <div class="profile-courses__header text-center">
            <h2>
              {{ $t('profile.files_title') }}
            </h2>
          </div>
          <div>
            <template v-if="myFiles.length">
              <div class="profile-courses__files-list">
                <file-card v-for="file in myFiles" :key="file.name" :file="file" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_files') }}</span>
            </div>
          </div>
        </div>

        <div class="profile-courses">
          <div class="profile-courses__header text-center">
            <h2>
              {{ $t('profile.certificates_title') }}
            </h2>
          </div>
          <div>
            <template v-if="myCertificates.length">
              <div class="profile-courses__files-list">
                <file-card v-for="file in myCertificates" :key="file.name" :file="file" />
              </div>
            </template>
            <div v-else>
              <span>{{ $t('profile.no_certificates') }}</span>
            </div>
          </div>
        </div>
      </div>
      <h2 v-else>
        Loading...
      </h2>
    </b-container>

    <b-modal id="bv-modal-offer" hide-footer @hide="clearOffer">
      <template #modal-title>
        {{ $t('offer.title') }}
      </template>
      <div class="d-block text-center">
        <div class="d-block">
          <img :src="offer.imageUrl" class="w-100">
        </div>
        <h3 class="mt-3">
          {{ $t('offer.text', { title: preparedTitle }) }}
        </h3>

        <div v-if="offer.price > 0" class="profile-offer__price">
          <span>{{ offer.price }}</span>
          <br>
          <span class="currency">{{ $t(`common.currency.${offer.currency}`) }}</span>
        </div>
        <div v-else class="profile-offer__price">
          {{ $t('common.free') }}
        </div>

        <div class="profile-offer__access">
          {{ $t('offer.access', { access: formattedMonths }) }}
        </div>
      </div>
      <b-button class="mt-3 button button--large button--brown-dark" block @click="acceptOffer">
        {{ $t('offer.proceed') }}
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatDuration } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'

const getFullName = (firstName, lastName) => {
  return [firstName, lastName].filter(Boolean).join(' ')
}

export default {
  middleware: 'authenticated',

  async asyncData (context) {
    try {
      const response = await context.app.$http.$get(
        `${context.env.baseUrl}/api/single-lesson/list-demo?limit=1000&offset=0`
      )
      const responseCourses = await context.app.$http.$get(
        `${context.env.baseUrl}/api/course/list?limit=1000&offset=0&myself=false`
      )
      const responseMyselfCourses = await context.app.$http.$get(
        `${context.env.baseUrl}/api/course/list?limit=1000&offset=0&myself=true`
      )

      return {
        singleLessons: response.data,
        courses: [...responseCourses.data, ...responseMyselfCourses.data]
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLessons: [],
      courses: [],
      offer: {}
    }
  },

  head () {
    return {
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    }
  },

  computed: {
    ...mapGetters({
      getMe: 'user/getMe',
      token: 'user/getToken',
      getIsAuthenticated: 'user/getIsAuthenticated',
      myCourses: 'user/getMyCourses',
      mySingleLessons: 'user/getMySingleLessons',
      myCertificates: 'user/getCertificates',
      myFiles: 'user/getFiles'
    }),

    getWelcomeText () {
      return this.$t('profile.welcome', { name: getFullName(this.getMe?.firstName, this.getMe?.lastName) })
    },

    purchaseCoursesKeys () {
      if (!this.myCourses || !this.myCourses.length) {
        return []
      }

      return this.myCourses
        .filter(item => item.courseName in this.coursesDictionary)
        .map((item) => {
          return item.courseName
        })
    },

    purchaseSingleLessonsKeys () {
      if (!this.mySingleLessons || !this.mySingleLessons.length) {
        return []
      }

      return this.mySingleLessons
        .filter(item => item.courseName in this.singleLessonsDictionary)
        .map((item) => {
          return item.courseName
        })
    },

    purchasesSingleLessons () {
      if (!this.mySingleLessons || !this.mySingleLessons.length) {
        return []
      }

      const purchasesSingleLessons = {}
      this.mySingleLessons.forEach((item) => {
        purchasesSingleLessons[item.courseName] = item
      })

      return purchasesSingleLessons
    },

    purchasesCourses () {
      if (!this.myCourses || !this.myCourses.length) {
        return []
      }

      const purchasesCourses = {}
      this.myCourses.forEach((item) => {
        purchasesCourses[item.courseName] = item
      })

      return purchasesCourses
    },

    coursesDictionary () {
      if (!this.courses || !this.courses.length) {
        return {}
      }

      const dictionary = {}

      for (const course of this.courses) {
        dictionary[course.name] = course
      }

      return dictionary
    },

    singleLessonsDictionary () {
      if (!this.singleLessons || !this.singleLessons.length) {
        return {}
      }

      const dictionary = {}

      for (const lesson of this.singleLessons) {
        dictionary[lesson.name] = lesson
      }

      return dictionary
    },

    formattedMonths () {
      return formatDuration({
        months: this.offer?.accessMonths
      }, { locale: this.$i18n.locale === 'ru' ? ru : enUS })
    },

    preparedTitle () {
      if (!this.offer || !this.offer.title) {
        return ''
      }

      return this.offer.title.split(' | ').join(' ')
    }
  },

  mounted () {
    const offer = this.$cookies.get('_vikosto_offer')

    if (!offer) {
      return
    }

    this.$bvModal.show('bv-modal-offer')
    this.offer = offer
  },

  methods: {
    ...mapActions({
      changeCheckoutItem: 'checkout/changeCheckoutItem',
      changeShowModal: 'checkout/changeShowModal'
    }),

    clearOffer () {
      this.$cookies.remove('_vikosto_offer')
    },

    acceptOffer () {
      this.clearOffer()

      this.changeCheckoutItem({ ...this.offer, itemType: this.offer.lessonType })
      this.changeShowModal(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-lessons {
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  padding: 2rem 1.5rem 4rem;
  margin-top: 3rem;

  &__header h2 {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.2rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__list {
    display: grid;
    margin-top: 2rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2rem;

     @media screen and (max-width: 1199px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__list-item {
    width: 20rem;

    @media screen and (max-width: 991px) {
      width: auto;
    }
  }

  &__files-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }
}

.profile-courses {
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  padding: 2rem 1.5rem 4rem;
  margin-top: 3rem;

  &__header h2 {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.2rem;

    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

   &__list {
    display: grid;
    margin-top: 2rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2rem;

    @media screen and (max-width: 1199px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__list-item {
    width: 20rem;

    @media screen and (max-width: 991px) {
      width: auto;
    }
  }
}
</style>
