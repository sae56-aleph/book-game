import React from "react";
import styles from "./Home.module.css";
import Bouton from "../components/Bouton.jsx";
import Titre from "../components/Titre.jsx";
import ArrowRight from "../icons/arrow-right-line.svg?react";
import ArrowGoBack from "../icons/arrow-go-back-line.svg?react";
import useLivreContext from "../hooks/useLivreContext.js";
import { useNavigate } from "react-router-dom";
import useAdvancement from "../hooks/useAdvancement.js";

/**
 * Page d'accueil
 * @author Simon FOUCHET
 */
function HomePage() {
  const advancement = useAdvancement();
  const livre = useLivreContext();
  const navigate = useNavigate();

  const storyStarts = advancement !== null && advancement?.chapterId !== null;

  const handleNavigate = (target) => {
    navigate(`/chapitre/${target}`);
  };

  const handleRestart = () => {
    advancement.reset();
    handleNavigate(livre?.intro);
  };

  console.log(livre);

  return (
    <div className={`${styles.homePage}`}>
      <Titre
        level={0}
        text={livre?.nom || "..."}
        className={`${styles.textWhite}`}
        style={{ textAlign: "center" }}
      />
      <hr className={styles.separator} />
      {!storyStarts && (
        <div>
          <Bouton
            text="Commencer l’aventure"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => handleNavigate(livre?.intro)}
          />
        </div>
      )}
      {storyStarts && (
        <div className={styles.buttons}>
          <Bouton
            text="Continuer l’aventure"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => handleNavigate(advancement.chapterId)}
          />
          <Bouton
            text="Recommencer l’aventure"
            icon={ArrowGoBack}
            iconPosition="right"
            onClick={handleRestart}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
