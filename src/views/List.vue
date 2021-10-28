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

      <paginatie :items="bnrSorteren" />

      <tbody v-for="(bnr, index) in bnrSorteren" v-bind:key="index">
        <tr>
          <!--oproep json-->
          <td>{{ bnr.id }}</td>
          <td>{{ bnr.status }}</td>
          <td>{{ bnr.level }}</td>
          <td>{{ bnr.livingsurface }}</td>
          <td>{{ bnr.roomcount }}</td>
          <td>{{ bnr.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HouseData from "../store/aandelanen.json";
import TablePageBody from "../store/ListBody.vue";

export default {
  components: {
    paginatie: TablePageBody,
  },
  data() {
    return {
      bnr: HouseData,
      sortBy: "",
      sortDirection: "ascending",
    };
  },
  computed: {
    bnrSorteren() {
      if (this.sortBy === "") {
        return this.bnr;
      }
      let sortModifier = this.sortDirection === "ascending" ? 1 : -1;
      return this.bnrs.slice().sort((a, b) => {
        let colA = a[this.sortBy].toUpperCase();
        let colB = b[this.sortBy].toUpperCase();

        if (colA < colB) {
          return -1 * sortModifier;
        }
        if (colA > colB) {
          return 1 * sortModifier;
        }
        return 0;
      });
    },
  },
};
</script>

<style scoped src="bulma/css/bulma.css"></style>
