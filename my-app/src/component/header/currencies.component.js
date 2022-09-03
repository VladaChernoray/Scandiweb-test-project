import React from "react";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCY } from "../../query/currency.query";
import styled from "styled-components";
import { CurrenciesConsumer } from "../../context/currencies.context";

const Currencies = styled.div`
.dropdown-menu {
    font-family: 'Raleway', sans-serif;
    position: fixed;
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    right: 165px;
    top: 70px;
    background-color: white;
    z-index: 10;
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
`

export class CurrenciesComponent extends React.Component {
    render() {
        return(
            <CurrenciesConsumer>
              {(props) => props.isCurrenciesActive && (
             <Currencies>
                <ul className='dropdown-menu'>
                <Query query={ GET_CURRENCY }>
                     {({ loading, data }) => {
                        if (loading) return 'Loading';
                        const { currencies } = data;
                        return currencies.map(el => <li className='currencies'>{el.symbol + "   " + el.label}</li>)
                        }}
                        </Query>
                </ul>
            </Currencies>
              )}
            </CurrenciesConsumer>   
          )
        
    }
}