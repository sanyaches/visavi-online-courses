<template>
  <div class="login-page mt-4">
    <b-container>
      <h1>Log in to visavi</h1>

      <form @submit.prevent="submitLogin">
        <label for="username">
          <input id="username" v-model="form.username" autocomplete="username" type="text">
        </label>
        <label for="password">
          <input id="password" v-model="form.password" autocomplete="password" type="password">
        </label>
        <button type="submit">
          {{ $t('login.submit') }}
        </button>
        <span v-if="isLoggedIn">
          Status: Logged in!
        </span>
        <span v-else>
          Status: Not logged in!
        </span>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isLoggedIn: false
    }
  },

  head () {
    return {
      title: this.$t('login.seo.title')
    }
  },

  methods: {
    submitLogin () {
      const jsonBody = JSON.stringify({ username: this.form.username, password: this.form.password })

      const url = '/api/login'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json'
        },
        body: jsonBody
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          if (data || data.status === '200') {
            this.isLoggedIn = true
          }
        })
    }
  }
}
</script>
