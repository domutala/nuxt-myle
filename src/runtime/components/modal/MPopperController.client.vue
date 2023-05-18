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
const open = ref(false);
const opts = ref<PopperOptions>({});
const target = ref<HTMLElement>();
const popper = ref<Popper>();

onMounted(mounted);
function mounted() {
  setTimeout(() => {
    if (!target.value) return;

    opts.value = props.options;
    opts.value.target = target.value;
    opts.value.onMounted = (p) => {
      popper.value = p;
    };

    if (props.options.openOnMounted) open.value = true;
  }, 0);
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
    @close="open = false"
  >
    <slot />
  </m-popup>
  <m-modal
    v-else-if="open"
    :options="opts"
    @close="open = false"
  >
    <slot />
  </m-modal>
</template>
