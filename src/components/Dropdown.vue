/* eslint-disable prettier/prettier */
<template>
  <v-select
    :options="verdiepingen"
    class="verdiepingen"
    label="verdieping"
  ></v-select>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "Dropdown",
  data() {
    return {
      verdiepingen: [
        { verdieping: "Verdieping 1" },
        { verdieping: "Verdieping 2" },
        { verdieping: "Verdieping 3" },
        { verdieping: "Verdieping 4" },
        { verdieping: "Verdieping 5" },
        { verdieping: "Verdieping 6" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
