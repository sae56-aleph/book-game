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
        <strong>Précendent :</strong> {previousChapterName}
      </p>
      <div className={styles.pageContainer}>
        <Titre level={1} text={chapterName} className={`${styles.textWhite}`} />
        <Bloc>
          <div className={styles.buttonContainer}>
            <Bouton text="Inventaire" icon={BriefCaseLine} />
            <Bouton text="Statistiques" icon={BarChart2Line} />
          </div>
          <div className={styles.blocAdapt}>
            <div className={styles.imageContainer}>
              <Image url={image} height={400} width={400} />
            </div>
            {text.split("\n").map((paragraph, index) => (
              <p className={styles.text} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </Bloc>
        <Bloc>
          <div className={styles.actionContainer}>
            {actions.map((action, index) => (
              <ActionSimple text={action.text} key={index} />
            ))}
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
