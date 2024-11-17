<script setup lang="ts">
import { ref } from 'vue';
import TayluxInput from '../../ui/components/Input/TayluxInput.vue';

const email = ref('');
</script>

<template>
    <div class="div">
        <TayluxInput v-model="email" size="lg" type="email" placeholder="Votre email" name="email" />
        <p>
            {{ email }}
        </p>
    </div>
</template>

<style>
.div {
    width: 25%;
    margin-top: 32px;
}
</style>
