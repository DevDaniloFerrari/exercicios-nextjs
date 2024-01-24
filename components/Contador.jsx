import { Component } from "react";

export default class Contador extends Component {

    constructor(props){
        super(props)

        this.state = {
            numero: props.valorInicial ?? 0,
            passo: props.passo ?? 1
        }
    }

    

    incrementar = () => {
        this.setState({
            numero: this.state.numero + (this.state.passo ?? 1)
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - (this.state.passo ?? 1)
        })
    }

    alterarPasso = (event ) => {
        this.setState({ passo: +event.target.value })
    }

    renderForm() {
        return (
            <>
                <input
                    type="number"
                    min={1}
                    max={1000}
                    value={this.state.passo}
                    onChange={this.alterarPasso}
                />
                <button onClick={this.decrementar}>-</button>
                <button onClick={this.incrementar}>+</button>
            </>
        )
    }

    render() {
        return (
            <div>
                Contador (usando classe)
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }
}