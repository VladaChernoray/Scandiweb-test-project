import React from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../component/pdp/product.component";


function withParams(Component) {
    return props => <Component {...props} params={useParams} />;
  }
class PdpRoute extends React.Component{
    constructor(props) {
        super(props)
    }
 

    render() {
        return(
            <ProductComponent/>

        )
    }
}
export default withParams(PdpRoute);
