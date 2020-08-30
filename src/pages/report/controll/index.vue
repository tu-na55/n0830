<template lang="pug">
v-container(fruid grey lighten-4)
  v-toolbar(class="blue lighten-4")
    v-toolbar-title 管理

  v-row
    v-col
      //- v-btn(
      //-   color="grey"
      //-   v-bind:class="{'is-active':(!find_flg)}"
      //-   @click="flag_reset"
      //- ) すべて
      //- v-btn(
      //-   color="grey"
      //-   v-bind:class="{'is-active':find_flg && (find_state == '作業前')}"
      //-   @click="find('作業前')"
      //- ) 作業前

      //- v-btn(
      //-   color="grey"
      //-   v-bind:class="{'is-active':find_flg && (find_state == '作業中')}"
      //-   @click="find('作業中')"
      //- ) 作業中

      //- v-btn(
      //-   color="grey"
      //-   v-bind:class="{'is-active':find_flg && (find_state == '完了')}"
      //-   @click="find('完了')"
      //- ) 完了



  v-row(justify="center" align="center")
    v-col(cols="12" md="8")
      v-card
        v-select(
          v-model="templateSelectModel"
          :items="templateSelectItems"
          label="テンプレート選択"
        )

        v-btn 追加
        v-btn 削除

        //- v-text-field
        //-   v-model="taskModel"
        //-   label="タスク名入力 + ENTER"
        //-   solo
        //-   @keydown.enter="create"
        //- )
        template(v-for="(task, i) in tasks")
          v-divider(
            v-if="i !== 0"
              :key="`${i}-divider`"
          )
          v-list
            v-list-item(:key="`${i}-${tasks.text}`")
              v-list-item-action
                v-checkbox(
                  v-model="tasks.done"
                  :color="tasks.done && 'grey' || 'red'"
                )
                  template(v-slot:label)
                    div(
                      :class="tasks.done && 'grey--text' || 'red--text'"
                      class="ml-4"
                      v-text="tasks.text"
                    )

      v-expansion-panels(accordion v-model="expandModel")
        v-expansion-panel
          v-expansion-panel-header {{ getExpandTitle }}
          v-expansion-panel-content
            v-card(class="blue lighten-4")
              v-card-text
                v-form(class="light black--text")
                  v-textarea(label="To" outlined)
                  v-textarea(label="CC" outlined)
                  v-textarea(label="BCC" outlined)
                  v-divider
                  v-textarea(label="本文" outlined)

                  v-spacer
                  v-btn(
                    class="primary"
                    icons-and-text
                  ) 送信
                    template
                      .font-awesome
                        font-awesome-icon(class="fas fa-lg" icon="paper-plane")
                  v-btn(class="accent") クリア

                  v-list
                    v-list-item
                      v-list-item-action
                        v-checkbox(v-model="approvalCheckboxModel")
                      v-list-item-content
                        v-list-item-title 承認

                  v-list-item
                      v-list-item-action
                        v-checkbox(v-model="finishCheckboxModel")
                      v-list-item-content
                        v-list-item-title 送信済

                  v-btn(rounded icons-and-text) タイムスタンプ
                    template
                      .font-awesome
                        font-awesome-icon(class="fas fa-lg" icon="clock")


  v-row(justify="center")
      v-dialog(v-model="dialog2" persistent max-width="600px")
        template(v-slot:activator="{ on, attrs }")
          v-btn(
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          ) Open Dialog
        v-card
          v-card-title
            span(class="headline") Profile
          v-card-text
            v-container
              v-row
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal first name*" required)
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal middle name" hint="example of helper text only on focus")
                v-col(cols="12" sm="6" md="4")
                  v-text-field(
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  )
                v-col(cols="12")
                  v-text-field(label="Email*" required)
                v-col(cols="12")
                  v-text-field(label="Password*" type="password" required)
                v-col(cols="12" sm="6")
                  v-select(
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  )
                v-col(cols="12" sm="6")
                  v-autocomplete(
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  )
          v-spacer
          v-card-actions
            v-btn(color="blue darken-1" text @click="dialog2 = false") Close
  v-row
    v-col
      v-card(class="mb-4")


  v-row
    v-col
      //- v-list-item(two-line)
      //- v-toolbar(
      //-   color="red"
      //-   dark
      //-   dense
      //-   flat
      //- )
      //- v-toolbar-title.body-2 toolbar-title

      //- v-list(nav dense)
      //- permanent
      //- v-list-item-title.grey--text.text--darken-4 Menu
      //- v-list-item-subtitle subtitle
      //- v-divider
      v-list
        v-list-item-group(
          v-model="group"
          color="grey"
          active-class="red--text text--darken-3"
        )
          v-list-item(
            v-for="(item, i) in items" :key="i"
            router exact
          )
            v-list-item-action
              //- (light @click.stop="drawer=!drawer")
              //- v-icon {{ item.icon }}
              template
                .font-awesome
                  font-awesome-icon.fa-lg(:icon="item.icon")
            v-list-item-content
              v-list-item-title(v-text="item.title")
      v-divider


  v-row
    v-col
      v-card(class="mb-4")
        v-card-text
          v-select(
            v-model="steps"
            :items="[2, 3, 4, 5, 6]"
            label="# of steps"
          )
  v-row
    v-col
      v-stepper(v-model="stepModel")
        v-stepper-header
          template(v-for="n in steps")
            v-stepper-step(
              :key="`${n}-step`"
              :complete="stepModel > n"
              :step="n"
              editable
            ) Step {{ n }}

            //- v-divider(
            //-   v-if="n !== steps"
            //-   :key="n"
            //- )

        v-stepper-items
          v-stepper-content(
            v-for="n in steps"
            :key="`${n}-content`"
            :step="n"
          )
            v-card(
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            )
            v-btn(
              color="primary"
              @click="nextStep(n)"
            ) Continue

            v-btn(text) Cancel

  v-card
    v-card-actions
      v-spacer
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="clone")

      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="times-circle")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="tags")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="sync")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="lock")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="lock-open")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="folder-plus")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="at")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="envelope")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="envelope-open-text")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="paper-plane")
            //- :loading="saveLoading"
            //- :disabled="saveLoading"
            //- @click="loader = 'saveloading'"
      v-btn(
        depressed
        small
      )
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="external-link-alt")


      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="user-check")

      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="check")


      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="save")
      v-btn(icon)
        //- @click="tree = []"
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="undo")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="trash")



    //- v-btn(
      depressed
      small
    //- ) Link
    //-   v-icon(
    //-     color="red darken-3"
    //-     right
    //-   ) mdi-open-in-new



  v-btn.ma-2.white--text(
      color="grey"
  ) {{ sendMailButtonTitle }}
  v-row.mx-auto
    v-col(cols="6")
      v-list-item-content
        v-list-item-title.headline {{ reportControllTitle }}
        v-list-item-subtitle ID: {{ reportControllID }}
        v-divider
        v-card

    v-col(cols="6")
    v-card.pa-2
      h3 todo実装：websocket
      ul
        li 誰でも解除できる手動ロック
        li 遅延メールチェック
        li 既存データの呼び出し
      P 通知先のグループごと
      p モデル選択とボタン
      p ### 選択後の説明を表示 ###
      p 登録された内容をベースに生成します。宛先グループを作成
      p 周知済みコピー
      p BCCに送信確認先に送信判定メールを送る。
      p 送信の承認者宛のメール、IDの保存、リンク付与。
      p 状況リストグループ、承認者用チェック、送信済フラグ判定
      p 送信判定を行ったものは削除できない。ミスはどうする？
      p BCCのパターン

