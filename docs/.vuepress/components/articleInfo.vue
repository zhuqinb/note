<template>
  <p class="date">
    <slot></slot>
    <svg class="mood" aria-hidden="true">
      <use :xlink:href="weather|weatherFilter"></use>
    </svg>
    <svg class="mood" aria-hidden="true">
      <use :xlink:href="mood|moodFilter"></use>
    </svg>
  </p>
</template>
<script>
import './../public/font/iconfont'

import { mood, moodList } from "./../js/moodList";
import { weather, weatherList } from "./../js/weatherList";

export default {
  props: {
    weather: {
      require: true,
      type: [Number, String],
      default: 1
    },
    mood: {
      require: true,
      type: [Number, String],
      default: 1
    }
  },
  filters: {
    weatherFilter: val => {
      if (typeof val === "number") {
        return '#' + weatherList[val].value;
      }

      if (typeof val === "string") {
        return '#' + weather[val].value;
      }
    },
    moodFilter: val => {
      if (typeof val === "number") {
        return '#' + moodList[val].value;
      }

      if (typeof val === "string") {
        return '#' + mood[val].value;
      }
    }
  }
};
</script>


<style lang="stylus">
.mood {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.date {
  text-align: right;
  color: #999;
  font-size: 14px;
}

.mood {
  font-size: 50px;
}
</style>



