export default function jsx4() {
    const subtitulo = "Estou no Javascript!"
    const trecho = <h6>Treco jsx em constante</h6>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(30, 1 , 10)}</h5>
            <h5>{entre(9, 1 , 10)}</h5>
            <h6>{trecho}</h6>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max)
        return "Sim"

    return "Não"
}