import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./component/header.component";
import MainComponent from "./component/main.component";
import CategoryRoute from "./route/category.route";
import PdpRoute from "./route/pdp.route";
import CardRoute from "./route/card.route";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path='/category' element={<CategoryRoute/>} />
                    <Route path='/pdp' element={<PdpRoute/>} />
                    <Route path='/cart' element={<CardRoute/>}/>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);