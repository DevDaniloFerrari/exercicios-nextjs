'use client'
import { useState } from "react"
import NumeroDisplay from "../../../components/NumeroDisplay"

export default function contador() {
    const [valor, setValor] = useState(0);

    const decrementar = () => setValor(valor - 1)

    const incrementar = () => setValor(valor + 1)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>Contador</div>
            <NumeroDisplay valor={valor} />
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}