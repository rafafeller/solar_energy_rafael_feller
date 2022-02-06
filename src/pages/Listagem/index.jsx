
import MenuLateral from "../../components/MenuLateral"
import ButtonUpdate from "../../components/ButtonUpdate"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./style.css"
import axios from "axios"
import ButtonEditarTabela from "../../components/ButtonEditarTabela"
import ButtonRemoverTabela from "../../components/ButtonRemoverTabela"

function Listagem() {
    const [unidades, setUnidades] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/unidades")
            .then((response) => {
                setUnidades(response.data)
            })
    }, [])

    return (
        <>
            <div className="listagem">
                <div className="menuLateral">
                    <div>
                        <MenuLateral />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="cabecalho">
                        <p>Unidades</p>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Apelido</th>
                                <th>Local</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {
                                unidades.map(unidade =>
                                    <tr>
                                        <td key={unidades.id}>{unidade.id}</td>
                                        <td key={unidades.id}>{unidade.apelido}</td>
                                        <td key={unidades.id}>{unidade.local}</td>
                                        <td key={unidades.id}>{unidade.marca}</td>
                                        <td key={unidades.id}>{unidade.modelo}</td>
                                        <td><ButtonEditarTabela /></td>
                                        <td><ButtonRemoverTabela /></td>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                    <div className="buttonUpdate">
                        <Link to="/cadastro">
                            <ButtonUpdate description="Nova Unidade" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listagem

