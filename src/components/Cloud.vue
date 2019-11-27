<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ cloud.cloud_type }}</h5>
      <p class="card-text">Name: {{ cloud.name }}</p>
	  <p class="card-text">Size: {{ cloud.size }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cloud",
  props: ["cloud"]
};
</script>

<style scoped></style>
