import React from "react";
import {GET_CURRENCY} from "../../query/currency.query";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Query} from "@apollo/client/react/components";
import { DriverContext } from "../../context/DrawerContext";

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
  
  .dropdown-menu {
    font-family: 'Raleway', sans-serif;
    position: absolute;
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    right: 220px;
    top: 70px;
    background-color: white;
  }
  .currencies {
    word-spacing: 5px;
    padding: 20px 30px 20px 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  .currencies {
    display: block;
  }
  .currencies:nth-child(2n) {
    padding: 8px 30px 8px 15px;
    background-color: rgba(238, 238, 238, 1);
  }
  .currencies,  
  .drop-links:hover .currencies {
    display: none;
  }
`
export class DropdownComponent extends React.Component{
  static contextType = DriverContext
    render() {
        return(
            <DropdownContainer>
                <nav className= 'navbar'>
                    <ul className= 'drop-menu'>
                        <li className= 'drop-item'>
                            <Link to= '/currencies' className='drop-links'>
                                <img className="cur-icon" src="https://img.icons8.com/ios/16/000000/expand-arrow--v2.png"/>
                            </Link>
                                <ul className='dropdown-menu'>
                                    <Query query={ GET_CURRENCY }>
                                        {({ loading, data }) => {
                                            if (loading) return 'Loading';
                                            const { currencies } = data;
                                            return currencies.map(el => <li className='currencies'>{el.symbol + "   " + el.label}</li>)
                                        }}
                                    </Query>
                                </ul>
                        </li>
                        <li className= 'drop-item'>
                            <button className='drop-links' onClick={this.context.changeDropDownStatus}>
                                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/26/000000/external-shopping-cart-commerce-dreamstale-lineal-dreamstale.png"/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </DropdownContainer>
        )

    }
}
