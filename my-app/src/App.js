import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryRoute from "./route/category.route";
import PdpRoute from "./route/pdp.route";
import CartRoute from './route/cart.route';
import { DraverProvider } from './context/draver.context';
import { CurrenciesProvider } from './context/currencies.context';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

class App extends React.Component {
    state = {
        isDraverActive: false,
        isCurrenciesActive: false
        
    }
    changeDraverStatus = () => {
        this.setState(state => ({
            isDraverActive: !state.isDraverActive
        }))
    }
    changeCurrenciesStatus = () => {
        this.setState(state => ({
            isCurrenciesActive: !state.isCurrenciesActive
        }))
    }

    render() {
        return (
            <React.StrictMode>
                <ApolloProvider client={client}>
                    <DraverProvider value={{
                        isDraverActive: this.state.isDraverActive, 
                        changeDraverStatus: this.changeDraverStatus}}
                    >
                        <CurrenciesProvider value={{
                        isCurrenciesActive: this.state.isCurrenciesActive, 
                        changeCurrenciesStatus: this.changeCurrenciesStatus}}>
                        <BrowserRouter>
                            <Switch>
                                <Route path='/category'>
                                    <CategoryRoute/>
                                </Route>

                                <Route path='/cart'>
                                    <CartRoute/>
                                </Route>
                                
                                <Route path="/pdp/:id">
                                    <PdpRoute/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                        </CurrenciesProvider>
                        
                    </DraverProvider>
                </ApolloProvider>
            </React.StrictMode>
        )
    }
}

export default App