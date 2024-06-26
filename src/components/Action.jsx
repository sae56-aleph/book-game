import React from "react";
import ActionDe from "./ActionDe";
import PropTypes from "prop-types";
import ActionSimple from "./ActionSimple";
import ActionEnigme from "./ActionEnigme";
import ActionCombat from "./ActionCombat";
import useEval from "../hooks/useEval";

/**
 * Action appelle l'action demander
 * @author Simon FOUCHET
 */
const Action = ({ type, tabIndex, onNextChapter, options }) => {
  const conditionEval = useEval();

  switch (type) {
    case "DE":
      return (
        <ActionDe
          onNextChapter={onNextChapter}
          targetFailure={options.destinationEchec}
          targetSuccess={options.destination}
          threshold={options.seuil}
        />
      );
    case "SIMPLE":
      return (
        <ActionSimple
          onClick={onNextChapter}
          target={options.destination}
          text={options.label}
          tabIndex={tabIndex}
        />
      );
    case "CONDITION":
      if (conditionEval(options.condition)) {
        return (
          <ActionSimple
            onClick={onNextChapter}
            target={options.destination}
            text={options.label}
          />
        );
      } else {
        return <></>;
      }
    case "ENIGME":
      return (
        <ActionEnigme
          id={options.idEnigme}
          onNextChapter={onNextChapter}
          target={options.destination}
        />
      );
    case "COMBAT":
      return (
        <ActionCombat
          onNextChapter={onNextChapter}
          targetFailure={options.destinationEchec.toString()}
          targetSuccess={options.destination.toString()}
        />
      );
    default:
      throw new Error(`Type d'action inconnu : ${type}`);
  }
};

ActionDe.propTypes = {
  type: PropTypes.string,
  options: PropTypes.object,
  onNextChapter: PropTypes.func,
};

export default Action;
