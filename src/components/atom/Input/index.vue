<script setup lang="ts">
interface InputProps {
    name?: string;
    id?: string;
    placeholder?: string;
    type?: string;
    label?: string;
    modelValue?: any;
}
defineProps<InputProps>();
</script>
<template>
    <label class="flex flex-col" :for="id">
        <span>{{ label }}</span>
        
        <input class="py-2 px-4 rounded-2xl bg-gray-light  border border-gray-medium shadow-sm shadow-gray-medium  outline-none"
        :type="type" :name="name" :id="id" :placeholder="placeholder" @keydown="$emit('eventChange')" />
    </label>

</template>