function gerarLista(final = 10) {
    const spans = []

    for (let index = 1; index <= final; index++) {
        spans.push(<span>{index + ','}</span>)
    }

    return spans
}

export default function lista1() {


    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(3)}
            </div>
        </div>
    )
}