<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="motorTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="motorsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToMotor()">Motor</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "MotorList",

  data() {
    return {
      fields: ['marka', 'model', 'snaga', 'kubikaza', 'cenaPoDanu'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },

  computed: {
    ...mapState([
      'motors',
      'token',
      'motorInformation'
    ]),
    motorsTable: function () {
      return this.motors;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setMotorInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setMotorInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setMotorInformation(record);
    },
  }
}
</script>


<style scoped>


</style>