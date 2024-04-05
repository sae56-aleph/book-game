import styles from "./Inventaire.module.css";
import useAdvancement from "../hooks/useAdvancement";
import useLivreContext from "../hooks/useLivreContext";

/**
 * Affiche une icône en fonction de son nom.
 */
const Icone = ({ icone, fill = true }) => {
  if (icone.includes(".png")) {
    return <img height={24} width={24} src={`/images/${icone}`} />;
  } else {
    return <></>;
  }
};

/**
 * Affiche une entrée de l'inventaire.
 */
const EntreeInventaire = ({ nom, icone }) => {
  return (
    <div className={styles.entree}>
      <Icone icone={icone} />
      <strong>{nom}</strong>
    </div>
  );
};

/**
 * Affiche l'inventaire en fonction des données du localStorage.
 * @author Enzo MAROS
 */
const Inventaire = () => {
  const book = useLivreContext();
  const advancement = useAdvancement();

  if (book?.variables === null || advancement === null) {
    return <p>Chargement...</p>;
  }

  const inventory = book.variables.filter((item) => {
    const isInventory = item.type === "Inventaire";
    const userHasItem = advancement.variables.get(item.nom) > 0;
    return isInventory && userHasItem;
  });

  return (
    <div className={styles.inventaire}>
      {inventory.map(({ nom, icone }, index) => (
        <EntreeInventaire key={index} nom={nom} icone={icone} />
      ))}
    </div>
  );
};

export default Inventaire;
