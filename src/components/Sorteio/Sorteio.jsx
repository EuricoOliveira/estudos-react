import "./Sorteio.css"
import { useState } from "react"

export function Sorteio() {
    // Estado = memória do componente
    const [numero, setNumero] = useState(0);

    function gerarNumero() {
        let numeroSorteado = Math.floor(Math.random() * 100)
        // chama uma atualização de componente
        setNumero(numeroSorteado)
    }

let h3Class;

    if (numero % 2 === 0) {
        h3Class = "par"
    } else {
        h3Class = "impar"
    }

    // console.log("Componente reconstruiu " + new Date().toTimeString());
    return (
        <div className="container">
            <h3 className={h3Class}>{numero}</h3>
          <button className="btn" onClick={gerarNumero}>Sortear número</button>
        </div>
    )
    }