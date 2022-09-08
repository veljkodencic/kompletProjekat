<template>
  <div id="app">
    <Header subtitle="Create account"/>
    <b-form name="myForm" @submit="onSubmit">
      <b-form-group label="Fullname:" label-for="fullName">
        <b-form-input id="fullName" v-model="form.fullName" placeholder="Enter fullname" required></b-form-input>
      </b-form-group>
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Username:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  components: {
    Header
  },

  data() {
    return {
      form: {
        fullName: '',
        email: '',
        username: '',
        password: '',
        userType: "USER",
        isBanned: "false"
      }
    }
  },

  methods: {
    ...mapActions([
      'register'
    ]),

    onSubmit(e) {
      e.preventDefault();

      let fullname = document.forms["myForm"]["fullName"].value;
      if (fullname === "") {
        alert("Name must be filled out");
        return false;
      }

      let email = document.forms["myForm"]["email"].value;
      if (email === "") {
        alert("Email must be filled out");
        return false;
      }

      let username = document.forms["myForm"]["username"].value;
      console.log(username)
      if (username === "") {
        alert("Username must be filled out");
        return false;
      } else if (username.length < 3) {
        alert("Username smaller than 3");
        return false;
      }
      else if (username.length > 12) {
        alert("Username longer than 12");
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

      this.register(this.form);
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style scoped>

</style>
