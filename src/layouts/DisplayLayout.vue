<template lang="pug">
v-app#app
  HeaderComp
  .my-6
  nuxt
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderComp from '@/components/common/HeaderComp'
@Component({ HeaderComp })
export default class DisplayLayout extends Vue {}
</script>
<style lang="scss" scoped></style>
