import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Titre
 * @author Simon FOUCHET
 */
const Bouton = ({
  text,
  onClick,
  icon,
  iconPosition = "left",
  isDisabled = false,
  className,
}) => {
  const Icon = icon;

  return (
    <button
      className={`${styles.bouton} ${
        isDisabled && styles.disabled
      } ${className}`}
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
  className: PropTypes.string,
};

export default Bouton;
