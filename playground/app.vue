<script lang="ts" setup>
import { ref } from "vue";
import MPopperControllerClient from "../src/runtime/components/modal/MPopperController.client.vue";
import "../src/runtime/myle/style/myle.scss";

const value = ref("");
const isChecked = ref(["false", "true"]);
const controller1 = ref<InstanceType<typeof MPopperControllerClient>>();

function close() {
  console.log(controller1.value);

  controller1.value?.popper?.destroy();
}
</script>

<template>
  <div style="width: 100%; height: 100%; position: fixed; overflow: auto">
    <div class="container py-20">
      <div class="play-card-one p-20 my-20 radius-10">
        <div class="play-card-header">
          <div class="groove bg-dark-095 radius-10"></div>
        </div>
        <div class="d-flex fd-column gap-10">
          <div class="fw-900 fz-22">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis in
            dolorem, eveniet,
          </div>

          <div class="opacity-050">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            accusamus ut eligendi libero, fuga temporibus minus ab et harum
            pariatur esse alias voluptates possimus repellat rem repellendus
            earum, quidem officiis.
          </div>

          <div class="d-flex ai-center gap-10">
            <div class="w-36 h-36 bg-dark-095 radius-100"></div>
            <div>
              <div class="fz-14 fw-700">Lorem ipsum, dolor sit</div>
              <div class="fz-12 opacity-050">Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>

      <m-checkbox
        border-radius="16em"
        is-switcher
        class="px-15 py-12 bg-dark-095 bg-hover-dark-090 radius-10"
      >
        <div class="fw-900">Nuxt module playground!</div>
      </m-checkbox>
      {{ isChecked }}

      Nuxt module playground!

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse
        nam quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet cons
      </div>

      <div class="d-flex p-15 gap-10">
        <m-popper-controller
          :options="{
            type: 'tooltip',
            width: 'unset',
            maxWidth: 200,
            alignment: { centered: true },
            borderRadius: '16em',
          }"
        >
          <template #target>
            <m-popper-controller
              ref="controller1"
              :options="{ type: 'popup', alignment: {} }"
            >
              <template #target>
                <m-button
                  danger
                  border-width="3px"
                  flat
                  icon
                >
                  <i class="fi fi-ss-settings"></i>
                </m-button>
              </template>
              <button @click="close">close</button>

              <div class="d-flex ai-center fd-column gap-5 p-5">
                <m-checkbox
                  v-model:model-value="isChecked"
                  value="true"
                  border-radius="16em"
                  is-switcher
                  class="px-15 py-12 bg-dark-095 bg-hover-dark-090 radius-10 w-100p"
                >
                  <div class="fw-900">Nuxt module playground!</div>
                </m-checkbox>
                <m-checkbox
                  v-model:model-value="isChecked"
                  value="false"
                  border-radius="16em"
                  is-switcher
                  class="px-15 py-12 bg-dark-095 bg-hover-dark-090 radius-10 w-100p"
                >
                  <div class="fw-900">Nuxt module playground!</div>
                </m-checkbox>
              </div>
            </m-popper-controller>
          </template>

          <div class="px-10 py-5 text-center bg-dark-020 color-light fz-10">
            Settings
          </div>
        </m-popper-controller>

        <m-popper-controller
          :options="{
            type: 'tooltip',
            width: 'unset',
            maxWidth: 200,
            alignment: { main: 'top', centered: true },
            borderRadius: '16em',
          }"
        >
          <template #target>
            <m-button
              danger
              border-width="3px"
              flat
              theme="#f79514"
            >
              *** tooltip ***
            </m-button>
          </template>
          <div class="px-10 py-5 text-center bg-dark-020 color-light fz-10">
            Lorem ipsum dolor
          </div>
        </m-popper-controller>

        <m-popper-controller
          :options="{
            type: 'popup',
            targetClass: 'ml-auto',
            alignment: { centered: true },
          }"
        >
          <template #target>
            <m-button
              danger
              border-width="3px"
              flat
            >
              *** popup right ***
            </m-button>
          </template>
          <div class="p-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
            impedit quam reiciendis maxime? Magni nihil aspernatur mollitia
            perferendis soluta? Est omnis libero dolores similique sapiente.
            Sapiente cupiditate officia ipsum.

            <m-popper-controller
              :options="{
                type: 'tooltip',
                width: 'unset',
                maxWidth: 400,
                alignment: { centered: true },
                paddingClose: 15,
              }"
            >
              <template #target>
                <m-button
                  danger
                  border-width="3px"
                  flat
                  theme="#f79514"
                >
                  *** tooltip on ***
                </m-button>
              </template>
              <div class="p-20 bg-dark color-light text-center">
                <div class="fz-24 fw-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </div>

                <div
                  class="w-100 h-3 bg-light-050 mx-auto my-15 radius-50"
                ></div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  quidem consectetur suscipit maiores debitis quasi dicta esse
                  odit aperiam cumque error voluptatem numquam, ex natus
                  incidunt harum ducimus. Atque, voluptatum.

                  <div class="d-flex ai-center fd-column gap-5 p-5">
                    <m-checkbox
                      v-model:model-value="isChecked"
                      value="hello"
                      border-radius="16em"
                      is-switcher
                      class="px-15 py-12 bg-light-095 bg-hover-light-090 radius-10 w-100p"
                      theme="#f79514"
                    >
                      <div class="fw-900">Nuxt module playground!</div>
                    </m-checkbox>
                    <m-checkbox
                      v-model:model-value="isChecked"
                      value="hi"
                      border-radius="16em"
                      is-switcher
                      class="px-15 py-12 bg-light-095 bg-hover-light-090 radius-10 w-100p"
                      theme="#f79514"
                    >
                      <div class="fw-900">Nuxt module playground!</div>
                    </m-checkbox>
                  </div>
                </div>
              </div>
            </m-popper-controller>
          </div>
        </m-popper-controller>
      </div>

      <m-input
        type="textarea"
        label-placeholder="Lorem ipsum dolor sit amet consectetur"
      />

      <m-input
        v-model:model-value="value"
        label-placeholder="Lorem ipsum dolor sit amet consectetur"
        class="mt-5"
      >
        <template #before>
          <m-icon
            name="icon"
            class-name="w-36 h-36"
          />
        </template>
      </m-input>

      <div id="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic
        autem et inventore, ut consequatur labore est velit maiores fugiat. Modi
        deleniti iure alias voluptas magni perspiciatis dolore nesciunt
        obcaecati!
      </div>

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse
        nam quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
        quaerat culpa provident, vel obcaecati in aspernatur animi laborum
        accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
        ipsum dolor sit, amet cons
      </div>

      <m-popper-controller :options="{ width: '90vh' }">
        <template #target> <button>*********************</button></template>
        <div class="p-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          esse nam quaerat culpa provident, vel obcaecati in aspernatur animi
          laborum accusantium quas fugiat maxime non ratione id atque? Quas,
          quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam quaerat culpa provident, vel obcaecati in aspernatur
          animi laborum accusantium quas fugiat maxime non ratione id atque?
          Quas, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente esse nam

          <m-popper-controller
            :options="{ type: 'popup', targetClass: 'my-20' }"
          >
            <template #target>
              <m-button>*** popup ***</m-button>
            </template>
            <div class="p-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              veniam impedit quam reiciendis maxime? Magni nihil aspernatur
              mollitia perferendis soluta? Est omnis libero dolores similique
              sapiente. Sapiente cupiditate officia ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Error id dolorum nostrum
              expedita vero dicta. Obcaecati, iusto voluptatibus exercitationem
              fuga, odit illum voluptates nostrum nihil totam molestiae vel,
              laudantium quam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error id dolorum nostrum expedita vero dicta.
              Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
              voluptates nostrum nihil totam molestiae vel, laudantium quam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id
              dolorum nostrum expedita vero dicta. Obcaecati, iusto voluptatibus
              exercitationem fuga, odit illum voluptates nostrum nihil totam
              molestiae vel, laudantium quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error id dolorum nostrum expedita
              vero dicta. Obcaecati, iusto voluptatibus exercitationem fuga,
              odit illum voluptates nostrum nihil totam molestiae vel,
              laudantium quam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error id dolorum nostrum expedita vero dicta.
              Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
              voluptates nostrum nihil totam molestiae vel, laudantium quam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id
              dolorum nostrum expedita vero dicta. Obcaecati, iusto voluptatibus
              exercitationem fuga, odit illum voluptates nostrum nihil totam
              molestiae vel, laudantium quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error id dolorum nostrum expedita
              vero dicta. Obcaecati, iusto voluptatibus exercitationem fuga,
              odit illum voluptates nostrum nihil totam molestiae vel,
              laudantium quam?
            </div>
          </m-popper-controller>

          quaerat culpa provident, vel obcaecati in aspernatur animi laborum
          accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
          quaerat culpa provident, vel obcaecati in aspernatur animi laborum
          accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
          quaerat culpa provident, vel obcaecati in aspernatur animi laborum
          accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
          quaerat culpa provident, vel obcaecati in aspernatur animi laborum
          accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Sapiente esse nam
          quaerat culpa provident, vel obcaecati in aspernatur animi laborum
          accusantium quas fugiat maxime non ratione id atque? Quas, quae. Lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facere
          laborum sapiente ex ullam voluptates impedit reiciendis blanditiis cum
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
          est alias. Autem commodi porro minima minus beatae fugiat saepe cum.
        </div>
      </m-popper-controller>

      <m-popper-controller
        :options="{ type: 'modal', targetClass: 'my-25 mx-auto' }"
      >
        <template #target>
          <m-button
            :border-width="3"
            theme="#52f751"
            border
            elevate
          >
            *** popup ***
          </m-button>
        </template>
        <div class="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
          impedit quam reiciendis maxime? Magni nihil aspernatur mollitia
          perferendis soluta? Est omnis libero dolores similique sapiente.
          Sapiente cupiditate officia ipsum.
        </div>
      </m-popper-controller>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, hic
        mollitia ad magni modi laborum vel libero. Officia cupiditate nulla
        repudiandae praesentium quibusdam? Numquam, id dicta! Architecto, sint
        laboriosam. Dignissimos! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam exercitationem blanditiis, quasi laboriosam,
        rerum ipsum aliquam tempore minima pariatur totam cumque error. Ab
        itaque facilis beatae assumenda atque esse cum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quam exercitationem blanditiis, quasi
        laboriosam, rerum ipsum aliquam tempore minima pariatur totam cumque
        error. Ab itaque facilis beatae assumenda atque esse cum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quam exercitationem
        blanditiis, quasi laboriosam, rerum ipsum aliquam tempore minima
        pariatur totam cumque error. Ab itaque facilis beatae assumenda atque
        esse cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        exercitationem blanditiis, quasi laboriosam, rerum ipsum aliquam tempore
        minima pariatur totam cumque error. Ab itaque facilis beatae assumenda
        atque esse cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quam exercitationem blanditiis, quasi laboriosam, rerum ipsum aliquam
        tempore minima pariatur totam cumque error. Ab itaque facilis beatae
        assumenda atque esse cum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam exercitationem blanditiis, quasi laboriosam,
        rerum ipsum aliquam tempore minima pariatur totam cumque error. Ab
        itaque facilis beatae assumenda atque esse cum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quam exercitationem blanditiis, quasi
        laboriosam, rerum ipsum aliquam tempore minima pariatur totam cumque
        error. Ab itaque facilis beatae assumenda atque esse cum.
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.play-card-one {
  width: 662px;
  max-width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  gap: 20px;

  .groove {
    width: 250px;
    height: 100%;
  }

  @media (max-width: 662px) {
    flex-direction: column;

    .groove {
      width: 100%;
      height: 250px;
    }
  }
}
</style>

<style lang="scss">
@import url("https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css");

body {
  margin: 0;
  i {
    &::before {
      display: block;
    }
  }
}
</style>
