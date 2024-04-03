import PropTypes from "prop-types";
import React, { useState } from "react";
import Tab from "./Tab";
import Bloc from "./Bloc";
import styles from "./TabContainer.module.css";

/**
 * Prends en paramètre un tableau avec des objets
 * @author Alexie GROSBOIS
 */
const TabContainer = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <div className={styles.onglet}>
        {tabs.map((tab, index) => (
          <Tab
            text={tab.title}
            icon={tab.icon}
            selected={index == selectedIndex}
            onClick={() => setSelectedIndex(index)}
            key={index}
          />
        ))}
      </div>
      <Bloc>{tabs[selectedIndex].content}</Bloc>
    </div>
  );
};

TabContainer.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default TabContainer;
