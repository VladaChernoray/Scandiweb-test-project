import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../../query/product.query";

  
export default class ProductComponent extends React.Component {
  

    state = {
        _id: this.props.params.id
    }

    render() {
       
          return(
            <Query 
                query={GET_PRODUCT }
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