<script lang="ts" setup>
import { ref, onMounted, onDeactivated, onBeforeUnmount } from "vue";
import MScrollVue from "../scroll/MScroll.vue";
import Sleep from "../../myle/utils/Sleep";
import { CssValue } from "../../myle/utils/Format";

const props = defineProps({
  space: { type: [String, Number], default: 0 },
  radius: { type: [String, Number], default: 0 },
  borderWidth: { type: [String, Number], default: 1 },
});

const scroll = ref<InstanceType<typeof MScrollVue>>();

onMounted(mounted);
async function mounted() {
  addEventListener("resize", () => init());
  addEventListener("m-table:new-line", () => init());
  addEventListener("m-table:new-column", () => init());
  await Sleep(10);
  init();
}

function init() {
  if (!scroll.value) return;

  const container = scroll.value.getScrollContainer();
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const oneCadres = container.querySelectorAll(".m-table-line-cadre");

  const borderWidth = CssValue({ value: props.borderWidth });
  const space = CssValue({ value: props.space });
  const radius = CssValue({ value: props.radius });

  for (let i = 0; i < oneCadres.length; i++) {
    const oneCadre = oneCadres[i] as HTMLElement;
    oneCadre.style.width = `${rect.width}px`;
    oneCadre.style.borderWidth = borderWidth.valueUnit;
    oneCadre.style.borderRadius = radius.valueUnit;

    oneCadre.style.borderTopWidth = borderWidth.valueUnit;
    if (space.value === 0 && i > 0) oneCadre.style.borderTop = "unset";
  }

  const sizes: { [key: number]: number } = {};
  const oneContainers = container.querySelectorAll(".m-table-line-container");
  for (let i = 0; i < oneContainers.length; i++) {
    const oneContainer = oneContainers[i];

    for (let c = 0; c < oneContainer.children.length; c++) {
      if (!sizes[c]) sizes[c] = 0;
      const colon = oneContainer.children[c] as HTMLElement;
      colon.style.width = "unset";

      Sleep(10);
      const w = colon.getBoundingClientRect().width;
      if (w > sizes[c]) sizes[c] = w;
    }
  }

  for (let i = 0; i < oneContainers.length; i++) {
    const oneContainer = oneContainers[i] as HTMLElement;
    oneContainer.style.borderRadius = radius.valueUnit;

    for (let c = 0; c < oneContainer.children.length; c++) {
      const colon = oneContainer.children[c] as HTMLElement;
      colon.style.width = `${sizes[c]}px`;
      colon.style.borderWidth = borderWidth.valueUnit;
    }
  }

  onScroll();
}

function onScroll() {
  if (!scroll.value) return;

  const container = scroll.value.getScrollContainer();
  if (!container) return;

  const oneCadres = container.querySelectorAll(".m-table-line-cadre");
  for (let i = 0; i < oneCadres.length; i++) {
    const oneCadre = oneCadres[i] as HTMLElement;
    oneCadre.style.left = `${container.scrollLeft}px`;
  }
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
  removeEventListener("resize", () => init());
  removeEventListener("m-table:new-line", () => init());
  removeEventListener("m-table:new-column", () => init());
}
</script>

<template>
  <m-scroll
    ref="scroll"
    direction="horizontal"
    @scroll="onScroll"
  >
    <div
      class="m-table"
      :style="{ gap: `${CssValue({ value: space }).valueUnit}` }"
    >
      <slot />
    </div>
  </m-scroll>
</template>

<style lang="scss">
.m-table {
  display: flex;
  flex-direction: column;
}
.m-table-line {
  position: relative;
  width: max-content;
  display: flex;
  min-width: 100%;
  min-height: 58px;

  .m-table-line-cadre {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: solid var(--dark-085);
    border-radius: inherit;
    z-index: 25;
    pointer-events: none;
  }

  .m-table-line-container {
    display: flex;
    width: max-content;
    border-radius: inherit;
    position: relative;

    > * {
      padding: 15px 20px;
      overflow: hidden;
      white-space: nowrap;
      display: flex;
      align-items: center;

      &:not(:last-child) {
        border-right: solid var(--dark-085);
      }
    }
  }

  &:not(.is-header) {
    cursor: pointer;

    &:hover {
      z-index: 10;

      .m-table-line-cadre {
        background-color: var(--dark-097);
      }
    }
  }
}
</style>
