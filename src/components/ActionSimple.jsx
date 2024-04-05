import styles from "./ActionSimple.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Action simple
 * @author Simon FOUCHET
 */
const ActionSimple = ({ target, text, onClick }) => {
  const handleClick = () => {
    onClick(target);
  };

  return (
    <button className={styles.action_simple} onClick={handleClick}>
      {text}
    </button>
  );
};

ActionSimple.propTypes = {
  target: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionSimple;
