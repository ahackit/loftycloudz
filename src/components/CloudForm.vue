<template>
  <form>
    <div v-if="getSuccessMessage" class="alert alert-success" role="alert">{{getSuccessMessage}}</div>
    <div v-if="getErrorMessage" class="alert alert-danger" role="alert">{{getErrorMessage}}</div>
    <div class="form-group">
      <label for="cloudtype">Cloud Type</label>
      <select v-model="cloudTypeInput" type="select" class="form-control" id="cloudtype">
        <option v-bind:key="cloud_type" v-for="cloud_type in uniqueCloudTypes">{{ cloud_type }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="cloudname">Cloud Name</label>
      <input v-model="cloudNameInput" type="text" class="form-control" id="cloudname" />
    </div>
    <div class="form-group">
      <label class="form-check-label" for="cloudsize">Cloud Size</label>
      <input v-model="cloudSizeInput" type="text" class="form-control" id="cloudsize" />
      <small>Please input a number</small>
    </div>
    <button v-on:click="sendCloud" type="submit" class="btn btn-primary">Send Cloud</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CloudForm",
  props: ["uniqueCloudTypes"],
  data() {
    return {
      cloudTypeInput: null,
      cloudNameInput: null,
      cloudSizeInput: null
    };
  },
  computed: mapGetters(["getSuccessMessage", "getErrorMessage"]),
  methods: {
    ...mapActions(["addCloud"]),
    sendCloud: function(event) {
      if (event) {
        const cloud_obj = {
          cloudTypeInput: this.cloudTypeInput,
          cloudNameInput: this.cloudNameInput,
          cloudSizeInput: this.cloudSizeInput
        };
        this.addCloud(cloud_obj);
      }
      event.preventDefault();
    }
  }
};
</script>

<style scoped></style>
