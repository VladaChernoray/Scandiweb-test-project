import React, {Component} from "react";
import {GET_PRODUCT} from "../query/product.query";
import {useQuery} from "@apollo/client";

export class MainComponent extends React.Component {
    render(){
        return(
            <div>
                <Card/>
            </div>

        )
    }
}

export const CardContainer = () => {
}
export const Card = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.categories.map(({ name, products }) => (
        <div>
            <h3>{name}</h3>
            {products.map(({name, gallery}) => (
                <div>
                    <p>{name}</p>
                    <img src={gallery[0]}/>
                </div>
            ))}
        </div>
    ));
}
export default MainComponent;