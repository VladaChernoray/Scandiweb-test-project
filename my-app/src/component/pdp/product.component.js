import React from "react";
import styled from "styled-components";

const PDP = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`
const ProductDetails = styled.div`
`
const ProductImage = styled.div`
`
class ProductDescription extends React.Component{
  render() {
    return(
      <ProductDetails>
        <h1>{this.props.id}</h1>
      </ProductDetails>
    )
  }
}
  
export default class ProductComponent extends React.Component {
  render() {

    const attributesColor = this.props.attributes.filter(a => a.id === 'Color')

    return(
      <PDP>
         <ProductImage>
            <div className='product-image-side'>
                <img src={this.props.gallery[0]}/>
                <img src={this.props.gallery[1]}/>
                <img src={this.props.gallery[2]}/>
            </div>
            <div className='product-image-main'>
            <img src={this.props.gallery[3]}/>
            </div>
        </ProductImage>
        <ProductDetails>
          <b>{this.props.name}</b>
          <p>SIZE:</p>
          {attributesColor.map(a => (
            <p>{a.items.map(i => i.value)}</p>
          ))}
        </ProductDetails>
      </PDP>
    )
  }
}
