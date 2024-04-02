import PropTypes from "prop-types";
import Bouton from "./Bouton";
import React from "react";
import styles from "./Tab.module.css";

/**
 * Bouton permettant de passer d'un onglet à l'autre
 * @author Alexie GROSBOIS
 */

const Tab = ({ text, icon, selected = false, onClick }) => {
  return (
    <>
      <Bouton
        text={text}
        icon={icon}
        onClick={onClick}
        iconPosition="left"
        isDisabled={selected}
        className={selected ? styles.selected : styles.boutonPink}
      />
    </>
  );
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Tab;
