import { useEffect, useState } from "react"
import "./ConversorMetros.css"

export function ConversorMetros() {
    const [metros, setMetros] = useState(0)
    const [mm, setMm] = useState(0)
    const [cm, setCm] = useState(0)
    const [km, setKm] = useState(0)

    useEffect (() => {
        const resultadoMm = Number(metros) * 1000
        setMm(resultadoMm)

        const resultadoCm = Number(metros) * 100
        setCm(resultadoCm)

        const resultadoKm = Number(metros) / 1000
        setKm(resultadoKm)
    }, [metros])

    return (
        <div className="container">
            <input 
            type="number"
            placeholder="Insira o valor em metros"
            onChange={(evento) => setMetros(evento.target.value)} 
            />
            <p>Valor em MM: {mm}</p>
            <p>Valor em CM: {cm}</p>
            <p>Valor em KM: {km}</p>
        </div>
    )
}