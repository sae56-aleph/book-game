import React from "react";
import styles from "./Bouton.module.css";
import HighContrastIcon from "../icons/contrast-fill.svg?react";
import Bouton from "./Bouton";
import useHighContrast from "../hooks/useHighContrast";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */

const HighContrastBouton = () => {
  const { toggleHighContrast } = useHighContrast();

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
