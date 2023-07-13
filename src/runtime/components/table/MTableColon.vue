<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(mounted);
function mounted() {
  const event = new CustomEvent("m-table:new-colon");
  dispatchEvent(event);
}
</script>

<template>
  <div class="m-table-colon">
    <slot />
  </div>
</template>
