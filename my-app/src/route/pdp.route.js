import React from "react";
import HeaderComponent from "../component/header/header.component";
import {PdpComponent} from "../component/main/pdp.component";

export default class PdpRoute extends React.Component{
    render() {
        return(
            <div>
                <HeaderComponent/>
                <PdpComponent/>
            </div>
        )
    }
}
