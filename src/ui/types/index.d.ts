import { DefineComponent } from 'vue';
import type { ButtonProps } from '../components/Button/types/button';
import type { InputProps } from '../components/Input/types/input';

declare module 'taylux' {
    export const TayluxButton: DefineComponent<ButtonProps, {}, {}>;
    export const TayluxInput: DefineComponent<InputProps, {}, {}>;
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
