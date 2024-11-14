import type { App } from 'vue';
import Button from './components/TayluxButton.vue';
import './styles/components/Button/button.css';
import './styles/index.css';

export { Button };

export type { ButtonProps } from './types/index';

export const plugin = {
    install(app: App) {
        app.component('TayluxButton', Button);
    },
};

export default plugin;

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        TayluxButton: typeof Button;
    }
}
