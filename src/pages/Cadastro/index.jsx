
import InputForm from "../../components/InputForm"
import Checkbox from "../../components/Checkbox"
import ButtonUpdate from "../../components/ButtonUpdate"
import MenuLateral from "../../components/MenuLateral"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"

const initialValues = {
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativo: false
}

function Cadastro() {
    const [valuesForm, setValuesForm] = useState(initialValues)
    const redirect = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        axios.post("http://localhost:5000/unidades", valuesForm)
            .then((response) => {
                if (response.status === 201) {
                    redirect("/listagem")
                } else {
                    alert("Erro!")
                }
            })
    }

    function handleInputChange(ev) {
        const { name, value } = ev.target
        setValuesForm({ ...valuesForm, [name]: value })
    }

    return (
        <>
            <div className="telaCadastroUnidades">
                <div className="menuLateral">
                    <div>
                        <MenuLateral />
                    </div>
                </div>
                <div className="cadastroUnidade">
                    <h2>Unidades</h2>
                    <p>Cadastro de Unidade Geradora</p>
                    <form onSubmit={handleSubmit}>
                        <InputForm description="Apelido" name="apelido" value={valuesForm.apelido} onChange={handleInputChange} />
                        <InputForm description="Local" name="local" value={valuesForm.local} onChange={handleInputChange} />
                        <InputForm description="Marca" name="marca" value={valuesForm.marca} onChange={handleInputChange} />
                        <InputForm description="Modelo" name="modelo" value={valuesForm.modelo} onChange={handleInputChange} />
                        <br></br>
                        <Checkbox description="Ativo" name="ativo" value={valuesForm.ativo} checked={valuesForm.ativo} onChange={handleInputChange} />
                        <ButtonUpdate description="Salvar" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Cadastro


