<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="kombiTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="kombisTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToKombi()">Kombi</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "KombiList",

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
      'kombis',
      'token',
      'kombiInformation'
    ]),
    kombisTable: function () {
      return this.kombis;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setKombiInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setKombiInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setKombiInformation(record);
    },
  }
}
</script>


<style scoped>


</style>