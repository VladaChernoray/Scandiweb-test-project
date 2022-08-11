import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './component/header/header.component'
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
          <HeaderComponent/>
      </ApolloProvider>
    </React.StrictMode>
);

