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
import Bouton from "../components/Bouton";
import ArrowGoBack from "../icons/arrow-go-back-line.svg?react";
import SpeechBouton from "../components/SpeechBouton";
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
  const advancement = useAdvancement();
  const data = useLoaderData();
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const livre = useLivreContext();
  const [previousChapterName, setPreviousChapterName] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, toggleHighContrast] = useHighContrast();

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

  useEffect(() => {
    const element = document.documentElement;
    const body = document.body;
    const root = document.getElementById("root");

    if (isHighContrast) {
      body.style.backgroundColor = "black";
      body.style.backgroundImage = "none";
      element.style.backgroundColor = "black";
      if (root) root.style.backgroundColor = "black";
    } else {
      body.style.backgroundColor = "";
      body.style.backgroundImage =
        "linear-gradient(129deg, #291745 18.48%, #491845 83.36%)";
      element.style.backgroundColor = "";
      if (root) root.style.backgroundColor = "";
    }
  }, [isHighContrast]);
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
        style={{ backgroundColor: isHighContrast ? "black" : "" }}
      >
        <Titre level={1} text={data.titre} className={styles.textWhite} />
        <TabContainer
          style={{ backgroundColor: isHighContrast ? "black" : "" }}
          styleBloc={{
            backgroundColor: isHighContrast ? "black" : "",
            border: isHighContrast ? "1px solid white" : "",
          }}
          tabs={[
            {
              title: "Chapitre",
              content: (
                <div
                  className={styles.blocAdapt}
                  style={{
                    backgroundColor: isHighContrast ? "black" : "",
                  }}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      url={data.image ?? livre.couverture}
                      height={350}
                      width={350}
                    />
                  </div>
                  <div className={styles.accessibilityButton}>
                    <SpeechBouton chapterId={chapterId} />
                    <HighContrastBouton
                      toggleHighContrast={toggleHighContrast}
                    />
                    <div>
                      <TextSizeBouton
                        onIncrease={handleIncreaseFontSize}
                        onDecrease={handleDecreaseFontSize}
                      />
                    </div>
                  </div>
                  {data.texte.split("\n").map((paragraph, index) => (
                    <p
                      className={styles.text}
                      key={index}
                      style={{
                        backgroundColor: isHighContrast ? "black" : "",
                        color: isHighContrast ? "white" : "",
                      }}
                    >
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
        <Bloc
          style={{
            backgroundColor: isHighContrast ? "black" : "",
            border: isHighContrast ? "1px solid white" : "",
          }}
        >
          <div
            className={styles.actionContainer}
            style={{ backgroundColor: isHighContrast ? "black" : "" }}
          >
            {data.actions.length > 0 ? (
              data.actions.map((action, index) => (
                <Action
                  key={index}
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
                style={{ color: isHighContrast ? "white" : "" }}
              />
            )}
          </div>
        </Bloc>
      </div>
    </Layout>
  );
};

export default PageChapitre;
