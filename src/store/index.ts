// import { Store } from 'vuex'
// import { initialiseStores } from '@/utils/store-accessor'
// const initializer = (store: Store<any>) => initialiseStores(store)
// export const plugins = [initializer]
// export * from '@/utils/store-accessor'

// import Vuex from 'vuex'

// import Vue from 'vue'
// export default Vue.extend({
// const store = new Vuex.Store({
//   state: {
//     counte: 1,
//   },
//   mutations: {
// insert(state, obj) {
//   const d = new Date()
//   const fmt =
//   d.getFullYear() + '-' + ('00' + (d.getMonth() + 1))
//   .slice(-2) + '-' + ('00' + d.getDate())
//   .slice(-2) + ' ' + ('00' + d.getHours())
//   .slice(-2) + ':' + ('00' + d.getMinutes()).slice(-2)
// state.todos.unshift({
//   content: obj.content,
//   created: fmt,
//   state: '作業前',
// })
//     },
//   },
// })

// ==========

// <template lang="pug">
//     h4(v-html="person.comment.replace(/\\n/g,'<br/>')")
// </template>

// const store = () =>
//   new Vuex.Store({
//     state: {
//       people: [
//         {
//           id: 1,
//           comment: '組込み開発の最新分野で、\n世界で求められる技術者として成長を',
//         },
//       ],
//     },
//   })
// export default store

// ==========
// export const state = () => ({
//   user: null,
//   auth: false
// })

// export const mutations = {
//   login(state, payload) {
//     state.auth = true
//     state.user = payload
//   },
//   logout(state) {
//     state.auth = false
//     state.user = null
//   }
// }

// export const actions = {
//   nuxtServerInit({ dispatch }, { req }) {
//     return dispatch('getSession')
//   },
//   async getSession({ commit }) {
//     const session = await this.$axios.$get('/api/session')
//     if (session && session.user) {
//       commit('login', session.user)
//     }
//   }
// }
