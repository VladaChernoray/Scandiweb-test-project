import React from "react";
import {GET_CURRENCY} from "../../query/currency.query";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Query} from "@apollo/client/react/components";
import { DraverContext } from "../../context/draver.context";

const DropdownContainer = styled.nav`
  .drop-item {
    display: inline;
  }
  .drop-links {
    position: relative;
    text-decoration: none;
    text-align: center;
    vertical-align: center;
    color: black;
    list-style: none;
    padding: 0 45px;
    font-size: 18px;
  }
  
  .button {
    background: none;
    border: none;
  }
`
export class DropdownComponent extends React.Component{
  static contextType = DraverContext
    render() {
        return(
            <DropdownContainer>
                <nav className= 'navbar'>
                    <ul className= 'drop-menu'>
                        <li className= 'drop-item'>
                            <button className='drop-links button' onClick={this.context.changeCurrenciesStatus}>
                                <img className="cur-icon" src="https://img.icons8.com/ios/16/000000/expand-arrow--v2.png"/>
                            </button>
                        </li>
                        <li className= 'drop-item'>
                            <button className='drop-links button' onClick={this.context.changeDraverStatus}>
                                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/26/000000/external-shopping-cart-commerce-dreamstale-lineal-dreamstale.png"/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </DropdownContainer>
        )

    }
}
