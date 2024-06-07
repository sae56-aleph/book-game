import styles from "./Bloc.module.css";
import React from "react";
import PropTypes from "prop-types";
import useHighContrast from "../hooks/useHighContrast";

/**
 * Permet d'afficher le contenu du chapitre (texte, image)
 * @author Alexie GROSBOIS
 */

const Bloc = ({ children, className, style }) => {
  const { highContrast } = useHighContrast();

  const highContrastClass = highContrast ? styles.high_contrast : "";
  const blocClass = `${styles.bloc} ${highContrastClass} ${className}`;

  return (
    <div className={blocClass} style={style}>
      {children}
    </div>
  );
};

Bloc.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.string,
};

export default Bloc;
