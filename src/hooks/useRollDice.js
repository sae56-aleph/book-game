/**
 * @file Gère l'ensemble des fonction permettant à un dé de tourner en s'animant.
 * @author Enzo MAROS
 *
 * @typedef {Object} RollDice - Interface pour lancer un dé, animer son roulement et obtenir le résultat final
 * @property {number} face - La face du dé
 * @property {boolean} rolling - L'état de l'animation (true si le dé est en train de rouler)
 * @property {Function} start - Fonction pour démarrer l'animation
 */

import { useEffect, useState } from "react";

/** Nombre de roulements durant l'animation */
const MAX_ROLLS = 15;
/** Temps en ms ajouté entre chaque roulement */
const DELAY_FACTOR = 40;

/**
 * Retourne un nombre aléatoire entier entre min et max inclus.
 * @param {number} min - La borne inférieure
 * @param {number} max - La borne supérieure
 * @returns {number}
 */
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Retourne un nombre aléatoire nécessairement différent de previous.
 * @param {number} min - La borne inférieure
 * @param {number} max - La borne supérieure
 * @param {number} previous - La valeur à éviter
 * @returns {number}
 */
function randomUntilDifferent(min, max, previous) {
    let next;
    do {
        next = randomBetween(min, max);
    } while (next === previous);

    return next;
}

/**
 * Offre une interface simple pour lancer un dé, animer son roulement et obtenir le résultat final.
 * @param {Function} onFinish - Callback appelée lorsque le dé tombe sur sa valeur finale
 * @returns {RollDice}
 */
function useRollDice(onFinish) {
    const [face, setFace] = useState(1);
    const [rolling, setRolling] = useState(false);
    const [remainingRolls, setRemainingRolls] = useState(null);

    const roll = () => {
        const newFace = randomUntilDifferent(1, 6, face);
        setFace(Math.floor(newFace));
        setRemainingRolls(remainingRolls - 1);
    };

    const start = () => {
        // Ne pas relancer le dé s'il est déjà en train de rouler
        if (rolling) return;

        setRolling(true);
        setRemainingRolls(MAX_ROLLS);
    };

    // Le useEffect est déclanché à chaque fois que remainingRolls change
    useEffect(() => {
        console.log("remainingRolls", remainingRolls)

        if (remainingRolls == null) return;
        if (remainingRolls === 0) {
            // Arrêter le dé et prévenir le parent que le dé a fini de rouler
            setRolling(false);
            onFinish(face);
            return;
        }

        // Lancer le dé de plus en plus lentement jusqu'à ce qu'il s'arrête
        const delay = (MAX_ROLLS - remainingRolls + 1) * DELAY_FACTOR;
        const timeout = setTimeout(roll, delay);
        return () => clearTimeout(timeout);
    }, [remainingRolls]);

    return {
        face,
        rolling,
        start,
    };
}

export default useRollDice;
