import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
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
import Action from "../components/Action";
import useLivreContext from "../hooks/useLivreContext";
import Bouton from "../components/Bouton";
import ArrowGoBack from "../icons/arrow-go-back-line.svg?react";
import SpeechBouton from "../components/SpeechBouton";
import SideStatHeader from "../components/SideStatHeader";
import TextSizeBouton from "../components/TextSizeBouton";
import useTitle from "../hooks/useTitle";
import useHighContrast from "../hooks/useHighContrast";
import HighContrastBouton from "../components/HighContrastBouton";

export async function loader({ params }) {
  const { chapterId } = params;
  const url = new URL("section/" + chapterId, import.meta.env.VITE_API_URL);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const PageChapitre = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const advancement = useAdvancement();
  const data = useLoaderData();
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const livre = useLivreContext();
  const [previousChapterName, setPreviousChapterName] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const { highContrast, toggleHighContrast } = useHighContrast();
  const imageUrl = new URL(
    `/section/${chapterId}/image`,
    import.meta.env.VITE_API_URL
  );

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

  useTitle(data.titre);

  const handleClick = (target) => {
    navigate(`/chapitre/${target}`);
  };

  const handleNavigate = (target) => {
    navigate(`/chapitre/${target}`);
  };

  const handleRestart = () => {
    advancement.reset();
    handleNavigate(livre?.intro);
  };

  useEffect(() => {
    const element = document.documentElement;
    element.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleIncreaseFontSize = () =>
    setFontSize((prev) => Math.min(prev + 1, 24));
  const handleDecreaseFontSize = () =>
    setFontSize((prev) => Math.max(prev - 1, 12));

  return (
    <Layout>
      <p className={styles.textWhitePrevious}>
        <strong>Précendent : </strong>
        {previousChapterName ?? "Prologue"}
      </p>
      <div
        className={styles.pageContainer}
        style={{ backgroundColor: highContrast ? "black" : "" }}
      >
        <Titre level={1} text={data.titre} className={styles.textWhite} />
        <TabContainer
          style={{ backgroundColor: highContrast ? "black" : "" }}
          onTabClick={(index) => {
            setCurrentTab(index);
          }}
          tabs={[
            {
              title: "Chapitre",
              icon: BookOpenLine,
            },
            {
              title: "Inventaire",
              icon: BriefCaseLine,
            },
          ]}
        />
        <div className={styles.chapterAndStatsContainer}>
          <Bloc
            className={currentTab != 0 ? " hideNarrow" : ""}
            highContrast={highContrast}
          >
            <div
              className={styles.blocAdapt}
              style={{
                backgroundColor: highContrast ? "black" : "",
              }}
            >
              <div className={styles.imageContainer}>
                <Image url={imageUrl.toString()} height={350} width={350} />
              </div>
              <span className={styles.accessibilityButton}>
                <SpeechBouton chapterId={chapterId} />
                <span>
                  <HighContrastBouton toggleHighContrast={toggleHighContrast} />
                  <TextSizeBouton
                    onIncrease={handleIncreaseFontSize}
                    onDecrease={handleDecreaseFontSize}
                  />
                </span>
              </span>
              {data.texte.split("\n").map((paragraph, index) => (
                <p
                  className={styles.text}
                  key={index}
                  style={{
                    backgroundColor: highContrast ? "black" : "",
                    color: highContrast ? "white" : "",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Bloc>
          <div
            className={
              styles.statsContainer + (currentTab != 1 ? " hideNarrow" : "")
            }
          >
            <Bloc className={styles.blocStat} highContrast={highContrast}>
              <SideStatHeader title="Inventaire" icon={BriefCaseLine} />
              <Inventaire />
            </Bloc>
            <Bloc className={styles.blocStat} highContrast={highContrast}>
              <SideStatHeader title="Statistiques" icon={BarChart2Line} />
              <Statistiques />
            </Bloc>
          </div>
        </div>
        <Bloc
          className={currentTab != 0 ? "hideNarrow" : ""}
          highContrast={highContrast}
        >
          <div className={styles.actionContainer}>
            {data.actions.length > 0 ? (
              data.actions.map((action, index) => (
                <Action
                  key={index}
                  tabIndex={index}
                  options={action}
                  type={action.type}
                  onNextChapter={(target) => handleClick(target)}
                />
              ))
            ) : (
              <Bouton
                text="Recommencer l’aventure"
                icon={ArrowGoBack}
                iconPosition="right"
                onClick={handleRestart}
                style={{ color: highContrast ? "white" : "" }}
              />
            )}
          </div>
        </Bloc>
      </div>
    </Layout>
  );
};

export default PageChapitre;
