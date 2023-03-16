import { useState } from "react";
import "./Cadastro.css"


export function Cadastro() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [resumo, setResumo] = useState("")

    // Esta função é chamada sempre que for digitado no campo nome
    function obterNome(evento) {
        setNome(evento.target.value); // Altera o valor do estado "nome"
    }

    function obterEmail(evento) {
        setEmail(evento.target.value);
    }

    function obterResumo(evento) {
        setResumo(evento.target.value);
        
    }

    return (
        <div>
            <strong>Formulário de cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br />
            <input type="text" placeholder="Digite seu e-mail" onChange={obterEmail} />
            <br />
            <textarea placeholder="Digite seu resumo" onChange={obterResumo}></textarea>
            <br />
            <strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>
        </div>
    )
}