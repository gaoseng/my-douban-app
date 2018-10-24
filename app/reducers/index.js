import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter'

export default combineReducers({
    todos,
    visibilityFilter,
    counter
})