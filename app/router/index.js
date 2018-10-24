import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import Home from '../pages/home/home';
import User from '../pages/user/user';
import Person from '../pages/user/person/person';
// import AddTodo from '../pages/addTodo/addTodo';

const appRouter = ()=> {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/user">user</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/user" component={User}></Route>
                    <Route exact path="/user/:userId" component={Person}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default appRouter;
