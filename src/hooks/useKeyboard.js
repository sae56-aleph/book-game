import { useEffect, useRef, useState } from "react"

const useKeyboard = (keyCodes, callback) => {
    console.log(keyCodes)

    const handleKeyPress = (event) => {
        if (keyCodes.includes(event.keyCode)) {
            console.log("Appel du callback")
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [callback]);
}

export default useKeyboard;