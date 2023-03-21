import { useEffect, useState } from "react"
import "./ConversorTemp.css"

// Efeitos = ações secundárias

export function ConversorTemp() {
    const [tempC, setTempC] = useState(0)
    const [tempF, setTempF] = useState(0)
    const [tempK, setTempK] = useState(0)


    // Exercício: Adicionar conversão para Kelvin no efeito
    // e mostrar no return. K = C - 273

    useEffect(() => {
        // Quando a tempC for alterada essa função/efeito
        // será executado automaticamente
        const resultadoConversao = Number(tempC) * 1.8 + 32
        setTempF(resultadoConversao)

        const resultadoConversaoK = Number(tempC) + 273
        setTempK(resultadoConversaoK)

    }, [tempC]) // array de dependencias

    // useEffect(() => {
    //     document.title = tempF;
    //   }, [tempF]);

    return (
        <div>
            <input 
            type="number" 
            placeholder="Temperatura em C" 
            onChange={(evento) => setTempC(evento.target.value)}
            />
            <p>Valor digitado: {tempC} °C</p>
            <p>Temperatura em Fahrenheit: {tempF} °F</p>
            <p>Temperatura em Kelvin: {tempK} °K</p>
        </div>
    )
}