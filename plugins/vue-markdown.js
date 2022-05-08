import Vue from 'vue'
import VMdEditor from '@kangc/v-md-editor'
import VMdPreview from '@kangc/v-md-editor/lib/preview'

import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import ruRu from '@kangc/v-md-editor/lib/lang/ru-RU'
import hljs from 'highlight.js'

VMdEditor.lang.use('ru-RU', ruRu)
VMdEditor.use(githubTheme, {
  Hljs: hljs
})

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

Vue.use(VMdPreview)
Vue.use(VMdEditor)
