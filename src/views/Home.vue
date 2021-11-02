<template>
  <div class="home">
    <h1>Current User</h1>
    <div v-if="currentUserFirstName">
      <img :src="currentUserPhoto" width="300" alt="" />
      <p>First Name: {{ currentUserFirstName }}</p>
      <p>Last Name: {{ currentUserLastName }}</p>
      <p>Location: {{ currentUserLocation }}</p>
      <p>Job: {{ currentUserJob }}</p>
    </div>

    <div v-else>
      <p>not logged in...</p>
    </div>
  </div>
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
      photos: [],
      users: [],
    };
  },
  created: function () {
    this.currentUserFirstName = localStorage.getItem("currentUserFirstName");
    this.currentUserLastName = localStorage.getItem("currentUserLastName");
    this.currentUserPhoto = localStorage.getItem("currentUserPhoto");
    this.currentUserLocation = localStorage.getItem("currentUserLocation");
    this.currentUserJob = localStorage.getItem("currentUserJob");
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
  },
};
</script>
