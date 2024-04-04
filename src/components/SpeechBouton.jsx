import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";
// import MegaPhone from "../../../icons/megaphone-fill.svg?react";

/**
 * Bouton
 * @author Simon FOUCHET
 */
const SpeechBouton = ({ onClick }) => {
  return (
    <button className={`${styles.bouton}`} onClick={onClick}>
      {/* <MegaPhone /> */}
    </button>
  );
};

SpeechBouton.propTypes = {
  onClick: PropTypes.func,
};

export default SpeechBouton;
