import React from "react";
import fotosPopulares from "./fotos-populares.json";
import styles from "./Populares.module.scss";

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map((fotosPopular) => {
          return (
            <li key={fotosPopular.id}>
              <img src={fotosPopular.path} alt={fotosPopular.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
