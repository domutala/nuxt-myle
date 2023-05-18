<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({ length: { default: 5, type: Number } });
const sizes = computed(() => {
  const sizes = Array.from({ length: props.length }, () =>
    Math.floor(Math.random() * (100 - 70 + 1) + 70)
  );
  return sizes;
});
</script>

<template>
  <div class="m-loader-text">
    <div
      v-for="(size, i) in sizes"
      :key="i"
      :style="{ width: `${size}%` }"
      class="text"
    >
      <m-loader-plache />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-loader-text {
  .text {
    height: 13px;
    border-radius: 0.3em;
    margin-bottom: 10px;
  }
}
</style>
