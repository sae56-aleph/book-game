import React from "react";
import styles from "./Bouton.module.css";
import HighContrastIcon from "../icons/contrast-fill.svg?react";
import Bouton from "./Bouton";
import useHighContrast from "../hooks/useHighContrast";
import useKeyboard from "../hooks/useKeyboard";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */

const HighContrastBouton = () => {
  const { toggleHighContrast } = useHighContrast();
  useKeyboard([67], toggleHighContrast);

  return (
    <Bouton
      onClick={toggleHighContrast}
      className={styles.bouton}
      style={{ marginBottom: 14 }}
      icon={HighContrastIcon}
    />
  );
};

export default HighContrastBouton;
