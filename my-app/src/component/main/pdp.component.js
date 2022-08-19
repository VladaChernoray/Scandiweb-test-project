import React from "react";
import styled from "styled-components";

const PDP = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`

export class PdpComponent extends React.Component {
    render(){
        return(
            <PDP>
                <ProductImage/>
            </PDP>
        )
    }
}

const ProductImage = () => {
    return(
        <div className='product-image'>
            <div className='product-image-side'>
                <img src='/my-app/public'/>
                <img src='/my-app/public'/>
                <img src='/my-app/public'/>
            </div>
            <div className='product-image-main'>
                <img src='/my-app/public'/>
            </div>
        </div>
    )
}
const ProductDescription = () => {
}