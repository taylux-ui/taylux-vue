<script setup lang="ts">
import { computed } from 'vue';
import { InputProps } from '../../types/Input/input.js';

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    placeholder: 'Text',
    disabled: false,
    name: '',
    size: 'sm',
});

const emit = defineEmits(['update:modelValue']);

const handleInput = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

const classes = computed(() => ['taylux-input', `taylux-input-${props.size}`]);
</script>

<template>
    <input
        :id="name"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :name="name"
        :value="modelValue"
        :class="classes"
        @input="handleInput($event)"
    />
</template>
