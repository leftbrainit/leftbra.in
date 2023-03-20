<template>
    <div>
        <div  ref="bgRef" class="fixed top-0 bottom-0 left-0 right-0 bg-primary-100 z-0 bg-center bg-cover" :style="`background-image: url(${props.headerImageUrl}); box-shadow: inset 0 0 100vh 20vh rgba(25,25,15,0.7)`" v-motion
        :initial="{
          opacity: 0,
          scale:0.8
        }"
        :enter="{
          opacity: 1,
          scale:1
        }"
        >
        </div>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useSpring, useMotionProperties} from '@vueuse/motion'

const props = defineProps({
    headerImageUrl: {
        type: String,
        required: true
    }
})
const planetEnterTransition = {
      type: 'spring',
      stiffness: 30,
      damping: 34,
      mass: 8,
}

const planetScaleTransition = {
      repeat: Infinity,
      repeatType: 'mirror',
      delay: 1000,
      duration: 1000,
      type: 'keyframes',
      ease: 'easeIn',
    }

const target = ref<HTMLElement>()
const bgRef = ref<HTMLElement>()

const { motionProperties } = useMotionProperties(target)
const {  motionProperties:bgMotionProperties } = useMotionProperties(bgRef)

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos: number) {
  // Do something with the scroll position
  //@ts-ignore
  console.log({scrollPos, porop: motionProperties.x})
  //@ts-ignore
  bgMotionProperties.scale = 1 + (scrollPos/3000)
  if (scrollPos > 4) {
    //@ts-ignore
      motionProperties.opacity = 0.4 - (scrollPos/1000)
    //@ts-ignore
    motionProperties.x = scrollPos / 10 
    //@ts-ignore
    bgMotionProperties.opacity = 1 - (scrollPos/500)
    
  }
}
// doSomething(window.scrollY)
document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
</script>