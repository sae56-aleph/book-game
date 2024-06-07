import PropTypes from "prop-types";
import styles from "./SideStat.module.css";

const SideStatHeader = ({ title, icon, children }) => {
  const Icon = icon;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.iconAndTitleContainer}>
        <Icon height={18} width={18} />
        <p className={styles.header}>{title}</p>
      </div>

      <hr />
      {children}
    </div>
  );
};

SideStatHeader.propTypes = {
  title: PropTypes.string,
};

export default SideStatHeader;
