import {
  addComponentsDir,
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { Options as MyleOptions } from "./runtime/myle/types";

export interface Options extends MyleOptions {
  withCss?: boolean;
}

export default defineNuxtModule<Options>({
  meta: {
    name: "nuxt-myle",
    configKey: "myle",
    compatibility: { nuxt: "^3" },
  },

  // Default configuration options of the Nuxt module
  defaults: {},

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.runtimeConfig.public.myle = options as any;

    addPlugin({
      src: resolver.resolve("./runtime/plugins/icon"),
      mode: "server",
    });

    addImportsDir(resolver.resolve("./runtime/composables/"));

    addComponentsDir({
      path: resolver.resolve("./runtime/components/"),
      extensions: [".vue"],
      pathPrefix: false,
      global: true,
    });
  },
});
