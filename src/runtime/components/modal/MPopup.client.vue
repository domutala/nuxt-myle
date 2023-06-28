<script lang="ts" setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  onDeactivated,
  PropType,
  watch,
} from "vue";
import { Popper, PopperOptions, popper } from "../../myle/popper";
import { Sleep } from "../../myle/utils";

const props = defineProps({
  options: { type: Object as PropType<PopperOptions>, default: () => {} },
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits<{
  (e: "close"): void;
  (e: "destroy"): void;
  (e: "open"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

const content = ref<HTMLElement>();
const poppup = ref<Popper>();

onMounted(mounted);
function mounted() {
  setTimeout(() => {
    if (!content.value) return;

    const options = props.options || {};
    options.width ||= 410;

    poppup.value = popper(content.value, {
      ...options,
      onDestroy: destroyed,
      type: "popup",
    });
  }, 10);
}

function destroyed() {
  emit("update:modelValue", false);
  emit("close");
  emit("destroy");
}

onBeforeUnmount(destroy);
onDeactivated(destroy);
watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue) destroy();
  }
);
async function destroy() {
  await Sleep(500);
  poppup.value?.destroy();
}

defineExpose({ destroy });
</script>

<template>
  <div
    ref="content"
    class="popper"
  >
    <div><slot /></div>
  </div>
</template>
