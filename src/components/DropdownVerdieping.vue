/* eslint-disable prettier/prettier */
<template>
  <v-select
    :options="verdiepingen"
    class="verdiepingen"
    label="verdieping"
    placeholder="Verdieping"
  ></v-select>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "DropdownVerdieping",
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

.v-select {
  position: relative;
  font-family: inherit;
  font-size: 13px;
}

.vs__dropdown-toggle {
  display: flex;
  padding: 0 0 4px 0;
  background: none;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 0px !important;
  white-space: normal;
}
</style>
