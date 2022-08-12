import React, {Component, useState} from "react";
import {GET_CURRENCY} from "../../query/currency.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const NavbarContainer = styled.nav`
  .navbar {
    display: flex;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: cadetblue;
  }
  
  .nav-menu {
    display: flex;
    height: 60px;
    align-items: center;
    margin: auto
  }

  .nav-item {
    display: flex;
    background-color: cadetblue;
    align-items: center;
    height: 80px;
  }
  .nav-links {
    align-items: center;
    position: relative;
    text-decoration: none;
    font-size: 18px;
    padding: 0 10px ;
  }

  .nav-links:after{
    content: "";
    position: absolute;
    background-color: aqua;
    width: 0;
    height: 3px;
    left: 0;
    bottom: -10px;
    transition: 0.2s;
  }
  .nav-links:hover:after{
    width: 100px
  }

  
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
  }
`
const DropdownContainer = styled.ul`
  .dropdown-menu {
    width: 200px;
    position: absolute;
    top: 30px;
    list-style: none;
    text-align: start;
  }
  
  .dropdown-menu li {
    cursor: pointer;
  }
  
  .dropdown-menu.clicked {
    display: none;
  }
`

export class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
               <Navbar/>
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
                <div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                            <Link to= '/' className='nav-links'>WOMEN</Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/' className='nav-links'>MEN</Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/' className='nav-links'>KIDS</Link>
                        </li>
                        <div className='menu-icon' onClick={handleClick}></div>
                        <li className='nav-item'>
                            <Link to='/currencies' className='nav-link'>
                                $<FontAwesomeIcon icon="fas fa-angle-down" />
                                <Dropdown/>
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}

export const Dropdown = () => {
    const { loading, error, data } = useQuery(GET_CURRENCY);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <DropdownContainer>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {data.currencies.map(({ label, symbol }) => {
                    return (
                        <li>
                            <Link to='' onClick={() => setClick(false)}>{symbol}{ label}</Link>
                        </li>
                    )
                })}
            </ul>
        </DropdownContainer>

    )
}

export default HeaderComponent;