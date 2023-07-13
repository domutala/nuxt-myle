<script lang="ts" setup>
import { onMounted, useSlots } from "vue";

const slots = useSlots();

onMounted(mounted);
function mounted() {
  if (slots.default) {
    const o = slots
      .default()
      .filter((slot) => (slot.type as any).__name !== "MTableColon").length;

    if (o) {
      throw new Error("MTableLine take only MTableColumn components");
    }
  }

  const event = new CustomEvent("m-table:new-line");
  dispatchEvent(event);
}
</script>

<template>
  <div class="m-table-line">
    <div class="m-table-line-container">
      <slot />
    </div>
    <div class="m-table-line-cadre"></div>
  </div>
</template>
