import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";

const Bouton = ({
  text,
  onClick,
  icon,
  iconPosition = "left",
  isDisabled = false,
}) => {
  const Icon = icon;

  return (
    <button
      className={`${styles.bouton} ${isDisabled && styles.disabled}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && iconPosition === "left" && <Icon height={18} width={18} />}
      {text}
      {icon && iconPosition === "right" && <Icon height={18} width={18} />}
    </button>
  );
};

Bouton.propTypes = {
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Bouton;
