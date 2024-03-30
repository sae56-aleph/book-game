import styles from "./Image.module.css";
import React from "react";
import PropTypes from "prop-types";

const Image = ({ url, height, width }) => {
  return (
    <div style={{ height, width }} className={styles.container}>
      <img src={url} alt="image" className={styles.image} />
    </div>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Image;
