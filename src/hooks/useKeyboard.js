import { useEffect } from "react";

const useKeyboard = (keyCodes, callback) => {
    const handleKeyPress = (event) => {
        if (keyCodes.includes(event.keyCode)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [callback]);
};

export default useKeyboard;
