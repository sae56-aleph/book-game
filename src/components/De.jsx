import React from "react";
import PropTypes from "prop-types";
import Dice1Line from "../icons/dice-1-line.svg?react";
import Dice2Line from "../icons/dice-2-line.svg?react";
import Dice3Line from "../icons/dice-3-line.svg?react";
import Dice4Line from "../icons/dice-4-line.svg?react";
import Dice5Line from "../icons/dice-5-line.svg?react";
import Dice6Line from "../icons/dice-6-line.svg?react";

const faces = {
  1: Dice1Line,
  2: Dice2Line,
  3: Dice3Line,
  4: Dice4Line,
  5: Dice5Line,
  6: Dice6Line,
};

const De = ({ face, width = 100, height = 100 }) => {
  const Face = faces[face];
  return <Face height={height} width={width} />;
};

De.propTypes = {
  face: PropTypes.oneOf(Object.keys(faces)).isRequired,
  width: PropTypes.number,
  heigt: PropTypes.number,
};

export default De;
