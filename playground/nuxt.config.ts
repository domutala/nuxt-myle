export default defineNuxtConfig({
  devServer: {
    url: "http://localhost:6200",
    port: 6400,
  },
  modules: ["../src/module"],
  myle: {
    icon: {
      public: "playground/public",
      src: "playground/icons",
    },
  },
});
