<template lang="pug">
v-container(fluid grey lighten-4)
  v-toolbar(color="pink lighten-4" dense)
    v-toolbar-title(flat) title
  v-card
    v-row()
      v-col(cols="4")
        v-card-title 各フォームパーツを設置
    v-row
      v-col(cols="4")
        v-menu(
          v-model="startDatePickerMenu"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        )
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              color="grey"
              v-model="startDatePicker"
              label="開始日"
              hint="初回登録時以外の日付を入力します"
              readonly
              v-bind="attrs"
              v-on="on"
            )
          v-date-picker(
            no-title
            color="red"
            header-color="red"
            locale="jp-ja"
            v-model="startDatePicker"
            @input="startDatePickerMenu = false"
          )
            //- template
            //-   font-awesome
            //-     font-awesome-icon.fa-lg(icon="calendar-day")

            //- :day-format="date => new Date(date).getDate()"
            //- :formatted-value.sync="formattedStartDatePickerDate"



      v-col(cols="4")
        v-text-field(
          color="grey"
          label="開始時刻"
          hint="初回登録時以外の時刻を入力します"
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


      v-textarea(
        class="mt-0"
        solo
        label="textarea"
        auto-grow
        rows="1"
        value=""
        placeholder="初期値"
      )
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

      startDatePickerMenu: false,
      // formattedStartDatePickerDate: '',
      // startDatePicker: '',
      // startDatePicker: new Date().getDate(),
      startDatePicker: new Date().toISOString().substr(0, 10),
    }
  },
  // computed: {
  //   console.log('computed')
  // },
  methods: {
    getSaveButtonTitle() {
      // console.log(this.isNewID)
      return (this.saveButtonTitle = this.isNewID ? '登録' : '更新')
      // return (this.saveButtonTitle = this._id === 1 ? '登録' : '更新')
    },
    // formatDate(date) {
    //   if (!date) return null

    //   const [year, month, day] = date.split('-')
    //   return `${year}/${month}/${day}`
    // },
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
