import { Component } from "react";

export default class Contador extends Component {
    render() {
        return (
            <div>
                Contador (usando classe)
                <h2>{this.props.valorInicial}</h2>
            </div>
        )
    }
}