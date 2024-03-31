import styles from "./Titre.module.css";
import React from "react";
import PropTypes from "prop-types";

const Titre = ({ level, text }) => {
  const TagName = `h${Math.min(Math.max(level, 1), 6)}`;

  return (
    <TagName className={`${styles.titre} ${styles["titre" + level]}`}>
      {text}
    </TagName>
  );
};

Titre.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Titre;
