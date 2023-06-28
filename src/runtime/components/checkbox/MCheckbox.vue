<script lang="ts" setup>
import { computed, ref, watch, onMounted, type PropType } from "vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<Boolean | Array<any>>,
    default: null,
  },
  value: { type: Object as PropType<any> },

  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },

  size: { default: "32px", type: [String, Number] },
  width: { type: [String, Number] },
  height: { type: [String, Number] },

  radius: { default: true, type: [Boolean, String, Number] },
  border: { default: true, type: [Boolean, Number, String] },
  disabled: { default: false, type: Boolean },
});
const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();
const isChecked = ref(false);
const checkbox = ref<HTMLLabelElement>();

const handleChange = () => {
  isChecked.value = !isChecked.value;
};

watch(() => isChecked.value, onIsChecked);
function onIsChecked() {
  if (Array.isArray(props.modelValue)) {
    const i = props.modelValue.indexOf(props.value);
    if (i === -1) {
      if (props.modelValue.includes(props.value)) {
        emit("update:modelValue", [...props.modelValue, props.value]);
      }
    } else {
      const updatedValue = [...props.modelValue];
      updatedValue.splice(i, 1);
      emit("update:modelValue", updatedValue);
    }
  } else emit("update:modelValue", isChecked.value);
}

onMounted(onValue);
watch(() => props.modelValue, onValue, { deep: true });
function onValue() {
  if (Array.isArray(props.modelValue)) {
    const i = props.modelValue.indexOf(props.value);
    if (i === -1) isChecked.value = false;
    else isChecked.value = true;
  } else isChecked.value = !!props.modelValue;
}

const typeColor = computed(() => {
  return props.dark
    ? "dark"
    : props.light
    ? "light"
    : props.danger
    ? "danger"
    : props.info
    ? "info"
    : props.success
    ? "success"
    : "primary";
});

const style = computed(() => {
  const style: { [key: string]: string | undefined } = {};

  const size = props.height || props.size;
  if (size) {
    if (typeof size === "number") style.width = style.height = `${size}px`;
    else style.width = style.height = size;
  }

  if (props.height) {
    style.height =
      typeof props.height === "number" ? `${props.height}px` : props.height;
  }

  style.borderRadius =
    props.radius === true
      ? ".3em"
      : props.radius === "number"
      ? `${props.radius}px`
      : typeof props.radius === "string"
      ? props.radius
      : undefined;

  return style;
});

watch(
  () => style.value,
  () => {
    console.log(checkbox.value);

    if (!checkbox.value) return;

    const rect = checkbox.value.getBoundingClientRect();
    checkbox.value.style.width = `${rect.height * 1.5}px`;
  },
  { deep: true }
);

const styleBorder = computed(() => {
  const style: { [key: string]: string } = {};
  const border =
    props.border === true
      ? "1px"
      : props.border === "number"
      ? `${props.border}px`
      : typeof props.border === "string"
      ? props.border
      : undefined;
  if (border) style.borderWidth = border;

  return style;
});
</script>

<template>
  <label
    ref="checkbox"
    class="checkbox"
    :style="style"
    :class="[typeColor, { active: isChecked }]"
  >
    <div
      class="checkbox-background"
      :style="{
        opacity: isChecked ? 1 : 0.1,
      }"
    >
      <input
        type="checkbox"
        :checked="isChecked"
        @change="handleChange"
      />
    </div>
    <div
      class="checkbox-boder"
      :style="styleBorder"
    ></div>
    <div class="checkbox-hover"></div>

    <div class="checkbox-content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 511.985 511.985"
        xml:space="preserve"
      >
        <g>
          <path
            d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
          ></path>
        </g>
      </svg>
    </div>
  </label>
</template>

<style lang="scss" scoped>
$colors: (
  "danger" #fff,
  "info" #000,
  "success" #fff,
  "primary" #000,
  "dark" var(--light),
  "light" var(--dark)
);

.checkbox {
  position: relative;
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  color: var(--dark);

  input {
    width: 0;
    height: 0;
    border: 0;
    outline: none;
  }

  .checkbox-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .checkbox-boder {
    position: absolute;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: inherit;
    border-color: #00000033;
    top: 0;
    left: 0;
  }
  .checkbox-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.1;
    border-radius: inherit;
  }
  .checkbox-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    white-space: nowrap;
    position: relative;

    svg {
      height: 50%;
      width: 50%;
      display: block;
    }
  }

  &:not(:hover) {
    .checkbox-hover {
      opacity: 0;
    }
  }

  @for $i from 1 through length($colors) {
    $color-name: nth(nth($colors, $i), 1);
    $color-value: nth(nth($colors, $i), 2);

    &.#{$color-name} {
      .checkbox-background {
        background-color: var(--#{$color-name});
      }
      .checkbox-border {
        border-color: var(--#{$color-name});
      }
      // .checkbox-hover {
      //   background-color: $color-value-flat;
      // }

      &.active {
        color: $color-value;
      }
    }
  }
}
</style>
