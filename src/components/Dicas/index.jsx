
import "./dicas.scss";

import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Dicas() {
    return (
        <section id="looks">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            <div className="cards-dicas">
                <img src={labios} alt="" />
                <img src={olhos} alt="" />
                <img src={rosto} alt="" />
                <img src={tendencia} alt="" />
            </div>
        </section>
    )
}
export default Dicas;