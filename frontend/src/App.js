import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store"

import TodoNote from "./components/NoteApp";
import NotFound from "./components/NotFound";


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TodoNote} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
