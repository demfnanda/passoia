
import "./banner.scss";
import banner from "../../assets/Bannerofc.png";

function Banner() {
    return (
        <section className="banner">
            <img src={banner} alt="Imagem de uma mulher utilizando o produto revitalift" />
        </section>
    )
}
export default Banner;