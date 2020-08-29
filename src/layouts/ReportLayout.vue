<template lang="pug">
v-app#app
  HeaderComp
  //- RightSideComp
  v-container(style="height:96px; width:100%;")

    //- v-card
  nuxt
  FooterComp
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderComp from '@/components/common/HeaderComp.vue'
import FooterComp from '@/components/common/FooterComp.vue'

@Component({ components: { HeaderComp, FooterComp } })
export default class ReportLayout extends Vue {
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

/* Simple Reset */
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

#app {
  //   margin: 0;
  //  background: $bg-theme;
  font-family: $general-fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
