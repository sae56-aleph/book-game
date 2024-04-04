import useAdvancement from "./useAdvancement";

/**
 * Transforme une chaine de caractère contenant des variables d'avancement et l'évalue.
 * @returns
 */
const useEval = () => {
    return (text) => {
        const advancement = useAdvancement();
        const variables = advancement?.variables?.all();
        if (!variables) return null;

        for (const [key, value] of Object.entries(variables)) {
            text = text.replaceAll(key, value);
        }

        text = text.replaceAll("=", "==");
        return eval(text);
    };
};

export default useEval;
