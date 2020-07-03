<template>
  <div class="indicator-container">
    <div
      v-for="(indicator, index) in count"
      :key="'indicator_' + index"
      :style="{ backgroundColor: indicatorColour(index) }"
      :class="['indicator', { active: current === index }]"
      @click="clicked(index, $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexIndicator',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    indicatorColour(index) {
      return this.items[index]
    },
    clicked(index) {
      this.$emit('update:index', index)
    },
  },
}
</script>

<style>
.indicator-container {
  display: flex;
  justify-content: center;
  padding-top: 1em;
}
.indicator {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin-left: 0.2em;
  margin-right: 0.2em;
  /* background-color: #8300bf; */
  opacity: 0.5;
  cursor: pointer;
}
.indicator.active {
  transform: scale(1.2);
  opacity: 1;
}
</style>
