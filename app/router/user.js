import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import User from '../pages/user/user'

const UserRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/user/first">user</Link></li>
                </ul>
                <Switch>
                    <Route path="/user/first" component={User}>user</Route>
                </Switch>
            </div>
        </Router>
    )
}

export default UserRouter;