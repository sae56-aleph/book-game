import { useContext, useEffect } from "react";
import { LivreContext } from "../contexts/LivreContext";

const ERROR_MESSAGE = "useLivreContext doit être utilisé dans un LivreProvider";

/**
 * Accède au contexte du livre dont l'identifiant est passé en paramètre.
 * Si l'identifiant est différent de celui déjà stocké dans le contexte,
 * le contexte est mis à jour grâce à l'API.
 *
 * @param {number} bookId
 * @returns
 */
const useLivreContext = (bookId) => {
    const context = useContext(LivreContext);
    if (context === undefined) {
        throw new Error(ERROR_MESSAGE);
    }

    const updateContext = (bookId) => {
        // Réinitialiser le contexte
        context.setData({
            id: null,
            variables: null,
        });

        // Mettre à jour le contexte
        // TODO: Faire un appel à l'API pour récupérer les données du livre
        context.setData({
            id: bookId,
            variables: [
                {
                    nom: "HABILETE",
                    valeurInitiale: 3,
                    icone: "run",
                    type: "STATISTIQUE",
                },
                {
                    nom: "FORCE",
                    valeurInitiale: 1,
                    icone: "boxing",
                    type: "STATISTIQUE",
                },
                {
                    nom: "INTELLIGENCE",
                    valeurInitiale: 3,
                    icone: "brain",
                    type: "STATISTIQUE",
                },
                {
                    nom: "CORDE",
                    valeurInitiale: 0,
                    icone: "rope.png",
                    type: "INVENTAIRE",
                },
            ],
        });
    };

    // Si des données existent, vérifier s'il faut mettre à jour le contexte.
    // On ne lance la vérification que si l'identifiant du livre a changé.
    useEffect(() => {
        if (context.bookId !== bookId) {
            updateContext(bookId);
        }
    }, [bookId]);

    return {
        bookVariables: context.bookVariables,
    };
};

export default useLivreContext;
