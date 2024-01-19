import Lista from '../../../components/Lista'
import Item from '../../../components/Item'

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item #11"/>
                <Item conteudo="item #12"/>
                <Item conteudo="item #13"/>
                <Item conteudo="item #14"/>
                <Item conteudo="item #15"/>
                <Item conteudo="item #16"/>
            </Lista>
        </div>
    )
}