<template>
    <button :class="classes" :aria-disabled="disabled" :disabled="disabled" @click="emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from '../../types/Button/button.ts';

const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'primary',
    disabled: false,
});

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

const classes = computed(() => ['taylux-btn', `taylux-btn--${props.variant}`, `taylux-btn--${props.size}`]);
</script>

<style></style>
