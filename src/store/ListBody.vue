<template>
  <tbody>
    <template v-for="(bnr, index) in bnrPaginated">
      <tr v-bind:key="index">
        <!--oproep json-->
        <td>{{ bnr.id }}</td>
        <td>{{ bnr.status }}</td>
        <td>{{ bnr.level }}</td>
        <td>{{ bnr.livingsurface }}</td>
        <td>{{ bnr.roomcount }}</td>
        <td>{{ bnr.price }}</td>
      </tr>
    </template>
  </tbody>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    per_pagina: {
      type: Number,
      required: false,
      default: 50,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    totaalPaginas() {
      return Math.ceil(this.items.length / this.per_pagina);
    },
    bnrPaginated() {
      return this.items.slice(0, this.page * this.per_pagina);
    },
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener("scroll", (event) => {
      if (this.page >= this.totalPages) return;
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 100
      ) {
        this.page++;
      }
    });
  },
  watch: {
    items() {
      this.page = 1;
    },
  },
};
</script>

<style></style>
