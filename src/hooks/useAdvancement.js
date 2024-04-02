/**
 * @file Offre une interface pour manipuler les données de progression.
 * @author Enzo MAROS
 */

import { useEffect, useState } from "react";
import Advancement from "../models/Advancement";

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
const useAdvancement = (bookId) => {
    const [advancement, setAdvancement] = useState(null);

    useEffect(() => {
        setAdvancement(new Advancement(bookId, window.localStorage));
    }, []);

    return advancement;
};

export default useAdvancement;
