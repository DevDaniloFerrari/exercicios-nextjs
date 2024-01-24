import Padrao, { Comp1 as Test, Comp2, Comp4, Comp5, Comp6 } from "../../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <Test />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 mensagem={"olá mundo!"}/>
        </div>
    )
}