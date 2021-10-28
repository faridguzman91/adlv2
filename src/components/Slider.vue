/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <div>value: {{ value }}</div>
    <vue-slider v-model="value" :order="false"></vue-slider>
    <div>value: {{ value }}</div>
    <vue-slider v-model="value" :order="false"></vue-slider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: [0, 100],
    };
    // options: {
    //   dotSize: 14,
    //   width: "auto",
    //   height: 4,
    //   contained: false,
    //   direction: "ltr",
    //   data: null,
    //   dataLabel: "label",
    //   dataValue: "value",
    //   min: 0,
    //   max: 100,
    //   interval: 1,
    //   disabled: false,
    //   clickable: true,
    //   duration: 0.5,
    //   adsorb: false,
    //   lazy: false,
    //   tooltip: "active",
    //   tooltipPlacement: "top",
    //   tooltipFormatter: void 0,
    //   useKeyboard: false,
    //   keydownHook: null,
    //   dragOnClick: false,
    //   enableCross: true,
    //   fixed: false,
    //   minRange: void 0,
    //   maxRange: void 0,
    //   order: true,
    //   marks: false,
    //   dotOptions: void 0,
    //   dotAttrs: void 0,
    //   process: true,
    //   dotStyle: void 0,
    //   railStyle: void 0,
    //   processStyle: void 0,
    //   tooltipStyle: void 0,
    //   stepStyle: void 0,
    //   stepActiveStyle: void 0,
    //   labelStyle: void 0,
    //   labelActiveStyle: void 0,
    // },
  },
};
</script>

<style lang="scss">
.vue-slider-disabled {
  opacity: 1;
  cursor: not-allowed;
}

.vue-slider-rail {
  background-color: #9e9e9e;
  border-radius: 50px;
}

.vue-slider-process {
  background-color: rgb(37, 160, 82);
  border-radius: 50px;
}

.vue-slider-mark {
  z-index: 4;

  &:first-child,
  &:last-child {
    .vue-slider-mark-step {
      display: none;
    }
  }

  &-step {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: #ffffff;

    &-active {
    }
  }

  &-label {
    font-size: 20px;
    white-space: nowrap;

    &-active {
    }
  }
}

.vue-slider-dot {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: red;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.35);

  &-handle {
    border-color: rgb(11, 230, 117);
    border: 2px solid rgb(28, 165, 101);

    &-focus {
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.35);

      &-disabled {
        cursor: not-allowed;
        background-color: rgb(186, 35, 35);
        border-color: red;
      }
    }

    &-tooltip {
      &-inner {
        font-size: 16px;
        white-space: nowrap;
        padding: 2px;
        min-width: 500px;
        text-align: center;
        color: black;
        border-radius: 50px;
        border-color: red;
        background-color: black;
        box-sizing: content-box;
      }
    }

    &-tooltip-wrapper {
      opacity: 0;
      transition: all 0.3s;
      @at-root &-show {
        opacity: 1;
      }
    }
  }
}
</style>
