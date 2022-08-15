import React, {Component, useState} from "react";
import {GET_CURRENCY} from "../query/currency.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'
import {Link, NavLink} from "react-router-dom";


const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  padding: 30px 0;
  position: relative;
`
const NavbarContainer = styled.nav`
  .nav-menu {
    list-style: none;
  }

  .nav-item {
    display: inline-block;
    padding: 0 30px;
  }
  .nav-links {
    position: relative;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    vertical-align: center;
    color: black;
   }
  .link-hover:after {
    content: "";
    position: absolute;
    background-color: #52D67A;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.4s;
  }
  .link-hover:hover:after {
    width: 100%;
  }
  .dropdown-menu {
    position: absolute;
    list-style: none;
    text-align: start;
  }
  .dropdown-menu li{
      background-color: burlywood;
    cursor: pointer;
  }
  .dropdown-menu.clicked {
    display: none;
  }
`
const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
`
const DropdownContainer = styled.ul`
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  list-style: none;
  text-decoration: none;
`
export class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer>
                    <Navbar/>
                    <Logo/>
                    <Dropdown/>
                </HeaderContainer>
            </div>
        );
    }
}

export const Navbar = () => {
        const [click, setClick] = useState(false);
        const [dropdown, setDropdown] = useState(false);

        const handleClick = () => setClick(!click);

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
            <img src="https://img.icons8.com/ios-filled/36/52d67a/shopping-bag.png"/>
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
        <NavbarContainer>
            <nav className= 'navbar'>
                <ul className= 'nav-menu'>
                    <li className= 'nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <Link to= '/currencies' className='nav-links'>
                            <img src="https://img.icons8.com/ios/24/000000/expand-arrow--v2.png"/>
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
                    <li className= 'nav-item'>
                        <Link to= '/' className='nav-links'>
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-shopping-cart-commerce-dreamstale-lineal-dreamstale.png"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavbarContainer>
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