<template lang="pug">
  form-card(
    v-for="contentAttr in contentAttributes" :key="${$contentAttr.id}" :content-attr="contentAttr"
  )
    div(
      v-if="isError"
      class="red--text body-2 text-center"
    )
    v-btn(@click="submit")
</template>
<script lang="ts">
import Vue from 'vue'
import '@types/node'
export default Vue.extend({
  name: 'Req',
  // components:
  data() {
    return {
      isError: false,
      // json: require('static/json/test.joson'),
    }
  },

  // async submit() {
  //   if (!appStore.IsAllValueSet()) {
  //     this.isError = true
  //   }
  // }
  // this.isError = false
  // await appStore.POST_CONTENT_VALUE()
  // await this.$router.push('/result')
})
</script>
