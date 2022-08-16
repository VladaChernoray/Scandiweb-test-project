import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import HeaderComponent from "./component/header.component";
import MainComponent from "./component/main.component";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <HeaderComponent/>
                <MainComponent/>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);