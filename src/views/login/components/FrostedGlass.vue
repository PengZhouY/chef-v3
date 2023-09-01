<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 越小幅度越大
const multiple = 20
const mouseOverContainer: HTMLBodyElement = document.getElementsByTagName('body')[0]
const element = ref<HTMLDivElement | null>(null)

defineProps({
  width: {
    type: String,
    required: true
  }
})

onMounted(() => {
  function transformElement(x: number, y: number) {
    const box = element.value!.getBoundingClientRect()
    const calcX = -(y - box.y - box.height / 2) / multiple
    const calcY = (x - box.x - box.width / 2) / multiple
    let angle = Math.floor(getMouseAngle(y - box.y - box.height / 2, x - box.x - box.width / 2))

    element.value!.style.transform = 'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)'
    element.value!.style.setProperty('--angle', `${-angle}deg`)
  }

  function getMouseAngle(x: number, y: number): number {
    const radians = Math.atan2(y, x)
    let angle = radians * (180 / Math.PI)

    if (angle < 0) {
      angle += 360
    }

    return angle
  }

  mouseOverContainer.addEventListener('touchmove', (e) => {
    window.requestAnimationFrame(function () {
      transformElement(e.touches[0].clientX, e.touches[0].clientY)
    })
  })

  mouseOverContainer.addEventListener('touchend', () => {
    window.requestAnimationFrame(function () {
      element.value!.style.transform = 'rotateX(0) rotateY(0)'
      element.value!.style.setProperty('--angle', `NAN`)
    })
  })
})
</script>

<template>
  <div ref="element" id="element" :style="`--width:${width};`" class="frosted-glass">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 45deg;
}

div {
  width: var(--width);
  height: var(--height);
  transform-style: preserve-3d;
  backdrop-filter: blur(4px);
  background: linear-gradient(var(--angle), @colorPrimary1, @colorPrimary3);
  box-shadow: 0 20px 40px 1px @colorPrimary1, inset 0 -10px 20px -5px @colorPrimary3, 0 150px 100px -80px @colorPrimary5,
    inset 0 1px 4px @colorPrimary1, inset 0 -1px 1px 1px @colorPrimary1;
  transition: all 0.3s, --angle 0.3s;
  border-radius: @borderRadiusNormal;
}
</style>
