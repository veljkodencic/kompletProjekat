<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="karavanTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="karavansTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToKaravan()">Karavan</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "KaravanList",

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
      'karavans',
      'token',
      'karavanInformation'
    ]),
    karavansTable: function () {
      return this.karavans;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setKaravanInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setKaravanInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setKaravanInformation(record);
    },
  }
}
</script>


<style scoped>


</style>