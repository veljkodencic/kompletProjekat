<template>
  <div>
    <MotorList/>
  </div>

</template>

<script>

import {mapActions} from 'vuex';
import MotorList from "@/components/MotorList";

export default {
  name: "Motor",

  components: {
    MotorList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchMotor();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchMotor'
    ])
  }


}
</script>


<style scoped>


</style>