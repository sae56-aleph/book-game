import styles from "./Bouton.module.css";
import React from "react";
import PropTypes from "prop-types";
import useHighContrast from "../hooks/useHighContrast";

/**
 * Bouton
 * @author Simon FOUCHET
 */
const Bouton = ({
  text,
  className,
  icon: Icon,
  iconPosition = "left",
  isDisabled = false,
  ...props
}) => {
  const { highContrast } = useHighContrast();
  const hightContrastClass = highContrast ? styles.high_contrast : "";
  const disabledClass = isDisabled ? styles.disabled : "";
  const boutonClass = `${styles.bouton} ${disabledClass} ${hightContrastClass} ${className}`;

  return (
    <button className={boutonClass} disabled={isDisabled} {...props}>
      {Icon && iconPosition === "left" && <Icon height={18} width={18} />}
      {text}
      {Icon && iconPosition === "right" && <Icon height={18} width={18} />}
    </button>
  );
};

Bouton.propTypes = {
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Bouton;
