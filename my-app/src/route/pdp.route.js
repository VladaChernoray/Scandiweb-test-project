import { Query } from "@apollo/client/react/components";
import React from "react";
import { withRouter } from "react-router-dom";
import { DraverComponent } from "../component/header/draver.component";
import HeaderComponent from "../component/header/header.component";
import ProductComponent from "../component/pdp/product.component";
import { GET_PRODUCT } from "../query/product.query";

class PdpRoute extends React.Component{
    render() {
        const { id } = this.props.match.params

        return(
            <Query 
                query={GET_PRODUCT}
                variables={{ id }}
            >
                {({loading, data}) => {
                  if (loading) return 'Loading';
                    const { product } = data;
                    return (
                        <>
                        <HeaderComponent/>
                        <ProductComponent {...product} />
                        </>
                      
                    )
                }}
            </Query>

        )
    }
}

export default withRouter(PdpRoute);
