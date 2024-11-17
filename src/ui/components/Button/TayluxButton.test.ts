import { fireEvent, render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import type { ButtonProps } from '../../types/index';
import TayluxButton from './TayluxButton.vue';

type ButtonVariant = ButtonProps['variant'];

describe('TayluxButton', () => {
    it('renders button with default props', () => {
        const { getByRole } = render(TayluxButton, {
            props: {
                variant: 'primary',
            } as ButtonProps,
            slots: {
                default: 'Click me',
            },
        });

        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('taylux-btn--primary');
        expect(button).toHaveTextContent('Click me');
    });

    it('emits click event when clicked', async () => {
        const { getByRole, emitted } = render(TayluxButton, {
            props: {
                variant: 'primary',
            } as ButtonProps,
        });

        const button = getByRole('button');
        await fireEvent.click(button);

        expect(emitted()).toHaveProperty('click');
    });

    it('applies size class correctly', () => {
        const { getByRole } = render(TayluxButton, {
            props: {
                variant: 'primary',
                size: 'lg',
            } as ButtonProps,
        });

        const button = getByRole('button');
        expect(button).toHaveClass('taylux-btn--lg');
    });

    it('is disabled when disabled prop is true', () => {
        const { getByRole } = render(TayluxButton, {
            props: {
                variant: 'primary',
                disabled: true,
            } as ButtonProps,
        });

        const button = getByRole('button');
        expect(button).toBeDisabled();
    });

    it('applies custom class when provided', () => {
        const { getByRole } = render(TayluxButton, {
            props: {
                variant: 'primary',
                class: 'custom-class',
            } as ButtonProps,
        });

        const button = getByRole('button');
        expect(button).toHaveClass('custom-class');
    });

    it.each(['primary', 'secondary', 'outline', 'ghost', 'danger'] as const)(
        'renders %s variant correctly',
        (variant) => {
            const { getByRole } = render(TayluxButton, {
                props: { variant },
            });

            const button = getByRole('button');
            expect(button).toHaveClass(`taylux-btn--${variant}`);
        }
    );
});
