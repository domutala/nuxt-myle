<script setup lang="ts">
defineProps({
  success: { default: false, type: Boolean },
  danger: { default: false, type: Boolean },
});
</script>

<template>
  <div class="--info" :class="{ success, danger }">
    <slot />
  </div>
</template>
