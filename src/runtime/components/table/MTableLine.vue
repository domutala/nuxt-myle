<script lang="ts" setup>
import { onMounted } from "vue";

defineProps({ isHeader: { type: Boolean, default: false } });

onMounted(mounted);
function mounted() {
  const event = new CustomEvent("m-table:new-line");
  dispatchEvent(event);
}
</script>

<template>
  <div
    class="m-table-line"
    :class="{ 'is-header': isHeader }"
  >
    <div class="m-table-line-container">
      <slot />
    </div>
    <div class="m-table-line-cadre"></div>
  </div>
</template>
