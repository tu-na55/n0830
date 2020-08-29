<template lang="pug">
article
  v-card
    //- h3 モデル登録画面
    //- p
    //-   blockquote.blockquote 状況を登録するための画面です。周知は周知管理画面より行ってください。
    //- p 削除はgit風にIDを入力させる。
    //- v-divider
    v-row
      v-col(cols="4")
        v-card-title 各フォームパーツを設置
    v-row
      v-col(cols="4")
        v-menu(
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        )
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              color="grey"
              v-model="date"
              label="開始日"
              hint="初回登録時以外の日付を入力します"
              readonly
              v-bind="attrs"
              v-on="on"
            )
          v-date-picker(v-model="date" @input="menu1 = false")
        //- template
        //-   font-awesome
        //-     font-awesome-icon.fa-lg(icon="calendar-day")

      v-col(cols="4")
        v-text-field(
          color="grey"
          label="開始時刻"
          hint="初回登録時以外の時刻を入力します"
          value="12:00:00"
          type="time"
        )
    v-row
      v-col(cols="4")
        v-text-field(
          color="grey"
          label="終了時刻"
          value="12:00:00"
          type="time"
        )
    v-card-actions
      v-spacer

      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="building")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="table")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="tags")

      v-btn.ma-2.white--text(
        color="grey"
      ) {{ getSaveButtonTitle() }}
        //- v-icon(
        //-   right
        //-   dark
        //- ) mdi-cloud-upload
        //- :loading="saveLoading"
        //- :disabled="saveLoading"
        //- @click="loader = 'saveloading'"

      v-btn(
        outlined
        @click="tree = []"
      ) クリア
        //- v-icon undo
      //- v-btn(
      //-   text
      //-   @click="tree = []"
      //- ) Reset
      //- v-btn(icon)
      //-   v-icon close
      //- v-btn(
      //-   color="primary"
      //-   depressed
      //- ) {{ saveButtonTitle }}
        //- nuxt
        //- to="/inspire"


  //- ReportRegisterCard
  SnackbarComp
</template>
<script lang="ts">
// import { Component, Vue } from 'nuxt-property-decorator'
import ReportRegisterCard from '@/components/reportRegister/ReportRegisterCard.vue'
import SnackbarComp from '@/components/common/SnackbarComp.vue'

import Vue from 'vue'
export default Vue.extend({
  name: 'PageReportRegister',
  layout: 'ReportLayout',
  components: { ReportRegisterCard, SnackbarComp },

  data() {
    return {
      tree: [],
      isNewID: true,
      saveLoading: false,
      saveButtonTitle: '',
      // IDを指定していれば'更新'
      snackbar: false,
      menu1: false,
      date: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    getSaveButtonTitle() {
      // console.log(this.isNewID)
      return (this.saveButtonTitle = this.isNewID ? '登録' : '更新')
      // return (this.saveButtonTitle = this._id === 1 ? '登録' : '更新')
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    },
  },

  // @Watch('loader')
  // onChangeLoadingStatus() {
  //   const l = this.loader
  //   this[l] = !this[l]

  //   setTimeout(() => (this[l] = false), 3000)

  //   this.loader = null
  // }
})
</script>
