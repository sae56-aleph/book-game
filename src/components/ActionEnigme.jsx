import React, { useState } from "react";
import styles from "./ActionEnigme.module.css";
import PropTypes from "prop-types";
import Bouton from "./Bouton";
import Input from "./Input";

const ActionEnigme = ({ onNextChapter, target }) => {
  const [error, setError] = useState("");
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setContent(inputValue);
  };

  const handleSubmit = () => {
    if (content === "TODO") {
      onNextChapter(target);
    } else {
      setError(
        "Arf ! La réponse que vous avez indiqué est mauvaise ! Essayer à nouveau."
      );
    }
  };

  return (
    <div>
      <div className={`${styles.field}`}>
        <Input
          placeholder="Inscrivez votre réponse"
          onChange={handleInputChange}
          value={content}
          style={{ borderColor: error ? "red" : "" }}
        />
        <Bouton text="Valider" onClick={handleSubmit} />
      </div>
      {error && <div className={`${styles.error}`}>{error}</div>}
    </div>
  );
};

ActionEnigme.propTypes = {
  onNextChapter: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
};

export default ActionEnigme;
