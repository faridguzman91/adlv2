/* eslint-disable prettier/prettier */
<template>
  <v-select
    :options="woontypes"
    class="verdiepingen"
    label="woontype"
    placeholder="Woontype"
  ></v-select>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "DropdownWoontype",
  data() {
    return {
      woontypes: [
        { woontype: "woontype 1" },
        { woontype: "woontype 2" },
        { woontype: "woontype 3" },
        { woontype: "woontype 4" },
        { woontype: "woontype 5" },
        { woontype: "woontype 6" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.v-select {
  position: relative;
  font-family: inherit;
  font-size: 13px;
}
</style>
