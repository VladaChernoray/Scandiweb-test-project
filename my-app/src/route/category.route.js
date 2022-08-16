import React from "react";
import HeaderComponent from "../component/header.component";
import MainComponent from "../component/main.component";

export default class CategoryRoute extends React.Component {
    render() {
        return(
            <div>
                <HeaderComponent/>
                <MainComponent/>
            </div>
        )
    }
}
