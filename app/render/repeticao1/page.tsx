export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Ana',
        'Bia',
        'Carlos',
        'Danilo',
        'Laura'
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}