<template lang="pug">
v-menu(
  ref="startMenu"
  v-model="startMenu"
  :close-on-content-click="false"
  :nudge-right="40"
  :return-value.sync="start"
  transition="scale-transition"
  min-width="290px"
  offset-y
)
  template(v-slot:activator="{ on, attrs }")
    v-text-field(
      v-model="start"
      class="mt-3"
      label="Start Date"
      prepend-icon="event"
      dense
      readonly
      outlined
      hide-details
      v-bind="attrs"
      v-on="on"
    )
  v-date-picker(
    v-model="start"
    no-title
    scrollable
  )
    v-spacer
    v-btn(
      text
      color="primary"
      @click="startMenu = false"
    ) Cancel
    v-btn(
      text
      color="primary"
      @click="$refs.startMenu.save(start)"
    ) OK
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class StartDatePickerComp extends Vue {
  startMenu: boolean = false
  start = ''

  // getEvents({ start }) {
  // const events = []
  // const eventCount = this.rnd(days, days + 20)

  // const min = new Date(`${start.date}T00:00:00`)
  // const max = new Date(`${end.date}T23:59:59`)
  // const days = (max.getTime() - min.getTime()) / 86400000
  // }
}
</script>
