import Titre from "./components/Titre";
import Bouton from "./components/Bouton";
import Image from "./components/Image";
import ActionSimple from "./components/ActionSimple";
import Bloc from "./components/Bloc";
import BriefcaseFillIcon from "./icons/briefcase-fill.svg?react";
import De from "./components/De";
import PageActionSimple from "./pages/PageActionSimple";

function App() {
  return (
    <>
      <div>
        <PageActionSimple
          chapterName="Rencontre avec le Chat du Cheshire"
          previousChapterName="Le voeu sous les Étoiles"
          image="/images/Capture_decran_2024-03-29_134218_-_Copie.png"
          text={`Vous décidez d'engager une conversation avec le Chat du Cheshire,\
          curieuse de découvrir ce qu'il a à dire. Il vous observe avec ses\
          yeux brillants, un sourire en coin flottant sur son visage\
          insaisissable.\n"Bienvenue, voyageur," dit-il d’une voix mélodieuse. "Je suis le\
          gardien des chemins cachés.“\nCependant, avant que vous ne puissiez assimiler cette énigme, le\
          Chat vous propose un défi sournois.\n"Je suis curieux de connaître vos compétences, Alice," dit-il d'un\
          ton taquin. "Prouvez-moi que vous êtes digne de continuer votre\
          voyage en me montrant votre habileté. Vous voyez cette branche\
          suspendue au-dessus de nous ? Je vous défie de l'atteindre en un\
          seul saut. Montrez-moi ce que vous valez."`}
          actions={[
            { text: "Tenter le saut avec détermination" },
            { text: "Chercher un moyen alternatif d'atteindre la branche" },
            {
              text: "Refuser le défi du Chat et chercher une autre voie pour continuer votre quête",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
