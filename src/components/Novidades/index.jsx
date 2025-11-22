import "./novidades.scss";
import bannerNovidade from "../../assets/banner-novidade.png";

function Novidades() {
  return (
    <section className="novidades">
      <h2>NOVIDADES PARA VOCÊ</h2>
      <img src={bannerNovidade} alt="Produtos de maquiagem em fundo rosa" />
    </section>
  );
}

export default Novidades;
