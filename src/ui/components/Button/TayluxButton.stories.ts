import type { Meta, StoryObj } from '@storybook/vue3';
import TayluxButton from './TayluxButton.vue';

const meta = {
    component: TayluxButton,
    title: 'Components/TayluxButton',
} satisfies Meta<typeof TayluxButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        disabled: {
            control: 'boolean',
        },
        default: {
            control: 'text',
        },
    },
    args: {
        variant: 'primary',
        size: 'md',
        disabled: false,
        default: 'Hello world',
    },
};
