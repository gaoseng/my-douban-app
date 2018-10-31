import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';

import './router.less';
import asyncComponent from '../utils/asyncComponent';
const Production = asyncComponent(() => import('@/pages/production/production'));


export default class RouteConfig extends Component {
    
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="footer">
                        <li><Link to="/">热映</Link></li>
                        <li><Link to="/production">产品</Link></li>
                        
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/production" component={Production}></Route>
                        
                    <Redirect to="/" />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}


