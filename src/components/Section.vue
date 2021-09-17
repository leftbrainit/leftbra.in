<template>
    <Wrapper>
        <section class="flex flex-col justify-center py-24">
            <div class="text-xl uppercase mb-1 font-extrabold text-blue-600">
                <slot name="title" />
            </div>
            <div class="max-w-3xl text-5xl mb-3 font-medium text-gray-800 leading-tight">
                <slot name="slogan" />
            </div>
            <div class="mt-3">
                <slot />
            </div>
        </section>
    </Wrapper>
</template>