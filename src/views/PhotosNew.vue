<template>
  <main id="main">
    <section id="breadcrumbs" class="breadcrumbs"></section>
    <section id="team" class="team">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <v-row align="center">
              <v-row justify="center">
                <div class="member d-flex align-items-center">
                  <form v-on:submit.prevent="submit()">
                    <h2>Upload a new photo:</h2>
                    <div>
                      Image:
                      <input type="file" v-on:change="setFile($event)" ref="fileInput" />
                    </div>
                    <p><input type="submit" value="Submit" /></p>
                  </form>
                </div>
              </v-row>
            </v-row>
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
      imageFile: "",
    };
  },
  created: function () {},
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("image_file", this.imageFile);
      console.log(formData);

      axios.post("/photos", formData).then((response) => {
        this.$refs.fileInput.value = "";
        console.log(response);
      });
    },
  },
};
</script>
