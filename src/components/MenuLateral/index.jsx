import "./style.css"
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function MenuLateral() {
    return (
        <>
            <div className="alinhamento">
                <div className="logo">
                    <Logo />
                </div>
                <ul>
                    <Link to="/dashboard">
                        <button className="buttonMenuLateral">Dashboard</button>
                    </Link>
                    <Link to="/listagem">
                        <button className="buttonMenuLateral">Unidades</button>
                    </Link>
                    <Link to="/geracao">
                        <button className="buttonMenuLateral">Cadastro de energia gerada</button>
                    </Link>
                </ul>
            </div>
        </>
    )
}
export default MenuLateral

