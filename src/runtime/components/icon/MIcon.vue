<script setup lang="ts">
defineProps({
  name: { required: true, type: String },
  className: { type: String, default: "" },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    v-bind="$attrs"
  >
    <use :href="`/mi/icons/micons.svg#${name}`" />
  </svg>
</template>

<style>
svg {
  fill: currentColor;
  stroke: currentcolor;
}
</style>
