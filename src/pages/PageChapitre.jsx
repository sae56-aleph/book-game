import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./PageChapitre.module.css";
import Titre from "../components/Titre";
import Bloc from "../components/Bloc";
import Image from "../components/Image";
import BriefCaseLine from "../icons/briefcase-line.svg?react";
import BarChart2Line from "../icons/bar-chart-2-line.svg?react";
import ActionSimple from "../components/ActionSimple";
import TabContainer from "../components/TabContainer";
import BookOpenLine from "../icons/book-open-line.svg?react";
import Layout from "../components/Layout";

export async function loader({ params }) {
  const { chapterId } = params;

  // TODO: Faire un appel à l'API une fois créée
  const chapter = {
    chapterName: `#${chapterId} Le Terrier du Lapin`,
    previousChapterName: "Prologue",
    text: "Vous vous trouvez dans un étroit terrier, entourée de murs de terre et de racines noueuses.\nLa lumière du jour filtre à travers les interstices, créant des motifs d’ombres étranges sur le sol.\nL’air est humide et empli d’une odeur de terre et de mystère. Devant vous, une porte minuscule en bois vermoulu mène à un couloir sombre. Vous entendez le tic-tac d’une horloge lointaine.\nQue faites-vous ?",
    image: "/home_background.png",
    actions: [
      { text: "Passer par la porte", target: parseInt(chapterId) - 1 },
      { text: "Explorer la salle", target: parseInt(chapterId) + 1 },
    ],
  };

  return chapter;
}

/**
 * Affiche un chapitre avec choix multiple
 * @author Alexie GROSBOIS
 */
const PageChapitre = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleClick = (target) => {
    navigate(`/chapitre/${target}`);
  };

  return (
    <Layout>
      <p className={styles.textWhitePrevious}>
        <strong>Précendent :</strong> {data.previousChapterName}
      </p>
      <div className={styles.pageContainer}>
        <Titre
          level={1}
          text={data.chapterName}
          className={`${styles.textWhite}`}
        />
        <TabContainer
          tabs={[
            {
              title: "Chapitre",
              content: (
                <div className={styles.blocAdapt}>
                  <div className={styles.imageContainer}>
                    <Image url={data.image} height={400} width={400} />
                  </div>
                  {data.text.split("\n").map((paragraph) => (
                    <p className={styles.text}>{paragraph}</p>
                  ))}
                </div>
              ),
              icon: BookOpenLine,
            },
            {
              title: "Inventaire",
              content: <div></div>,
              icon: BriefCaseLine,
            },
            {
              title: "Statistiques",
              content: <div></div>,
              icon: BarChart2Line,
            },
          ]}
        />
        <Bloc>
          <div className={styles.actionContainer}>
            {data.actions.map((action, index) => (
              <ActionSimple
                text={action.text}
                key={index}
                target={action.target}
                onClick={handleClick}
              />
            ))}
          </div>
        </Bloc>
      </div>
    </Layout>
  );
};

export default PageChapitre;
