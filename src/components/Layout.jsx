import styles from "./Layout.module.css";
import PropTypes from "prop-types";

const Layout = ({ children, style }) => {
  return (
    <div className={styles.layout} style={style}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Layout;
