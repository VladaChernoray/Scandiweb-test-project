import React from "react";
import { CurrenciesContext } from "../../context/currencies.context";
import styled from "styled-components";

const CurrenciesIcon = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 18px;
`


export default class CurrenciesButtonComponent extends React.Component {
    static contextType = CurrenciesContext
    render() {
        return(
        <button className='drop-links button' onClick={this.context.changeCurrenciesStatus}>
            <CurrenciesIcon>$</CurrenciesIcon>
        </button>
        )
    }
}