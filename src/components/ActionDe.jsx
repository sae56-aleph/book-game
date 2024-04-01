import LanceurDe from "./LanceurDe";
import PropTypes from "prop-types";

/**
 * Action aléatoire avec un dé
 * @author Enzo MAROS
 */
const ActionDe = ({ targetSuccess, targetFailure, onNextChapter }) => {
  // TODO: Implémenter la logique pour choisir la bonne target en fonction du résultat du dé
  return <LanceurDe onFinish={() => onNextChapter(targetSuccess)} />;
};

ActionDe.propTypes = {
  targetSuccess: PropTypes.string,
  targetFailure: PropTypes.string,
  onNextChapter: PropTypes.func,
};

export default ActionDe;
