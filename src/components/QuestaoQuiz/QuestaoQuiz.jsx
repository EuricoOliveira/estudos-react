import { useState } from "react"
import "./QuestaoQuiz.css"

const pergunta = {
    enunciado: "Qual é a capital do Brasil?",
    alternativas: [
        "São Paulo",
        "Rio de Janeiro",
        "Minas Gerais",
        "Brasilia"
    ],
    alternativaCorreta: "Brasilia"
}

export function QuestaoQuiz() {
    const [statusQuiz, setStatusQuiz] = useState("pendente")
    const [tentativasRestantes, setTentativasRestantes] = useState(2)
      // pendente = precisa marcar uma alternativa
  // acertou = marcou a alternativa correta
  // errou = marcou a alternativa errada
  // tentativas = errou 2 vezes

    function checarResposta(altMarcada) {
        if (altMarcada === pergunta.alternativaCorreta) {
            setStatusQuiz("acertou")
        } else {
            setTentativasRestantes(tentativasRestantes - 1)
            setStatusQuiz("errou")
        }
    }

    function tentarNovamente() {
        if(tentativasRestantes > 0 ) {
        setStatusQuiz("pendente")
    } else {
        setStatusQuiz("acabou")
    }
}

    if(statusQuiz === "pendente") {
        return (
            <div>
                <h3>{pergunta.enunciado}</h3>
                <small>Tentativas restantes: {tentativasRestantes}</small>
                <ol type="A">
                    {pergunta.alternativas.map((alt) => (
                        <li className="alternativa" onClick={() => checarResposta(alt)}>
                            {alt}
                        </li>
                    ))}
                </ol>
            </div>
        )
    } else if(statusQuiz === "acertou") {
        return (
            <div>
                <h3>Parabéns, Você acertou!</h3>
                <p>se é o bixão mesmo ein</p>
            </div>
        )
    } else if(statusQuiz === "errou") {
        return (
            <div>
                <h3>Você errou</h3>
                <button onClick={tentarNovamente}>Tentar Novamente</button>
            </div>
        )
    } else if(statusQuiz === "acabou") {
        return (
            <div>
                <h1>TENTATIVAS ESGOTADAS</h1>
            </div>
        )
    } 
}