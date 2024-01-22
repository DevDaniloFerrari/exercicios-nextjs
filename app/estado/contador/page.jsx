'use client'
import { useState } from "react"

export default function contador() {
    const [valor, setValor] = useState(0);

    const decrementar = () => setValor(valor - 1)

    const incrementar = () => setValor(valor + 1)

    return (
        <>
            <div>Contador</div>
            <div>{valor}</div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </>
    )
}