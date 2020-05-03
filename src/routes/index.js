import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Business from '../pages/Business';
import ContactUs from '../pages/ContactUs';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/aboutUs" component={AboutUs}/>
            <Route exact path="/business" component={Business}/>
            <Route exact path="/contact" component={ContactUs}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;