</template>

<script lang="ts">
// import { Component, Vue } from 'nuxt-property-decorator'

import Vue from 'vue'
export default Vue.extend({
  name: 'PageReportControll',
  layout: 'ReportLayout',
  components: {},
  // - LIVE: title
  data() {
    return {
      // todo
      taskModel: [],
      tasks: [
        {
          done: false,
          text: 'Foobar',
        },
        {
          done: false,
          text: 'Fizzbuzz',
        },
      ],
      // stepper
      stepModel: 1,
      steps: 2,

      // expand
      expandModel: false,

      // select
      templateSelectModel: '新規',
      templateSelectItems: ['新規', 'hoge', 'fuga'],

      // check
      approvalCheckboxModel: false,
      finishCheckboxModel: false,

      // dialog2
      dialog2: false,

      sendMailButtonTitle: '送信',
      reportControllTitle: '（ここに表示される）',
      reportControllID: '1111',
      group: null,
      items: [
        {
          title: '送信メール編集用',
          icon: 'check',
        },
        {
          title: 'LINK',
          icon: 'check',
        },
      ],
    }
  },
  computed: {
    getExpandTitle(): String {
      return this.expandModel ? 'メールを閉じる' : 'メールを開く'
    },
  },
  watch: {
    steps(val) {
      if (this.stepModel > val) {
        this.stepModel = val
      }
    },
  },
  methods: {
    // create() {
    //   this.tasks.push([{
    //     done: false,
    //     text: this.taskModel,
    //   }])

    //   this.taskModel = []
    // },

    nextStep(n) {
      if (n === this.steps) {
        this.stepModel = 1
      } else {
        this.stepModel = n + 1
      }
    },
  },
})
</script>
