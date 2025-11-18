import "./header.scss"
import logopassoia from "../../assets/Logo-passoia.png"

function Header (){

    return(
        <header>
            <img src={logopassoia} alt="Logo Passoia" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>

    )
}

export default Header 