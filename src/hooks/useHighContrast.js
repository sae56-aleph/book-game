import { useState, useEffect } from "react";

const useHighContrast = () => {
    const [isHighContrast, setIsHighContrast] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem("highContrast");
        if (savedState) {
            setIsHighContrast(JSON.parse(savedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("highContrast", isHighContrast);
    }, [isHighContrast]);

    const toggleHighContrast = () => {
        setIsHighContrast((prev) => !prev);
    };

    return [isHighContrast, toggleHighContrast];
};

export default useHighContrast;
