import React from "react";
import styled from "styled-components";

const LogoContainer = styled.nav`
  text-align: center;
  .logo-image{
  }
`
export class LogoComponent extends React.Component{
    render() {
        return(
            <LogoContainer>
                <img className="logo-image" src="https://img.icons8.com/ios-filled/36/52d67a/shopping-bag.png"/>
            </LogoContainer>
        )
    }


}