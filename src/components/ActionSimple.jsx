import styles from "./ActionSimple.module.css";
import React from "react";
import PropTypes from "prop-types";
import useFocusOnKeyboard from "../hooks/useFocusOnKeyboard";

/**
 * Action simple
 * @author Simon FOUCHET
 */
const ActionSimple = ({ tabIndex, target, text, onClick }) => {
  const ref = useFocusOnKeyboard([49 + tabIndex, 97 + tabIndex]);

  const handleClick = () => {
    onClick(target);
  };

  return (
    <button ref={ref} className={styles.action_simple} onClick={handleClick}>
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
