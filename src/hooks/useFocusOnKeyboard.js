import { useEffect, useRef, useState } from "react"

const useFocusOnKeyboard = (keyCodes) => {
    const ref = useRef(null);

    const handleKeyPress = event => {
        console.log(keyCodes)
        if (keyCodes.includes(event.keyCode)) {
            ref.current?.focus()
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return ref
}

export default useFocusOnKeyboard;