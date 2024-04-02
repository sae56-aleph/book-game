/**
 * Offre une interface pour manipuler les variables stockées dans le localStorage.
 *
 * Les données d'avancement sont spécifiques au livre actuellement lu par l'utilisateur. Deux instances
 * de cette classe ayant le même identifiant de livre partageront les mêmes données. Deux instances ayant
 * des identifiants différents auront des données différentes.
 *
 * @author Enzo MAROS
 * @example
 * const variables = new AdvancementVariables(1, window.localStorage);
 * variables.set("HABILETE", 10);
 * variables.get("HABILETE"); // 10
 */
class AdvancementVariables {
    /**
     * @param {number} bookId - Identifiant du livre
     * @param {Storage} storage - Storage JS à utiliser
     */
    constructor(bookId, storage) {
        this._bookId = bookId;
        this._storage = storage;
    }

    /**
     * Récupère une valeur dans le localStorage.
     *
     * @param {string} key - Clé de la variable à récupérer.
     */
    _getItem(key) {
        return this._storage.getItem(`variables_${key}${this._bookId}`);
    }

    /**
     * Stocke une valeur dans le localStorage.
     * @param {string} key - Clé de la variable à récupérer.
     * @param {any} value - Valeur à stocker.
     */
    _setItem(key, value) {
        this._storage.setItem(`variables_${key}${this._bookId}`, value);
    }

    get(item) {
        return this._getItem(item);
    }

    set(item, value) {
        this._setItem(item, value);
    }
}

export default AdvancementVariables;
