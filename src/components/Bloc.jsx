import styles from "./Bloc.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Permet d'afficher le contenu du chapitre (texte, image)
 * @author Alexie GROSBOIS
 */

const Bloc = ({ children, className }) => {
  return <div className={`${styles.bloc} ${className}`}>{children}</div>;
};

Bloc.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Bloc;
