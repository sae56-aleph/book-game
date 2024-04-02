import React from "react";
import styles from "./Home.module.css";
import Bouton from "../components/Bouton.jsx";
import Titre from "../components/Titre.jsx";
import ArrowRight from "../icons/arrow-right-line.svg?react";
import ArrowGoBack from "../icons/arrow-go-back-line.svg?react";

function HomePage() {
  const storyStarts = true;

  const h1 = {
    margin: "0 auto",
  };

  const direction = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div className={`${styles.homePage}`}>
      <Titre
        level={0}
        text="Alice au pays des Merveilles"
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
          />
        </div>
      )}
      {storyStarts && (
        <div className={styles.buttons}>
          <Bouton
            text="Continuer l’aventure"
            icon={ArrowRight}
            iconPosition="right"
          />
          <Bouton
            text="Commencer l’aventure"
            icon={ArrowGoBack}
            iconPosition="right"
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
