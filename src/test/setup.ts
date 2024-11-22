import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

// Après chaque test, il nettoie
afterEach(() => {
    cleanup();
});
