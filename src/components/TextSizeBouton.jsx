import React from "react";
import Plus from "../icons/add-line.svg?react";
import Minus from "../icons/subtract-line.svg?react";
import TextSizeIcon from "../icons/font-size.svg?react";
import useKeyboard from "../hooks/useKeyboard";
import Bouton from "./Bouton";

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
      <Bouton onClick={onDecrease} style={buttonStyle} icon={Minus} />
      <TextSizeIcon style={{ marginLeft: "1em" }} height={18} width={18} />
      <Bouton onClick={onIncrease} style={buttonStyle} icon={Plus} />
    </>
  );
};

export default TextSizeBouton;
