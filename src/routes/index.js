import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Business from '../pages/Business';
import Team from '../pages/Team';
import ContactUs from '../pages/ContactUs';
import Partner from '../pages/Partner';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/aboutUs" component={AboutUs}/>
            <Route path="/business" component={Business}/>
            <Route path="/team" component={Team}/>
            <Route path="/contact" component={ContactUs}/>
            <Route path="/partner" component={Partner}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
