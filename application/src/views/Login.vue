<template>
  <div id="app">
    <Header subtitle="Log In"/>
    <b-form name="myForm" @submit="onSubmit">
      <b-form-group label="Username:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  components: {
    Header
  },

  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions([
      'login'
    ]),

    onSubmit(e) {
      e.preventDefault();

        let username = document.forms["myForm"]["username"].value;
        if (username === "") {
          alert("Username must be filled out");
          return false;
        } else if (username.length < 3) {
          alert("Username smaller than 3");
          return false;
        }

        let password = document.forms["myForm"]["password"].value;
        if (password === "") {
          alert("Password must be filled out");
          return false;
        } else if (password.length < 4) {
          alert("Password smaller than 4");
          return false;
        }
        else if (password.length > 16) {
          alert("Password longer than 16");
          return false;
        }

      this.login(this.form);
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style scoped>

</style>
