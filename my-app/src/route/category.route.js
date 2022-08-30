import React from "react";
import HeaderComponent from "../component/header/header.component";
import MainComponent from "../component/main/main.component";
import {DraverComponent} from "../component/header/draver.component";
import styled from "styled-components";
import { DriverProvider } from "../context/DrawerContext";

export default class CategoryRoute extends React.Component {
    state = {
        isDropDownActive: false
    }
    changeDropDownStatus = () => {
        this.setState(state => ({
            isDropDownActive: !this.state.isDropDownActive
        }))
    }

    render() {
        return(
            <div>
                <DriverProvider value={{
                    isDropDownActive: this.state.isDropDownActive, 
                    changeDropDownStatus: this.changeDropDownStatus}}
                >
                    <DraverComponent/>
                    <HeaderComponent/>
                </DriverProvider>
                <MainComponent/>
            </div>
        )
    }
}
