'use client'
import NumeroDisplay from "@/components/NumeroDisplay"
import gerarNumerosAleatorios from "../../functions/numerosAleatorios"
import { useState } from "react"

export default function megasena() {
    const [quantidade, setQuantidade] = useState(1)
    const [numeros, setNumeros] = useState([])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Gerador de Números para Mega Sena</h1>
            <div style={{
                display: 'flex',
                justifyItens: 'center',
                alignContent: 'center',
            }}>
                {numeros.map(numero => <NumeroDisplay valor={numero} />)}
            </div>
            <div>
                <input type="number" max={15} min={5} onChange={e => setQuantidade(e.target.value)} value={quantidade} />
                <button onClick={() => setNumeros(gerarNumerosAleatorios(quantidade))}>Gerar</button>
            </div>
        </div>
    )
}