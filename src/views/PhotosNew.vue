<template>
  <div>
    <form v-on:submit.prevent="submit()">
      <h2>Upload new photo:</h2>
      <div>
        Image:
        <input type="file" v-on:change="setFile($event)" ref="fileInput" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
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
