import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>Person</div>
        )
    }
}