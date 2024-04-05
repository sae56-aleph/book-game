import styles from "./Bouton.module.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MegaphoneFill from "../icons/megaphone-fill.svg?react";
import PauseLine from "../icons/pause-line.svg?react";

/**
 * Speech Bouton
 * @author Simon FOUCHET
 */
const SpeechBouton = ({ chapterId }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio !== null) {
      audio.pause();
      setIsPlaying(false);
    }

    const url = new URL(
      "section/" + chapterId + "/audio",
      import.meta.env.VITE_API_URL
    );

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const audio = new Audio("/audio/" + data.audio);
        audio.addEventListener("ended", () => setIsPlaying(false));

        setAudio(audio);
      });
  }, [chapterId]);

  const handleClick = () => {
    if (audio === null) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      className={`${styles.bouton} ${audio === null ? styles.disabled : ""}`}
      onClick={handleClick}
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
