import useAdvancement from "../hooks/useAdvancement";
import useLivreContext from "../hooks/useLivreContext";
import styles from "./Statistiques.module.css";

const Icone = ({ icone, fill = true }) => {
  const iconeFill = fill ? "-pink" : "";
  if (icone.includes(".png")) {
    return (
      <img
        className={styles[iconeFill]}
        height={24}
        width={24}
        src={`/iconss/${icone}`}
      />
    );
  } else {
    return (
      <>
        <img
          className={styles[iconeFill]}
          height={24}
          width={24}
          src={`/iconss/${icone}-fill${iconeFill}.svg`}
        />
      </>
    );
  }
};

/**
 * Affiche une entrée de l'inventaire.
 */
const EntreeStats = ({ nom, icone, value }) => {
  const iconCount = 6;
  const icones = [];

  for (let i = 0; i < iconCount; i++) {
    icones.push(<Icone key={i} icone={icone} fill={i > value} />);
  }
  return (
    <div className={styles.entree}>
      {icones}
      <strong>{nom}</strong>
    </div>
  );
};

const Statistiques = () => {
  const { bookVariables } = useLivreContext(1);
  const advancement = useAdvancement(1);

  if (bookVariables === null || advancement === null) {
    return <p>Chargement...</p>;
  }

  const stats = bookVariables.filter((item) => {
    const isStats = item.type === "STATISTIQUE";
    //const itemColor = advancement.variables.get(item.valeurInitiale);
    return isStats;
  });

  console.log(stats);

  //   const iconFill = Array(6).fill(true);
  //   iconFill.splice(4, 2, false, false);

  return (
    <div className={styles.statistiques}>
      {stats.map(({ nom, icone }, index) => (
        <EntreeStats
          key={index}
          nom={nom}
          icone={icone}
          fill={true}
          value={advancement.variables.get(nom)}
        />
      ))}
    </div>
  );
};

export default Statistiques;
