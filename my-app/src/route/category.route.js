import React from "react";
import HeaderComponent from "../component/header/header.component";
import MainComponent from "../component/main/main.component";
import { DraverComponent } from "../component/header/draver.component";
import { CurrenciesComponent } from "../component/header/currencies.component";

export default class CategoryRoute extends React.Component {
    render() {
        return(
            <div>
                <DraverComponent/>
                <CurrenciesComponent/>
                <HeaderComponent/>
                <MainComponent/>
            </div>
        )
    }
}
