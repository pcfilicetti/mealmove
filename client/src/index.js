import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root"));
