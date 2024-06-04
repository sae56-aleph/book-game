import styles from "./Bouton.module.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MegaphoneFill from "../icons/megaphone-fill.svg?react";
import PauseLine from "../icons/pause-line.svg?react";
import useAudio from "../hooks/useAudio";

/**
 * Speech Bouton
 * @author Simon FOUCHET
 */
const SpeechBouton = ({ chapterId }) => {
  const [url, setUrl] = useState(null);
  const { isPlaying, togglePlay } = useAudio({ url, eager: false });

  useEffect(() => {
    const url = new URL(
      "section/" + chapterId + "/audio",
      import.meta.env.VITE_API_URL
    );

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUrl("/audio/" + data.audio);
      });
  }, [chapterId]);

  return (
    <button
      className={styles.bouton}
      onClick={() => togglePlay()}
      style={{ marginBottom: 14 }}
    >
      {isPlaying ? (
        <PauseLine height={18} width={18} />
      ) : (
        <MegaphoneFill height={18} width={18} />
      )}
    </button>
  );
};

SpeechBouton.propTypes = {
  chapterId: PropTypes.string.isRequired,
};

export default SpeechBouton;
