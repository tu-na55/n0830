<template lang="pug">
v-container(fluid lighten-4)
  v-row(justify="center")
    //- class="pink lighten-4"
    v-col(
      class="pa-0"
      cols='12' sm='11' md='11'
    )
      v-card(
        class="px-2 pt-1 pb-2"
      )
        v-card-actions
          v-select(
            class="mr-3"
            :items="items2"
            label="Solo field"
            dense
            solo
            flat
            outlined
            hide-details
          )
          v-btn(
            icon outlined tile
            color="grey"
          )
            template
              .font-awesome
                font-awesome-icon.fa-lg(icon="sync")
          v-btn(
            icon outlined tile
            color="grey"
          )
            template
              .font-awesome
                font-awesome-icon.fa-lg(icon="calendar-day")
                //- font-awesome-icon(class="fas fa-lg" icon="pen")
                //- font-awesome-icon(class="fas fa-lg" icon="envelope")
          v-spacer
          v-menu(
            transition="slide-y-transition"
            left
          )
            template(v-slot:activator="{ on, attrs }")
              v-btn(
                icon tile
                color="grey"
                v-bind="attrs"
                v-on="on"
              )
                template
                  .font-awesome
                    font-awesome-icon(class="fas fa-lg" icon="ellipsis-v")
            v-list
              //- v-list-item-group(v-model="dotMenuGroup" color="red")
              v-list-item(
                @click="selectedCreateContent"
              )
                v-list-item-content
                  v-list-item-title 故障情報の登録
              v-list-item(
                @click="selectedEditContent"
              )
                v-list-item-content
                  v-list-item-title 故障情報の編集
              v-list-item(
                @click="selectedMailContent"
              )
                v-list-item-content
                  v-list-item-title 発出管理


        v-row(justify-xs="center" justify-sm="end")
          //- v-card-title
          v-col(class="mx-2" offset-sm="6" offset-md="6" cols="11" sm="6" md="6")
            v-spacer
            //- SearchIcon
            v-text-field(
              color="grey"
              v-model="search"
              label="検索"
              single-line
              clearable
            )
              template(slot="prepend-inner")
                v-btn(icon disabled)
                  template
                    .font-awesome
                      font-awesome-icon(class="fas fa-lg" icon="search")

        v-data-table(
          class=
          "mx-0 mx-sm-2 mx-md-2 mb-0 mb-sm-2 mb-md-2 reportViewTable elevation-1"
          color="red"
          item-key="id"
          :headers="reportHeaders"
          :items="reportItems"
          :search="search"
          :show-select="true"
          :single-select="true"
          @click:row="onClickRow"
          v-model="selectedTableModel"
        )

          //- class="px-xs-0 px-sm-2 px-md-2"
          //- show-expand
          //- single-expand
          //- :page.sync="page"
          //- :items-per-page="itemsPerPage"
          //- hide-default-footer
          //- loading
          //- loading-text="Loading..."
          //- v-model="selected"
          //- :single-select="singleSelect"
          //- item-key=""
          //- template(v-slot:items="props")
          //-   td {{ props.item.name }}
          //-   td(class="reportViewTable_item") {{ props.item.id }}
          //-   td(class="reportViewTable_item") {{ props.item.subject }}

            //- template v-slot:reportItem.bookmark-action="{ item }">
            //-   v-btn(icon)
            //-     template
            //-       .font-awesome
            //-         font-awesome-icon(class="fas fa-lg" icon="bookmark")

          //- アイコン埋め込み
          template(v-slot:item.detailAction="{ item }"
            v-icon
            small
            @click="onClickDetailIcon(item)"
          )
            v-btn(
              icon color="grey"
              @click="detailDialog = true"
            )
              template
                .font-awesome
                  font-awesome-icon(class="fas fa-lg" icon="info-circle")

          //- ラベル
          template(v-slot:item.status="{ item }")
            v-chip(
              :color="getReportStatusColor(item.status)"
              dark
            ) {{ item.status }}
          //- div(class="text-center pt-2")
          //-   v-pagination(v-model="page" :length="pageCount")

          //- expanded_true
          //- template(v-slot:expanded-item="{ headers, item }")
          //-   td(:colspan="headers.length") More info about {{ item.id }}

          //- checkbox_false
          //- template(v-slot:items="{props}")
            //- td(:active="props.selected" @click="props.selected = !props.selected")


    //- v-row
    //-   v-col
    //-   v-card
    //-     v-col(cols='6')
    //-       //- checkbox
    //-       v-btn(icon)
    //-         template
    //-           .font-awesome
    //-             font-awesome-icon.fa-lg(icon="bookmark")
    //-       v-btn(icon)
    //-         template
    //-           .font-awesome
    //-             font-awesome-icon.fa-lg(icon="thumbtack")
    //-       v-btn(icon)
    //-         template
    //-           .font-awesome
    //-             font-awesome-icon.fa-lg(icon="ellipsis-v")
    //-       v-btn(icon)
    //-         template
    //-           .font-awesome
    //-             font-awesome-icon.fa-lg(icon="file-upload")
  EditFabComp

  //- dialog component
  v-dialog(
    v-model="detailDialog"
    transition="scale-transition"
    scrollable
  )
    v-container(class="" fluid grey lighten-3)
      v-card
        v-container
          v-row(align="center" justify="center")
            v-col(cols="6")
              v-card-title test
              v-btn(color="blue darken-1" text @click="detailDialog = false") Close
              v-card-text test
                TimelineComp
            v-col(cols="12" sm="6" md="4" class="pink lighten-3")
              v-card-title タイムライン
                TimelineComp
                TimelineComp

  v-dialog(
    v-model="createContentDialog"
    fullscreen hide-overlay
    persistent no-click-animation
    transition="slide-x-reverse-transition"
  )
    v-container(class="" fluid grey lighten-3)
      v-card
        v-card-title test
        v-btn(color="grey" text @click="createContentDialog = false") Close
  v-dialog(
    v-model="editContentDialog"
    fullscreen hide-overlay
    persistent no-click-animation
    transition="slide-x-reverse-transition"
  )
    v-container(class="" fluid grey lighten-3)
      v-card
        v-card-title test
        v-btn(color="grey" text @click="editContentDialog = false") Close
  v-dialog(
    v-model="mailContentDialog"
    fullscreen hide-overlay
    persistent no-click-animation
    transition="slide-x-reverse-transition"
  )
    v-container(class="" fluid grey lighten-3)
      v-card
        v-card-title test
        v-btn(color="blue darken-1" text @click="mailContentDialog = false") Close

