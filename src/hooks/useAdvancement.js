/**
 * @file Offre une interface pour manipuler les données de progression.
 * @author Enzo MAROS
 */

import { useEffect, useState } from "react";

/**
 * Offre une interface pour manipuler les données de progression stockées dans le localStorage.
 *
 * Les données d'avancement sont spécifiques au livre actuellement lu par l'utilisateur. Deux instances
 * de cette classe ayant le même identifiant de livre partageront les mêmes données. Deux instances ayant
 * des identifiants différents auront des données différentes.
 */
class Advancement {
    /**
     * @param {number} bookId - Identifiant du livre
     * @param {Storage} storage - Storage JS à utiliser
     */
    constructor(bookId, storage) {
        this._bookId = bookId;
        this._storage = storage;
    }

    /**
     * Nom du dernier chapitre lu par l'utilisateur.
     * @returns {string}
     */
    get chapterName() {
        return this._storage.getItem(`chapterName${this._bookId}`);
    }

    /**
     * @param {string} value
     */
    set chapterName(value) {
        this._storage.setItem(`chapterName${this._bookId}`, value);
    }

    /**
     * Identifiant du dernier chapitre lu par l'utilisateur.
     * @returns {number}
     */
    get chapterId() {
        return this._storage.getItem(`chapterId${this._bookId}`);
    }

    /**
     * @param {number} value
     */
    set chapterId(value) {
        this._storage.setItem(`chapterId${this._bookId}`, value);
    }

    /**
     * Nom du chapitre précédent le dernier chapitre lu par l'utilisateur.
     * @returns {string}
     */
    get previousChapterName() {
        return this._storage.getItem(`previousChapterName${this._bookId}`);
    }

    /**
     * @param {string} value
     */
    set previousChapterName(value) {
        this._storage.setItem(`previousChapterName${this._bookId}`, value);
    }
}

/**
 * Génère une instance de la classe Advancement pour le livre donné.
 *
 * @param {number} bookId - Identifiant du livre dont il faut gérer l'avancement.
 * @returns {Advancement}
 */
const useAdvancement = (bookId) => {
    const [advancement, setAdvancement] = useState(null);

    useEffect(() => {
        setAdvancement(new Advancement(bookId, window.localStorage));
    }, []);

    return advancement;
};

export default useAdvancement;
