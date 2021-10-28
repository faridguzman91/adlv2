<template>
  <div>
    <Slider v-model="value" />
  </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";

export default {
  component: {
    Slider,
  },
  data() {
    return {
      value: 20,
    };
  },
};
</script>

<style src="@vueform/slider/themes/default.css">

</style>
