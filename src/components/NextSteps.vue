<template>
    <div class="not-prose mt-12 px-12 py-8 text-xl leading-8 border bg-primary-100/50 border-white/10 rounded-xl bg-center bg-cover" :style="`nobackground-image: url(/assets/gradient-4.svg)`" >
        <div class="flex w-full items-center gap-8">
            <div class="flex-grow">
                <slot><p>Ready for better internal tech? Chat with our New Business team.</p></slot>
            </div>
            <ContactNewBusinessButton color="pink" :text="'Schedule A Call &rarr;'"/>
        </div>
    </div>
</template>