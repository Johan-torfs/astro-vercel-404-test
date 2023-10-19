import { writable } from 'svelte/store';

export const inputs = writable({});
export const navigation = writable({
    open: false,
});

export function storeInput(n, e) {
    inputs.update((s) => {
        s[n] = e.target.value;
        return s;
    });
}