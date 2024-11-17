import { DefineComponent } from 'vue';
import type { ButtonProps } from './Button/button';

declare module 'taylux' {
    export const TayluxButton: DefineComponent<ButtonProps, {}, {}>;
}

interface CustomMatchers<R = unknown> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toBeDisabled(): R;
    toHaveTextContent(text: string): R;
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
