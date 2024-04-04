import { useEffect, useState } from "react";
import useEval from "../hooks/useEval";
import LanceurDe from "./LanceurDe";
import PropTypes from "prop-types";

/**
 * Action aléatoire avec un dé
 * @author Enzo MAROS
 */
const ActionDe = ({
  threshold,
  targetSuccess,
  targetFailure,
  onNextChapter,
}) => {
  const [value, setValue] = useState(null);
  const variableEval = useEval();
  const thresholdValue = variableEval(threshold);

  useEffect(() => {
    if (value === null) return;

    setTimeout(() => {
      if (value <= thresholdValue) {
        console.log("success");
        onNextChapter(targetSuccess);
      } else {
        console.log("failure");
        onNextChapter(targetFailure);
      }
    }, 2000);
  }, [value]);

  return <LanceurDe onFinish={setValue} isDisabled={value !== null} />;
};

ActionDe.propTypes = {
  threshold: PropTypes.string.isRequired,
  targetSuccess: PropTypes.string.isRequired,
  targetFailure: PropTypes.string.isRequired,
  onNextChapter: PropTypes.func,
};

export default ActionDe;
