<template>
    <!-- <div class="bg-cover nobg-center" :style="`background-image: url(/assxxxets/80.png);background-size: auto 100%; background-position: right; background-repeat: no-repeat;`"> -->
        <!-- <div class="bg-center bg-cover" :style="`background-image: url(/assets/gradient-5.svg);background-attachment: fixed;`">
    <div class="bg-repeat" :style="`background-image: url(/assets/noise-1.svg);background-attachment: fixed;`"> -->
    <div class=" smy-20  my-12 md:my-24 overflow-hidden bg-coverss" :style="`background-image: url(/assets/globe-2.png);background-size: auto 100%; background-position: right; background-repeat: no-repeat;`">
        <Wrapper class=" ">
            <div class="w-full border-t border-white/10"></div>
            <div
                class="prose prose-xl max-w-4xl text-xl md:text-2xl text-white/90 pt-16 pb-12 highlight-links-lg md:leading-relaxed font-normal font-sans">
                <slot />
            </div>
            <div class="grid md:hidden gap-8">
                <div v-for="testimonial in testimonials" >
                    <Testimonial v-bind="testimonial" />
                </div>
            </div>
            <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 content-start">
                <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 content-start">
                    <div  class="col-span-2">
                        <Testimonial v-if="featuredTestimonial" v-bind="featuredTestimonial" />
                    </div>
                    <div class="content-start grid gap-8">
                        <div v-for="testimonial in testimonials.filter(a => a.position === 'column1')" >
                            <Testimonial v-bind="testimonial" />
                        </div>
                    </div>
                    <div class="content-start grid gap-8">
                        <div v-for="testimonial in testimonials.filter(a => a.position === 'column2')" >
                            <Testimonial v-bind="testimonial" />
                        </div>
                    </div>
    
                </div>
                <div class="content-start grid gap-8">
                    <div v-for="testimonial in testimonials.filter(a => a.position === 'column3')" >
                            <Testimonial v-bind="testimonial" />
                        </div>
                </div>
            </div>
        </Wrapper>
    <!-- </div>
    </div>-->
    </div> 
</template>

<script setup lang="ts">
import { inject } from "vue";
import { TestimonialsKey } from "../symbols"
import {computed} from "vue"


const {testimonials} = inject(TestimonialsKey)

if (!testimonials) {
throw new Error(`Could not resolve testimonials data`);
}

const featuredTestimonial = computed(() => testimonials.find(a => a.position === "featured"))
</script>