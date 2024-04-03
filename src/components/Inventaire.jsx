import styles from "./Inventaire.module.css";
import useAdvancement from "../hooks/useAdvancement";
import useLivreContext from "../hooks/useLivreContext";

const Icone = ({ icone }) => {
  if (icone.includes(".png")) {
    return <img height={24} width={24} src={`/images/${icone}`} />;
  } else {
    console.log(icone);
    return <></>;
  }
};

const EntreeInventaire = ({ nom, icone }) => {
  console.log(typeof icone);
  return (
    <div className={styles.entree}>
      <Icone icone={icone} />
      <h3>{nom}</h3>
    </div>
  );
};

const Inventaire = () => {
  const { bookVariables } = useLivreContext(1);
  const advancement = useAdvancement(1);

  if (bookVariables === null || advancement === null) {
    return <p>Chargement...</p>;
  }

  const inventory = bookVariables.filter((item) => {
    const isInventory = item.type === "INVENTAIRE";
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
