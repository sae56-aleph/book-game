import { useEffect, useState } from "react";

/**
 * @typedef {Object} AudioHook
 * @property {Function} play - Lancer la lecture de l'audio.
 * @property {Function} pause - Mettre en pause la lecture de l'audio.
 * @property {Function} togglePlay - Basculer entre lecture et pause.
 * @property {Function} isLoading - Indique si l'audio est en cours de chargement.
 * @property {Function} isPlaying - Indique si l'audio est en cours de lecture.
 */

/**
 * @typedef {Object} AudioSettings
 * @property {?string} url - URL de l'audio à jouer.
 * @property {boolean} eager - True si l'audio doit être chargé immédiatement.
 */

/**
 * Hook pour gérer la lecture d'un audio.
 *
 * @param {AudioSettings}
 * @returns {AudioHook}
 */
const useAudio = ({ url, eager = false }) => {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadAudio = () => {
        return new Promise((resolve) => {
            setIsLoading(true);
            const audio = new Audio(url);

            audio.addEventListener("ended", () => setIsPlaying(false));
            audio.addEventListener("canplaythrough", () => {
                setIsLoading(false);
                resolve(audio);
            });
        });
    };

    const play = async () => {
        if (!audio) {
            var audio = await loadAudio();
            setAudio(audio);
        }

        audio.play();
        setIsPlaying(true);
    };

    const pause = () => {
        if (!audio) return;

        audio.pause();
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (!url) return;

        if (isPlaying) pause();
        else play();
    };

    useEffect(() => {
        if (isPlaying) pause();

        setAudio(null);
        setIsPlaying(false);
        setIsLoading(false);

        if (eager && url) loadAudio();
    }, [url]);

    return { isLoading, isPlaying, togglePlay };
};

export default useAudio;
