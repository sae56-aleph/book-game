import { useEffect, useRef, useState } from "react"

const useKeyboard = (keyCodes, callback) => {
    const ref = useRef(null);

    const handleKeyPress = (event) => {
        if (keyCodes.includes(event.keyCode)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return ref
}

export default useKeyboard;