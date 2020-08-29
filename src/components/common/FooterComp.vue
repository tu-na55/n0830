<template lang="pug">
v-footer(
  fixed
  app
)
  span &nbsp;
  //- span &copy; {{ new Date().getFullYear() }}

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FooterComp',
})
</script>
