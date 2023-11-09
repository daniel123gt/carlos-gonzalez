<template>
    <div class="py-6">
        <details class="bg-gray-light p-3 rounded-2xl" open>
            <summary class="list-none flex justify-between items-center cursor-pointer">
                <h1 class="text-primary text-4xl font-bold">MovieVerse</h1>
                <span class="text-primary text-4xl font-bold">+</span>
            </summary>
            <slot/>
        </details>
    </div>
</template>