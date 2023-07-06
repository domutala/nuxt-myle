<script lang="ts" setup>
import { computed, ref, watch, onMounted, type PropType } from "vue";
import { CssValue } from "../../myle/utils/Format";
import {
  GetContrastTextColor,
  GetVarColor,
  BlendColor,
} from "../../../runtime/myle/utils/Color";

const props = defineProps({
  modelValue: {
    type: [
      Number,
      Boolean,
      String,
      Array,
      Object,
      undefined,
      null,
    ] as PropType<any>,
    default: null,
  },
  value: {
    type: [Number, Boolean, String, Array, Object] as PropType<any>,
  },
  trueValue: {
    type: [
      Number,
      Boolean,
      String,
      Array,
      Object,
      undefined,
      null,
    ] as PropType<any>,
    default: true,
  },
  falseValue: {
    type: [
      Number,
      Boolean,
      String,
      Array,
      Object,
      undefined,
      null,
    ] as PropType<any>,
    default: true,
  },

  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },
  theme: {
    type: String as PropType<
      "dark" | "light" | "danger" | "info" | "success" | "primary" | string
    >,
    validator(value: string) {
      if (value === undefined) return true;

      if (
        ["dark", "light", "danger", "info", "success", "primary"].includes(
          value
        )
      ) {
        return true;
      } else if (
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value) ||
        /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,(\d(\.\d+)?))?\)$/.test(
          value.replace(/\s/g, "")
        )
      ) {
        return true;
      }
      return false;
    },
  },

  size: { default: "24px", type: [String, Number] },
  borderRadius: { default: "0.3em", type: [String, Number] },
  border: { default: "0", type: [Number, String] },
  disabled: { default: false, type: Boolean },
  readonly: { default: false, type: Boolean },
  isSwitcher: { default: false, type: Boolean },
  showBack: { default: true, type: Boolean },
});

const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();
const isChecked = ref(false);
const checkbox = ref<HTMLLabelElement>();
const before = ref<HTMLDivElement>();

const typeColor = computed(() => {
  const typeColor = props.dark
    ? "dark"
    : props.light
    ? "light"
    : props.danger
    ? "danger"
    : props.info
    ? "info"
    : props.success
    ? "success"
    : "dark";

  return props.theme || typeColor;
});

onMounted(buildColor);
watch(() => typeColor.value, buildColor);
watch(() => isChecked.value, buildColor);
function buildColor() {
  setTimeout(() => {
    if (checkbox.value) {
      if (
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(typeColor.value) ||
        /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,(\d(\.\d+)?))?\)$/.test(
          typeColor.value.replace(/\s/g, "")
        )
      ) {
        checkbox.value.style.setProperty("--theme-color", typeColor.value);
      } else {
        checkbox.value.style.setProperty(
          "--theme-color",
          `var(--${typeColor.value})`
        );
      }
      let color = GetVarColor(document.body, "var(--primary)") as string;
      const varColor = checkbox.value.style.getPropertyValue("--theme-color");
      color = GetVarColor(checkbox.value, varColor) || color;
      color = BlendColor(color, isChecked.value ? 1 : 0);

      const textColor = GetContrastTextColor(color) === 1 ? "black" : "white";
      checkbox.value.style.setProperty("--theme-text-color", textColor);

      if (before.value) {
        if (isChecked.value) {
          before.value.style.backgroundColor =
            color === "rgb(255, 255, 255)" ? "black" : "white";
        } else before.value.style.backgroundColor = "var(--theme-color)";
      }

      const hoverColor = GetContrastTextColor(color) === 1 ? "black" : "white";
      checkbox.value.style.setProperty("--theme-hover-color", hoverColor);
    }
  }, 10);
}

function onIsChecked() {
  if (Array.isArray(props.modelValue)) {
    const i = props.modelValue.indexOf(props.value);

    if (i === -1) {
      emit("update:modelValue", [...props.modelValue, props.value]);
    } else {
      const updatedValue = [...props.modelValue];
      updatedValue.splice(i, 1);
      emit("update:modelValue", updatedValue);
    }
  } else {
    emit(
      "update:modelValue",
      isChecked.value ? props.trueValue : props.falseValue
    );
  }
}

onMounted(onValue);
watch(() => props.modelValue, onValue, { deep: true });
function onValue() {
  if (Array.isArray(props.modelValue)) {
    const is = props.modelValue.filter((v) => v === props.value).length > 0;
    if (!is) isChecked.value = false;
    else isChecked.value = true;
  } else isChecked.value = props.modelValue === props.trueValue;
}

const nSize = computed(() => CssValue({ value: props.size }));

const style = computed(() => {
  const style: { [key: string]: string | undefined } = {};

  style.width = style.height = `${nSize.value.value}${nSize.value.unit}`;
  if (props.isSwitcher) {
    style.width = `${nSize.value.value * 1.4}${nSize.value.unit}`;
  }

  const bdrs = CssValue({ value: props.borderRadius });
  style.borderRadius = `${bdrs.value}${bdrs.unit}`;

  return style;
});

const styleBorder = computed(() => {
  const style: { [key: string]: string } = {};
  const bd = CssValue({ value: props.border });
  style.borderWidth = bd.valueUnit;

  return style;
});

const handleChange = () => {
  isChecked.value = !isChecked.value;
  onIsChecked();
};
</script>

<template>
  <label
    class="checkbox-container"
    :class="{ readonly, disabled }"
  >
    <div
      ref="checkbox"
      class="checkbox"
      :style="style"
      :class="[typeColor, { active: isChecked }]"
    >
      <div
        v-if="showBack"
        class="checkbox-back"
      ></div>

      <div
        class="checkbox-background"
        :style="{ opacity: isChecked ? 1 : 0 }"
      >
        <input
          type="checkbox"
          :checked="isChecked"
          :disabled="readonly || disabled"
          @change="handleChange"
        />
      </div>
      <div
        class="checkbox-boder"
        :style="styleBorder"
      ></div>
      <div class="checkbox-hover"></div>

      <div
        class="checkbox-content"
        :style="{
          width: nSize.valueUnit,
          height: nSize.valueUnit,
          marginLeft: isChecked ? `calc(100% - ${nSize.valueUnit})` : '0%',
        }"
      >
        <div
          v-if="isSwitcher"
          ref="before"
          class="checkbox-content-before"
        ></div>
        <svg
          v-if="isChecked"
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
    </div>

    <slot />
  </label>
</template>

<style lang="scss" scoped>
.checkbox-container {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  user-select: none;

  &:not(.disabled),
  &:not(.readonly) {
    cursor: pointer;
  }

  &.disabled {
    opacity: 0.5;
  }
}
.checkbox {
  position: relative;
  align-items: center;
  display: inline-flex;
  color: var(--dark);

  input {
    width: 0;
    height: 0;
    border: 0;
    outline: none;
  }

  .checkbox-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0.1;
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
    white-space: nowrap;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.25s ease;

    .checkbox-content-before {
      position: absolute;
      width: 80%;
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: inherit;
    }

    svg {
      height: 50%;
      width: 50%;
      max-width: 8px;
      max-height: 8px;
      display: block;
      position: relative;
    }
  }

  &:not(:hover) {
    .checkbox-hover {
      opacity: 0;
    }
  }

  --theme-color: var(--dark);
  --theme-text-color: var(--light);
  --theme-hover-color: var(--dark);

  .checkbox-back,
  .checkbox-background {
    background-color: var(--theme-color);
  }
  .checkbox-border {
    border-color: var(--theme-color);
  }
  .checkbox-hover {
    background-color: var(--theme-hover-color);
  }
}
</style>
