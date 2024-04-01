import styles from "./LanceurDe.module.css";
import PropTypes from "prop-types";
import useRollDice from "../hooks/useRollDice";
import Bouton from "./Bouton";
import De from "./De";
import DiceFillIcon from "../icons/dice-line.svg?react";

/**
 * Affiche un dé et le bouton pour le lancer
 * @author Enzo MAROS
 */
const LanceurDe = ({ onFinish }) => {
  const { face, rolling, start } = useRollDice(onFinish);

  return (
    <div className={styles.actionDe}>
      <Bouton
        icon={DiceFillIcon}
        text={rolling ? "Lancement..." : "Lancer le dé"}
        onClick={() => start()}
        isDisabled={rolling}
      />
      <De face={face.toString()} />
    </div>
  );
};

LanceurDe.propTypes = {
  onFinish: PropTypes.func,
};

export default LanceurDe;
