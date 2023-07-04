<script setup lang="ts">
import { computed, onMounted, type PropType, ref, watch } from "vue";
import type { RouteLocationRaw } from "vue-router";
import {
  GetContrastTextColor,
  GetVarColor,
  BlendColor,
} from "../../../runtime/myle/utils/Color";

const button = ref<HTMLButtonElement>();

const props = defineProps({
  tag: {
    default: "button",
    type: String as PropType<"a" | "button" | "div" | "router-link">,
  },
  to: { type: Object as PropType<RouteLocationRaw> },

  /** THEME */
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
  primary: { default: false, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },
  /** THEME */

  flat: { default: false, type: [Boolean, Number] },
  transparent: { default: false, type: Boolean },
  block: { default: false, type: Boolean },
  textAlign: {
    default: "center",
    type: String as PropType<"left" | "right" | "center">,
  },

  /** @deprecated */ border: { type: [Boolean, Number, String] },
  borderWidth: { default: false, type: [Boolean, Number, String] },

  /** radius */
  /** @deprecated */ round: { type: [Boolean, String, Number] },
  borderRadius: { default: "16em", type: [Boolean, String, Number] },

  /** SIZE */
  lg: { default: false, type: Boolean },
  sm: { default: false, type: Boolean },
  /** SIZE */

  elevate: { default: false, type: Boolean },
  icon: { default: false, type: Boolean },
  disabled: { default: false, type: Boolean },
  type: { default: "button", type: String },
});

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
    : "primary";

  return props.theme || typeColor;
});

onMounted(mounted);
function mounted() {
  buildColor();
}

watch(() => props.flat, buildColor);
watch(() => typeColor.value, buildColor);
function buildColor() {
  setTimeout(() => {
    if (button.value) {
      const bgElement = button.value.querySelector(
        ".button-background"
      ) as HTMLButtonElement;

      if (
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(typeColor.value) ||
        /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,(\d(\.\d+)?))?\)$/.test(
          typeColor.value.replace(/\s/g, "")
        )
      ) {
        button.value.style.setProperty("--button-theme", typeColor.value);
      } else {
        button.value.style.setProperty(
          "--button-theme",
          `var(--${typeColor.value})`
        );
      }
      let color = GetVarColor(document.body, "var(--primary)") as string;

      const varColor = button.value.style.getPropertyValue("--button-theme");
      color = GetVarColor(button.value, varColor) || color;
      color = BlendColor(color, bgElement?.style.getPropertyValue("opacity"));

      const textColor = GetContrastTextColor(color) === 1 ? "black" : "white";
      button.value.style.setProperty("--button-text-color", textColor);

      const bdElement = button.value.querySelector(
        ".button-hover"
      ) as HTMLButtonElement;
      if (bdElement) {
        bdElement.style.backgroundColor =
          GetContrastTextColor(color) === 1 ? "black" : "white";
      }
    }
  }, 10);
}

const styles = computed(() => {
  const styles: { [key: string]: string } = {};
  const round = props.round || props.borderRadius;
  styles.borderRadius =
    round === false
      ? "0"
      : round === true
      ? "0.6em"
      : typeof round === "number"
      ? `${round}px`
      : round;

  return styles;
});

const bgStyles = computed(() => {
  const styles: { [key: string]: string } = {};
  styles.opacity = props.transparent
    ? "0"
    : props.flat === true
    ? "0.1"
    : typeof props.flat === "number"
    ? `${props.flat}`
    : "unset";

  return styles;
});

const broderStyles = computed(() => {
  const styles: { [key: string]: string } = {};

  const border = props.border || props.borderWidth;
  styles.borderWidth =
    border === true
      ? "3px"
      : border === false
      ? "0"
      : typeof border === "number"
      ? `${border}px`
      : border;

  styles.opacity =
    props.flat === true
      ? "0.1"
      : typeof props.flat === "number"
      ? `${props.flat}`
      : "unset";

  return styles;
});

onMounted(() => {});
</script>

<template>
  <component
    :is="tag"
    ref="button"
    :to="to"
    class="button"
    :class="[
      typeColor,
      `button-text-align-${textAlign}`,
      { flat, icon, elevate, lg, sm, transparent, block },
    ]"
    :type="props.type as 'button'"
    :style="styles"
    :disabled="disabled"
  >
    <div
      class="button-background"
      :style="bgStyles"
    ></div>
    <div
      class="button-border"
      :style="broderStyles"
    ></div>
    <div class="button-hover"></div>
    <div class="button-content">
      <slot />
    </div>
  </component>
</template>

<style lang="scss">
.button {
  position: relative;
  background-color: transparent;
  outline: none;
  border-radius: 16em;
  font-weight: bold;
  font-size: 15px;
  padding: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  transition: all 0.5s ease;

  svg {
    width: 28px;
    height: 28px;
  }

  > * {
    position: relative;
    border-radius: inherit;
  }

  .button-background {
    background-color: unset;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .button-border {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-color: #00000033;
    border-style: solid;
  }

  .button-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.08;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    white-space: nowrap;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 42px;
    min-width: 42px;
  }

  &.elevate {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  &:not(:hover) {
    .button-hover {
      opacity: 0;
    }
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  --button-theme: var(--primary);
  --button-text-color: var(--dark);

  color: var(--button-text-color);

  .button-background {
    background-color: var(--button-theme);
  }
  .button-border {
    border-color: var(--button-theme);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    .button-hover {
      display: none;
    }
  }

  &.block {
    display: flex;
    width: 100%;

    .button-content {
      width: 100%;
    }
  }

  &.button-text-align-center {
    .button-content {
      justify-content: center;
    }
  }
  &.button-text-align-left {
    .button-content {
      justify-content: flex-start;
    }
  }
  &.button-text-align-right {
    .button-content {
      justify-content: flex-end;
    }
  }

  &.icon {
    .button-content {
      padding: 0;
      height: 42px;
      width: 42px;
    }
  }

  &.sm {
    svg {
      width: 18px;
      height: 18px;
    }

    .button-content {
      gap: 3px;
      padding-left: 8px;
      padding-right: 8px;
      min-height: 28px;
      min-width: 28px;
      font-size: 12px;
    }

    &.icon {
      .button-content {
        height: 28px;
        width: 28px;
      }
    }
  }
}
</style>
