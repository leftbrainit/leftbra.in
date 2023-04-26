
import Avatar from './Avatar.vue';

<template>
    <div class="not-prose mt-12 text-xl leading-8 border bg-primary-100 border-white/10 rounded-xl bg-center bg-cover overflow-hidden" :style="`nobackground-image: url(/assets/gradient-4.svg)`" >
        <div class="flex w-full">
            <div class=" py-8 px-8 bg-cover bg-center" nostyle="`background-image: url(/assets/219A4875.jpgs); box-shadow: inset 0 0 300px 120px rgba(25,25,15,0.9)`">
                <slot>
                    <h2 class="text-5xl font-title font-medium mb-4 text-white/90">You’re unique</h2>
                    <p class="text-white/80">Which is why we prefer to tailor our approach specifically for you. Let’s discuss a collaborative partnership and how we can achieve the best outcomes together.</p>
                </slot>
                <div class="flex gap-1 mt-4 group cursor-pointer ">
                    <img class=" w-20 h-20 bg-primarsy-200 rounded-full scale-100 group-hover:scale-125 transition-all"  src="/assets/dustin-rhodes.png" alt="" />
                    <div class=" flex flex-col items-left justify-center pl-0 group-hover:pl-2 transition-all">
                        <div class="text-primary-500/80 group-hover:text-primary-500 font-semibold">Email Dustin about something &rarr;</div>
                        <div class="text-sm text-white/90">Dustin Rhodes, Head of New Business</div>
                    </div>
                </div>
            </div>
            <!-- <div class="w-96 h-96 bg-cover bg-center" :style="`background-image: url(/assets/219A4875.jpg)`">
            </div> -->
            <!-- <div class="w-1/3">
                <img src="/assets/219A4875-square.jpg" alt="">
            </div> -->
        </div>
    </div>
</template>