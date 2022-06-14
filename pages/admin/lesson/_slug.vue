<template>
  <div class="lesson-single">
    <b-container>
      <div>
        <b-button @click="$router.go(-1)">
          {{ $t('common.back') }}
        </b-button>
      </div>
      <div class="lesson-single__controls">
        <b-button-group>
          <b-button variant="outline-info" @click="1">
            {{ $t('common.edit') }}
          </b-button>
          <b-button variant="danger" @click="deleteLesson(lesson)">
            {{ $t('common.delete') }}
          </b-button>
        </b-button-group>
      </div>
      <div class="lesson-single__video">
        <video controls>
          <source
            :src="lesson.videoUrl"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <h1 class="lesson-single__title">
        {{ lesson.title }}
      </h1>
      <div class="lesson-single__description">
        <v-md-preview :text="lesson.description" />
      </div>
      <div class="lesson-single__files">
        <h2>{{ $t('lesson.files_title') }}</h2>
        <b-button variant="outline-info" @click="openAddFileForm">
          {{ $t('lesson.files_add_button') }}
        </b-button>

        <b-form v-if="fileFormOpen" @submit.prevent="submitFileForm">
          <div class="lesson-single__file-form">
            <label for="file-name">
              <div>{{ $t('lesson.file_form.name') }}</div>
              <b-input id="file-name" v-model="newFileForm.name" required autocomplete="file-name" type="text" />
            </label>

            <label for="file-title">
              <div>{{ $t('lesson.file_form.title') }}</div>
              <b-input id="file-title" v-model="newFileForm.title" required autocomplete="file-title" type="text" />
            </label>

            <label for="file-resource-url">
              <div>{{ $t('lesson.file_form.resource_url') }}</div>
              <b-input id="file-resource-url" v-model="newFileForm.resourceUrl" required autocomplete="file-resource-url" type="text" />
            </label>

            <b-button type="submit" class="mt-2">
              {{ $t('lesson.file_form.submit') }}
            </b-button>
          </div>
        </b-form>

        <div v-if="files.length" class="lesson-single__files-list">
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
          `${context.env.baseUrl}/api/lesson/single/${name}`
      )
      return {
        lesson: response.data.lesson,
        files: response.data.files
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      lesson: {},
      files: [],
      newFileForm: {
        name: '',
        title: '',
        resourceUrl: ''
      },
      fileFormOpen: false
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  methods: {
    openAddFileForm () {
      this.fileFormOpen = !this.fileFormOpen
    },
    async submitFileForm () {
      const jsonBody = JSON.stringify({
        name: this.newFileForm.name,
        title: this.newFileForm.title,
        lessonName: this.lesson.name,
        resourceUrl: this.newFileForm.resourceUrl
      })

      const url = '/api/lesson/add-file'

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
            lessonName: this.lesson.name,
            title: this.newFileForm.title,
            resourceUrl: this.newFileForm.resourceUrl
          })

          this.newFileForm.name = ''
          this.newFileForm.title = ''
          this.newFileForm.lessonName = ''
          this.newFileForm.resourceUrl = ''
          this.fileFormOpen = false

          return
        }

        this.newFileForm.name = ''
        this.newFileForm.title = ''
        this.newFileForm.lessonName = ''
        this.newFileForm.resourceUrl = ''

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

    async deleteLesson (lesson) {
      if (!window.confirm(this.$t('admin.delete_lesson_confirmation', { name: lesson.title }))) {
        return
      }

      const jsonBody = JSON.stringify({
        name: lesson.name
      })

      const url = '/api/lesson/delete'

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

          this.$router.push(this.localePath({ path: `/admin/course/${this.lesson.courseName}` }))

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
.lesson-single {
  padding: 2rem 0;

  &__title {
    text-align: center;
    margin: 1rem 0;
  }

  &__image {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      width: 420px;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
    }
  }

  &__video {
    width: 720px;
    overflow: hidden;
    margin: 0 auto;

    video {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      width: 420px;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
    }
  }

  &__file-form {
    display: flex;
    flex-direction: column;
  }

  &__files-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }

  &__price {
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
