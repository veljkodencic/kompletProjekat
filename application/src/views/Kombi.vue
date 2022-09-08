<template>
  <div>
    <KombiList/>
  </div>

</template>

<script>

import KombiList from '@/components/KombiList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Kombi",

  components: {
    KombiList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchKombi();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchKombi'
    ])
  }


}
</script>


<style scoped>


</style>