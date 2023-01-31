import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import banner from "../../assets/banner.png";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../components/Banner";

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
      </main>
    </>
  );
}
