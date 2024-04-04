/**
 * @file Offre une interface pour manipuler les données de progression.
 * @author Enzo MAROS
 */

import { useEffect, useState } from "react";
import Advancement from "../models/Advancement";
import useLivreContext from "./useLivreContext";

/**
 * Génère une instance de la classe Advancement pour le livre donné.
 *
 * @param {number} bookId - Identifiant du livre dont il faut gérer l'avancement.
 * @returns {Advancement|null}
 *
 * @example
 * const advancement = useAdvancement(1);
 * advancement.chapterId = 3;
 * advancement.chapterName = "Chapitre 3";
 * advancement.previousChapterName = "Chapitre 2";
 */
const useAdvancement = () => {
    const [advancement, setAdvancement] = useState(null);
    const livre = useLivreContext();

    useEffect(() => {
        if (!livre) return;

        const advancement = new Advancement(livre.id, window.localStorage);

        // Au cas où le livre n'est pas initialisé, on génère les variables
        livre.variables?.forEach((variable) => {
            advancement.variables.init(variable.nom, variable.valeurInitiale);
        });

        setAdvancement(advancement);
    }, [livre]);

    return advancement;
};

export default useAdvancement;
