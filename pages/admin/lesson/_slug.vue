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
        <video controls width="250">
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
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData (context) {
    const name = context.params.slug
    try {
      const response = await context.app.$http.$get(
          `api/lesson/single/${name}`
      )
      return { lesson: response.data }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      lesson: {}
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    })
  },

  methods: {
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
    width: 600px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
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
