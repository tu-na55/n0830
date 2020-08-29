<template lang="pug">
span.time_date {{ new Date() | momentFilter }}
p {{ upperText | toUpperCase }}
  //- div v-for="(msg, i) in messages" :key="i"
  //- .outgoing_msg(v-if="msg.username === username")
  //-   .sent_msg
  //-     p {{ msg.message }}
  //-       span.time_date {{ msg.createAt.seconds | formatUnix }}
</template>
<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  filters: {
    toUpperCase(val) {
      return val.toUpperCase()
    },
    toLowerCase(val) {
      return val.toLowerCase()
    },
    momentFilter(val) {
      const date = moment(val)
      return date.format('YYYY/MM/DD HH:mm')
    },
  },
  data() {
    return {
      upperText: 'upper',
    }
  },
  // watch: {

  //  async searchQuery(searchQuery) {
  //       if (!searchQuery) {
  //         this.articles = []
  //         return
  //       }
  //       this.articles = await this.$content('articles')
  //         .limit(6)
  //         .search(searchQuery)
  //         .fetch()
  //     }
  // },
})
</script>
