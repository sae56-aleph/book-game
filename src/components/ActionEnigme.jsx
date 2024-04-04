import React, { useEffect, useState } from "react";
import styles from "./ActionEnigme.module.css";
import PropTypes from "prop-types";
import Bouton from "./Bouton";
import Input from "./Input";

const ERROR_MESSAGE =
  "Arf ! La réponse que vous avez indiqué est mauvaise ! Essayer à nouveau.";

const ActionEnigme = ({ onNextChapter, target, id }) => {
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setContent(inputValue);
  };

  useEffect(() => {
    if (!submitted) return;

    const url = new URL(`levenshtein/${id}`, import.meta.env.VITE_API_URL);
    const params = new URLSearchParams({ guessEnigme: content });
    const options = {
      method: "POST",
      body: params,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.valide) {
          onNextChapter(target);
          return;
        }

        setError(ERROR_MESSAGE);
        setSubmitted(false);
      });
  }, [submitted]);

  return (
    <div>
      <div className={`${styles.field}`}>
        <Input
          placeholder="Inscrivez votre réponse"
          onChange={handleInputChange}
          value={content}
          style={{ borderColor: error ? "red" : "" }}
        />
        <Bouton text="Valider" onClick={() => setSubmitted(true)} />
      </div>
      {error && <div className={`${styles.error}`}>{error}</div>}
    </div>
  );
};

ActionEnigme.propTypes = {
  onNextChapter: PropTypes.func.isRequired,
  target: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ActionEnigme;
