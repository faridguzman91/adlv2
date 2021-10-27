<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/"></router-link>-->

      <router-link to="/West" class="nav-buttons">West</router-link>
      <router-link to="/East" class="nav-buttons">East</router-link>
      <router-link to="/North" class="nav-buttons">North</router-link>
      <router-link to="/South" class="nav-buttons">South</router-link>
      <router-link to="/List" class="nav-buttons">
        <i class="fas fa-list"></i>
      </router-link>
      <button class="button_filter"><i class="fas fa-filter"></i>Filter</button>
    </div>
    <Slider />
    <Dropdown />
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
// eslint-disable-next-line no-unused-vars
import Dropdown from "./components/Dropdown.vue";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    Slider,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-family: "Montserrat", sans-serif;
  color: black;
}

#nav {
  display: flex;
  padding: 30px;
  background-color: #1c1c1c;

  &.router-link-active {
    background-color: #387d76;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    border: 1px solid white;
    text-decoration: none;

    &.nav-buttons {
      padding: 20px;
      color: white;

      &.nav-buttons:hover {
        background-color: #f9ab2b;

        &.nav-buttons:focus {
          background-color: #387d76;

          &.nav-buttons:active {
            background-color: #387d76;
          }
        }
      }
    }
  }
  button.button_filter {
    border: 1px solid white;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    display: flex;
    position: absolute;
    right: 20px;
    background-color: #00000000;
    padding: 22px;

    &:hover {
      background-color: #f9ab2b;
      cursor: pointer;
    }
  }
}
</style>
