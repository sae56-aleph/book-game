import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Speech Bouton
 * @author Simon FOUCHET
 */
const SpeechBouton = ({ icon, onClick }) => {
  const Icon = icon;
  return (
    <button className={`${styles.bouton}`} onClick={onClick}>
      {icon && <Icon height={18} width={18} />}
    </button>
  );
};

SpeechBouton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.any,
};

export default SpeechBouton;
