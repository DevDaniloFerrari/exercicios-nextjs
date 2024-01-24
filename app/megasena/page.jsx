'use client'
import NumeroDisplay from "@/components/NumeroDisplay"
import gerarNumerosAleatorios from "../../functions/numerosAleatorios"
import { useEffect, useState } from "react"

export default function megasena() {
    const [quantidade, setQuantidade] = useState(5)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(gerarNumerosAleatorios(quantidade))
    }, [])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Gerador de Números para Mega Sena</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {numeros.map(numero => <NumeroDisplay key={numero} valor={numero} />)}
            </div>
            <div>
                <input type="number" min={5} max={15} onChange={e => setQuantidade(e.target.value)} value={quantidade} />
                <button onClick={() => setNumeros(gerarNumerosAleatorios(quantidade))}>Gerar</button>
            </div>
        </div>
    )
}