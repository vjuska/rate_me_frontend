<template>
  <section id="portfolio" class="portfolio">
    <div class="photos-index">
      <h1>All Photos</h1>
      <div class="row">
        <div class="col-4" v-for="photo in photos" v-bind:key="photo.id">
          <img v-bind:src="photo.img_url" width="200px" alt="" />
          <div v-for="rating in photo.ratings" v-bind:key="rating.id">
            <p>Feedback: {{ rating.description }}</p>
            <p>Score for photo: {{ rating.score_for_photo }}</p>
            <p>Rater feed back: {{ rating.rater_feed_back }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      photos: [],
    };
  },
  created: function () {
    this.indexPhotos();
  },
  methods: {
    indexPhotos: function () {
      axios.get("http://localhost:3000/photos").then((response) => {
        console.log("photos index", response);
        this.photos = response.data;
      });
    },
  },
};
</script>
