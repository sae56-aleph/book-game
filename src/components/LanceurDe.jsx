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
const LanceurDe = ({ onFinish, isDisabled }) => {
  const { face, rolling, start } = useRollDice(onFinish);
  useKeyboard([32], start);

  return (
    <div className={styles.actionDe}>
      <Bouton
        icon={DiceFillIcon}
        text={rolling ? "Lancement..." : "Lancer le dé"}
        onClick={() => start()}
        isDisabled={rolling || isDisabled}
      />

      <De face={face.toString()} />
    </div>
  );
};

LanceurDe.propTypes = {
  onFinish: PropTypes.func,
};

export default LanceurDe;
