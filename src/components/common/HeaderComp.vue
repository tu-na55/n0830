<template lang="pug">
header
  v-app-bar(
    class="red darken-3"
    dark
    dense
    app
  )
    //- fixed
    //- hide-on-scroll
    //- scroll-target="#appBar_hideOnScroll"
    v-toolbar-title(
      class=".text-center"
      v-text="appBarTitle"
    )
    v-spacer

    //- ////////////////////
    //- icon + tooltip
    v-tooltip(bottom)
      template(v-slot:activator="{ on, attrs }")
        v-btn.mx-2(
          icon
          v-bind="attrs"
          v-on="on"
        )
          template
            .font-awesome
              font-awesome-icon.fa-lg(icon="desktop")
      span 大画面表示設定
    //- icon + tooltip
    v-tooltip(bottom)
      template(v-slot:activator="{ on, attrs }")
        v-btn.mx-2(
          icon
          v-bind="attrs"
          v-on="on"
        )
          template
            .font-awesome
              font-awesome-icon.fa-lg(icon="database")
      span データベース管理
    //- icon + tooltip
    v-tooltip(bottom)
      template(v-slot:activator="{ on, attrs }")
        v-btn.mx-2(
          icon
          v-bind="attrs"
          v-on="on"
        )
          template
            .font-awesome
              font-awesome-icon.fa-lg(icon="question-circle")
      ul
        h5
          strong 動作条件
        li Windows10
        li Chrome ver.xx（IE未対応）
        li 手動ロックとタイムアウトについて
    //- ////////////////////
    span
      small {{ loginID }}


    //- ////////////////////
    //- tab
    template(v-slot:extension)
      v-tabs(
        v-model="tabs"
        centered
        text
      )
        //- fixed-tabs
        //- active-class="red--text text--darken-3"
        //- color="red darken-1"
        //- background-color="white"
        //- class="grey--text.text--darken-4"
        //- active-class="red--text text--darken-3"
        //- slider-color="red darken-3"
        v-tabs-slider
        v-tab(to="/report/view") 周知状況
          //- template
          //-   .font-awesome
          //-     font-awesome-icon.fa-lg(icon="newspaper")
          //- v-icon list
          //- v-icon dashboard
          //- v-icon description
          //- v-icon mdi-library_books
        v-tab(to="/report/register") 基本情報管理
          //- template
          //-   .font-awesome
          //-     font-awesome-icon.fa-lg(icon="file-alt")
        v-tab(to="/report/controll") 発出管理
          //- template
          //-   .font-awesome
          //-     font-awesome-icon.fa-lg(icon="inbox")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class HeaderComp extends Vue {
  loginID = 'TEST0001'
  appBarTitle = 'App'
  tabs = null
}
</script>
