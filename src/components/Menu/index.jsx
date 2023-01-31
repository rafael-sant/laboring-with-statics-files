import React from "react";
import home from "../../assets/home.png";
import maisCurtidas from "../../assets/mais-curtidas-inativo.png";
import maisVistas from "../../assets/mais-vistas-inativo.png";
import novas from "../../assets/novas-inativo.png";
import surpreendaMe from "../../assets/surpreenda-me-inativo.png";

import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="" />
          <a href="">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="" />
          <a href="">Suepreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
