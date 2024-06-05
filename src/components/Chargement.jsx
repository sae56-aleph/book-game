import LoaderLine from "../icons/loader-line.svg?react";
import styles from "./Chargement.module.css";

export default function Chargement({ height, width, props }) {
  return (
    <div className={styles.spin} style={{ height }}>
      <LoaderLine height={height} width={width} {...props} />
    </div>
  );
}
