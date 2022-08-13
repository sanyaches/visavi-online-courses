<template>
  <div class="admin-users py-4">
    <b-container>
      <h1>{{ $t('admin.users.title') }}</h1>

      <template v-if="loading">
        Loading...
      </template>
      <template v-else>
        <b-table
          id="admin-users"
          class="mt-4"
          responsive
          striped
          small
          hover
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          per-page="100"
        />
        <b-pagination
          v-model="currentPage"
          class="mt-2"
          :total-rows="rowsCount"
          per-page="100"
          aria-controls="admin-users"
        />
        <b-form-textarea
          size="lg"
          :value="importingRawData"
          rows="30"
          style="padding: 10px 0 40px"
        />
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'adminAuth',

  data () {
    return {
      items: [],
      currentPage: 1,
      usersLoading: false,
      fields: [
        {
          key: 'firstName',
          sortable: true
        },
        {
          key: 'lastName',
          sortable: true
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true
        },
        {
          key: '_id',
          label: 'ID',
          sortable: true
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/getToken'
    }),
    rowsCount () {
      return this.items.length
    },
    loading () {
      return this.usersLoading
    },
    importingRawData () {
      if (!this.items.length) {
        return ''
      }

      let str = ''

      for (const user of this.items) {
        str += `${user.email}|`
      }

      return str
    }
  },

  beforeMount () {
    this.init()
  },

  methods: {
    async init () {
      const url = '/api/users/list'

      try {
        this.usersLoading = true
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          }
        })
        const data = await res.json()
        if (data?.status === 'success') {
          this.items = data.users
        }
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
      } finally {
        setTimeout(() => {
          this.usersLoading = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-users {
  overflow-x: hidden;
}
</style>
