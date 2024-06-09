import PropTypes from "prop-types";
import React, { useState } from "react";
import Tab from "./Tab";
import Bloc from "./Bloc";
import styles from "./TabContainer.module.css";

/**
 * Prends en paramètre un tableau avec des objets
 * @author Alexie GROSBOIS
 */
const TabContainer = ({ tabs, onTabClick, style }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnClick = (index) => {
    setSelectedIndex(index);
    onTabClick(index);
  };

  return (
    <div className="showNarrow" style={style}>
      <div className={styles.onglet} style={style}>
        {tabs.map((tab, index) => (
          <Tab
            text={tab.title}
            icon={tab.icon}
            selected={index == selectedIndex}
            onClick={() => handleOnClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

TabContainer.propTypes = {
  tabs: PropTypes.array.isRequired,
  style: PropTypes.string,
};

export default TabContainer;
