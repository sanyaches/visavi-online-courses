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
      <div class="single-lesson-single__image">
        <img :alt="singleLesson.description" :src="singleLesson.thumbnailUrl">
      </div>
      <h1 class="single-lesson-single__title">
        {{ singleLesson.title }}
      </h1>
      <div class="single-lesson-single__price">
        <span>{{ $t('single_lesson.price') }}</span>
        <span>{{ singleLesson.price }}</span>
      </div>
      <div class="single-lesson-single__description">
        <v-md-preview :text="singleLesson.description" />
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
    try {
      const response = await context.app.$http.$get(
          `api/single-lesson/single/${name}`
      )

      return {
        singleLesson: response.data
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      singleLesson: {}
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
