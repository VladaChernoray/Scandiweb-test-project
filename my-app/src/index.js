import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider, ApolloClient, InMemoryCache,} from "@apollo/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryRoute from "./route/category.route";
import PdpRoute from "./route/pdp.route";
import CartRoute from './route/cart.route';

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
                    <Route path='/cart' element={<CartRoute/>}/>
                    <Route path="/pdp/:id" element={<PdpRoute />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);