<template>
  <div class="single-lesson-single">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>
      <div class="single-lesson-single__controls">
        <b-button-group>
          <b-button variant="outline-info" @click="editSingleLesson(singleLesson)">
            {{ $t('common.edit') }}
          </b-button>
          <b-button variant="danger" @click="deleteSingleLesson(singleLesson)">
            {{ $t('common.delete') }}
          </b-button>
        </b-button-group>
      </div>
      <div class="single-lesson-single__video">
        <video controls :poster="singleLesson.thumbnailUrl">
          <source
            :src="singleLesson.promoUrl"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <h1 class="single-lesson-single__title">
        <span>{{ singleLesson.title.split(' | ')[0] }}</span>
        <br>
        <span>{{ singleLesson.title.split(' | ')[1] }}</span>
      </h1>
      <div class="single-lesson-single__price">
        <span>{{ $t('single_lesson.price') }}</span>
        <span>{{ singleLesson.price }}</span>
      </div>
      <div class="single-lesson-single__access_months">
        <span>{{ $t('single_lesson.access_months') }}</span>
        <span>{{ singleLesson.accessMonths }}</span>
      </div>
      <div class="single-lesson-single__description">
        <v-md-preview :text="singleLesson.description" />
      </div>
      <div class="single-lesson-single__files">
        <h2>{{ $t('single_lesson.files_title') }}</h2>
        <b-button variant="outline-info" @click="openAddFileForm">
          {{ $t('single_lesson.files_add_button') }}
        </b-button>

        <b-form v-if="fileFormOpen" @submit.prevent="submitFileForm">
          <div class="single-lesson-single__file-form">
            <label for="file-name">
              <div>{{ $t('single_lesson.file_form.name') }}</div>
              <b-input id="file-name" v-model="newFileForm.name" required autocomplete="file-name" type="text" />
            </label>

            <label for="file-title">
              <div>{{ $t('single_lesson.file_form.title') }}</div>
              <b-input id="file-title" v-model="newFileForm.title" required autocomplete="file-title" type="text" />
            </label>

            <label for="file-resource-url">
              <div>{{ $t('single_lesson.file_form.resource_url') }}</div>
              <b-input id="file-resource-url" v-model="newFileForm.resourceUrl" required autocomplete="file-resource-url" type="text" />
            </label>

            <label for="file-need-to-buy">
              <div>{{ $t('single_lesson.file_form.need_to_buy') }}</div>
              <b-checkbox id="file-need-to-buy" v-model="newFileForm.needToBuy" autocomplete="file-need-to-buy" type="checkbox" />
            </label>

            <label v-if="newFileForm.needToBuy" for="file-price">
              <div>{{ $t('single_lesson.file_form.price') }}</div>
              <b-input id="file-price" v-model="newFileForm.price" autocomplete="file-price" type="number" />
            </label>

            <b-button type="submit" class="mt-2">
              {{ $t('single_lesson.file_form.submit') }}
            </b-button>
          </div>
        </b-form>

        <div v-if="files && files.length" class="single-lesson-single__files-list">
          <file-card v-for="file in files" :key="file.name" :file="file" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'adminAuth',

  async asyncData (context) {
    const name = context.params.slug
    const token = context.app.$cookies.get('_vikosto_token')
    if (token) {
      context.app.$http.setToken(token, 'Bearer')
    }
    try {
      const response = await context.app.$http.$get(
          `${context.env.baseUrl}/api/single-lesson/single/${name}`
      )

      return {
        singleLesson: response.data.singleLesson,
        files: response.data.files
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLesson: {},
      newFileForm: {
        name: '',
        title: '',
        resourceUrl: '',
        needToBuy: false,
        price: 0
      },
      files: [],
      fileFormOpen: false
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  methods: {
    editSingleLesson (singleLesson) {
      const { name } = this.localeRoute({ path: '/admin/edit-single-lesson' })
      this.$router.push({
        name,
        params: { singleLesson }
      })
    },

    openAddFileForm () {
      this.fileFormOpen = !this.fileFormOpen
    },

    async submitFileForm () {
      const jsonBody = JSON.stringify({
        name: this.newFileForm.name,
        title: this.newFileForm.title,
        lessonName: this.singleLesson.name,
        resourceUrl: this.newFileForm.resourceUrl,
        needToBuy: this.newFileForm.needToBuy,
        price: this.newFileForm.price
      })

      const url = '/api/single-lesson/add-file'

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: jsonBody
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.$root.$bvToast.toast(this.$t('notify.success_add_file'), {
            title: this.$t('notify.success_add_file'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.files.push({
            name: this.newFileForm.name,
            title: this.newFileForm.title,
            lessonName: this.lesson.name,
            resourceUrl: this.newFileForm.resourceUrl,
            needToBuy: this.newFileForm.needToBuy,
            price: this.newFileForm.price
          })

          this.newFileForm.name = ''
          this.newFileForm.title = ''
          this.newFileForm.lessonName = ''
          this.newFileForm.resourceUrl = ''
          this.newFileForm.needToBuy = false
          this.newFileForm.price = 0
          this.fileFormOpen = false

          return
        }

        this.newFileForm.name = ''
        this.newFileForm.title = ''
        this.newFileForm.lessonName = ''
        this.newFileForm.resourceUrl = ''
        this.newFileForm.needToBuy = false
        this.newFileForm.price = 0

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase()
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
      }
    },

    async deleteSingleLesson (singleLesson) {
      if (!window.confirm(this.$t('admin.delete_lesson_confirmation', { name: singleLesson.title }))) {
        return
      }

      const jsonBody = JSON.stringify({
        name: singleLesson.name
      })

      const url = '/api/single-lesson/delete'

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: jsonBody
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.$root.$bvToast.toast(this.$t('notify.success_delete_lesson'), {
            title: this.$t('notify.success_delete_lesson'),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'success'
          })

          this.$router.push(this.localePath('admin'))

          return
        }

        throw data
      } catch (error) {
        if (error.errorCode) {
          const code = String(error.errorCode).toLowerCase()
          this.$root.$bvToast.toast(this.$t(`notify.error.${code}_msg`), {
            title: this.$t(`notify.error.${code}`),
            toaster: 'b-toaster-top-right',
            solid: true,
            variant: 'danger',
            appendToast: true
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.single-lesson-single {
  padding: 2rem 0;

  &__title {
    text-align: center;
    margin: 1rem 0;
  }

  &__video {
    width: 700px;
    overflow: hidden;
    margin: 0 auto;

    video {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      width: 320px;
    }
  }

  &__file-form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  &__files-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }

  &__price,
  &__access_months {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__description {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  &__lessons {
    margin-top: 2rem;
  }

  &__lessons-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  &__controls {
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
