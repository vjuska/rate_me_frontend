<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <div class="member d-flex align-items-center">
              <div v-if="currentUserFirstName">
                <img :src="currentUserPhoto" width="300" alt="" />
              </div>
              <div v-else>
                <p>not logged in...</p>
              </div>
              <div class="member-info">
                <h4>{{ currentUserFirstName }} {{ currentUserLastName }}</h4>
                <span>Job: {{ currentUserJob }}</span>
                <p>Location: {{ currentUserLocation }}</p>
                <span></span>
                <p>Bio: {{ currentUserBio }}</p>
                <div class="social">
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                </div>
                <p>
                  <button
                    class="btn btn-danger"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    v-on:click="analyze"
                  >
                    Click me for Quick Analysis
                  </button>
                  <img
                    v-if="loading"
                    src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif"
                    alt=""
                    height="200px"
                  />
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>

                    <div v-if="attributes.gender">
                      <p>Gender: {{ attributes.gender.value }}</p>
                    </div>

                    <div v-if="attributes.age_est">
                      <p>You appear to be: {{ attributes.age_est.value }} years old</p>
                    </div>

                    <div v-if="attributes.mood">
                      <p>Your mood is: {{ attributes.mood.value }}</p>
                      <div v-if="goodScore">
                        <p class="text-success">Score: {{ goodScore }}%</p>
                        <p class="text-success">Photo is great</p>
                      </div>
                      <div v-if="badScore">
                        <p class="text-danger">Score: {{ badScore }}%</p>
                        <p class="text-danger">Photo could use improvement</p>
                      </div>
                      <p></p>
                      <button
                        v-on:click="advanced = true"
                        type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Click me for full analysis
                      </button>

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">Full Analysis</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div v-if="advanced">
                                <div v-if="attributes.dark_glasses && attributes.dark_glasses.value === 'true'">
                                  <h2 class="text-danger">Dark glasses: true</h2>
                                  <p>Wearing sunglasses makes you look like a creep</p>
                                </div>
                                <div v-else>
                                  <h2 class="text-success">Dark glasses: false</h2>
                                  <p>Good job! No sunglasses makes you look like an honest person</p>
                                </div>

                                <div v-if="attributes.smiling && attributes.smiling.value === 'true'">
                                  <h2 class="text-success">Smiling: true</h2>
                                  <p>
                                    Good job! Smiling in your photos makes you appear more approachable and laidback
                                  </p>
                                </div>
                                <div v-else>
                                  <h2 class="text-danger">Smiling: false</h2>
                                  <p>Not smiling in your photos makes you look less approachable</p>
                                </div>

                                <div v-if="attributes.anger && attributes.anger.value === 'true'">
                                  <h2 class="text-danger">Angry: true</h2>
                                  <p>You appear to be angry. Try retaking your photo and incorporating a smile</p>
                                </div>
                                <div v-else>
                                  <h2 class="text-success">Angry: false</h2>
                                  <p>Good job! You do not appear to be angry in your photo</p>
                                </div>

                                <div v-if="attributes.fear && attributes.fear.value === 'true'">
                                  <h2 class="text-danger">Fear: true</h2>
                                  <p>Try retaking your photo, and incorporating a smile and more confidence.</p>
                                </div>
                                <div v-else>
                                  <h2 class="text-success">Fear: false</h2>
                                  <p>Good job! You are showing great levels of confidence in your photos</p>
                                </div>

                                <div v-if="attributes.happiness && attributes.happiness.value === 'true'">
                                  <h2 class="text-success">Happiness: true</h2>
                                  <p>Good job! You look very happy and content in your photo</p>
                                </div>
                                <div v-else>
                                  <h2 class="text-danger">Happiness: false</h2>
                                  <p>
                                    Try retaking your photo, or using a photo where you are doing an activity you enjoy
                                  </p>
                                </div>

                                <div v-if="attributes.sadness && attributes.sadness.value === 'true'">
                                  <h2 class="text-danger">Sadness: true</h2>
                                  <p>You should use another photo, or retake this photo.</p>
                                </div>
                                <div v-else>
                                  <h2 class="text-success">Sadness: false</h2>
                                  <p>Good job! You are not showing any signs of sadness in this photo</p>
                                </div>

                                <div v-if="attributes.beard && attributes.beard.value === 'true'">
                                  <h2 class="text-success">Beard: true</h2>
                                  <p>
                                    According to our experts, facial hair makes men look more mature, masculine and
                                    socially dominant.
                                  </p>
                                </div>
                                <div v-else>
                                  <h2 class="text-danger">Beard: false</h2>
                                  <p>
                                    According to our experts, facial hair makes men look more mature, masculine and
                                    socially dominant.
                                  </p>
                                </div>

                                <!-- <div v-for="(value, name) in attributes" v-bind:key="name">
                                  <p>{{ name }}: {{ value }}</p>
                                </div> -->
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      loading: false,
      analysis: { score: 100 },
      goodScore: "",
      badScore: "",
    };
  },
  created: function () {
    this.currentUserFirstName = localStorage.getItem("currentUserFirstName");
    this.currentUserLastName = localStorage.getItem("currentUserLastName");
    this.currentUserPhoto = localStorage.getItem("currentUserPhoto");
    this.currentUserLocation = localStorage.getItem("currentUserLocation");
    this.currentUserJob = localStorage.getItem("currentUserJob");
    this.currentUserBio = localStorage.getItem("currentUserBio");
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
      this.loading = true;
      axios.get("/photos/analyze/1").then((response) => {
        this.loading = false;
        console.log(response);
        // this.attributes = response.data.photos[0].tags[0].attributes;
        if (response.data.photos[0].tags.length > 0) {
          this.attributes = response.data.photos[0].tags[0].attributes;
          if (this.attributes.dark_glasses.value === "true") {
            this.analysis.score -= 10;
            // this.analysis.recommendations.push("Don't wear sunglasses");
          }
          if (this.attributes.smiling.value === "false") {
            this.analysis.score -= 10;
          }
          if (this.attributes.anger.value === "true") {
            this.analysis.score -= 10;
          }
          if (this.attributes.fear.value === "true") {
            this.analysis.score -= 10;
          }
          if (this.attributes.happiness.value === "false") {
            this.analysis.score -= 10;
          }
          if (this.attributes.sadness.value === "true") {
            this.analysis.score -= 10;
          }
          if (this.attributes.beard.value === "false") {
            this.analysis.score -= 10;
          }
          if (this.analysis.score >= 80) {
            this.goodScore = this.analysis.score;
          }
          if (this.analysis.score < 80) {
            this.badScore = this.analysis.score;
          }
        } else {
          this.errors = ["Could not analyze photo"];
        }
      });
    },
  },
};
</script>
