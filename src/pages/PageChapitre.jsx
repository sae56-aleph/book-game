import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
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
import Inventaire from "../components/Inventaire";
import Statistiques from "../components/Statistiques";
import useAdvancement from "../hooks/useAdvancement";
import Action from "../components/Action";
import useLivreContext from "../hooks/useLivreContext";

export async function loader({ params }) {
  const { chapterId } = params;

  // TODO: Faire un appel à l'API une fois créée
  const chapter = {
    id: chapterId,
    chapterName: `#${chapterId} Le Terrier du Lapin`,
    previousChapterName: "Prologue",
    text: "Vous vous trouvez dans un étroit terrier, entourée de murs de terre et de racines noueuses.\nLa lumière du jour filtre à travers les interstices, créant des motifs d’ombres étranges sur le sol.\nL’air est humide et empli d’une odeur de terre et de mystère. Devant vous, une porte minuscule en bois vermoulu mène à un couloir sombre. Vous entendez le tic-tac d’une horloge lointaine.\nQue faites-vous ?",
    image: "/home_background.png",
    actions: [
      { text: "Passer par la porte", target: parseInt(chapterId) - 1 },
      { text: "Explorer la salle", target: parseInt(chapterId) + 1 },
    ],
  };

  const url = new URL("section/" + chapterId, import.meta.env.VITE_API_URL);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * Affiche un chapitre avec choix multiple
 * @author Alexie GROSBOIS
 */
const PageChapitre = () => {
  const advancement = useAdvancement();
  const data = useLoaderData();
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const livre = useLivreContext();
  const [previousChapterName, setPreviousChapterName] = useState("");

  useEffect(() => {
    if (!advancement) return;

    setPreviousChapterName(advancement.chapterName ?? "Prologue");
    advancement.chapterId = chapterId;
    advancement.chapterName = data.titre;

    // Mettre à jour les variables si besoin
    data.updates.forEach((update) => {
      const oldValue = parseInt(advancement.variables.get(update.nom));
      advancement.variables.set(update.nom, parseInt(update.valeur) + oldValue);
    });
  }, [advancement, data]);

  const handleClick = (target) => {
    navigate(`/chapitre/${target}`);
  };

  return (
    <Layout>
      <p className={styles.textWhitePrevious}>
        <strong>Précendent : </strong>
        {previousChapterName ?? "Prologue"}
      </p>
      <div className={styles.pageContainer}>
        <Titre level={1} text={data.titre} className={`${styles.textWhite}`} />
        <TabContainer
          tabs={[
            {
              title: "Chapitre",
              content: (
                <div className={styles.blocAdapt}>
                  <div className={styles.imageContainer}>
                    <Image
                      url={data.image ?? livre.couverture}
                      height={350}
                      width={350}
                    />
                  </div>
                  {data.texte.split("\n").map((paragraph, index) => (
                    <p className={styles.text} key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ),
              icon: BookOpenLine,
            },
            {
              title: "Inventaire",
              content: <Inventaire />,
              icon: BriefCaseLine,
            },
            {
              title: "Statistiques",
              content: <Statistiques />,
              icon: BarChart2Line,
            },
          ]}
        />
        <Bloc>
          <div className={styles.actionContainer}>
            {data.actions.map((action, index) => (
              <Action
                key={index}
                options={action}
                type={action.type}
                onNextChapter={(target) => handleClick(target)}
              />
            ))}
          </div>
        </Bloc>
      </div>
    </Layout>
  );
};

export default PageChapitre;
