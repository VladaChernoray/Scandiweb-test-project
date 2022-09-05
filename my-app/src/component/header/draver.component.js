import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DraverConsumer, DraverContext } from "../../context/draver.context";

const Draver = styled.div`
  font-family: 'Raleway', sans-serif;
  left: 0;
  top: 0;
  background-color: rgba(57, 55, 72, 0.22);
  width: 100%;
  height: 100%;
  position: fixed;
  .drawer{
    position: absolute;
    width: 325px;
    right: 75px;
    top: 90px;
    border-radius: 0;
    padding: 0 16px;
    background-color: white;
    gap: 32px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 500px;
    max-height: 50vh;
  }
  .cart-title{
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
  .cart-product {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
  }
  .size-box {
    display: inline-block;
    
  }
  .cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0;
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
    height: 45px;
    width: 140px;
    background: none;
    color: black;
  }
  .cart-button:nth-child(2){
    background-color: #5ECE7B;
    color: white;
    border: none;
  }
  .cart-image{
    width: 100px;
    height: 100px
  }
}
.product-color{
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
.product-color-cont{
  display: inline-block;
}
  
.cart-button-link {
  text-decoration: none;
  color: black;
}
.two{
  color: white;
}

`
export class DraverComponent extends React.Component {
  static contextType = DraverContext
  
  
    render() {
       const products = JSON.parse(localStorage.getItem('products'))      

        return(
          <DraverConsumer>
            {(props) => props.isDraverActive && (
              <Draver>
                    <div className='drawer'>
                      {products.map(product => (
                        <div className='cart-container'>
                            <b className='cart-title'>My bag</b>
                            <div className='cart-product'>
                                <div>
                                    <p className="cart-product-name">{product.name}</p>
                                    <div className='cart-product-size'>
                                    {product.attributes.map(a => (
                                      a.items.map(i => (
                                      <button className="attributes-size" id="size">{i.value}</button>))))}
                                    </div>
                                    <div className="cart-product-color">
                                    {product.attributes.map(a => ( a.items.map(i => (
                                    <div className="product-color-cont">
                                      <div style={{backgroundColor: i.value}} className="product-color"></div>
                                      </div>
              ))
            ))}
                                    </div>
                                </div>
                              
                
                                <div>
                                <input className="cart-quantity" type="button" value="-" onClick={()=>this.props.decrement(this.props.quantity)}/>
                                <div>{this.props.quantity}</div>
                                <input className="cart-quantity" type="button" value="+" onClick={()=>this.props.increment(this.props.quantity)}/>
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
                        </div>))}
                        <div className='cart-button-container'>
                                <button className='cart-button'>
                                  <Link  to={`/cart/`} className='cart-button-link'> VIEW BAG</Link>
                                  </button>
                                <button className='cart-button'>
                                  <Link to={`/category/`} className='cart-button-link two'>CHECK OUT</Link>
                                  </button>
                            </div>
  
                    </div>
                </Draver>
            ) 
            }
          </DraverConsumer>   
        )
    }
}