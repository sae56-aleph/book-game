import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";

const Bouton = ({ text, onClick, isDisabled = false }) => {
  return (
    <button
      className={`${styles.bouton} ${isDisabled && styles.disabled}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

Bouton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Bouton;
