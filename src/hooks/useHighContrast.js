import { useContext } from "react";
import { HighContrastContext } from "../contexts/HighContrastContext";

const useHighContrast = () => {
    const context = useContext(HighContrastContext);

    if (!context) {
        throw new Error("useHighContrast doit être dans HighContrastProvider");
    }

    return context;
};

export default useHighContrast;
