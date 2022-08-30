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
    state = {
        _id: this.props.params.id
    }
   
    render() {
          return(
            <Query 
                query={ GET_PRODUCT }
                variables={{id: this.state._id}}
            >
                {({loading, data}) => {
                  if (loading) return 'Loading';
                    const { name, category } = data.product;
                    return (
                      <p>{name  + category}</p>
                    )
                }}
            </Query>
          )
      }
  }
  
  export default withParams(CartRoute);