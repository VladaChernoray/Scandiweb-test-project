import React from "react";
import styled from "styled-components";
import { DraverConsumer } from "../../context/draver.context";

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
    padding: 32px 16px;
    background-color: white;
    gap: 32px;
  }
  .cart-title{
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
  .cart-product {
    display: grid;
    grid-template-columns: 2fr 1fr;
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
  
`
export class DraverComponent extends React.Component {
    render() {
        return(
          <DraverConsumer>
            {(props) => props.isDraverActive && (
              <Draver>
                    <div className='drawer'>
                        <div className='cart-container'>
                            <b className='cart-title'>My Bag</b>
                            <div className='cart-product'>
                                <div>
                                    <p>Apollo Running Short</p>
                                    <b>50$</b>
                                    <div className='cart-product-size'>
                                        <div className='size-box'>XS</div>
                                        <div className='size-box'>S</div>
                                        <div className='size-box'>M</div>
                                        <div className='size-box'>L</div>
                                    </div>
                                </div>
                                <div className='cart-product-image'>
                                    <p>IMAGE PLACE</p>
                                </div>
                            </div>
                            <div className='cart-total'>
                                <b>Total</b>
                                <b>200.00$</b>
                            </div>
                            <div>
                            <p>
                        <input className="ip" type="button" value="-" onClick={()=>this.props.decrement(this.props.quantity)}/>
                        <input className="ip" id="tx-w" type="text" value={this.props.quantity}/>
                        <input className="ip" type="button" value="+" onClick={()=>this.props.increment(this.props.quantity)}/>
                </p> 
                            </div>
                            <div className='cart-button-container'>
                                <button className='cart-button'>VIEW BAG</button>
                                <button className='cart-button'>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </Draver>
            ) 
            }
          </DraverConsumer>   
        )
    }
}