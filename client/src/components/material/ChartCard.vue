<template>
  <material-card class="v-card--material-chart" v-bind="$attrs" v-on="$listeners">
    <template v-slot:header>
      <chartist
        :data="data"
        :event-handlers="eventHandlers"
        :options="options"
        :ratio="ratio"
        :responsive-options="responsiveOptions"
        :type="type"
        style="max-height: 150px;"
      />
    </template>

    <slot />

    <slot slot="actions" name="actions" />
  </material-card>
</template>

<script>
export default {
  name: "material-chart-card",

  inheritAttrs: false,

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    eventHandlers: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    ratio: {
      type: String,
      default: undefined,
    },
    responsiveOptions: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      required: true,
      validator: (v) => ["Bar", "Line", "Pie"].includes(v),
    },
  },
};
</script>

<style  scoped>
.v-card--material-chart .v-card--material__header .ct-label {
  color: inherit;
  opacity: 0.7;
  font-size: 0.975rem;
  font-weight: 100;
}
.v-card--material-chart .v-card--material__header .ct-grid {
  stroke: rgba(255, 255, 255, 0.2);
}
.v-card--material-chart .v-card--material__header .ct-series-a .ct-point,
.v-card--material-chart .v-card--material__header .ct-series-a .ct-line,
.v-card--material-chart .v-card--material__header .ct-series-a .ct-bar,
.v-card--material-chart .v-card--material__header .ct-series-a .ct-slice-donut {
  stroke: rgba(255, 255, 255, 0.8);
}
.v-card--material-chart .v-card--material__header .ct-series-a .ct-slice-pie,
.v-card--material-chart .v-card--material__header .ct-series-a .ct-area {
  fill: rgba(255, 255, 255, 0.4);
}
</style>
