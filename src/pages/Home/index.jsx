import InputLogin from "../../components/InputLogin"
import ButtonEntrar from "../../components/ButtonEntrar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"

function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const redirect = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!email) {
      console.log(email)
      alert("Email obrigatório!")
    }
    if (!password) {

      alert("Senha obrigatória!")
    }
    if (email && password) {
      redirect("/dashboard")
    }
  }
  return (
    <>
      <div className="telaLogin">

        <div className="imgPanel">
          <img src={require("../../assets/Imagem.png")}></img>
        </div>

        <div className="formLogin">

          <div className="imgLogo">
            <img src={require("../../assets/Logo.png")}></img>
          </div>

          <br></br>

          <form className="inputLogin" onSubmit={handleSubmit}>
            <p>Seja bem vindo</p>
            <InputLogin type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputLogin type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <ButtonEntrar />
          </form>

        </div>
      </div>
    </>
  )
}
export default Home
