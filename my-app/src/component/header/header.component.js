import React, {Component, useState} from "react";
import styled from 'styled-components'
import {NavbarComponent} from "./navbar.component";
import {LogoComponent} from "./logo.component";
import {DropdownComponent} from "./dropdown.component";


const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 25px 80px;
  position: relative;
  z-index: 100;
  background-color: white;
`
const Container = styled.div`
  margin: 0;
  position: fixed;
  width: 100%;
`

export class HeaderComponent extends React.Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <NavbarComponent/>
                    <LogoComponent/>
                    <DropdownComponent/>
                </HeaderContainer>
            </Container>

        );
    }
}


export default HeaderComponent;