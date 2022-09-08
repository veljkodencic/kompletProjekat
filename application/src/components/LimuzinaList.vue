<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="limuzinaTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="limuzinasTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToLimuzina()">Limuzina</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "LimuzinaList",

  data() {
    return {
      fields: ['marka', 'model', 'snaga', 'kubikaza', 'brojVrata', 'cenaPoDanu'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },

  computed: {
    ...mapState([
      'limuzinas',
      'token',
      'limuzinaInformation'
    ]),
    limuzinasTable: function () {
      return this.limuzinas;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setLimuzinaInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setLimuzinaInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setLimuzinaInformation(record);
    },
  }
}
</script>


<style scoped>


</style>