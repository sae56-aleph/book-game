import AdvancementVariables from "./AdvancementVariables";

/**
 * Offre une interface pour manipuler les données de progression stockées dans le localStorage.
 *
 * Les données d'avancement sont spécifiques au livre actuellement lu par l'utilisateur. Deux instances
 * de cette classe ayant le même identifiant de livre partageront les mêmes données. Deux instances ayant
 * des identifiants différents auront des données différentes.
 *
 * @author Enzo MAROS
 *
 * @example
 * const advancement = new Advancement(1, window.localStorage);
 * advancement.chapterId = 3;
 * advancement.chapterName = "Chapitre 3";
 * advancement.previousChapterName = "Chapitre 2";
 * advancement.variables.get("HABILETE")
 */
class Advancement {
    /**
     * @param {number} bookId - Identifiant du livre
     * @param {Storage} storage - Storage JS à utiliser
     */
    constructor(bookId, storage) {
        this._bookId = bookId;
        this._storage = storage;
        this._variables = new AdvancementVariables(bookId, storage);
    }

    /**
     * Récupère une valeur dans le localStorage.
     *
     * @param {string} key - Clé de l'élément à récupérer. La clé est automatiquement sufixée par l'identifiant du livre.
     */
    _getItem(key) {
        return this._storage.getItem(`${key}${this._bookId}`);
    }

    /**
     * Stocke une valeur dans le localStorage.
     * @param {string} key - Clé de l'élément à stocker. La clé est automatiquement sufixée par l'identifiant du livre.
     * @param {any} value - Valeur à stocker.
     */
    _setItem(key, value) {
        this._storage.setItem(`${key}${this._bookId}`, value);
    }

    reset() {
        this._storage.removeItem(`chapterId${this._bookId}`);
        this._storage.removeItem(`chapterName${this._bookId}`);
        this._storage.removeItem(`previousChapterName${this._bookId}`);
        this._variables.reset();
    }

    /**
     * Nom du dernier chapitre lu par l'utilisateur.
     * @returns {string}
     */
    get chapterName() {
        return this._getItem("chapterName");
    }

    /**
     * @param {string} value
     */
    set chapterName(value) {
        this._setItem("chapterName", value);
    }

    /**
     * Identifiant du dernier chapitre lu par l'utilisateur.
     * @returns {number}
     */
    get chapterId() {
        return this._getItem("chapterId");
    }

    /**
     * @param {number} value
     */
    set chapterId(value) {
        this._setItem("chapterId", value);
    }

    /**
     * Nom du chapitre précédent le dernier chapitre lu par l'utilisateur.
     * @returns {string}
     */
    get previousChapterName() {
        return this._getItem("previousChapterName");
    }

    /**
     * @param {string} value
     */
    set previousChapterName(value) {
        this._setItem("previousChapterName", value);
    }

    /**
     * Liste des variables (inventaire et autres informations de progression).
     * @returns {AdvancementVariables}
     */
    get variables() {
        return this._variables;
    }
}

export default Advancement;
