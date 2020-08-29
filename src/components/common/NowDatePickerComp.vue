<template lang="pug">
v-menu(
  ref="nowMenu"
  v-model="nowMenu"
  :close-on-content-click="false"
  :nudge-right="40"
  :return-value.sync="now"
  transition="scale-transition"
  min-width="290px"
  offset-y
)
  template(v-slot:activator="{ on, attrs }")
    v-text-field(
      v-model="now"
      class="mt-3"
      label="Today"
      prepend-icon="event"
      dense
      readonly
      outlined
      hide-details
      v-bind="attrs"
      v-on="on"
    )

  v-date-picker(
    v-model="now"
    no-title
    scrollable
  )
    v-spacer
    v-btn(
      text
      color="primary"
      @click="nowMenu = false"
    ) Cancel
    v-btn(
      text
      color="primary"
      @click="$refs.nowMenu.save(now)"
    ) OK
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class NowDatePickerComp extends Vue {
  nowMenu: boolean = false
  now = null
}
</script>
