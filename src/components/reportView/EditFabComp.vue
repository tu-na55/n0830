<template lang="pug">
  v-menu(
    transition="slide-y-transition"
    bottom
  )
    template(v-slot:activator="{ on, attrs }")
      v-btn(
        absolute
        fab
        bottom right
        dark color="red"
        large
        v-bind="attrs"
        v-on="on"
      )
        //- v-icon(
        //-   dark
        //-   large
        //- ) mdi-plus
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="plus")
    v-list
      v-list-item(
        v-for="(item, i) in editFabDropItems"
        :key="i"
        :to="item.to"
        @click="selectFormModel(i)"
      )
        v-list-item-title {{ item.title }}
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class EditFabComp extends Vue {
  editFabDropItems = [
    { title: '空の登録票', to: '/report/register' },
    { title: 'ブックマークから転用', to: '/report/register/id' },
  ]

  // _id: number = 0
  _id: number = 3

  // methods
  selectFormModel(i: number) {
    console.log(i)
    console.log(this._id)
  }
}
</script>
