import React from "react";
import styles from "./PageActionSimple.module.css";
import PropTypes from "prop-types";
import Titre from "../components/Titre";
import Bloc from "../components/Bloc";
import Image from "../components/Image";
import Bouton from "../components/Bouton";
import BriefCaseLine from "../icons/briefcase-line.svg?react";
import BarChart2Line from "../icons/bar-chart-2-line.svg?react";
import ActionSimple from "../components/ActionSimple";

const PageActionSimple = ({
  chapterName,
  previousChapterName,
  text,
  image,
  actions,
  onNextChapter,
}) => {
  return (
    <>
      <p className={styles.textWhitePrevious}>
        <strong>Précendent :</strong> Le voeu sous les Étoiles
      </p>
      <div className={styles.pageContainer}>
        <Titre
          level={1}
          text="Rencontre avec le Chat du Cheshire"
          className={`${styles.textWhite}`}
        />
        <Bloc>
          <div className={styles.buttonContainer}>
            <Bouton text="Inventaire" icon={BriefCaseLine} />
            <Bouton text="Statistiques" icon={BarChart2Line} />
          </div>
          <div className={styles.blocAdapt}>
            <div className={styles.imageContainer}>
              <Image
                url="../../public/images/Capture_decran_2024-03-29_134218_-_Copie.png"
                height={300}
                width={300}
              />
            </div>
            <p className={styles.text}>
              Vous décidez d'engager une conversation avec le Chat du Cheshire,
              curieuse de découvrir ce qu'il a à dire. Il vous observe avec ses
              yeux brillants, un sourire en coin flottant sur son visage
              insaisissable.
            </p>
            <p className={styles.text}>
              "Bienvenue, voyageur," dit-il d’une voix mélodieuse. "Je suis le
              gardien des chemins cachés.“
            </p>
            <p className={styles.text}>
              Cependant, avant que vous ne puissiez assimiler cette énigme, le
              Chat vous propose un défi sournois.
            </p>
            <p className={styles.text}>
              "Je suis curieux de connaître vos compétences, Alice," dit-il d'un
              ton taquin. "Prouvez-moi que vous êtes digne de continuer votre
              voyage en me montrant votre habileté. Vous voyez cette branche
              suspendue au-dessus de nous ? Je vous défie de l'atteindre en un
              seul saut. Montrez-moi ce que vous valez."
            </p>
          </div>
        </Bloc>
        <Bloc>
          <div className={styles.actionContainer}>
            <ActionSimple text="Tenter le saut avec détermination" />
            <ActionSimple text="Chercher un moyen alternatif d'atteindre la branche" />
            <ActionSimple text="Refuser le défi du Chat et chercher une autre voie pour continuer votre quête" />
          </div>
        </Bloc>
      </div>
    </>
  );
};

PageActionSimple.propTypes = {
  chapterName: PropTypes.string,
  previousChapterName: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.array,
  onNextChapte: PropTypes.func,
};

export default PageActionSimple;
