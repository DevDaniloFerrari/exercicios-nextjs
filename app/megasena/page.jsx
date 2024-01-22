import gerarNumerosAleatorios from "../../functions/numerosAleatorios"

export default function megasena(){
    const numeros = gerarNumerosAleatorios(9)

    console.log(numeros)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {numeros.map(numero => <span>{numero}</span>)}
        </div>
    )
}