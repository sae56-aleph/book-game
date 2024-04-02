import React from "react";
import ActionDe from "./ActionDe";
import PropTypes from "prop-types";
import ActionSimple from "./ActionSimple";

const Action = ({ type, onNextChapter, options }) => {
  const renderActionComponent = () => {
    switch (type) {
      case "de":
        return <ActionDe onNextChapter={onNextChapter} {...options} />;
      case "simple":
        return <ActionSimple onNextChapter={onNextChapter} {...options} />;
      default:
        throw new Error(`Type d'action inconnu : ${type}`);
    }
  };

  return renderActionComponent();
};

ActionDe.propTypes = {
  type: PropTypes.string,
  options: PropTypes.object,
  onNextChapter: PropTypes.func,
};

export default Action;
