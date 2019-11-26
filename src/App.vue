<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Create a Cloud</h3>
          <CloudForm v-bind:uniqueCloudTypes="getUniqueCloudTypes" />
        </div>
        <div class="col-md-8">
          <Clouds class="bg-red" v-bind:clouds="allClouds" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clouds from "./components/Clouds";
import CloudForm from "./components/CloudForm";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  methods: { ...mapActions(["getClouds"]) },
  components: { Clouds, CloudForm },
  computed: mapGetters(["allClouds", "getUniqueCloudTypes"]),
  mounted() {
    this.getClouds();
  }
};
</script>

<style></style>
