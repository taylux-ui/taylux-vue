import type { App } from 'vue';
import TayluxButton from './components/Button/TayluxButton.vue';
import TayluxInput from './components/Input/TayluxInput.vue';
import './styles/components/Button/button.css';
import './styles/index.css';

export { TayluxButton, TayluxInput };

export type { ButtonProps } from './types/Button/button';
export type { InputProps } from './types/Input/input';

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
