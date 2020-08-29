import Vue from 'vue'
// import 'moment/src/locale/ja'
import moment from 'moment'
Vue.use(moment)
Vue.config.productionTip = false

Vue.filter('momentFilter', function (value) {
  const date = moment(value)
  return date.format('YYYY/MM/DD HH:mm')
  // return date.format("YYYY.MM.DD(ddd)");
})

// filter date
// Vue.filter('formatUnix', function (value) {
//   if (value) {
//     return moment-timezone.tz(value * 1000, 'Asia/Tokyo').format('YYYY/MM/DD hh:mm:ss')
//   }
// })

// Vue.prototype.$moment = moment
// Vue.filter('LLLL', (date) => moment(date).format('LLLL'))
// Vue.filter('fromNow', (date) => moment(date).fromNow())

// export default new Moment()
// ({
// icons: {
//   iconfont: 'md',
// },
// })

// piyo() {
//   ...mapGetters('hoge', {
//     fuga: 'getFuga'
//   }),
//   return this.$moment(fuga).format('YYYY-MM-DD')
// }
// const moment = require('moment-timezone')
// export default ({ app }, inject) => {
//   // Inject into context, Due instances, and Vuex store
//   inject('moment_timezone', moment)
// }
