import React from "react";
import PropTypes from "prop-types";

const PageActionSimple = ({
  chapterName,
  previousChapterName,
  text,
  image,
  actions,
  onNextChapter,
}) => {};

PageActionSimple.propTypes = {
  chapterName: PropTypes.string,
  previousChapterName: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.array,
  onNextChapte: PropTypes.func,
};
