import type { Meta, StoryObj } from '@storybook/vue3';
import TayluxInput from './TayluxInput.vue';

const meta = {
    component: TayluxInput,
    title: 'Components/TayluxInput',
} satisfies Meta<typeof TayluxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    argTypes: {
        type: {
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        disabled: {
            control: 'boolean',
        },
        placeholder: {
            name: '',
        },
        modelValue: {
            name: '',
        },
    },
    args: {
        type: 'text',
        size: 'md',
        disabled: false,
        placeholder: 'Text',
        name: 'text',
        modelValue: 'email',
    },
};
