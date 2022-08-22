import React from "react";
import {GET_CATEGORY} from "../../query/category.query";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Query} from "@apollo/client/react/components";


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
    box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px;
  }
  .card-image{
    object-fit: cover;
    object-position: right;
    width: 250px;
    height: 250px;
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
export class Card extends React.Component {
    render() {
        return(
            <Query query={ GET_CATEGORY }>
                {({data}) => {
                    const { categories } = data;
                    return categories.map(({name, products}) => (<CardContainer>
                        <h1 className='category'>{name}</h1>
                        {products.map(({name, id, inStock, gallery, prices}) =>(
                            <div className={'card card-active'}>
                                <img className='card-image' src={gallery[0]}/>
                                <Link to={`/cart/${id}`} className='card-link'>
                                    <p>{id}</p>
                                    <p className='card-title'>{name}</p>
                                </Link>
                            </div>
                        ))}
                    </CardContainer>))
                }}
            </Query>
        )
    }
}