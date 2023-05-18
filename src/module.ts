import {
  addComponentsDir,
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

    addComponentsDir({
      path: resolver.resolve("./runtime/components/"),
      extensions: [".vue"],
      pathPrefix: false,
      global: true,
    });

    // if (options.withCss) {
    // const scss = resolver.resolve("./runtime/myle/style/myle.scss");
    // nuxt.options.css.push(scss);
    // }
  },
});
