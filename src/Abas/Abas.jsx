import { useState } from "react";
import "./Abas.css";

// useState é um hook

export function Abas() {
//   let aba = "home"; // home, perfil, ajuda
const [aba, setAba] = useState("home")

  function irParaHome() {
    setAba("home");
  }

  function irParaPerfil() {
    setAba("perfil")

  }

  function irParaAjuda() {
    setAba("ajuda")

  }

  let conteudoAba; // conter o layout da aba selecionada

  if (aba === "home") {
    conteudoAba = <div>HOME</div>
  } else if (aba === "perfil") {
    conteudoAba = <div>PERFIL</div>
  } else if (aba === "ajuda") {
    conteudoAba = <div>AJUDA</div>
  }

  return (
    <div>
        {/* Com arrow não precisamos definir as funções acima do componente */}
      <button onClick={() => setAba("home")}>Home</button>
      <button onClick={() => setAba("perfil")}>Perfil</button>
      <button onClick={() => setAba("ajuda")}>Ajuda</button>
      <hr />
      {conteudoAba}
    </div>
  );
}
