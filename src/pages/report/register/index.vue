<template lang="pug">
v-container(fluid grey lighten-4)
  v-row(justify="center" align="start" class="")
    v-card
      //- green lighten-4
      v-card-text
        v-container
          v-row
            v-col(cols="12" class="pb-0 green lighten-4")
              v-subheader 時間
              v-list(three-line subheader class="pb-0")
                v-list-item
                  v-list-item-content
                    v-list-item-title 開始時刻
                    v-list-item-subtitle 登録時刻以外の日付を入力します（任意）
            v-col(cols="6" sm="4" md="4" class="pt-0 green lighten-4")
              v-list(class="pt-0")
                v-list-item
                  v-list-item-content
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
                          hint=""
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
            v-col(cols="6" sm="4" md="4" class="pt-0")
              v-list(class="pt-0")
                v-list-item
                  v-list-item-content
                    v-text-field(
                      color="grey"
                      label="開始時刻"
                      value="12:00:00"
                      type="time"
                    )
            v-divider


          v-row(class="amber lighten-4")
            v-col(cols="12" sm="6" md="4" class="grey lighten-2")
              v-text-field(label="Legal first name*" required)
            v-col(cols="12" sm="6" md="4" class="grey lighten-3")
              v-text-field(label="Legal first name*" required)
            v-col(cols="12" sm="6" md="4" class="grey lighten-2")
              v-text-field(label="Legal first name*" required)

            v-col(cols="12" sm="6")
              v-select(
                :items="['0-17', '18-29', '30-54', '54+']"
                  label="選択*"
                  required
            )

            v-col(cols="12" class="amber lighten-2")
              v-list(three-line subheader)
                v-subheader 内容
                v-list-item
                  v-list-item-content
                    v-text-field(label="事象" required)

                    v-list-item-title チェック
                    v-list-item-subtitle 必須項目
            v-col(cols="12" class="grey lighten-2")
              v-list
                v-list-item
                  v-list-item-action
                    v-checkbox(v-model="checkboxModel")
                  v-list-item-content
                    v-text-field(label="事象" required)

                    v-list-item-title チェック
                    v-list-item-subtitle 必須項目



          v-row(class="blue lighten-4")

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

      // checkbox
      checkboxModel: false,

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