</template>

<script lang="ts">
// import { Component, Vue } from 'nuxt-property-decorator'
// export default class PageReportView extends Vue {
import TimelineComp from '@/components/reportControll/TimlineComp.vue'
import EditFabComp from '@/components/reportView/EditFabComp.vue'
// import SearchIcon from '@/components/common/SearchIcon.vue'

import Vue from 'vue'

// enum ReportStatusColor {
//   green = 'green',
//   orange = 'orange',
//   red = 'red',
//   grey = 'grey',
// }

// interface IReportData {
//   id: string
//   subject: string
//   status: string
//   computedVal: () => string
// }
export default Vue.extend({
  name: 'Report',
  layout: 'ReportLayout',
  components: { EditFabComp, TimelineComp },

  data() {
    return {
      // dt: [],
      selectedTableModel: [],
      search: '',

      // pager
      // page: 1,
      // pageCount: 0,
      // itemsPerPage: 10,
      items2: ['test', 'test', 'test'],

      // - dotmenu
      // dotMenuGroup: 1,
      createContentDialog: false,
      editContentDialog: false,
      mailContentDialog: false,
      detailDialog: false,

      reportHeaders: [
        { text: '詳細', value: 'detailAction', sortable: 'false' },
        { text: 'ID', value: 'id', align: 'start', sortable: 'true' },
        { text: '概要', value: 'subject', sortable: 'false' },
        { text: '開始日時', value: 'startDate', sortable: 'false' },
        { text: '更新日時', value: 'lastUpdated', sortable: 'true' },
        { text: 'ステータス', value: 'status', align: 'center', sortable: 'false' },
      ],

      reportItems: [
        {
          id: '0',
          subject: 'サブジェクトsssssssssssssssssssssssssssssssssssssssssssssss',
          startDate: '2020/01/01 12:00',
          lastUpdated: '2020/01/01 12:00',
          status: '故障',
        },
        {
          id: '6',
          subject: 'サブジェクト',
          startDate: '2020/01/01 12:00',
          lastUpdated: '2020/01/01 12:00',
          status: '回復',
        },
        {
          id: '2',
          subject: 'サブジェクト',
          startDate: '2020/01/02 12:00',
          lastUpdated: '2020/01/02 12:00',
          status: 'ラベル２',
        },
        {
          id: '3',
          subject: 'サブジェクト',
          startDate: '2020/01/03 12:00',
          lastUpdated: '2020/01/03 12:00',
          status: 'ラベル３',
        },
        {
          id: '4',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '14',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '24',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '34',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '44',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '54',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '64',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
        {
          id: '74',
          subject: 'サブジェクト',
          startDate: '2020/01/04 12:00',
          lastUpdated: '2020/01/04 12:00',
          status: 'ラベル3',
        },
      ],
    }
  },

  // computed
  // $store.getters

  created() {
    if (typeof window !== 'undefined') {
      // console.log('created.')
    }
    this.fetchMessages()
  },

  // beforeDestroy

  methods: {
    selectedCreateContent() {
      console.log('createContent')
      this.createContentDialog = true
    },
    selectedEditContent() {
      console.log('editContent')
      this.editContentDialog = true
    },
    selectedMailContent() {
      console.log('mailContent')
      this.mailContentDialog = true
    },

    onClickRow(item: any, params: any) {
      console.log(item.id)
      // console.log(params.isSelected)
      console.log(params.isSelected)
      // console.log(this.selectedTableModel.length)
      // 行クリック時 (未選択行の場合選択)
      // if (!params.isSelected) this.selectedItem.splice(0, this.selectedItem.length, item)
    },

    // onClickEditIcon(data) {
    //   console.log(data.id)
    // },
    onClickDetailIcon(data) {
      // #01
      // const row = this.reportItems.indexOf(data)
      // #02
      // this.dialogAdminUser = Object.assign({}, adminUser)
      // this.isShowDialog = true
      console.log(data.id)
    },

    fetchMessages() {
      // console.log('msg')
      // const vm = this
      // db.collection('chat')
      //   .orderBy('createAt')
      //   .onSnapshot((querySnapshot) => {
      //     const allMessages = []
      //     querySnapshot.forEach((doc) => {
      //       allMessages.push(doc.data())
      //     })
      //     vm.messages = allMessages
      //   })
    },

    getReportStatusColor(status: string) {
      // HACK: リファクタリング
      // console.log(status)
      // 周知区分、状況：一部停止
      // 影響範囲
      switch (status) {
        case 'ラベル２':
          return 'red'
        // 警告
        case '故障':
          return 'orange'
        // 発生中
        case '回復':
          return 'green'
        default:
          return 'grey'
        // クローズ
        // 非公開/ポータルサイトに公開
        // case 'メンテナンス'
        // 周知
      }
    },
  },
})
</script>
<style lang="scss" scoped>
// #app .reportViewTable.v-data-table {
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }
</style>
