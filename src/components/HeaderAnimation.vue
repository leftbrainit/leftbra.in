<template>
    <div>
        <div  ref="bgRef" class="fixed top-0 bottom-0 left-0 right-0 bg-red-500/50 z-0 bg-center backdrop-opacity-10   brightness-[.4] grayscale" style="background-image: url('assets/space-bg-01.jpg')" v-motion
        :initial="{
          opacity: 0,
          scale:1
        }"
        :enter="{
          opacity: 1,
          scale:1
        }"
        >
            <svg  width="100%" height="100%" viewBox="0 0 1322 754" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- <rect  width="100%" height="100%" fill="black"/> -->
            <circle v-motion
        :initial="{
          opacity: 0,
          x: -50,
        }"
        :enter="{
          opacity: 0.4,
          x: 0,
          transition: {
            x: planetEnterTransition,
            scale: planetScaleTransition
          },
            }"  cx="308.5" cy="352.5" r="252.5" fill="#D9D9D9"/>
                <circle v-motion ref="target"  :initial="{
          opacity: 0,
          x: 50,
        }"
        :enter="{
          opacity:0.4,
          x: 0,
          transition: {
            x: planetEnterTransition,
            scale: planetScaleTransition
          }
          
            }"  cx="1032" cy="339" r="130" fill="#D9D9D9"/>
            <circle v-motion
            :initial="{
          opacity: 0,
          x: 700,
        }"
        :enter="{
          opacity: 0.4,
          x: 0,
          transition: {
            x: {...planetEnterTransition, delay: 800},
            scale: planetScaleTransition
          }
          
            }" cx="823" cy="106" r="56" fill="#D9D9D9"/>
            </svg>
    
        </div>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useSpring, useMotionProperties} from '@vueuse/motion'

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