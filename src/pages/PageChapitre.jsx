import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import styles from "./PageChapitre.module.css";
import Titre from "../components/Titre";
import Bloc from "../components/Bloc";
import Image from "../components/Image";
import BriefCaseLine from "../icons/briefcase-line.svg?react";
import BarChart2Line from "../icons/bar-chart-2-line.svg?react";
import TabContainer from "../components/TabContainer";
import BookOpenLine from "../icons/book-open-line.svg?react";
import Layout from "../components/Layout";
import Inventaire from "../components/Inventaire";
import Statistiques from "../components/Statistiques";
import useAdvancement from "../hooks/useAdvancement";
import SpeechBouton from "../components/SpeechBouton";
import SideStatHeader from "../components/SideStatHeader";
import TextSizeBouton from "../components/TextSizeBouton";
import useTitle from "../hooks/useTitle";
import HighContrastBouton from "../components/HighContrastBouton";
import ChapitreNavigation from "../components/ChapitreNavigation";
import TabElement from "../components/TabElement";

export async function loader({ params }) {
  const { chapterId } = params;
  const url = new URL("section/" + chapterId, import.meta.env.VITE_API_URL);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const PageChapitre = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [previousChapterName, setPreviousChapterName] = useState("");
  const { chapterId } = useParams();
  const advancement = useAdvancement();
  const data = useLoaderData();

  const imageUrl = new URL(
    `/section/${chapterId}/image`,
    import.meta.env.VITE_API_URL
  );

  useTitle(data.titre);
  useEffect(() => {
    if (!advancement) return;

    setPreviousChapterName(advancement.chapterName ?? "Prologue");
    advancement.chapterId = chapterId;
    advancement.chapterName = data.titre;

    data.updates.forEach((update) => {
      const oldValue = parseInt(advancement.variables.get(update.nom));
      advancement.variables.set(update.nom, parseInt(update.valeur) + oldValue);
    });
  }, [advancement, data]);

  return (
    <Layout>
      <p className={styles.textWhitePrevious}>
        <strong>Précendent : </strong>
        {previousChapterName ?? "Prologue"}
      </p>
      <div className={styles.pageContainer}>
        <Titre level={1} text={data.titre} className={styles.textWhite} />
        <TabContainer
          onTabClick={setCurrentTab}
          tabs={[
            { title: "Chapitre", icon: BookOpenLine },
            { title: "Inventaire", icon: BriefCaseLine },
          ]}
        />
        <div className={styles.chapterAndStatsContainer}>
          <TabElement currentTab={currentTab} targetTab={0}>
            <Bloc>
              <div className={styles.blocAdapt}>
                <div className={styles.imageContainer}>
                  <Image url={imageUrl.toString()} height={350} width={350} />
                </div>
                <span className={styles.accessibilityButton}>
                  <SpeechBouton chapterId={chapterId} />
                  <span>
                    <HighContrastBouton />
                    <TextSizeBouton />
                  </span>
                </span>
                {data.texte.split("\n").map((paragraph, index) => (
                  <p className={styles.text} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Bloc>
          </TabElement>

          <TabElement
            className={styles.statsContainer}
            currentTab={currentTab}
            targetTab={1}
          >
            <Bloc className={styles.blocStat}>
              <SideStatHeader title="Inventaire" icon={BriefCaseLine} />
              <Inventaire />
            </Bloc>
            <Bloc className={styles.blocStat}>
              <SideStatHeader title="Statistiques" icon={BarChart2Line} />
              <Statistiques />
            </Bloc>
          </TabElement>
        </div>
        <ChapitreNavigation
          className={currentTab != 0 ? "hideNarrow" : ""}
          actions={data.actions}
        />
      </div>
    </Layout>
  );
};

export default PageChapitre;
