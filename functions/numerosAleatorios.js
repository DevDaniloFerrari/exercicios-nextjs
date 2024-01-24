export default function gerarNumerosAleatorios(quantidade) {
    let numeros = []

    while (numeros.length < quantidade) {
        const novoNumero = Math.round(Math.random() * 60)
        if (!numeros.includes(novoNumero))
            numeros.push(novoNumero)
    }

    return numeros
} 