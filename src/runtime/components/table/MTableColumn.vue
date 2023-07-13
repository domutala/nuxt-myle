<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(mounted);
function mounted() {
  const event = new CustomEvent("m-table:new-column");
  dispatchEvent(event);
}
</script>

<template>
  <div class="m-table-column">
    <slot />
  </div>
</template>
