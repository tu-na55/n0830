<template lang="pug">
v-container
  v-sheet(
    class="red darken-3"
    dark
  )
  h3 login

  v-btn(text) パスワード変更
  //- overlay
  //- //mailForm

  v-btn(icon)
    template
      .font-awesome
        font-awesome-icon.fa-lg(icon="sign-in-alt")


</template>

<script lang="ts">
import Vue from 'vue'
// import LoginLayout from '@/layouts/LoginLayout.vue'
// import { Component, Vue } from 'nuxt-property-decorator'
// @Component({
//   name: 'app',
//   layout: 'LoginLayout',
//   components: {},
// })
// export default class PageLoginIndex extends Vue {}
export default Vue.extend({
  name: 'PageLogin',
  layout: 'LoginLayout',
  components: {},
  // data: () {
  //   return {

  // }},

  // methods:sendMailChengePassword}
})
</script>
