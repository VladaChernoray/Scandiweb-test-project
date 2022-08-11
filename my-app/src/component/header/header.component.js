import React, {Component} from "react";
import {GET_CURRENCY} from "../../query/currency.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  ul {
    list-style: none;
    display: flex;
  }
  li {
    display: flex;
    border-bottom-color: aqua;
  }
 
  li a {
    text-decoration: none;
    padding: 30px;
  }
  li.active {
    border-color: aqua;
  }
`

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            </div>
        );
    }

}

export const Navbar = () => {
    return (
        <navbar>
            <NavbarContainer>
                <ul>
                    <li><a href="/women">WOMEN</a></li>
                    <li><a href = "/men">MEN</a></li>
                    <li><a href = "/kids">KIDS</a></li>
                </ul>
            </NavbarContainer>
        </navbar>
    )
}

export const DisplayDropdown = () => {
    const { loading, error, data } = useQuery(GET_CURRENCY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.currencies.map(({ label, symbol }) => (
        <div>
            <h3>{label}</h3>
            <h3>{symbol}</h3>
        </div>
    ));
}

export default HeaderComponent;