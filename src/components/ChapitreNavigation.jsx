import Action from "./Action";
import Bloc from "./Bloc";
import Bouton from "./Bouton";
import ArrowGoBack from "../icons/arrow-go-back-line.svg?react";
import styles from "./ChapitreNavigation.module.css";
import useAdvancement from "../hooks/useAdvancement";
import useLivreContext from "../hooks/useLivreContext";
import { useNavigate } from "react-router-dom";

export default function ChapitreNavigation({ actions, ...props }) {
  const advancement = useAdvancement();
  const livre = useLivreContext();
  const navigate = useNavigate();

  const handleNavigate = (target) => {
    navigate(`/chapitre/${target}`);
  };

  const handleRestart = () => {
    advancement.reset();
    handleNavigate(livre?.intro);
  };

  return (
    <Bloc {...props}>
      <div className={styles.actionContainer}>
        {actions.length > 0 ? (
          actions.map((action, index) => (
            <Action
              key={index}
              tabIndex={index}
              options={action}
              type={action.type}
              onNextChapter={(target) => handleNavigate(target)}
            />
          ))
        ) : (
          <Bouton
            text="Recommencer l’aventure"
            icon={ArrowGoBack}
            iconPosition="right"
            onClick={handleRestart}
          />
        )}
      </div>
    </Bloc>
  );
}
