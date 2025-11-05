import { useState } from "react"

export default function useLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const localStorageState = localStorage.getItem(key);

        if (localStorageState) {
            return JSON.parse(localStorageState)
        }

        return defaultValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state))
        } else {
            serializedValue = JSON.stringify(value)
        }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setLocalStorageState,
    ]
}