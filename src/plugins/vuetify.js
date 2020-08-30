import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ja from 'vuetify/src/locale/ja'
// import ja from 'vuetify/es5/locale/ja.js'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
// library.add(fas) // Include needed icons

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: [ja],
    current: 'ja',
  },
  // icons: {
  //   iconfont: 'faSvg',
  // },
})

// new Vue()
//   render: h => h(App)
// }).$mount("#app")

// fortawesome

// library.add(faCalendarAlt, faTags)

// Vue.component('fa-icon', FontAwesomeIcon)

// Vue.config.productionTip = false
