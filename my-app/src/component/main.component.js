import React, {Component, useState} from "react";
import {GET_PRODUCT} from "../query/product.query";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {click} from "@testing-library/user-event/dist/click";

const CardContainer = styled.div`
  text-align: center;
  font-family: 'Raleway', sans-serif;
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
    margin: 30px;
    padding: 16px;
    text-decoration: none
    }
  .card-active{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
  .card-image{
    object-fit: cover;
    object-position: right;
    width: 300px;
    height: 300px;
  }
  .card-link:link{
    text-decoration: none!important;
  }
  .card-title{
    color: black;
    text-align: start;
    font-size: 18px;
  }
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
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    }


    const { loading, error, data } = useQuery(GET_PRODUCT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.categories.map(({ name, products }) => (
        <CardContainer>
            <h2 className='category'>{name}</h2>
            {products.map(({ name, gallery, prices }) => (
                    <div
                        onClick={handleClick}
                         className='card card-active '>
                        <img className='card-image' src={gallery[0]}/>
                        <Link to='/cart' className='card-link'>
                            <p className='card-title'>{name}</p>
                            {(prices).map(({amount, currency}) => (
                                <div>
                                    {/*(prices).map(({amount, currency}) => ()
                                    <p>{amount}</p>
                                    {currency.map(({label, symbol}) => (
                                        <p>{label + symbol}</p>
                                    ))}
                                </div>
                            ))
                            */}
                                </div>
                            ))}
                        </Link>

                    </div>

            ))}

        </CardContainer>
    ));
}
export default MainComponent;