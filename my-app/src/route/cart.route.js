import React, { Component } from "react";
import HeaderComponent from "../component/header/header.component";
import { useParams } from "react-router-dom";
import { ProductComponent } from "../component/product.component";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../query/product.query";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
  
class CartRoute extends React.Component {

    render() {
          return(
            <div>
                <h1>this.props.params.id</h1>
                <Query query = {GET_PRODUCT}>
                {({data}) => {
                    const { product } = data;
                    return(
                        product.map(({id}) => (
                            <h1>FFF{id}</h1>
                        ))
                    )
                }
                 
                }
            </Query>
            </div>
          )
      }
  }
  
  export default withParams(CartRoute);