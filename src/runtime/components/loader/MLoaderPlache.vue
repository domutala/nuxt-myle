<template>
  <div class="m-loader"></div>
</template>

<style lang="scss" scoped>
.m-loader {
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.05)),
    color-stop(18%, rgba(130, 130, 130, 0.1)),
    color-stop(33%, rgba(130, 130, 130, 0.05))
  );
  background-size: 800px 100px;
  animation: wave-squares 2s infinite ease-out;
}

@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 800px 0;
  }
}
</style>
