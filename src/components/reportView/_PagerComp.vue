<template>
  <article class="foo-page">
    <div>
      {{ pageText }}
    </div>
    <!-- <nuxt-link :to="prevPagePath">前のページへ</nuxt-link>
    <nuxt-link :to="nextPagePath">次のページへ</nuxt-link> -->
  </article>

  <!-- <div>
    <nuxt :nuxt-child-key="$route.fullPath" />
  </div> -->
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
  // watchQuery: ['page'],
})
// <script lang="ts">
// import { Component, Vue } from 'nuxt-property-decorator'
// @Component({})
// export default class RightSideComp extends Vue {
export default class PagerComp extends Vue {
  // data
  pageNum = 0
  pageText = '初期値'

  // returnの内容でdataが上書きされる
  // asyncData({ query }) {
  //   // クエリーがあればその数値を、なければ1を代入
  //   const pageNum = !query.page ? 1 : query.page
  //   // ページ番号を渡すと文字列を返してくる単純なAPI
  //   const data = testApi
  //     .fetch(pageNum)
  //     .then((res) => {
  //       return {
  //         pageText: res.pageText,
  //         pageNum: 0,
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  //   data.pageNum = pageNum
  //   return data
  // }

  // クエリ付きのパスを返す
  //   get prevPagePath() {
  //     return '/foo?page=' + (pageNum - 1)
  //   }

  //   get nextPagePath() {
  //     return '/foo?page=' + (pageNum + 1)
  //   }
}
</script>
