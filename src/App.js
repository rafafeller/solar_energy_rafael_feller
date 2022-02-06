import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Listagem from "./pages/Listagem"
import Cadastro from "./pages/Cadastro"
import Geracao from "./pages/Geracao"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/geracao" element={<Geracao />} />
      </Routes>
    </>
  );
}
export default App;
