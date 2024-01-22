export default function gerarNumerosAleatorios(quantidade){
    let numeros = []

    for (let index = 0; index < quantidade; index++) {
        numeros.push(Math.round(Math.random() * 100))
    }

    return numeros
}