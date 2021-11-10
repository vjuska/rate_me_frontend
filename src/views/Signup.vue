<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="hero">
      <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
        <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
          <div class="carousel-container">
            <div class="container">
              <section id="portfolio" class="portfolio">
                <div class="signup">
                  <form v-on:submit.prevent="submit()">
                    <h1 class="text-light">Signup</h1>
                    <ul>
                      <li class="text-light" v-for="error in errors" v-bind:key="error">{{ error }}!</li>
                    </ul>
                    <div>
                      <h5><label class="text-light">First Name:</label></h5>
                      <input type="text" v-model="newUserParams.first_name" />
                    </div>
                    <br />
                    <div>
                      <h5><label class="text-light">Last Name:</label></h5>
                      <input type="text" v-model="newUserParams.last_name" />
                    </div>
                    <br />
                    <div>
                      <h5><label class="text-light">Email:</label></h5>
                      <input type="email" v-model="newUserParams.email" />
                    </div>
                    <br />
                    <div>
                      <h5><label class="text-light">Password:</label></h5>
                      <input type="password" v-model="newUserParams.password" />
                    </div>
                    <br />
                    <div>
                      <h5><label class="text-light">Password confirmation:</label></h5>
                      <input type="password" v-model="newUserParams.password_confirmation" />
                    </div>
                    <br />
                    <input type="submit" value="Submit" class="btn btn-danger" />
                  </form>
                </div>
              </section>
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
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
