import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    );
}

export default Routes;