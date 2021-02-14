<template>
  <canvas id="myCanvas" ref="myCanvasRef" @mousedown="handleMousedown" @touchstart="handleTouchstart" />
  <Toolbar
    v-model:lineWidth="lineWidth"
    v-model:strokeColor="strokeColor"
    @revoke="revokeStep"
    @clear="clearBoard"
    @play="playAnimation"
    @download="downloadPng" />
</template>

<script>
  import { ref } from 'vue'
  import Toolbar from '@/Toolbar.vue'
  import useDrawing from '@/useDrawing'

  export default {
    components: { Toolbar },
    setup() {
      const myCanvasRef = ref(null)

      const {
        lineWidth, strokeColor,
        handleMousedown, handleTouchstart,
        revokeStep, clearBoard, downloadPng, playAnimation,
      } = useDrawing(myCanvasRef)

      return {
        myCanvasRef,
        lineWidth, strokeColor,
        handleMousedown, handleTouchstart,
        revokeStep, clearBoard, downloadPng, playAnimation,
      }
    },
  }

</script>

<style>
  @import "~@/css/reset.css";
  body {
    position: relative;
    overflow: hidden;
    #myCanvas {
      cursor: crosshair;
    }
  }
</style>
