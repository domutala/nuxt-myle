// @ts-ignore: resolved with nuxt
import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { iconBuilder } from "../myle/icon";

export default defineNuxtPlugin(() => {
  const options = useRuntimeConfig().public.myle;
  iconBuilder(options.icon);
});
