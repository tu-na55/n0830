<template lang="pug">
v-navigation-drawer(
  v-model="rightDrawer"
  :right="right"
  temporary fixed
  app
)
  v-list
    v-list-item(@click.native="right = !right")
      v-list-item-action
        v-icon(light) mdi-repeat
      v-list-item-title Switch drawer (click me)

//- appbar
//- v-spacer
//- v-btn(
//-   icon
//-   @click.stop="rightDrawer = !rightDrawer"
//- )
//-   v-icon mdi-menu


</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class RightSideComp extends Vue {
  data() {
    return {
      right: true,
      rightDrawer: true,
    }
  }
}
</script>
