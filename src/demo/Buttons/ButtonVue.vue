<script setup lang="ts">
import { ArrowRight, ChevronRight, Loader2, LogOut, Plus, Save, Send, Settings, Trash2, User } from 'lucide-vue-next';
import TayluxButton from '../../ui/components/Button/TayluxButton.vue';
const handleClick = () => {
    console.log('Button clicked!');
};
</script>

<template>
    <div class="buttons-demo">
        <!-- Bouton basique avec différentes variants -->
        <TayluxButton size="md">Hello world</TayluxButton>
        <TayluxButton variant="secondary">Secondary Button</TayluxButton>
        <TayluxButton variant="danger">Danger Button</TayluxButton>
        <TayluxButton variant="outline">Outline Button</TayluxButton>
        <TayluxButton variant="danger">Danger Outline</TayluxButton>
        <TayluxButton variant="ghost">Ghost Button</TayluxButton>

        <!-- Différentes tailles -->
        <TayluxButton size="sm">Small Button</TayluxButton>
        <TayluxButton size="md">Medium Button</TayluxButton>
        <TayluxButton size="lg">Large Button</TayluxButton>

        <!-- Avec icône à gauche -->
        <TayluxButton>
            <template #icon>
                <Plus />
            </template>
            Add New
        </TayluxButton>

        <!-- Avec icône à droite -->
        <TayluxButton>
            Send Message
            <template #iconRight>
                <Send />
            </template>
        </TayluxButton>

        <!-- Avec icônes des deux côtés -->
        <TayluxButton>
            <template #icon>
                <User />
            </template>
            User Settings
            <template #iconRight>
                <ChevronRight />
            </template>
        </TayluxButton>

        <!-- États de loading -->
        <TayluxButton loading loading-position="left">
            <template #loadingIcon>
                <Loader2 class="animate-spin" />
            </template>
            Loading...
        </TayluxButton>

        <TayluxButton loading loading-position="right">
            Processing
            <template #loadingIcon>
                <Loader2 class="animate-spin" />
            </template>
        </TayluxButton>

        <!-- Loading icon seul (centré) -->
        <TayluxButton loading>
            <template #loadingIcon>
                <Loader2 class="animate-spin" />
            </template>
        </TayluxButton>

        <!-- Bouton désactivé -->
        <TayluxButton disabled>Disabled Button</TayluxButton>

        <!-- Bouton pleine largeur -->
        <TayluxButton block>Full Width Button</TayluxButton>

        <!-- Exemples de cas d'utilisation courants -->
        <TayluxButton variant="primary">
            <template #icon>
                <Save />
            </template>
            Save Changes
        </TayluxButton>

        <TayluxButton variant="danger">
            <template #icon>
                <Trash2 />
            </template>
            Delete Item
        </TayluxButton>

        <TayluxButton variant="ghost">
            <template #icon>
                <Settings />
            </template>
            Settings
        </TayluxButton>

        <TayluxButton variant="outline">
            <template #icon>
                <LogOut />
            </template>
            Sign Out
        </TayluxButton>

        <!-- Bouton avec action -->
        <TayluxButton @click="handleClick">
            Continue
            <template #iconRight>
                <ArrowRight />
            </template>
        </TayluxButton>
    </div>
</template>

<style scoped>
.buttons-demo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

/* Pour afficher les boutons côte à côte dans certains cas */
.buttons-demo > div {
    display: flex;
    gap: 1rem;
}
</style>
