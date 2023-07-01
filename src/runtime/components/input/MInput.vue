<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi";
import { ref, onMounted, watch } from "vue";

const input = ref<HTMLInputElement | undefined>();
const isFocus = ref(false);
const value = ref();

const props = defineProps({
  modelValue: {
    default: () => null,
    type: [
      Object,
      Array,
      String,
      Number,
      undefined,
      null,
      Boolean,
    ] as PropType<any>,
  },
  labelPlaceholder: { default: "", type: String },
  placeholder: { default: "", type: String },
  autocomplete: { default: "", type: String },
  disabled: { default: false, type: Boolean },
  success: { default: false, type: Boolean },
  danger: { default: false, type: Boolean },
  fill: { default: false, type: Boolean },
  required: { default: false, type: Boolean },
  autofocus: { default: false, type: Boolean },
  type: { default: "text", type: String },
  borderWidth: { default: "2px", type: [String, Number] },
  borderRadius: { default: "0.6em", type: [String, Number] },
});

const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();

onMounted(() => {
  setTimeout(() => {
    value.value = props.modelValue;
    if (!props.autofocus) return;
    if (!input.value) return;
    input.value.focus();
  }, 50);
});

function onInput() {
  value.value = input.value?.value;
  emit("update:modelValue", input.value?.value);
}

watch(() => props.modelValue, onModelValue);
function onModelValue() {
  value.value = props.modelValue;
}

function focus() {
  if (!input.value) return;
  setTimeout(input.value?.focus, 10);
}

defineExpose({ focus });
</script>

<template>
  <div class="input">
    <div
      class="--container"
      :class="{
        disabled,
        success,
        danger,
        focus: isFocus,
        fill,
      }"
      :style="{
        borderWidth: `${borderWidth}${
          typeof borderWidth === 'number' ? 'px' : ''
        }`,
        borderRadius: `${borderRadius}${
          typeof borderRadius === 'number' ? 'px' : ''
        }`,
      }"
    >
      <div class="--in">
        <slot name="before" />

        <div class="--content">
          <div
            class="--placeholder"
            :class="{
              '--topper': value,
              '--to-textarea': type === 'textarea',
            }"
          >
            {{ labelPlaceholder }}
          </div>
          <input
            v-if="type !== 'textarea'"
            ref="input"
            class="--input"
            :value="value"
            :type="type"
            :disabled="disabled"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            v-bind="$attrs"
            @input="onInput"
            @focus="isFocus = true"
            @blur="isFocus = false"
          />
        </div>

        <slot name="after" />
      </div>

      <div
        v-if="type === 'textarea'"
        class="--textarea"
      >
        <textarea
          ref="input"
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :required="required"
          v-bind="$attrs"
          @input="onInput"
          @focus="isFocus = true"
          @blur="isFocus = false"
        >
          {{ value }}
        </textarea>
        <slot name="textarea" />
      </div>
    </div>
    <slot name="info" />
  </div>
</template>

<style lang="scss">
.input {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;

  + .input {
    margin-top: 8px;
  }

  > .--container {
    width: 100%;
    border: 0 solid var(--dark-080);
    padding: 2px 15px;
    // border-radius: 0.6em;
    transition: all 0.25s ease;

    &.fill {
      background-color: var(--light);
    }

    > .--in {
      gap: 15px;
      display: flex;
      align-items: center;

      .--content {
        position: relative;
        width: 100%;

        .--placeholder {
          position: absolute;
          left: 0;
          width: 100%;
          opacity: 0.3;
          transition: all 0.25s ease;
          top: 50%;
          transform: translateY(-50%);
          user-select: none;

          &.--topper:not(.--to-textarea) {
            top: 5px;
            transform: translateY(0);
            font-size: 12px;
          }

          &.--to-textarea {
            width: 100%;
            padding: 0;
            border: 0;
            padding-top: 18px;
            padding-bottom: 18px;
            position: relative;
            background-color: transparent;
            transform: unset;
          }
        }

        .--input {
          width: 100%;
          outline: none;
          padding: 0;
          border: 0;
          padding-top: 18px;
          padding-bottom: 18px;
          position: relative;
          background-color: transparent;
          font: inherit;
        }
      }
    }

    > .--textarea {
      margin-bottom: 10px;

      textarea {
        width: 100% !important;
        max-width: 100%;
        min-width: 100%;
        max-height: 100%;
        height: 200px;
        min-height: 200px;
        border: 0;
        font: inherit;
        outline: none;
        padding: 0;
      }
    }

    &.focus {
      border-color: var(--dark-060-color);
    }

    &.disabled {
      opacity: 0.3;
    }

    &.success {
      border-color: var(--success-050-color);
    }

    &.danger {
      border-color: var(--danger-050-color);
    }
  }

  > .--info {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-size: 12px;

    &.success {
      color: var(--success);
    }

    &.danger {
      color: var(--danger);
    }
  }
}
</style>
