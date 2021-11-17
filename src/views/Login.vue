<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="hero">
      <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
        <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
          <div class="carousel-container">
            <div class="container">
              <div class="login">
                <form v-on:submit.prevent="submit()">
                  <p></p>
                  <p></p>
                  <h2 class="animate__animated animate__fadeInDown">User Login</h2>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div>
                    <span class="animate__animated animate__fadeInUp text-light">User's Email:&nbsp;&nbsp;&nbsp;</span>
                    <input class="animate__animated animate__fadeInUp" type="email" v-model="newSessionParams.email" />
                    <label class="text-light">&nbsp;&nbsp;Password:&nbsp;</label>
                    <input
                      class="animate__animated animate__fadeInUp"
                      type="password"
                      v-model="newSessionParams.password"
                    />
                    &nbsp;&nbsp;
                    <input type="submit" value="Login" class="btn btn-danger" />
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
        .post("https://hidden-thicket-65529.herokuapp.com/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("currentUserFirstName", response.data.first_name);
          localStorage.setItem("currentUserLastName", response.data.last_name);
          localStorage.setItem("currentUserLocation", response.data.location);
          localStorage.setItem("currentUserJob", response.data.job);
          localStorage.setItem("currentUserPhoto", response.data.photo);
          localStorage.setItem("currentUserBio", response.data.bio);
          this.$router.push("https://hidden-thicket-65529.herokuapp.com/user");
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
