import styles from "./Bouton.module.css";
import React, { useEffect, useState } from "react";
import Plus from "../icons/add-line.svg?react";
import Minus from "../icons/subtract-line.svg?react";
import TextSizeIcon from "../icons/font-size.svg?react";
import useKeyboard from "../hooks/useKeyboard";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */
const TextSizeBouton = ({ onIncrease, onDecrease }) => {
  const buttonStyle = { marginBottom: 14, marginLeft: "1em" };

  useKeyboard([65], onDecrease);
  useKeyboard([90], onIncrease);

  return (
    <>
      <button
        className={styles.bouton}
        style={buttonStyle}
        onClick={onDecrease}
        aria-label="Decrease text size"
        title="Diminuer la taille de la police (A)"
      >
        <Minus height={18} width={18} />
      </button>
      <TextSizeIcon style={{ marginLeft: "1em" }} height={18} width={18} />
      <button
        className={styles.bouton}
        style={buttonStyle}
        onClick={onIncrease}
        aria-label="Increase text size"
        title="Augmenter la taille de la police (Z)"
      >
        <Plus height={18} width={18} />
      </button>
    </>
  );
};

export default TextSizeBouton;
