<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="hero">
      <!-- Slide 1 -->
      <div class="carousel-item active" style="background-image: url(assets/img/slide/2013056.jpg)">
        <div class="carousel-container">
          <div class="container">
            <h2 class="animate__animated animate__fadeInDown">
              Welcome to
              <span>Rate Me</span>
            </h2>
            <p class="animate__animated animate__fadeInUp">The Dating Experience - Reimagined</p>
            <a href="login" class="btn-get-started animate__animated animate__fadeInUp scrollto">
              Please Login to Continue
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import axios from "axios";
// export default {
//   data: function () {
//     return {
//       currentUserPhoto: null,
//       currentUserFirstName: null,
//       currentUserLastName: null,
//       currentUserLocation: null,
//       currentUserJob: null,
//       currentUserBio: null,
//       photos: [],
//       users: [],
//       attributes: {},
//       errors: [],
//       advanced: false,
//     };
//   },
//   created: function () {
//     this.currentUserFirstName = localStorage.getItem("currentUserFirstName");
//     this.currentUserLastName = localStorage.getItem("currentUserLastName");
//     this.currentUserPhoto = localStorage.getItem("currentUserPhoto");
//     this.currentUserLocation = localStorage.getItem("currentUserLocation");
//     this.currentUserJob = localStorage.getItem("currentUserJob");
//     this.currentUserBio = localStorage.getItem("currentUserBio");
//   },
//   methods: {
//     indexPhotos: function () {
//       axios.get("/photos").then((response) => {
//         console.log("photos index", response);
//         this.photos = response.data;
//       });
//     },
//     indexUsers: function () {
//       axios.get("/users").then((response) => {
//         console.log("users index", response);
//         this.photos = response.data;
//       });
//     },
//     analyze: function () {
//       axios.get("/photos/analyze/1").then((response) => {
//         console.log(response);
//         // this.attributes = response.data.photos[0].tags[0].attributes;
//         if (response.data.photos[0].tags.length > 0) {
//           this.attributes = response.data.photos[0].tags[0].attributes;
//         } else {
//           this.errors = ["Could not analyze photo"];
//         }
//       });
//     },
//   },
// };
//
</script>
