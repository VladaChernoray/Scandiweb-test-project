import { Query } from "@apollo/client/react/components";
import React from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../component/header/header.component";
import { GET_PRODUCT } from "../query/product.query";
import ProductComponent from "../component/pdp/product.component";
import { DraverComponent } from "../component/header/draver.component";
import { CurrenciesComponent } from "../component/header/currencies.component";
import { CartContext } from "../context/cart.context";
import { DraverContext } from "../context/draver.context";

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
                  const { addToCart } = this.props
                    const { product } = data;
                    return (
                            <div>
                                <CurrenciesComponent/>
                                <DraverComponent />
                                <HeaderComponent/>
                                 <ProductComponent {...product}/>
                            </div>
                    )
                }}
            </Query>

        )
    }
}

export default withRouter(PdpRoute);
