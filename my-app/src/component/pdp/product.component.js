import React from "react";
import styled from "styled-components";
import innerText from "jsx-inner-text";

const PDP = styled.div`
display: block;
padding: 100px 0 0;
font-family: 'Raleway', sans-serif;

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.product-color{
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
.product-color-cont{
  display: inline-block;
}

.cart-button {
  font-family: Raleway;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0;
  text-align: center;
  height: 45px;
  width: 140px;
  background-color: #5ECE7B;
  color: white;
  border: none;
  margin: 10px 0;
}
.product-image-side {
  display: block;
}
.product-image-main {
  display: inline-flex;
}
.product-image-small {
  width: 80px;
  height: 80px;
  display: block;
  margin: 10px;
  object-fit: cover;
}
.product-image-big {
  width: 450px;
  height: 450px;
  object-fit: cover;
}
.product-details{
  padding-right: 50px;
}
.product-title{
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
}
.product-attributes{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  margin: 10px 0;
}
.attributes-size{
  display: inline;
  width: 65px;
  height: 45px;
  text-align: center;
  margin-right: 12px;
  background-color: white;
  border: 1px solid #1D1F22;
}
#size:focus{
  background-color: black;
  color: white;
}
.product-description-cont{
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
width: 350px;

}
`
function onAddToCart(item){
  this.setState({
    cart: [...this.state.cart, item]
  })
}

export default class ProductComponent extends React.Component {
  render() {
    const attributesName = this.props.attributes.filter(b => b.name === 'Color')
    const attributesColor = this.props.attributes.filter(a => a.id === 'Color')
    const attributesPrice =  this.props.prices.filter(a => a.label ===  "USD")
    const attributesSize = this.props.attributes.filter(a => a.id === 'Size')
    const attributesSizeName = this.props.attributes.filter(b => b.name === 'Size')
    

    return(
      <PDP>
        <div className="container">
        <div className='product-image product-image-side'>
              {this.props.gallery.map(a =>(
                  <img src={a} className="product-image-small"/>
              ))}
            </div>
            <div className='product-image product-image-main'>
              <img src={this.props.gallery[0]} className="product-image-big"/>
            </div>
        <div className="product-details product-container">
          <b className="product-title">{this.props.name}</b>
          {attributesSizeName.map(b => (
            <p className="product-attributes">{b.name}</p>
          ))}
          {attributesSize.map(a => (
            a.items.map(i => (
                <button className="attributes-size" id="size">{i.value}</button>)
              )
            ))}
          {attributesName.map(b => (
            <p className="product-attributes">{b.name}</p>
          ))}
          {attributesColor.map(a => (
            a.items.map(i => (
              <div className="product-color-cont">
                  <div style={{backgroundColor: i.value}} className="product-color"></div>
              </div>
              ))
            ))}
          {attributesPrice.map(a => (
            <p>{a.label}</p>
          ))}
          <div className='cart-button-container'>
             <button className='cart-button' onClick={this.props.onAddToCart}>ADD TO CART</button>
          </div>  
          <div>
            </div>    
            <div className="product-description-cont">
            <p className="product-description">{innerText(this.props.description.replace( /(<([^>]+)>)/ig, ''))}</p>
            </div>
        </div>
        </div>
      </PDP>
    )
  }
}
