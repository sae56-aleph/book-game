import { useContext, useEffect } from "react";
import { LivreContext } from "../contexts/LivreContext";

const ERROR_MESSAGE = "useLivreContext doit être utilisé dans un LivreProvider";

/**
 * Accède au contexte du livre dont l'identifiant est passé en paramètre.
 *
 * @returns
 */
const useLivreContext = () => {
    const context = useContext(LivreContext);
    if (context === undefined) {
        throw new Error(ERROR_MESSAGE);
    }

    return context;
};

export default useLivreContext;
