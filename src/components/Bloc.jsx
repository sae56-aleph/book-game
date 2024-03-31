import styles from "./Bloc.module.css";
import React from "react";
import PropTypes from "prop-types";

const Bloc = ({ children, className }) => {
  return <div className={`${styles.bloc} ${className}`}>{children}</div>;
};

Bloc.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Bloc;
