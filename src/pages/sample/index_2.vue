<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      .text-center
        logo
      v-card
        v-card-title.headline Vuetify
        v-card-text
          p Material Design component
            a(
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="a_title"
              ) documentation
          .text-xs-right
            em
              small &mdash; John Leider
          hr.my-3
          a(
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            ) Documentation
          br
        v-card-actions
          v-spacer
          v-btn(
            color="primary"
            nuxt
            to="/inspire"
          ) Continue
      v-divider

      span.time_date {{ new Date() | momentFilter }}
      p {{ upperText | toUpperCase }}
        //- div v-for="(msg, i) in messages" :key="i"
        //- .outgoing_msg(v-if="msg.username === username")
        //-   .sent_msg
        //-     p {{ msg.message }}
        //-       span.time_date {{ msg.createAt.seconds | formatUnix }}
      div(
        v-for="d in dt.person_data" :key="d.person_name"
        align="center"
      )
        h2 {{ d.person_name }} {{ d.person_age }}
        v-btn.mx-2(
          fab dark small depressed
          color="primary"
          @click="copySomething(d.person_name)"
        )
      v-divider

      .type_msg
        .input_msg_write
          input(
            v-model="message"
            type="text"
            class="write_msg"
            placeholder="Type a message"
            @keyup.enter="saveMessage"
          )
</template>

<script>
// import Vue from 'vue'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import { sortBy } from 'lodash'
// import lodashPlugin from 'lodashPlugin'
import moment from 'moment'

// Vue.use(sortBy)

export default {
  components: {
    // Logo,
    // VuetifyLogo,
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase()
    },
    toLowerCase(val) {
      return val.toLowerCase()
    },
    momentFilter(val) {
      const date = moment(val)
      return date.format('YYYY/MM/DD HH:mm')
    },
  },

  data() {
    return {
      dt: [],
      upperText: 'upper',
      message: null,
      // memos: [
      //   {
      //     markdown: ""
      //   }
      // ]
      // date: moment(new Date()).format('YYYY-MM-DD'),
      testUsers: [
        { name: 'taro', age: 25 },
        { name: 'hanako', age: 55 },
        { name: 'taro', age: 10 },
        { name: 'hanako', age: 28 },
      ],
    }
  },

  computed: {
    // fuga: new Date(),
  },
  created() {
    this.fetchMessages()
  },

  async mounted() {
    // const sortByResult = this.sortBy(this.testUsers, 'age')
    // const sortByResult = this.lodash.sortBy(this.testUsers, 'age')
    // console.log(JSON.stringify(sortByResult))

    // console.dir(sortByResult)
    // forEach(sortByResult, (value, key) => console.log(value))

    const url = '/api/get_person/'
    const response = await this.$axios.get(url)
    this.dt = response.data

    // this.piyo = this.moment.format('YYYY/MM/DD')
    // const fuga = new Date()
    // return this.$moment.format('YYYY/MM/DD')
    //   // return this.$moment(new Date()).format('YYYY-MM-DD')
  },
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

    saveMessage() {
      console.log('save')
    },
    fetchMessages() {
      console.log('msg')
      // const vm = this
      // db.collection('chat')
      //   .orderBy('createAt')
      //   .onSnapshot((querySnapshot) => {
      //     const allMessages = []
      //     querySnapshot.forEach((doc) => {
      //       allMessages.push(doc.data())
      //     })
      //     vm.messages = allMessages
      //   })
    },
  },

  //   routes: [
  //     { name: "users",
  //       path: "users/",
  //       props: function(route) {
  //         return { ...route.params };
  //       }
  // ];

  // // 画面遷移
  // this.$router.push({
  //     name: "users",
  //     params: {
  //         user: { id: 123, name: "Taro" }
  //     }
  // });

  // watch: {
  //   memos: {
  //     handler: _.debounce(function () {
  //       this.saveMemos() // 実行したい処理
  //     }, 2000), // memosのデータの更新が終わった2秒後に実行される
  //     deep: true,
  //   },

  //  async searchQuery(searchQuery) {
  //       if (!searchQuery) {
  //         this.articles = []
  //         return
  //       }
  //       this.articles = await this.$content('articles')
  //         .limit(6)
  //         .search(searchQuery)
  //         .fetch()
  //     }
  // },
}
</script>
