<template lang="pug">
v-container(grey lighten-4)

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
                  font-awesome-icon.fa-lg( :icon="item.icon")
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
          TimelineComp
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
import TimelineComp from '@/components/reportControll/TimlineComp.vue'

import Vue from 'vue'
export default Vue.extend({
  name: 'PageReportControll',
  layout: 'ReportLayout',
  components: { TimelineComp },
  // - LIVE: title
  data() {
    return {
      stepModel: 1,
      steps: 2,

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
          title: '送信メール編集用',
          icon: 'check',
        },
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
  watch: {
    steps(val) {
      if (this.stepModel > val) {
        this.stepModel = val
      }
    },
  },
  methods: {
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
