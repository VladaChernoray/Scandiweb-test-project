import React, {Component} from "react";
import {GET_PRODUCT} from "../query/product.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'

const CardContainer = styled.div`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  background-color: aliceblue;
  padding: 40px 0;

  .category {
    font-size: 42px;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 0;
    text-align: left;
    margin: 0 100px;
  }
  .card {
    display: inline-block;
    margin: 40px;
    }
  .card-image{
    object-fit: cover;
    object-position: right;
    width: 300px;
    height: 300px;
  }
  .card-title{
    text-align: start;
    font-size: 18px;}
`

export class MainComponent extends React.Component {
    render(){
        return(
            <div>
                <Card/>
            </div>

        )
    }
}

export const Card = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.categories.map(({ name, products }) => (
        <CardContainer>
            <h2 className='category'>{name}</h2>
            {products.map(({ name, gallery, prices }) => (
                <div className='card'>
                    <img className='card-image' src={gallery[0]}/>
                    <p className='card-title'>{name}</p>
                    {(prices).map(({amount, currency}) => (
                        <div>
                            <p>{amount}</p>
                        </div>
                    ))}
                </div>
            ))}

        </CardContainer>
    ));
}
export default MainComponent;