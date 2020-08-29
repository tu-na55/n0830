<template lang="pug">
v-row(class="green lighten-4")
  h1 Title

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Second',
  components: {},
  props: {
    newDialogProp: {
      type: Boolean,
      default: false,
      required: true,
    },
    // data: {
    //   type: [String, Number],
    // },
    // check: {
    //   validator(value) {
    //     return ['YES', 'NO'].includes(value) !== -1
    //   },
    // },
  },

  data() {
    return {}
  },

  created() {
    console.log('created')
    this.initialize()
  },
  mounted() {
    console.log('mounted')
  },

  methods: {
    initialize() {},
  },
})
</script>
