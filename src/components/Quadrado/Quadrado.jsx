import "./Quadrado.css"



export function Quadrado() {

    function quandoClicar() {
    alert("Clicou")
}

function quandoMouseEntrar(evento) {
// ---------------------// target é o elemento que acionou o evento (DOM)
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "red"
}


function quandoMouseSair(evento) {
    // ---------------------// target é o elemento que acionou o evento (DOM)
        const elemActive = evento.target;
        elemActive.style.backgroundColor = "blue"
    }

function duploClick(evento) {
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "orange"
}

    return (
        <div 
        className="quadrado"
        // onClick={quandoClicar}    
        onMouseEnter={quandoMouseEntrar}
        onMouseLeave={quandoMouseSair}
        onDoubleClick={duploClick}
        >            
        </div>
    )
}