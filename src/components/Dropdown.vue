<template>
  <v-select :options="verdiepingen" label="verdieping"></v-select>
</template>

<script>
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

<style scoped>
.loader {
  text-align: center;
  color: #bbbbbb;
}
</style>
