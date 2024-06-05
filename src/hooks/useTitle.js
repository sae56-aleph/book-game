import { useEffect } from "react";

/**
 * Permet de récupérer le titre des chapitres afin de les afficher pour l'onglet web
 * @author Alexie Grosbois
 */
const useTitle = (text) => { 
    useEffect(() => {
        document.title = text;
      }, [text]);
}

export default useTitle;