import React, {Component, useState} from "react";
import {GET_CURRENCY} from "../query/currency.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'
import {Link, NavLink} from "react-router-dom";


const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 25px 0;
`
const NavbarContainer = styled.nav`
  .nav-item {
    display: inline;
  }
  .nav-links {
    position: relative;
    font-family: 'Raleway', sans-serif;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    color: black;
    padding: 0 15px;
  }
  .link-hover:after {
    content: "";
    position: absolute;
    background-color: #52D67A;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -30px;
    transition: 0.4s;
  }
  .link-hover:hover:after {
    width: 100%;
  }
`
const LogoContainer = styled.nav`
  text-align: center;
  .logo-image{
  }
`
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
    }
  .dropdown-menu {
    position: absolute;
    list-style: none;
    text-align: start;
  }
  .dropdown-menu li{
    cursor: pointer;
  }
  .dropdown-menu.clicked {
    display: none;
  }
 
`
export class HeaderComponent extends React.Component {
    render() {
        return (
                <HeaderContainer>
                    <Navbar/>
                    <Logo/>
                    <Dropdown/>
                </HeaderContainer>
        );
    }
}

export const Navbar = () => {
        const [click] = useState(false);
    return (
        <NavbarContainer>
            <nav className= 'navbar'>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className= 'nav-item'>
                        <Link to= '/' className='nav-links link-hover'> WOMEN</Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/' className='nav-links link-hover'>MEN</Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to= '/' className='nav-links link-hover'>KIDS</Link>
                    </li>
                </ul>
            </nav>
        </NavbarContainer>
    )
}

export const Logo = () => {
    return(
        <LogoContainer>
            <img className="logo-image" src="https://img.icons8.com/ios-filled/36/52d67a/shopping-bag.png"/>
        </LogoContainer>
    )
}
export const Dropdown = () => {
    const { click, setClick } = useState(false);
    const handleClick = () => setClick(!click);
    const {dropdown, setDropdown} = useState(false);

    const { loading, error, data } = useQuery(GET_CURRENCY);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) setDropdown(false);
        else setDropdown(true)
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) setDropdown(false);
        else setDropdown(false)
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
            <DropdownContainer>
                <nav className= 'navbar'>
                    <ul className= 'drop-menu'>
                        <li className= 'drop-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link to= '/currencies' className='drop-links'>
                                <img src="https://img.icons8.com/ios/16/000000/expand-arrow--v2.png"/>
                            </Link>
                            {dropdown &&
                                <ul onClick={handleClick}
                                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                                    {data.currencies.map(({label, symbol}) => {
                                        return (
                                            <li>
                                                <Link to='/' onClick={() => setClick(false)}>
                                                    {symbol + " " + label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </li>
                        <li className= 'drop-item'>
                            <Link to= '/' className='drop-links'>
                                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/26/000000/external-shopping-cart-commerce-dreamstale-lineal-dreamstale.png"/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </DropdownContainer>
        )


}
/*export const DropdownList = () => {
    const { loading, error, data } = useQuery(GET_CURRENCY);
    const [state, setstate] = useState(false);
    const showDropdown = () => {setstate(true)}
    const hideDropdown = () => {setstate(false)}

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="dropdown">
            <div className=" dropdown-menu" onMouseEnter={showDropdown()} onMouseLeave={hideDropdown()}>
                <ul onMouseEnter={showDropdown}>
                    {data.currencies.map(({ label, symbol }) => {
                        return (
                            <li>
                                {symbol + " " + label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}*/

export default HeaderComponent;