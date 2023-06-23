<script lang="ts" setup>
import { ref } from "vue";
import MPopperControllerClient from "../src/runtime/components/modal/MPopperController.client.vue";
import "../src/runtime/myle/style/myle.scss";

const value = ref("");
const controller1 = ref<InstanceType<typeof MPopperControllerClient>>();

function close() {
  console.log(controller1.value);

  controller1.value?.popper?.destroy();
}
</script>

<template>
  <div class="container py-20">
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

    <m-popper-controller
      ref="controller1"
      :options="{ type: 'popup' }"
    >
      <template #target>
        <m-button
          :flat="0.1"
          class=""
          >*** popup ***</m-button
        >
      </template>
      <div class="p-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
        impedit quam reiciendis maxime? Magni nihil aspernatur mollitia
        perferendis soluta? Est omnis libero dolores similique sapiente.
        Sapiente cupiditate officia ipsum.
        <button @click="close">close</button>
      </div>
    </m-popper-controller>

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
      deleniti iure alias voluptas magni perspiciatis dolore nesciunt obcaecati!
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

        <m-popper-controller :options="{ type: 'popup', targetClass: 'my-20' }">
          <template #target>
            <m-button>*** popup ***</m-button>
          </template>
          <div class="p-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam
            impedit quam reiciendis maxime? Magni nihil aspernatur mollitia
            perferendis soluta? Est omnis libero dolores similique sapiente.
            Sapiente cupiditate officia ipsum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error id dolorum nostrum expedita vero
            dicta. Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
            voluptates nostrum nihil totam molestiae vel, laudantium quam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Error id dolorum
            nostrum expedita vero dicta. Obcaecati, iusto voluptatibus
            exercitationem fuga, odit illum voluptates nostrum nihil totam
            molestiae vel, laudantium quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error id dolorum nostrum expedita vero
            dicta. Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
            voluptates nostrum nihil totam molestiae vel, laudantium quam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Error id dolorum
            nostrum expedita vero dicta. Obcaecati, iusto voluptatibus
            exercitationem fuga, odit illum voluptates nostrum nihil totam
            molestiae vel, laudantium quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error id dolorum nostrum expedita vero
            dicta. Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
            voluptates nostrum nihil totam molestiae vel, laudantium quam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Error id dolorum
            nostrum expedita vero dicta. Obcaecati, iusto voluptatibus
            exercitationem fuga, odit illum voluptates nostrum nihil totam
            molestiae vel, laudantium quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error id dolorum nostrum expedita vero
            dicta. Obcaecati, iusto voluptatibus exercitationem fuga, odit illum
            voluptates nostrum nihil totam molestiae vel, laudantium quam?
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
        est alias. Autem commodi porro minima minus beatae fugiat saepe cum. est
        alias. Autem commodi porro minima minus beatae fugiat saepe cum.
      </div>
    </m-popper-controller>

    <m-popper-controller
      :options="{ type: 'modal', targetClass: 'my-25 mx-auto' }"
    >
      <template #target>
        <m-button
          border
          :border-width="1.5"
          dark
          flat
          >*** popup- ***</m-button
        >
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
      adipisicing elit. Quam exercitationem blanditiis, quasi laboriosam, rerum
      ipsum aliquam tempore minima pariatur totam cumque error. Ab itaque
      facilis beatae assumenda atque esse cum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Quam exercitationem blanditiis, quasi
      laboriosam, rerum ipsum aliquam tempore minima pariatur totam cumque
      error. Ab itaque facilis beatae assumenda atque esse cum. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quam exercitationem
      blanditiis, quasi laboriosam, rerum ipsum aliquam tempore minima pariatur
      totam cumque error. Ab itaque facilis beatae assumenda atque esse cum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
      exercitationem blanditiis, quasi laboriosam, rerum ipsum aliquam tempore
      minima pariatur totam cumque error. Ab itaque facilis beatae assumenda
      atque esse cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quam exercitationem blanditiis, quasi laboriosam, rerum ipsum aliquam
      tempore minima pariatur totam cumque error. Ab itaque facilis beatae
      assumenda atque esse cum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quam exercitationem blanditiis, quasi laboriosam, rerum
      ipsum aliquam tempore minima pariatur totam cumque error. Ab itaque
      facilis beatae assumenda atque esse cum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Quam exercitationem blanditiis, quasi
      laboriosam, rerum ipsum aliquam tempore minima pariatur totam cumque
      error. Ab itaque facilis beatae assumenda atque esse cum.
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
