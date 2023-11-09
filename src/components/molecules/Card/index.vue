<script setup lang="ts">
interface CardProps {
    title?: string;
    description?: string;
    img?: string;
    genre?: string;
    containerClass?: string;
}
defineProps<CardProps>();
</script>
<template>
    <div :class="['rounded-2xl p-6 shadow-lg bg-gray-dark w-full flex flex-col md:flex-row', containerClass]">
        <figure class="w-[160px] rounded-2xl overflow-hidden">
            <img class="object-fill" :src="img" :alt="title">
        </figure>
        <div class="md:px-6 flex flex-col justify-between gap-4 ">
            <p class="text-white text-3xl"> {{ title }} </p>
            <p class="text-gray-medium"> {{ description }} </p>
            <span
                :class="['text-white w-[100px] text-center p-2 rounded-2xl', genre == 'Drama' && 'bg-red-600', genre == 'Action' && 'bg-orange-600', genre == 'Crime' && 'bg-blue-600']">
                {{ genre }} </span>
        </div>
    </div>
</template>