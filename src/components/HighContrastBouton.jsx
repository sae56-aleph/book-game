import React from "react";
import styles from "./Bouton.module.css";
import HighContrastIcon from "../icons/contrast-fill.svg?react";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */

const HighContrastBouton = ({ toggleHighContrast }) => {
  return (
    <button
      onClick={toggleHighContrast}
      className={styles.bouton}
      style={{ marginBottom: 14 }}
    >
      <HighContrastIcon height={18} width={18} />
    </button>
  );
};

export default HighContrastBouton;
