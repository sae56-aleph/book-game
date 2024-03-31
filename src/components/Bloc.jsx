import styles from "./Bloc.module.css";
import React from "react";
import PropTypes from "prop-types";

const Bloc = ({ children }) => {
  return <div className={`${styles.bloc}`}>{children}</div>;
};

Bloc.propTypes = {
  children: PropTypes.node,
};

export default Bloc;
