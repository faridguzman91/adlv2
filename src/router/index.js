import Vue from "vue";
import VueRouter from "vue-router";
import West from "../views/West.vue";
import East from "../views/East.vue";
import List from "../views/List.vue";
import North from "../views/North.vue";
import South from "../views/South.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/West",
    name: "West",
    component: West,
  },
  {
    path: "/East",
    name: "East",
    component: East,
  },
  {
    path: "/North",
    name: "North",
    component: North,
  },
  {
    path: "/South",
    name: "South",
    component: South,
  },
    {
    path: "/List",
    name: "List",
    component: List,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
