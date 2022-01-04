<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>

    <section id="team" class="team">
      <div class="container">
        <h2 class="text-light">All Photos</h2>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#bestphoto">
          What's my best photo?
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#changephotos">
          Which photo(s) should I replace?
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#otherareas">
          What raters think of your overall dating profile
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="modal fade" id="otherareas" tabindex="-1" aria-labelledby="otherareasLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="otherareasLabel">General profile feedback</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <center>
                  <p>
                    Fun:
                    <span class="text-danger">20%</span>
                  </p>
                  <p>
                    Authentic:
                    <span class="text-danger">50%</span>
                  </p>
                  <p>
                    Trustworthy:
                    <span class="text-success">80%</span>
                  </p>
                  <p>
                    Attractive
                    <span class="text-success">85%</span>
                  </p>
                  <p>
                    Confident:
                    <span class="text-danger">60%</span>
                  </p>
                </center>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="bestphoto" tabindex="-1" aria-labelledby="bestphotoLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bestphotoLabel">Your #1 highest rated photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <center>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
                    style="height: 200px"
                  />
                  <p>
                    According to the feedback received by the raters and the AI this should be used as the primary photo
                    on your dating profile.
                  </p>
                </center>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="changephotos" tabindex="-1" aria-labelledby="changephotosLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="changephotosLabel">
                  These are the photos that have a combined average score below 80%
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <center>
                  <img
                    src="https://i.pinimg.com/originals/25/04/53/2504531d1ce42f9e26435e031ea58f25.jpg"
                    style="height: 100x"
                  />
                  <img src="https://i.redd.it/wek3uj964r721.jpg" style="height: 200px" />
                  <img src="https://medias.spotern.com/spots/w640/275/275974-1580812533.jpg" style="height: 200px" />
                </center>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="photo-card col-lg-6 mt-4" v-for="photo in photos" v-bind:key="photo.id">
            <div class="member d-flex align-items-start" style="height: 100%">
              <div class="row">
                <div class="col-4">
<!--  Be careful of relying too heavily on bootstrap row/col grid set ups for all your positioning needs, it can be super handy but 
sometimes it's a code smell for not using CSS -->
                  <div class="pic">
                    <button type="button" data-bs-toggle="modal" :data-bs-target="`#enlargephoto${photo.id}`">
                      <img v-bind:src="photo.img_url" class="img-fluid" alt="" />
                      <div
                        class="modal fade"
                        :id="`enlargephoto${photo.id}`"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img style="max-height: 300px" v-bind:src="photo.img_url" class="img-fluid" alt="" />
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col-8">
                  <div class="member-info">
                    <h4
                      v-bind:class="{
                        'text-danger': photo.average_rating < 80,
                        'text-success': photo.average_rating >= 80,
                      }"
                    >
