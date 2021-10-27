/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <vue-slider ref="slider" v-model="value" v-bind="options" />
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 1,
      data: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
      },
      options: {
        dotSize: 14,
        width: "auto",
        height: 4,
        contained: false,
        direction: "ltr",
        data: null,
        dataLabel: "label",
        dataValue: "value",
        min: 0,
        max: 100,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: "active",
        tooltipPlacement: "top",
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        dotAttrs: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
      },
    };
  },
};
</script>

<style lang="scss">
@import "~vue-slider-component/lib/theme/default.scss";

$themeColor: #34db71 !default;
$disabledOpacity: 0.5 !default;

$bgColor: #ccc !default;
$railBorderRadius: 15px !default;

$dotShadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32) !default;
$dotShadowFocus: 0px 0px 1px 2px rgba($themeColor, 0.36) !default;
$dotBgColor: #fff !default;
$dotBgColorDisable: #ccc !default;
$dotBorderRadius: 50% !default;

$tooltipBgColor: $themeColor !default;
$tooltipColor: #fff !default;
$tooltipBorderRadius: 5px !default;
$tooltipPadding: 2px 5px !default;
$tooltipMinWidth: 20px !default;
$tooltipArrow: 10px !default;
$tooltipFontSize: 14px !default;

$stepBorderRadius: 50% !default;
$stepBgColor: rgba(0, 0, 0, 0.16) !default;

$labelFontSize: 14px !default;

/* component style */
.vue-slider-disabled {
  opacity: $disabledOpacity;
  cursor: not-allowed;
}

/* rail style */
.vue-slider-rail {
  background-color: $bgColor;
  border-radius: $railBorderRadius;
}

/* process style */
.vue-slider-process {
  background-color: $themeColor;
  border-radius: $railBorderRadius;
}

/* mark style */
.vue-slider-mark {
  z-index: 4;

  &:first-child,
  &:last-child {
    .vue-slider-mark-step {
      display: none;
    }
  }

  @at-root &-step {
    width: 100%;
    height: 100%;
    border-radius: $stepBorderRadius;
    background-color: $stepBgColor;

    &-active {
    }
  }

  @at-root &-label {
    font-size: $labelFontSize;
    white-space: nowrap;

    &-active {
    }
  }
}

/* dot style */
.vue-slider-dot {
  @at-root &-handle {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: $dotBorderRadius;
    background-color: $dotBgColor;
    box-sizing: border-box;
    box-shadow: $dotShadow;

    @at-root &-focus {
      box-shadow: $dotShadowFocus;
    }
    @at-root &-disabled {
      cursor: not-allowed;
      background-color: $dotBgColorDisable;
    }
  }

  @at-root &-tooltip {
    @at-root &-inner {
      font-size: $tooltipFontSize;
      white-space: nowrap;
      padding: $tooltipPadding;
      min-width: $tooltipMinWidth;
      text-align: center;
      color: $tooltipColor;
      border-radius: $tooltipBorderRadius;
      border-color: $tooltipBgColor;
      background-color: $tooltipBgColor;
      box-sizing: content-box;
      @include arrow($tooltipArrow, inherit);
    }
  }

  @at-root &-tooltip-wrapper {
    opacity: 0;
    transition: all 0.3s;
    @at-root &-show {
      opacity: 1;
    }
  }
}
</style>
