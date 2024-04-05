import styles from "./Titre.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Titre
 * @author Simon FOUCHET
 */
const Titre = ({ level, text, className }) => {
  const TagName = `h${Math.min(Math.max(level, 1), 6)}`;

  return (
    <TagName
      className={`${styles.titre} ${styles["titre" + level]} ${className}`}
    >
      {text}
    </TagName>
  );
};

Titre.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Titre;
