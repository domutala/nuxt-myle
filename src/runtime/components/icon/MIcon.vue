<script setup lang="ts">
defineProps({
  name: { required: true, type: String },
  className: { type: String, default: "" },
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="className">
    <use :href="`/mi/icons/micons.svg#${name}`" />
  </svg>
</template>

<style>
svg {
  fill: currentColor;
  max-height: 100%;
  max-width: 100%;
}
</style>
