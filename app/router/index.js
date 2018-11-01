import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';

import './router.less';
import asyncComponent from '../utils/asyncComponent';
const Production = asyncComponent(() => import('@/pages/production/production'));
const Record = asyncComponent( ()=> import('@/pages/record/record'));


export default class RouteConfig extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/production" component={Production}></Route>
                        <Route path="/record" component={Record}></Route>
                    <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        )
    }
}


