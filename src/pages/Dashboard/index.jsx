import Card from "../../components/Card"
import { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"
import MenuLateral from "../../components/MenuLateral"

function Dashboard() {
    const [unidades, setUnidades] = useState([])
    const [unidadesAtivas, setUnidadesAtivas] = useState([])
    const [unidadesInativas, setUnidadesInativas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/unidades")
            .then((response) => {
                setUnidades(response.data)
            }, [])

        let ativos = 0
        let inativos = 0

        unidades.forEach(function (unidade) {
            if (unidade.ativo) {
                ativos++
            } else {
                inativos++
            }
        })

        setUnidadesAtivas(ativos)
        setUnidadesInativas(inativos)
    })

    return (
        <>
            <div className="telaDashboard">
                <div className="menuLateral">
                    <div>
                        <MenuLateral />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="cabecalho">
                        <p>Dashboard</p>
                    </div>
                    <div className="cards">
                        < Card text="Total Unidades" unidade={unidades.length} />

                        < Card text="Unidades Ativas" unidade={unidadesAtivas} />

                        < Card text="Unidades Inativas" unidade={unidadesInativas} />

                        <Card text="Média de Energia" unidade="64 kw" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard
