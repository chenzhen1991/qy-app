import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactUs from '../pages/ContactUs';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/contact" component={ContactUs}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;