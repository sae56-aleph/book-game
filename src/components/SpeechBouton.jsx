import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MegaphoneFill from "../icons/megaphone-fill.svg?react";
import PauseLine from "../icons/pause-line.svg?react";
import useAudio from "../hooks/useAudio";
import Chargement from "./Chargement";
import useKeyboard from "../hooks/useKeyboard";
import Bouton from "./Bouton";

/**
 * Speech Bouton
 * @author Simon FOUCHET
 */
const SpeechBouton = ({ chapterId }) => {
  const [url, setUrl] = useState(null);
  const { isPlaying, isLoading, togglePlay } = useAudio({ url, eager: false });

  useKeyboard([84], togglePlay);

  useEffect(() => {
    const path = "section/" + chapterId + "/audio";
    const url = new URL(path, import.meta.env.VITE_API_URL);

    setUrl(url.toString());
  }, [chapterId]);

  return (
    <Bouton
      onClick={() => togglePlay()}
      style={{ marginBottom: 14 }}
      icon={isLoading ? Chargement : isPlaying ? PauseLine : MegaphoneFill}
    />
  );
};

SpeechBouton.propTypes = {
  chapterId: PropTypes.string.isRequired,
};

export default SpeechBouton;
