import React from "react";
import HeaderComponent from "../component/header.component";
import {PdpComponent} from "../component/pdp.component";

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
