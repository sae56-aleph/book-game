import PropTypes from "prop-types";
import { LivreContext } from "./LivreContext";

const LivreProvider = ({ children }) => {
  const [bookId, setBookId] = useState(null);
  const [bookVariables, setBookVariables] = useState([]);

  const contextValue = {
    bookId,
    setBookId,
    bookVariables,
    setBookVariables,
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
