import PropTypes from "prop-types";
import styles from "./SideStat.module.css";

const SideStatHeader = ({ title, children }) => {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.header}>{title}</p>
      <hr />
      {children}
    </div>
  );
};

SideStatHeader.propTypes = {
  title: PropTypes.string,
};

export default SideStatHeader;
