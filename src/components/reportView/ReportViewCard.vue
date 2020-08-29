<template lang="pug">
v-dialog(
  v-model="dialog"
  max-width="600px"
  persistent
)
  template(v-slot:activator="{ on, attrs }")
    v-btn(
      color="grey"
      dark
      v-bind="attrs"
      v-on="on"

  ) detail
  //- detailCard
  v-card
    v-toolbar(
      color="red darken-3"
      dark
      dense
      flat
    )
      v-card-actions
        v-btn(
          icon
          @click="dialog = false"
        )
          template
            .font-awesome
              font-awesome-icon.fa-lg(icon="chevron-left")
          //- @click="handleDrawer"
          //- v-btn.pl-2.mx-1(
          //-   large icon
          //-   )
          //- v-icon arrow_back_ios
        v-btn(
          icon
          @click="$router.push({ path: 'register/${item.id}'})"
        )
          //- @click="$router.push('name: pagename')"
          //- router-link(:to="path: `/post/${user.id}`")
            nuxt-link(
              :to="{ name: 'users-id', params: { id: id } }"
            ) {{ userName }}
          template
            .font-awesome
              font-awesome-icon.fa-lg(icon="pen")

    //- v-card
    v-card-title.headline detail
      //- v-toolbar-title.body-2


            //- v-expansion-panel
            //-   v-expansion-panel-header(v-slot="{ open }")
            //-     v-row(no-gutters)
            //-       v-col(cols="4") Start and end dates
            //-         v-col.text--secondary(cols="8")
    v-card-text
      v-row(
        style="width: 100%"
      )

        //- no-gutters
        v-col(cols="12") 対応者&nbsp;&nbsp;{{ author || 'Not set' }}
        v-col(cols="12") ステータス&nbsp;&nbsp;{{ 'Not set' }}

        v-col(cols="6") 開始日時&nbsp;&nbsp;{{ start || 'Not set' }}
        v-col(cols="6") 更新日時&nbsp;&nbsp;{{ end || 'Not set' }}

        v-col(cols="12") 概要&nbsp;&nbsp;{{ strDummy || 'Not set' }}
        v-col(cols="12") 原因&nbsp;&nbsp;{{ strDummy ||'Not set' }}
        v-col(cols="12") 対処&nbsp;&nbsp;{{ strDummy ||'Not set' }}

        //- v-icon


      //- p
      //-   em
      //-     small &mdash; 2020/01/01
      br
      hr.my-3

      a.text-xs-right(
        href="#"
        target="_blank"
        title="a_title"
        rel="noopener noreferrer"
        ) Documentation
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="building")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="copy")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="chevron-circle-right")
      v-btn(icon)
        template
          .font-awesome
            font-awesome-icon.fa-lg(icon="chevron-circle-left")

</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface IReportDetail {
  id: number
  subject: string
  author: string
  start: any
  end: any

  service: string
  location: string
}
// class RD implements IReportDetail {
//   constructor(
//     id = １
//     autor = '編集者1'
//     subject = 'サブジェクト１'
//     // public id: number,
//     // public subject: string,
//     // public author: string
//     // start: any,
//     // end: any,

//     // service: string,
//     // location: string
//   ) {}
// }

@Component({})
export default class ReportViewCard extends Vue {
  dialog: boolean = false

  id = 0
  author = '編集者名'
  subject = 'サブジェクト'
  location = ''
  start = null
  end = null

  strDummy =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis aut beatae earum. Laborum alias recusandae velit dolores nesciunt, beatae tempore labore fuga esse quae et necessitatibus rerum dolore impedit repellat.Enim molestiae voluptates possimus, praesentium, modi qui quod eius porro est reiciendis laudantium et, eum ratione inventore provident dignissimos atque rerum earum. Soluta, recusandae neque odio nesciunt quam vitae voluptatem.'

  // const arrRD1:IReportDetail[] = [new RD(),]
  // console.log

  // methods: {
  // handleDrawer() {
  //   this.drawer = !this.drawer
  // }
}
</script>
