<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { ButtonProps } from './types/button.js';

const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'primary',
    loading: false,
    disabled: false,
    loadingPosition: 'right',
});

const slots = useSlots();

const hasOnlyIcon = computed(() => {
    return !slots.default && (!!slots.icon || !!slots.loadingIcon);
});

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

const classes = computed(() => [
    'taylux-btn',
    `taylux-btn--${props.variant}`,
    `taylux-btn--${props.size}`,
    {
        'taylux-btn--icon-only': hasOnlyIcon.value,
        'taylux-btn--block': props.block,
    },
]);
</script>

<template>
    <button
        :class="classes"
        :aria-disabled="disabled || loading"
        :aria-label="ariaLabel"
        :aria-busy="loading"
        :disabled="disabled || loading"
        @click="emit('click', $event)"
    >
        <!-- Icon-only loading state -->
        <span v-if="loading && hasOnlyIcon" class="taylux-btn-icon-center" role="status">
            <slot name="loadingIcon"></slot>
        </span>

        <template v-else>
            <!-- Left loading icon -->
            <span
                v-if="loading && loadingPosition === 'left'"
                class="taylux-btn-icon-left"
                role="status"
                aria-hidden="true"
            >
                <slot name="loadingIcon" />
            </span>

            <!-- Left icon -->
            <span v-if="!loading && $slots.icon" class="taylux-btn-icon-left" aria-hidden="true">
                <slot name="icon" />
            </span>

            <!-- Button content -->
            <span
                v-if="$slots.default"
                class="taylux-btn-content"
                :class="{ 'sr-only': loading && !$slots.loadingIcon }"
            >
                <slot />
            </span>

            <!-- Right loading icon -->
            <span
                v-if="loading && loadingPosition === 'right'"
                class="taylux-btn-icon-right"
                role="status"
                aria-hidden="true"
            >
                <slot name="loadingIcon" />
            </span>

            <!-- Right icon -->
            <span v-if="!loading && $slots.iconRight" class="taylux-btn-icon-right" aria-hidden="true">
                <slot name="iconRight" />
            </span>
        </template>
    </button>
</template>
