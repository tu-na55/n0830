<template lang="pug">
.text-center
  v-btn(
    dark
    color="grey"
    @click="snackbar = true"
  ) 保存後に表示
  v-snackbar(
    v-model="snackbar"
    :multi-line="multiLine"
  ) {{ snackbarText }}
    template(v-slot:action="{ attrs }")
      v-btn(
        color="red"
        text
        v-bind="attrs"
        @click="snackbar = false"
      ) 閉じる
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SnackbarComp extends Vue {
  multiLine: boolean = true
  snackbar: boolean = false
  snackbarText: string = '保存しました'
}
</script>
