<script lang="ts" setup>
import HumanScrollVue from "./scroll/index.vue";

const props = defineProps({
  space: { type: [String, Number], default: 0 },
  radius: { type: [String, Number], default: 0 },
  borderWidth: { type: [String, Number], default: 1 },
});

const scroll = ref<InstanceType<typeof HumanScrollVue>>();
const headerValue = computed(() => {
  return Object.keys(props.colonOptions).map((key) => {
    return { [key]: { value: props.colonOptions[key].name } };
  })[0];
});

onMounted(mounted);
async function mounted() {
  addEventListener("resize", () => init());
  Sleep(10);
  init();
}

function init() {
  if (!scroll.value) return;

  const container = scroll.value.getScrollContainer();
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const oneCadres = container.querySelectorAll(".m-table-line-cadre");
  for (let i = 0; i < oneCadres.length; i++) {
    const oneCadre = oneCadres[i] as HTMLElement;
    oneCadre.style.width = `${rect.width}px`;
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
    const oneContainer = oneContainers[i];

    for (let c = 0; c < oneContainer.children.length; c++) {
      const colon = oneContainer.children[c] as HTMLElement;
      colon.style.width = `${sizes[c]}px`;
    }
  }
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
}
</script>

<template>
  <m-scroll
    ref="scroll"
    direction="horizontal"
    @scroll="onScroll"
  >
    <slot />
  </m-scroll>
</template>

<style lang="scss">
.m-table {
  padding-top: 10px;
  padding-bottom: 10px;
}

.m-table-colon {
  position: relative;
  width: max-content;
  display: flex;
  min-width: 100%;
  min-height: 58px;

  .m-table-colon-cadre {
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

  .m-table-colon-container {
    display: flex;
    width: max-content;
    border-radius: inherit;
    position: relative;

    > * {
      padding: 15px 20px;
      overflow: hidden;
      white-space: nowrap;
      line-height: 1;
      display: flex;
      align-items: center;

      .subtitle {
        opacity: 0.5;
        font-size: 80%;
      }

      &:not(:last-child) {
        border-right: solid var(--dark-085);
      }
    }
  }

  .m-table-colon-index {
    height: 100%;
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: var(--light);
  }

  &:not(.m-table-colon-header) {
    cursor: pointer;

    &:hover {
      z-index: 10;

      .m-table-colon-cadre {
        background-color: var(--dark-097);
      }
    }
  }
}
</style>
