<script lang="ts" setup>
import {} from "~/";
defineProps({
  radius: { type: [String, Number], default: 0 },
  borderWidth: { type: [String, Number], default: 1 },
  hideIndex: { type: Boolean, default: false },
});
</script>

<template>
  <div
    :style="{ borderRadius: `${CssValue({ value: radius }).valueUnit}` }"
    class="m-table-line"
  >
    <div class="m-table-line-container">
      ***Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
      soluta nisi expedita assumenda. Dolores a repudiandae molestias ex
      aliquam, veniam provident, officia vel ad quo magnam atque accusantium
      unde facere.
    </div>
    <div
      class="m-table-line-cadre"
      :style="{
        borderWidth: `${CssValue({ value: borderWidth }).valueUnit}`,
      }"
    ></div>
  </div>
</template>
