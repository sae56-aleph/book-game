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
        return this._storage.getItem(`variables_${this._bookId}_${key}`);
    }

    /**
     * Stocke une valeur dans le localStorage.
     * @param {string} key - Clé de la variable à récupérer.
     * @param {any} value - Valeur à stocker.
     */
    _setItem(key, value) {
        this._storage.setItem(`variables_${this._bookId}_${key}`, value);
    }

    get(item) {
        return this._getItem(item);
    }

    set(item, value) {
        this._setItem(item, value);
    }

    /**
     * Met à jour la variable que si elle n'existe pas
     */
    init(item, value) {
        if (this.get(item) === null) {
            this.set(item, value);
        }
    }

    /**
     * Réinitialise toutes les variables de ce livre
     */
    reset() {
        for (let i = 0; i < this._storage.length; i++) {
            const key = this._storage.key(i);
            if (key.startsWith(`variables_${this._bookId}_`)) {
                this._storage.removeItem(key);
            }
        }
    }

    /**
     * Récupère tous les noms des variables de ce livre
     */
    all() {
        const result = {};
        for (let i = 0; i < this._storage.length; i++) {
            const key = this._storage.key(i);
            if (key.startsWith(`variables_${this._bookId}_`)) {
                const variable = key.split("_")[2];
                result[variable] = this._storage.getItem(key);
            }
        }

        return result;
    }
}

export default AdvancementVariables;
