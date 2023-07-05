<script lang="ts" setup>
import { ref, onMounted, PropType } from "vue";
import { PopperOptions as Opts, Popper } from "../../myle/popper";

interface PopperOptions extends Opts {
  openOnMounted?: boolean;
}

const props = defineProps({
  options: {
    type: Object as PropType<PopperOptions>,
    default: () => {
      return {};
    },
  },
});
const emit = defineEmits<{
  (e: "mounted"): void;
  (e: "destroy"): void;
  (e: "scroll"): void;
  (e: "open"): void;
  (e: "update:modelValue", value: boolean): void;
}>();
const isOpen = ref(false);
const opts = ref<PopperOptions>({});
const target = ref<HTMLElement>();
const popper = ref<Popper>();

onMounted(mounted);
function mounted() {
  setTimeout(() => {
    if (!target.value) return;

    opts.value = { ...props.options, onScroll, onDestroy };
    opts.value.target = target.value;
    opts.value.onMounted = (p) => {
      popper.value = p;

      emit("mounted");
      if (props.options.onMounted) props.options.onMounted(p);
    };

    if (props.options.type === "tooltip") {
      target.value.addEventListener("mouseenter", () => open());
    } else {
      target.value.addEventListener("click", () => open());
    }

    if (props.options.openOnMounted) open();
  }, 0);
}

function open() {
  isOpen.value = true;
}

function onScroll() {
  emit("scroll");
  if (props.options.onScroll) props.options.onScroll();
}
function onDestroy() {
  isOpen.value = false;

  emit("destroy");
  if (props.options.onDestroy) props.options.onDestroy();
}

defineExpose({ popper, open });
</script>

<template>
  <div
    ref="target"
    :class="opts.targetClass"
    class="m-popper-controller-target"
  >
    <slot name="target" />
  </div>

  <m-popup
    v-if="isOpen && opts.type === 'popup'"
    :options="opts"
    @destroy="onDestroy"
  >
    <slot />
  </m-popup>
  <m-modal
    v-else-if="isOpen"
    :options="opts"
    @close="onDestroy"
    @destroy="onDestroy"
  >
    <slot />
  </m-modal>
</template>

<style lang="scss" scoped>
.m-popper-controller-target {
  display: inline-block;
}
</style>
