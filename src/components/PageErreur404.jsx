import React from "react";
import PropTypes from "prop-types";
import styles from "./PageErreur404.module.css";

const PageError404 = () => {
  return (
    <div className={styles.containerError}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  );
};

export default PageError404;
