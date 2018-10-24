
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import {increment, decrement, addTodo} from './action';
import { store } from './store/store'


// const store = createStore(rootReducer);
class App extends React.Component {

    render() {
        // 可以手动订阅更新，也可以事件绑定到视图层。
        store.subscribe(() =>
            console.log(store.getState())
        );

        // 改变内部 state 惟一方法是 dispatch 一个 action。
        // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
        store.dispatch(increment());
        // 1
        store.dispatch(increment());
        // 2
        store.dispatch(increment());
        store.dispatch(addTodo('test addTodo'));
        // 1
        console.log(store);
        return (
            <Provider store={store}>
                <AppRouter />
                
            </Provider>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));





