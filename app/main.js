
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router'

class App extends React.Component {
    render() {
        return (
            <AppRouter/>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
hello();
function hello({a,b} = {a:1,b:2}) {
    console.log(a);
}
