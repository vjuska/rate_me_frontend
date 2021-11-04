<template>
  <section id="portfolio" class="portfolio">
    <div class="home">
      <h1>Current User</h1>
      <div v-if="currentUserFirstName">
        <img :src="currentUserPhoto" width="300" alt="" />
        <p>First Name: {{ currentUserFirstName }}</p>
        <p>Last Name: {{ currentUserLastName }}</p>
        <p>Location: {{ currentUserLocation }}</p>
        <p>Job: {{ currentUserJob }}</p>
        <p>Bio: {{ currentUserBio }}</p>
        <button v-on:click="analyze">Click me for Quick Analysis</button>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        <div v-if="attributes.face">
          <div v-if="attributes.face.value === 'false'">This is not a valid photo</div>
        </div>

        <div v-if="attributes.gender">
          <p>Gender: {{ attributes.gender.value }}</p>
        </div>

        <div v-if="attributes.age_est">
          <p>Age based on the photo: {{ attributes.age_est.value }}</p>
        </div>

        <div v-if="attributes.mood">
          <p>You appear to be: {{ attributes.mood.value }}</p>
          <div><button v-on:click="advanced = true">Click me for full further Analysis</button></div>

          <div></div>
        </div>

        <!-- <div v-if="attributes.dark_glasses">
          <div v-if="attributes.dark_glasses.value === 'true'">
            <p>Wearing sunglasses lowers your profile's overall score by 30%</p>
          </div>
        </div>

        <div v-if="attributes.smiling">
          <div v-if="attributes.smiling.value === 'false'">
            <p>Smiling in the photos makes you a more approachable person</p>
          </div>
        </div> -->

        <!-- <div v-if="attributes.dark_glasses">
          <div v-if="attributes.glasses.value === 'true'">person is wearing glasses</div>
          <h2>Glasses? {{ attributes.glasses.value }} (confidence: {{ attributes.glasses.confidence }}%)</h2>
        </div> -->
        <div v-if="advanced">
          <div v-for="(value, name) in attributes" v-bind:key="name">
            <p>{{ name }}: {{ value }}</p>
          </div>
        </div>
      </div>

      <div v-else>
        <p>not logged in...</p>
      </div>
    </div>
  </section>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentUserPhoto: null,
      currentUserFirstName: null,
      currentUserLastName: null,
      currentUserLocation: null,
      currentUserJob: null,
      currentUserBio: null,
      photos: [],
      users: [],
      attributes: {},
      errors: [],
      advanced: false,
    };
  },
  created: function () {
    this.currentUserFirstName = localStorage.getItem("currentUserFirstName");
    this.currentUserLastName = localStorage.getItem("currentUserLastName");
    this.currentUserPhoto = localStorage.getItem("currentUserPhoto");
    this.currentUserLocation = localStorage.getItem("currentUserLocation");
    this.currentUserJob = localStorage.getItem("currentUserJob");
    this.currentUserBio = localStorage.getItem("currentUserBio");
    console.log(localStorage.currentUserBio);
    // this.indexPhotos();
    // this.indexUsers();
  },
  methods: {
    indexPhotos: function () {
      axios.get("/photos").then((response) => {
        console.log("photos index", response);
        this.photos = response.data;
      });
    },
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response);
        this.photos = response.data;
      });
    },
    analyze: function () {
      axios.get("/photos/analyze/1").then((response) => {
        console.log(response);
        // this.attributes = response.data.photos[0].tags[0].attributes;
        if (response.data.photos[0].tags.length > 0) {
          this.attributes = response.data.photos[0].tags[0].attributes;
        } else {
          this.errors = ["Could not analyze photo"];
        }
      });
    },
  },
};
</script>
