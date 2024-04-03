import PropTypes from "prop-types";
import { LivreContext } from "./LivreContext";
import { useState } from "react";

const LivreProvider = ({ children }) => {
  const [data, setData] = useState({
    id: null,
    variables: [],
  });

  const contextValue = {
    bookId: data.id,
    bookVariables: data.variables,
    setData,
  };

  return (
    <LivreContext.Provider value={contextValue}>
      {children}
    </LivreContext.Provider>
  );
};

LivreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LivreProvider;
