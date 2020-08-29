<template lang="pug">
v-container(fluid grey lighten-4)
  Second
  v-row(class="pink lighten-4" align-content="start")
    v-col(class="red lighten-3")
      v-form(ref="form")
        v-text-field(
          v-model="formModel"
          :counter="maxCount"
          label="First name"
        )
        //- ()


    v-col
      p {{ computedNum }}
      p {{ resultNum }}
      v-btn(@click="num = num+1") num+1

    v-col
      div
        input(
          class="grey"
          v-model="nameModel"
        )
        //-   v-bind:value="nameModel"
        //-   v-on:change="nameModel = $event.target.value"
        p {{ nameModel }}

  v-row(class="red lighten-4" align-content="start")
    v-col(class="pink lighten-3")
      v-btn(
        tile outlined
        v-on:click="imgUrl='/sample2/'"
      )
        a(v-bind:href="imgUrl") test

      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
    v-col(class="blue lighten-3")
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test
      v-btn(tile outlined) test

    v-col(class="amber lighten-3")
      div(style="background-color:yellow;")
        v-btn(tile outlined) test
        v-btn(tile outlined large) test
        span(style="background-color:orange;") a




</template>
<script lang="ts">
import Second from '@/components/sample/Second.vue'

import Vue from 'vue'
// import { List } from 'lodash'
export default Vue.extend({
  name: 'PageSample2Index',
  layout: 'ReportLayout',
  components: { Second },
  props: {},

  data() {
    return {
      // bind
      imgUrl: '',
      // computed, watch
      nameModel: '',
      num: 0,
      resultNum: 10,

      formModel: '',
      maxCount: 0,
    }
  },
  computed: {
    computedNum(): number {
      const val = this.num + 1
      console.log('computed val:' + val)
      return val
    },
  },
  watch: {
    num(val) {
      this.resultNum = val
      console.log('watched: resulNum' + this.resultNum)
    },
  },

  // created() {
  //   console.log('created')
  //   this.initialize()
  //   this.setListener()
  // },
  mounted() {
    console.log('mounted')
  },

  methods: {
    initialize() {},
    setListener() {
      // this.$nuxt.$on('updateHeader', this.setHeader)
    },
  },
})
</script>
