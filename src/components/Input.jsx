import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
