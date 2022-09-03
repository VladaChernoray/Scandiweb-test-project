import React from "react";
import styled from "styled-components";
import CurrenciesButtonComponent from "./currenciesButton.component";
import DraverButtonComponent from "./draverButton.component";

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
    padding: 0 30px;
    font-size: 18px;
  }
  
  .button {
    background: none;
    border: none;
  }
`
export class DropdownComponent extends React.Component{
    render() {
        return(
            <DropdownContainer>
                <nav className= 'navbar'>
                    <ul className= 'drop-menu'>
                        <li className= 'drop-item'>
                          <CurrenciesButtonComponent/>
                        </li>
                        <li className= 'drop-item'>
                          <DraverButtonComponent/>
                        </li>
                    </ul>
                </nav>
            </DropdownContainer>
        )

    }
}
