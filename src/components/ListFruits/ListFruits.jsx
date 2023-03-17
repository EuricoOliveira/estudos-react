import { frutas } from "../../data/frutas";
import "./ListFruit.css";
import { useState } from "react";


export function ListFruits() {

    const [resultados, setResultados] = useState([])

    function filtrarFrutas(evento) {
        const valor = evento.target.value;
        let busca = [];
        for(let fruta of frutas) {
            // Procura o indice da substring dentro do nome da fruta (-1 se não existir)
            let indice = fruta.nome.toLowerCase().indexOf(valor.toLowerCase());
            // Verificar se a fruta faz parte da filtragem
            if(indice != -1) {
                busca.push(fruta);
            }
        }
        setResultados(busca)
    }

    return (
        <div className="frutas">
            <input type="text" placeholder="Digite uma fruta aqui" onChange={filtrarFrutas} />
            <br />

            <ul>
                {resultados.map(fruta => (
                    <li>
                        <img src={fruta.imagem} />
                    </li>
                ))}
            </ul>
        </div>
    )
}