import { combineReducers } from 'redux'
import { ADD_TODO_ITEM, UPDATE_ITEM_STATUS, DELETE_ITEM } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === ADD_TODO_ITEM) {
        return [action.payload,...state];
    }
    if (action.type === UPDATE_ITEM_STATUS) {
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    if (action.type === DELETE_ITEM) {
        return state.filter(todo => todo.id !== action.payload);
    }
    return state;


}

export default combineReducers(
    {
        ToDos
    }
)

