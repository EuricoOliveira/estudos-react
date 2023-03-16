import "./Contador.css"
import { useState } from "react"; // useState -> é uma Função

export function Contador() {
    // useState é uma função que cria um estado
    // Um estado é uma variável especial que sincroniza as mudanças na página
    // indice 0 -> estado
    // indice 1 -> função que muda o estado
    // Retorna um array

    // const array = useState(0); 
    // let numero = array[0];
    // let setNumero = array[1];

    // destruct quebra um objeto e atribui em variáveis
    let [numero, setNumero] = useState(0);

    function reset() {
        setNumero(0)
    }

    // incrementar
    function inc() {
        const novoNumero = numero + 1
        setNumero(novoNumero)
    }
    // Decrementar
    function dec() {
        const novoNumero = numero - 1
        setNumero(novoNumero)
    }

    function inc10() {
        const novoNumero = numero +10
        setNumero(novoNumero)
    }

    function inc100() {
        const novoNumero = numero +100
        setNumero(novoNumero)
    }

    function mult3() {
        const novoNumero = numero * 3
        setNumero(novoNumero)
    }

    function divi2() {
        const novoNumero = numero / 2
        setNumero(novoNumero)
    }

    function dec50() {
        const novoNumero = numero - 50
        setNumero(novoNumero)
    }

    function dec5() {
        const novoNumero = numero - 5
        setNumero(novoNumero)
    }
    

    return (
        <div className="contador">
            <h1>{numero}</h1>

        <div className="contador-container">
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={inc10}>+10</button>
            <button onClick={inc100}>+100</button>
            <button onClick={mult3}>x3</button>
            <button onClick={divi2}>/2</button>
            <button onClick={dec50}>-50</button>
            <button onClick={dec5}>-5</button>
            <button onClick={reset}>reset</button>
        </div>
        </div>
    );
}

