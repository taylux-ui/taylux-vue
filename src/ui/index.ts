import '@/components/Button/style/button.css';
import TayluxButton from '@/components/Button/TayluxButton.vue';
import TayluxInput from '@/components/Input/TayluxInput.vue';
import type { App } from 'vue';
import './styles/index.css';

export { TayluxButton, TayluxInput };

export type { ButtonProps } from '@/components/Button/types/button';
export type { InputProps } from '@/components/Input/types/input';

export const plugin = {
    install(app: App) {
        app.component('TayluxButton', TayluxButton);
        app.component('TayluxInput', TayluxInput);
    },
};

export default plugin;

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        TayluxButton: typeof TayluxButton;
        TayluxInput: typeof TayluxInput;
    }
}
