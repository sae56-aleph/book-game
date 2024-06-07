import React from "react";
import styles from "./Bouton.module.css";
import HighContrastIcon from "../icons/contrast-fill.svg?react";
import Bouton from "./Bouton";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */

const HighContrastBouton = ({ toggleHighContrast }) => {
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
