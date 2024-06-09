import styles from "./LanceurDe.module.css";
import PropTypes from "prop-types";
import useRollDice from "../hooks/useRollDice";
import Bouton from "./Bouton";
import De from "./De";
import DiceFillIcon from "../icons/dice-line.svg?react";
import React from "react";
import useKeyboard from "../hooks/useKeyboard";

/**
 * Affiche un dé et le bouton pour le lancer
 * @author Enzo MAROS
 */
const LanceurDe = ({ qttDes, onFinish, isDisabled }) => {
  const { faces, rolling, start } = useRollDice(qttDes, onFinish);
  useKeyboard([32], start);

  return (
    <div className={styles.actionDe}>
      <Bouton
        icon={DiceFillIcon}
        text={rolling ? "Lancement..." : "Lancer les dés"}
        onClick={() => start()}
        isDisabled={rolling || isDisabled}
      />
      <div className={styles.dicesContainer}>
        {faces.map((f, index) => (
          <De key={index} face={f.toString()} />
        ))}
      </div>
    </div>
  );
};

LanceurDe.propTypes = {
  onFinish: PropTypes.func,
  qttDes: PropTypes.number.isRequired,
};

export default LanceurDe;
