import { useState } from "react"
import "./Calc.css"



export function Calc() {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(-1);


    function calcImc() {
    const resultado = peso / (altura * altura);
    setImc(resultado);
    }

    function Limpar() {
        setPeso("")
        setAltura("")
        setImc(-1)
    }

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <h4>Peso</h4>
            <input 
            type="number" 
            placeholder="Digite seu peso" 
            onChange={(evento) => setPeso(evento.target.value)} 
            value={peso} />
            <br />
            <h4>Altura</h4>
            <input 
            type="number" 
            placeholder="Digite sua altura" 
            onChange={(evento) => setAltura(evento.target.value)} 
            value={altura} />
            <br />
            <button onClick={calcImc} type="submit">Calcular</button>
            <button onClick={Limpar} >Limpar</button>
            {imc > -1 && <p>O seu IMC é {imc.toFixed(2)}</p>}
        </div>
    )
}