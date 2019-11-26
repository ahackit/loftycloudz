<template
  >
  <div>
    <div v-bind:key="cloud.id" v-for="cloud in clouds">
      <Cloud v-bind:cloud="cloud" />
    </div>
  </div>
</template>

<script>
import Cloud from "./Cloud";
export default {
  name: "Clouds",
  props: ["clouds"],
  components: { Cloud }
};
</script>

<style scoped></style>
