<template>
  <section id="portfolio" class="portfolio">
    <div class="login">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Email:</label>
          <input type="email" v-model="newSessionParams.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="newSessionParams.password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {
        email: "person1@test.com",
        password: "password",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("http://localhost:3000/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("currentUserFirstName", response.data.first_name);
          localStorage.setItem("currentUserLastName", response.data.last_name);
          localStorage.setItem("currentUserLocation", response.data.location);
          localStorage.setItem("currentUserJob", response.data.job);
          localStorage.setItem("currentUserPhoto", response.data.photo);
          localStorage.setItem("currentUserBio", response.data.bio);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
