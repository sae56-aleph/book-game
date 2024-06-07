import React, { useEffect, useState } from "react";
import Plus from "../icons/add-line.svg?react";
import Minus from "../icons/subtract-line.svg?react";
import TextSizeIcon from "../icons/font-size.svg?react";
import useKeyboard from "../hooks/useKeyboard";
import Bouton from "./Bouton";

/**
 * Text Size Bouton
 * @author Simon FOUCHET
 */
const TextSizeBouton = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const element = document.documentElement;
    element.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 1, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 1, 12));

  const buttonStyle = { marginBottom: 14, marginLeft: "1em" };

  useKeyboard([65], decreaseFontSize);
  useKeyboard([90], increaseFontSize);

  return (
    <>
      <Bouton onClick={decreaseFontSize} style={buttonStyle} icon={Minus} />
      <TextSizeIcon style={{ marginLeft: "1em" }} height={18} width={18} />
      <Bouton onClick={increaseFontSize} style={buttonStyle} icon={Plus} />
    </>
  );
};

export default TextSizeBouton;
