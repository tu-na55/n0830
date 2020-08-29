<template lang="pug">
    //- v-card
    //- v-card-text.py-0
    v-timeline(
      dense
    )
      //- align-top
      v-timeline-item(
        color="red lighten-3"
        small
      )
        v-row.pt-1
          v-col(cols="3")
            strong  {{ date1 }}
            .caption {{ stage1 }}
          //- v-col
          //-   strong ラベル

      v-timeline-item(
        color="teal lighten-3"
        small
      )
        v-row.pt-1
          v-col(cols="3")
            strong {{ date2 }}
            .caption {{ stage2 }}
          //- v-col
          //-   strong ラベル

</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class TimelineComp extends Vue {
  date1: string = '2020-1/1 12:00'
  stage1: string = '初報'

  date2 = '2020-1/2 12:00'
  stage2: string = '次回'
}
</script>
