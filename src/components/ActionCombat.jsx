import styles from "./ActionCombat.module.css";
import React, { useEffect, useState } from "react";
import LanceurDe from "./LanceurDe";
import PropTypes from "prop-types";
import useAdvancement from "../hooks/useAdvancement";
import Bouton from "./Bouton";

const Etape = ({ onFinish, title }) => {
  const [resultatD1, setResultatD1] = useState(null);
  const [resultatD2, setResultatD2] = useState(null);

  useEffect(() => {
    if (resultatD1 && resultatD2) {
      const timeout = setTimeout(() => {
        onFinish(resultatD1 + resultatD2);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [resultatD1, resultatD2]);
  return (
    <>
      <h3 className={styles.actionCombat} style={{ textAlign: "center" }}>
        {title}
      </h3>
      <div className={styles.dice}>
        <LanceurDe isDisabled={resultatD1 != null} onFinish={setResultatD1} />
        <LanceurDe isDisabled={resultatD2 != null} onFinish={setResultatD2} />
      </div>
    </>
  );
};

const EtapeEnnemi = ({ onFinish }) => {
  return <Etape title="Lancer les dés pour votre ennemi" onFinish={onFinish} />;
};

const EtapeJoueur = ({ onFinish }) => {
  const advancement = useAdvancement(10);
  return (
    <Etape
      title="Lancer les dés pour vous"
      onFinish={(somme) => {
        onFinish(somme + parseInt(advancement.variables.get("FORCE")));
      }}
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

ActionCombat.propTypes = {
  targetSuccess: PropTypes.string,
  targetFailure: PropTypes.string,
  onNextChapter: PropTypes.func,
};

export default ActionCombat;
