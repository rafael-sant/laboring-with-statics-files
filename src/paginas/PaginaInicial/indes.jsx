import Cabecalho from "components/Cabecalho";
import Menu from "components/Menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Galeria from "components/Galeria";
import Populares from "components/Populares";

export default function PaginaInicial(params) {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu></Menu>
          <div className={styles.principal__imagem}>
            <Banner></Banner>
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
