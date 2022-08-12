import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './component/header/header.component'
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

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
          </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
);

