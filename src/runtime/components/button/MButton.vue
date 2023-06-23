<script setup lang="ts">
import { computed, onMounted, type PropType } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = defineProps({
  tag: {
    default: "button",
    type: String as PropType<"a" | "button" | "div" | "router-link">,
  },
  to: { type: Object as PropType<RouteLocationRaw> },
  primary: { default: true, type: Boolean },
  danger: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  info: { default: false, type: Boolean },
  dark: { default: false, type: Boolean },
  light: { default: false, type: Boolean },

  flat: { default: false, type: [Boolean, Number] },
  transparent: { default: false, type: Boolean },
  block: { default: false, type: Boolean },
  textAlign: {
    default: "center",
    type: String as PropType<"left" | "right" | "center">,
  },

  borderWidth: { default: 3, type: [Number, String] },

  lg: { default: false, type: Boolean },
  sm: { default: false, type: Boolean },

  square: { default: false, type: Boolean },
  round: { default: "16em", type: [Boolean, String, Number] },
  icon: { default: false, type: Boolean },
  border: { default: false, type: Boolean },
  disabled: { default: false, type: Boolean },
  type: { default: "button", type: String },
});

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

onMounted(() => {});
</script>

<template>
  <component
    :is="tag"
    :to="to"
    class="button"
    :class="[
      typeColor,
      `button-text-align-${textAlign}`,
      { square, border, flat, icon, lg, sm, transparent, block },
    ]"
    :type="props.type as 'button'"
    :style="{
      borderRadius:
        round === false
          ? '0'
          : typeof round === 'boolean'
          ? '0.6em'
          : typeof round === 'number'
          ? `${round}px`
          : round,
    }"
    :disabled="disabled"
  >
    <div
      class="button-background"
      :style="{
        opacity: typeof flat === 'boolean' ? 0.3 : flat ? flat : 'unset',
      }"
    ></div>
    <div
      v-if="border"
      class="button-border"
      :style="{
        opacity: typeof flat === 'boolean' ? 0.3 : flat ? flat : 'unset',
        borderWidth:
          typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth,
      }"
    ></div>
    <div class="button-hover"></div>
    <div class="button-content">
      <slot />
    </div>
  </component>
</template>

<style lang="scss">
$colors: (
  "danger" #fff #000 #000,
  "info" #000 #000 #000,
  "success" #fff #000 #000,
  "primary" #000 #000 #000,
  "dark" var(--light) var(--dark) var(--light),
  "light" var(--dark) var(--dark) var(--dark)
);

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

  svg {
    width: 28px;
    height: 28px;
  }

  > * {
    position: relative;
    border-radius: inherit;
  }

  .button-background {
    background-color: var(--primary);
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
    border: 3px solid #00000033;
  }

  .button-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.1;
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

  &:not(:hover) {
    .button-hover {
      opacity: 0;
    }
  }

  @for $i from 1 through length($colors) {
    $color-name: nth(nth($colors, $i), 1);
    $color-value: nth(nth($colors, $i), 2);
    $color-value-flat: nth(nth($colors, $i), 3);
    $color-value-hover: nth(nth($colors, $i), 4);

    &.#{$color-name} {
      color: $color-value;

      .button-background {
        background-color: var(--#{$color-name});
      }
      .button-border {
        border-color: var(--#{$color-name});
      }
      .button-hover {
        background-color: $color-value-flat;
      }

      &.flat {
        color: $color-value-flat;
      }

      &.transparent {
        color: var(--#{$color-name});

        .button-hover {
          background-color: var(--#{$color-name});
        }
      }
    }
  }

  &.flat {
    .button-background,
    .button-border {
      opacity: 0.3;
    }
  }

  &.transparent {
    .button-background {
      opacity: 0;
    }
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

  &:not(.border) {
    .button-border {
      opacity: 0;
    }
  }

  &.square {
    border-radius: 0;
  }

  &.round {
    border-radius: 0.6em;
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
