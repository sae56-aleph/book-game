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
        src={`/icons/${icone}`}
      />
    );
  } else {
    return (
      <>
        <img
          className={styles[iconeFill]}
          height={24}
          width={24}
          src={`/icons/${icone}-fill${iconeFill}.svg`}
        />
      </>
    );
  }
};

/**
 * Affiche une entrée de l'inventaire.
 */
const EntreeStats = ({ nom, icone, value }) => {
  console.log(value);
  const iconCount = 6;
  const icones = [];

  for (let i = 1; i <= iconCount; i++) {
    icones.unshift(<Icone key={i} icone={icone} fill={i <= value} />);
  }

  return (
    <div className={styles.entree}>
      {icones}
      <strong>{nom}</strong>
    </div>
  );
};

const Statistiques = () => {
  const book = useLivreContext(1);
  const advancement = useAdvancement(1);

  if (book?.variables === null || advancement === null) {
    return <p>Chargement...</p>;
  }

  const stats = book.variables.filter((item) => {
    const isStats = item.type === "Statistique";
    return isStats;
  });

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
