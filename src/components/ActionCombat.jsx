import styles from "./ActionCombat.module.css";
import React, { useEffect, useState } from "react";
import LanceurDe from "./LanceurDe";
import PropTypes from "prop-types";
import useAdvancement from "../hooks/useAdvancement";
import Bouton from "./Bouton";

const QTT_DES_COMBAT = 2;

const RED_COLOR = "#c40000";
const GREEN_COLOR = "#009900";

const Etape = ({ onFinish, title, subject, color }) => {
  const [resultatsDes, setResultatsDes] = useState(
    Array(QTT_DES_COMBAT).fill(null)
  );

  useEffect(() => {
    if (allElementsSet(resultatsDes)) {
      const timeout = setTimeout(() => {
        onFinish(resultatsDes.reduce((partialSum, a) => partialSum + a, 0)); //Somme des dés
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [resultatsDes]);
  return (
    <>
      <h3 className={styles.actionCombat} style={{ textAlign: "center" }}>
        {title + " "}
        <span className={styles.subject} style={{ color: color }}>
          {subject}
        </span>
      </h3>
      <div className={styles.dice}>
        <LanceurDe
          isDisabled={allElementsSet(resultatsDes)}
          onFinish={setResultatsDes}
          qttDes={QTT_DES_COMBAT}
        />
      </div>
    </>
  );
};

const EtapeEnnemi = ({ onFinish }) => {
  return (
    <Etape
      title="Lancer les dés pour votre"
      onFinish={onFinish}
      subject="ennemi"
      color={RED_COLOR}
    />
  );
};

const EtapeJoueur = ({ onFinish }) => {
  const advancement = useAdvancement(10);
  return (
    <Etape
      title="Lancer les dés pour"
      onFinish={(somme) => {
        onFinish(somme + parseInt(advancement.variables.get("FORCE")));
      }}
      subject="vous"
      color={GREEN_COLOR}
    />
  );
};

const ActionCombat = ({ targetSuccess, targetFailure, onNextChapter }) => {
  const [resultatEnnemi, setResultatEnnemi] = useState(null);
  const [resultatJoueur, setResultatJoueur] = useState(null);
  const [etapeJeu, setEtapeJeu] = useState(1);

  const handleFinish = () => {
    if (resultatEnnemi < resultatJoueur) {
      onNextChapter(targetSuccess);
    } else {
      onNextChapter(targetFailure);
    }
  };

  return (
    <>
      {etapeJeu == 1 ? (
        <EtapeEnnemi
          onFinish={(somme) => {
            setResultatEnnemi(somme);
            setEtapeJeu(2);
          }}
        />
      ) : etapeJeu == 2 ? (
        <EtapeJoueur
          onFinish={(somme) => {
            if (somme == resultatEnnemi) {
              setEtapeJeu(1);
            } else {
              setEtapeJeu(3);
            }

            setResultatJoueur(somme);
          }}
        />
      ) : (
        <div
          className={styles.actionCombat}
          tyle={{ display: etapeJeu === 3 ? "block" : "none" }}
        >
          <h2 style={{ textAlign: "center" }}>Résultat</h2>
          <div className={styles.result}>
            <div className={styles.scoreBox}>
              <p>Score de l’ennemi </p>
              <h2 style={{ textAlign: "center" }}>{resultatEnnemi}</h2>
            </div>
            <div className={styles.scoreBox}>
              {resultatEnnemi < resultatJoueur ? <h2>&lt;</h2> : <h2>&gt;</h2>}
            </div>
            <div className={styles.scoreBox}>
              <p>Votre score</p>
              <h2 style={{ textAlign: "center" }}>{resultatJoueur}</h2>
            </div>
          </div>
          <div>
            <Bouton text="Continuer" onClick={handleFinish} />
          </div>
        </div>
      )}
    </>
  );
};

const allElementsSet = (arr) => {
  const nullishElements = arr.filter(
    (element) => element === null || element === undefined
  );

  return nullishElements.length === 0;
};

ActionCombat.propTypes = {
  targetSuccess: PropTypes.string,
  targetFailure: PropTypes.string,
  onNextChapter: PropTypes.func,
};

export default ActionCombat;
