import React from "react";
import banner from "../../assets/banner.png";

import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <>
      <h1>A Galeria mais completa do espaço</h1>
      <img src={banner} alt="A imagem da terra vista do espaço" />
    </>
  );
}