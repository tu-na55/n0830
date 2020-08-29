<template lang="pug">
v-app#app
  //- (dark)
  v-navigation-drawer(
    v-model="drawer"
    :clipped="clipped"
    absolute
    temporary
    app
  )
    //- fixed

    v-list
      //- nav dense
      //- permanent
      v-list-item(
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router exact
      )
        v-list-item-action
          //- (light @click.stop="drawer=!drawer")
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="item.title")
          //- .grey--text.text--darken-4 Menu
          //- v-list-item-subtitle subtitle

  //- v-app-bar(
  //-   :clipped-left="clipped"
  //-   fixed app
  //- )
  //-   v-app-bar-nav-icon(@click.stop="drawer = !drawer")

  //-   v-toolbar-title(v-text="title")
  //-   v-spacer
  //-   p loginID
    //- v-btn(
    //-   icon
    //-   @click.stop="rightDrawer = !rightDrawer"
    //- )
    //-   v-icon mdi-menu

  v-main
    v-container
      nuxt


</template>

<script>
// import Vue from 'vue'
// import Vue, { PropOptions } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

// @Component({})
@Component
// export default class extends Vue {
export default class Default2 extends Vue {
  // components: { myComponent },

  // export default {
  // el: '#app'
  // name = 'Default'
  // props: {}
  data() {
    return {
      clipped: false,
      drawer: false,
      // miniVariant: false,
      title: 'app',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        // {
        //   icon: 'mdi-desktop_windows',
        //   title: 'display',
        //   to: '/',
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
      ],
    }
  }

  //   get title() {
  //   return appStore.title
  // }
}
</script>
<style lang="scss" scoped>
$general-fonts: -apple-system, BlinkMacSystemFont, Roboto, 'Noto Sans JP', 'Segoe UI', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

// -apple-system, BlinkMacSystemFont,
// 'Helvetica Neue', 'Segoe UI',
// Meiryo, Arial

// $bg-theme: rgba(0, 0, 0, 0.86);
// $color-theme: #eee;

// html,
// body
// background-color: #2c3e50;
// margin: 0;

#app {
  //   margin: 0;
  //  background: $bg-theme;
  font-family: $general-fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
