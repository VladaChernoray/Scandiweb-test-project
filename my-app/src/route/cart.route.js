import React from "react";
import HeaderComponent from "../component/header/header.component";
import MainComponent from "../component/main/main.component";
import {DraverComponent} from "../component/header/draver.component";
import { DraverProvider } from "../context/draver.context";
import CartProductComponent from "../component/cart/cartproduct.component";

export default class CartRoute extends React.Component {


    state = {
        isDraverActive: false
    }
    changeDraverStatus = () => {
        this.setState(state => ({
            isDraverActive: !this.state.isDraverActive
        }))
    }

    render() {
        return(
            <div>
                <DraverProvider value={{
                    isDraverActive: this.state.isDraverActive, 
                    changeDraverStatus: this.changeDraverStatus}}
                >
                    <DraverComponent/>
                    <HeaderComponent/>
                    <CartProductComponent/>     
                </DraverProvider>
            </div>
        )
    }
}
