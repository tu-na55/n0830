<template lang="pug">
  v-container
    v-card(xs12 class="m-3 px-3")
      v-card-title(class="title")
        v-icon(class="pr-2") {{ $route.meta.icon }} {{ $route.meta.name }}

        user-dialog(
          ref="userDialog"
          @reload="reload"
          @setsearch="setsearch"
        )

        v-spacer
        v-spacer
        v-text-field(
          v-model="search"
          prepend-icon="search"
          label="Search"
          single-line hide-details clearable
        )

        v-data-table(
          :headers="headers"
          :items="tabledata"
          :pagination.sync="pagination"
          :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]" :loading="loading"
          :search="search"
          class="elevation-0 p-1"
        )
          v-progress-linear(slot="progress" color="blue" indeterminate)

          template(slot="items" slot-scope="props")
            tr
              td(
                class="text-xs-center" xs1
              ) {{ props.index + 1 + (pagination.page - 1) * pagination.rowsPerPage }})
              template v-for="n in (headers.length - 2)"
                td(
                  :class="'text-xs-' + headers[n].align"
                  style="white-space: nowrap;"
                  v-text="props.item[headers[n].value]"
                )
              td(class="text-xs-center" xs1)
                v-btn(
                  flat small fab
                  @click="dialogOpen(props.item)"
                )
                  v-icon(color="success") edit
                v-btn(
                  flat small fab
                  @click="dialogOpen(props.item, true)"
                )
                  v-icon(color="error") delete
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UserDialog',

  data() {
    return {
      loading: false,
      search: '',
      pagination: { sortBy: 'name', descending: false },
      tabledata: [],
      headers: [
        { align: 'center', sortable: false, text: 'No' },
        { align: 'left', sortable: true, text: '社員ID', value: 'loginid' },
        { align: 'left', sortable: true, text: '氏名', value: 'name' },
        { align: 'center', sortable: true, text: '権限', value: 'role' },
        { align: 'center', sortable: false, text: 'アクション' },
      ],
    }
  },
})
</script>
