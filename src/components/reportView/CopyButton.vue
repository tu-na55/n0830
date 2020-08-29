<template lang="pug">
v-btn.mx-2(
  fab dark small depressed
  color="primary"
  @click="copySomething(d.person_name)"
)
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    // copy
    async copySomething(text) {
      try {
        await this.$copyText(text)
        console.log('copyied')
      } catch (e) {
        console.error(e)
      }
    },
  },
})
</script>
