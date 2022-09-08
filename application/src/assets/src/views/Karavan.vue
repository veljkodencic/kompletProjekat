<template>
  <div>
    <KaravanList/>
  </div>

</template>

<script>

import KaravanList from '@/components/KaravanList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Karavan",

  components: {
    KaravanList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchKaravan();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchKaravan'
    ])
  }


}
</script>


<style scoped>


</style>