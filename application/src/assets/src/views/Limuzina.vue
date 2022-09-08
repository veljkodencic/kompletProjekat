<template>
  <div>
    <LimuzinaList/>
  </div>

</template>

<script>

import LimuzinaList from '@/components/LimuzinaList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Limuzina",

  components: {
    LimuzinaList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchLimuzina();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchLimuzina'
    ])
  }


}
</script>


<style scoped>


</style>