import React from 'react';
import {  Link } from 'react-router-dom';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <ul>
                     <li><Link to="/user/1">user</Link></li>
                </ul>
            </div>
        )
    }
}