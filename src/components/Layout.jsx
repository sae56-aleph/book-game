import styles from "./Layout.module.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
