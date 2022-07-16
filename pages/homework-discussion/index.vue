<template>
  <div class="chat-page">
    <b-container>
      <div class="chat-page__chat">
        <h2 class="chat-page__chat-title">
          {{ $t('chat.chat_title') }}
        </h2>
        <p v-if="chatLoading">
          {{ $t('chat.chat_loading') }}
        </p>
        <div id="chat-container" class="chat-page__chat-container" />
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData (context) {
    try {
      return {
        APP_ID: context.env.COMETCHAT_APP_ID,
        AUTH_KEY: context.env.COMETCHAT_AUTH_KEY,
        APP_REGION: context.env.COMETCHAT_REGION,
        WIDGET_ID: context.env.COMETCHAT_WIDGET_ID
      }
    } catch (e) {
      context.error(e)
    }
  },

  data () {
    return {
      APP_ID: '',
      AUTH_KEY: '',
      APP_REGION: '',
      WIDGET_ID: '',
      chatLoading: false
    }
  },

  computed: {
    ...mapGetters({
      profile: 'user/getMe',
      token: 'user/getToken'
    })
  },

  mounted () {
    this.initChat(this.profile)
  },

  methods: {
    initChat (user) {
      try {
        const UID = user.id
        const name = user.firstName
        const chatLocale = 'ru'

        if (!window.CometChatWidget) {
          return
        }
        const ChatWidget = window.CometChatWidget

        this.chatLoading = true

        ChatWidget.init({
          appID: this.APP_ID,
          appRegion: this.APP_REGION,
          authKey: this.AUTH_KEY
        }).then((response) => {
          const chatUser = new ChatWidget.CometChat.User(UID)
          chatUser.setName(name)

          ChatWidget.createOrUpdateUser(chatUser).then((user) => {
            ChatWidget.login({
              uid: UID
            }).then((loggedInUser) => {
              ChatWidget.launch({
                widgetID: this.WIDGET_ID,
                target: '#chat-container',
                roundedCorners: 'true',
                height: '100%',
                width: '100%',
                defaultID: '1',
                defaultType: 'user'
              }).then(() => {
                setTimeout(() => {
                  ChatWidget.localize(chatLocale)
                  this.chatLoading = false
                }, 1000)
              }).catch(() => {
                this.chatLoading = false
              })
            })
          })
        }).catch((e) => {
          console.error(e)
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
.chat-page {
  padding: 2rem 0;

  @media screen and (max-width: 991px) {
    padding: 1rem 0;
  }
}
.chat-page__chat-title {
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Cormorant SC', serif;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
}

.chat-page__chat-container {
  margin-top: 1rem;
  width: 100%;
  height: calc(100vh - 200px);

  .app__messenger {
    z-index: 20;
  }

  @media screen and (max-width: 480px) {
    height: calc(100vh - 120px);
  }
}
</style>
