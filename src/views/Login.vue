<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="hero">
      <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
        <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
      <!-- Looks like you mostly relied on a vendor/3rd party stylesheet, but typically better practice is css stylesheets 
      rather than inline styles whenever possible, inline styling will override all other styles and can make things confusing 
      the larger the project gets -->
          <div class="carousel-container">
            <div class="container">
      <!-- You've got a lot of nested container-related divs above, it doesn't seem like they should all be necessary? 
      this would be the kind of area I would call out to look at for possible refactoring, the less nesting, the better -->
              <div class="login">
                <form v-on:submit.prevent="submit()">
                  <p></p>
                  <p></p>
          <!-- Why the empty <p> tags? I see people do this sometimes when they want to basically create new lines on the 
            page to push something else down, if that's what's happening here, then this would be a code smell—should be done via CSS,
            not empty block level elements -->
                  <h2 class="animate__animated animate__fadeInDown">User Login</h2>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div>
                    <!-- Small thing — IMO it's more HTML semantically descriptive to use <p> rather than <span> to wrap text -->
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
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          // Are you familiar with JS destructuring?
          /*
          let {
              data: {
                jwt,
                first_name: firstName, // Optional, but the colon syntax allows you to rename the variable if you wanted to change it something different from the object property name
                last_name: lastName,
                location,
                job,
                photo,
                bio
              }
          } = response;
          It lets you extract all those nested values as vars once rather than having to retype response.data.etc every time, so the below code
          would instead look like this:

          axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
          localStorage.setItem("jwt", jwt);
          localStorage.setItem("currentUserFirstName", firstName);
          localStorage.setItem("currentUserLastName", lastName);
          localStorage.setItem("currentUserLocation", location);
          localStorage.setItem("currentUserJob", job);
          localStorage.setItem("currentUserPhoto", photo);
          localStorage.setItem("currentUserBio", bio);
          */
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("currentUserFirstName", response.data.first_name);
          localStorage.setItem("currentUserLastName", response.data.last_name);
          localStorage.setItem("currentUserLocation", response.data.location);
          localStorage.setItem("currentUserJob", response.data.job);
          localStorage.setItem("currentUserPhoto", response.data.photo);
          localStorage.setItem("currentUserBio", response.data.bio);
          this.$router.push("/user");
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
