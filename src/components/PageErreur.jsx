import React from "react";
import PropTypes from "prop-types";
import styles from "./PageErreur.module.css";

const PageErreur = () => {
  return (
    <div className={styles.containerError}>
      <h1>Erreur</h1>
      <p>Une erreur interne s'est produite.</p>
    </div>
  );
};

export default PageErreur;
