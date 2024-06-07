import styles from "./ActionSimple.module.css";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import useKeyboard from "../hooks/useKeyboard";
import useHighContrast from "../hooks/useHighContrast";

/**
 * Action simple
 * @author Simon FOUCHET
 */
const ActionSimple = ({ tabIndex, target, text, onClick }) => {
  const ref = useRef(null);
  const { highContrast } = useHighContrast();
  useKeyboard([49 + tabIndex, 97 + tabIndex], () => ref.current?.focus());

  const highContrastStyle = highContrast ? styles.high_contrast : "";
  const actionClass = `${styles.action_simple} ${highContrastStyle}`;

  const handleClick = () => {
    onClick(target);
  };

  return (
    <button ref={ref} className={actionClass} onClick={handleClick}>
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
