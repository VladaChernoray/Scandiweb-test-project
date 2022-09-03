import React from "react";
import { DraverContext } from "../../context/draver.context";
import styled from "styled-components";


const CartIcon = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 16px;
`


export default class DraverButtonComponent extends React.Component {
    static contextType = DraverContext
    render() {
        return(
        <button className='drop-links button' onClick={this.context.changeDraverStatus}>
            <CartIcon>CART</CartIcon>
        </button>
        )
    }
}