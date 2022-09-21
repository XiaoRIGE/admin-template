import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import preset from './default-preset/preset'

Vuetify.config.silent = false // 此选项将停止 所有的 Vuetify 日志和警告

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: {
      customProperties: true, // 启用 customProperties 也会为每个主题颜色生成一个 css变量
      variations: false,
    },
    // theme: { disable: true },
    themes: {
      // 自定义主题色
      light: {
        primary: '#0078D6',
        secondary: '#4EAFFD',
        // accent: '#82B1FF',
        error: '#D92121',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107',
      },
    },
  },
})
