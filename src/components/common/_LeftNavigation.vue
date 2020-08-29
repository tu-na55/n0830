<template lang="pug">
article
  //- v-app-bar-nav-icon(@click.stop="handleDrawer")
  v-btn(icon @click.stop="handleDrawer")
    template
      .font-awesome
        font-awesome-icon.fa-lg(icon="bars")



  v-navigation-drawer(
    v-model="drawer"
    :clipped="clipped"
    absolute
    temporary
    app
  )
    v-list(nav dense)
      //- permanent
      //- v-list-item-title.grey--text.text--darken-4 Menu
      //- v-list-item-subtitle subtitle
      //- v-divider

      v-list-item-group(
        v-model="group1"
        color="grey"
        active-class="red--text text--darken-3"
      )
        v-list-item(
          v-for="(item, i) in items1" :key="i" :to="item.to"
          router exact
        )
          v-list-item-action
            //- (light @click.stop="drawer=!drawer")
            //- v-icon {{ item.icon }}
            template
              .font-awesome
                font-awesome-icon.fa-lg( :icon="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")
      v-divider

      v-list-item-group(
        v-model="group2"
        active-class="red--text text--darken-3"
      )
        v-list-item(
          v-for="(item, i) in items2" :key="i" :to="item.to"
          router exact
        )
          v-list-item-action
            //- (light @click.stop="drawer=!drawer")
            template
              .font-awesome
                font-awesome-icon.fa-lg( :icon="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")


</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class LeftNavigation extends Vue {
  clipped = false
  drawer = false
  // miniVariant: false
  group1 = null
  group2 = null

  items1 = [
    {
      icon: 'newspaper',
      title: '速報',
      to: '/report/view',
    },

    {
      // icon: 'desktop',
      icon: 'tv',
      title: '大画面表示',
      to: '/display',
    },
    // {
    //   icon: 'mdi-apps',
    //   title: 'prompt report',
    //   to: '/',
    // },
    // {
    //   icon: 'dashboard',
    //   title: '作業（ローカル）:workspace',
    //   to: '/',
    // },
    // {
    //   icon: 'mdi-chart-bubble',
    //   title: 'Inspire',
    //   to: '/inspire',
    // },
  ]

  items2 = [
    {
      icon: 'cog',
      title: 'Admin',
      to: '/admin',
    },
  ]

  // methods:
  handleDrawer() {
    this.drawer = !this.drawer
  }
}
</script>
