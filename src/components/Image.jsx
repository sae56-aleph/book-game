import styles from "./Image.module.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * Image
 * @author Simon FOUCHET
 */
const Image = ({ url, fallbackUrl, alt, height, width }) => {
  return (
    <div style={{ height, width }} className={styles.container}>
      <object data={url} title={alt} type="image/png" className={styles.image}>
        {fallbackUrl && <img src={fallbackUrl} className={styles.image} />}
      </object>
    </div>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Image;
