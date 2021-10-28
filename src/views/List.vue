<template>
  <div class="houses_table">
    <h1>List</h1>
    <br />
    <hr />
    <table class="table is-fullwidth is-striped is-hoverable is-narrow">
      <thead>
        <th style="width: 17%">
          <a @click="sorting('bouwnummer')"
            >Bouwnummer<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'bouwnummer' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'bouwnummer' && sortDirection == 'descending'"
            />
          </a>
        </th>
        <th style="width: 17%">
          <a @click="sorting('status')"
            >Status<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'status' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'status' && sortDirection == 'descending'"
            />
          </a>
        </th>
        <th style="width: 17%">
          <a @click="sorting('verdieping')"
            >Verdieping<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'verdieping' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'verdieping' && sortDirection == 'descending'"
            />
          </a>
        </th>
        <th style="width: 17%">
          <a
            >GBO<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'gbo' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'gbo' && sortDirection == 'descending'"
            />
          </a>
        </th>
        <th style="width: 17%">
          <a
            >Kamers<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'kamers' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'kamers' && sortDirection == 'descending'"
            />
          </a>
        </th>
        <th style="width: 17%">
          <a
            >Prijs V.O.N.<i
              class="fas fa-chevron-up"
              v-if="sortBy == 'prijs' && sortDirection == 'ascending'"
            ></i>
            <i
              class="fas fa-chevron-down"
              v-if="sortBy == 'prijs' && sortDirection == 'descending'"
            />
          </a>
        </th>
      </thead>

      <paginatie :items="bouwNummerSorteren" />
    </table>
  </div>
</template>

<script>
import HouseData from "./store/aandelanen.json";
import TablePageBody from "./store/ListBody.vue";

export default {
  components: {
    paginatie: ListBody,
  },
  data() {
    return {
      bnr: HouseData,
      sortBy: "",
      sortDirection: "ascending",
    };
  },
};
</script>

<style scoped src="bulma/css/bulma.css"></style>
