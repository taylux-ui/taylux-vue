import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TayluxInput from './TayluxInput.vue';

describe('TayluxInput', () => {
    // Rendu du composant Input
    it('should render properly', () => {
        const wrapper = mount(TayluxInput);
        expect(wrapper.find('input').exists()).toBe(true);
    });
});
