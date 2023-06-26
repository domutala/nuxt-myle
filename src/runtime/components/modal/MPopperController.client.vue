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
const open = ref(false);
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

    if (props.options.openOnMounted) open.value = true;
  }, 0);
}

function onScroll() {
  emit("scroll");
  if (props.options.onScroll) props.options.onScroll();
}
function onDestroy() {
  open.value = false;

  emit("destroy");
  if (props.options.onDestroy) props.options.onDestroy();
}

defineExpose({ popper });
</script>

<template>
  <span
    ref="target"
    :class="opts.targetClass"
    @click="open = true"
  >
    <slot name="target" />
  </span>

  <m-popup
    v-if="open && opts.type === 'popup'"
    :options="opts"
    @destroy="onDestroy"
  >
    <slot />
  </m-popup>
  <m-modal
    v-else-if="open"
    :options="opts"
    @close="onDestroy"
    @destroy="onDestroy"
  >
    <slot />
  </m-modal>
</template>
