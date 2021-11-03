<template>
  <div class="ratersignup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>First Name:</label>
        <input type="text" v-model="newRaterParams.first_name" />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="newRaterParams.last_name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newRaterParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newRaterParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newRaterParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newRaterParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/raters", this.newRaterParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/raterlogin");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
