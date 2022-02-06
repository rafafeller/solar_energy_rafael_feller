
import InputForm from "../../components/InputForm"
import ButtonUpdate from "../../components/ButtonUpdate"
import MenuLateral from "../../components/MenuLateral"
import "./style.css"

function Geracao() {
    return (
        <>
            <div className="telaLancamentoGeracao">
                <div className="menuLateral">
                    <div className="menuLateral">
                        <MenuLateral />
                    </div>
                </div>
                <div className="lancamentoGeracao">
                    <div className="cabecalho">
                        <p>Lançamento de geração mensal</p>
                    </div>
                    <div className="entradaDados">
                        <InputForm description="Unidade geradora:" />
                        <InputForm description="Mês/ano" />
                        <InputForm description="Total Kw gerado" />
                        <ButtonUpdate description="Cadastrar" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Geracao