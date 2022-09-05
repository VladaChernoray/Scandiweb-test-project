import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartProduct = styled.div`
font-family: 'Raleway', sans-serif;
width: 100%;
height: 100%;
padding: 100px 0 50px;
display: flex;
justify-content: center;

.cart-title{
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
}
.cart-product {
  display: grid;
  grid-template-columns: 11fr 2fr 3fr;
}
.cart-container-line{
    margin: 25px 0;
}
.cart-line {
    border: none;
    height: 1px;
    background-color: #E5E5E5;
}
.size-box {
  display: inline-block;
  
}
.cart-product-name{
font-size: 30px;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
font-weight: 600;
}
.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  padding: 32px 0 ;
}
.cart-button-container{
  display: flex;
  justify-content: space-between;
}
.cart-button {
  font-family: Raleway;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0;
  text-align: center;
  background-color: #5ECE7B;
  color: white;
  border: none;
  height: 43px;
  width: 279px; 
  padding: 16px 32px;
 
}
.cart-image{
    height: 290px;
    width: 200px;
    object-fit: cover;
}
.product-color{
width: 32px;
height: 32px;
margin-right: 12px;
}
.product-color-cont{
display: inline-block;
}
.quantity-button {
    display: block;
    width: 45px;
    height: 45px;
    border: 1px solid #1D1F22;
    background: none;
}
.quantity-input{
    height: 180px;
    width: 45px;
    border: none;
    text-align: center;
    outline:none;
}
.quanty-input:focus{
    border: none;
    outline:none;
}

.cart-button-link {
text-decoration: none;
color: black;
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
`

export default class CartProductComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {value: 1}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
      }
      increment() {
        this.setState(prevState => ({value: ++prevState.value}))
      }
      
      decrement() {
        this.setState(prevState => ({value: prevState.value > 0? --prevState.value : 0}))
      }
      
    render() {
        const products = JSON.parse(localStorage.getItem('products'))
        
        console.log(products)

        
         return(
               <CartProduct>
                     <div className='cart-products-container'>
                     <p className='cart-title'>CART</p>
                     <div className="cart-container-line">
                        <hr className="cart-line"/>
                     </div>
                       {products.map(product => (
                         <div className='cart-container'>
                             <div className='cart-product'>
                                 <div>
                                     <p className="cart-product-name">{product.name}</p>
                                     <div className='cart-product-size'>
                                     {product.attributes.filter(a => a.name === 'Size').map(b => (
                                     <p className="product-attributes">{b.name}</p>
                                     ))}
                                     {product.attributes.filter(a => a.id === 'Size').map(a => (
                                       a.items.map(i => (
                                       <button className="attributes-size" id="size">{i.value}</button>))))}
                                     </div>
                                     <div className="cart-product-color">
                                     {product.attributes.filter(a => a.name === 'Color').map(b => (
                                     <p className="product-attributes">{b.name}</p>
                                     ))}
                                     {product.attributes.filter(a => a.id === 'Color').map(a => ( a.items.map(i => (
                                     <div className="product-color-cont">
                                       <div style={{backgroundColor: i.value}} className="product-color"></div>
                                       </div>
                                        ))))}
                                     </div>
                                 </div>
                                 <div className="quantity-input">
                                    <button className="quantity-button" onClick={this.decrement}>
                                        &mdash;</button>
                                        <input className="quantity-button quantity-input" type="text" value={this.state.value} readonly />
                                        <button className="quantity-button" onClick={this.increment}>
                                        &#xff0b;
                                        </button>  
                                        </div>  
                                 <div className='cart-product-image'>
                                   <img className="cart-image" src={product.gallery[0]}/>
                                 </div>
                             </div>
                             <div className='cart-total'>
                                 <b></b>
                                 <b></b>
                             </div>
                           
                             <div>
    
                             </div>
                             <div className="cart-container-line">
                                 <hr className="cart-line"/>
                                 </div>
                         </div>))}
                         <div className='cart-button-container'>
                                 <button className='cart-button'>ORDER</button>
                             </div>
                             
                     </div>
                 </CartProduct>
             ) 
             } 
     }