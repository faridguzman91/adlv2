/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <p class="title">Project Aan de lanen Vue.js</p>
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

    <div class="flter">
      <Slider class="Slider" />
      <!--<Slider class="Slider2" />-->
      <DropdownVerdieping class="Dropdown" />
      
      <DropdownWoontype class="Dropdown" />
      <VueSlider />
    </div>
    <router-view />
  </div>
</template>

<script>
// import Router from "./router/index.js";
import Slider from "./components/Slider.vue";
import VueSlider from "./components/vueform-slider/VueformSlider.vue";
import DropdownVerdieping from "./components/DropdownVerdieping.vue";
import DropdownWoontype from "./components/DropdownWoontype.vue";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    // Router,
    Slider,
    DropdownVerdieping,
    DropdownWoontype,
    VueSlider,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.title {
  display: flex;
  padding: 10px;
}

.Dropdown {
  width: 50%;
  margin: 10px 20px;
}

.Slider {
  width: 50%;
  margin: 10px 20px;
}

.Slider2 {
  width: 50%;
  margin: 10px 20px;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
p {
  font-family: "Montserrat", sans-serif !important;
  color: black;
  font-weight: 100;
}

#nav {
  display: flex;
  padding: 30px;
  background-color: #f5f5f5;

  &.router-link-active {
    background-color: #387d76;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    border: 1px solid white;
    text-decoration: none;
    background-color: black;

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
    background-color: #000000;
    padding: 22px;

    &:hover {
      background-color: #f9ab2b;
      cursor: pointer;
    }
  }
}
</style>
