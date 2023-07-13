<script lang="ts" setup>
import { PropType, ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import { ScrollValues } from "./models";
import Sleep from "../../myle/utils/Sleep";

defineProps({
  direction: {
    type: String as PropType<"vertical" | "horizontal">,
    default: "vertical",
  },
});
const emit = defineEmits<{ (e: "scroll", value: ScrollValues): void }>();
const scrollContainer = ref<HTMLElement>();

onMounted(mounted);
async function mounted() {
  Sleep(10);
  if (!scrollContainer.value) return;
  scrollContainer.value.addEventListener("scroll", () => onScroll());
}

function onScroll() {
  if (!scrollContainer.value) return;
  const v = {
    left: scrollContainer.value.scrollLeft,
    top: scrollContainer.value.scrollTop,
    height: scrollContainer.value.scrollHeight,
    width: scrollContainer.value.scrollWidth,
  };
  emit("scroll", v);
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
  if (!scrollContainer.value) return;
  scrollContainer.value.removeEventListener("scroll", () => onScroll());
}

function getScrollContainer() {
  return scrollContainer.value;
}

defineExpose({ getScrollContainer });
</script>

<template>
  <div
    ref="scrollContainer"
    class="m-scroll"
    :class="direction"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.m-scroll {
  overflow: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-080);
    border-radius: 16em;
  }

  &:hover {
    &::-webkit-scrollbar-track {
      background-color: var(--dark-080);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--dark);
    }
  }

  &.vertical {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
  &.horizontal {
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 5px;
    }
  }
}
</style>
