<template>
  <svg
    class="m-loading"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle
        cx="16"
        cy="16"
        fill="none"
        r="14"
        stroke-width="4"
        style="stroke: currentColor; opacity: 0.2"
      ></circle>
    </g>
    <g class="circle__svg-circle">
      <circle
        cx="16"
        cy="16"
        fill="none"
        r="14"
        stroke-width="4"
        style="
          stroke: currentColor;
          stroke-dasharray: 80px;
          stroke-dashoffset: 60px;
        "
      ></circle>
    </g>
  </svg>
</template>

<style scoped>
@keyframes circle__svg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.circle__svg-circle {
  transform-origin: center;
  animation-name: circle__svg;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  height: 1px;
}
</style>