<!-- The rating >= 80/< 80 logic appears at least twice in this file, so might be a good time to package that logic into a reusable function 
that can be called anywhere you need to know whether a score is considered good/bad -->
                      Average Rater Photo Score {{ photo.average_rating }}%
                    </h4>
                    <h4 class="text-success" v-if="photo.goodScore">Average AI Photo Score: {{ photo.goodScore }}%</h4>
                    <h4 class="text-danger" v-if="photo.badScore">Average AI Photo Score: {{ photo.badScore }}%</h4>
                    <h4 v-if="!photo.analysis">Average AI Photo Score:</h4>
                    <div v-for="rating in photo.ratings" v-bind:key="rating.id">
                      <p>Rater's Feedback: {{ rating.description }}</p>
                      <div v-if="rating.rater_feed_back && rating.rater_feed_back === -1">
                        <p>
                          Feed back for rater:
                          <i class="bi bi-hand-thumbs-down fa-10x"></i>
                        </p>
                      </div>
                      <div v-if="rating.rater_feed_back && rating.rater_feed_back === 1">
                        <p>
                          Feed back for rater:
                          <i class="bi bi-hand-thumbs-up fa-10x"></i>
                        </p>
                      </div>
                      <!-- <p>Feed back for rater: {{ rating.rater_feed_back }}</p> -->
                      <!-- <button class="btn btn-danger btn-sm" v-on:click="updateRating(rating)">Update</button> -->
                      <!-- <button type="button" class="btn btn-danger btn-sm" v-on:click="updateRatingGood(rating)">
                    Thumbs Up
                  </button> -->
                      <!-- <button type="button" class="btn btn-danger btn-sm" v-on:click="updateRatingBad(rating)">
                    Thumbs Down
                  </button> -->
                      <button class="btn btn-success btn-sm" v-on:click="updateRatingGood(rating)">
                        <i class="bi bi-hand-thumbs-up fa-10x"></i>
                      </button>
                      <button class="btn btn-warning btn-sm" v-on:click="updateRatingBad(rating)">
                        <i class="bi bi-hand-thumbs-down fa-10x"></i>
                      </button>
                    </div>

                    <p>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        v-on:click="analyze(photo)"
                      >
                        Click me for Quick Analysis
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleMoadalLabel">AI Quick Analysis</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            <div class="modal-body" v-if="currentPhoto.attributes">
              <div v-if="currentPhoto.attributes.age_est">
                <p>Age based on the photo: {{ currentPhoto.attributes.age_est.value }}</p>
              </div>

              <div v-if="currentPhoto.attributes.mood">
                <p>Your mood is: {{ currentPhoto.attributes.mood.value }}</p>
                <div v-if="currentPhoto.goodScore">
                  <p class="text-success">Average AI Score {{ currentPhoto.goodScore }}%</p>
                </div>
                <div v-if="currentPhoto.badScore">
                  <p class="text-danger">Average AI Score {{ currentPhoto.badScore }}</p>
                </div>
                <div>
                  <button v-on:click="advanced = true" class="btn btn-danger">Click me for further Analysis</button>
                </div>
                <div v-if="advanced">
                  <div
                    v-if="currentPhoto.attributes.dark_glasses && currentPhoto.attributes.dark_glasses.value === 'true'"
                  >
                    <h2 class="text-danger">Dark glasses: true</h2>
                    <p>Wearing sunglasses makes you look dishonest and that you are hiding something</p>
                  </div>
                  <div v-else>
                    <h2 class="text-success">Dark glasses: false</h2>
                    <p>Good job! No sunglasses makes you look like an honest person</p>
                  </div>

                  <div v-if="currentPhoto.attributes.smiling && currentPhoto.attributes.smiling.value === 'true'">
                    <h2 class="text-success">Smiling: true</h2>
                    <p>Good job! Smiling in your photos makes you appear more approachable and laidback</p>
                  </div>
                  <div v-else>
                    <h2 class="text-danger">Smiling: false</h2>
                    <p>Not smiling in your photos makes you look less approachable</p>
                  </div>

                  <div v-if="currentPhoto.attributes.anger && currentPhoto.attributes.anger.value === 'true'">
                    <h2 class="text-danger">Angry: true</h2>
                    <p>You appear to be angry. Try retaking your photo and incorporating a smile</p>
                  </div>
                  <div v-else>
                    <h2 class="text-success">Angry: false</h2>
                    <p>Good job! You do not appear to be angry in your photo</p>
                  </div>

                  <div v-if="currentPhoto.attributes.fear && currentPhoto.attributes.fear.value === 'true'">
                    <h2 class="text-danger">Fear: true</h2>
                    <p>Try retaking your photo, and incorporating a smile and more confidence.</p>
                  </div>
                  <div v-else>
                    <h2 class="text-success">Fear: false</h2>
                    <p>Good job! You are showing great levels of confidence in your photos</p>
                  </div>

                  <div v-if="currentPhoto.attributes.happiness && currentPhoto.attributes.happiness.value === 'true'">
                    <h2 class="text-success">Happiness: true</h2>
                    <p>Good job! You look very happy and content in your photo</p>
                  </div>
                  <div v-else>
                    <h2 class="text-danger">Happiness: false</h2>
                    <p>
                      Try retaking your photo where you appear to be happy/smiling, or using a photo where you are doing
                      an activity you enjoy
                    </p>
                  </div>

                  <div v-if="currentPhoto.attributes.sadness && currentPhoto.attributes.sadness.value === 'true'">
                    <h2 class="text-danger">Sadness: true</h2>
                    <p>You should use another photo, or retake this photo.</p>
                  </div>
                  <div v-else>
                    <h2 class="text-success">Sadness: false</h2>
                    <p>Good job! You are not showing any signs of sadness in this photo</p>
                  </div>

                  <div v-if="currentPhoto.attributes.beard && currentPhoto.attributes.beard.value === 'true'">
                    <h2 class="text-success">Beard: true</h2>
                    <p>
                      According to our experts, facial hair makes men look more mature, masculine and socially dominant.
                    </p>
                  </div>
                  <div v-else>
                    <h2 class="text-danger">Beard: false</h2>
                    <p>
                      According to our experts, facial hair makes men look more mature, masculine and socially dominant.
                    </p>
                  </div>

                  <!-- <div v-for="(value, name) in currentPhoto.attributes" v-bind:key="name">
                    <p>{{ name }}: {{ value }}</p>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                v-on:click="advanced = false"
                click
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  data: function () {
    return {
      photos: [],
      // attributes: {},
      errors: [],
      advanced: false,
      currentPhoto: {},
      // analysis: { score: 100 },
      // goodScore: "",
      // badScore: "",
      // random comment for git test
    };
  },
  created: function () {
    this.indexPhotos();
  },
  methods: {
    indexPhotos: function () {
      axios.get("/photos").then((response) => {
        console.log("photos index", response);
        this.photos = response.data;
      });
    },
    updateRatingGood: function (rating) {
      var ratingsParams = {
        rater_feed_back: 1,
      };
      axios
        .patch("/ratings/" + rating.id, ratingsParams)
        .then((response) => {
          console.log("rating updated", response);
          rating.rater_feed_back = response.data.rater_feed_back;
        })
        .catch((error) => {
          console.log("rating update error", error.response);
        });
    },
    updateRatingBad: function (rating) {
      var ratingsParams = {
        rater_feed_back: -1,
      };
      axios
        .patch("/ratings/" + rating.id, ratingsParams)
        .then((response) => {
          console.log("rating updated", response);
          rating.rater_feed_back = response.data.rater_feed_back;
        })
        .catch((error) => {
          console.log("rating update error", error.response);
        });
        /* You could combine updateRatingBad & updateRatingGood into one method, and just use the param to tell you 
        if it's a +1 or -1 to the score */
    },
    analyze: function (picture) {
      this.errors = [];
      var attributes = {};
      var analysis = { score: 100 };
      var goodScore = "";
      var badScore = "";

      this.currentPhoto = picture;
      axios.get(`/photos/analyze/${picture.id}`).then((response) => {
        console.log(response);
        // this.attributes = response.data.photos[0].tags[0].attributes;
        if (response.data.photos[0].tags && response.data.photos[0].tags.length > 0) {
          // picture.attributes = response.data.photos[0].tags[0].attributes;

          console.log("yes", picture);
          // this.currentPhoto = response.data.photos[0].tags[0];
          attributes = response.data.photos[0].tags[0].attributes;
          if (attributes.dark_glasses.value === "true") {
            analysis.score -= 10;
            // analysis.recommendations.push("Don't wear sunglasses");
          }
          if (attributes.smiling.value === "false") {
            analysis.score -= 10;
          }
          if (attributes.anger.value === "true") {
            analysis.score -= 10;
          }
          if (attributes.fear.value === "true") {
            analysis.score -= 10;
          }
          if (attributes.happiness.value === "false") {
            analysis.score -= 10;
          }
          if (attributes.sadness.value === "true") {
            analysis.score -= 10;
      // LOL I love that it's trying to detect sadness and fear in the photo
          }
          if (attributes.beard.value === "false") {
            analysis.score -= 10;
          }
          if (analysis.score >= 80) {
            goodScore = analysis.score;
          }
          if (analysis.score < 80) {
            badScore = analysis.score;
          }
  /* This is a classic example of having multiple sources of truth. With this set up, in the html code you're having to check if (goodScore) and if (badScore), 
  and whichever gets set is just a copy of the same value in analysis.score. It's two separate vars defining the same thing. It's a good rule of thumb to avoid
 duplicating data in your contract like this since as soon as you do, you run the risk of values getting out of sync and in some future update no longer knowing
  if analysis.score or goodScore is the correct score to use. You've already got the score in analysis.score, let that be your source of truth for the score value. 
  Meanwhile, for the good vs bad score determination, set one isGoodScore boolean and do a !isGoodScore check when you need to know if it's a bad score
  let isGoodScore = analysis.score >= 80;

  */

          Vue.set(picture, "attributes", attributes);
          Vue.set(picture, "analysis", analysis);
          Vue.set(picture, "goodScore", goodScore);
          Vue.set(picture, "badScore", badScore);
        } else {
          this.errors = ["Could not analyze photo"];
          this.currentPhoto = {};
          attributes = {};
          console.log("failed", this.errors);
        }
        // console.log(response.data.photos[0].tags[0].attributes);
      });
    },
  },
};
</script>
