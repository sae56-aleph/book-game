import PropTypes from "prop-types";
import { LivreContext } from "./LivreContext";
import { useEffect, useState } from "react";

const LivreProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // Initialisation du livre dans le .env
  const url = new URL(
    "book/" + import.meta.env.VITE_BOOK_SLUG,
    import.meta.env.VITE_API_URL
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <LivreContext.Provider value={data}>{children}</LivreContext.Provider>;
};

LivreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LivreProvider;
